const cache = {};

const VOICES = {
  quiz: { name: "en-US-Neural2-F", ssmlGender: "FEMALE" },
  girl: { name: "en-US-Neural2-C", ssmlGender: "FEMALE" },
  boy: { name: "en-US-Neural2-D", ssmlGender: "MALE" },
};

const webSpeechFallback = (text) => {
  return new Promise((resolve) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
};

export const speak = async (text, voiceType = "quiz") => {
  if (!text) return;

  const key = import.meta.env.VITE_GOOGLE_TTS_KEY;

  if (!key) {
    await webSpeechFallback(text);
    return;
  }

  const cacheKey = `${voiceType}:${text}`;

  const playAudio = (url) => {
    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
      audio.play().catch(() => resolve());
    });
  };

  if (cache[cacheKey]) {
    await playAudio(cache[cacheKey]);
    return;
  }

  const voice = VOICES[voiceType] || VOICES.quiz;

  try {
    console.log("voiceType:", voiceType, "→ voice:", voice.name);
    const res = await fetch(
      `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: {
            languageCode: "en-US",
            name: voice.name,
            ssmlGender: voice.ssmlGender,
          },
          audioConfig: {
            audioEncoding: "MP3",
            speakingRate: voiceType === "quiz" ? 0.9 : 1.0, // 퀴즈는 약간 천천히
            pitch: voiceType === "boy" ? -2.0 : 1.0, // 남자아이는 약간 낮게
            effectsProfileId: ["small-bluetooth-speaker-class-device"],
          },
        }),
      },
    );

    if (!res.ok) throw new Error(`Google TTS error: ${res.status}`);

    const data = await res.json();

    // base64 → blob → URL 변환
    const binary = atob(data.audioContent);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);

    cache[cacheKey] = url;
    await playAudio(url);
  } catch (err) {
    console.error("Google TTS 오류:", err);
    await webSpeechFallback(text);
  }
};

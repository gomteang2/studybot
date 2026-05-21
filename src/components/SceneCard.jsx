import { useEffect, useState } from "react";
import { CHARACTERS } from "../data/characters";
import { speak } from "../utils/speak";
import SpeechBubble from "./SpeechBubble";

function SceneCard({
  background,
  scene,
  gender,
  title,
  text,
  grammarTag,
  heroBubble,
  friendBubble,
}) {
  const friendGender = gender === "girl" ? "friend_boy" : "friend_girl";
  const heroImg = CHARACTERS.hero[gender]?.[scene.hero];
  const friendImg = CHARACTERS.friend[friendGender]?.[scene.friend];
  const friendVoice = gender === "girl" ? "boy" : "girl";

  const [showHeroBubble, setShowHeroBubble] = useState(false);
  const [showFriendBubble, setShowFriendBubble] = useState(false);

  // 퀴즈 상황 텍스트 자동 읽기 (Ivanna)
  useEffect(() => {
    if (text) {
      window.speechSynthesis?.cancel(); // 혹시 모를 중복 차단
      const timer = setTimeout(() => speak(text, "quiz"), 500);
      return () => clearTimeout(timer); // cleanup 추가
    }
  }, [text]);

  // 선택 후 말풍선 + 음성 순서대로
  useEffect(() => {
    if (heroBubble) {
      setShowHeroBubble(true);
      const t1 = setTimeout(() => speak(heroBubble, gender), 300);
      const t2 = setTimeout(() => {
        if (friendBubble) {
          setShowFriendBubble(true);
          speak(friendBubble, friendVoice);
        }
      }, 5000); // 2200 → 4000으로 늘림
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setShowHeroBubble(false);
      setShowFriendBubble(false);
    }
  }, [heroBubble, friendBubble]);

  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "16px",
        border: "2px solid #fce7f3",
      }}
    >
      {/* 배경 + 캐릭터 */}
      <div
        style={{
          position: "relative",
          height: "240px",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          padding: "0 16px 10px",
        }}
      >
        {/* 친구 말풍선 */}
        {showFriendBubble && friendBubble && (
          <SpeechBubble
            text={friendBubble}
            direction="left"
            voiceType={friendVoice}
          />
        )}

        {/* 주인공 말풍선 */}
        {showHeroBubble && heroBubble && (
          <SpeechBubble
            text={heroBubble}
            direction="right"
            voiceType={gender}
          />
        )}

        {/* 친구 캐릭터 */}
        <img
          src={friendImg}
          alt="friend"
          style={{
            height: "180px",
            objectFit: "contain",
            transition: "all 0.5s ease",
            filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.12))",
            background: "transparent",
            mixBlendMode: "normal", // 오타 수정
          }}
        />

        {/* 주인공 캐릭터 */}
        <img
          src={heroImg}
          alt="hero"
          style={{
            height: "190px",
            objectFit: "contain",
            transition: "all 0.5s ease",
            filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.12))",
            background: "transparent",
            mixBlendMode: "normal", // 오타 수정
          }}
        />
      </div>

      {/* 퀴즈 텍스트 + 음성 버튼 */}
      <div style={{ background: "white", padding: "14px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          {/* 음성 버튼 → Ivanna(quiz) 목소리로 읽기 */}
          <button
            onClick={() => speak(text, "quiz")}
            style={{
              background: "#7c3aed",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
              <path
                d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#1f1f1f",
              lineHeight: "1.5",
            }}
          >
            {text}
          </div>
        </div>

        <span
          style={{
            display: "inline-block",
            background: "#ede9fe",
            color: "#5b21b6",
            fontSize: "11px",
            fontWeight: "700",
            padding: "3px 10px",
            borderRadius: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {grammarTag}
        </span>
      </div>
    </div>
  );
}

export default SceneCard;

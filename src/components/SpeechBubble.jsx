import { useEffect } from "react";
import { speak } from "../utils/speak";

function SpeechBubble({
  text,
  direction = "left",
  autoSpeak = false,
  voiceType = "quiz",
}) {
  useEffect(() => {
    if (autoSpeak && text) speak(text, voiceType);
  }, [text, autoSpeak, voiceType]);

  const isLeft = direction === "left";

  return (
    <div
      style={{
        position: "absolute",
        top: "12px",
        ...(isLeft ? { left: "10px" } : { right: "10px" }),
        background: "rgba(255, 255, 255, 0.50)",
        borderRadius: isLeft ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
        padding: "8px 12px",
        maxWidth: "210px",
        border: "2px solid rgba(252, 231, 243, 0.8)",
        backdropFilter: "blur(4px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: "700",
          color: "#374151",
          lineHeight: "1.4",
          flex: 1,
        }}
      >
        {text}
      </span>

      {/* 말풍선 안 음성 버튼 → 해당 캐릭터 목소리로 재생 */}
      <button
        onClick={() => speak(text, voiceType)}
        style={{
          background: "#f3e8ff",
          border: "none",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          padding: 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#7c3aed" />
          <path
            d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
            stroke="#7c3aed"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default SpeechBubble;

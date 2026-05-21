import { useState } from "react";
import { STORIES } from "./data/stories";
import { CHARACTERS } from "./data/characters";
import AgeSelect from "./components/AgeSelect";
import GenderSelect from "./components/GenderSelect";
import DaySelect from "./components/DaySelect";
import SceneCard from "./components/SceneCard";
import ChoiceButton from "./components/ChoiceButton";
import FeedbackPanel from "./components/FeedbackPanel";
import ResultScreen from "./components/ResultScreen";

const AGE_LABELS = ["Ages 5–7", "Ages 8–10", "Ages 11–13"];

function App() {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [selectedDayId, setSelectedDayId] = useState(null);
  const [completedDays, setCompletedDays] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentScene, setCurrentScene] = useState(null);
  const [heroBubble, setHeroBubble] = useState(null);
  const [friendBubble, setFriendBubble] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const story = STORIES.find((s) => s.id === selectedDayId) || STORIES[0];
  const totalSteps = story.steps.length;
  const step = story.steps[currentStep];
  const currentPath = selectedTypes.length > 0 ? selectedTypes[0] : "good";

  const getSceneInfo = () => {
    const step = story.steps[currentStep];
    const currentBackground = step.background || story.background;
    if (currentStep === 0) {
      return {
        background: currentBackground,
        scene: currentScene || step.scene,
        title: Array.isArray(step.title) ? step.title[age] : step.title,
        text: Array.isArray(step.text) ? step.text[age] : step.text,
        grammarTag: Array.isArray(step.grammar)
          ? step.grammar[age]
          : step.grammar,
        choices: step.choices,
        extraCharacter: null,
      };
    }

    // step2 이후 — paths 구조
    const path = step.paths?.[currentPath] || step.paths?.good;

    // 추가 캐릭터 이미지
    let extraImg = null;
    if (path?.newCharacter && CHARACTERS.common?.[path.newCharacter]) {
      const charImages = CHARACTERS.common[path.newCharacter];
      extraImg = Object.values(charImages)[0];
    }

    return {
      background: path?.background || currentBackground,
      scene: currentScene || path?.scene || step.scene,
      title: Array.isArray(path?.title) ? path.title[age] : path?.title,
      text: Array.isArray(path?.text) ? path.text[age] : path?.text,
      grammarTag: Array.isArray(step.grammar)
        ? step.grammar[age]
        : step.grammar,
      choices: path?.choices || [],
      extraCharacter: extraImg,
    };
  };

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    setSelectedTypes((prev) => [...prev, choice.type]);
    setCurrentScene(choice.scene);

    const enText = Array.isArray(choice.en) ? choice.en[age] : choice.en;
    const clean = enText.replace(/["""]/g, "").replace(/^You /, "").trim();
    setHeroBubble(clean);

    const reaction = Array.isArray(choice.friendReaction)
      ? choice.friendReaction[age]
      : choice.friendReaction;
    setFriendBubble(reaction || "...");
  };

  const handleNext = () => {
    setHeroBubble(null);
    setFriendBubble(null);
    if (currentStep + 1 >= totalSteps) {
      setCompletedDays((prev) =>
        prev.includes(selectedDayId) ? prev : [...prev, selectedDayId],
      );
      setShowResult(true);
    } else {
      setCurrentStep((prev) => prev + 1);
      setSelectedChoice(null);
      setCurrentScene(null);
    }
  };

  const handleRestart = () => {
    setSelectedDayId(null);
    setCurrentStep(0);
    setSelectedTypes([]);
    setSelectedChoice(null);
    setCurrentScene(null);
    setHeroBubble(null);
    setFriendBubble(null);
    setShowResult(false);
  };

  // 단계별 화면
  if (age === null) return <AgeSelect onSelect={setAge} />;
  if (gender === null) return <GenderSelect onSelect={setGender} />;
  if (selectedDayId === null)
    return (
      <DaySelect onSelect={setSelectedDayId} completedDays={completedDays} />
    );

  const scene = getSceneInfo();
  const progress =
    ((currentStep + (selectedChoice ? 0.5 : 0)) / totalSteps) * 100;

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        minHeight: "100vh",
        background: "#fff5f7",
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          background: "linear-gradient(135deg, #f472b6, #a78bfa)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={handleRestart}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: "10px",
            padding: "6px 12px",
            color: "white",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "13px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          ← 처음으로
        </button>

        {/* 스텝 도트 */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              style={{
                height: "8px",
                borderRadius: "4px",
                background:
                  i < currentStep
                    ? "rgba(255,255,255,0.9)"
                    : i === currentStep
                      ? "white"
                      : "rgba(255,255,255,0.35)",
                width: i === currentStep ? "20px" : "8px",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        {/* 나이 배지 */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "11px",
            fontWeight: "700",
            padding: "4px 10px",
            borderRadius: "10px",
          }}
        >
          {AGE_LABELS[age]}
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div style={{ height: "4px", background: "#fce7f3" }}>
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #f472b6, #a78bfa)",
            width: `${showResult ? 100 : progress}%`,
            transition: "width 0.5s ease",
          }}
        />
      </div>

      {/* 메인 */}
      <div style={{ padding: "16px" }}>
        {showResult ? (
          <ResultScreen
            selectedTypes={selectedTypes}
            gender={gender}
            onRestart={handleRestart}
          />
        ) : (
          <>
            <SceneCard
              background={scene.background}
              scene={scene.scene}
              gender={gender}
              title={scene.title}
              text={scene.text}
              grammarTag={scene.grammarTag}
              heroBubble={heroBubble}
              friendBubble={friendBubble}
              extraCharacter={scene.extraCharacter}
            />

            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "#c4b5fd",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                marginBottom: "10px",
              }}
            >
              What do you say or do?
            </div>

            {/* 선택지 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              {scene.choices.map((choice, i) => (
                <ChoiceButton
                  key={i}
                  number={i + 1}
                  en={Array.isArray(choice.en) ? choice.en[age] : choice.en}
                  kr={Array.isArray(choice.kr) ? choice.kr[age] : choice.kr}
                  type={selectedChoice === choice ? choice.type : null}
                  onClick={() => !selectedChoice && handleChoice(choice)}
                  disabled={!!selectedChoice}
                />
              ))}
            </div>

            {/* 피드백 */}
            {selectedChoice && (
              <FeedbackPanel choice={selectedChoice} age={age} />
            )}

            {/* 다음 버튼 */}
            {selectedChoice && (
              <button
                onClick={handleNext}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  padding: "14px",
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginTop: "4px",
                }}
              >
                Continue the story
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

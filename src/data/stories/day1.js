export const day1 = {
  id: "school_fall",
  background: "/bg/bg_school.png",
  steps: [
    {
      id: "step1",
      background: "/bg/bg_school.png",
      title: [
        "A Day at School",
        "The Hallway Incident",
        "An Unexpected Moment",
      ],
      text: [
        "Your friend fell down. Everyone is watching. What will you do?",
        "Your friend fell and everyone is watching. What should you do now?",
        "Your friend has fallen down while everyone is watching. How will you respond?",
      ],
      grammar: [
        "fall의 과거시제. 현재 단순형(is watching). will + 동사원형으로 의지나 계획묻기",
        "과거시제(fell) + 접속사(and). 현재진행형(is watching). should + 동사원형으로 조언 혹은 요청하기",
        "현재완료형(has fallen). 접속사(while). 조동사(will) + 동사원형으로 미래의지 묻기",
      ],
      scene: {
        hero: "hero_surprised",
        friend: "friend1_falldown",
      },
      choices: [
        {
          en: [
            '"Are you okay? Hold my hand."',
            '"Are you alright? Let me help you up."',
            '"Are you okay? Take my hand, I’ll help you get up."',
          ],
          kr: [
            "괜찮아? 내 손을 잡아.",
            "괜찮아? 내가 일어서는거 도와줄게.",
            "괜찮아? 내 손을 잡아, 내가 일어서는거 도와줄게.",
          ],
          type: "good",
          emoji: "💗",
          friendReaction: [
            "Thank you.. sniff..",
            "I feel better now..",
            "You're so kind..",
          ],
          scene: {
            hero: "hero_surprised",
            friend: "friend1_crying",
          },
          feedbackTitle: [
            "So kind! 😍",
            "That was really thoughtful! 😍",
            "What a considerate response! 😍",
          ],
          emotionText: [
            "Your friend feels safe and cared for when you gently ask and help.",
            "You make your friend feel supported by kindly offering help.",
            "You show kindness and readiness to help through your thoughtful words.",
          ],
          grammarText: [
            "You correctly asked a present tense question starting with 'Are', which is perfect!",
            "You used the polite permission expression 'Let me + verb' correctly to offer assistance.",
            "You combined present and future tenses smoothly, demonstrating good command of complex sentences.",
          ],
        },
        {
          en: [
            "Oh no! Oh dear!",
            "Oh no! That's too bad.",
            "Oh my, that's unfortunate.",
          ],
          kr: ["안돼! 어머나!", "안돼! 안됐네.", "이런, 안타깝네."],
          type: "neutral",
          emoji: "🤍",
          friendReaction: [
            "It hurts so much..",
            "Nobody is helping me..",
            "I wish someone would help..",
          ],
          scene: {
            hero: "hero_thinking",
            friend: "friend1_falldown",
          },
          feedbackTitle: [
            "Oops! Try to be kind next time. 😐",
            "Hmm, that might feel a bit hurtful. 😐",
            "That could seem uncaring, let's try more empathy. 😐",
          ],
          emotionText: [
            "Your friend may feel sad, so be kind.",
            "You showed some care but could be more kind.",
            "You noticed feelings but can show more empathy.",
          ],
          grammarText: [
            "You used simple words well to show feelings.",
            "You expressed sympathy clearly with good phrases.",
            "You used polite and mature language well.",
          ],
        },
        {
          en: [
            "Ha ha!!",
            "Haha! That was funny!",
            "Haha, that was a bit clumsy, but still funny!",
          ],
          kr: [
            "하하!!",
            "하하! 너무 웃기다!",
            "하하, 조금 서툴렀지만, 그래도 재미있었다!",
          ],
          type: "bad",
          emoji: "💔",
          friendReaction: [
            "That's so mean!",
            "Why are you laughing?!",
            "I can't believe you!",
          ],
          scene: {
            hero: "hero_peeve",
            friend: "friend1_angry",
          },
          feedbackTitle: [
            "Oops! That wasn't kind... 😨",
            "Uh oh! That might sting... 😨",
            "Hmm, that could hurt your friend... 😨",
          ],
          emotionText: [
            "Your friend feels embarrassed and hurt. The good news? You can always apologize!",
            "Laughing when someone is hurting makes them feel alone. What matters is what we do next!",
            "Those words might feel small to you, but big to your friend. Kindness can be chosen at any moment.",
          ],
          grammarText: [
            "This is an onomatopoeia expressing laughter without a subject or verb, used to show amusement.",
            "This sentence uses a past tense verb 'was' + 'funny' to describe a completed action or reaction.",
            "It combines a past tense verb 'was' with adverbial phrase 'a bit clumsy' and contrast 'but still funny' to humorously describe the situation.",
          ],
        },
      ],
    },
    {
      id: "step2",
      background: "/bg/bg_school.png",
      paths: {
        good: {
          title: [
            "Your friend is still crying...",
            "Your friend is still sobbing...",
            "Your friend continues to cry...",
          ],
          text: [
            "Your friend got up, but still sniffles. What will you do?",
            "Your friend is standing now, but still sobbing quietly. How do you respond?",
            "Your friend stood up with your help, but is still crying softly. What do you say?",
          ],
          grammar: [
            "What will you + 동사원형 으로 앞으로 할 행동이나 반응 묻기",
            "How do you + 동사원형 으로 상황에서의 반응이나 대처 방법 묻기. be + ~ing(is standing, sobbing)는 현재 진행 중인 상태 표현",
            "'stand up'의 과거형. What do you + 동사원형 으로 어떤 말을 할지 묻기",
          ],
          scene: { hero: "hero_surprised", friend: "friend1_crying" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Would you like to go to the nurse together?"',
                '"Do you want to go to the nurse\'s office with me?"',
                "\"Why don't we go to the nurse's office together?\"",
              ],
              kr: [
                "보건실에 같이 갈래?",
                "나랑 같이 보건실 갈래?",
                "우리 같이 보건실에 가는 게 어때?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you.. sniff..",
                "I feel better now..",
                "You're so kind..",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "So caring! 😍",
                "What a kind offer! 😍",
                "That's so thoughtful! 😍",
              ],
              emotionText: [
                "Your friend feels happy because you want to help. Going together is very kind!",
                "You care a lot by offering to go with your friend, and your friend feels better now.",
                "Suggesting you go together is the kindest thing right now. Your friend smiles through the tears!",
              ],
              grammarText: [
                "'Would you like to + verb' is one of the most polite ways to make an offer in English. Very natural!",
                "'Do you want to + verb' is a friendly, casual offer. Great for talking with friends!",
                "'Why don\'t we + verb' is a warm suggestion that includes yourself — 'let\'s do this together'!",
              ],
            },
            {
              en: [
                '"Okay, bye then!"',
                '"Alright, I have to go now. See you later!"',
                "\"Well, I'm glad you're up. I'll see you around!\"",
              ],
              kr: [
                "그래, 잘 가!",
                "그래, 나 이제 가야 해. 나중에 봐!",
                "음, 일어났으니 다행이다. 나중에 봐!",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Okay... see you later.",
                "Alright, I guess. See you.",
                "Well, if you have to go... I'll see you around.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Hmm, that was a quick goodbye... 😐",
                "Your friend might feel a little abandoned... 😐",
                "Kind words, but leaving so soon? 😐",
              ],
              emotionText: [
                "Your friend is still crying when you leave, so they feel a bit lonely. Kindness always helps!",
                "You helped them up, but leaving while they cry feels incomplete. Next time, stay a little longer!",
                "You noticed they were up — good! But your friend still needs someone right now.",
              ],
              grammarText: [
                "'Bye then' — 'then' at the end softens the goodbye. Very natural!",
                "'I have to go now' — 'have to' expresses necessity. 'See you later' is a casual farewell.",
                "'I'll see you around' — future tense for an informal open-ended goodbye. Very natural!",
              ],
            },
            {
              en: [
                '"Haha! Falling down was so funny!"',
                '"Ha! You should have seen your face when you fell!"',
                '"That fall was honestly hilarious. I can\'t stop thinking about it!"',
              ],
              kr: [
                "하하! 넘어지는 거 너무 웃겼어!",
                "하! 네가 넘어질 때 표정 봤어야 했는데!",
                "솔직히 그 넘어지는 거 진짜 웃겼어. 자꾸 생각나!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Don't laugh!",
                "Hey, that wasn't funny for me.",
                "That's a bit hurtful. Please be more careful next time.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That was so unkind... 😨",
                "Uh oh! Your friend is really hurt now... 😨",
                "That was the worst timing... 😨",
              ],
              emotionText: [
                "Your friend trusted you enough to take your hand — and now you're laughing. That can really hurt. Please be kind.",
                "Your friend was already feeling embarrassed, and laughing only makes it worse. Think about how to make things better.",
                "Calling it 'hilarious' while your friend is still upset is deeply hurtful. Remember, kindness is always the better choice.",
              ],
              grammarText: [
                "'Was so funny' — past tense + intensifier 'so'. Grammatically great, but the timing is hurtful!",
                "'Should have seen' — past modal expressing missed opportunity. Advanced grammar!",
                "'Honestly' emphasizes sincerity. 'I can't stop -ing' = a continuous action. Great grammar!",
              ],
            },
          ],
        },
        neutral: {
          title: [
            "You walked away...",
            "You left your friend behind...",
            "Your friend watches you go...",
          ],
          text: [
            "Your friend got up and is standing, but still crying.",
            "Your friend is now standing alone, softly crying.",
            "Your friend stands up on their own, tears still falling quietly.",
          ],
          grammar: [
            "'get up'의 과거형. get up / be + ~ing(is standing) 형태로 행동 후 현재 상태 설명하기",
            "be + ~ing 로 현재 상태를 자세하게 설명하기. 분사(softly crying)로 상태를 덧붙여 묘사",
            "동사 현재형(stands up) + 분사구문(tears still falling quietly) 으로 장면 설명하기",
          ],
          scene: { hero: "hero_lookaway", friend: "friend1_crying" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Are you hurt? Let\'s walk to the classroom together!"',
                '"Are you okay? Come with me to the classroom."',
                '"Are you hurt? Let me help you get to the classroom."',
              ],
              kr: [
                "다친 데 없니? 같이 교실까지 가자!",
                "괜찮아? 교실까지 나랑 같이 가자.",
                "다친 곳 있어? 교실까지 데려다 줄게.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "I'm okay, thanks! Let's go!",
                "Thanks for caring. Let's go together.",
                "I appreciate it, you help a lot. Let's walk together.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "Kind and Caring Choice! 😍",
                "Thoughtful and Supportive! 😍",
                "Considerate and Helpful Expression! 😍",
              ],
              emotionText: [
                "You were kind to ask if your friend was hurt and say let's walk together.",
                "Your question “Are you okay?” and your invitation to “Come with me” show kindness and care.",
                "You showed kindness by asking if your friend was hurt and offering help. good job!",
              ],
              grammarText: [
                "'Are you hurt?' is a simple question; 'Let\'s walk' is a friendly way to suggest doing things together.",
                "'Are you okay?' asks simply about how someone feels, and 'Come with me' politely asks someone to join you.",
                "'Are you hurt?' asks simply about your friend\'s state, and 'Let me help you' politely offers help in going somewhere.",
              ],
            },
            {
              en: [
                '"Can you walk alone? Okay, bye then!"',
                '"Can you walk by yourself? Alright, see you later!"',
                '"Are you able to walk alone? If so, goodbye!"',
              ],
              kr: [
                "혼자 걸을 수 있지? 그럼 안녕!",
                "혼자 걸을 수 있니? 좋아, 나중에 봐!",
                "혼자 걸을 수 있니? 그렇다면 잘 가!",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "I can walk by myself, but I want you to stay.",
                "I can walk by myself, but I wish you stayed a little longer.",
                "I can walk alone, but I wish you would stay with me a little longer.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Showing Understanding and Kindness 😐",
                "Showing Care and Understanding 😐",
                "Understanding Feelings 😐",
              ],
              emotionText: [
                "It's okay to feel that way. sometimes friends need a little extra care.",
                "It's okay if your friend feels sad because you left. try to be kinder next time.",
                "It's normal for your friend to feel hurt. try to be more caring next time.",
              ],
              grammarText: [
                "This sentence asks if someone can walk by themselves and then says goodbye in a nice way.",
                "This sentence asks if someone can walk alone and then says goodbye in a friendly way. good.",
                "This sentence asks if someone can do something alone and says goodbye in a polite way.",
              ],
            },
            {
              en: [
                '"Haha! You fell down but got up fast!"',
                '"Haha! You fell but stood up really quickly!"',
                '"Haha! You took a little fall but bounced back quickly!"',
              ],
              kr: [
                "하하! 넘어졌지만 빨리 일어났어!",
                "하하! 넘어졌지만 정말 빨리 일어났네!",
                "하하! 잠깐 넘어졌지만 빠르게 다시 일어났네!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Stop laughing. It's not nice.",
                "Stop! it's not nice to laugh at me like that.",
                "Hey, it really hurts when you laugh at me.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Being Kind with Words 😨",
                "Being Nice to Friends 😨",
                "Employing Compassionate Language 😨",
              ],
              emotionText: [
                "Talking kindly helps friends feel better.",
                "Using kind words helps everyone feel better.",
                "Considerate language fosters a sense of security and happiness among friends.",
              ],
              grammarText: [
                "This sentence is showing what happened in a simple way.",
                "This sentence clearly and concisely describes the events that took place.",
                "This sentence narrates the events and your swift recovery employing the simple past tense.",
              ],
            },
          ],
        },
        bad: {
          title: [
            "Friend is Angry",
            "Your Friend is Upset Because of Your Joke",
            "When Teasing Causes Hurt Feelings",
          ],
          text: [
            "You teased your friend after they fell, and now they are angry. What will you do?",
            "You made fun of your friend when they fell, and now they feel angry. What do you want to do?",
            "After you teased your friend for falling, they got upset and angry. How will you respond?",
          ],
          grammar: [
            "after + 주어 + 동사 로 어떤 일이 일어난 뒤 상황 설명하기",
            "want to + 동사원형 으로 하고 싶은 행동 묻기",
            "How will you + 동사원형 으로 앞으로의 대응 방법 묻기. for + ~ing : ~한 것 때문에",
          ],
          scene: { hero: "hero_surprised", friend: "friend1_angry" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"I'm sorry. I didn't mean to make you sad.\"",
                "\"I'm really sorry for teasing you. I won't do it again.\"",
                '"I apologize for making fun of you earlier. I\'ll be more careful next time."',
              ],
              kr: [
                "미안해. 너를 슬프게 할 의도는 없었어.",
                "놀려서 정말 미안해. 다시는 안할게.",
                "아까 놀려서 미안해. 다음에는 더 조심할게.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "It's okay. Please don't laugh again.",
                "Thank you. I feel better now.",
                "Thanks for saying that. It means a lot.",
              ],
              scene: { hero: "hero_sad", friend: "friend1_thinking" },
              feedbackTitle: [
                "The Power of Saying Sorry 😍",
                "The Importance of Apology 😍",
                "The Power of Apology 😍",
              ],
              emotionText: [
                "Saying sorry shows you care and makes friends feel better.",
                "Saying sorry shows you care and helps fix hurt feelings.",
                "Apologizing shows kindness and helps heal hurt feelings.",
              ],
              grammarText: [
                "This sentence says sorry using simple past and tells how the friend feels now using the present tense.",
                "This sentence uses the past tense to say sorry and the present tense to show how someone feels now in one simple sentence.",
                "This sentence uses the past tense to apologize and the present tense to describe current feelings in one clear sentence.",
              ],
            },
            {
              en: [
                '"Forget it! Stop crying!"',
                '"It\'s nothing. Stop being so sensitive."',
                '"Don\'t be so dramatic. Just get over it."',
              ],
              kr: [
                "잊어버려! 그만 울어!",
                "별거 아니잖아. 너무 예민하게 굴지 마.",
                "갑작스럽게 굴지마. 그냥 넘어가.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "That's mean! I don't want to play",
                "You're hurting my feelings.",
                "Your words really hurt me. Why don't you try being kinder?",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_angry" },
              feedbackTitle: [
                "Being Kind to Friends 😐",
                "Respect Feelings 😐",
                "Respecting Others' Feelings 😐",
              ],
              emotionText: [
                "It's important to be kind and listen to our friends' feelings.",
                "It's important to respect others' feelings and be kind. Lead with the sorry!",
                "Everyone's feelings matter, and it's important to be understanding and respectful.",
              ],
              grammarText: [
                "This sentence tells someone to stop doing something using a short command and shows feelings with simple words.",
                "This sentence uses a short command and explains feelings clearly with simple words.",
                "It's like saying, 'Stop acting too much and move on.' in a nice and clear way using simple words.",
              ],
            },
            {
              en: [
                '"Whatever, it was funny!"',
                '"Stop! It was just a joke!"',
                "\"I don't see why you're so upset. Don't be so touchy.\"",
              ],
              kr: [
                "뭐, 진짜 웃겼잖아!",
                "그만해! 그냥 농담이잖아!",
                "왜 그렇게 화가 났는지 모르겠어. 너무 예민하게 굴지 마.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I'm mad at you!",
                "That wasn't funny. Leave me alone.",
                "You crossed the line. I don't want to be around you right now.",
              ],
              scene: { hero: "hero_angry", friend: "friend1_angry" },
              feedbackTitle: [
                "Be Careful with Your Words 😨",
                "Think Before You Speak 😨",
                "Respecting Feelings 😨",
              ],
              emotionText: [
                "If you keep saying that, you might get in trouble, so try to be nicer.",
                "Be careful with your words because jokes can sometimes hurt feelings, and you might get in trouble.",
                "It's important to respect others' feelings because being too harsh can cause trouble.",
              ],
              grammarText: [
                "This sentence uses 'Whatever' to show that the speaker doesn't care about others' opinions.",
                "'Can't you take a joke?' is a question people use when they feel annoyed, but it can hurt feelings.",
                "'I don't see why' present negative + indirect question. It is a negative command warning not to get upset easily, minimizing the situation.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "step3",
      paths: {
        "good-good": {
          background: "/bg/bg_healthroom.png",
          title: [
            "At the Nurse's Room!",
            "Getting Better Together!",
            "A Kind Visit to the Nurse!",
          ],
          text: [
            "The nurse helped your friend. Your friend feels better now. What will you say?",
            "Your friend has been treated by the nurse and is feeling better. How do you respond?",
            "After receiving care from the nurse, your friend is recovering. What do you say next?",
          ],
          grammar: [
            "'help'의 과거시제. 'What will you say?' 미래 의지를 묻는 의문문",
            "'has been treated' 현재완료 수동태. 'is feeling better' 현재진행형으로 상태 변화를 표현",
            "'After receiving care' 현재분사구문과 시간 부사를 사용한 부사절. 'is recovering' 현재진행형으로 '회복 중이다' 의미",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"That's a relief! I'll walk you to class.\"",
                "\"I'm so glad you're better! Let me walk with you to class.\"",
                "\"I'm relieved you're okay. I'll walk you back to class.\"",
              ],
              kr: [
                "다행이다. 교실까지 같이 가줄게.",
                "나아서 정말 다행이야! 같이 교실까지 걸어가자.",
                "괜찮다니 다행이야. 교실까지 같이 걸어갈게.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you so much! You're the best!",
                "You're so kind! I'm lucky to have you.",
                "Thank you for staying with me. You're a great friend!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a caring friend! 😍",
                "So thoughtful and kind! 😍",
                "You showed true friendship! 😍",
              ],
              emotionText: [
                "Walking your friend to class shows you really care. Your friend feels so happy and safe with you!",
                "Staying until the end and offering to walk together shows deep kindness. Your friend is truly grateful!",
                "Your friend feels supported and valued. This is what true friendship looks like!",
              ],
              grammarText: [
                "'That's a relief' is a great expression for when something worrying turns out okay. 'I'll walk you' uses future tense to offer help! ✏️",
                "'I'm so glad' expresses happiness about someone else's wellbeing. 'Let me + verb' is a polite offer! ✅",
                "'I'm relieved' is a stronger way to say 'I'm glad'. 'Walk you back' is a natural phrasal verb! 🌟",
              ],
            },
            {
              en: [
                "\"Okay, if you're done, I'll go ahead.\"",
                "\"Alright, I'm glad you're better. I'll head to class first.\"",
                '"Well, since you seem okay now, I\'ll go on ahead to class."',
              ],
              kr: [
                "그래, 끝났으면 먼저 갈게.",
                "알겠어, 나아서 다행이야. 나 먼저 교실 갈게.",
                "음, 이제 괜찮은 것 같으니까, 나 먼저 교실 갈게.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh, okay. See you in class then.",
                "Alright... see you there.",
                "Okay, I'll catch up with you.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Hmm, a little rushed... 😐",
                "Your friend wanted you to stay a bit longer... 😐",
                "Kind but a little distant... 😐",
              ],
              emotionText: [
                "You checked your friend was okay — that's good! But leaving right away felt a little rushed. Next time, walk together!",
                "Your friend appreciated you coming, but hoped you'd stay. A little more time goes a long way!",
                "You showed some care, but your friend still feels a bit lonely. Offering to walk together would mean so much more!",
              ],
              grammarText: [
                "'If you're done' is a conditional clause. 'I'll go ahead' means to leave before someone else! ✏️",
                "'I'll head to class' — 'head to' is a phrasal verb meaning to go toward somewhere. Very natural! ✅",
                "'Since you seem okay' — 'since' shows reason. 'Go on ahead' means to leave before others! 🌟",
              ],
            },
            {
              en: [
                '"Hurry up! We\'re going to be late because of you!"',
                '"Come on! We\'ll be late for class because of this!"',
                "\"We're going to be late for class because of you. Let's go!\"",
              ],
              kr: [
                "빨리해! 너 때문에 수업에 늦겠다!",
                "빨리! 이것 때문에 수업에 늦겠어!",
                "너 때문에 수업에 늦겠어. 빨리 가자!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I'm sorry... I didn't mean to make us late.",
                "I'm trying... I'm still hurting a little.",
                "I'm sorry for slowing you down. I'll try to be faster.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_sad" },
              feedbackTitle: [
                "Oh no! That was unkind... 😨",
                "Your friend is trying their best... 😨",
                "That must have hurt your friend's feelings... 😨",
              ],
              emotionText: [
                "Your friend didn't fall on purpose! Blaming them when they're already hurt makes them feel much worse. 💜",
                "Your friend came to the nurse because they were hurt, not to make you late. Patience is kindness! 🌱",
                "Your friend is already upset. Adding blame makes it so much harder. Try to be patient and kind! 💛",
              ],
              grammarText: [
                "'Hurry up' is a phrasal verb meaning to move faster. 'Because of you' shows cause using a prepositional phrase! ✏️",
                "'We'll be late' uses future tense to predict a result. 'Because of this' is a cause-and-effect phrase! ✅",
                "'Going to be late' uses 'going to' for a near-future prediction. 'Because of you' assigns blame directly! 🌟",
              ],
            },
          ],
        },
        "good-neutral": {
          background: "/bg/bg_classroom.png",
          title: [
            "Back in the Classroom!",
            "Meeting Again in Class!",
            "A Classroom Reunion!",
          ],
          text: [
            "You see your friend again in the classroom. They look okay now. What will you say?",
            "Your friend is back in the classroom and seems to have calmed down. What do you say?",
            "You meet your friend again in class. They seem to be feeling a little better. What do you do?",
          ],
          grammar: [
            "감각동사(look) + 형용사(okay)로 상태를 나타냄. 'What will you say?' 미래의지를 묻는 의문문",
            "완료형 부정사(to have + p.p.)+ 동사(seem) 상태가 완료돼었음을 의미",
            "'seem to be feeling'은 동사 seem + 현재분사구문으로 친구가 조금 나아진 상태임을 의미",
          ],
          scene: { hero: "hero_happy", friend: "friend1_sad" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Are you still hurting? Be careful today!"',
                '"Does it still hurt? Make sure you take care of yourself!"',
                '"Is the injury still bothering you? Please be careful for the rest of the day."',
              ],
              kr: [
                "아직 다친 데 아프니? 오늘 조심해!",
                "아직도 아파? 몸 잘 챙겨!",
                "아직도 다친 데가 불편하니? 오늘 하루 조심해.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "I'm a little better now. Thank you for asking!",
                "It still hurts a bit, but I'm okay. Thanks for caring!",
                "I'm managing. Thanks for checking on me!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "So caring and thoughtful! 😍",
                "You're such a kind friend! 😍",
                "What a considerate thing to say! 😍",
              ],
              emotionText: [
                "Checking on your friend shows you haven't forgotten about them. They feel truly cared for!",
                "Your friend feels touched that you remembered and asked. That's what good friends do!",
                "Following up on how your friend is feeling shows real empathy. Your friend is so glad you care!",
              ],
              grammarText: [
                "'Are you still hurting?' uses present continuous to ask about an ongoing state. 'Be careful' is an imperative! ✏️",
                "'Does it still hurt?' is a simple present question. 'Make sure you' is a useful phrase for giving advice! ✅",
                "'Is it still bothering you?' uses present continuous for ongoing discomfort. 'For the rest of the day' is a time phrase! 🌟",
              ],
            },
            {
              en: [
                '"You\'re okay now, right?"',
                "\"So, you're feeling better now, aren't you?\"",
                '"I assume you\'re doing okay now, are you?"',
              ],
              kr: [
                "뭐, 이제 괜찮은 거지?",
                "이제 좀 나아진 거지?",
                "이제 괜찮은 거 맞지?",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Yeah, I'm okay I guess...",
                "A little better. Thanks for asking I suppose.",
                "I'm managing. Thanks.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "A little flat, but okay! 😐",
                "You asked, but it felt a bit cold... 😐",
                "Checking in is good, but warmer words help more! 😐",
              ],
              emotionText: [
                "Asking is better than nothing! But 'you're okay now, right?' sounds like you want them to be fine rather than actually caring. Try warmer words!",
                "Your friend knows you asked, but the question felt a little detached. A warmer tone makes all the difference!",
                "Checking in is a great instinct! Next time, add a little warmth to show you really mean it. 💛",
              ],
              grammarText: [
                "'You're okay now, right?' is a tag question used to confirm something. Very common in conversation! ✏️",
                "'Aren't you?' is a negative tag question. Tag questions seek agreement or confirmation from the listener! ✅",
                "'Are you?' at the end turns the statement into a question. A softer way to check in! 🌟",
              ],
            },
            {
              en: [
                '"Hey, you\'re the one who fell earlier, right?"',
                '"Aren\'t you the one who fell down in the hallway?"',
                "\"You're the person who had that funny fall earlier, aren't you?\"",
              ],
              kr: [
                "야, 아까 웃기게 넘어졌던 거 너 맞지?",
                "아까 복도에서 넘어진 게 너 아니야?",
                "아까 웃기게 넘어진 사람이 너 맞지?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Please don't remind me. It was embarrassing.",
                "I'd rather not talk about it. It was really embarrassing.",
                "I'd appreciate it if you didn't bring that up. It was humiliating.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That brings up bad memories... 😨",
                "Your friend was hoping to forget that... 😨",
                "That was embarrassing for your friend... 😨",
              ],
              emotionText: [
                "Your friend was embarrassed when they fell. Bringing it up again makes them feel that embarrassment all over again. 💜",
                "Your friend wanted to move on from that moment. Reminding them isn't kind, even if it wasn't meant to be hurtful! 🌱",
                "Calling the fall 'funny' in front of others is deeply embarrassing for your friend. Always think before you speak! 💛",
              ],
              grammarText: [
                "'The one who' is a relative clause identifying a specific person. Very useful in English! ✏️",
                "'Aren't you the one who' is a negative question with a relative clause. A common way to confirm identity! ✅",
                "'The person who had' uses a relative clause in past tense to identify someone. Advanced structure! 🌟",
              ],
            },
          ],
        },
        "good-bad": {
          background: "/bg/bg_school.png",
          title: [
            "Your Friend is Upset!",
            "Your Friend is Really Hurt!",
            "Dealing with an Angry Friend!",
          ],
          text: [
            "Your friend is very upset that you laughed at them after helping. What do you say?",
            "Your friend confronts you angrily after you laughed at them. How do you respond?",
            "Your friend is furious that you laughed while they were still hurt. What do you do?",
          ],
          grammar: [
            "'is very upset' 상태를 나타내는 감정 표현. 과거 시제 동사(laughed) + 전치사구(at them) 그들을 비웃었다는 의미",
            "동사(confront) + 부사(angrily)로 화나서 맞선다는 의미",
            "'is furious' 감정을 나타내는 현재형 상태 동사. 과거 시제(laughed) + 종속절(while they were still hurt) '~하는 동안'",
          ],
          scene: { hero: "hero_surprised", friend: "friend1_angry" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I\'m truly sorry. That was really mean of me."',
                "\"I'm so sorry. I didn't mean to hurt you like that.\"",
                '"I sincerely apologize. I crossed the line and I know it."',
              ],
              kr: [
                "진심으로 미안해. 내가 너무 못됐어.",
                "정말 미안해. 그렇게 상처 줄 생각이 없었어.",
                "진심으로 사과해. 내가 선을 넘었다는 거 알아.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you for saying that. It means a lot.",
                "I appreciate your apology. I forgive you.",
                "Thank you. That was hard to hear, but I forgive you.",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "A heartfelt apology! 😍",
                "That took real courage! 😍",
                "You showed true maturity! 😍",
              ],
              emotionText: [
                "'Truly sorry' shows deep sincerity. Your friend can feel you really mean it and begins to soften!",
                "'I didn't mean to hurt you' shows empathy — you acknowledge the impact of your actions. Your friend feels heard!",
                "'I crossed the line' takes full responsibility. Your friend deeply appreciates your honesty and maturity!",
              ],
              grammarText: [
                "'Truly sorry' — 'truly' is an adverb intensifying the adjective 'sorry'. Stronger than 'very sorry'! ✏️",
                "'I didn't mean to + verb' — past negative expressing unintentional action. Very natural and honest! ✅",
                "'I crossed the line' is an idiom meaning to go beyond acceptable limits. Past tense shows completed action! 🌟",
              ],
            },
            {
              en: [
                '"Sorry, okay? I said sorry."',
                '"I already apologized. What more do you want?"',
                '"I said I was sorry. Can we just move past this?"',
              ],
              kr: [
                "미안하다고, 알겠어? 미안하다고 했잖아.",
                "이미 사과했잖아. 뭘 더 원하는 거야?",
                "미안하다고 했잖아. 그냥 넘어갈 수 없어?",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "It didn't feel like a real apology.",
                "Saying sorry once doesn't fix everything.",
                "I need more than just the words.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "That sounded a bit forced... 😐",
                "Your friend needs a real apology, not a quick one! 😐",
                "An apology with conditions isn't really an apology! 😐",
              ],
              emotionText: [
                "Saying 'I said sorry' without warmth doesn't feel genuine. Your friend needs to feel you really mean it!",
                "'What more do you want?' puts the blame on your friend for still being hurt. Give them time to heal!",
                "Adding 'can we just move past this?' rushes your friend's healing. Real apologies don't come with conditions!",
              ],
              grammarText: [
                "'Sorry, okay?' — using 'okay?' at the end seeks agreement. The tone here is impatient rather than sincere! ✏️",
                "'I already apologized' — 'already' in past tense shows a completed action. 'What more do you want?' is a rhetorical question! ✅",
                "'Can we just move past this?' — 'just' minimizes. 'Move past' is a phrasal verb meaning to get over something! 🌟",
              ],
            },
            {
              en: [
                '"Whatever! You\'re so sensitive!"',
                '"Calm down. It was just a joke!"',
                "\"You're overreacting. It really wasn't that serious.\"",
              ],
              kr: [
                "뭐든지! 너 너무 예민해!",
                "진정해. 그냥 농담이었잖아!",
                "너무 오버하는 거 아니야? 진짜 별거 아니었는데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I'm not being sensitive. You were unkind.",
                "It wasn't just a joke to me. It hurt.",
                "I'm not overreacting. My feelings are real.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That makes everything worse! 😨",
                "Dismissing feelings is never okay! 😨",
                "Your friend's feelings are always valid! 😨",
              ],
              emotionText: [
                "Calling your friend 'sensitive' dismisses their real pain. Everyone deserves to have their feelings respected! 💜",
                "'It was just a joke' minimizes the hurt. If a joke causes pain, it's worth taking seriously! 🌱",
                "'You're overreacting' tells your friend their feelings are wrong — but feelings are never wrong! 💛",
              ],
              grammarText: [
                "'You're so sensitive' — 'so' intensifies the adjective. 'Whatever' is a dismissive interjection! ✏️",
                "'It was just a joke' — 'just' minimizes importance. 'Calm down' is an imperative that can feel condescending! ✅",
                "'You're overreacting' — present continuous to describe current behavior. 'That serious' uses 'that' as an intensifier! 🌟",
              ],
            },
          ],
        },
        "neutral-good": {
          background: "/bg/bg_classroom.png",
          title: [
            "Your Friend Says Thank You!",
            "A Grateful Friend!",
            "Kindness Comes Back!",
          ],
          text: [
            "Your friend finds you in class and says thank you for coming back to help. What do you say?",
            "Your friend approaches you in class and thanks you for returning to help them. How do you respond?",
            "In class, your friend walks up and thanks you for coming back. What is your response?",
          ],
          grammar: [
            "find + 목적어(you) '너를 찾는다' 의미. come back + to부정사 '돌아와서 도와준다' 의미",
            "approach + 목적어(you) '너에게 다가온다' 의미. 'How do you respond?' 현재 시제 의문문",
            "'walks up' 다가가다. 'What is your response?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"I'm glad you're okay! Cheer up!\"",
                "\"It's great that you're feeling better! You've got this!\"",
                "\"I'm relieved you're alright. Keep your chin up — you've got this!\"",
              ],
              kr: [
                "괜찮다니 다행이야. 힘내!",
                "나아졌다니 좋다! 잘 할 수 있어!",
                "괜찮다니 다행이야. 기운 내, 잘 할 수 있어!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you! That really cheered me up!",
                "Thanks! I feel so much better now!",
                "Thank you so much! You always know what to say!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What an uplifting response! 😍",
                "You're such an encouraging friend! 😍",
                "That was perfectly kind and supportive! 😍",
              ],
              emotionText: [
                "'Cheer up' is a warm and encouraging thing to say. Your friend feels lifted by your words!",
                "'You've got this' is a great way to encourage someone. Your friend feels confident and supported!",
                "'Keep your chin up' is a lovely idiom. Your friend feels genuinely cared for and motivated!",
              ],
              grammarText: [
                "'I'm glad' expresses happiness about a situation. 'Cheer up' is an imperative used for encouragement! ✏️",
                "'You've got this' is an informal expression of confidence in someone. Very common and encouraging! ✅",
                "'Keep your chin up' is an idiom meaning to stay positive. A lovely way to encourage a friend! 🌟",
              ],
            },
            {
              en: [
                '"Yeah, that\'s what friends are for, I guess."',
                '"Sure, it wasn\'t a big deal."',
                '"It was nothing. Don\'t worry about it."',
              ],
              kr: [
                "그래, 그 정도야 뭐.",
                "그래, 별거 아니었어.",
                "별거 아니야. 신경 쓰지 마.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh, okay. Still, thank you.",
                "I see... thanks anyway.",
                "Alright... I just wanted you to know I appreciate it.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_happy" },
              feedbackTitle: [
                "Humble, but a little cold! 😐",
                "You downplayed your kindness a bit... 😐",
                "Your friend wanted to feel more acknowledged! 😐",
              ],
              emotionText: [
                "Being humble is good, but 'I guess' makes it sound like you don't really care. A warm smile goes a long way!",
                "Saying 'it wasn't a big deal' might make your friend feel their gratitude doesn't matter. Accept thanks graciously!",
                "'It was nothing' can feel dismissive. Your friend wants to feel that their feelings matter to you!",
              ],
              grammarText: [
                "'That's what friends are for' is a common idiom expressing the purpose of friendship. 'I guess' shows uncertainty! ✏️",
                "'It wasn't a big deal' — 'big deal' is an idiom for something important. Negating it minimizes the action! ✅",
                "'Don't worry about it' is a common reassurance. 'It was nothing' minimizes your own helpful action! 🌟",
              ],
            },
            {
              en: [
                '"Haha, you were really funny when you fell!"',
                '"By the way, your fall was honestly so funny!"',
                '"I have to say, watching you fall was genuinely hilarious!"',
              ],
              kr: [
                "근데 아까 넘어질 때 진짜 웃겼다!",
                "솔직히 아까 넘어지는 거 너무 웃겼어!",
                "진짜로, 아까 네가 넘어지는 거 보고 엄청 웃겼어!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That's not nice to say...",
                "I was in pain. It wasn't funny to me.",
                "I came to thank you, and that's what you say?",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That ruined the moment... 😨",
                "Your friend came to thank you and felt hurt instead... 😨",
                "That was really hurtful after such a kind moment... 😨",
              ],
              emotionText: [
                "Your friend came to thank you, and you responded by laughing at them. That hurts deeply. 💜",
                "Calling someone's painful moment 'funny' shows a lack of empathy. Your friend feels betrayed! 🌱",
                "Your friend trusted you enough to come and thank you. Laughing at their pain breaks that trust. 💛",
              ],
              grammarText: [
                "'You were really funny' — past tense to describe a past observation. 'Really' intensifies the adjective! ✏️",
                "'By the way' is a transition phrase to introduce a new topic casually. 'Honestly' emphasizes sincerity! ✅",
                "'I have to say' is used to introduce an honest opinion. 'Genuinely' means truly or sincerely! 🌟",
              ],
            },
          ],
        },
        "neutral-neutral": {
          background: "/bg/bg_classroom.png",
          title: [
            "Back in the Classroom!",
            "Meeting Again in Class!",
            "A Quiet Reunion!",
          ],
          text: [
            "You see your friend again in the classroom. They look a little sad still. What do you say?",
            "Your friend is sitting in class looking a bit down. What do you do?",
            "In class, you notice your friend is still a little quiet. What do you say?",
          ],
          grammar: [
            "감각 동사(look) + 정도 부사구(a little) + 형용사(sad)로 상태를 묘사. 'still' 아직도를 뜻하는 부사",
            "현재진행형(is sitting) 앉아있다 의미. 현재분사구문(looking a bit down) 조금 우울해 보인다는 상태를 묘사",
            "부사(still) + 정도 부사구(a little) + 형용사(quiet)로 아직 조금 조용하다는 상태를 표현",
          ],
          scene: { hero: "hero_thinking", friend: "friend1_sad" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Are you feeling better? I hope you feel better soon!"',
                '"How are you doing now? I really hope you feel better soon."',
                '"Are you doing okay? I sincerely hope you make a full recovery soon."',
              ],
              kr: [
                "다친 데 괜찮아? 빨리 나아야 할 텐데.",
                "지금 어때? 빨리 나았으면 좋겠다.",
                "괜찮아? 빨리 완전히 나았으면 좋겠어.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "I'm getting better! Thank you for asking!",
                "A little better. Your words make me feel good!",
                "Thank you so much. I really appreciate your concern!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "So caring and warm! 😍",
                "What a kind thing to say! 😍",
                "Your friend feels truly cared for! 😍",
              ],
              emotionText: [
                "Asking about your friend and wishing them well shows you genuinely care. Your friend feels much better!",
                "Checking in and expressing hope shows empathy. Your friend appreciates your warmth!",
                "A sincere wish for recovery means a lot. Your friend feels truly supported and cared for!",
              ],
              grammarText: [
                "'I hope you feel better soon' is a common expression of goodwill. 'Feel better' uses the base verb after 'feel'! ✏️",
                "'How are you doing?' is a common check-in phrase. 'I really hope' adds sincerity with the adverb 'really'! ✅",
                "'I sincerely hope' uses the adverb 'sincerely' for emphasis. 'Make a full recovery' is a formal expression! 🌟",
              ],
            },
            {
              en: [
                '"These things happen. You\'ll be fine!"',
                '"Everyone falls sometimes. Don\'t let it bother you."',
                '"Falling happens to everyone. Try not to dwell on it."',
              ],
              kr: [
                "넘어질 수도 있어. 그냥 그러려니 해.",
                "다들 가끔 넘어져. 너무 신경 쓰지 마.",
                "넘어지는 건 누구에게나 일어나. 너무 생각하지 마.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "I know... I just felt embarrassed.",
                "I suppose so... it was just really embarrassing.",
                "You're right, but it was still hard for me.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "Practical but a little cold! 😐",
                "You meant well, but it felt a bit dismissive... 😐",
                "Logical, but your friend needed more warmth! 😐",
              ],
              emotionText: [
                "What you said is true, but your friend needed more warmth than logic right now. Try adding 'I'm here for you'!",
                "Telling someone not to worry can feel like their feelings don't matter. Acknowledge the feeling first!",
                "'Don't dwell on it' is practical advice, but your friend needed emotional support more than advice!",
              ],
              grammarText: [
                "'These things happen' is an idiom meaning accidents are normal. 'You'll be fine' uses future tense for reassurance! ✏️",
                "'Everyone falls sometimes' is a generalization using the universal subject 'everyone'. 'Let it bother you' uses 'let' + object + verb! ✅",
                "'Try not to dwell on it' — 'dwell on' is a phrasal verb meaning to think too much about something! 🌟",
              ],
            },
            {
              en: [
                '"Haha, I wonder if you\'ll fall again today!"',
                '"Ha, I keep thinking about your fall. It was so funny!"',
                '"I have to admit, I\'m still laughing about your fall in my head!"',
              ],
              kr: [
                "하, 오늘 또 넘어질까 봐 재밌긴 하네.",
                "하, 아까 넘어진 거 계속 생각나. 너무 웃겼어!",
                "솔직히 아직도 속으로 웃고 있어. 너무 웃겼거든!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That's really mean. Please stop.",
                "It wasn't funny for me. Please be kinder.",
                "I'm hurt that you're still laughing about it.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That was so unkind... 😨",
                "Your friend is really hurt by this... 😨",
                "Still laughing about it makes things much worse! 😨",
              ],
              emotionText: [
                "Wondering if your friend will fall again shows no empathy. Your friend already feels embarrassed enough! 💜",
                "Saying you keep thinking about the fall and laughing about it is deeply hurtful. Your friend needed kindness! 🌱",
                "Still laughing in your head is one thing, but saying it out loud hurts your friend deeply. Think before you speak! 💛",
              ],
              grammarText: [
                "'I wonder if' introduces an indirect question expressing curiosity. 'Fall again' uses the base verb after 'will'! ✏️",
                "'I keep thinking about' — 'keep + gerund' expresses a continuing action. 'It was so funny' uses past tense! ✅",
                "'I have to admit' introduces an honest confession. 'Still laughing' uses present continuous for an ongoing action! 🌟",
              ],
            },
          ],
        },
        "neutral-bad": {
          background: "/bg/bg_school.png",
          title: [
            "Your Friend is Upset!",
            "An Angry Reaction!",
            "Dealing with Anger!",
          ],
          text: [
            "Your friend is really upset with you for laughing. They confront you outside. What do you say?",
            "Your friend walks up to you angrily outside the classroom. What do you do?",
            "Your friend is visibly upset and comes to talk to you outside. How do you respond?",
          ],
          grammar: [
            "be(is) + 형용사(really upset) 현재 상태를 나타내는 감정 표현.  for + 동명사(laughing) 이유를 나타냄",
            "동사(walks up) + 전치사구(to you) 다가가다 의미. angrily 화나게 라는 의미의 부사. outside the classroom 장소를 나타내는 전치사구",
            "상태 형용사(is visibly) + 부사(upset) 눈에 띄게 화가 난 상태를 의미",
          ],
          scene: { hero: "hero_surprised", friend: "friend1_angry" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I went too far. I\'m really sorry."',
                '"I\'m sorry. That was too much of me to say."',
                '"I apologize. What I said was completely out of line."',
              ],
              kr: [
                "내가 너무 심했어. 정말 미안해.",
                "미안해. 내가 너무 심하게 말했어.",
                "사과할게. 내가 한 말이 완전히 선을 넘었어.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you for saying that. I feel a bit better.",
                "I appreciate your apology. Let's move on.",
                "That means a lot. Thank you for understanding.",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "A brave and honest apology! 😍",
                "You took responsibility beautifully! 😍",
                "That was a mature and sincere apology! 😍",
              ],
              emotionText: [
                "Admitting you went too far takes courage. Your friend can see you mean it and starts to feel better!",
                "Taking responsibility with 'that was too much' shows real understanding. Your friend appreciates your honesty!",
                "'Out of line' shows you understand the seriousness. Your friend feels truly heard and respected!",
              ],
              grammarText: [
                "'I went too far' — 'go too far' is an idiom meaning to exceed acceptable limits. Past tense used here! ✏️",
                "'That was too much of me' — 'too much' indicates excess. 'Of me' shows self-reflection! ✅",
                "'Out of line' is an idiom meaning inappropriate or unacceptable. 'Completely' adds strong emphasis! 🌟",
              ],
            },
            {
              en: [
                '"Why are you so upset about it?"',
                '"What are you so angry about? I didn\'t mean anything by it."',
                '"Why are you making such a big deal out of this?"',
              ],
              kr: [
                "뭐가 그리 화가 난 거야?",
                "왜 그렇게 화가 난 거야? 별 뜻 없었는데.",
                "왜 이걸 이렇게 크게 만드는 거야?",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Because you laughed at me when I was hurt!",
                "Because what you said was hurtful, even if you didn't mean it.",
                "Because my feelings matter too!",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_angry" },
              feedbackTitle: [
                "Hmm, that sounds defensive... 😐",
                "Your friend needed an apology, not a question... 😐",
                "That minimizes your friend's feelings... 😐",
              ],
              emotionText: [
                "Asking 'why are you upset' when you know what you did feels like you're avoiding responsibility. Try apologizing first!",
                "'I didn't mean anything by it' might be true, but your friend was still hurt. Intent doesn't erase impact!",
                "Calling their reaction 'a big deal' dismisses your friend's real feelings. Their emotions are always valid!",
              ],
              grammarText: [
                "'Why are you so upset?' uses present continuous to ask about a current emotional state. 'So' intensifies! ✏️",
                "'I didn't mean anything by it' — past negative to explain intention. 'Mean' here = intend! ✅",
                "'Making a big deal out of this' — 'make a big deal' is an idiom meaning to exaggerate importance! 🌟",
              ],
            },
            {
              en: [
                '"You fell by yourself! Why are you angry at me?"',
                '"I didn\'t push you! Why are you blaming me?"',
                '"It\'s not my fault you fell. Why are you taking it out on me?"',
              ],
              kr: [
                "너 혼자 넘어져놓고 왜 나한테 화를 내?",
                "내가 넘어뜨린 것도 아닌데 왜 나를 탓해?",
                "네가 넘어진 게 내 잘못도 아닌데 왜 나한테 화풀이야?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Because you laughed at me! That's why!",
                "I'm not blaming you for falling. I'm upset because you laughed!",
                "You laughed at me when I was hurting. That's what hurt!",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That completely misses the point... 😨",
                "Your friend is upset about the laughing, not the fall! 😨",
                "Deflecting blame makes everything worse... 😨",
              ],
              emotionText: [
                "Your friend isn't angry about falling — they're angry because you laughed. You're missing the real issue! 💜",
                "Saying 'I didn't push you' avoids the real problem. Your friend is hurt by your reaction, not the fall itself! 🌱",
                "'Taking it out on me' deflects from your own actions. Your friend needs you to understand why they're hurt! 💛",
              ],
              grammarText: [
                "'You fell by yourself' — 'by yourself' means alone, without help. A reflexive prepositional phrase! ✏️",
                "'I didn't push you' — simple past negative to deny an action. 'Blaming' is a gerund used as a noun! ✅",
                "'Taking it out on me' — 'take it out on' is a phrasal verb meaning to unfairly direct anger at someone! 🌟",
              ],
            },
          ],
        },
        "bad-good": {
          background: "/bg/bg_school.png",
          title: [
            "Your Friend Forgives You!",
            "A Second Chance!",
            "Moving Forward Together!",
          ],
          text: [
            "Your friend accepted your apology and seems calmer now. What do you say next?",
            "After your apology, your friend is starting to calm down. What do you do?",
            "Your friend has forgiven you. Now is your chance to make things right. What do you say?",
          ],
          grammar: [
            "과거 시제(accepted) + 목적어(your apology) 사과를 받아들였다는 의미. seem + 형용사 비교급(calmer now) 지금 더 침착해 보인다는 의미",
            "현재진행형(is starting) + 부정사(to calm down) 점점 차분해지고 있다는 상태 표현",
            "현재완료 시제(has forgiven you) 용서했다는 완료된 상태 표현",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"I'm sorry about earlier. Let's walk to class together!\"",
                '"I feel bad about what I said. Let\'s head to class together."',
                '"I\'m truly sorry for what happened. Shall we walk to class together?"',
              ],
              kr: [
                "방금은 미안해. 교실까지 같이 가자!",
                "내가 한 말이 마음에 걸려. 같이 교실 가자.",
                "진짜 미안해. 같이 교실까지 걸어갈까?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you! Let's go together!",
                "I appreciate that. Let's go!",
                "That means a lot. Yes, let's walk together!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "A wonderful recovery! 😍",
                "You made things right beautifully! 😍",
                "That was a perfect way to move forward! 😍",
              ],
              emotionText: [
                "Following your apology with a kind invitation shows you really mean it. Your friend feels happy again!",
                "Saying 'I feel bad' shows genuine remorse. Suggesting to walk together seals the friendship! 🌟",
                "'Truly sorry' is a powerful phrase. 'Shall we' is a gentle and polite way to suggest something together!",
              ],
              grammarText: [
                "'I'm sorry about earlier' — 'about' connects the apology to the reason. 'Let's' is a contraction of 'let us'! ✏️",
                "'I feel bad about what I said' — indirect speech using 'what I said'. 'Head to' means to go toward! ✅",
                "'Shall we' is a formal and polite way to make a suggestion. 'Truly' adds sincerity to the apology! 🌟",
              ],
            },
            {
              en: [
                "\"Okay, let's just hurry. We'll be late.\"",
                '"Alright, forget it. Let\'s just get to class."',
                '"Fine, let\'s just go. No point standing here."',
              ],
              kr: [
                "됐고, 일단 빨리 가자. 수업에 늦겠어.",
                "그래, 됐어. 그냥 교실 가자.",
                "알았어, 그냥 가자. 여기 서 있어봤자야.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Okay... let's go then.",
                "Alright. I guess that's that.",
                "Fine. Let's go.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Moving on, but a bit coldly... 😐",
                "Your friend wanted more warmth... 😐",
                "Practical, but your friend deserved kindness! 😐",
              ],
              emotionText: [
                "You're moving forward, but 'forget it' dismisses what just happened. Your friend deserved a warmer moment!",
                "Getting to class is important, but your friend needed to feel the apology was real. A kind word helps!",
                "'No point standing here' is practical but cold. Your friend is still processing the earlier hurt!",
              ],
              grammarText: [
                "'Let's just hurry' — 'just' downplays the urgency while 'let's' suggests doing it together! ✏️",
                "'Forget it' is an idiom meaning to ignore something. 'Just' minimizes the action that follows! ✅",
                "'No point' is an idiom meaning 'there is no reason to'. 'Standing here' is a gerund as subject! 🌟",
              ],
            },
            {
              en: [
                '"Try not to fall again on the way to class!"',
                '"Be careful walking. We don\'t want another fall!"',
                '"Watch your step! We can\'t have you falling again!"',
              ],
              kr: [
                "가면서 또 넘어질 거야?",
                "걸을 때 조심해. 또 넘어지면 안 되잖아!",
                "발밑 조심해! 또 넘어지면 안 되잖아!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That's not funny. I thought you apologized.",
                "Why would you say that after apologizing?",
                "I thought we were past this. That really stings.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That ruined the apology! 😨",
                "Your friend thought you meant it... 😨",
                "That undid all the good of your apology! 😨",
              ],
              emotionText: [
                "Making another joke right after apologizing shows your friend the apology wasn't sincere. That really hurts! 💜",
                "Your friend believed your apology, and then you made another joke. That breaks trust completely! 🌱",
                "Bringing up the fall again after apologizing makes your friend feel like you never really meant sorry! 💛",
              ],
              grammarText: [
                "'Try not to fall again' — 'try not to + verb' is used to advise against something. 'Again' shows repetition! ✏️",
                "'We don't want another fall' — 'want' + noun expresses a desire. 'Another' indicates one more of the same! ✅",
                "'Watch your step' is a common idiom meaning to be careful. 'We can't have you falling' is a causative structure! 🌟",
              ],
            },
          ],
        },
        "bad-neutral": {
          background: "/bg/bg_classroom.png",
          title: [
            "Back in the Classroom!",
            "Meeting Again in Class!",
            "An Awkward Moment in Class!",
          ],
          text: [
            "You see your friend again in class. They look away when they see you. What do you do?",
            "Your friend is sitting in class and avoids eye contact. What do you say?",
            "In class, your friend seems to be ignoring you. How do you handle it?",
          ],
          grammar: [
            "감각동사(look) + 부사(away) 고개를 돌리다, 시선을 피하다 의미. 시간 부사절(when) + 주어(they) + 동사(see)",
            "현재진행형(is sitting) 앉아 있다는 상태 표현. 동사(avoid) + 목적어(eye contact) 눈을 마주치지 않는다 의미",
            "동사(seem) + 현재분사구문(to be ignoring) 무시하는 것 같다는 추측 표현",
          ],
          scene: { hero: "hero_thinking", friend: "friend1_sad" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Are you feeling a bit better now?"',
                '"Hey, how are you doing? Are you feeling better?"',
                '"I wanted to check in. Are you feeling any better now?"',
              ],
              kr: [
                "다친 데 좀 괜찮아졌어?",
                "야, 어때? 좀 나아졌어?",
                "어떤지 물어보고 싶었어. 좀 나아졌어?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "A little better, thanks for asking.",
                "Getting there. Thanks for checking.",
                "I'm okay. I appreciate you asking.",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "A great first step! 😍",
                "Checking in shows you care! 😍",
                "That was a kind and thoughtful question! 😍",
              ],
              emotionText: [
                "Asking how your friend is doing shows you care about how they feel. It's a great step toward making things better!",
                "Checking in after a difficult moment is exactly what a caring friend does. Your friend feels noticed!",
                "'I wanted to check in' shows intentional care. Your friend appreciates that you thought of them!",
              ],
              grammarText: [
                "'Are you feeling better?' uses present continuous for current state. 'A bit' softens the question! ✏️",
                "'How are you doing?' is a common check-in phrase. 'Feeling better' uses comparative adjective! ✅",
                "'I wanted to check in' — past tense shows intention. 'Any better' uses 'any' to soften a comparison! 🌟",
              ],
            },
            {
              en: [
                '"Ahem. So, about earlier... it\'s fine now, right?"',
                '"Look, what happened earlier is over. Can we just move on?"',
                '"I think we should just forget what happened and move on."',
              ],
              kr: [
                "아까 그런 거 별거 아냐.",
                "있잖아, 아까 일은 끝난 거잖아. 그냥 넘어가면 안 돼?",
                "그냥 아까 일은 잊고 넘어가는 게 좋을 것 같아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "It was a big deal to me though...",
                "I can't just forget it that easily.",
                "I need a little more time than that.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Hmm, dismissing feelings again... 😐",
                "Your friend isn't ready to move on yet... 😐",
                "Asking to forget isn't the same as apologizing! 😐",
              ],
              emotionText: [
                "Saying 'it's not a big deal' tells your friend their feelings don't matter. They do — always!",
                "Telling someone to 'just move on' skips the step where you acknowledge their hurt. That step matters!",
                "Forgetting isn't healing. Your friend needs an apology, not just a request to forget!",
              ],
              grammarText: [
                "'It's fine now, right?' is a tag question seeking agreement. 'Fine' is subjective and can feel dismissive! ✏️",
                "'Can we just move on?' — 'just' minimizes. 'Move on' is a phrasal verb meaning to continue past something! ✅",
                "'I think we should' — 'think + should' softens a suggestion. 'Forget' and 'move on' are both verb phrases! 🌟",
              ],
            },
            {
              en: [
                '"Ha! The funny fall kid is back in class!"',
                '"Hey everyone, the one who fell is here!"',
                '"Look who\'s back — the one with the famous fall!"',
              ],
              kr: [
                "아까 웃긴 애 다시 만났네.",
                "야, 다들 봐, 넘어진 애 왔다!",
                "봐봐, 유명하게 넘어진 애가 왔네!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Stop it. That's really mean.",
                "Why would you say that in front of everyone?",
                "That's humiliating. Please stop.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh no! That was so cruel... 😨",
                "Your friend is deeply embarrassed now! 😨",
                "That was public humiliation! 😨",
              ],
              emotionText: [
                "Calling your friend 'the funny fall kid' in front of others is deeply hurtful and embarrassing. 💜",
                "Announcing your friend's fall to the whole class is cruel. Your friend feels humiliated and betrayed! 🌱",
                "Making your friend's painful moment into a public joke is one of the unkindest things you can do. 💛",
              ],
              grammarText: [
                "'The funny fall kid' — using nouns as modifiers creates a compound noun. Very descriptive but hurtful here! ✏️",
                "'Hey everyone' is an attention-getting phrase. 'The one who fell' is a relative clause identifying your friend! ✅",
                "'Look who's back' is an exclamatory phrase. 'Famous' used sarcastically here means well-known for something bad! 🌟",
              ],
            },
          ],
        },
        "bad-bad": {
          background: "/bg/bg_classroom.png",
          title: [
            "The Teacher Finds Out!",
            "Called Out in Class!",
            "Facing the Consequences!",
          ],
          text: [
            "The teacher knows and asks you to speak in class. What do you say?",
            "The teacher heard about what happened and calls you out in front of the class. What do you say?",
            "The teacher has been told about the incident and looks at you seriously. How do you respond?",
          ],
          grammar: [
            "동사(asks) + 목적어(you) + 부정사(to speak) 너에게 말하라고 요청하다는 의미. 'in class' 교실에서라는 장소를 나타내는 전치사구",
            "'calls you out' 불러내다. 'in front of the class' 장소를 나타내는 전치사구",
            "'has been told about the incident' 현재완료 수동태로 그 사건에 대해 들었다는 의미. 동사(looks) + 목적어(at you) + 부사(seriously) 진지하게 쳐다보다",
          ],
          scene: {
            hero: "hero_surprised",
            friend: "friend1_angry",
            extra: "teacher_angry",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                '"I was wrong, teacher. I\'m very sorry."',
                '"I went too far. I sincerely apologize, teacher."',
                '"I was completely out of line. I apologize to my friend and to you, teacher."',
              ],
              kr: [
                "제가 너무 심했어요. 죄송합니다.",
                "제가 너무 심했어요. 진심으로 사과드립니다, 선생님.",
                "제가 완전히 선을 넘었어요. 친구와 선생님께 사과드립니다.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you for apologizing.",
                "I appreciate your honesty.",
                "That took courage. Thank you.",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
                extra: "teacher_happy",
              },
              feedbackTitle: [
                "A brave and honest apology! 😍",
                "You took responsibility with grace! 😍",
                "That was a truly mature response! 😍",
              ],
              emotionText: [
                "Admitting to the teacher that you were wrong takes real courage. Everyone respects your honesty!",
                "A sincere apology to both the teacher and friend shows genuine remorse. You've grown from this!",
                "Apologizing to both parties shows real maturity. Your teacher and friend both feel the sincerity!",
              ],
              grammarText: [
                "'I was wrong' — simple past to admit a past mistake. 'Very sorry' uses an intensifier for emphasis!",
                "'I went too far' is an idiom for exceeding limits. 'Sincerely' makes the apology more genuine!",
                "'Out of line' is an idiom for inappropriate behavior. Apologizing to both parties shows full accountability!",
              ],
            },
            {
              en: [
                '"I didn\'t push them. They just fell."',
                '"It wasn\'t my fault. I was just walking by."',
                '"I didn\'t do anything wrong. I was just there."',
              ],
              kr: [
                "제가 넘어뜨린 거 아니에요.",
                "제 잘못이 아니에요. 그냥 지나가던 거였어요.",
                "저는 잘못한 게 없어요. 그냥 거기 있었을 뿐이에요.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "But you still laughed at him...",
                "That's not the whole story though.",
                "You didn't push him, but you still weren't kind.",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_sad",
                extra: "teacher_thinking",
              },
              feedbackTitle: [
                "Half true, but missing the point... 😐",
                "The teacher can see there's more to it... 😐",
                "Defending yourself isn't the same as taking responsibility! 😐",
              ],
              emotionText: [
                "You're right that you didn't push them — but the laughter is what hurt. The teacher knows there's more!",
                "Being 'just there' doesn't explain the laughing. Your teacher and friend need the full truth!",
                "Saying you didn't do anything wrong ignores how your laughter affected your friend. Think about the full picture!",
              ],
              grammarText: [
                "'I didn't push them' — simple past negative to deny an action. 'They just fell' uses 'just' to minimize!",
                "'It wasn't my fault' — past negative of 'be'. 'Walking by' is a gerund phrase showing incidental presence!",
                "'I was just there' — 'just' minimizes presence. 'I didn't do anything wrong' is a blanket denial!",
              ],
            },
            {
              en: [
                '"Why are you always taking their side, teacher?"',
                '"This isn\'t fair! You always blame me!"',
                "\"I can't believe you're siding with them. That's not right, teacher!\"",
              ],
              kr: [
                "선생님도 항상 친구 편만 드시네요!",
                "이건 불공평해요! 선생님은 항상 저만 뭐라고 하세요!",
                "선생님이 친구 편을 든다니 믿기지 않아요. 그건 옳지 않아요!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I know you wanted them to say sorry.",
                "I understand you didn’t want to cause trouble.",
                "I see you didn’t want me involved, Try to be more kind.",
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend1_angry",
                extra: "teacher_angry",
              },
              feedbackTitle: [
                "Oh no! That makes everything worse! 😨",
                "Arguing with the teacher won't help! 😨",
                "That's very disrespectful and hurtful! 😨",
              ],
              emotionText: [
                "Accusing the teacher of taking sides when you were in the wrong makes the situation much harder.",
                "Saying 'you always blame me' is unfair to the teacher who is just trying to help. Stay calm!",
                "Arguing with the teacher in front of the class shows disrespect. It also hurts your friend more!",
              ],
              grammarText: [
                "'Why are you always taking their side?' — present continuous + 'always' expresses irritation!",
                "'This isn't fair' — present tense complaint. 'You always blame me' — 'always' with present tense shows a pattern!",
                "'I can't believe you're siding with them' — present continuous in disbelief. 'Siding with' is a phrasal verb!",
              ],
            },
          ],
        },
      },
    },
  ],
};

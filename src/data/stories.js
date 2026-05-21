export const STORIES = [
  {
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
          "fall의 과거시제, 현재 단순형(is watching), will + 동사원형으로 의지나 계획묻기",
          "과거시제(fell) + 접속사(and), 현재진행형(is watching), should + 동사원형으로 조언 혹은 요청하기",
          "현재완료형(has fallen), 접속사(while), 조동사(will) + 동사원형으로 미래의지 묻기",
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
        grammar: [
          "'get up'의 과거시제, 'still sniffles'는 '훌쩍이고 있다'는 현재진행 상태를 나타내는 동사",
          "현재진행형(is standing), 'sobbing quietly'는 동명사 + 부사로 동작을 묘사",
          "'stand up'의 과거시제, 'with your help'는 부사구, 현재진행형(is still crying softly)로 현재 상태를 나타냄",
        ],
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
    ],
  },
];

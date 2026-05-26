export const day3 = {
  id: "art_class",
  background: "/bg/bg_artroom.png",
  steps: [
    {
      id: "step1",
      background: "/bg/bg_artroom.png",
      title: ["Art Class Today!", "Oil Paint Time!", "A New Art Experience!"],
      text: [
        "The teacher is explaining how to use oil paints! What will you say?",
        "Your teacher is showing the class how to paint with oil paints. How do you respond?",
        "Your teacher is introducing oil paint techniques to the class. What do you say?",
      ],
      grammar: [
        "현재진행형(is explaining)으로 지금 설명하고 있는 상황 표현. 'What will you say?' 미래의지를 묻는 의문문",
        "현재진행형(is showing)으로 시범을 보이고 있는 상황 표현. 'How do you respond?' 현재 시제 의문문",
        "현재진행형(is introducing)으로 소개하고 있는 상황 표현. 'What do you say?' 현재 시제 의문문",
      ],
      scene: {
        hero: "hero_happy",
        friend: "friend2_happy",
        extra: "teacher_happy",
      },
      newCharacter: "teacher",
      hideFriend: true,
      choices: [
        {
          en: [
            "\"Teacher, I've always wanted to try this! I can't wait to start!\"",
            '"I\'ve been wanting to try oil paints! This is so exciting!"',
            "\"I've always been curious about oil paints! I'm really looking forward to this!\"",
          ],
          kr: [
            "선생님, 이런 거 해보고 싶었어요! 빨리 써보고 싶어요!",
            "유화 물감 써보고 싶었는데! 너무 신나요!",
            "유화 물감 항상 궁금했어요! 정말 기대돼요!",
          ],
          type: "good",
          emoji: "💗",
          friendReaction: [
            "Me too! Let's do our best!",
            "Same! I'm so excited!",
            "I know right! This is going to be so fun!",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend2_happy",
            extra: "teacher_happy",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "What great enthusiasm! 😍",
            "Your excitement is contagious! 😍",
            "What a positive attitude! 😍",
          ],
          emotionText: [
            "Showing excitement about learning makes the whole class feel more energized. Your teacher loves your enthusiasm!",
            "Your excitement spreads to others. Your friend is even more motivated to try their best!",
            "Expressing curiosity shows a great attitude toward learning. Your teacher is delighted!",
          ],
          grammarText: [
            "'I've always wanted to' — present perfect for a long-held desire. 'Can't wait to' = very eager to do something!",
            "'I've been wanting to' — present perfect continuous showing an ongoing desire. 'So exciting' uses 'so' as an intensifier!",
            "'I've always been curious about' — present perfect for a persistent feeling. 'Looking forward to' = anticipating with pleasure!",
          ],
        },
        {
          en: [
            '"So we just use this to paint, right?"',
            '"Okay, so I just use these paints on the canvas?"',
            '"I see. So we apply the oil paints directly onto the canvas, correct?"',
          ],
          kr: [
            "그냥 이걸로 그리면 되는 거죠?",
            "그러니까 이 물감을 캔버스에 쓰면 되는 거예요?",
            "그렇군요. 유화 물감을 캔버스에 직접 바르면 되는 거죠?",
          ],
          type: "neutral",
          emoji: "🤍",
          friendReaction: [
            "Yeah, I think so. Let's try it!",
            "That's what I understood too!",
            "Yes, that's right. Shall we begin?",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend2_happy",
            extra: "teacher_happy",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "A practical question! 😐",
            "Checking to make sure — that's smart! 😐",
            "Good thinking to confirm! 😐",
          ],
          emotionText: [
            "Asking to confirm is a good habit! It shows you're paying attention, even if not super excited.",
            "Making sure you understand the instructions is smart. A little more enthusiasm would be great though!",
            "Clarifying before you start is wise. Your teacher is glad you're checking rather than making mistakes!",
          ],
          grammarText: [
            "'So we just + verb, right?' — 'so' introduces a conclusion. 'Right?' is a tag question seeking confirmation!",
            "'I just use these paints' — 'just' simplifies the action. 'Okay, so' is a common way to confirm understanding!",
            "'Apply... directly onto' — formal vocabulary for painting. 'Correct?' is a polite confirmation-seeker!",
          ],
        },
        {
          en: [
            '"Ugh, I really don\'t like drawing. This is going to be boring..."',
            "\"Hmm, painting isn't really my thing. I'm not great at art.\"",
            "\"Honestly, I'm not sure I'm going to enjoy this. Art was never my strong suit.\"",
          ],
          kr: [
            "아, 저 그림 진짜 별론데... 지루할 것 같아요.",
            "흠, 그림 그리는 건 별로예요. 미술을 잘 못해서요.",
            "솔직히 즐길 수 있을지 모르겠어요. 미술이 원래 제 장기가 아니라서요.",
          ],
          type: "bad",
          emoji: "💔",
          friendReaction: [
            "Oh... don't say that! It might be fun!",
            "It's okay! I'm not great either. Let's try together!",
            "Don't give up before you start! You might surprise yourself!",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend2_thinking",
            extra: "teacher_thinking",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "Try to keep an open mind! 😨",
            "Don't give up before you start! 😨",
            "A negative mindset makes everything harder! 😨",
          ],
          emotionText: [
            "Saying it's going to be boring before you try makes it hard to enjoy anything. Give it a chance!",
            "Saying art 'isn't your thing' before trying closes the door on a new experience. You might love it!",
            "'Never my strong suit' might be true — but every artist starts somewhere! Try with an open heart!",
          ],
          grammarText: [
            "'This is going to be boring' — 'going to' for a near-future prediction. 'Really don't like' emphasizes the negative!",
            "'Not really my thing' — informal expression meaning something doesn't suit you. 'Not great at' shows self-assessed lack of skill!",
            "'Not sure I'm going to enjoy' — present + future uncertainty. 'Strong suit' is an idiom meaning a skill or strength!",
          ],
        },
      ],
    },
    {
      id: "step2",
      background: "/bg/bg_artroom.png",
      paths: {
        good: {
          title: [
            "Your friend asks for your opinion!",
            "Time to Help a Friend!",
            "A Creative Moment!",
          ],
          text: [
            "You're painting and your friend asks what you think of their picture. What will you say?",
            "Your friend looks at their painting and asks for your honest opinion. How do you respond?",
            "While painting, your friend turns to you and asks what you think. What do you say?",
          ],
          grammar: [
            "현재진행형(painting)으로 진행 중인 활동 표현. 'what you think' 간접의문문으로 의견을 묻는 표현",
            "'asks for your honest opinion' 정직한 의견을 묻는 표현. 'How do you respond?' 현재 시제 의문문",
            "'turns to you' 방향 전환을 나타내는 표현. 'What do you think?' 현재 시제로 의견을 묻는 의문문",
          ],
          scene: { hero: "hero_happy", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I think making this part brighter would look amazing!"',
                '"If you add a bit more brightness here, it\'ll really pop!"',
                '"Adding more vibrancy to this area could make the whole piece come alive!"',
              ],
              kr: [
                "여기 색을 더 밝게 하면 좋을 것 같아!",
                "여기 밝기를 좀 더 주면 훨씬 살아날 것 같아!",
                "이 부분에 생동감을 더 주면 작품 전체가 살아날 것 같아!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh wow, good idea! Let me try that!",
                "Really? I'll try it! Thanks!",
                "That's such a helpful suggestion! I'll do that!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "Such a helpful friend! 😍",
                "Great artistic advice! 😍",
                "What a thoughtful suggestion! 😍",
              ],
              emotionText: [
                "Giving a specific, positive suggestion shows you're really looking at your friend's work. They feel supported!",
                "'It'll really pop' is an encouraging phrase. Your friend feels motivated to keep going!",
                "Using art vocabulary like 'vibrancy' shows genuine interest. Your friend feels like they have a real art partner!",
              ],
              grammarText: [
                "'Making this part brighter' — gerund as subject. 'Would look' = conditional for a suggestion!",
                "'If you add... it'll really pop' — first conditional for a likely suggestion. 'Pop' means to stand out vividly!",
                "'Adding more vibrancy' — gerund phrase. 'Come alive' is an idiom meaning to become vivid and interesting!",
              ],
            },
            {
              en: [
                '"Hmm, just do whatever. It\'ll be fine."',
                '"It looks okay. Just keep going I guess."',
                '"I\'m not sure. Just do what feels right to you."',
              ],
              kr: [
                "음, 그냥 대충해~. 괜찮을 거야.",
                "괜찮아 보이는데. 그냥 계속해.",
                "잘 모르겠어. 그냥 네가 느끼는 대로 해.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. I'll just keep going then.",
                "Hmm, okay. I was hoping for more feedback though.",
                "Okay... I'll figure it out myself.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_sad" },
              feedbackTitle: [
                "A little dismissive... 😐",
                "Your friend wanted real feedback! 😐",
                "That was a bit unhelpful... 😐",
              ],
              emotionText: [
                "Your friend asked because they trust your opinion. 'Just do whatever' feels like you don't care!",
                "'Keep going I guess' isn't very encouraging. Your friend needed a real thought from you!",
                "Saying 'do what feels right' is safe but doesn't really help. Your friend wanted your genuine opinion!",
              ],
              grammarText: [
                "'Just do whatever' — 'just' minimizes. 'Whatever' as a pronoun shows indifference!",
                "'Keep going I guess' — 'keep + gerund' for continuation. 'I guess' shows reluctance!",
                "'Do what feels right to you' — relative clause using 'what'. A polite but noncommittal response!",
              ],
            },
            {
              en: [
                '"Honestly? It looks really weird. Maybe start over?"',
                '"I don\'t think it looks good at all. Have you considered starting fresh?"',
                '"To be honest, I think there are too many issues. Starting over might be the best option."',
              ],
              kr: [
                "솔직히? 너무 이상해. 처음부터 다시 하는 게 어때?",
                "솔직히 별로인 것 같아. 처음부터 다시 생각해봤어?",
                "솔직히 문제가 너무 많은 것 같아. 다시 시작하는 게 나을 수도 있어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... that's harsh. I worked really hard on this.",
                "Really? I thought it was getting better...",
                "That's a bit discouraging. I'll try to keep going.",
              ],
              scene: { hero: "hero_thinking", friend: "friend2_sad" },
              feedbackTitle: [
                "Oh! That was too harsh... 😨",
                "Your friend's confidence dropped... 😨",
                "That was very discouraging! 😨",
              ],
              emotionText: [
                "Telling someone their art looks 'really weird' is hurtful. Honest feedback can still be kind!",
                "Suggesting someone start over dismisses all their effort. Try finding something positive first!",
                "'Too many issues' is overwhelming to hear. A better approach is to mention one thing to improve!",
              ],
              grammarText: [
                "'Honestly?' — using a question form for dramatic honesty. 'Start over' is a phrasal verb meaning to begin again!",
                "'I don't think it looks good at all' — 'at all' intensifies the negative. 'Starting fresh' = starting over!",
                "'To be honest' is a discourse marker for introducing a frank opinion. 'Might be' softens the suggestion!",
              ],
            },
          ],
        },
        neutral: {
          title: [
            "Your friend asks for your opinion!",
            "A Friend Seeks Advice!",
            "What Do You Think?",
          ],
          text: [
            "While painting, your friend asks what you think of their work. What will you say?",
            "Your friend pauses and asks what you honestly think about their painting. How do you respond?",
            "Your friend looks at you hopefully and asks for your thoughts on their painting. What do you say?",
          ],
          grammar: [
            "현재진행형(painting)으로 진행 중인 활동 표현. 'what you think of' 간접의문문",
            "동사(pauses)로 잠시 멈추는 행동 표현. 'what you honestly think' 부사(honestly)로 솔직한 의견을 구함",
            "부사(hopefully)로 희망을 가진 표정을 표현. 'thoughts on' 전치사구로 의견을 구하는 표현",
          ],
          scene: { hero: "hero_thinking", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"If you change it like this, I think it\'ll look prettier!"',
                '"Try doing it this way — I think it\'ll look much better!"',
                '"I think adjusting this part could really improve the overall look!"',
              ],
              kr: [
                "여길 이렇게 하면 더 예쁘겠다!",
                "이렇게 해봐 — 훨씬 예뻐질 것 같아!",
                "이 부분을 이렇게 조정하면 전체적으로 훨씬 좋아질 것 같아!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh that's a great idea! Thank you!",
                "Really? Let me try! Thanks for the tip!",
                "That's really helpful! I'll try that now!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "Great advice! 😍",
                "That was really helpful! 😍",
                "What a thoughtful suggestion! 😍",
              ],
              emotionText: [
                "Giving a concrete suggestion shows you genuinely looked at their work. Your friend feels helped!",
                "Saying 'try doing it this way' is encouraging and direct. Your friend immediately wants to try it!",
                "Pointing out a specific area to improve is useful feedback. Your friend feels guided and supported!",
              ],
              grammarText: [
                "'If you change it like this' — first conditional. 'I think it'll look prettier' = prediction!",
                "'Try doing it this way' — imperative + gerund. 'Much better' uses 'much' to intensify the comparative!",
                "'Adjusting this part could really improve' — gerund as subject. 'Could' for a polite suggestion!",
              ],
            },
            {
              en: [
                '"Why are you working so hard? Just relax a bit."',
                '"You\'re putting in a lot of effort. Maybe take it easy?"',
                "\"I didn't realize you'd take this so seriously. Just have fun with it.\"",
              ],
              kr: [
                "뭘 그렇게 열심히 해? 좀 쉬엄쉬엄해.",
                "너무 열심히 하는 것 같은데. 좀 편하게 해도 되지 않아?",
                "이렇게 진지하게 할 줄 몰랐어. 그냥 재미있게 해.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "I just want it to look good...",
                "I like trying hard at things. It's okay.",
                "I want to do my best. Is that wrong?",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_surprised" },
              feedbackTitle: [
                "Your friend just wants to do well! 😐",
                "Not everyone wants to take it easy! 😐",
                "Effort is always a good thing! 😐",
              ],
              emotionText: [
                "Your friend is proud of their effort. Telling them to relax feels like you're dismissing their dedication!",
                "Everyone has different levels of care. Questioning your friend's effort makes them feel judged!",
                "There's nothing wrong with taking art seriously! Your friend feels slightly judged for caring too much.",
              ],
              grammarText: [
                "'Why are you working so hard?' — present continuous + 'so' for emphasis. Shows mild criticism!",
                "'Maybe take it easy?' — 'maybe' softens the suggestion. 'Take it easy' is an idiom for relaxing!",
                "'Just have fun with it' — imperative + 'just' to minimize. 'I didn't realize' shows mild surprise!",
              ],
            },
            {
              en: [
                '"Honestly? No matter what you change, I think it\'ll still look off."',
                '"I\'m not sure any changes would help at this point, to be honest."',
                '"I hate to say it, but I think it might look strange no matter what you do."',
              ],
              kr: [
                "솔직히? 어딜 바꿔도 다 이상할 것 같은데.",
                "솔직히 이 시점에서 뭘 바꿔도 별로 달라지지 않을 것 같아.",
                "말하기 싫지만 뭘 해도 이상해 보일 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Wow... that really hurt. I thought you were my friend.",
                "That's so discouraging. I was trying my best.",
                "I didn't need that kind of feedback. That really stings.",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! That was very hurtful... 😨",
                "Your friend is really hurt now... 😨",
                "That was crushing to hear! 😨",
              ],
              emotionText: [
                "'No matter what you change it'll look off' — this leaves no hope for improvement. Always find something positive!",
                "Saying 'no changes would help' is very discouraging. Every painting can be improved with encouragement!",
                "'No matter what you do' sounds hopeless. Your friend needed support, not a verdict!",
              ],
              grammarText: [
                "'No matter what you change' — concessive clause showing any action won't help. Very absolute!",
                "'I'm not sure any changes would help' — conditional with 'would'. 'At this point' = by now!",
                "'I hate to say it, but' — discourse marker for softening bad news. 'No matter what you do' = regardless of actions!",
              ],
            },
          ],
        },
        bad: {
          title: [
            "Your friend asks for your opinion!",
            "A Creative Question!",
            "Your Friend Wants Your Input!",
          ],
          text: [
            "Even though you said you didn't like art, your friend asks what you think of their painting. What do you say?",
            "Your friend smiles and asks what color you think would look good on their painting. How do you respond?",
            "Despite your earlier comment, your friend asks for your opinion on their work. What do you say?",
          ],
          grammar: [
            "'Even though' 양보 접속사로 앞의 내용과 대조되는 상황을 표현. 'what you think of' 간접의문문",
            "동사(smiles and asks) 두 동사를 and로 연결. 'what color... would look good' 간접의문문",
            "'Despite' 전치사로 앞의 내용과 반대되는 상황을 표현. 'your earlier comment' 이전에 한 발언을 나타냄",
          ],
          scene: { hero: "hero_lookaway", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Oh, what about pink here? I think that could look really pretty!"',
                '"Maybe try pink in this area? I think it would really suit the painting!"',
                '"I think a soft pink here could add a lovely warmth to the whole piece!"',
              ],
              kr: [
                "오, 여기는 분홍색으로 하면 어때? 정말 예쁠 것 같아!",
                "이 부분에 분홍색 써봐? 그림에 잘 어울릴 것 같아!",
                "여기 은은한 분홍색을 쓰면 작품 전체에 따뜻한 느낌을 줄 것 같아!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh yes! That's a great idea! Thanks!",
                "Pink! I love that! Let me try!",
                "That sounds beautiful! I'll do it!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a turnaround! 😍",
                "Great color suggestion! 😍",
                "You found your artistic side! 😍",
              ],
              emotionText: [
                "Even if you don't love art class, giving a kind and creative suggestion shows real friendship!",
                "Suggesting a specific color shows you're making a real effort. Your friend is touched by your input!",
                "Using descriptive language like 'soft pink' and 'lovely warmth' shows genuine artistic thought!",
              ],
              grammarText: [
                "'What about + noun?' — a common phrase for making suggestions. 'Could look' = conditional possibility!",
                "'Maybe try + noun' — 'maybe' softens the suggestion. 'Would really suit' = would fit/match well!",
                "'Could add a lovely warmth' — modal + verb for a gentle suggestion. 'The whole piece' = the entire painting!",
              ],
            },
            {
              en: [
                '"Don\'t ask me. Just figure it out yourself."',
                "\"I don't know. I'm not really into art, remember?\"",
                '"Why are you asking me? I told you I don\'t like art."',
              ],
              kr: [
                "나한테 묻지 말고 알아서 해.",
                "몰라. 나 미술 별로라고 했잖아.",
                "왜 나한테 물어봐? 미술 별로라고 했잖아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. Sorry for asking.",
                "Right... sorry. I forgot.",
                "I just thought you might have an idea. Never mind.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_sad" },
              feedbackTitle: [
                "A bit dismissive of your friend! 😐",
                "Your friend just wanted your input! 😐",
                "Even if you don't like art, you can still help! 😐",
              ],
              emotionText: [
                "Your friend asked because they trust you, not because you're an art expert. A kind response goes a long way!",
                "Using 'I don't like art' as an excuse avoids helping. A simple 'how about blue?' would have been enough!",
                "Reminding your friend you don't like art makes them feel bad for asking. Be gentle with their creative effort!",
              ],
              grammarText: [
                "'Don't ask me' — negative imperative. 'Figure it out yourself' uses reflexive pronoun 'yourself'!",
                "'I'm not really into art' — 'into' here means interested in. 'Remember?' seeks confirmation!",
                "'Why are you asking me?' — present continuous in a rhetorical question showing mild annoyance!",
              ],
            },
            {
              en: [
                '"Why do you keep bothering me? I\'m trying to focus."',
                '"Can you stop asking me things? I\'m busy with my own work."',
                '"I already told you I don\'t like art. Stop asking me for help."',
              ],
              kr: [
                "왜 자꾸 귀찮게 해? 나도 집중하려고 하는데.",
                "나한테 자꾸 물어보지 마. 나도 내 것 하느라 바빠.",
                "미술 별로라고 했잖아. 나한테 자꾸 도움 요청하지 마.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I was just asking... I didn't mean to bother you.",
                "Sorry... I just wanted your opinion.",
                "I'm sorry. I won't ask again.",
              ],
              scene: { hero: "hero_angry", friend: "friend2_sad" },
              feedbackTitle: [
                "Oh! That was quite harsh! 😨",
                "Your friend feels really rejected now... 😨",
                "That shut your friend down completely... 😨",
              ],
              emotionText: [
                "Calling a friend 'annoying' for asking a simple question is hurtful. They just wanted your thoughts!",
                "'Stop asking me things' is very cold. Your friend feels like a burden when they're just being friendly!",
                "Telling your friend to 'stop asking for help' makes them feel completely shut out. Be kinder!",
              ],
              grammarText: [
                "'Why do you keep + gerund?' — present tense + 'keep + gerund' shows repetitive action that bothers you!",
                "'Can you stop + gerund?' — modal + 'stop + gerund' as a request to cease an action!",
                "'I already told you' — past tense + 'already' showing prior communication. Very firm phrasing!",
              ],
            },
          ],
        },
      },
    },
    {
      id: "step3",
      background: "/bg/bg_artroom.png",
      paths: {
        "good-good": {
          background: "/bg/bg_artroom.png",
          title: [
            "Time to share your work!",
            "Presentation Time!",
            "Sharing Our Art!",
          ],
          text: [
            "Everyone is presenting their paintings! Your friend shows theirs. What do you say?",
            "Your friend presents their finished painting to the class. How do you react?",
            "Your friend holds up their completed painting proudly. What do you say?",
          ],
          grammar: [
            "현재진행형(is presenting)으로 발표하고 있는 상황 표현. 'What do you say?' 현재 시제 의문문",
            "동사(presents)로 완료된 그림을 발표하는 행동 표현. 'How do you react?' 현재 시제 의문문",
            "부사(proudly)로 자랑스럽게 보여주는 모습 표현. 'What do you say?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_happy", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"That\'s amazing! The colors are so vibrant and alive!"',
                '"Wow, it turned out so well! The colors really pop!"',
                '"That is genuinely stunning! The way you used color is incredible!"',
              ],
              kr: [
                "정말 멋져! 색감이 살아있네~",
                "와, 진짜 잘됐다! 색깔이 정말 살아있어!",
                "진짜 멋진데! 색감을 쓴 방식이 정말 대단해!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you so much! Your advice really helped!",
                "Really? I'm so happy you like it! Your tip made such a difference!",
                "That means everything! Thank you for your help earlier!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a beautiful compliment! 😍",
                "Your friend is so proud! 😍",
                "You celebrated your friend perfectly! 😍",
              ],
              emotionText: [
                "Saying 'the colors are alive' is such a vivid compliment! Your friend's eyes light up with pride!",
                "'The colors really pop' is an art term used as a compliment. Your friend loves that you noticed!",
                "'Genuinely stunning' is a powerful compliment. Your friend feels truly seen and appreciated!",
              ],
              grammarText: [
                "'So vibrant and alive' — 'so' intensifies two adjectives. 'Vibrant' means bright and full of energy!",
                "'It turned out so well' — 'turn out' means the result was good. 'Really pop' = stand out vividly!",
                "'Genuinely stunning' — 'genuinely' means truly/sincerely. 'The way you used' is a relative clause!",
              ],
            },
            {
              en: [
                '"Yeah, it\'s fine I guess."',
                '"It\'s okay. Not bad."',
                '"Mm, it\'s alright."',
              ],
              kr: ["뭐, 괜찮네.", "괜찮아. 나쁘지 않아.", "음, 그냥 그래."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... thanks I guess.",
                "Okay... I was hoping for more.",
                "Hmm... okay. Thanks.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_thinking" },
              feedbackTitle: [
                "Your friend hoped for more warmth! 😐",
                "A bit flat after all that effort! 😐",
                "That was a little underwhelming... 😐",
              ],
              emotionText: [
                "Your friend worked hard and followed your advice. 'Fine I guess' doesn't match the effort they put in!",
                "'Not bad' sounds like you're damning with faint praise. Your friend deserved more enthusiasm!",
                "'Alright' is lukewarm. After giving great advice, a warm compliment would complete the moment!",
              ],
              grammarText: [
                "'Fine I guess' — 'I guess' shows uncertainty or reluctance. Lukewarm evaluation!",
                "'Not bad' — understatement meaning 'quite good'. Can sound very faint as praise!",
                "'Mm, it's alright' — 'mm' as a hesitation sound. 'Alright' is neutral-to-positive but flat here!",
              ],
            },
            {
              en: [
                '"I think you still need to work on it a bit more, honestly."',
                '"Hmm, I thought it would look better. It still needs work."',
                '"Honestly? It still doesn\'t look quite right to me."',
              ],
              kr: [
                "더 노력해야 될 것 같은데..?",
                "음, 더 예쁠 줄 알았는데. 아직 좀 부족한 것 같아.",
                "솔직히? 아직 뭔가 좀 이상한 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I worked so hard on this... that really hurts.",
                "I followed your advice and you still say that?",
                "I thought we were working together... that stings.",
              ],
              scene: { hero: "hero_thinking", friend: "friend2_sad" },
              feedbackTitle: [
                "Oh! Your friend is really hurt... 😨",
                "That dismisses all your friend's hard work! 😨",
                "Your friend followed your advice and this is the response? 😨",
              ],
              emotionText: [
                "Your friend took your advice and worked hard. Saying 'still needs work' at the presentation hurts!",
                "Your friend followed your suggestion and was hoping for your support. This response feels like a betrayal!",
                "When someone presents their work, they need encouragement. Find something positive to say first!",
              ],
              grammarText: [
                "'Still need to work on it' — 'still' shows something continues. 'A bit more' softens the criticism!",
                "'I thought it would look better' — past tense expressing an unmet expectation. 'Still needs work' = not finished!",
                "'Doesn't look quite right' — 'quite' softens the negative. 'Honestly?' used for dramatic effect!",
              ],
            },
          ],
        },
        "good-neutral": {
          background: "/bg/bg_artroom.png",
          title: [
            "Presentation time!",
            "Sharing the Finished Work!",
            "Time to Show the Class!",
          ],
          text: [
            "Your friend presents their finished painting. What will you say?",
            "Your friend holds up their painting for the class to see. How do you respond?",
            "Your friend shows their completed artwork proudly. What do you say?",
          ],
          grammar: [
            "동사(presents)로 발표하는 행동 표현. 'What will you say?' 미래의지를 묻는 의문문",
            "'holds up' 들어올리다는 의미의 구동사. 'for the class to see' 부정사를 사용한 목적 표현",
            "부사(proudly)로 자랑스럽게 보여주는 모습 표현. 'What do you say?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_lookaway", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Wow, you did really well! It looks great!"',
                '"That looks really good! You should be proud!"',
                '"That\'s a really impressive piece! Well done!"',
              ],
              kr: [
                "잘 그렸는데? 정말 멋지다.",
                "정말 잘했다! 자랑스러워해도 돼!",
                "정말 인상적인데! 잘했어!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you! That means so much!",
                "Really? Thank you! I'm happy with how it turned out!",
                "Wow, thank you! I really tried my best!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a great compliment! 😍",
                "Your friend is beaming! 😍",
                "Well said! 😍",
              ],
              emotionText: [
                "A clear and warm compliment is exactly what your friend needed. They feel genuinely appreciated!",
                "'You should be proud' is such an empowering thing to say. Your friend stands a little taller!",
                "'Impressive piece' uses art vocabulary to compliment the work seriously. Your friend loves it!",
              ],
              grammarText: [
                "'You did really well' — past tense + adverb(really) + adverb(well). Strong positive assessment!",
                "'You should be proud' — modal 'should' for advice/encouragement. 'How it turned out' = the result!",
                "'Impressive piece' — adjective + noun. 'Well done' is a set phrase for praising an achievement!",
              ],
            },
            {
              en: [
                '"The sky is blue and the trees are green. Yeah, it\'s a painting."',
                '"It has all the right colors in the right places I guess."',
                "\"Well, it's definitely a painting. That's for sure.\"",
              ],
              kr: [
                "하늘은 하늘색이고 나무는 나무색이네.",
                "색깔은 다 제자리에 있는 것 같긴 해.",
                "뭐, 확실히 그림이긴 해. 그건 확실해.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... that's all you have to say?",
                "I was hoping for a little more than that...",
                "Haha... thanks I guess.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_thinking" },
              feedbackTitle: [
                "That was a bit of a backhanded compliment... 😐",
                "Your friend deserved more! 😐",
                "A little too literal... 😐",
              ],
              emotionText: [
                "Describing the painting so literally misses the point of giving a compliment. Your friend wanted to know you liked it!",
                "Saying 'colors in the right places' is technically positive but feels cold. A warmer reaction would help!",
                "'It's definitely a painting' is funny but doesn't tell your friend anything meaningful about their work!",
              ],
              grammarText: [
                "'The sky is blue and the trees are green' — simple present tense describing observable facts!",
                "'I guess' shows uncertainty. 'In the right places' is a prepositional phrase!",
                "'That's for sure' is a set phrase used to confirm something is definite. Very deadpan here!",
              ],
            },
            {
              en: [
                '"I think you could have tried harder, honestly."',
                '"Hmm, I think it still needs more effort."',
                '"I feel like it could be a lot better with more work."',
              ],
              kr: [
                "더 노력할 수 있었을 것 같은데.",
                "음, 아직 더 노력이 필요한 것 같아.",
                "더 작업하면 훨씬 좋아질 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That really hurt. I tried my best.",
                "I did try hard... I'm disappointed you can't see that.",
                "I thought you'd at least say something kind.",
              ],
              scene: { hero: "hero_thinking", friend: "friend2_sad" },
              feedbackTitle: [
                "Oh! That was quite harsh at a presentation! 😨",
                "Your friend tried their best! 😨",
                "That was discouraging to hear! 😨",
              ],
              emotionText: [
                "'Could have tried harder' implies your friend was lazy. They did their best!",
                "Saying 'still needs more effort' at the presentation moment is crushing. Focus on what's good!",
                "'Could be a lot better' leaves no room to celebrate what was accomplished. Your friend needed encouragement!",
              ],
              grammarText: [
                "'Could have tried harder' — past modal expressing what was possible. Implies failure to meet potential!",
                "'I think it still needs' — present tense + 'still' showing something persists. 'More effort' as a noun phrase!",
                "'I feel like it could be' — 'feel like' + conditional. A common way to express an opinion softly!",
              ],
            },
          ],
        },
        "good-bad": {
          background: "/bg/bg_artroom.png",
          title: [
            "Your friend presents despite feeling hurt...",
            "A Brave Presentation!",
            "Standing Strong Despite the Hurt",
          ],
          text: [
            "Despite what you said earlier, your friend presents their painting. What do you say?",
            "Your friend bravely shows their painting to the class after your harsh words. How do you react?",
            "Your friend presents their work even though your comment upset them. What do you say now?",
          ],
          grammar: [
            "'Despite' 전치사로 앞의 내용과 반대되는 상황을 표현. 'what you said earlier' 관계대명사절",
            "부사(bravely)로 용감하게 발표하는 모습 표현. 'after your harsh words' 전치사구로 시간 표현",
            "'even though' 양보 접속사. 'upset them' 과거시제로 상처를 준 것을 표현",
          ],
          scene: { hero: "hero_lookaway", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I\'m sorry for what I said earlier. This actually looks really beautiful!"',
                '"I take back what I said. This is genuinely lovely — well done!"',
                '"I apologize for my earlier comment. Looking at the finished piece, it\'s really wonderful!"',
              ],
              kr: [
                "아까 한 말 미안해. 사실 진짜 예쁘다!",
                "아까 한 말 취소할게. 진짜 예쁘다 — 잘했어!",
                "아까 한 말 미안해. 완성된 거 보니까 정말 대단한데!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you... that means a lot. I almost gave up.",
                "Really? Thank you so much! That made me feel so much better!",
                "Wow, thank you! I wasn't sure you'd like it after what you said.",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "A wonderful apology and compliment! 😍",
                "You turned it around beautifully! 😍",
                "That took real courage to say! 😍",
              ],
              emotionText: [
                "Saying 'I'm sorry' and then giving a genuine compliment is the perfect recovery. Your friend is touched!",
                "'I take back what I said' is brave and sincere. Your friend feels validated and forgiven!",
                "Apologizing and then praising the finished work shows growth. Your friend's face lights up!",
              ],
              grammarText: [
                "'I'm sorry for what I said' — apology + relative clause. 'Actually looks' shows a changed opinion!",
                "'I take back what I said' — present tense idiom meaning to retract a statement!",
                "'I apologize for my earlier comment' — formal apology. 'Looking at the finished piece' = gerund phrase!",
              ],
            },
            {
              en: [
                "\"Okay, it's done. That's... something.\"",
                '"Well, you finished it. That\'s good I guess."',
                '"So it\'s done. Okay."',
              ],
              kr: [
                "완성했네. 뭐... 그렇긴 하네.",
                "완성했네. 뭐, 잘했네.",
                "다 됐구나. 그래.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "That's really all you have to say?",
                "I was hoping for something a bit kinder...",
                "Okay... thanks I guess.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_thinking" },
              feedbackTitle: [
                "That was very flat... 😐",
                "Your friend needed more after your earlier comment! 😐",
                "A little underwhelming... 😐",
              ],
              emotionText: [
                "After saying harsh things, 'that's something' isn't enough to make up for it. A real compliment is needed!",
                "'That's good I guess' is the bare minimum. Your friend worked hard to finish despite your words!",
                "Just saying 'okay' after presenting a whole painting is dismissive. Your friend deserved more!",
              ],
              grammarText: [
                "'That's... something' — vague compliment often used as an understatement. Can feel passive-aggressive!",
                "'That's good I guess' — 'I guess' weakens the positive. Very minimal praise!",
                "'Okay' as a one-word response is very minimal. Shows disinterest or indifference!",
              ],
            },
            {
              en: [
                '"I said it looked weird before, and honestly I still think so."',
                "\"I wasn't wrong earlier. It still doesn't look great.\"",
                '"I mean, completing it is something, but it still looks off to me."',
              ],
              kr: [
                "아까도 이상하다고 했는데, 솔직히 아직도 그래.",
                "아까 내 말이 틀리지 않았어. 아직도 별로야.",
                "뭐, 완성한 건 대단하긴 한데 아직도 좀 이상한 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I can't believe you're still saying that. I'm really hurt.",
                "You already said that once. Please stop.",
                "I worked so hard. Please just be kind.",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! Repeating the harsh comment makes it so much worse! 😨",
                "Your friend is really hurting now! 😨",
                "That was unkind twice over! 😨",
              ],
              emotionText: [
                "Repeating that it looks weird after your friend has presented is cruel. They can't change it now!",
                "'I wasn't wrong earlier' doubles down on the hurt. Your friend needed support, not confirmation!",
                "'Still looks off' at the presentation is one of the hardest things to hear. Always lead with something kind!",
              ],
              grammarText: [
                "'I said it looked weird before' — past tense reporting a previous statement. 'Still think so' = current opinion!",
                "'I wasn't wrong' — past negative asserting correctness. 'Still doesn't look great' uses 'still' for persistence!",
                "'Is something' acknowledges the effort with 'something'. 'Looks off' means doesn't look quite right!",
              ],
            },
          ],
        },
        "neutral-good": {
          background: "/bg/bg_artroom.png",
          title: [
            "Presentation time!",
            "Look What You Made!",
            "Showing the World Your Art!",
          ],
          text: [
            "Your friend shows their finished painting to the class. What will you say?",
            "Your friend proudly holds up their painting. How do you react?",
            "Your friend presents their work to the class. What do you say?",
          ],
          grammar: [
            "동사(shows)로 발표하는 행동 표현. 'What will you say?' 미래의지를 묻는 의문문",
            "부사(proudly)로 자랑스럽게 보여주는 모습 표현. 'How do you react?' 현재 시제 의문문",
            "동사(presents)로 발표하는 행동 표현. 'What do you say?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_happy", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"You did a great job! It looks really pretty!"',
                '"That\'s so good! You should be really proud of that!"',
                '"Wow, that\'s beautiful! The effort you put in really shows!"',
              ],
              kr: [
                "열심히 하더니 잘했네.",
                "정말 잘됐다! 진짜 자랑스러워해도 돼!",
                "와, 정말 예쁘다! 열심히 한 게 느껴지네!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you! That means so much to me!",
                "Really?! Thank you! I'm so happy!",
                "Wow, thank you! I was so nervous!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a great compliment! 😍",
                "Your friend is glowing! 😍",
                "What a warm and encouraging response! 😍",
              ],
              emotionText: [
                "Connecting their hard work to the result ('열심히 하더니') makes the compliment even more meaningful!",
                "'You should be really proud' is an empowering thing to say. Your friend stands taller!",
                "'The effort really shows' acknowledges the work behind the art. Your friend feels truly seen!",
              ],
              grammarText: [
                "'You did a great job' — past tense + adjective phrase. Acknowledges completed effort!",
                "'You should be proud' — modal 'should' for encouragement. 'Really proud' uses 'really' as an intensifier!",
                "'The effort you put in really shows' — relative clause. 'Really shows' means it's very visible!",
              ],
            },
            {
              en: [
                '"It\'s all just paint in different places, right?"',
                "\"Eh, it's a painting. They're all pretty much the same.\"",
                "\"I mean, it's finished. That's what matters I guess.\"",
              ],
              kr: [
                "그림이 다 거기서 거기지.",
                "에, 그냥 그림이네. 다 비슷비슷하지.",
                "뭐, 완성했잖아. 그게 중요한 거 아닌가.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... I worked really hard on this.",
                "I guess... but I hoped for something more.",
                "Okay... thanks.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_thinking" },
              feedbackTitle: [
                "That really missed the mark... 😐",
                "All paintings are not the same! 😐",
                "Your friend deserved a real compliment! 😐",
              ],
              emotionText: [
                "'All just paint in different places' completely dismisses the art. Every painting is unique and personal!",
                "Saying 'they're all pretty much the same' shows no appreciation for your friend's individual effort!",
                "'That's what matters I guess' is the minimum. Your friend wanted to know you actually liked it!",
              ],
              grammarText: [
                "'All just paint in different places' — reductive description. 'Just' minimizes the subject!",
                "'Pretty much the same' — 'pretty much' means almost completely. Shows dismissal of individuality!",
                "'I guess' weakens the statement. 'What matters' is a relative clause using 'what' as subject!",
              ],
            },
            {
              en: [
                '"Wow, you worked hard and that\'s all you came up with?"',
                '"I thought working hard would make it better. I was wrong."',
                '"Hmm. All that effort for this? That\'s disappointing."',
              ],
              kr: [
                "열심히 하더니 그게 다야?",
                "열심히 하면 더 좋아질 줄 알았는데. 아닌가봐.",
                "음. 그렇게 열심히 했는데 이게 다야? 좀 실망인데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That's so hurtful. I tried my absolute best.",
                "I can't believe you just said that. I worked so hard.",
                "That's a really unkind thing to say. I'm proud of what I made.",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! That undermined all their hard work! 😨",
                "That was really hurtful after all that effort! 😨",
                "Your friend is really hurt! 😨",
              ],
              emotionText: [
                "'That's all you came up with?' is devastating after so much effort. Your friend deserves better!",
                "Saying you 'were wrong' about their hard work paying off is a cruel thing to say at a presentation!",
                "'Disappointing' is one of the harshest words to use about someone's art. Always find something kind!",
              ],
              grammarText: [
                "'That's all you came up with?' — 'come up with' is a phrasal verb meaning to produce or create!",
                "'I thought... would make it better' — past tense + conditional. 'I was wrong' = direct admission!",
                "'All that effort for this?' — elliptical sentence with strong judgment. 'Disappointing' is a strong adjective!",
              ],
            },
          ],
        },
        "neutral-neutral": {
          background: "/bg/bg_artroom.png",
          title: [
            "Presentation time!",
            "Sharing the Finished Piece!",
            "Time to Present!",
          ],
          text: [
            "Your friend presents their painting to the class. What do you say?",
            "Your friend holds up their finished painting. How do you respond?",
            "It's time to present. Your friend shows their work. What do you say?",
          ],
          grammar: [
            "동사(presents)로 발표하는 행동 표현. 'What do you say?' 현재 시제 의문문",
            "'holds up' 들어올리다는 의미의 구동사. 'How do you respond?' 현재 시제 의문문",
            "'It's time to + verb' 무언가를 해야 할 때임을 나타내는 표현. 'What do you say?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_lookaway", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I think it\'s really good! You put in a lot of care."',
                '"That actually looks great! I can see the effort!"',
                "\"That's really lovely. I'm glad you kept going with it!\"",
              ],
              kr: [
                "진짜 좋다! 신경을 많이 썻구나.",
                "사실 진짜 잘됐다! 열심히 한 게 느껴져!",
                "정말 예쁜데. 계속 한 게 잘됐다!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Aw, thank you! That made me so happy!",
                "Really? Thank you! I wasn't sure!",
                "Thank you! I'm glad I kept going too!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a kind observation! 😍",
                "Your friend is really happy! 😍",
                "A warm and genuine response! 😍",
              ],
              emotionText: [
                "Noticing the care your friend put in makes the compliment feel specific and genuine!",
                "'Actually looks great' — 'actually' shows pleasant surprise. Your friend loves it!",
                "'Glad you kept going' acknowledges the journey, not just the result. Your friend feels understood!",
              ],
              grammarText: [
                "'You put in a lot of care' — past tense with 'put in' as a phrasal verb meaning to invest!",
                "'Actually looks great' — 'actually' introduces a result that might be surprising. Shows genuine reaction!",
                "'I'm glad you kept going' — present + past tense. 'Kept going' = continued despite difficulty!",
              ],
            },
            {
              en: [
                '"Yep, it\'s a painting alright."',
                '"Yeah, I can see you finished it."',
                '"Mm. It\'s done."',
              ],
              kr: ["그래, 그림이긴 하네.", "응, 완성했구나.", "음. 다 됐네."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... is that all?",
                "Haha... thanks I guess.",
                "Okay... thanks.",
              ],
              scene: { hero: "hero_thinking", friend: "friend2_sad" },
              feedbackTitle: [
                "Very minimal reaction! 😐",
                "That barely counts as a response! 😐",
                "Your friend deserved more than that! 😐",
              ],
              emotionText: [
                "'It's a painting alright' is technically true but says absolutely nothing positive. Your friend wanted a real reaction!",
                "Just acknowledging completion doesn't celebrate the achievement. Your friend hoped for enthusiasm!",
                "'It's done' is the most minimal response possible. Your friend needed a real reaction!",
              ],
              grammarText: [
                "'Alright' as an adverb at the end confirms something with mild sarcasm or flatness!",
                "'I can see you finished it' — present tense observation. States the obvious without enthusiasm!",
                "'Mm' as a hesitation sound + minimal statement. Very low-energy reaction!",
              ],
            },
            {
              en: [
                '"Hmm, I\'m not sure it really worked out."',
                '"Honestly, I thought it would look a lot better than this."',
                '"I don\'t think it came out the way you were hoping."',
              ],
              kr: [
                "음, 잘 됐는지 모르겠는데.",
                "솔직히 이것보다 훨씬 잘 될 줄 알았는데.",
                "바라던 대로 된 건 아닌 것 같은데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "That's really hurtful to hear at the presentation.",
                "I did my best... I thought you'd be more supportive.",
                "Why would you say that right now?",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! That was very discouraging! 😨",
                "Criticizing at the presentation moment is really hard! 😨",
                "Your friend needed support right now! 😨",
              ],
              emotionText: [
                "'Not sure it really worked out' is a harsh verdict at a presentation. There's no going back now!",
                "Saying you thought it would look 'a lot better' implies the current result is a disappointment!",
                "'Not the way you were hoping' assumes your friend failed their own expectations. That's painful to hear!",
              ],
              grammarText: [
                "'I'm not sure it really worked out' — 'work out' = turn out well. 'Really' intensifies!",
                "'I thought it would look' — past + conditional for an unmet expectation!",
                "'The way you were hoping' — relative clause using 'the way'. Past continuous 'were hoping'!",
              ],
            },
          ],
        },
        "neutral-bad": {
          background: "/bg/bg_artroom.png",
          title: [
            "The teacher steps in!",
            "A Teacher Gets Involved!",
            "Time to Face the Music!",
          ],
          text: [
            "Your friend got upset at what you said. The teacher comes over to ask what happened. What do you say?",
            "Your harsh comment upset your friend. The teacher walks over and asks what's going on. How do you respond?",
            "Your friend is visibly upset. The teacher notices and comes to check. What do you say?",
          ],
          grammar: [
            "과거시제(got upset)로 친구가 화가 난 상황을 표현. 현재진행형(comes over)으로 선생님이 다가오는 상황을 표현",
            "형용사(harsh)로 가혹한 말을 표현. 현재진행형(walks over)으로 선생님이 걸어오는 상황을 표현",
            "부사(visibly)로 눈에 띄게 화가 난 모습을 표현. 현재진행형(comes to check)으로 확인하러 오는 상황을 표현",
          ],
          scene: {
            hero: "hero_surprised",
            friend: "friend2_sad",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                "\"I said something unkind about my friend's painting, teacher. I'm going to apologize.\"",
                "\"I wasn't very kind, teacher. I'll say sorry to my friend right now.\"",
                '"I made a hurtful comment, teacher. I take full responsibility and I\'ll apologize."',
              ],
              kr: [
                "제가 심했어요. 친구에게 사과할게요.",
                "제가 친절하지 않았어요, 선생님. 지금 바로 사과할게요.",
                "상처 주는 말을 했어요, 선생님. 제 잘못이고 사과할게요.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you. I really appreciate that.",
                "I'm glad you said that. Thank you.",
                "That means a lot. Thank you.",
              ],
              scene: {
                hero: "hero_sad",
                friend: "friend2_happy",
                extra: "teacher_happy",
              },
              feedbackTitle: [
                "Brave and honest! 😍",
                "Taking responsibility right away! 😍",
                "A mature and sincere response! 😍",
              ],
              emotionText: [
                "Telling the teacher honestly and immediately offering to apologize shows real character!",
                "'I'll say sorry right now' shows urgency and sincerity. The teacher and your friend are both moved!",
                "'I take full responsibility' is a mature phrase. Your teacher is impressed by your honesty!",
              ],
              grammarText: [
                "'I said something unkind' — past tense + adjective modifying 'something'. Direct admission!",
                "'I wasn't very kind' — past negative self-assessment. 'Right now' shows urgency!",
                "'I take full responsibility' — present tense strong admission. 'Full' adds completeness!",
              ],
            },
            {
              en: [
                '"I\'m not sure why my friend is so upset, teacher."',
                '"I just said what I thought, teacher. I didn\'t think it would cause this."',
                '"We just had a small disagreement about the painting, teacher."',
              ],
              kr: [
                "친구가 왜 화가 났는지 잘 모르겠어요, 선생님.",
                "그냥 생각한 걸 말했는데, 선생님. 이렇게 될 줄 몰랐어요.",
                "그림에 대해 좀 의견이 달랐어요, 선생님.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "I see. Can you think about how your friend might be feeling right now?",
                "Words can hurt even when we don't mean them to. Would you like to apologize to your friend?",
                "A 'small disagreement' can still leave someone feeling hurt. What exactly did you say?",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend2_sad",
                extra: "teacher_thinking",
              },
              feedbackTitle: [
                "The teacher can see the full picture... 😐",
                "That explanation avoided the real issue! 😐",
                "Downplaying it won't help! 😐",
              ],
              emotionText: [
                "Pretending not to know why your friend is upset avoids taking responsibility. The teacher knows there's more!",
                "Saying 'I just said what I thought' explains your action but doesn't address the hurt you caused!",
                "Calling it a 'small disagreement' minimizes your friend's pain. Your teacher can tell it was more than that!",
              ],
              grammarText: [
                "'I'm not sure why' — present tense + indirect question. Sounds evasive in this context!",
                "'I just said what I thought' — 'just' minimizes. 'I didn't think it would' = past + conditional!",
                "'A small disagreement' — adjective minimizing the event. 'About the painting' = prepositional phrase!",
              ],
            },
            {
              en: [
                '"I just told the truth, teacher. The painting really isn\'t good."',
                "\"I was being honest, teacher. I don't see why that's a problem.\"",
                "\"My friend's painting really isn't great, teacher. I just said so.\"",
              ],
              kr: [
                "사실대로 말한 건데요, 선생님. 그림이 진짜 별로잖아요.",
                "솔직하게 말한 거예요, 선생님. 그게 왜 문제인지 모르겠어요.",
                "친구 그림이 진짜 별로거든요, 선생님. 그냥 그렇게 말한 거예요.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Honesty is important, but we need to think about how our words affect others.",
                "Being honest doesn't mean saying everything you think. There's a kind way to share your opinion.",
                "Even if that's true, think about how you'd feel if someone said that about your work.",
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend2_angry",
                extra: "teacher_angry",
              },
              feedbackTitle: [
                "Oh! Saying that in front of the teacher makes it so much worse! 😨",
                "Defending the hurtful comment isn't the right move! 😨",
                "That was very disrespectful! 😨",
              ],
              emotionText: [
                "Repeating that the painting 'isn't good' in front of the teacher doubles the hurt for your friend!",
                "Saying 'I don't see why that's a problem' shows no empathy. Your friend and teacher are both disappointed!",
                "Saying it again in front of the teacher is the worst possible response. Your friend is truly hurt now!",
              ],
              grammarText: [
                "'I just told the truth' — past tense + 'just' to minimize. Defends hurtful honesty!",
                "'I don't see why that's a problem' — present + indirect question. Shows lack of empathy!",
                "'I just said so' — 'so' refers back to the previous statement. Very dismissive!",
              ],
            },
          ],
        },
        "bad-good": {
          background: "/bg/bg_artroom.png",
          title: [
            "Presentation time!",
            "Sharing the Art!",
            "Look What They Made!",
          ],
          text: [
            "Even though you complained earlier, your friend presents a beautiful painting. What do you say?",
            "Despite your earlier attitude, your friend's painting looks amazing. How do you react?",
            "Your friend presents their work. Even after your earlier comment, the painting is lovely. What do you say?",
          ],
          grammar: [
            "'Even though' 양보 접속사로 앞의 내용과 대조되는 상황을 표현. 'What do you say?' 현재 시제 의문문",
            "'Despite' 전치사로 앞의 내용과 반대되는 상황을 표현. 'looks amazing' 감각동사 + 형용사",
            "'Even after' 시간 접속사로 이전 상황에도 불구하고를 표현. 'What do you say?' 현재 시제 의문문",
          ],
          scene: { hero: "hero_happy", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Wow, I was wrong earlier! This is really beautiful — the colors are perfect!"',
                '"I have to say, I was wrong. This turned out amazing!"',
                '"I need to take back what I said earlier. This is genuinely stunning!"',
              ],
              kr: [
                "와, 내가 틀렸네! 진짜 잘했는데 — 색깔이 정말 예쁘다!",
                "솔직히 내가 틀렸어. 진짜 잘됐다!",
                "아까 한 말 취소해야겠어. 진짜 대단한데!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Really?! Thank you! That means so much after what you said!",
                "Wow, thank you! I'm so glad you changed your mind!",
                "That really means a lot. Thank you for saying that!",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "What a turnaround! 😍",
                "You admitted you were wrong — that's so mature! 😍",
                "A genuine and brave compliment! 😍",
              ],
              emotionText: [
                "Saying 'I was wrong' and then giving a specific compliment is exactly the right thing! Your friend is overjoyed!",
                "'I have to say' introduces an honest admission. Your friend loves that you changed your mind!",
                "'Take back what I said' shows real growth. Your friend feels truly celebrated!",
              ],
              grammarText: [
                "'I was wrong earlier' — past tense admission. 'The colors are perfect' = present tense compliment!",
                "'I have to say' — discourse marker for a sincere statement. 'Turned out amazing' = great result!",
                "'Take back what I said' — idiom meaning to retract a statement. 'Genuinely stunning' = truly beautiful!",
              ],
            },
            {
              en: [
                '"Okay, it\'s better than I thought it would be."',
                '"Hmm, it\'s actually not bad at all."',
                '"Well, I was maybe a bit harsh earlier. It\'s okay."',
              ],
              kr: [
                "생각보다는 잘됐네.",
                "음, 사실 나쁘지 않네.",
                "뭐, 아까 내가 좀 심했나. 괜찮네.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... thanks. I guess that's something.",
                "Thanks... I think.",
                "That's a bit better I guess.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_thinking" },
              feedbackTitle: [
                "Better than nothing, but your friend deserved more! 😐",
                "That's an improvement but still pretty flat! 😐",
                "A half-apology with a mild compliment... 😐",
              ],
              emotionText: [
                "'Better than I thought' shows your expectations were low. Your friend notices that!",
                "'Not bad at all' is a mild compliment. After your earlier comment, your friend needed more warmth!",
                "'Maybe a bit harsh' is an understatement. A more heartfelt apology would mean more to your friend!",
              ],
              grammarText: [
                "'Better than I thought it would be' — comparative + past conditional. Backhanded compliment!",
                "'Actually not bad at all' — 'actually' shows surprise. 'Not bad at all' uses 'at all' with negative!",
                "'Maybe a bit harsh' — 'maybe' and 'a bit' both minimize the admission. Soft apology!",
              ],
            },
            {
              en: [
                '"I still think art class is boring, but okay."',
                "\"I mean, it's better than mine, but that's not saying much.\"",
                '"I guess finishing it is the main thing. It\'s not really my taste though."',
              ],
              kr: [
                "그래도 미술시간은 별론데, 뭐.",
                "내 것보다는 낫긴 하지. 뭐 그게 대단한 건 아니지만.",
                "완성했으니 된 거겠지. 뭐 내 취향은 아니지만.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I can't believe that's your reaction after I worked so hard.",
                "I did my best and that's all you can say?",
                "I just wanted one nice word from you. Is that so hard?",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! That was still unkind! 😨",
                "Your friend needed a real compliment! 😨",
                "That was really dismissive! 😨",
              ],
              emotionText: [
                "Bringing up that art class is 'boring' while presenting your friend's art is very disrespectful!",
                "'Better than mine but that's not saying much' is a backhanded compliment that stings!",
                "'Not really my taste' dismisses your friend's creative vision entirely. Everyone's art deserves respect!",
              ],
              grammarText: [
                "'I still think' — 'still' shows a persistent opinion. Undermines any possible positivity!",
                "'Not saying much' — idiom meaning the comparison sets a low bar. Backhanded!",
                "'Not really my taste' — 'not really' softens. 'Taste' as a noun meaning personal aesthetic preference!",
              ],
            },
          ],
        },
        "bad-neutral": {
          background: "/bg/bg_artroom.png",
          title: [
            "Presentation time!",
            "Sharing the Finished Work!",
            "Time to See Everyone's Art!",
          ],
          text: [
            "Your friend presents their painting even though you were dismissive. What do you say?",
            "Your friend shows their painting to the class. After your earlier comment, what do you say?",
            "Your friend holds up their painting. What do you say after being unkind earlier?",
          ],
          grammar: [
            "'even though' 양보 접속사. 형용사(dismissive)로 무시하는 태도를 표현",
            "과거시제를 사용한 'after your earlier comment'로 이전 발언 이후를 표현",
            "'holds up' 들어올리다는 의미의 구동사. 'after being unkind' 전치사 after + 동명사",
          ],
          scene: { hero: "hero_lookaway", friend: "friend2_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, I\'m sorry about earlier. This is actually really nice!"',
                '"I was wrong to say what I said. This looks wonderful!"',
                '"I owe you an apology. And this painting is beautiful — really!"',
              ],
              kr: [
                "저기, 아까는 미안해. 사실 진짜 예쁘다!",
                "아까 한 말이 잘못됐어. 정말 잘됐다!",
                "사과해야 할 것 같아. 그리고 이 그림 진짜 예쁘다!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you. That really means a lot after what happened.",
                "Thank you for saying that. I feel so much better now!",
                "Wow, thank you. That was really kind of you to say.",
              ],
              scene: { hero: "hero_happy", friend: "friend2_happy" },
              feedbackTitle: [
                "A wonderful apology and compliment! 😍",
                "You turned things around! 😍",
                "A sincere and warm response! 😍",
              ],
              emotionText: [
                "Leading with an apology and then a genuine compliment is exactly right. Your friend feels truly appreciated!",
                "'I was wrong to say what I said' is a direct and honest admission. Your friend feels heard!",
                "'I owe you an apology' is mature and sincere. The follow-up compliment makes it complete!",
              ],
              grammarText: [
                "'I'm sorry about earlier' — apology with time reference. 'Actually really nice' = more than expected!",
                "'I was wrong to say' — past tense + infinitive. Directly acknowledges the mistake!",
                "'I owe you an apology' — idiom. 'And' links the apology to the genuine compliment!",
              ],
            },
            {
              en: [
                '"Hmm, it\'s alright I guess."',
                '"Not bad. Better than I expected."',
                '"Yeah okay, it\'s fine."',
              ],
              kr: [
                "음, 그냥 그런 것 같아.",
                "나쁘지 않네. 생각보다 낫다.",
                "그래, 뭐, 괜찮네.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Thanks... I guess.",
                "Okay... thanks.",
                "Alright then.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend2_sad" },
              feedbackTitle: [
                "Still a bit cold after being unkind... 😐",
                "Your friend deserved more after your earlier comment! 😐",
                "A minimal response after a hard moment! 😐",
              ],
              emotionText: [
                "After being dismissive earlier, 'I guess' is still too noncommittal. A real apology would help so much!",
                "'Better than I expected' reveals your expectations were low. Your friend can feel that!",
                "'Yeah okay' is very flat. After your earlier comment, your friend needed a genuine response!",
              ],
              grammarText: [
                "'It's alright I guess' — 'alright' is neutral. 'I guess' shows reluctance!",
                "'Better than I expected' — comparative + past tense. Backhanded as a compliment!",
                "'Yeah okay' — informal affirmation. 'Fine' is a lukewarm adjective!",
              ],
            },
            {
              en: [
                '"It\'s still not really my thing. But okay."',
                '"I still think art is boring. But it\'s done I guess."',
                "\"Honestly it's not great, but you finished it, so there's that.\"",
              ],
              kr: [
                "그래도 내 취향은 아닌데. 뭐.",
                "그래도 미술은 별로야. 근데 완성했네.",
                "솔직히 별로인데, 완성했으니 그건 그거대로.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "You haven't changed at all, have you.",
                "I worked so hard and this is still all you can say.",
                "I just wanted one kind word. Is that too much to ask?",
              ],
              scene: { hero: "hero_peeve", friend: "friend2_angry" },
              feedbackTitle: [
                "Oh! Still being dismissive! 😨",
                "Your friend is really hurt! 😨",
                "That was unkind again! 😨",
              ],
              emotionText: [
                "'Still not my thing' shows nothing has changed. Your friend needed to see growth from you!",
                "Saying art is 'boring' while your friend is presenting is very hurtful. This is their moment!",
                "'Honestly it's not great' repeated again crushes your friend. Find something — anything — kind to say!",
              ],
              grammarText: [
                "'Still not really my thing' — 'still' shows persistence. 'Not really' softens but doesn't fix!",
                "'I still think' — 'still' shows an unchanged opinion. 'I guess' adds reluctance!",
                "'So there's that' — dismissive phrase acknowledging something minimal. Very flat as a closing!",
              ],
            },
          ],
        },
        "bad-bad": {
          background: "/bg/bg_artroom.png",
          title: [
            "The teacher steps in!",
            "A Teacher Gets Involved!",
            "Facing the Consequences!",
          ],
          text: [
            "After your harsh words, your friend got upset. The teacher comes over. What do you say?",
            "The teacher heard what happened and walks over to check. How do you respond?",
            "Your friend is clearly upset. The teacher notices and comes over. What do you say?",
          ],
          grammar: [
            "전치사구(After your harsh words)로 원인을 표현. 현재진행형(comes over)으로 다가오는 상황을 표현",
            "과거시제(heard)로 선생님이 들은 것을 표현. 현재진행형(walks over)으로 다가오는 상황을 표현",
            "부사(clearly)로 눈에 띄게 화가 난 모습을 강조. 현재진행형(comes over)으로 다가오는 상황을 표현",
          ],
          scene: {
            hero: "hero_angry",
            friend: "friend2_sad",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                "\"I was rude to my friend, teacher. I'm truly sorry and I'll apologize to them.\"",
                '"I said some unkind things, teacher. I take responsibility and I want to make it right."',
                "\"I wasn't kind, teacher. I apologize and I'll do better.\"",
              ],
              kr: [
                "제가 좀 심했어요, 선생님. 진심으로 미안하고 친구에게 사과할게요.",
                "제가 못된 말을 했어요, 선생님. 제 잘못이고 바로잡고 싶어요.",
                "친절하지 않았어요, 선생님. 사과하고 더 잘할게요.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "That's brave of you. Go apologize. your friend will appreciate it.",
                "Good. Now think about what you can say to make your friend feel better.",
                "Good. Now show your friend you mean it.",
              ],
              scene: {
                hero: "hero_sad",
                friend: "friend2_thinking",
                extra: "teacher_happy",
              },
              feedbackTitle: [
                "A brave and honest apology! 😍",
                "Taking responsibility immediately! 😍",
                "A mature and sincere response! 😍",
              ],
              emotionText: [
                "Owning your mistake in front of the teacher and your friend shows real maturity. Everyone respects this!",
                "'I take responsibility' is a powerful phrase. Your teacher and friend both feel your sincerity!",
                "'I'll do better' is a simple but meaningful promise. Your teacher is proud of your growth!",
              ],
              grammarText: [
                "'I was rude' — past tense direct admission. 'Truly sorry' uses 'truly' as a strong intensifier!",
                "'I take responsibility' — present tense strong admission. 'Make it right' = fix the situation!",
                "'I wasn't kind' — past negative self-assessment. 'Do better' = improve future behavior!",
              ],
            },
            {
              en: [
                '"I was just saying what I thought, teacher. I didn\'t realize it was such a big deal."',
                '"We just had a small disagreement, teacher. I\'m not sure why my friend is so upset."',
                "\"I just said I didn't like art, teacher. I don't think that's wrong.\"",
              ],
              kr: [
                "그냥 생각한 걸 말한 거예요, 선생님. 이렇게 큰일이 될 줄 몰랐어요.",
                "그냥 작은 의견 차이였어요, 선생님. 친구가 왜 이렇게 화가 났는지 모르겠어요.",
                "미술이 별로라고 했을 뿐이에요, 선생님. 그게 잘못된 건 아닌 것 같은데요.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Your words still hurt, even if you didn't mean it. How do you think your friend feels?",
                "It wasn't small to your friend. Try to see it from their side.",
                "Having an opinion is fine. But there's a difference between that and hurting someone's feelings.",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend2_sad",
                extra: "teacher_thinking",
              },
              feedbackTitle: [
                "The teacher can see the full picture! 😐",
                "Downplaying it won't help! 😐",
                "That misses the point! 😐",
              ],
              emotionText: [
                "'I didn't realize it was such a big deal' avoids taking responsibility. The teacher knows better!",
                "Calling it a 'small disagreement' minimizes your friend's hurt. Your teacher can see the full situation!",
                "Saying you 'just' said something misses how words can hurt, even when you believe them! The teacher is concerned!",
              ],
              grammarText: [
                "'I was just saying what I thought' — 'just' minimizes. 'Such a big deal' = so important!",
                "'I'm not sure why' — present tense uncertainty. 'Such a big deal' uses 'such' for emphasis!",
                "'I don't think that's wrong' — present negative + indirect clause. Avoids responsibility!",
              ],
            },
            {
              en: [
                '"Art really is boring, teacher. I was just being honest."',
                '"I don\'t see what I did wrong, teacher. I just shared my opinion."',
                '"I think my friend is overreacting, teacher. I just said art isn\'t my thing."',
              ],
              kr: [
                "미술이 진짜 별로긴 해요, 선생님. 그냥 솔직하게 말한 거예요.",
                "제가 뭘 잘못한 건지 모르겠어요, 선생님. 그냥 의견을 말한 거잖아요.",
                "친구가 오버하는 것 같아요, 선생님. 미술이 별로라고 했을 뿐인데요.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "It's okay to dislike something, but think about how your words make others feel.",
                "There's a right way and a wrong way to share an opinion.",
                "Calling someone's feelings an overreaction doesn't help. Try to understand them instead.",
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend2_angry",
                extra: "teacher_angry",
              },
              feedbackTitle: [
                "Oh! Saying that in front of the teacher makes things much worse! 😨",
                "That shows no understanding of what went wrong! 😨",
                "Calling your friend's reaction 'overreacting' is very dismissive! 😨",
              ],
              emotionText: [
                "Defending yourself by saying art is 'boring' again in front of the teacher shows no growth.",
                "'I don't see what I did wrong' completely ignores your friend's hurt feelings. The teacher can see clearly!",
                "Saying your friend is 'overreacting' dismisses their very real pain. The teacher and your friend are both hurt!",
              ],
              grammarText: [
                "'Art really is boring' — 'really is' for emphasis. Defends position rather than apologizing!",
                "'I don't see what I did wrong' — present + indirect question. Shows complete lack of insight!",
                "'I think my friend is overreacting' — present tense judgment. 'Just said' minimizes the impact!",
              ],
            },
          ],
        },
      },
    },
  ],
};

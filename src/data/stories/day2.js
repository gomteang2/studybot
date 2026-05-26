export const day2 = {
  id: "lunch_time",
  background: "/bg/bg_lunchroom.png",
  steps: [
    {
      id: "step1",
      background: "/bg/bg_lunchroom.png",
      title: ["Lunchtime!", "The Cafeteria Dilemma", "An Unexpected Seat"],
      text: [
        "The lunchroom is full! The only seat left is next to someone you don't know. What will you say?",
        "The cafeteria is almost full. The only empty seat is next to a student you've never talked to. What do you do?",
        "The cafeteria is packed. The only available seat is beside someone you don't really know. How do you handle it?",
      ],
      grammar: [
        "감탄문(The lunchroom is full!). 'only' + 명사로 유일한 것을 강조. 'What will you say?' 미래의지를 묻는 의문문",
        "almost + 형용사(full)로 거의 가득 찼다는 의미. 현재완료(have never talked)로 경험 없음을 표현",
        "형용사(packed)로 꽉 찼다는 의미. 'don't really know' 부사(really)로 부정을 강조",
      ],
      scene: {
        hero: "hero_surprised",
        friend: "friend1_happy",
      },
      choices: [
        {
          en: [
            '"Hi! Can I sit here?"',
            '"Hey, do you mind if I sit here?"',
            '"Excuse me, is this seat taken? Mind if I join you?"',
          ],
          kr: [
            "안녕! 여기 앉아도 돼?",
            "저기, 여기 앉아도 괜찮아?",
            "실례지만, 이 자리 비어있어? 같이 앉아도 될까?",
          ],
          type: "good",
          emoji: "💗",
          friendReaction: [
            "Of course! Sit down!",
            "Sure, go ahead!",
            "Not at all! Please sit down.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend1_happy",
          },
          feedbackTitle: [
            "So friendly! 😍",
            "What a polite way to ask! 😍",
            "Very considerate and polite! 😍",
          ],
          emotionText: [
            "A simple 'Hi!' and a kind question makes your new neighbor feel welcomed. Great start!",
            "'Do you mind if' is one of the most polite ways to ask permission. Your new friend feels respected!",
            "Asking if the seat is taken shows good manners. Your new friend is happy you asked so kindly!",
          ],
          grammarText: [
            "'Can I + verb' is a simple way to ask for permission. Very common and natural in conversation!",
            "'Do you mind if I + verb' is a polite permission question. 'Mind' here means 'object to' or 'have a problem with'!",
            "'Is this seat taken?' is a fixed expression meaning 'is someone using this seat?' Very useful in real life!",
          ],
        },
        {
          en: [
            '"Umm... hi. Sorry, I\'m just a bit shy."',
            "\"Oh... hey. I'll just sit here if that's okay.\"",
            '"Hi... sorry. I\'m not really good at this kind of thing."',
          ],
          kr: [
            "음... 안녕. 미안, 나 좀 부끄러움을 타서.",
            "아... 안녕. 여기 앉아도 되면 앉을게.",
            "안녕... 미안. 나 이런 거 좀 서툴러서.",
          ],
          type: "neutral",
          emoji: "🤍",
          friendReaction: [
            "Oh, that's okay! I'm a little shy too.",
            "Sure, no problem!",
            "It's okay! Take your time.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_surprised",
          },
          feedbackTitle: [
            "A little hesitant, but okay! 😐",
            "Hmm, a quiet start... 😐",
            "A bit awkward, but honest! 😐",
          ],
          emotionText: [
            "It's okay to feel shy! Admitting it actually makes you more relatable. Your neighbor appreciates the honesty!",
            "Asking even quietly shows you still care about being polite. A smile next time would help even more!",
            "Saying you're not good at this shows self-awareness. Your neighbor actually finds it kind of sweet!",
          ],
          grammarText: [
            "'I'm just a bit shy' — 'just' and 'a bit' both soften the statement. Great use of softeners!",
            "'If that's okay' is a polite conditional phrase checking for permission. Very natural!",
            "'I'm not really good at this kind of thing' — 'not really' softens the negative. 'This kind of thing' is a vague but useful phrase!",
          ],
        },
        {
          en: [
            '"Ugh, I really don\'t want to sit here!"',
            "\"I'll stand, thanks. I don't really want to sit there.\"",
            '"Can\'t I just eat somewhere else? This is so awkward."',
          ],
          kr: [
            "아, 진짜 여기 앉기 싫은데!",
            "서서 먹을게. 거기 앉기가 좀 그래.",
            "다른 데서 먹으면 안 되나? 너무 어색해.",
          ],
          type: "bad",
          emoji: "💔",
          friendReaction: [
            "Oh... I heard that. That hurt a little.",
            "Um... I can move if you want.",
            "Oh... sorry for being in the way.",
          ],
          scene: {
            hero: "hero_angry",
            friend: "friend1_angry",
          },
          feedbackTitle: [
            "Oh! That was a bit hurtful... 😨",
            "Your new neighbor heard that... 😨",
            "That might have hurt their feelings... 😨",
          ],
          emotionText: [
            "The person next to the seat heard you. They didn't do anything wrong — they're just eating lunch too!",
            "Refusing out loud makes the other student feel unwanted. Everyone deserves to feel comfortable at lunch!",
            "Saying it's 'awkward' loudly can really sting. Remember, the other student has feelings too!",
          ],
          grammarText: [
            "'I really don't want to' — 'really' emphasizes the negative feeling. 'Ugh' is an interjection showing frustration!",
            "'I'll stand, thanks' — future tense with a polite but firm refusal. 'Thanks' here can sound sarcastic!",
            "'Can't I just + verb?' — negative question expressing a wish for an alternative. 'Somewhere else' is an adverb phrase!",
          ],
        },
      ],
    },
    {
      id: "step2",
      background: "/bg/bg_lunchroom.png",
      paths: {
        good: {
          title: [
            "Your new friend loves today's lunch!",
            "A Lunch Conversation Begins!",
            "Breaking the Ice at Lunch!",
          ],
          text: [
            "Your new friend smiles and says today's lunch is their favorite food! What will you say?",
            "Your new friend happily tells you that today's menu is their favorite. How do you respond?",
            "Your new friend lights up and shares that today's lunch is something they love. What do you say?",
          ],
          grammar: [
            "'smiles and says' 두 동사를 and로 연결. 'today's lunch' 소유격으로 오늘의 점심을 표현",
            "부사(happily) + 동사(tells). 'How do you respond?' 현재 시제 의문문",
            "'lights up' 표정이 밝아지다는 관용표현. 'something they love' 관계대명사절",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Really? It\'s so yummy! I think I love it too!"',
                '"Oh wow, me too! This is actually really good!"',
                '"Is it? I have to say, it smells amazing. I think I\'m a fan now!"',
              ],
              kr: [
                "진짜? 너무 맛있다! 나도 좋아할 것 같아!",
                "오 진짜? 나도! 이거 진짜 맛있네!",
                "그래? 솔직히 냄새부터 좋더라. 나도 팬이 된 것 같아!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Right?! I'm so happy you like it too!",
                "Yes! High five! We have the same taste!",
                "Ha! I knew you'd love it! It's the best!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a warm response! 😍",
                "You connected through food! 😍",
                "A great conversation starter! 😍",
              ],
              emotionText: [
                "Sharing excitement about food is a great way to connect! Your new friend feels like you already have something in common!",
                "Saying 'me too!' instantly creates a bond. Your new friend's face lights up even more!",
                "'I'm a fan now' is a fun, enthusiastic expression. Your new friend loves your energy!",
              ],
              grammarText: [
                "'I think I love it too' — 'I think' softens a statement. 'Too' at the end adds agreement!",
                "'Me too!' is an informal way to express agreement. 'Actually' adds a sense of pleasant surprise!",
                "'I have to say' introduces an honest opinion. 'I'm a fan' is an informal way to say you like something!",
              ],
            },
            {
              en: [
                '"Hmm, it\'s okay I guess. Not really my favorite."',
                '"Oh. I mean, it\'s not bad. Just not really special to me."',
                "\"I wouldn't say it's my favorite, but I don't dislike it either.\"",
              ],
              kr: [
                "음, 뭐 그냥 그래. 내가 제일 좋아하는 건 아닌데.",
                "아. 음, 나쁘진 않은데. 그냥 나한텐 특별한 맛은 아니야.",
                "내가 제일 좋아하는 건 아니지만 싫지도 않아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. It's okay if you don't like it.",
                "I see... well, I think it's really good!",
                "Fair enough! To each their own, I guess.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_surprised" },
              feedbackTitle: [
                "Honest, but a little flat! 😐",
                "That was honest, but could be warmer! 😐",
                "Diplomatic, but your friend wanted more enthusiasm! 😐",
              ],
              emotionText: [
                "Being honest is fine, but 'I guess' makes you sound uninterested. A little warmth keeps the conversation going!",
                "Your friend was excited to share something they love. A gentler response would keep the good mood going!",
                "That was a balanced answer! But your friend's excitement dropped a little. Try asking what they love about it!",
              ],
              grammarText: [
                "'It's okay I guess' — 'I guess' shows lukewarm acceptance. 'Not really my favorite' uses 'not really' to soften!",
                "'I mean' is used to clarify or soften a statement. 'Just' minimizes the following statement!",
                "'I wouldn't say' — conditional negative for a polite disagreement. 'Either' at the end balances the sentence!",
              ],
            },
            {
              en: [
                '"Seriously? This food is so bland. Why would anyone like this?"',
                '"Hmm, I really don\'t get it. It tastes like nothing to me."',
                "\"I don't know how you can like this. It's really not good.\"",
              ],
              kr: [
                "진짜? 이게 무슨 맛이야. 왜 이걸 좋아해?",
                "음, 솔직히 이해가 안 가. 나한텐 아무 맛도 없는데.",
                "어떻게 이걸 좋아할 수 있는지 모르겠어. 진짜 맛없는데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I'm sorry you feel that way.",
                "Oh... I see. Sorry I mentioned it.",
                "Oh... okay. Never mind then.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Oh! That was quite harsh... 😨",
                "Your friend's smile disappeared... 😨",
                "That really dampened the mood... 😨",
              ],
              emotionText: [
                "Your friend was excited to share something special. Dismissing it so harshly makes them feel embarrassed for liking it.",
                "Everyone has different tastes — and that's okay! But 'tastes like nothing' when someone loves it feels very dismissive.",
                "Even if you don't like the food, your friend does. Respecting different preferences is an important part of friendship!",
              ],
              grammarText: [
                "'Why would anyone like this?' — 'would' in a rhetorical question expresses disbelief. 'Bland' means lacking flavor!",
                "'I don't really get it' — 'get' here means understand. 'Taste like nothing' is a great descriptive phrase!",
                "'I don't know how you can' — present tense negative + indirect question. Shows genuine incomprehension!",
              ],
            },
          ],
        },
        neutral: {
          title: [
            "An Awkward Silence...",
            "Your New Neighbor Tries to Talk!",
            "Breaking Through the Awkwardness!",
          ],
          text: [
            "It's a bit quiet. Your new neighbor smiles and says today's lunch is their favorite. What will you say?",
            "After an awkward silence, your neighbor cheerfully mentions that today's food is their favorite. How do you respond?",
            "The silence is a little heavy. Your neighbor tries to break the ice and says they love today's lunch. What do you do?",
          ],
          grammar: [
            "'a bit quiet' 부사구(a bit) + 형용사(quiet). 'What will you say?' 미래의지를 묻는 의문문",
            "'After an awkward silence' 전치사구로 시간을 나타냄. 부사(cheerfully) + 동사(mentions)",
            "'break the ice' 어색한 분위기를 없애다는 관용표현. 'What do you do?' 현재시제 의문문",
          ],
          scene: { hero: "hero_lookaway", friend: "friend1_shy" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"Oh really? That's so cool! I'm happy to try new things!\"",
                '"Oh yeah? I actually think it\'s pretty good too!"',
                '"Oh, is it? That\'s nice! What else do you like?"',
              ],
              kr: [
                "오 진짜? 좋다! 나도 새로운 거 먹어보는 거 좋아해!",
                "오 그래? 나도 사실 꽤 맛있는 것 같아!",
                "오 그래? 좋은 정보네! 또 뭐 좋아해?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Really? Then we should try more things together!",
                "Yes! Right? It's so good!",
                "Oh lots of things! Do you want to hear?",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "Great recovery! 😍",
                "You turned the awkward moment around! 😍",
                "What a thoughtful question! 😍",
              ],
              emotionText: [
                "Even after a quiet start, you jumped in with enthusiasm! Your neighbor is so glad you responded warmly!",
                "Saying 'I actually think it's good too' shows openness. Your neighbor feels like you're really listening!",
                "Asking 'what else do you like?' shows genuine curiosity. Your neighbor is thrilled to keep talking!",
              ],
              grammarText: [
                "'That's so cool!' — informal expression of approval. 'I'm happy to + verb' expresses willingness!",
                "'I actually think' — 'actually' adds a sense of pleasant surprise. 'Pretty good' uses 'pretty' as an intensifier!",
                "'What else do you like?' — 'what else' asks for additional information. A great conversation-extending question!",
              ],
            },
            {
              en: [
                '"Oh. Yeah, it\'s fine I guess."',
                '"Mm. It\'s okay."',
                '"Yeah... not bad I suppose."',
              ],
              kr: [
                "아. 그래, 뭐 그렇구나.",
                "음. 괜찮네.",
                "그래... 뭐 나쁘진 않은 것 같아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay then.",
                "Oh... I see. Okay.",
                "Okay... I guess we have different tastes.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "Hmm, that was a bit short... 😐",
                "Your neighbor tried their best! 😐",
                "A little more warmth would help! 😐",
              ],
              emotionText: [
                "Your neighbor tried to start a conversation. A one-word answer closes the door. Try asking them a question back!",
                "Short answers are okay, but they make it hard to keep talking. Your neighbor feels a little deflated.",
                "'Not bad' is a start! But your neighbor was hoping for a little more. A follow-up question would go a long way!",
              ],
              grammarText: [
                "'I guess' shows uncertainty. 'It's fine' is a neutral acceptance — not enthusiastic, not negative!",
                "'It's okay' is a minimal response. In English, one-word answers often signal disinterest!",
                "'Not bad' is an understatement meaning 'quite good'. It can sound dismissive without a follow-up!",
              ],
            },
            {
              en: [
                '"Ew, really? I think it tastes awful honestly."',
                "\"Hmm, I really don't agree. It's kind of gross to me.\"",
                "\"I really don't see the appeal. It's not great at all.\"",
              ],
              kr: [
                "에이, 진짜? 나는 솔직히 완전 별로인데.",
                "음, 나는 모르겠어. 나한텐 좀 별로야.",
                "왜 좋은지 솔직히 모르겠어. 별로 맛있지 않은데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I see. Sorry I said anything.",
                "Oh... okay. Never mind then.",
                "Oh... sorry. I won't bring it up again.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_sad" },
              feedbackTitle: [
                "Oh! That shut the conversation down... 😨",
                "Your neighbor feels embarrassed now... 😨",
                "That was a bit unkind... 😨",
              ],
              emotionText: [
                "Your neighbor tried to connect and you shut it down. They just wanted to share something they enjoy!",
                "Calling food 'gross' when someone loves it makes them feel embarrassed for sharing. Be gentle with people's favorites!",
                "Even if you disagree, 'not great at all' is quite harsh. You can disagree kindly!",
              ],
              grammarText: [
                "'Ew' is an interjection expressing disgust. 'I think it tastes awful' — 'taste' as a linking verb + adjective!",
                "'I really don't agree' — 'really' emphasizes disagreement. 'Kind of gross' uses 'kind of' as a softener!",
                "'I don't see the appeal' — idiom meaning 'I don't understand why people like it'. 'Not great at all' uses 'at all' for emphasis!",
              ],
            },
          ],
        },
        bad: {
          title: [
            "Your neighbor asks if you're uncomfortable...",
            "Did I Make You Uncomfortable?",
            "An Honest Question from Your Neighbor",
          ],
          text: [
            "You said you didn't want to sit here. Now your neighbor quietly asks if it's because of them. What will you say?",
            "Your neighbor heard what you said earlier and asks if they made you uncomfortable. What do you do?",
            "Your neighbor looks a little hurt and asks if you're only sitting there because you had no choice. How do you respond?",
          ],
          grammar: [
            "과거시제(said, didn't want) 이미 말한 것을 표현. 'Is it because of them?' 이유를 묻는 현재시제 의문문",
            "'heard what you said' 간접화법으로 들은 내용을 표현. 부사(quietly) + 동사(asks)",
            "감각동사(looks) + 형용사(hurt)로 상처받은 모습을 표현. 'had no choice' 선택의 여지가 없었다는 의미",
          ],
          scene: { hero: "hero_lookaway", friend: "friend1_sad" },
          newCharacter: null,
          choices: [
            {
              en: [
                "\"No no! I'm just shy. I didn't mean to be rude. Sorry!\"",
                '"Not at all! I was just nervous. I\'m really sorry about that."',
                '"Oh gosh, no. That came out wrong. I apologize — I\'m glad I sat here."',
              ],
              kr: [
                "아니야! 그냥 내가 좀 부끄러움을 타서. 무례하게 굴려던 게 아니야. 미안해!",
                "전혀 아니야! 그냥 긴장했던 거야. 정말 미안해.",
                "아 세상에, 아니야. 말이 잘못 나왔어. 미안해 — 여기 앉게 돼서 다행이야.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh! That's okay! I get nervous too sometimes.",
                "Really? That's a relief! I'm glad you stayed.",
                "Aw, it's okay! I'm glad you said that.",
              ],
              scene: { hero: "hero_surprised", friend: "friend1_happy" },
              feedbackTitle: [
                "What a brave thing to say! 😍",
                "That was honest and kind! 😍",
                "A perfect apology! 😍",
              ],
              emotionText: [
                "Admitting you were nervous is brave! Your neighbor feels relieved and the awkwardness melts away!",
                "'Not at all!' is a strong, warm denial. Your neighbor's worry disappears immediately!",
                "'That came out wrong' is an honest and relatable thing to say. Your neighbor appreciates your sincerity!",
              ],
              grammarText: [
                "'I didn't mean to + verb' — past negative expressing unintentional action. Very natural apology structure!",
                "'Not at all!' is a strong negative meaning 'absolutely not'. 'I was just nervous' uses 'just' to explain!",
                "'That came out wrong' is an idiom meaning you didn't express yourself well. 'I apologize' is more formal than 'sorry'!",
              ],
            },
            {
              en: [
                "\"Oh. It's not really about you. Don't worry.\"",
                "\"No, it's fine. I'm just not great with new people.\"",
                "\"It's nothing personal. I'm just not very social.\"",
              ],
              kr: [
                "아. 너 때문은 아니야. 신경 쓰지 마.",
                "아니, 괜찮아. 그냥 나는 새로운 사람이랑 잘 못 어울려서.",
                "딱히 너 때문은 아니야. 그냥 내가 좀 사교적이지 않아서.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. I'll leave you alone then.",
                "I see... okay. Sorry for asking.",
                "Okay... I understand. Sorry.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Honest, but your neighbor still feels a little hurt... 😐",
                "That explains it, but it's a bit cold... 😐",
                "True, but your neighbor feels a little rejected... 😐",
              ],
              emotionText: [
                "'Don't worry' is kind, but your neighbor still feels a little unwanted. A small smile or friendly word helps more!",
                "Being honest about shyness is okay! But your neighbor might feel like they should stay quiet around you.",
                "'Nothing personal' is a phrase that often still feels personal! A small apology would go a long way here.",
              ],
              grammarText: [
                "'It's not really about you' — 'not really' softens the negative. 'Don't worry' is an imperative for reassurance!",
                "'I'm not great with' — adjective(great) + preposition(with) to describe ability in social situations!",
                "'Nothing personal' is an idiom meaning no offense is intended. 'Not very social' uses 'very' to intensify the negative!",
              ],
            },
            {
              en: [
                '"Well... yeah, kind of. Sorry."',
                '"Honestly? A little bit. No offense."',
                '"I mean... it is a little awkward, yes."',
              ],
              kr: [
                "뭐... 그렇긴 해. 미안.",
                "솔직히? 조금. 기분 나쁘게 듣지는 마.",
                "음... 좀 어색하긴 해, 맞아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I see. Sorry for asking.",
                "Oh... okay. I'll just eat quietly then.",
                "I see... sorry for bothering you.",
              ],
              scene: { hero: "hero_angry", friend: "friend1_cry" },
              feedbackTitle: [
                "Oh... that was very honest but really hurtful... 😨",
                "'No offense' doesn't always prevent offense... 😨",
                "Your neighbor looks really hurt now... 😨",
              ],
              emotionText: [
                "Honesty is good, but this kind of honesty hurts. Your neighbor didn't do anything wrong — they're just a new face!",
                "'No offense' after saying something hurtful doesn't take the hurt away. Think before you speak!",
                "Admitting it's 'awkward' out loud makes your neighbor feel like the problem. Everyone deserves kindness!",
              ],
              grammarText: [
                "'Kind of' softens a statement, but the admission still stings. 'Sorry' at the end shows some awareness!",
                "'Honestly?' — using a question form for emphasis. 'No offense' is used before or after something potentially hurtful!",
                "'I mean' introduces a clarification. 'A little awkward' uses 'a little' to soften — but it still hurts!",
              ],
            },
          ],
        },
      },
    },
    {
      id: "step3",
      background: "/bg/bg_lunchroom.png",
      paths: {
        "good-good": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Lunch is almost over!",
            "Time to say goodbye!",
            "The bell is about to ring!",
          ],
          text: [
            "Lunch was so fun! You ate and talked a lot. Now it's time to clean up. What will you say?",
            "You had a great lunch conversation. As you clean up, what do you say to your new friend?",
            "Lunch flew by with great conversation. As you both get ready to leave, what do you say?",
          ],
          grammar: [
            "과거시제(ate, talked)로 완료된 행동을 나타냄. 'It's time to + verb' 무언가를 해야 할 때임을 나타내는 표현",
            "과거시제(had)로 경험을 표현. 'As you clean up' 시간 부사절",
            "'flew by' 시간이 빨리 지나갔다는 관용표현. 'get ready to' 준비하다는 의미",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I had so much fun! Let\'s eat together again tomorrow!"',
                '"That was really nice. Same time tomorrow?"',
                '"I really enjoyed this. I hope we can do it again soon!"',
              ],
              kr: [
                "너무 즐거웠어! 내일도 같이 먹자!",
                "정말 좋았어. 내일도 이 시간에 여기서 볼까?",
                "정말 좋았어. 또 같이 먹을 수 있으면 좋겠다!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Yes! I'll save you a seat tomorrow!",
                "Definitely! It's a date!",
                "Me too! See you tomorrow!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "A wonderful new friendship! 😍",
                "You made a lunch buddy! 😍",
                "What a heartwarming ending! 😍",
              ],
              emotionText: [
                "You went from strangers to lunch friends in one meal! Your new friend is already looking forward to tomorrow!",
                "'Same time tomorrow?' is such a friendly and direct way to make plans. Your new friend loves it!",
                "'I hope we can do it again' is warm and genuine. A real friendship just started!",
              ],
              grammarText: [
                "'I had so much fun' — past tense for a completed experience. 'Let's + verb' is a suggestion including both of you!",
                "'Same time tomorrow?' is an elliptical question. Very natural in casual speech!",
                "'I really enjoyed this' — 'enjoy' + noun/gerund. 'I hope we can' uses present tense in a hope clause!",
              ],
            },
            {
              en: [
                '"Okay, bye! See you around!"',
                '"That was fun. See you!"',
                '"Well, this was okay. Bye!"',
              ],
              kr: [
                "그래, 잘 가! 또 보자!",
                "재밌었어. 또 봐!",
                "뭐, 괜찮았어. 잘 가!",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh, bye! See you!",
                "Yeah, see you around!",
                "Okay... bye.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_thinking" },
              feedbackTitle: [
                "A quick goodbye! 😐",
                "Friendly, but a little brief! 😐",
                "That was a bit anticlimactic... 😐",
              ],
              emotionText: [
                "A quick bye after a fun lunch feels a little abrupt. A 'let's do this again!' would mean so much more!",
                "'See you around' is friendly but vague. Your new friend is hoping for something more specific!",
                "After such a nice lunch, 'this was okay' is a little flat. Your friend deserved a warmer send-off!",
              ],
              grammarText: [
                "'See you around' = I'll probably see you sometime. Casual and open-ended!",
                "'That was fun' — past tense evaluation. A simple but warm way to close a conversation!",
                "'This was okay' — lukewarm evaluation. Try 'great' or 'fun' for a warmer tone!",
              ],
            },
            {
              en: [
                '"If you want to eat with me again, just let me know. I don\'t really mind."',
                '"You can sit with me again if you want. No pressure though."',
                '"I guess we could do this again sometime. If you really want."',
              ],
              kr: [
                "또 같이 먹고 싶으면 말해. 나는 크게 신경 안 써.",
                "원하면 또 나랑 앉아도 돼. 뭐 꼭 그래야 하는 건 아니지만.",
                "뭐 또 이렇게 해도 되긴 하지. 네가 정말 원하면.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... okay. Thanks I guess.",
                "Oh... sure. Maybe.",
                "Um... okay. If I want to...",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "Hmm, that was a little cold after such a fun lunch... 😨",
                "Your friend wanted more warmth! 😨",
                "That felt like a very reluctant invitation... 😨",
              ],
              emotionText: [
                "'I don't really mind' makes it sound like eating with your friend is just tolerable. They deserved more warmth!",
                "'No pressure' can feel like you're already looking for an exit. Your friend feels a little deflated!",
                "'If you really want' sounds very unenthusiastic. After all that fun, your friend hoped for a warmer goodbye!",
              ],
              grammarText: [
                "'I don't really mind' — 'really' softens the statement. 'Mind' here means 'have an objection to'!",
                "'No pressure' is an idiom meaning there is no obligation. It feels distancing here!",
                "'If you really want' — conditional clause with 'really' for emphasis. Sounds reluctant in this context!",
              ],
            },
          ],
        },
        "good-neutral": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Lunch is almost done!",
            "Wrapping Up Lunch!",
            "Time to Head Back!",
          ],
          text: [
            "Lunch is ending. It was a little quiet, but not bad. What will you say before you go?",
            "As lunch wraps up, the conversation was a bit flat. What do you say to your neighbor?",
            "Lunch is over. Things were a little quiet, but your neighbor seems nice. What do you say?",
          ],
          grammar: [
            "현재진행형(is ending)으로 곧 끝날 점심을 표현. 'What will you say?' 미래의지를 묻는 의문문",
            "'As lunch wraps up' 시간 부사절. 형용사(flat)로 대화가 활기없었음을 표현",
            "형용사(nice)로 친구가 좋은 사람임을 표현. 'What do you say?' 현재시제 의문문",
          ],
          scene: { hero: "hero_thinking", friend: "friend1_thinking" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, sorry I was a bit quiet. I\'m actually pretty shy. Want to eat again tomorrow?"',
                "\"This was nice! I'm sorry I didn't talk much. Can we try again tomorrow?\"",
                "\"I wasn't very talkative today. But I'd love to eat together again if you're up for it!\"",
              ],
              kr: [
                "저기, 내가 좀 조용했는데 미안해. 사실 좀 수줍음을 타. 내일 또 먹을래?",
                "좋았어! 내가 말을 많이 못 해서 미안해. 내일 또 해볼 수 있을까?",
                "오늘 말이 별로 없었는데. 그래도 또 같이 먹으면 좋겠어!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Of course! I'm shy too. See you tomorrow!",
                "Yes! I'd love that! See you then!",
                "Really? I'm glad! See you tomorrow!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a sweet thing to say! 😍",
                "A lovely recovery! 😍",
                "That was warm and genuine! 😍",
              ],
              emotionText: [
                "Admitting you were shy and still reaching out takes real courage. Your neighbor loves your honesty!",
                "Saying sorry for being quiet AND asking to try again shows real effort. Your neighbor is so glad!",
                "'I'd love to' is warm and sincere. Your neighbor feels truly invited and valued!",
              ],
              grammarText: [
                "'Sorry I was a bit quiet' — indirect apology using past tense. 'Want to + verb?' is a casual invitation!",
                "'Can we try again?' — 'can' for possibility + 'again' for repetition. Natural and friendly!",
                "'I'd love to' = 'I would love to' — contraction expressing genuine enthusiasm!",
              ],
            },
            {
              en: [
                '"Well, bye I guess."',
                '"Okay, see you around."',
                '"Bye. That was... fine."',
              ],
              kr: ["뭐, 잘 가.", "그래, 또 보자.", "잘 가. 뭐... 그냥 그랬어."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... bye.",
                "Yeah... see you.",
                "Okay... bye then.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "A very quiet goodbye... 😐",
                "Your neighbor hoped for a bit more! 😐",
                "A bit flat for an ending... 😐",
              ],
              emotionText: [
                "A quiet goodbye after a quiet lunch leaves things feeling unfinished. A small 'it was nice meeting you' would help!",
                "'See you around' is okay, but vague. Your neighbor isn't sure if you'll talk again.",
                "'That was fine' is better than nothing, but your neighbor deserved a warmer closing line!",
              ],
              grammarText: [
                "'Well, bye I guess' — 'well' is a filler word. 'I guess' shows uncertainty or reluctance!",
                "'See you around' = vague farewell. Implies you might meet again without committing!",
                "'That was fine' — lukewarm past evaluation. 'Fine' in English often sounds like 'barely acceptable'!",
              ],
            },
            {
              en: [
                '"That food was really boring. See you never!"',
                '"This lunch was so awkward. I won\'t sit here again."',
                '"That was honestly a waste of time. Bye."',
              ],
              kr: [
                "밥이 진짜 별로였어. 다시는 보지 말자!",
                "점심이 너무 어색했어. 여기 다시는 안 앉을래.",
                "솔직히 시간 낭비였어. 잘 가.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... that really hurt. I'm sorry.",
                "Oh... I didn't mean to make it awkward.",
                "Oh... I see. Sorry I wasn't more interesting.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That was really unkind... 😨",
                "Your neighbor looks really hurt... 😨",
                "That was harsh and hurtful... 😨",
              ],
              emotionText: [
                "'See you never' is a very harsh thing to say. Your neighbor did nothing wrong — be kind!",
                "Calling the lunch 'awkward' as a parting shot makes your neighbor feel like the problem.",
                "'Waste of time' is a very hurtful thing to say after someone shared a meal with you.",
              ],
              grammarText: [
                "'See you never!' — a twist on 'see you later' used for dramatic effect. Very hurtful here!",
                "'I won't sit here again' — future negative expressing a firm decision. 'Awkward' as an adjective describes social discomfort!",
                "'A waste of time' — noun phrase expressing that something had no value. Very dismissive!",
              ],
            },
          ],
        },
        "good-bad": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Your neighbor is quiet now...",
            "The Mood Changed...",
            "An Awkward End to Lunch",
          ],
          text: [
            "Your neighbor stopped talking after what you said about the food. Lunch is almost over. What do you say?",
            "Your neighbor has gone quiet. You realize what you said was a bit harsh. What do you do?",
            "It got quiet after your comment about the food. Your neighbor looks a little sad. What do you say?",
          ],
          grammar: [
            "과거시제(stopped talking)로 갑자기 조용해진 상황을 표현. 'Lunch is almost over' 현재시제로 점심이 거의 끝났음을 나타냄",
            "현재완료(has gone quiet)로 지금까지 이어진 상태를 표현. 과거시제(said, was)로 이미 한 말을 표현",
            "'It got quiet' 상태 변화를 나타내는 표현. 'looks a little sad' 감각동사 + 형용사로 상태 묘사",
          ],
          scene: { hero: "hero_lookaway", friend: "friend1_angry" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, I\'m sorry. That came out wrong. The food is actually not bad!"',
                '"I think I was too harsh earlier. Sorry about that — it\'s not that bad."',
                '"I apologize for what I said. I think I just have a different taste. No hard feelings?"',
              ],
              kr: [
                "저기, 미안해. 말이 잘못 나왔어. 사실 음식이 나쁘지 않은 것 같아!",
                "아까 너무 심하게 말한 것 같아. 미안해 — 그렇게 나쁘진 않아.",
                "한 말 미안해. 그냥 내 입맛이 다른 것 같아. 기분 나쁘게 듣지 않길 바라!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh! It's okay. I'm glad you said that.",
                "Thanks for saying that. I feel better!",
                "No hard feelings at all! Thanks for apologizing.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_surprised" },
              feedbackTitle: [
                "A kind recovery! 😍",
                "You made things right! 😍",
                "A thoughtful apology! 😍",
              ],
              emotionText: [
                "'That came out wrong' is honest and relatable. Your neighbor feels the apology is genuine!",
                "Admitting you were 'too harsh' shows self-awareness. Your neighbor's mood lifts right away!",
                "'No hard feelings?' is a great phrase to ease tension. Your neighbor feels respected!",
              ],
              grammarText: [
                "'That came out wrong' is an idiom meaning your words didn't reflect your intention. Very natural!",
                "'I was too harsh' — past tense self-assessment. 'It's not that bad' uses 'that' as a degree modifier!",
                "'No hard feelings?' — idiom meaning 'are we still okay?' Used to check the relationship after conflict!",
              ],
            },
            {
              en: [
                '"Uh... sorry. I guess I was a bit direct."',
                '"Sorry if I came across wrong. I just say what I think."',
                '"Sorry. I didn\'t think it would bother you that much."',
              ],
              kr: [
                "어... 미안. 내가 좀 직접적으로 말한 것 같아.",
                "잘못 들었으면 미안해. 그냥 생각한 걸 말하는 편이라.",
                "미안. 그렇게 신경 쓸 줄 몰랐어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "It's okay... I guess.",
                "Okay... I understand.",
                "It did bother me a little, but okay.",
              ],
              scene: { hero: "hero_thinking", friend: "friend1_thinking" },
              feedbackTitle: [
                "A half-apology... 😐",
                "That explains it, but doesn't fully fix it! 😐",
                "Your neighbor still feels a little hurt... 😐",
              ],
              emotionText: [
                "Saying 'a bit direct' is a way of not fully owning the mistake. A warmer apology would help more!",
                "'I just say what I think' explains your style, but your neighbor still feels hurt by the words.",
                "'I didn't think it would bother you' shifts focus away from the apology. Your neighbor needed more warmth!",
              ],
              grammarText: [
                "'I was a bit direct' — 'a bit' softens the admission. 'Direct' as an adjective describing communication style!",
                "'Come across wrong' is a phrasal verb meaning to be misunderstood. 'I just say what I think' = I'm very honest!",
                "'I didn't think it would + verb' — past negative + conditional. Shifts blame subtly to the listener!",
              ],
            },
            {
              en: [
                '"Whatever. You shouldn\'t be so sensitive about food."',
                '"I was just being honest. Don\'t take it so personally."',
                '"It\'s just my opinion. Why is everyone so touchy?"',
              ],
              kr: [
                "뭐든지. 음식 가지고 그렇게 예민하게 굴면 안 되지.",
                "그냥 솔직하게 말한 거야. 너무 개인적으로 듣지 마.",
                "그냥 내 의견이야. 왜 다들 이렇게 예민해?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I wasn't being sensitive. You were just rude.",
                "I wasn't taking it personally. It just hurt.",
                "I'm not touchy. That was just unkind.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That made things worse... 😨",
                "That's not how you fix things... 😨",
                "Your neighbor feels really dismissed now... 😨",
              ],
              emotionText: [
                "Calling someone 'sensitive' when they're hurt adds more hurt. It's never okay to dismiss someone's feelings!",
                "'Don't take it personally' after saying something hurtful doesn't fix the hurt. Own your words!",
                "'Why is everyone so touchy?' deflects your responsibility entirely. Your neighbor deserves a real apology!",
              ],
              grammarText: [
                "'Shouldn't be so sensitive' — modal 'should' + negative for advice/judgment. 'So' intensifies the adjective!",
                "'Don't take it personally' — imperative used as advice. 'I was just being honest' uses 'just' to minimize!",
                "'Why is everyone so touchy?' — rhetorical question deflecting blame. 'Touchy' = easily upset!",
              ],
            },
          ],
        },
        "neutral-good": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Lunch is wrapping up!",
            "Almost time to go!",
            "The bell will ring soon!",
          ],
          text: [
            "Lunch is nearly over. The conversation picked up a little. What will you say before you leave?",
            "As lunch ends, things got a little better between you two. What do you say?",
            "Lunch is ending on a better note. Your neighbor looks happier now. What do you say?",
          ],
          grammar: [
            "'nearly over' 부사(nearly) + 형용사(over)로 거의 끝났음을 표현. 'picked up' 좋아지다는 의미의 관용표현",
            "'As lunch ends' 시간 부사절. 'got a little better' 상태 변화를 나타내는 표현",
            "'on a better note' 더 좋은 분위기로 끝난다는 관용표현. 'looks happier' 감각동사 + 비교급 형용사",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"This turned out to be really fun! Want to eat together again?"',
                '"I\'m glad we started talking! Same seat tomorrow?"',
                '"I had a great time! Let\'s do this again soon!"',
              ],
              kr: [
                "생각보다 재밌었어! 또 같이 먹을래?",
                "우리 얘기하게 돼서 좋다! 내일도 같은 자리에서 볼까?",
                "정말 좋았어! 또 이렇게 하자!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Yes! I'm so glad we talked! See you tomorrow!",
                "Definitely! I'll be here!",
                "Me too! See you then!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a turnaround! 😍",
                "A great new lunch friendship! 😍",
                "What a warm ending! 😍",
              ],
              emotionText: [
                "'This turned out to be fun' acknowledges the rocky start and celebrates how things improved. Your neighbor loves it!",
                "'I'm glad we started talking' is honest and warm. Your neighbor feels truly seen and appreciated!",
                "'Let's do this again' is enthusiastic and direct. Your neighbor is already looking forward to tomorrow!",
              ],
              grammarText: [
                "'This turned out to be' — 'turn out' is a phrasal verb meaning a result was different from expected!",
                "'I'm glad we started' — present + past mixed to reflect on something that just happened!",
                "'I had a great time' — past tense for completed experience. 'Let's do this again' = future suggestion!",
              ],
            },
            {
              en: [
                '"Okay, see you around I guess."',
                '"Well, bye. That wasn\'t as bad as I expected."',
                '"Bye. It was... okay I think."',
              ],
              kr: [
                "그래, 뭐 또 보자.",
                "음, 잘 가. 생각보다 나쁘지 않았어.",
                "잘 가. 뭐... 괜찮았던 것 같아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. See you.",
                "Oh... thanks I guess.",
                "Okay... bye then.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_thinking" },
              feedbackTitle: [
                "A lukewarm goodbye... 😐",
                "Your neighbor wanted a warmer ending! 😐",
                "That felt a little underwhelming... 😐",
              ],
              emotionText: [
                "'I guess' makes the farewell sound reluctant. Your neighbor just hopes you'll sit together again!",
                "'Not as bad as I expected' is honest but sounds like the bar was very low. Your neighbor deserves more!",
                "'It was okay I think' leaves your neighbor unsure how you really feel. A clearer, warmer word would help!",
              ],
              grammarText: [
                "'See you around I guess' — 'I guess' added to a farewell shows uncertainty. Low-commitment goodbye!",
                "'Not as bad as I expected' — comparative structure. Honest but backhanded!",
                "'I think' at the end of a statement softens it and shows uncertainty. Common in spoken English!",
              ],
            },
            {
              en: [
                '"This was so boring. I\'m never sitting here again."',
                '"That was a waste of my lunch break honestly."',
                '"Next time I\'ll find a better seat. This was too awkward."',
              ],
              kr: [
                "진짜 지루했어. 여기 다시는 안 앉을래.",
                "솔직히 점심 시간 낭비였어.",
                "다음엔 더 좋은 자리 찾을래. 너무 어색했어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... that really hurt. I thought we had a nice talk.",
                "Oh... I'm sorry I wasted your time.",
                "Oh... sorry I wasn't better company.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_surprised" },
              feedbackTitle: [
                "Oh! That was really hurtful... 😨",
                "Your neighbor feels terrible now... 😨",
                "That was a very unkind exit... 😨",
              ],
              emotionText: [
                "After things were finally getting better, 'boring' is a crushing thing to hear. Your neighbor is truly hurt!",
                "'Waste of my lunch break' — your neighbor tried to connect. Saying this dismisses their effort entirely!",
                "Saying you'll find a 'better seat' in front of them is deeply hurtful. Everyone deserves kindness!",
              ],
              grammarText: [
                "'I'm never sitting here again' — present continuous with 'never' for a strong future decision!",
                "'A waste of my lunch break' — noun phrase expressing that time had no value. Very dismissive!",
                "'Next time I'll find' — future tense for plans. 'Better seat' implies this person isn't good enough!",
              ],
            },
          ],
        },
        "neutral-neutral": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Lunch is almost done...",
            "A Quiet Ending to Lunch",
            "Time to Go...",
          ],
          text: [
            "Lunch is nearly over. It was quiet between you two. What will you say before you leave?",
            "As lunch ends, neither of you talked much. What do you say to your neighbor?",
            "Lunch is finishing. Things stayed pretty quiet. What do you say before you go?",
          ],
          grammar: [
            "'nearly over' 부사(nearly) + 형용사(over)로 거의 끝났음을 표현",
            "'neither of you' 둘 다 하지 않았다는 의미의 표현. 'talked much' 부사(much)로 말이 많지 않았음을 표현",
            "과거시제(stayed)로 계속 유지된 상태를 표현. 'pretty quiet' 부사(pretty) + 형용사(quiet)",
          ],
          scene: { hero: "hero_lookaway", friend: "friend1_thinking" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, sorry I was so quiet. Want to try again tomorrow?"',
                "\"I'm not great at small talk, but I'd like to try again. Same time tomorrow?\"",
                '"This was a little quiet, but in a good way. Can we eat together again?"',
              ],
              kr: [
                "저기, 내가 너무 조용해서 미안해. 내일 다시 한번 해볼래?",
                "나 잡담이 좀 서툰데, 다시 해보고 싶어. 내일 같은 시간에 볼까?",
                "좀 조용하긴 했지만 나쁘지 않았어. 또 같이 먹을 수 있어?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Yes! I'd love that! I'm quiet too sometimes.",
                "Really? Me too! See you tomorrow!",
                "I'd like that! See you then!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a kind gesture! 😍",
                "That was honest and lovely! 😍",
                "A sweet way to end lunch! 😍",
              ],
              emotionText: [
                "Acknowledging the silence and still reaching out is brave. Your neighbor is so glad you said something!",
                "Admitting you're not great at small talk is honest and endearing. Your neighbor relates completely!",
                "Calling the quiet 'a good way' reframes it positively. Your neighbor feels comfortable and accepted!",
              ],
              grammarText: [
                "'Sorry I was so quiet' — indirect apology. 'Want to try again?' is a casual invitation!",
                "'I'm not great at small talk' — adjective(great) + preposition(at) to describe ability!",
                "'In a good way' is a phrase added to soften or reframe something. Very natural in conversation!",
              ],
            },
            {
              en: [
                '"Well, bye."',
                '"See you, I guess."',
                '"Okay, I\'m going. Bye."',
              ],
              kr: ["음, 잘 가.", "뭐, 또 봐.", "그래, 나 간다. 잘 가."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... bye.",
                "Okay... see you.",
                "Alright... bye.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "A very quiet goodbye... 😐",
                "Things ended as quietly as they started... 😐",
                "Your neighbor hoped for a little more! 😐",
              ],
              emotionText: [
                "A one-word goodbye after a quiet lunch leaves things very unresolved. A small 'it was nice meeting you' would mean a lot!",
                "'I guess' shows you're not sure if you even want to see them again. Your neighbor notices that!",
                "Getting up without much of a goodbye makes your neighbor feel like they didn't matter. They did!",
              ],
              grammarText: [
                "'Well, bye' — 'well' is a discourse marker showing you're wrapping up. Very brief farewell!",
                "'See you, I guess' — 'I guess' makes the farewell sound very noncommittal!",
                "'I'm going' — present continuous for an action happening right now. 'Bye' is the shortest farewell!",
              ],
            },
            {
              en: [
                '"That was so boring. I should have stood and eaten."',
                '"This was really awkward. I\'m not doing this again."',
                '"I can\'t believe I wasted my whole lunch like this."',
              ],
              kr: [
                "진짜 지루했어. 그냥 서서 먹을 걸 그랬어.",
                "진짜 어색했어. 다시는 이러지 말아야겠어.",
                "이렇게 점심을 다 낭비하다니 믿기지 않아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I'm sorry I was such bad company.",
                "Oh... I didn't mean to make it awkward.",
                "Oh... I'm sorry for wasting your time.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That was very unkind... 😨",
                "Your neighbor feels terrible now... 😨",
                "That was hurtful to say out loud... 😨",
              ],
              emotionText: [
                "Your neighbor heard that. They didn't ask to be sat next to — be kind about it!",
                "Saying you'll 'never do this again' in front of them makes your neighbor feel rejected.",
                "'Wasted my whole lunch' suggests your neighbor's company had zero value. That's very painful to hear!",
              ],
              grammarText: [
                "'I should have stood' — past modal expressing regret about a past decision. 'Should have' + past participle!",
                "'I'm not doing this again' — present continuous used for a future decision. Firm and final-sounding!",
                "'I can't believe I wasted' — present + past expressing disbelief about a completed action!",
              ],
            },
          ],
        },
        "neutral-bad": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Your neighbor looks upset...",
            "Things Got Tense at Lunch",
            "An Uncomfortable End to Lunch",
          ],
          text: [
            "Your neighbor looks hurt after what you said about the food. Lunch is almost over. What do you say?",
            "After your harsh comment, your neighbor went quiet. You feel bad. What do you say before you go?",
            "Your neighbor looks upset. The lunch ended awkwardly. What do you say?",
          ],
          grammar: [
            "감각동사(looks) + 형용사(hurt). 'after what you said' 관계대명사절로 이유를 나타냄",
            "'went quiet' 갑자기 조용해졌다는 의미의 표현. 'feel bad' 미안하다는 의미의 표현",
            "과거시제(ended)로 이미 끝난 상황을 표현. 'look upset' 감각동사 + 형용사",
          ],
          scene: { hero: "hero_thinking", friend: "friend1_sad" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, I\'m really sorry. I was too harsh about the food."',
                '"I think I said something unkind earlier. I\'m sorry about that."',
                '"I owe you an apology. I shouldn\'t have said that about the food."',
              ],
              kr: [
                "저기, 정말 미안해. 음식 가지고 너무 심하게 말했어.",
                "아까 좀 못된 말을 한 것 같아. 미안해.",
                "사과해야 할 것 같아. 음식에 대해 그렇게 말하면 안 됐는데.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you for saying that. I feel better.",
                "It's okay. I appreciate the apology.",
                "Thank you. That means a lot.",
              ],
              scene: { hero: "hero_happy", friend: "friend1_thinking" },
              feedbackTitle: [
                "A brave apology! 😍",
                "That took self-awareness! 😍",
                "A sincere and thoughtful apology! 😍",
              ],
              emotionText: [
                "Saying 'I was too harsh' directly addresses what went wrong. Your neighbor feels truly heard!",
                "'I said something unkind' shows self-reflection. Your neighbor appreciates that you noticed!",
                "'I owe you an apology' is a mature and sincere phrase. Your neighbor's mood lifts right away!",
              ],
              grammarText: [
                "'I was too harsh' — past tense self-assessment. 'Too' shows excess!",
                "'I said something unkind' — past tense + adjective modifying 'something'. Great structure!",
                "'I owe you an apology' — idiom meaning you are responsible for apologizing. Very sincere!",
              ],
            },
            {
              en: [
                '"Sorry if you were offended or whatever."',
                '"I guess I could have said that better. Anyway, bye."',
                '"Sorry. I just don\'t like that food is all."',
              ],
              kr: [
                "뭐, 기분이 상했으면 미안.",
                "좀 더 잘 말할 수 있었을 것 같기도 해. 아무튼, 잘 가.",
                "미안. 그냥 그 음식이 싫은 것뿐이야.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Okay... thanks I guess.",
                "Alright... see you.",
                "Okay... it's fine.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "A half-hearted apology... 😐",
                "That apology needed more effort! 😐",
                "Your neighbor still feels a little dismissed! 😐",
              ],
              emotionText: [
                "'If you were offended' suggests their feelings might not be valid. A clearer 'I'm sorry I said that' works better!",
                "Saying 'I could have said that better' and then immediately saying 'anyway, bye' feels rushed and insincere.",
                "Explaining why you said it doesn't fully replace the apology. Lead with sorry next time!",
              ],
              grammarText: [
                "'Sorry if you were offended' — conditional apology. 'Or whatever' at the end sounds dismissive!",
                "'I could have said that better' — past modal expressing regret. 'Anyway' signals a change of topic!",
                "'Is all' at the end of a sentence minimizes what came before. Very casual and often dismissive!",
              ],
            },
            {
              en: [
                '"Well, I stand by what I said. The food is bad."',
                "\"I don't see why you're so upset. It was just my opinion.\"",
                '"Everyone\'s always so sensitive. I was just being honest."',
              ],
              kr: [
                "뭐, 한 말이 틀린 건 아니잖아. 음식이 별로야.",
                "왜 그렇게 기분 나빠하는지 모르겠어. 그냥 내 의견인데.",
                "다들 왜 이렇게 예민해. 그냥 솔직하게 말한 거잖아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I wasn't upset about the food. I was upset about how you said it.",
                "It's not about your opinion. It's about being kind.",
                "Being honest doesn't mean being hurtful.",
              ],
              scene: { hero: "hero_angry", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That made things much worse... 😨",
                "Your neighbor needed kindness, not excuses! 😨",
                "That completely dismissed your neighbor's feelings! 😨",
              ],
              emotionText: [
                "'I stand by what I said' shows no remorse. Your neighbor needed to hear that you understand why it hurt!",
                "'Just my opinion' doesn't make hurtful words harmless. Your neighbor deserves an apology, not an explanation!",
                "Blaming others for being 'sensitive' ignores your own responsibility. Everyone's feelings matter!",
              ],
              grammarText: [
                "'I stand by what I said' — idiom meaning to maintain a position. 'Stand by' is a phrasal verb!",
                "'I don't see why' — present negative + indirect question expressing dismissal!",
                "'Everyone's always so sensitive' — generalization using 'everyone' + 'always'. Sounds very dismissive!",
              ],
            },
          ],
        },
        "bad-good": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Things got better!",
            "A New Beginning at Lunch!",
            "Lunch Took a Turn for the Better!",
          ],
          text: [
            "After your apology, your neighbor is smiling again! Lunch is almost over. What do you say?",
            "You apologized and things feel lighter now. What do you say as lunch ends?",
            "Your neighbor accepted your apology warmly. As lunch wraps up, what do you say?",
          ],
          grammar: [
            "'After your apology' 전치사구로 사과 이후를 나타냄. 'is smiling again' 현재진행형으로 다시 웃고 있는 상태 표현",
            "'things feel lighter' 형용사(lighter)로 분위기가 가벼워졌음을 표현",
            "과거시제(accepted)로 완료된 행동을 표현. 'As lunch wraps up' 시간 부사절",
          ],
          scene: { hero: "hero_happy", friend: "friend1_happy" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"I\'m really glad I sat here today! Can we eat together again?"',
                '"This got so much better! Same time tomorrow?"',
                "\"I'm happy we worked things out. I'd love to eat together again!\"",
              ],
              kr: [
                "오늘 여기 앉길 잘했다! 내일도 같이 먹을 수 있어?",
                "훨씬 좋아졌다! 내일 같은 시간에 볼까?",
                "우리 잘 해결해서 좋아. 또 같이 먹으면 좋겠어!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Me too! Yes, let's eat together tomorrow!",
                "Definitely! See you then!",
                "I'd love that! See you tomorrow!",
              ],
              scene: { hero: "hero_happy", friend: "friend1_happy" },
              feedbackTitle: [
                "What a wonderful recovery! 😍",
                "From rough start to great ending! 😍",
                "A real friendship is forming! 😍",
              ],
              emotionText: [
                "'I'm really glad I sat here' — turning the initial reluctance into gratitude is so touching! Your neighbor loves it!",
                "'This got so much better' honestly acknowledges the journey. Your neighbor feels proud of you both!",
                "'We worked things out' frames it as a team effort. Your neighbor feels like a real partner!",
              ],
              grammarText: [
                "'I'm glad I sat here' — present + past tense reflection on a recent experience!",
                "'This got so much better' — 'get' as a linking verb showing change. 'So much' intensifies!",
                "'I'm happy we worked things out' — present + past showing satisfaction about a resolved issue!",
              ],
            },
            {
              en: [
                '"Okay, well. Bye I guess."',
                '"See you around. That was okay in the end."',
                '"Well, this was fine. Bye."',
              ],
              kr: [
                "그래, 뭐. 잘 가.",
                "또 봐. 결국엔 괜찮았어.",
                "음, 그냥 그랬어. 잘 가.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... bye. See you.",
                "Yeah... okay. See you around.",
                "Okay... bye then.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_thinking" },
              feedbackTitle: [
                "A flat ending after a good recovery... 😐",
                "'Okay in the end' is a little lukewarm! 😐",
                "Your neighbor hoped for more warmth! 😐",
              ],
              emotionText: [
                "After making up, a flat 'bye I guess' feels a little anticlimactic. A warmer send-off would seal the moment!",
                "'That was okay in the end' is honest but understated. Your neighbor deserved a little more enthusiasm!",
                "After all that effort to make up, 'this was fine' leaves your neighbor feeling uncertain about the friendship.",
              ],
              grammarText: [
                "'Well' as a filler word before a farewell. 'I guess' shows uncertainty!",
                "'In the end' is a time expression meaning 'ultimately' or 'after everything'. Very common!",
                "'This was fine' — past tense, lukewarm evaluation. 'Fine' often sounds like minimum acceptance!",
              ],
            },
            {
              en: [
                '"Well, at least it got a little better. Still wasn\'t great though."',
                '"I mean, I guess the second half was okay. Not really my thing."',
                '"It was better, but I still think I would have preferred to sit elsewhere."',
              ],
              kr: [
                "뭐, 그래도 좀 나아지긴 했네. 그래도 별로였지만.",
                "음, 후반부는 그냥 그랬던 것 같아. 딱히 내 스타일은 아닌데.",
                "나아지긴 했는데 그래도 다른 데 앉는 게 나았을 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I thought we fixed things. I guess not.",
                "Oh... okay. Sorry I wasn't better company.",
                "Oh... I thought you felt better about it. I'm sorry.",
              ],
              scene: { hero: "hero_peeve", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That undid all the good work... 😨",
                "Your neighbor thought things were okay... 😨",
                "That was hurtful after making up... 😨",
              ],
              emotionText: [
                "Taking back the progress with 'still wasn't great' hurts your neighbor after they forgave you.",
                "'Not really my thing' after a reconciliation makes your neighbor feel like they were just barely tolerated.",
                "Saying you'd have 'preferred to sit elsewhere' after apologizing confuses your neighbor. Which is the real you?",
              ],
              grammarText: [
                "'At least' introduces a minimal silver lining. 'Still wasn't great' uses 'still' to show something persists!",
                "'I guess' shows uncertainty. 'Not really my thing' is an informal way to say something doesn't suit you!",
                "'I would have preferred' — past conditional expressing a hypothetical preference!",
              ],
            },
          ],
        },
        "bad-neutral": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "Lunch is ending quietly...",
            "An Unresolved Lunch",
            "A Quiet Conclusion",
          ],
          text: [
            "Lunch is almost over. Your neighbor is still a little quiet. What do you say before you go?",
            "As lunch ends, things feel a bit unresolved. Your neighbor hasn't said much. What do you do?",
            "Lunch is wrapping up quietly. Your neighbor seems unsure about you. What do you say?",
          ],
          grammar: [
            "'still a little quiet' 부사(still) + 부사구(a little) + 형용사(quiet)로 아직도 조용한 상태를 표현",
            "'feel a bit unresolved' 감각동사(feel) + 부사구(a bit) + 형용사(unresolved)로 해결되지 않은 느낌을 표현",
            "'seems unsure' 감각동사(seem) + 형용사(unsure)로 확신이 없는 상태를 표현",
          ],
          scene: { hero: "hero_thinking", friend: "friend1_angry" },
          newCharacter: null,
          choices: [
            {
              en: [
                '"Hey, I know today was a bit awkward. Sorry about that. Want to try again tomorrow?"',
                "\"I don't think I made a great first impression. I'm sorry. Can I try again?\"",
                '"I feel like I didn\'t do great today. Can we start fresh tomorrow?"',
              ],
              kr: [
                "저기, 오늘 좀 어색했지? 미안해. 내일 다시 해볼래?",
                "첫인상이 별로였던 것 같아. 미안해. 다시 기회를 줄 수 있어?",
                "오늘 잘 못한 것 같아. 내일 새로 시작할 수 있을까?",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Oh! Sure. I'd like that. See you tomorrow!",
                "Really? Yes! Let's try again!",
                "I'd like that. Fresh start tomorrow!",
              ],
              scene: { hero: "hero_sad", friend: "friend1_thinking" },
              feedbackTitle: [
                "What a kind offer! 😍",
                "That was brave and honest! 😍",
                "A wonderful way to end things! 😍",
              ],
              emotionText: [
                "Acknowledging the awkwardness and asking for another chance is brave. Your neighbor is really touched!",
                "'I don't think I made a great first impression' is honest and self-aware. Your neighbor respects that!",
                "'Can we start fresh?' is one of the kindest things you can say. Your neighbor feels hopeful!",
              ],
              grammarText: [
                "'I know today was a bit awkward' — past tense acknowledgment. 'Want to try again?' is a casual invitation!",
                "'I don't think I made' — present negative + past tense for a recent assessment!",
                "'Start fresh' is a phrasal verb meaning to begin again without past baggage. Very positive!",
              ],
            },
            {
              en: [
                '"Well, bye."',
                '"Okay, see you."',
                '"I\'m heading out. See you around."',
              ],
              kr: ["음, 잘 가.", "그래, 또 봐.", "나 간다. 또 보자."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "Oh... okay. Bye.",
                "Yeah... see you.",
                "Okay... bye.",
              ],
              scene: { hero: "hero_lookaway", friend: "friend1_sad" },
              feedbackTitle: [
                "A very quiet exit... 😐",
                "Things ended without resolution... 😐",
                "Your neighbor hopes you'll talk again... 😐",
              ],
              emotionText: [
                "Leaving without addressing the awkwardness leaves things unresolved. Your neighbor hopes tomorrow will be better!",
                "A quiet goodbye after a quiet lunch — your neighbor isn't sure what to think about you.",
                "'See you around' is safe but vague. Your neighbor isn't sure if you'll try again!",
              ],
              grammarText: [
                "'Well, bye' — 'well' as a discourse marker. Very minimal farewell!",
                "'See you' is the shortest form of 'see you later' or 'see you soon'. Very casual!",
                "'I'm heading out' — present continuous for an action happening right now. 'Head out' = leave!",
              ],
            },
            {
              en: [
                '"That was honestly such a waste. I\'m not sitting here again."',
                '"I don\'t know why I even said sorry. This lunch was terrible."',
                '"Next time I\'ll definitely find a better seat. This was a disaster."',
              ],
              kr: [
                "솔직히 진짜 낭비였어. 여기 다시는 안 앉을래.",
                "왜 사과까지 했는지 모르겠어. 점심이 최악이었어.",
                "다음엔 무조건 다른 자리 찾을래. 완전 최악이었어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "Oh... I thought you apologized. I guess it didn't mean anything.",
                "Oh... so the apology wasn't real.",
                "Oh... wow. Okay then.",
              ],
              scene: { hero: "hero_angry", friend: "friend1_angry" },
              feedbackTitle: [
                "Oh! That completely undid the apology! 😨",
                "Your neighbor feels confused and hurt... 😨",
                "That was really harsh and hurtful... 😨",
              ],
              emotionText: [
                "Taking back everything you said in the apology by calling lunch a 'waste' is very confusing and hurtful!",
                "Saying you don't know why you apologized makes the apology feel fake. Your neighbor is hurt and confused!",
                "'Complete disaster' is a very strong thing to say. Your neighbor is left feeling terrible about themselves!",
              ],
              grammarText: [
                "'Such a waste' — 'such' intensifies the noun phrase. Expresses strong negative feeling!",
                "'I don't know why I even' — the word 'even' adds emphasis and frustration. Very expressive!",
                "'I'll definitely find' — 'definitely' shows certainty about a future action. Very firm!",
              ],
            },
          ],
        },
        "bad-bad": {
          background: "/bg/bg_lunchroom.png",
          title: [
            "The teacher noticed...",
            "A Teacher Steps In",
            "Getting Called Out at Lunch",
          ],
          text: [
            "Your teacher saw what happened and comes over to ask what's going on. What do you say?",
            "A teacher overheard the argument and walks over. What do you say?",
            "Your teacher noticed your neighbor looking upset and comes to check. What do you do?",
          ],
          grammar: [
            "과거시제(saw)로 선생님이 이미 본 상황을 표현. 현재진행형(comes over)으로 다가오는 행동을 표현",
            "과거시제(overheard)로 대화를 엿들은 것을 표현. 현재시제(walks over)로 다가오는 행동을 표현",
            "과거시제(noticed)로 선생님이 알아챈 것을 표현. 'to check' 목적을 나타내는 부정사",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_sad",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                "\"I said some unkind things, teacher. I'm sorry and I'll apologize to my neighbor.\"",
                "\"I wasn't very kind earlier, teacher. I'm going to make it right.\"",
                '"I said something hurtful, teacher. I apologize and I\'ll do better."',
              ],
              kr: [
                "제가 못된 말을 했어요, 선생님. 미안하고 옆자리 친구한테도 사과할게요.",
                "아까 친절하지 않게 굴었어요, 선생님. 바로잡을게요.",
                "상처 주는 말을 했어요, 선생님. 사과하고 더 잘할게요.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "Thank you for saying that. I appreciate it.",
                "I'm glad you said that. Thank you.",
                "That means a lot. Thank you.",
              ],
              scene: {
                hero: "hero_sad",
                friend: "friend1_happy",
                extra: "teacher_happy",
              },
              feedbackTitle: [
                "Brave and honest! 😍",
                "Taking responsibility beautifully! 😍",
                "A mature and sincere response! 😍",
              ],
              emotionText: [
                "Telling the teacher honestly what happened shows real maturity. Everyone respects your honesty!",
                "'I'm going to make it right' shows commitment to fixing the situation. The teacher is proud of you!",
                "'I'll do better' is a powerful promise. Your teacher and neighbor both feel the sincerity!",
              ],
              grammarText: [
                "'I said some unkind things' — past tense admission. 'Unkind' as an adjective modifying 'things'!",
                "'I wasn't very kind' — past negative self-assessment. 'Make it right' is an idiom meaning to fix a mistake!",
                "'I'll do better' — future tense promise. Simple, sincere, and powerful!",
              ],
            },
            {
              en: [
                '"I didn\'t do anything wrong, teacher. I just said what I thought."',
                '"I was just being honest, teacher. It\'s not my fault they got upset."',
                '"We were just having a conversation, teacher. I don\'t know what the problem is."',
              ],
              kr: [
                "저는 잘못한 게 없어요, 선생님. 그냥 생각한 걸 말한 거예요.",
                "그냥 솔직하게 말한 거예요, 선생님. 얘가 기분 나빠한 건 제 잘못이 아니에요.",
                "그냥 대화한 거예요, 선생님. 무슨 문제인지 모르겠어요.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "That's not the whole story, teacher.",
                "I was hurt by what they said, teacher.",
                "They said some unkind things, teacher.",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_sad",
                extra: "teacher_thinking",
              },
              feedbackTitle: [
                "Half true, but missing the point... 😐",
                "The teacher can see there's more to it... 😐",
                "Defending yourself isn't taking responsibility! 😐",
              ],
              emotionText: [
                "Being honest is good, but denying any wrongdoing when your neighbor is hurt ignores the real issue!",
                "'It's not my fault they got upset' shifts all responsibility away. The teacher can see the full picture!",
                "Saying you don't know what the problem is when your neighbor is clearly upset shows a lack of empathy!",
              ],
              grammarText: [
                "'I didn't do anything wrong' — past negative with indefinite pronoun 'anything'. Blanket denial!",
                "'It's not my fault + subject + verb' — structure for denying responsibility. Very common!",
                "'I don't know what the problem is' — present tense + indirect question. Can sound dismissive!",
              ],
            },
            {
              en: [
                '"This is so unfair, teacher! I was just being honest!"',
                '"Why does everyone always take their side, teacher?"',
                '"I can\'t believe this is a problem. Everyone is so oversensitive!"',
              ],
              kr: [
                "이거 너무 불공평해요, 선생님! 그냥 솔직하게 말한 거잖아요!",
                "왜 항상 저만 뭐라고 하는 거예요, 선생님?",
                "이게 왜 문제인지 이해가 안 가요. 다들 너무 예민해요!",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "I just wanted to have a nice lunch. That's all.",
                "I didn't do anything to them, teacher.",
                "I wasn't trying to cause any trouble.",
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
                extra: "teacher_angry",
              },
              feedbackTitle: [
                "Oh! Arguing with the teacher makes things worse! 😨",
                "That sounds very defensive! 😨",
                "Calling everyone oversensitive won't help! 😨",
              ],
              emotionText: [
                "Saying 'this is unfair' to the teacher when your neighbor is hurt shows you're not taking it seriously!",
                "'Why does everyone always take their side' is unfair to the teacher who is just trying to help. Stay calm!",
                "Calling people 'oversensitive' dismisses everyone's feelings including your neighbor's. That makes everything harder!",
              ],
              grammarText: [
                "'This is so unfair' — present tense complaint. 'So' intensifies the adjective!",
                "'Why does everyone always' — present tense + 'always' to express frustration about a pattern!",
                "'Everyone is so oversensitive' — generalization. 'Oversensitive' = excessively emotional. Strong word!",
              ],
            },
          ],
        },
      },
    },
  ],
};

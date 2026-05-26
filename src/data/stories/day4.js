export const day4 = {
  id: "rainy_day",
  background: "/bg/bg_rainyday.png",
  steps: [
    {
      id: "step1",
      background: "/bg/bg_rainyday.png",
      title: [
        "A Rainy Walk Home!",
        "Oops, No Umbrella!",
        "Caught in the Rain!",
      ],
      text: [
        "You forgot your umbrella! Your friend notices and offers to share theirs. What do you say?",
        "It's raining and you don't have an umbrella. Your friend holds theirs out to you. How do you respond?",
        "The rain is falling and you realize you left your umbrella at home. Your friend offers to share. What do you say?",
      ],
      grammar: [
        "과거완료(forgot)로 깜빡한 상황 표현. 'offers to share' 제안하는 현재 상황.",
        "현재진행형(is raining)으로 비가 오는 상황 표현. 'holds out' 내밀다는 동작 표현.",
        "현재 시제(realize)로 깨닫는 순간 표현. 'offers to share' 함께 쓰자는 제안 표현.",
      ],
      scene: {
        hero: "hero_surprised",
        friend: "friend3_happy",
      },
      choices: [
        {
          en: [
            '"Really? I was worried about getting soaked. thank you so much!"',
            '"Oh, thank goodness! I was just thinking about what to do. Thank you!"',
            '"I really appreciate that! I forgot mine at home and didn\'t know what to do."',
          ],
          kr: [
            "정말? 흠뻑 젖을까 봐 걱정하고 있었는데. 정말 고마워!",
            "아, 다행이다! 어떡하나 생각하고 있었는데. 고마워!",
            "정말 고마워! 집에 두고 왔는데 어쩌나 싶었어.",
          ],
          type: "good",
          emoji: "💗",
          friendReaction: [
            "\"Of course! That's what friends are for. Come on, let's go!\"",
            '"No worries at all! I\'m glad I had an extra one today!"',
            "\"Don't worry about it! Let's walk together!\"",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend3_happy",
          },
          feedbackTitle: [
            "What a warm response! 😍",
            "So genuine and thankful! 😍",
            "That's the spirit! 😍",
          ],
          emotionText: [
            "Expressing honest gratitude makes your friend feel their kindness truly mattered. That's the heart of friendship!",
            "Sharing your honest feelings and thanking your friend shows real connection. They'll remember this moment!",
            "Being open about needing help and appreciating it is a sign of emotional maturity. Your friend feels valued!",
          ],
          grammarText: [
            "'I was worried about' — past continuous for an ongoing concern. 'Thank you so much' intensifies gratitude with 'so much'!",
            "'Thank goodness!' — an exclamation of relief. 'I was just thinking about' — past continuous showing an action in progress!",
            "'I really appreciate that' — formal but warm way to say thank you. 'Didn't know what to do' — past negative for expressing helplessness!",
          ],
        },
        {
          en: [
            "\"Ha, can't be helped! Let's share then.\"",
            '"Well, I guess I have no choice. Thanks."',
            '"Alright, that works. Let\'s go."',
          ],
          kr: [
            "하, 어쩔 수 없네! 같이 쓰자.",
            "뭐, 선택의 여지가 없네. 고마워.",
            "그래, 됐다. 가자.",
          ],
          type: "neutral",
          emoji: "🤍",
          friendReaction: [
            '"Haha, yeah, let\'s go! Stay close so we both stay dry!"',
            '"Sure! Try to stay under the umbrella!"',
            '"Okay! Walk close to me!"',
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_thinking",
          },
          feedbackTitle: [
            "A practical response! 😐",
            "Honest, if a little casual! 😐",
            "Short and to the point! 😐",
          ],
          emotionText: [
            "Accepting help is good, even if the response was a bit casual. Your friend didn't mind at all!",
            "It's fine to accept help simply, but a little warmth goes a long way with friends!",
            "Getting straight to the point is practical, but your friend might have appreciated a small thank you!",
          ],
          grammarText: [
            "'Can't be helped' — a fixed expression meaning the situation is unavoidable. 'Let's share' is a suggestion using 'let's'!",
            "'I have no choice' — expressing that there's only one option. 'I guess' softens the statement slightly!",
            "'That works' — an informal way of saying something is acceptable. Short and decisive!",
          ],
        },
        {
          en: [
            "\"It's fine. I'll just walk in the rain.\"",
            "\"Don't worry about me. I'll manage on my own.\"",
            '"No thanks. I\'d rather just get wet and go."',
          ],
          kr: [
            "괜찮아. 그냥 비 맞으면서 갈게.",
            "나 걱정하지 마. 혼자 어떻게든 할게.",
            "됐어. 그냥 맞으면서 가는 게 낫겠어.",
          ],
          type: "bad",
          emoji: "💔",
          friendReaction: [
            '"Are you sure...? It\'s really coming down out there."',
            '"Really? Okay... but let me know if you change your mind."',
            '"Oh... alright. I\'ll walk with you anyway, okay?"',
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_thinking",
          },
          feedbackTitle: [
            "Don't push people away! 😨",
            "It's okay to accept help! 😨",
            "Rejecting kindness can hurt a friend! 😨",
          ],
          emotionText: [
            "Refusing help without reason can make your friend feel their offer wasn't welcome. It's okay to lean on friends sometimes!",
            "Being too independent can come across as cold. Your friend was just being kind — accepting help is a strength, not a weakness!",
            "Pushing away a kind gesture can leave your friend feeling hurt or confused. A little openness goes a long way!",
          ],
          grammarText: [
            "'I'll just walk' — 'just' minimizes the action. 'Walk in the rain' is a simple prepositional phrase!",
            "'Don't worry about me' — imperative in a reassuring tone. 'Manage on my own' means to handle something independently!",
            "'I'd rather + verb' — expressing a preference. 'Get wet and go' uses two verbs joined by 'and'!",
          ],
        },
      ],
    },

    {
      id: "step2",
      background: "/bg/bg_rainyday.png",
      paths: {
        good: {
          title: [
            "Walking Together!",
            "Side by Side in the Rain!",
            "A Cozy Walk!",
          ],
          text: [
            "You're sharing the umbrella and walking together. Your friend asks how school life has been lately.",
            "The two of you walk slowly under the umbrella. Your friend turns and asks how things have been going for you.",
            "Walking side by side under the umbrella, your friend gently asks how school has been.",
          ],
          grammar: [
            "현재진행형(are sharing, walking)으로 함께 걷는 상황 표현. 'has been' 현재완료로 최근 상황 묻기.",
            "부사(slowly)로 천천히 걷는 모습 표현. 'turns and asks' 두 동작을 연결하는 표현.",
            "현재분사(walking)로 동시에 일어나는 동작 표현. 'gently asks' 부드럽게 묻는 뉘앙스.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                "\"Honestly, things have been a bit tough lately. I'm really glad you're here.\"",
                '"It\'s been kind of hard recently. Having you around makes it so much better."',
                '"I\'ve been struggling a little, to be honest. But walking with you today really helps."',
              ],
              kr: [
                "솔직히, 요즘 좀 힘들었어. 네가 있어서 정말 다행이야.",
                "최근에 좀 힘들었어. 네가 있으니까 훨씬 나아져.",
                "솔직히 좀 힘들었는데. 오늘 너랑 걷는 게 진짜 도움돼.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"I\'m always here for you. Want to talk about it?"',
                '"I had no idea. I\'m glad we ran into each other today!"',
                '"That means a lot. I\'m here whenever you need to talk."',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Opening up takes courage! 😍",
                "Sharing your feelings brings people closer! 😍",
                "Honesty in friendship is beautiful! 😍",
              ],
              emotionText: [
                "Being honest about your struggles and expressing gratitude shows real trust. Your friend feels honored that you opened up!",
                "Letting your friend know they make things better is a wonderful thing to say. That's what true friendship feels like!",
                "Admitting you've been struggling and saying the walk helps is deeply genuine. Your friend will treasure this moment!",
              ],
              grammarText: [
                "'Things have been tough' — present perfect for a recent ongoing state. 'I'm really glad' expresses sincere relief!",
                "'It's been kind of hard' — 'kind of' softens the statement. 'Having you around' uses a gerund phrase as the subject!",
                "'I've been struggling' — present perfect continuous for an ongoing experience. 'To be honest' is a discourse marker for candor!",
              ],
            },
            {
              en: [
                '"Oh, you know, same as usual. Nothing special."',
                '"It\'s fine, I guess. Just the normal stuff."',
                '"Not much to say really. School is school."',
              ],
              kr: [
                "아, 뭐 항상 똑같지. 특별한 건 없어.",
                "그냥 그렇지 뭐, 아마. 늘 하던 것들.",
                "딱히 할 말 없어. 학교는 학교지.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, fair enough. Same for me mostly."',
                '"Yeah, I know that feeling. Just getting through the days."',
                '"Haha, true. Hey, at least it\'s not raining inside!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "A little vague, but that's okay! 😐",
                "Sometimes 'fine' says it all! 😐",
                "Keeping it casual! 😐",
              ],
              emotionText: [
                "A neutral answer is totally fine sometimes. Your friend keeps the conversation going without pushing you!",
                "It's okay not to share everything. Your friend understands and matches your casual energy!",
                "Short answers are valid, and your friend keeps things light. The walk is still nice!",
              ],
              grammarText: [
                "'Same as usual' — a fixed phrase meaning nothing has changed. 'Nothing special' is a simple negative noun phrase!",
                "'I guess' adds uncertainty or casualness. 'Just the normal stuff' — 'stuff' is informal for 'things'!",
                "'Not much to say' — a casual way to indicate there's little to share. 'School is school' is a tautology showing resignation!",
              ],
            },
            {
              en: [
                '"Ugh, school is so boring! I can\'t figure out why it has to be like this."',
                '"Honestly? School has been so dull. I don\'t get the point of half of it."',
                "\"I'm so tired of school. It's the same boring thing every single day.\"",
              ],
              kr: [
                "아, 학교가 너무 지루해! 왜 이래야 하는지 모르겠어.",
                "솔직히? 학교가 너무 따분해. 절반은 왜 하는지도 모르겠어.",
                "학교 너무 지쳤어. 매일 똑같이 지루한 것만 반복돼.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Hmm... is everything okay? You seem really down."',
                '"That\'s a lot of frustration... Did something specific happen?"',
                '"Oh wow. Yeah, it can feel that way sometimes..."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Venting can feel good, but watch the energy! 😨",
                "That's a lot of negativity at once! 😨",
                "Try to find something good too! 😨",
              ],
              emotionText: [
                "It's natural to feel frustrated, but sharing only negatives can bring the mood down. Try to find one thing you enjoyed today!",
                "Letting out frustration is healthy, but your friend might not know how to respond. A little balance helps!",
                "When everything feels boring, it's hard for your friend to connect. Sharing one small positive can open up the conversation!",
              ],
              grammarText: [
                "'I can't figure out why' — 'figure out' means to understand. 'Has to be' uses modal verb for necessity or obligation!",
                "'I don't get the point of' — informal way to say something seems meaningless. 'Half of it' refers to a portion!",
                "'I'm so tired of' — expressing exhaustion or frustration with something. 'Every single day' emphasizes monotony!",
              ],
            },
          ],
        },

        neutral: {
          title: [
            "Sharing the Umbrella!",
            "A Slow Walk Home!",
            "Walking in the Rain!",
          ],
          text: [
            "You're walking slowly under the umbrella together. Your friend asks how your day was.",
            "The two of you share the umbrella and stroll along. Your friend wants to know about your day.",
            "Walking together under the umbrella, your friend cheerfully asks how today went.",
          ],
          grammar: [
            "현재진행형(are walking)으로 함께 걷는 상황 표현. 'asks how your day was' 간접의문문 구조.",
            "동사(share, stroll)로 함께 걷는 행동 표현. 'wants to know' 알고 싶어하는 감정 표현.",
            "현재분사(walking)로 동시 동작 표현. 'cheerfully asks' 밝게 묻는 뉘앙스 부사.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"Lunch was great today, and walking home with you is making it even better!"',
                '"Today was actually pretty good! Lunch was delicious and now I\'ve got good company!"',
                '"Honestly, today\'s been nice. Good food at lunch, and now a good friend to walk with!"',
              ],
              kr: [
                "오늘 점심도 맛있었고, 너랑 같이 가니까 더 기분 좋아!",
                "오늘 꽤 좋았어! 점심 맛있었고 지금은 좋은 친구도 있고!",
                "솔직히 오늘 좋았어. 점심도 맛있었고, 같이 걸을 친구도 생겼으니!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "\"Aw, that makes me happy! I'm glad we're walking together too!\"",
                '"Same! Days like this are the best. Simple but good!"',
                '"That\'s so sweet! I feel the same way!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Such a positive outlook! 😍",
                "Spreading good vibes! 😍",
                "That's the best attitude! 😍",
              ],
              emotionText: [
                "Mentioning specific things you enjoyed and including your friend in what made the day good is a lovely thing to do!",
                "Sharing specific joys and appreciating the present moment is a wonderful habit. Your friend feels included and valued!",
                "Connecting the good parts of your day to the person you're with right now is a heartwarming thing to say!",
              ],
              grammarText: [
                "'is making it even better' — present continuous showing an ongoing effect. 'Even better' uses 'even' to intensify a comparative!",
                "'actually pretty good' — 'actually' signals a positive surprise. 'I've got' is an informal way to say 'I have'!",
                "'Today's been nice' — present perfect for a day not yet over. 'Good food... good friend' uses parallel structure for rhythm!",
              ],
            },
            {
              en: [
                '"Hmm, nothing much happened. Just a regular day, I guess."',
                '"It was okay. Nothing really stood out. You know, just another day."',
                '"Not bad, not great. Just kind of... ordinary."',
              ],
              kr: [
                "음, 별로 없었어. 그냥 평범한 날이었지, 아마.",
                "괜찮았어. 딱히 특별한 건 없었어. 뭐, 그냥 또 하루.",
                "나쁘진 않고 좋지도 않고. 그냥 뭔가... 평범했어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, yeah, I kind of felt the same. But hey, at least the rain is kind of pretty!"',
                '"I know what you mean. Hey, look at those raindrops on the leaves though!"',
                '"Ordinary is underrated honestly. I don\'t mind a calm day."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Keeping it real! 😐",
                "Honest and low-key! 😐",
                "That's a valid way to feel! 😐",
              ],
              emotionText: [
                "A neutral answer is perfectly fine. Your friend keeps the mood light and finds something small to appreciate!",
                "Being honest about an ordinary day is relatable. Your friend tries to lift the mood with something small!",
                "Not every day is exciting, and that's okay. Your friend appreciates the honesty and keeps things comfortable!",
              ],
              grammarText: [
                "'Nothing much happened' — 'nothing much' is an informal way to say very little occurred. 'I guess' adds uncertainty!",
                "'Nothing really stood out' — 'stand out' means to be noticeable or remarkable. 'Just another day' is a set phrase!",
                "'Not bad, not great' — a balanced structure showing neutrality. 'Kind of... ordinary' uses 'kind of' as a hedge!",
              ],
            },
            {
              en: [
                '"Today was the worst! Nothing went the way I wanted!"',
                '"Terrible, honestly. Everything just went wrong today."',
                '"I don\'t even want to talk about it. Today was just bad."',
              ],
              kr: [
                "오늘 진짜 최악이었어! 하나도 뜻대로 된 게 없었어!",
                "끔찍했어, 솔직히. 오늘 다 잘못됐어.",
                "말하고 싶지도 않아. 오늘 그냥 별로였어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Oh no... what happened? I\'m here to listen."',
                '"That sounds really rough. Do you want to talk about it?"',
                '"Oh... okay. Well, I\'m here if you need anything."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "That's a tough day! 😨",
                "Hard days happen — but try to share! 😨",
                "Shutting down can push friends away! 😨",
              ],
              emotionText: [
                "When everything feels wrong, it's okay to say so. But try to let your friend in — they want to help!",
                "Sharing that today was rough is valid. Your friend is ready to listen if you open up a little more!",
                "Saying you don't want to talk can sometimes push people away, even when they care. Your friend is still there for you!",
              ],
              grammarText: [
                "'Today was the worst' — superlative adjective for emphasis. 'Nothing went the way I wanted' uses negative pronoun + past simple!",
                "'Everything just went wrong' — 'just' emphasizes the totality. 'Terrible, honestly' puts the adjective first for dramatic effect!",
                "'I don't even want to' — 'even' emphasizes the unwillingness. 'Just bad' is a blunt, minimal response!",
              ],
            },
          ],
        },

        bad: {
          title: [
            "Walking in the Rain...",
            "Getting Soaked!",
            "A Stubborn Walk Home!",
          ],
          text: [
            "The rain is getting heavier. Your friend watches you get wet and worriedly asks if you're okay.",
            "It's raining harder now. You're getting soaked, and your friend looks at you with concern.",
            "The rain picks up and you're getting wet. Your friend calls out to you, worried.",
          ],
          grammar: [
            "현재진행형(is getting)으로 비가 심해지는 상황 표현. 'worriedly asks' 걱정스럽게 묻는 부사 표현.",
            "비교급(harder)으로 비가 더 세지는 상황 표현. 'looks at you with concern' 걱정스러운 시선 묘사.",
            "현재진행형(picks up, getting wet)으로 동시에 진행 중인 상황 표현. 'calls out' 크게 부르는 동작.",
          ],
          scene: {
            hero: "hero_sad",
            friend: "friend3_thinking",
          },
          choices: [
            {
              en: [
                '"I\'m okay. Honestly, getting rained on is kind of clearing my head."',
                '"It\'s fine. The rain actually feels kind of refreshing, to be honest."',
                '"Don\'t worry. It feels like the rain is washing everything away. I feel better."',
              ],
              kr: [
                "괜찮아. 솔직히 비 맞으니까 머리가 좀 맑아지는 것 같아.",
                "괜찮아. 비가 오히려 좀 상쾌한 것 같기도 해, 솔직히.",
                "걱정 마. 비가 다 씻어내는 것 같은 느낌. 기분이 좀 나아져.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Ha... I kind of get that. But please don\'t catch a cold!"',
                '"Okay, if you say so! But I\'m staying close just in case!"',
                "\"That's actually kind of poetic. I'll walk with you then!\"",
              ],
              scene: {
                hero: "hero_thinking",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Finding peace in the rain! 😍",
                "A refreshing perspective! 😍",
                "Turning the rain into something positive! 😍",
              ],
              emotionText: [
                "Reassuring your friend and sharing how the rain is actually helping you is a lovely, honest response!",
                "Finding a silver lining in an uncomfortable situation shows great emotional flexibility. Your friend is relieved!",
                "Turning an uncomfortable moment into something meaningful is a sign of emotional depth. Your friend is touched!",
              ],
              grammarText: [
                "'Getting rained on' — passive gerund phrase. 'Kind of clearing my head' uses 'kind of' to soften the statement!",
                "'Actually feels kind of refreshing' — 'actually' signals a surprising positive. 'To be honest' is a candid discourse marker!",
                "'Feels like the rain is washing away' — simile using 'feels like'. 'Washing everything away' is a vivid metaphorical phrase!",
              ],
            },
            {
              en: [
                "\"Getting wet isn't that bad. Don't worry about me.\"",
                "\"I'm fine, really. It's just rain.\"",
                "\"It doesn't bother me. I don't mind getting a bit wet.\"",
              ],
              kr: [
                "비 맞는 게 그렇게 나쁘진 않아. 걱정하지 마.",
                "진짜 괜찮아. 그냥 비잖아.",
                "별로 신경 안 써. 좀 맞아도 상관없어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "\"If you're sure... I'll stay nearby anyway, okay?\"",
                '"Okay, if you say so. Just try not to get too soaked!"',
                '"Alright, but I\'m walking right next to you just in case!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Reassuring, if a bit flat! 😐",
                "Casual and unfazed! 😐",
                "Nonchalant about the rain! 😐",
              ],
              emotionText: [
                "A calm response that reassures your friend, even if it doesn't open up the conversation much!",
                "Simple and direct — your friend accepts your answer, though they stay close just in case!",
                "Being unbothered is fine, and your friend respects that while still keeping an eye on you!",
              ],
              grammarText: [
                "'Isn't that bad' — double negation to mean it's acceptable. 'Don't worry about me' is a gentle imperative!",
                "'It's just rain' — 'just' minimizes the situation. 'I'm fine, really' — 'really' adds emphasis to reassure!",
                "'It doesn't bother me' — 'bother' means to trouble or annoy. 'Don't mind' + gerund = to be okay with something!",
              ],
            },
            {
              en: [
                '"I\'m fine. Stop looking at me like that."',
                "\"Don't worry about me. I told you, I've got it.\"",
                '"I said I\'m fine. Please stop asking."',
              ],
              kr: [
                "괜찮아. 그렇게 쳐다보지 마.",
                "걱정하지 마. 말했잖아, 내가 알아서 한다고.",
                "괜찮다고 했잖아. 그만 물어봐.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"I... okay. Sorry. I just got worried."',
                '"Alright, alright. I won\'t say anything else."',
                '"Okay... I\'ll just walk here then."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "That was a bit harsh! 😨",
                "Pushing away someone who cares! 😨",
                "Your friend was only trying to help! 😨",
              ],
              emotionText: [
                "Telling someone to stop looking at you when they're worried can come across as cold. They mean well!",
                "Reminding your friend you 'have it handled' a second time makes them feel like their care isn't welcome!",
                "Asking someone to stop asking shows frustration, but your friend was only worried. Try to be a little gentler!",
              ],
              grammarText: [
                "'Stop looking at me like that' — imperative + gerund. 'Like that' refers to a manner of doing something!",
                "'I told you' — past simple for referring back to a previous statement. 'I've got it' = I can handle it!",
                "'I said I'm fine' — using 'said' refers back to a previous statement. 'Please stop' adds a frustrated politeness!",
              ],
            },
          ],
        },
      },
    },

    {
      id: "step3",
      background: "/bg/bg_rainyday.png",
      paths: {
        "good-good": {
          title: [
            "Time to Say Goodbye!",
            "The Rain Is Easing Up!",
            "See You Next Time!",
          ],
          text: [
            "The rain is slowly letting up. It's time to part ways. Your friend says they want to meet again soon.",
            "The rain has almost stopped and you've reached the point where you go your separate ways. Your friend smiles and says they hope to see you again.",
            "The rain fades to a drizzle as you arrive at the corner where you part ways. Your friend says they'd love to hang out again.",
          ],
          grammar: [
            "현재진행형(is letting up)으로 비가 잦아드는 상황 표현. 'time to part ways' 헤어질 시간 표현.",
            "현재완료(has stopped)로 비가 거의 그친 상황 표현. 'go your separate ways' 각자 가는 상황 묘사.",
            "현재 시제(fades)로 비가 옅어지는 상황 표현. 'arrive at the corner' 헤어지는 장소 설명.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"Today was really wonderful. Let\'s definitely hang out again soon!"',
                '"I had such a great time. I really hope we can do this again!"',
                '"This was so nice. I\'m already looking forward to the next time!"',
              ],
              kr: [
                "오늘 정말 좋았어. 꼭 또 만나자!",
                "정말 좋은 시간이었어. 또 이렇게 했으면 좋겠어!",
                "너무 좋았어. 벌써 다음 번이 기대돼!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Me too! Text me when you get home, okay?"',
                '"Definitely! Same time, same rain, same us — deal!"',
                '"Yes! Let\'s plan something soon. Take care going home!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "A perfect goodbye! 😍",
                "Ending on a high note! 😍",
                "Leaving the door open for more! 😍",
              ],
              emotionText: [
                "Telling your friend today was wonderful and expressing a desire to meet again is the best way to end a great walk!",
                "Sharing that you had a great time and hoping to repeat it shows your friend how much they mean to you!",
                "Saying you're already looking forward to next time is such a warm, genuine thing to say. Your friend will smile all the way home!",
              ],
              grammarText: [
                "'Today was really wonderful' — simple past to reflect on the day. 'Let's definitely' uses 'definitely' to add enthusiasm to the suggestion!",
                "'I had such a great time' — 'such a' intensifies the noun phrase. 'I really hope we can' expresses a sincere wish!",
                "'This was so nice' — 'so' intensifies the adjective. 'I'm already looking forward to' — present continuous with future meaning!",
              ],
            },
            {
              en: ['"Yeah, see you around."', '"Sure. Later."', '"Okay. Bye."'],
              kr: ["그래, 잘 가.", "그래. 나중에 봐.", "알겠어. 잘 가."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Take care! See you tomorrow!"',
                '"Haha, okay. See you!"',
                '"Bye! Get home safe!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Short and simple! 😐",
                "Brief goodbye! 😐",
                "That works! 😐",
              ],
              emotionText: [
                "A short farewell is fine. Your friend takes it in stride and waves you off warmly!",
                "Sometimes a simple 'later' is enough. Your friend smiles and heads off without a second thought!",
                "Brief goodbyes are normal. Your friend doesn't mind and waves cheerfully as they go!",
              ],
              grammarText: [
                "'See you around' — a casual farewell implying you'll cross paths again without a set plan!",
                "'Later' — an informal short form of 'see you later'. Very casual and common among friends!",
                "'Bye' — the most basic farewell. Short, neutral, and universally understood!",
              ],
            },
            {
              en: [
                '"Honestly, it was a bit uncomfortable. I think I prefer walking alone."',
                "\"I don't really need to do this again. I'm fine on my own.\"",
                '"It was okay, but I\'d rather just go home alone next time."',
              ],
              kr: [
                "솔직히 좀 불편했어. 혼자 걷는 게 더 편한 것 같아.",
                "꼭 또 이럴 필요는 없어. 혼자도 잘 돼.",
                "뭐 괜찮긴 했는데, 다음엔 그냥 혼자 가는 게 나을 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Oh... okay. I didn\'t realize. Sorry if I bothered you."',
                '"Right... got it. See you around then."',
                '"Oh. Okay. I\'ll... remember that."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_sad",
              },
              feedbackTitle: [
                "That might have hurt your friend! 😨",
                "A cold way to end a kind gesture! 😨",
                "Think about how that lands! 😨",
              ],
              emotionText: [
                "Being honest is good, but saying you prefer being alone after someone walked with you can sting. A softer approach goes a long way!",
                "Saying you don't need to do this again dismisses the effort your friend made. They only wanted to be kind!",
                "Hinting you'd rather walk alone next time after your friend shared their umbrella can leave them feeling rejected. Be gentle!",
              ],
              grammarText: [
                "'I think I prefer' — 'think' softens the preference. 'Prefer + gerund' expresses a general liking for one thing over another!",
                "'I don't really need to' — 'really' softens the negation. 'I'm fine on my own' is a common self-sufficient phrase!",
                "'I'd rather + verb' — 'would rather' expresses preference. 'Next time' signals future preference rather than immediate rejection!",
              ],
            },
          ],
        },

        "good-neutral": {
          title: [
            "Talking About Lunch!",
            "Lunchtime Memories!",
            "A Favorite Part of School!",
          ],
          text: [
            "Your friend says lunch is their favorite part of the school day and asks what you think of yours.",
            "Your friend mentions that lunchtime is what gets them through the day and wonders if you feel the same.",
            "Your friend lights up talking about lunch and asks if you enjoy your lunch break too.",
          ],
          grammar: [
            "명사절(what you think of yours)로 의견 묻는 간접의문문. 'favorite part' 가장 좋아하는 것 표현.",
            "관계절(what gets them through the day)로 동기 표현. 'wonders if' 궁금해하는 감정 표현.",
            "현재 시제(lights up)로 밝아지는 표정 묘사. 'asks if you enjoy' 즐기는지 묻는 간접의문문.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"Same! Playing with friends at lunch is honestly the best part of my day too!"',
                '"Totally! I love hanging out with everyone at lunch. It just makes the day so much better!"',
                '"Yes! Laughing and chatting with friends at lunch is what I look forward to most!"',
              ],
              kr: [
                "나도! 점심시간에 친구들이랑 노는 게 솔직히 나도 제일 좋아!",
                "완전! 점심에 다 같이 노는 거 너무 좋아. 하루가 훨씬 나아져!",
                "맞아! 점심에 친구들이랑 웃고 떠드는 게 제일 기대돼!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Right?! We should hang out at lunch more often then!"',
                '"Yes! Let\'s make sure we sit together tomorrow!"',
                '"I feel the exact same way. Let\'s have lunch together next time!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Shared joy brings people together! 😍",
                "Making plans from a great conversation! 😍",
                "What a lovely connection! 😍",
              ],
              emotionText: [
                "Finding common ground with your friend and matching their enthusiasm is a great way to deepen a friendship!",
                "Agreeing enthusiastically and building on what your friend said shows you're genuinely engaged in the conversation!",
                "Connecting over shared joys at school is wonderful. Your friend is already planning to spend more time with you!",
              ],
              grammarText: [
                "'Playing with friends' — gerund as subject. 'Honestly the best part' — 'honestly' as a discourse marker for emphasis!",
                "'I love hanging out' — 'love + gerund' for strong preference. 'Just makes' — 'just' intensifies the effect!",
                "'What I look forward to most' — relative clause with superlative. 'Look forward to' + gerund for anticipation!",
              ],
            },
            {
              en: [
                '"I just eat quietly by myself, mostly."',
                '"I usually just have lunch alone. It\'s pretty quiet."',
                '"Hmm, I mostly just eat. I don\'t really do much at lunch."',
              ],
              kr: [
                "난 그냥 혼자 조용히 밥만 먹어, 주로.",
                "보통 그냥 혼자 점심 먹어. 꽤 조용해.",
                "음, 그냥 밥만 먹어, 주로. 점심에 딱히 많이 하진 않아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Oh! You should sit with us sometime. It\'s really fun!"',
                '"Really? Well, you\'re welcome to join us any time!"',
                '"Hey, come eat with us tomorrow if you want! The more the merrier!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "That's okay — everyone's different! 😐",
                "Quiet lunches are valid! 😐",
                "Your friend sees an opportunity! 😐",
              ],
              emotionText: [
                "Being honest about your quiet lunch habits is fine. Your friend sees a chance to include you and reaches out warmly!",
                "Not everyone hangs out at lunch, and that's okay. Your friend's invitation is a kind and open gesture!",
                "A low-key lunch isn't a bad thing. Your friend's warm invitation shows they'd genuinely like to get to know you better!",
              ],
              grammarText: [
                "'I just eat quietly by myself' — 'by myself' means alone. 'Mostly' is an adverb meaning most of the time!",
                "'I usually just have lunch alone' — 'usually' for habitual actions. 'Pretty quiet' — 'pretty' as an intensifier!",
                "'I mostly just eat' — two adverbs stacked for a casual, minimal effect. 'Don't really do much' — understated phrasing!",
              ],
            },
            {
              en: [
                '"Lunch is boring too. It\'s always the same."',
                '"Not really. It\'s just more time to sit around doing nothing."',
                '"I don\'t enjoy lunch either. Everything at school feels the same."',
              ],
              kr: [
                "점심도 재미없어. 항상 똑같아.",
                "별로. 그냥 앉아서 아무것도 안 하는 시간이야.",
                "점심도 즐겁지 않아. 학교에서 다 똑같은 것 같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Oh... really? I thought everyone loved lunch..."',
                '"Hmm, that sounds rough. Is school just not fun for you right now?"',
                '"That\'s... a lot of things to find boring. Are you doing okay?"',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Everything can't be boring! 😨",
                "That's a heavy thing to say! 😨",
                "Try to find one thing you enjoy! 😨",
              ],
              emotionText: [
                "If even lunch feels boring, it might be worth thinking about what might make it more fun. Your friend is surprised!",
                "Calling lunchtime 'nothing' shows a lot of disengagement. Your friend is genuinely concerned about how you're feeling!",
                "When everything feels the same, it's hard to connect with others. Your friend gently wonders if something deeper is going on!",
              ],
              grammarText: [
                "'Boring too' — 'too' adds lunch to a list of boring things. 'It's always the same' — 'always' emphasizes repetition!",
                "'Just more time to + verb' — infinitive of purpose after 'time'. 'Sitting around doing nothing' uses two gerunds!",
                "'I don't enjoy lunch either' — 'either' in a negative sentence means 'also'. 'Everything feels the same' — sweeping generalization!",
              ],
            },
          ],
        },

        "good-bad": {
          title: [
            "What About Lunch?",
            "Finding a Bright Spot!",
            "Is There Anything Fun?",
          ],
          text: [
            "Your friend says lunch is their favorite part of school and asks if there's anything you enjoy too.",
            "Your friend smiles and says lunch always cheers them up, then asks if the same is true for you.",
            "Your friend brings up lunch as a highlight and gently wonders if you have a favorite part of school too.",
          ],
          grammar: [
            "간접의문문(if there's anything you enjoy)으로 의견 묻는 구조. 'favorite part' 가장 좋아하는 것 표현.",
            "현재 시제(cheers up)로 기분이 좋아지는 효과 표현. 'asks if the same is true' 간접의문문 구조.",
            "동사(brings up)로 화제를 꺼내는 동작 표현. 'gently wonders' 부드럽게 궁금해하는 뉘앙스.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"Hmm... lunch with friends is actually pretty fun, now that I think about it."',
                '"I guess lunch isn\'t so bad. I do like hanging out with everyone."',
                '"Actually, yeah. Playing at lunch is one thing I do look forward to."',
              ],
              kr: [
                "음... 생각해보니까 친구들이랑 점심 먹는 건 꽤 재밌긴 해.",
                "점심은 그렇게 나쁘진 않은 것 같아. 다 같이 노는 건 좋아.",
                "오, 맞아. 점심에 노는 건 기대되는 것 중 하나야.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"See! There\'s always something good if you look for it!"',
                '"I knew it! Let\'s make sure we sit together at lunch then!"',
                "\"That's the spirit! Let's hang out at lunch more!\"",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Finding the silver lining! 😍",
                "Opening up to the good things! 😍",
                "A shift in perspective! 😍",
              ],
              emotionText: [
                "Reconsidering and finding something positive shows growth. Your friend is glad you found something to smile about!",
                "Admitting something isn't so bad is a small but important step. Your friend feels like they helped you see things differently!",
                "Acknowledging something you genuinely look forward to is honest and hopeful. Your friend is cheering you on!",
              ],
              grammarText: [
                "'Now that I think about it' — a phrase used when reconsidering. 'Actually pretty fun' — 'actually' signals a positive surprise!",
                "'Isn't so bad' — double negation to express mild positivity. 'I do like' — 'do' adds emphasis to the verb!",
                "'One thing I do look forward to' — 'do' adds emphasis. 'Look forward to' + gerund for anticipation!",
              ],
            },
            {
              en: [
                '"I just eat alone at lunch. I don\'t really talk to anyone."',
                '"Lunch is fine, I guess. I just eat and sit there."',
                '"I don\'t really do much at lunch. Just eat and wait for it to end."',
              ],
              kr: [
                "그냥 혼자 밥 먹어. 아무한테도 별로 말 안 해.",
                "점심은 뭐, 그냥 그렇지. 그냥 먹고 앉아 있어.",
                "점심에 딱히 많이 하진 않아. 그냥 먹고 끝나기 기다려.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Really? Come sit with us sometime! We\'d love to have you!"',
                '"Oh, well, you\'re always welcome to join our table!"',
                '"Hey, lunch can be fun with the right people! Come hang with us!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "A quiet routine — but open to change? 😐",
                "Neutral, but your friend sees potential! 😐",
                "Just getting through it! 😐",
              ],
              emotionText: [
                "Being honest about eating alone is brave in its own way. Your friend's warm invitation could be the start of something great!",
                "A simple, honest answer opens the door for your friend to invite you in. Will you say yes next time?",
                "Just waiting for lunch to end is relatable. But your friend's invitation might be worth taking up!",
              ],
              grammarText: [
                "'I just eat alone' — 'just' minimizes or simplifies the action. 'Don't really talk to anyone' — 'really' softens the negative!",
                "'I guess' adds casualness or uncertainty. 'Just eat and sit there' — two simple verbs showing passivity!",
                "'Wait for it to end' — 'wait for' + noun + infinitive. 'Don't really do much' — understated phrasing for low engagement!",
              ],
            },
            {
              en: [
                '"Lunch is just as boring. It\'s always the same food and the same people."',
                '"Not really. Lunch is just more time I have to sit through."',
                '"Lunch is boring too. Everything at school is the same."',
              ],
              kr: [
                "점심도 그냥 지루해. 항상 똑같은 음식에 똑같은 사람들.",
                "별로. 점심도 그냥 버텨야 하는 시간이야.",
                "점심도 재미없어. 학교에서 다 똑같아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Oh wow... is there anything at school you don\'t find boring?"',
                '"That\'s... a lot. Are you really okay?"',
                '"Hmm. I hope things start feeling better for you soon."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Finding everything boring is exhausting! 😨",
                "That sounds like more than just boredom! 😨",
                "Your friend is genuinely concerned! 😨",
              ],
              emotionText: [
                "When even lunch feels like a chore, it might be worth asking yourself if something deeper is bothering you!",
                "Calling lunch 'something to sit through' is a strong statement. Your friend wonders if you're really doing okay!",
                "When everything feels the same and boring, it can be a sign you need something new. Your friend is hoping you feel better soon!",
              ],
              grammarText: [
                "'Just as boring' — 'just as + adjective' shows equal degree. 'Always the same' — 'always' emphasizes an unchanging routine!",
                "'Just more time I have to sit through' — 'sit through' means to endure something passively. 'Have to' expresses obligation!",
                "'Boring too' — 'too' adds lunch to a list of boring things. 'Everything is the same' — sweeping generalization showing resignation!",
              ],
            },
          ],
        },

        "neutral-good": {
          title: [
            "Time to Say Goodbye!",
            "The Rain Is Easing Up!",
            "See You Next Time!",
          ],
          text: [
            "The rain is slowly letting up and it's time to say goodbye. Your friend smiles and says they want to meet again.",
            "The rain has nearly stopped. You've reached the place where you go your separate ways. Your friend says they had fun.",
            "The drizzle fades and it's time to head your separate ways. Your friend says they hope to see you again soon.",
          ],
          grammar: [
            "현재진행형(is letting up)으로 비가 잦아드는 상황 표현. 'time to say goodbye' to부정사로 때를 나타냄.",
            "현재완료(has stopped)로 비가 그친 상황 표현. 'go your separate ways' 각자 가는 관용표현.",
            "현재 시제(fades)로 비가 옅어지는 변화 표현. 'head your separate ways' 헤어지는 방향 표현.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"Yes! I had a really great time today. Let\'s meet again for sure!"',
                '"Same! I really enjoyed walking with you. Let\'s hang out again soon!"',
                '"Definitely! Today was so much fun. I\'ll look forward to next time!"',
              ],
              kr: [
                "그래! 오늘 정말 좋았어. 꼭 또 만나자!",
                "나도! 같이 걸어서 너무 좋았어. 조만간 또 놀자!",
                "물론이지! 오늘 너무 재밌었어. 다음 번 기대할게!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Me too! Text me when you get home!"',
                '"Let\'s plan something this weekend then!"',
                '"Yes! I\'ll be counting down the days!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "A warm farewell! 😍",
                "Ending things on a high note! 😍",
                "Making plans already! 😍",
              ],
              emotionText: [
                "Ending the walk with genuine enthusiasm for seeing your friend again is a beautiful way to close the day!",
                "Saying you enjoyed the walk and wanting to do it again shows your friend you truly value their company!",
                "Looking forward to next time already is such a warm thing to say. Your friend is beaming!",
              ],
              grammarText: [
                "'I had a really great time' — past simple to reflect on a completed experience. 'For sure' adds certainty to a suggestion!",
                "'I really enjoyed + gerund' — 'enjoy' takes a gerund. 'Soon' adds a sense of eagerness to the plan!",
                "'So much fun' — 'so much' intensifies the noun. 'I'll look forward to' — future simple for anticipation!",
              ],
            },
            {
              en: ['"Sure. See you."', '"Okay. Later."', '"Yeah. Bye."'],
              kr: ["그래. 잘 가.", "응. 나중에 봐.", "응. 잘 가."],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Take care! See you tomorrow!"',
                '"Bye! Stay dry on the rest of the way home!"',
                '"Okay! Get home safe!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Short but fine! 😐",
                "A casual sendoff! 😐",
                "Simple and clean! 😐",
              ],
              emotionText: [
                "A brief farewell is totally normal. Your friend sends you off warmly and doesn't mind the short reply!",
                "Keeping it simple at the end is fine. Your friend smiles and goes on their way without any hard feelings!",
                "Short goodbyes happen all the time. Your friend waves cheerfully as you part ways!",
              ],
              grammarText: [
                "'Sure' — an informal affirmative. 'See you' is short for 'see you later' or 'see you around'!",
                "'Later' — very casual short form of 'see you later'. Common and natural between friends!",
                "'Yeah. Bye.' — the simplest farewell possible. Direct and unambiguous!",
              ],
            },
            {
              en: [
                '"Honestly, sharing an umbrella was kind of uncomfortable."',
                '"It was fine, I guess. I don\'t really need to do this again."',
                '"Next time I\'ll just bring my own umbrella."',
              ],
              kr: [
                "솔직히 우산 같이 쓰는 게 좀 불편했어.",
                "뭐 괜찮았지. 꼭 또 이럴 필요는 없을 것 같아.",
                "다음엔 그냥 내 우산 챙겨올게.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Oh... sorry. I was just trying to help."',
                '"I see... okay then. Take care."',
                '"Right... I\'ll keep that in mind. Bye."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "That stings a little! 😨",
                "A cold way to end a kind walk! 😨",
                "That might have hurt your friend's feelings! 😨",
              ],
              emotionText: [
                "Saying it was uncomfortable after your friend helped you can feel like a rejection of their kindness. A softer exit goes a long way!",
                "Telling your friend you don't need to repeat this might come across as dismissive. They only wanted to help!",
                "While practical, saying you'll just bring your own umbrella next time signals you'd rather not share again — which can sting!",
              ],
              grammarText: [
                "'Kind of uncomfortable' — 'kind of' softens the negative. 'Sharing an umbrella' — gerund as subject of the sentence!",
                "'I don't really need to' — 'really' softens the negation. 'Do this again' refers back to the shared experience!",
                "'Next time I'll just' — future simple with 'just' to minimize. An implied preference for independence!",
              ],
            },
          ],
        },

        "neutral-neutral": {
          title: [
            "Talking About Music!",
            "A Surprise Topic!",
            "Do You Like This Song?",
          ],
          text: [
            "Your friend recovers quickly and brings up a song they've been listening to lately, asking if you know it.",
            "After a quiet moment, your friend mentions a song they've been into recently and wonders if you like it too.",
            "Your friend shakes it off and excitedly tells you about a song they can't stop listening to.",
          ],
          grammar: [
            "현재완료진행(have been listening to)으로 최근 계속 듣고 있는 상황 표현. 'asking if you know' 간접의문문.",
            "현재완료진행(have been into)으로 최근 빠져있는 상황 표현. 'wonders if' 간접의문문으로 의견 묻기.",
            "현재진행형(can't stop listening to)으로 멈출 수 없이 듣는 강조 표현. 'excitedly tells' 신나서 말하는 뉘앙스.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend3_happy",
          },
          choices: [
            {
              en: [
                '"I love that song! The lyrics are so good and it really lifts my mood!"',
                '"No way, I\'ve been listening to that too! The energy is amazing!"',
                '"Yes! That song always makes me feel so much better when I hear it!"',
              ],
              kr: [
                "나 그 노래 좋아해! 가사도 너무 좋고 기분이 올라가!",
                "말도 안 돼, 나도 듣고 있었어! 에너지가 진짜 대박이야!",
                "맞아! 그 노래 들으면 항상 기분이 너무 좋아져!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"I knew it! We have the same taste. Let\'s make a playlist together!"',
                '"Same! Let\'s share music recommendations more often!"',
                '"Right?! It\'s on repeat for me too. We should swap playlists!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Music brings people together! 😍",
                "A shared love of music! 😍",
                "That song has magical timing! 😍",
              ],
              emotionText: [
                "Connecting over music is one of the easiest and most joyful ways to bond with someone. Your friend is thrilled!",
                "Discovering you both love the same song is a wonderful surprise. Your friend feels an instant deeper connection!",
                "Sharing how a song makes you feel is personal and warm. Your friend is glad the topic came up!",
              ],
              grammarText: [
                "'The lyrics are so good' — 'so' intensifies the adjective. 'Lifts my mood' — 'lift' used metaphorically for emotional effect!",
                "'No way' — exclamation of surprised disbelief. Present perfect 'I've been listening' shows ongoing recent action!",
                "'Always makes me feel' — adverb of frequency + causative verb. 'So much better' — comparative with 'so much' for emphasis!",
              ],
            },
            {
              en: [
                '"I know that song. It\'s okay, I guess."',
                '"Oh, I\'ve heard it. Not really my type of music."',
                "\"I've heard of it. It's alright.\"",
              ],
              kr: [
                "그 노래 알아. 뭐, 괜찮은 것 같아.",
                "아, 들어봤어. 내 스타일은 아닌 것 같아.",
                "들어본 것 같아. 그냥 그렇지.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, fair enough! What kind of music do you like then?"',
                '"Really? What do you usually listen to?"',
                '"Oh okay! So what\'s your kind of music?"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Honest about taste! 😐",
                "Not your thing — and that's okay! 😐",
                "A mild response that keeps things going! 😐",
              ],
              emotionText: [
                "Not sharing the same music taste is completely fine. Your friend is curious about what you do enjoy!",
                "Being honest that it's not your style is fair. Your friend takes it well and turns it into a new question!",
                "A mild response keeps the door open. Your friend wants to find more common ground!",
              ],
              grammarText: [
                "'It's okay, I guess' — 'I guess' makes the assessment tentative. 'Okay' is a neutral, non-committal judgment!",
                "'Not really my type of' — 'not really' softens the negative. 'Type of music' uses a noun phrase to categorize!",
                "'I've heard of it' — present perfect for prior awareness. 'It's alright' — a mild, non-enthusiastic acceptance!",
              ],
            },
            {
              en: [
                '"I\'m not really into music."',
                '"Music doesn\'t really do anything for me."',
                "\"I don't listen to music. It's just noise.\"",
              ],
              kr: [
                "나 음악엔 그렇게 관심 없어.",
                "음악이 나한테 별 의미가 없어.",
                "음악 잘 안 들어. 그냥 소음이잖아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Oh... really? That's different. I didn't know that.\"",
                '"Hmm, okay. I guess not everyone feels that way."',
                '"Oh wow... okay. Well, to each their own, I guess."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_surprised",
              },
              feedbackTitle: [
                "That shut the conversation down! 😨",
                "A little blunt! 😨",
                "Calling music 'noise' might sting! 😨",
              ],
              emotionText: [
                "Not being into music is fine, but saying so flatly can close off the conversation. A little curiosity about their taste goes a long way!",
                "Saying music doesn't do anything for you is honest, but it doesn't leave much room for your friend to respond. Try asking about their taste instead!",
                "Calling music 'just noise' is quite strong, and it might make your friend feel like their excitement wasn't welcome!",
              ],
              grammarText: [
                "'Not really into' — 'into' informally means interested in. 'Not really' softens the rejection!",
                "'Doesn't really do anything for me' — 'do something for someone' means to have an effect. 'Really' softens it slightly!",
                "'It's just noise' — 'just' dismisses the subject entirely. A blunt and final-sounding statement!",
              ],
            },
          ],
        },

        "neutral-bad": {
          title: ["Your Friend Asks Why!", "What's Going On?", "Tell Me More!"],
          text: [
            "Your friend is taken aback but gently asks what made today so difficult for you.",
            "Your friend pauses for a moment, then carefully asks if something specific happened today.",
            "Your friend looks at you with concern and quietly asks what went wrong today.",
          ],
          grammar: [
            "과거 시제(is taken aback)로 놀란 반응 표현. 'gently asks' 부드럽게 묻는 부사 표현.",
            "현재 시제(pauses)로 잠깐 멈추는 동작 표현. 'carefully asks' 조심스럽게 묻는 부사 표현.",
            "현재 시제(looks, asks)로 걱정스럽게 바라보는 상황 표현. 'quietly asks' 조용히 묻는 부사 표현.",
          ],
          scene: {
            hero: "hero_angry",
            friend: "friend3_thinking",
          },
          choices: [
            {
              en: [
                '"I think I\'m just tired. Thanks for asking though — it actually helps to talk."',
                '"I\'ve just been feeling a bit overwhelmed lately. It means a lot that you asked."',
                "\"Nothing specific, I guess. I'm just drained. But it's nice that you care.\"",
              ],
              kr: [
                "그냥 좀 피곤한 것 같아. 그래도 물어봐줘서 고마워 — 말하니까 좀 나아져.",
                "요즘 좀 지쳐있던 것 같아. 물어봐줘서 정말 고마워.",
                "딱히 뭔가 있는 건 아닌데. 그냥 방전됐나봐. 신경써줘서 좋아.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"I get it. We all have those days. I\'m here anytime, okay?"',
                "\"I'm glad you told me. Don't carry it alone!\"",
                '"Of course I care. That\'s what friends are for!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Opening up a little goes a long way! 😍",
                "Letting your friend in matters! 😍",
                "Acknowledging care is beautiful! 😍",
              ],
              emotionText: [
                "Admitting you're tired and thanking your friend for asking turns a difficult moment into a connecting one!",
                "Sharing that you've been overwhelmed and expressing gratitude shows emotional openness. Your friend is glad you opened up!",
                "Saying it's nice that your friend cares, even when you can't explain everything, is a warm and honest response!",
              ],
              grammarText: [
                "'I think I'm just' — 'I think' softens the statement. 'It helps to talk' — infinitive as subject showing an impersonal benefit!",
                "'I've been feeling overwhelmed' — present perfect continuous for ongoing state. 'Means a lot' = is very meaningful!",
                "'I'm just drained' — 'drained' is an adjective meaning completely exhausted. 'It's nice that' introduces a noun clause!",
              ],
            },
            {
              en: [
                '"Nothing, really. Just one of those days."',
                '"It\'s nothing big. Just stuff."',
                '"I don\'t know. It just was."',
              ],
              kr: [
                "딱히 없어. 그냥 그런 날이야.",
                "별거 아니야. 그냥 이것저것.",
                "모르겠어. 그냥 그랬어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Fair enough. I hope tomorrow\'s better!"',
                '"Okay. Well, I\'m here if you need anything."',
                '"Alright. Let\'s hope the rain clears up tomorrow too."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Keeping it vague — but that's okay! 😐",
                "Not ready to share — and that's valid! 😐",
                "Your friend gets it! 😐",
              ],
              emotionText: [
                "You don't have to explain everything. Your friend accepts your answer and hopes tomorrow is better for you!",
                "Sometimes you just don't have the words. Your friend understands and lets you know they're there anyway!",
                "A vague answer is fine. Your friend doesn't push and simply wishes you a better tomorrow!",
              ],
              grammarText: [
                "'Just one of those days' — a set expression meaning an unusually bad or odd day with no specific cause!",
                "'Nothing big. Just stuff.' — fragmented speech for a casual, dismissive tone. 'Stuff' is vague and informal!",
                "'I don't know. It just was.' — very minimal. 'Just was' is intentionally vague and mood-conveying!",
              ],
            },
            {
              en: [
                '"There\'s no point telling you. Nothing will change anyway."',
                "\"It doesn't matter. Talking about it won't help.\"",
                '"Leave it. I don\'t want to talk about it anymore."',
              ],
              kr: [
                "말해봤자야. 어차피 달라지는 건 없어.",
                "상관없어. 말해봤자 달라지는 것도 없잖아.",
                "됐어. 더 이상 말하고 싶지 않아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Okay... I won't push. But I'm here if you change your mind.\"",
                '"Alright. I just wanted you to know I\'m here."',
                '"Okay. I\'m sorry if I asked too much."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Shutting your friend out! 😨",
                "That's a heavy thing to carry alone! 😨",
                "Your friend only wanted to help! 😨",
              ],
              emotionText: [
                "Saying there's no point talking shuts down the possibility of being helped. Your friend was genuinely trying to be there for you!",
                "Believing talking won't help can make hard days feel even heavier. Sometimes just being heard is enough!",
                "Telling your friend to leave it might push them away when you actually need connection most. They care about you!",
              ],
              grammarText: [
                "'There's no point + gerund' — a fixed structure meaning something is useless. 'Nothing will change' — future simple with 'nothing'!",
                "'It doesn't matter' — a dismissive phrase. 'Talking about it won't help' — gerund subject + future negative!",
                "'Leave it' — a blunt imperative meaning 'drop the subject'. 'I don't want to + verb' expresses strong unwillingness!",
              ],
            },
          ],
        },

        "bad-good": {
          title: [
            "How Are You Feeling Now?",
            "Still Worried About You!",
            "Walking It Off!",
          ],
          text: [
            "Thanks to your friend walking alongside you, your mood has lifted a little. Your worried friend asks how you're feeling now.",
            "Your friend has been quietly walking beside you and gently checks in to see if you're feeling any better.",
            "After walking together for a while, your friend glances over and asks if the rain has helped at all.",
          ],
          grammar: [
            "현재완료(has lifted)로 기분이 나아진 변화 표현. 'asks how you're feeling' 현재 상태를 묻는 간접의문문.",
            "현재완료진행(has been walking)으로 계속 걸어온 상황 표현. 'gently checks in' 부드럽게 확인하는 표현.",
            "현재분사(walking)로 함께 걸으며 일어나는 상황 표현. 'glances over' 슬쩍 쳐다보는 동작.",
          ],
          scene: {
            hero: "hero_thinking",
            friend: "friend3_thinking",
          },
          choices: [
            {
              en: [
                '"I think so. Walking with you actually helped. thank you."',
                '"A little better, yeah. Honestly, having you here made a difference."',
                '"Yeah, I feel a bit better. I\'m glad you stayed with me."',
              ],
              kr: [
                "그런 것 같아. 너랑 걷는 게 진짜 도움됐어. 고마워.",
                "좀 나아진 것 같아. 솔직히 네가 있어서 달랐어.",
                "응, 좀 나아졌어. 같이 있어줘서 다행이야.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "\"I'm so glad. Let's walk together more often!\"",
                '"That makes me really happy to hear."',
                "\"I'm glad too. You don't have to go through things alone!\"",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Acknowledging what helped you! 😍",
                "Honest and warm! 😍",
                "A genuine moment of connection! 😍",
              ],
              emotionText: [
                "Telling your friend their company helped you is one of the most meaningful things you can say. They'll feel truly valued!",
                "Admitting something helped and crediting your friend for it is a beautiful moment of honesty and gratitude!",
                "Saying you're glad they stayed shows you noticed and appreciated their effort. Your friend's heart is full!",
              ],
              grammarText: [
                "'I think so' — a soft affirmative. 'Actually helped' — 'actually' signals a genuine positive surprise!",
                "'Made a difference' — a common phrase meaning it had a meaningful effect. 'Honestly' as a candid discourse marker!",
                "'I feel a bit better' — 'a bit' softens the improvement. 'I'm glad + past simple' for expressing relief about something completed!",
              ],
            },
            {
              en: [
                '"Sort of. I guess the rain wasn\'t so bad after all."',
                '"A little, maybe. It is kind of peaceful."',
                '"I suppose. It\'s not as bad as I thought."',
              ],
              kr: [
                "좀 그런 것 같아. 비가 그렇게 나쁘진 않았나봐.",
                "조금, 아마. 뭔가 평화로운 것 같기도 해.",
                "그런 것 같아. 생각만큼 나쁘진 않아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "\"See! Silver linings! I'm glad you're feeling a bit better.\"",
                '"I thought so. The rain has a way of calming things down."',
                '"Good. Sometimes things aren\'t as bad as they first seem."',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "Finding a small bright side! 😐",
                "A quiet, peaceful shift! 😐",
                "Reconsidering a little! 😐",
              ],
              emotionText: [
                "Admitting the rain wasn't so bad shows a small but real shift in your mood. Your friend is pleased to see it!",
                "Finding a little peace in the rain is a sign you're starting to feel better. Your friend smiles quietly!",
                "Reconsidering how bad things are is a healthy first step. Your friend is happy to hear it!",
              ],
              grammarText: [
                "'Sort of' — an informal way to say partially or somewhat. 'After all' = in the end, contrary to what was expected!",
                "'Kind of peaceful' — 'kind of' softens the adjective. 'It is kind of' with 'is' stressed for mild emphasis!",
                "'I suppose' — a tentative agreement. 'Not as bad as I thought' uses 'as...as' in a negative comparative!",
              ],
            },
            {
              en: [
                '"No. The rain is just making me more annoyed. I want to go home."',
                '"Not really. Everything is still bothering me."',
                "\"No, I'm still in a bad mood. This walk isn't helping.\"",
              ],
              kr: [
                "아니. 비가 오히려 더 짜증나게 해. 빨리 집 가고 싶어.",
                "별로. 다 여전히 거슬려.",
                "아니, 아직도 기분 나빠. 이 산책이 별 도움 안 되고 있어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Oh... I'm sorry. I hope you feel better once you're home.\"",
                "\"Okay... I'm sorry I couldn't help more.\"",
                '"I\'m sorry... I was just trying to help."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_surprised",
              },
              feedbackTitle: [
                "The rain isn't the problem! 😨",
                "Hard to shake the bad mood! 😨",
                "Your friend feels helpless now! 😨",
              ],
              emotionText: [
                "When even the rain feels annoying, it's hard for your friend to know what to do. But they're still here for you!",
                "Staying stuck in a bad mood is natural sometimes, but your friend is running out of ways to help. Try to let them in!",
                "Saying the walk isn't helping can make your friend feel like they've failed. They were trying so hard!",
              ],
              grammarText: [
                "'Making me more annoyed' — causative structure. 'Want to go home' — simple desire expressed with 'want to + verb'!",
                "'Still bothering me' — present continuous for ongoing irritation. 'Not really' as a soft negative!",
                "'Still in a bad mood' — 'still' shows the state hasn't changed. 'Isn't helping' — present continuous negative!",
              ],
            },
          ],
        },

        "bad-neutral": {
          title: [
            "Getting Worried About You!",
            "Are You Sure You're Okay?",
            "A Concerned Friend!",
          ],
          text: [
            "You keep walking in the rain. Your friend looks worried and asks again if you're sure you're okay.",
            "The rain is heavier now. Your friend stays close and checks in on you once more.",
            "You're soaking wet and still walking. Your friend can't hold back and asks if you're really alright.",
          ],
          grammar: [
            "현재진행형(keep walking)으로 계속 걷는 상황 표현. 'asks again' 다시 한 번 묻는 동작.",
            "비교급(heavier)으로 비가 더 세지는 상황 표현. 'checks in' 안부를 확인하는 동작.",
            "현재진행형(are soaking wet, still walking)으로 지속 상황 표현. 'can't hold back' 참을 수 없는 감정 표현.",
          ],
          scene: {
            hero: "hero_thinking",
            friend: "friend3_thinking",
          },
          choices: [
            {
              en: [
                "\"Yeah, I'm fine. But thanks for worrying. it's nice to know you care.\"",
                '"I\'m okay, really. Sorry for making you worry. I appreciate it."',
                "\"I'm alright. I know I'm being stubborn. Thank you for sticking around.\"",
              ],
              kr: [
                "응, 괜찮아. 그래도 걱정해줘서 고마워. 신경써줘서 좋아.",
                "진짜 괜찮아. 걱정시켜서 미안. 고마워.",
                "괜찮아. 내가 좀 고집스러운 거 알아. 같이 있어줘서 고마워.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Of course I care! Now come share the umbrella already!"',
                "\"Don't apologize! I just want to make sure you're okay.\"",
                '"Ha! Just a little stubborn, huh? Let\'s walk together then."',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Softening up a little! 😍",
                "Acknowledging your friend's care! 😍",
                "Self-awareness goes a long way! 😍",
              ],
              emotionText: [
                "Thanking your friend for worrying, even while insisting you're fine, is a warm and genuine thing to do!",
                "Apologizing for worrying your friend and expressing appreciation shows you recognize their care. That means a lot!",
                "Admitting you're being stubborn and thanking your friend for staying is honest and endearing. They'll smile at that!",
              ],
              grammarText: [
                "'Thanks for worrying' — 'thanks for + gerund'. 'It's nice to know' — infinitive after 'nice' expressing a pleasant realization!",
                "'Sorry for making you worry' — 'sorry for + gerund'. 'I appreciate it' = I'm grateful for this!",
                "'I know I'm being' — present continuous for temporary behavior. 'Thanks for sticking around' — 'stick around' means to stay!",
              ],
            },
            {
              en: [
                '"See? I told you not to worry. This is exactly why."',
                '"Like I said from the start, you don\'t need to worry about me."',
                '"I said it before. don\'t worry about me. I meant it."',
              ],
              kr: [
                "그러게 아까부터 신경쓰지 말라니까.",
                "처음부터 그랬잖아, 신경 안 써도 된다고.",
                "아까부터 말했잖아. 걱정하지 말라고. 진심이야.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"...okay. I get it. Sorry."',
                '"Right. Sorry for pushing. I\'ll leave it."',
                '"Alright... I\'ll stop. Just walking then."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_thinking",
              },
              feedbackTitle: [
                "A bit pointed, but not cruel! 😐",
                "Holding your ground firmly! 😐",
                "Your friend backs off! 😐",
              ],
              emotionText: [
                "Reminding your friend you said it earlier is a bit pointed, but it does end the back-and-forth. They go quiet and respect your space!",
                "Repeating that they don't need to worry isn't warm, but it's not mean either. Your friend accepts it, though the silence is a little heavy!",
                "Saying you meant it earlier shows consistency. Your friend stops asking, though they still look a little worried on the inside!",
              ],
              grammarText: [
                "'I told you not to' — past simple reporting a prior instruction. 'This is exactly why' — a phrase pointing back to a reason!",
                "'Like I said from the start' — refers back to an earlier statement. 'You don't need to' expresses lack of necessity!",
                "'I said it before' — simple past for prior reference. 'I meant it' confirms the sincerity of an earlier statement!",
              ],
            },
            {
              en: [
                '"I already told you, I\'m fine. Just leave me alone."',
                '"Stop asking. I said I\'m okay."',
                '"I\'m fine! Please stop checking on me."',
              ],
              kr: [
                "이미 말했잖아, 괜찮다고. 그냥 내버려둬.",
                "그만 물어봐. 괜찮다고 했잖아.",
                "괜찮다고! 제발 그만 확인해.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Okay... I'm sorry. I'll just walk here quietly.\"",
                '"Alright... sorry for asking."',
                "\"Okay. I won't ask again. I'm still here though.\"",
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_sad",
              },
              feedbackTitle: [
                "Too harsh on a caring friend! 😨",
                "Pushing away someone who means well! 😨",
                "Your frustration is understandable, but... 😨",
              ],
              emotionText: [
                "Telling your friend to leave you alone after they've been worrying about you is hurtful. They only care!",
                "Saying 'stop asking' shuts down your friend who genuinely wants to help. Even a simple thank you would mean a lot!",
                "Your frustration is valid, but asking your friend to stop checking on you can make them feel unwanted and hurt!",
              ],
              grammarText: [
                "'I already told you' — 'already' implies impatience or repetition. 'Just leave me alone' — 'just' softens an otherwise harsh imperative!",
                "'Stop + gerund' — imperative with gerund to stop an action. 'I said + clause' refers back to a prior statement with frustration!",
                "'Please stop + gerund' — 'please' adds a frustrated politeness. 'Checking on me' — 'check on' means to see if someone is okay!",
              ],
            },
          ],
        },

        "bad-bad": {
          title: [
            "An Awkward Silence...",
            "Walking in Quiet...",
            "A Long Silence!",
          ],
          text: [
            "Your cold response left your friend unsure of what to say. You're both walking in silence. What do you do?",
            "Your friend has gone quiet after your sharp reply. The only sound is the rain. What do you say?",
            "The silence between you is heavy. Your friend looks straight ahead. Will you say something?",
          ],
          grammar: [
            "과거 시제(left)로 앞선 행동의 결과 표현. 'walking in silence' 현재진행형으로 침묵 속 걷는 상황.",
            "현재완료(has gone quiet)로 말을 잃은 상황 표현. 'The only sound is' 강조 구조.",
            "현재 시제(looks)로 앞을 바라보는 동작 표현. 'Will you say something?' 미래의지 의문문.",
          ],
          scene: {
            hero: "hero_thinking",
            friend: "friend3_thinking",
          },
          choices: [
            {
              en: [
                '"Hey, sorry about that. I\'ve been kind of on edge lately. Thanks for being here."',
                "\"I'm sorry for being cold. You've been really patient with me and I appreciate that.\"",
                "\"I didn't mean to snap at you. I guess I'm just having a rough time. Sorry.\"",
              ],
              kr: [
                "야, 미안해. 요즘 좀 예민했어. 같이 있어줘서 고마워.",
                "차갑게 굴어서 미안해. 되게 잘 참아줬는데 고마워.",
                "쏘아붙이려던 건 아니었어. 그냥 힘든 시간인 것 같아. 미안.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"It\'s okay. I figured something was up. Want to talk about it?"',
                '"Of course. We all have tough days. I\'m still here."',
                "\"Hey, it's alright. I'm glad you said something.\"",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend3_happy",
              },
              feedbackTitle: [
                "Breaking the silence takes courage! 😍",
                "A genuine and heartfelt apology! 😍",
                "Owning your actions! 😍",
              ],
              emotionText: [
                "Apologizing and explaining you've been on edge shows maturity and care for your friendship. Your friend is relieved!",
                "Acknowledging how patient your friend has been and thanking them is deeply meaningful. They feel seen and valued!",
                "Admitting you snapped and that you're having a rough time lets your friend in. That's what real connection looks like!",
              ],
              grammarText: [
                "'I've been kind of on edge' — present perfect continuous for ongoing emotional state. 'On edge' means anxious or irritable!",
                "'For being cold' — 'sorry for + gerund'. 'I appreciate that' = I'm grateful for what you did!",
                "'I didn't mean to snap' — 'mean to + verb' means to intend to do something. 'Having a rough time' = going through difficulties!",
              ],
            },
            {
              en: [
                '"Sorry. I didn\'t mean to be like that."',
                '"I guess I wasn\'t being very nice. Sorry about that."',
                '"That came out wrong. I didn\'t mean to sound so harsh."',
              ],
              kr: [
                "미안. 그러려던 건 아니었어.",
                "내가 좀 못되게 굴었나봐. 미안해.",
                "말이 이상하게 나왔어. 그렇게 차갑게 들리려던 건 아니었어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"It\'s okay. I figured you were having a rough time."',
                "\"Don't worry about it. I'm still here.\"",
                "\"It's fine. I'm glad you said something.\"",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend3_sad",
              },
              feedbackTitle: [
                "A small step forward! 😐",
                "Not quite an apology, but something! 😐",
                "Breaking the silence a little! 😐",
              ],
              emotionText: [
                "A short apology without a full explanation is still better than silence. Your friend is relieved the ice is broken!",
                "Admitting you weren't being nice, even briefly, shows some self-awareness. Your friend appreciates the small gesture!",
                "Saying it came out wrong isn't a full apology, but it opens the door a little. Your friend is glad you said something!",
              ],
              grammarText: [
                "'I didn't mean to be like that' — 'mean to + verb' expresses intent. 'Like that' refers to a manner or behavior!",
                "'I wasn't being very nice' — past continuous for temporary behavior. 'Sorry about that' is a casual, brief apology!",
                "'That came out wrong' — a common phrase meaning something was said differently than intended. 'Sound so harsh' describes vocal tone!",
              ],
            },
            {
              en: [
                '"hmm..."',
                '"Whatever. Let\'s just walk."',
                '"Just forget it. I don\'t want to talk."',
              ],
              kr: ["흠...", "그냥 가자.", "됐어. 말하고 싶지 않아."],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"...okay. I\'m here if you need me."',
                '"...alright."',
                '"...okay. I understand."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend3_sad",
              },
              feedbackTitle: [
                "The silence gets louder! 😨",
                "Shutting down completely! 😨",
                "Pushing your friend away more and more! 😨",
              ],
              emotionText: [
                "Staying silent after a harsh exchange makes the distance between you and your friend grow. It's not too late to say something small!",
                "Brushing it off with 'whatever' sends a strong message that you don't want to connect. Your friend feels shut out!",
                "Telling your friend to forget it closes the door on the moment entirely. They're still walking beside you — it's not too late!",
              ],
              grammarText: [
                "'hmm...' — silence as a response. Powerful in writing to convey emotional withdrawal!",
                "'Whatever. Let's just walk.' — 'whatever' dismisses the situation. 'Just' in 'let's just walk' signals resignation!",
                "'Forget it' — an imperative used to drop a subject. 'I don't want to talk' is a flat, final-sounding refusal!",
              ],
            },
          ],
        },
      },
    },
  ],
};

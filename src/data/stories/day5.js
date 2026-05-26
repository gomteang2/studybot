export const day5 = {
  id: "sports_day",
  background: "/bg/bg_sportsfield.png",
  steps: [
    {
      id: "step1",
      background: "/bg/bg_sportsfield.png",
      title: [
        "Sports Day is Here!",
        "Time to Compete!",
        "Let the Games Begin!",
      ],
      text: [
        "It's sports day! Your teacher divides the class into teams and explains everyone's roles. What do you say?",
        "Your teacher is splitting the class into teams and going over the events. How do you respond?",
        "Sports day has started! Your teacher explains the rules and assigns roles. What do you say?",
      ],
      grammar: [
        "현재 시제(divides, explains)로 지금 팀을 나누고 설명하는 상황 표현. 'What do you say?' 현재 의문문.",
        "현재진행형(is splitting, going over)으로 진행 중인 상황 표현. 'How do you respond?' 현재 의문문.",
        "현재완료(has started)로 운동회가 시작된 상황 표현. 'assigns roles' 역할을 배정하는 동작.",
      ],
      scene: {
        hero: "hero_thinking",
        friend: "friend1_happy",
        extra: "teacher_happy",
      },
      newCharacter: "teacher",
      hideFriend: true,
      choices: [
        {
          en: [
            "\"I'm going to give it my all! Let's win this!\"",
            '"I\'ll do my best! I really want us to win!"',
            "\"I'm so ready for this! Let's go all out and take the win!\"",
          ],
          kr: [
            "열심히 해서 꼭 이길게요! 화이팅!!",
            "최선을 다할게요! 진짜 이기고 싶어요!",
            "완전 준비됐어요! 전력으로 달려서 이겨봅시다!",
          ],
          type: "good",
          emoji: "💗",
          friendReaction: [
            "\"Yes! That's the spirit! Let's do this together!\"",
            "\"Same! I'm so pumped! Let's win!\"",
            '"Let\'s go! I love your energy!"',
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend1_happy",
            extra: "teacher_happy",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "What great team spirit! 😍",
            "That enthusiasm is contagious! 😍",
            "Ready to give it everything! 😍",
          ],
          emotionText: [
            "Showing determination and team spirit from the start sets a great tone for everyone. Your teacher loves your attitude!",
            "Expressing a genuine desire to win motivates the whole team. Your friend is fired up too!",
            "Going all out with energy and enthusiasm is exactly the sports day spirit. Everyone around you feels the excitement!",
          ],
          grammarText: [
            "'I'm going to give it my all' — 'going to' for strong intention. 'Give it my all' is an idiom meaning to try as hard as possible!",
            "'I'll do my best' — 'will' for a spontaneous decision or promise. 'I really want us to' uses 'us' to include the whole team!",
            "'I'm so ready for this' — present tense with 'so' for emphasis. 'Go all out' means to make maximum effort!",
          ],
        },
        {
          en: [
            "\"Let's just take it easy. I'm not expecting much.\"",
            '"I\'ll do what I can. No big expectations though."',
            "\"Sure, I'll participate. But I'm not getting my hopes up.\"",
          ],
          kr: [
            "적당히 하자. 별로 기대도 안해~",
            "할 수 있는 만큼 할게. 큰 기대는 없어.",
            "뭐, 참가는 할게. 기대는 안 하지만.",
          ],
          type: "neutral",
          emoji: "🤍",
          friendReaction: [
            '"Ha, okay... well, I\'m still going to try my best!"',
            '"Really? I want to win though. Let\'s at least try!"',
            '"Come on, give it a chance! It might be fun!"',
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
            extra: "teacher_thinking",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "A little low on enthusiasm! 😐",
            "Going in without expectations! 😐",
            "Not feeling it yet — but that's okay! 😐",
          ],
          emotionText: [
            "A laid-back attitude is fine, but your team might need a little more energy. Your friend is still trying to bring the excitement!",
            "Keeping expectations low isn't a bad strategy, but try to enjoy the moment. Your friend hasn't given up on having fun!",
            "Not getting your hopes up is understandable, but sports day can surprise you. Give it a real shot!",
          ],
          grammarText: [
            "'Take it easy' — a phrasal verb meaning to relax or not try too hard. 'Not expecting much' shows low anticipation!",
            "'I'll do what I can' — a flexible commitment. 'No big expectations' — 'big' modifies expectations to show scale!",
            "'I'm not getting my hopes up' — 'get one's hopes up' means to start expecting something good. Negative form shows caution!",
          ],
        },
        {
          en: [
            '"Why do we even have to do this? I really don\'t want to."',
            "\"Ugh, I don't see the point of this. It's such a waste of time.\"",
            '"I really don\'t feel like doing this. Why is this even a thing?"',
          ],
          kr: [
            "이런 걸 왜 하는 거야? 하기 싫은데!",
            "아, 이게 무슨 의미야. 시간 낭비잖아.",
            "진짜 하기 싫어. 왜 이런 게 있는 거야?",
          ],
          type: "bad",
          emoji: "💔",
          friendReaction: [
            '"Don\'t say that... it might actually be fun!"',
            '"Come on, it\'s just one day. Try to enjoy it!"',
            '"Wow, okay. I\'m still going to try though!"',
          ],
          scene: {
            hero: "hero_angry",
            friend: "friend1_surprised",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          feedbackTitle: [
            "Give it a chance before you decide! 😨",
            "A negative start makes everything harder! 😨",
            "You might be surprised if you try! 😨",
          ],
          emotionText: [
            "Saying you don't want to do something before even trying makes it hard to enjoy anything. Keep an open mind!",
            "Calling sports day a waste of time before it even starts can dampen the mood for everyone around you!",
            "Not feeling like it is understandable, but the day has just begun. You might end up having more fun than you think!",
          ],
          grammarText: [
            "'Why do we even have to' — 'even' adds frustration or emphasis. 'Have to' expresses obligation!",
            "'I don't see the point of' — a phrase expressing that something seems meaningless. 'Such a waste of' intensifies the negative!",
            "'I don't feel like + gerund' — a common phrase for lack of motivation. 'Why is this even a thing?' — rhetorical question showing frustration!",
          ],
        },
      ],
    },

    {
      id: "step2",
      background: "/bg/bg_sportsfield.png",
      paths: {
        good: {
          title: ["Your Friend's Turn!", "Time to Cheer!", "Ready, Set, Go!"],
          text: [
            "The race is in full swing! Your friend is about to run. What do you say?",
            "It's an exciting race! Your friend steps up to the starting line. How do you cheer them on?",
            "The race is heating up! It's your friend's turn to run. What do you call out?",
          ],
          grammar: [
            "현재진행형(is in full swing)으로 경기가 한창인 상황 표현. 'is about to' 막 ~하려는 상황 표현.",
            "현재 시제(steps up)로 출발선에 서는 동작 표현. 'How do you cheer them on?' 현재 의문문.",
            "현재진행형(is heating up)으로 경기가 달아오르는 상황 표현. 'What do you call out?' 현재 의문문.",
          ],
          scene: {
            hero: "hero_thinking",
            friend: "friend1_surprised",
          },
          choices: [
            {
              en: [
                "\"Don't worry! You've got this!\"",
                '"You can do it! I believe in you!"',
                '"Go for it! I know you can do it!"',
              ],
              kr: [
                "걱정 마. 잘 할 수 있어!",
                "할 수 있어! 믿어!",
                "달려! 잘 할 수 있는 거 알아!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Thanks! I\'ll do my best!"',
                '"That means a lot! Here I go!"',
                '"Thanks for believing in me! Watch me!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "What a great teammate! 😍",
                "Your encouragement means everything! 😍",
                "That's the way to cheer someone on! 😍",
              ],
              emotionText: [
                "Telling your friend not to worry and showing confidence in them is exactly what they needed to hear before the race!",
                "Saying you believe in someone gives them real confidence. Your friend feels ready to give it their all!",
                "Cheering your friend on with genuine belief in them is one of the best things a teammate can do!",
              ],
              grammarText: [
                "'Don't worry' — negative imperative for reassurance. 'You've got this' — present perfect used as an idiom meaning you can handle it!",
                "'You can do it' — modal verb for ability. 'I believe in you' — 'believe in' means to have confidence in someone!",
                "'Go for it' — an encouraging idiom meaning to try your hardest. 'I know you can' — 'know' expresses certainty!",
              ],
            },
            {
              en: [
                '"Just run! The faster it\'s over, the better."',
                '"Hurry up and run. Let\'s just get this done."',
                '"Just go already. I want this to be over."',
              ],
              kr: [
                "대충 달려~ 빨리 끝났으면 좋겠다.",
                "빨리 뛰어. 그냥 끝내자.",
                "그냥 달려. 빨리 끝났으면 해.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Wow, okay... I\'ll still try my best though."',
                "\"That's not very encouraging... but fine, I'll run!\"",
                '"Gee, thanks for the support. I\'ll go anyway."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_sad",
              },
              feedbackTitle: [
                "Not very encouraging! 😐",
                "A little dismissive! 😐",
                "Your friend needed more than that! 😐",
              ],
              emotionText: [
                "Telling your friend to just run and get it over with doesn't give them much to feel good about. They deserved a little more support!",
                "Rushing your friend to finish doesn't help them perform better. A word of encouragement goes a long way!",
                "Your friend was counting on you to cheer them on. Even a small 'good luck' would have made a difference!",
              ],
              grammarText: [
                "'The faster it's over, the better' — 'the + comparative, the + comparative' structure. Shows impatience!",
                "'Hurry up and run' — 'hurry up' is a phrasal verb meaning to move faster. 'Get this done' means to finish the task!",
                "'Just go already' — 'already' adds impatience in informal speech. 'Want this to be over' shows disengagement!",
              ],
            },
            {
              en: [
                '"You\'re not a great runner, you know. Think you can actually do this?"',
                "\"You're not exactly fast. Do you think you'll be okay?\"",
                "\"Don't get your hopes up. You're not the best at running.\"",
              ],
              kr: [
                "너 잘 못뛰잖아. 잘 뛸 수 있겠어?",
                "너 별로 빠르지도 않잖아. 괜찮겠어?",
                "기대하진 마. 네가 달리기를 잘 하는 건 아니잖아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Wow... thanks for nothing. I\'ll show you."',
                "\"That's not helpful at all! I'll do my best anyway.\"",
                '"Did you have to say that right now? I\'ll run anyway."',
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That really wasn't kind! 😨",
                "Your friend needed support, not doubt! 😨",
                "That comment could hurt their confidence! 😨",
              ],
              emotionText: [
                "Pointing out your friend's weakness right before they run is the last thing they needed. Words like that can shake someone's confidence!",
                "Questioning your friend's ability just before their race is discouraging. Try to lift people up, not bring them down!",
                "Telling your friend not to get their hopes up takes away the joy of trying. Everyone deserves encouragement!",
              ],
              grammarText: [
                "'You're not a great runner, you know' — 'you know' is a tag seeking acknowledgment. A belittling remark!",
                "'Not exactly fast' — 'not exactly' softens the criticism but is still negative. 'Do you think you'll be okay?' questions their ability!",
                "'Don't get your hopes up' — a phrase warning against expecting success. Negative before someone tries!",
              ],
            },
          ],
        },

        neutral: {
          title: ["Your Friend's Turn!", "Time to Cheer!", "Ready, Set, Go!"],
          text: [
            "The race is in full swing! Your friend is about to run. What do you say?",
            "It's an exciting race! Your friend steps up to the starting line. How do you cheer them on?",
            "The race is heating up! It's your friend's turn to run. What do you call out?",
          ],
          grammar: [
            "현재진행형(is in full swing)으로 경기가 한창인 상황 표현. 'is about to' 막 ~하려는 상황 표현.",
            "현재 시제(steps up)로 출발선에 서는 동작 표현. 'How do you cheer them on?' 현재 의문문.",
            "현재진행형(is heating up)으로 경기가 달아오르는 상황 표현. 'What do you call out?' 현재 의문문.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_surprised",
          },
          choices: [
            {
              en: [
                '"Go for it! You can do it!"',
                '"Give it your best shot! I\'m rooting for you!"',
                '"You\'ve got this! Run your hardest!"',
              ],
              kr: [
                "힘내! 잘 할 수 있을거야!",
                "최선을 다해! 응원할게!",
                "할 수 있어! 힘껏 달려!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Thanks! I\'ll give it everything!"',
                '"That makes me feel better! Here I go!"',
                '"Okay! Watch me!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "Cheering from the heart! 😍",
                "Your support makes a difference! 😍",
                "Great teammate energy! 😍",
              ],
              emotionText: [
                "Even if you weren't feeling it at first, cheering your friend on wholeheartedly shows real teamwork!",
                "Telling your friend you're rooting for them is a simple but powerful thing. They head into the race with a smile!",
                "Your encouragement came at just the right moment. Your friend runs with extra motivation thanks to you!",
              ],
              grammarText: [
                "'Go for it' — an encouraging idiom meaning to try your hardest. 'You can do it' — modal verb for ability and confidence!",
                "'Give it your best shot' — an idiom meaning to try as hard as you can. 'Root for' means to support or cheer for someone!",
                "'You've got this' — an idiom expressing strong confidence in someone. 'Run your hardest' — superlative adverb for maximum effort!",
              ],
            },
            {
              en: [
                '"Just run however you like. It doesn\'t really matter."',
                '"Eh, just do it. No big deal either way."',
                '"Go ahead. I mean, just run. Whatever happens, happens."',
              ],
              kr: [
                "대충 달려~ 귀찮다.",
                "뭐, 그냥 해. 어떻게 되든 상관없어.",
                "그냥 달려. 어떻게 되든 되겠지.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Wow, okay. I\'ll try anyway."',
                '"Not exactly a pep talk, but... here goes!"',
                '"Thanks for nothing, I guess. I\'ll run anyway."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_sad",
              },
              feedbackTitle: [
                "That wasn't very helpful! 😐",
                "Your friend deserved more! 😐",
                "A little indifferent! 😐",
              ],
              emotionText: [
                "Saying it doesn't really matter right before your friend runs isn't encouraging. They still try their best though!",
                "A shrug of an answer before the race isn't what your friend was hoping for, but they push through anyway!",
                "Your friend needed a boost, not indifference. But they head into the race and give it their all regardless!",
              ],
              grammarText: [
                "'Just run however you like' — 'however' here means in whatever way. 'Doesn't really matter' — 'really' softens the dismissal!",
                "'No big deal either way' — 'either way' means regardless of the outcome. A casual, detached expression!",
                "'Whatever happens, happens' — a fatalistic fixed phrase. 'Go ahead' is an informal way of saying proceed!",
              ],
            },
            {
              en: [
                '"Can you even win? I\'m not so sure about you."',
                '"Think you\'ll make it? Honestly, I have my doubts."',
                "\"You're going to lose, aren't you? I mean, just saying.\"",
              ],
              kr: [
                "이길 수 있겠어? 못할 것 같은데?",
                "잘 할 수 있겠어? 솔직히 좀 의심스러운데.",
                "질 것 같은데, 그렇지? 뭐, 그냥 하는 말이야.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Wow. Why would you even say that?"',
                '"Thanks for the confidence. Not!"',
                '"That\'s really not okay to say before a race."',
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That's the opposite of support! 😨",
                "Doubt hurts more than you think! 😨",
                "Never say that before someone competes! 😨",
              ],
              emotionText: [
                "Questioning whether your friend can win right before their race plants doubt in their mind. That's the last thing they need!",
                "Saying you have doubts about your friend's ability is deeply discouraging. Words like that stick!",
                "Telling someone they're going to lose and brushing it off with 'just saying' doesn't soften the blow. It still hurts!",
              ],
              grammarText: [
                "'Can you even win?' — 'even' adds skepticism or challenge. 'I'm not so sure about' expresses doubt about someone!",
                "'Think you'll make it?' — short for 'Do you think'. 'I have my doubts' — 'have doubts' means to be uncertain or skeptical!",
                "'You're going to lose, aren't you?' — negative tag question seeking agreement. 'I mean, just saying' tries to soften a harsh statement!",
              ],
            },
          ],
        },

        bad: {
          title: ["Your Friend's Turn!", "Time to Cheer!", "Ready, Set, Go!"],
          text: [
            "The race is in full swing! Your friend is about to run. What do you say?",
            "It's an exciting race! Your friend steps up to the starting line. How do you cheer them on?",
            "The race is heating up! It's your friend's turn to run. What do you call out?",
          ],
          grammar: [
            "현재진행형(is in full swing)으로 경기가 한창인 상황 표현. 'is about to' 막 ~하려는 상황 표현.",
            "현재 시제(steps up)로 출발선에 서는 동작 표현. 'How do you cheer them on?' 현재 의문문.",
            "현재진행형(is heating up)으로 경기가 달아오르는 상황 표현. 'What do you call out?' 현재 의문문.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_surprised",
          },
          choices: [
            {
              en: [
                '"Whatever happens, giving your best means no regrets."',
                '"Just try your hardest. That\'s all you can do."',
                '"Do your best out there. You\'ll have no regrets that way."',
              ],
              kr: [
                "최선을 다하면 후회가 없을거야.",
                "그냥 최선을 다해. 그게 전부야.",
                "최선을 다해. 그러면 후회 없을거야.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                "\"You're right. I'll give it everything!\"",
                '"Thanks. That actually helped!"',
                '"That\'s a good way to think about it. Here I go!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "Wise words at the right time! 😍",
                "Simple but meaningful! 😍",
                "The best kind of encouragement! 😍",
              ],
              emotionText: [
                "Even though you weren't thrilled about sports day, stepping up to encourage your friend shows real character!",
                "Telling your friend to try their hardest is simple but sincere. They go into the race feeling supported!",
                "Sharing a no-regrets mindset with your friend just before the race is genuinely helpful. They feel ready!",
              ],
              grammarText: [
                "'Whatever happens' — a concessive clause meaning regardless of the outcome. 'Means no regrets' — 'mean' used to express consequence!",
                "'Try your hardest' — superlative adverb for maximum effort. 'That's all you can do' is a comforting, realistic statement!",
                "'Do your best out there' — 'out there' refers to the race track. 'You'll have no regrets' — future simple for a prediction!",
              ],
            },
            {
              en: [
                '"Just run however. I don\'t really care."',
                '"Eh, just go. I\'m not paying attention anyway."',
                '"Whatever. Just run."',
              ],
              kr: [
                "대충 달려~ 귀찮다.",
                "뭐, 그냥 가. 어차피 안 볼 거야.",
                "그냥 달려. 됐어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Okay... I\'ll try anyway."',
                '"Wow, thanks. I\'ll run anyway."',
                '"Not exactly inspiring but okay. Here goes!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "Your friend deserved better! 😐",
                "A missed chance to connect! 😐",
                "Even a little support goes a long way! 😐",
              ],
              emotionText: [
                "Not caring when your friend is about to race is a missed opportunity. A small word of encouragement could have meant so much!",
                "Telling your friend you're not even paying attention is dismissive. They still run, but without the support they needed!",
                "A single 'good luck' would have made a difference. Your friend runs knowing they're on their own out there!",
              ],
              grammarText: [
                "'Just run however' — 'however' here is informal for 'in whatever way you want'. 'I don't really care' — 'really' softens but still dismisses!",
                "'I'm not paying attention anyway' — present continuous for an ongoing choice. 'Anyway' shows indifference!",
                "'Whatever. Just run.' — 'whatever' dismisses the situation. A blunt, minimal response with no support!",
              ],
            },
            {
              en: [
                '"You can\'t even run properly. Why are you even entering?"',
                "\"You're not a good runner. What's the point of you going?\"",
                '"Why bother? You\'re not going to do well anyway."',
              ],
              kr: [
                "잘 달리지도 못하면서 뭐하러 나가?",
                "달리기도 못하잖아. 나가봤자 뭐해?",
                "왜 나가? 어차피 잘 못할텐데.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Excuse me?! That's so mean. I'm going anyway!\"",
                '"Wow, really? Thanks for nothing."',
                '"That really hurt. I\'ll show you."',
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That was really hurtful! 😨",
                "Never say that to a teammate! 😨",
                "Those words can do real damage! 😨",
              ],
              emotionText: [
                "Telling your friend they can't run properly right before they race is crushing. Words like that can take away someone's confidence completely!",
                "Questioning what the point is of your friend competing is deeply discouraging. Everyone deserves the chance to try!",
                "Saying 'why bother' tells your friend their efforts don't matter. That's one of the most discouraging things you can say!",
              ],
              grammarText: [
                "'Can't even run properly' — 'even' emphasizes disbelief. 'Why are you even entering?' — rhetorical question with 'even' for frustration!",
                "'What's the point of you going?' — 'point of + gerund' questions the purpose. A dismissive and discouraging structure!",
                "'Why bother?' — a short rhetorical question meaning there's no reason to try. 'Anyway' makes the negativity feel final!",
              ],
            },
          ],
        },
      },
    },

    {
      id: "step3",
      background: "/bg/bg_sportsfield.png",
      paths: {
        "good-good": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts on how things went. What do you say?",
            "The final event is done! Everyone's catching their breath and talking about the day. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문으로 결과 이야기.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형으로 의견 나누기.",
            "현재진행형(catching, talking)으로 동시에 일어나는 상황 표현. 'catching their breath' 숨을 고르는 표현.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"Today was so much fun! I really hope we do this again!"',
                '"That was amazing! I\'d love to do this every year!"',
                '"I had such a great time today! Can\'t wait for the next one!"',
              ],
              kr: [
                "오늘 정말 재미있었어. 또 하면 좋겠다~",
                "진짜 최고였어! 매년 하면 좋겠다!",
                "오늘 너무 좋았어! 다음 번도 기대돼!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Same! Today was the best! Let\'s train harder for next time!"',
                '"Right?! I\'m already looking forward to next year!"',
                '"Me too! We should do this every semester!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "What a perfect end to the day! 😍",
                "Your enthusiasm is the best! 😍",
                "Already looking forward to next time! 😍",
              ],
              emotionText: [
                "Sharing how much fun you had and wanting to do it again is the perfect way to end sports day!",
                "Calling it amazing and hoping it happens every year shows real love for the experience. Your friends feel the same!",
                "Expressing excitement about the next sports day shows you gave today everything you had. Your friend is thrilled!",
              ],
              grammarText: [
                "'Today was so much fun' — 'so much' intensifies the noun. 'I really hope we do this again' — 'really' emphasizes the wish!",
                "'I'd love to' — 'would love to' expresses a strong desire. 'Do this every year' uses frequency adverb with present simple!",
                "'I had such a great time' — 'such a' intensifies the noun phrase. 'Can't wait for' = very excited about something coming!",
              ],
            },
            {
              en: [
                '"Eh, it was okay I guess. Nothing special."',
                '"It was fine. Not really my thing, but not terrible."',
                '"Sports day is sports day. It happened. That\'s about it."',
              ],
              kr: [
                "운동회 별거 없네.",
                "그냥 그렇지 뭐. 내 취향은 아닌데 나쁘진 않아.",
                "운동회는 운동회지. 그냥 한 거야. 그게 다야.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Really? I thought it was pretty fun!"',
                '"Ha, fair enough. I enjoyed it though!"',
                '"Haha, that\'s one way to put it. I had fun!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_thinking",
              },
              feedbackTitle: [
                "Not very enthusiastic! 😐",
                "Honest, if a little flat! 😐",
                "Your friend saw it differently! 😐",
              ],
              emotionText: [
                "Not every event lands the same way for everyone, and that's fine. Your friend still had a great time!",
                "Being honest that it wasn't really your thing is okay. Your friend accepts that and shares their own enjoyment!",
                "A matter-of-fact answer is honest, even if it's not very warm. Your friend laughs it off and moves on!",
              ],
              grammarText: [
                "'Nothing special' — a fixed phrase meaning ordinary or unremarkable. 'Eh' is an informal filler showing indifference!",
                "'Not really my thing' — an informal expression meaning something doesn't suit you. 'Not terrible' is a mild double negative!",
                "'That's about it' — a phrase meaning that's all there is to say. A minimal, closing statement!",
              ],
            },
            {
              en: [
                '"Why did everyone do so badly? That was embarrassing."',
                '"Honestly, that was pretty disappointing. We really underperformed."',
                '"I can\'t believe how poorly everyone did. So frustrating."',
              ],
              kr: [
                "왜 이렇게 못해? 진짜 창피하다.",
                "솔직히 좀 실망스러워. 다들 너무 못했잖아.",
                "다들 왜 이렇게 못하는 건지. 짜증나.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Hey, we all tried our best! That\'s not fair."',
                '"That\'s harsh. We gave it everything we had."',
                '"Wow. We all worked hard today. Don\'t say that."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That's no way to talk about your team! 😨",
                "Focus on effort, not just results! 😨",
                "Your team gave it their all! 😨",
              ],
              emotionText: [
                "Criticizing your team's performance right after the event is hurtful. Everyone tried their best!",
                "Calling the day disappointing when your friends worked hard ignores all the effort that went into it!",
                "Expressing frustration at how everyone performed takes the joy out of a fun day. Win or lose, the effort matters!",
              ],
              grammarText: [
                "'Why did everyone do so badly?' — past simple question. 'So badly' uses 'so' to intensify the adverb!",
                "'We really underperformed' — 'under' as a prefix means below expectation. 'Disappointing' describes the speaker's feeling!",
                "'I can't believe how poorly' — 'can't believe' expresses strong disbelief. 'How poorly' is an exclamatory structure!",
              ],
            },
          ],
        },

        "good-neutral": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문으로 결과 이야기.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"That was actually way more fun than I expected! Let\'s do it again!"',
                '"Okay, I\'ll admit it — that was a lot of fun! I want to do it again!"',
                '"I didn\'t expect to enjoy it so much! This was great. Do it again!"',
              ],
              kr: [
                "생각보다 재미있네? 또 하면 좋겠다.",
                "인정, 꽤 재미있었어! 또 하고 싶다!",
                "이렇게 재미있을 줄 몰랐어! 좋았다. 또 해!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"See! I told you it would be fun! Let\'s train for next time!"',
                "\"Ha! I knew you'd come around! Same — let's do it again!\"",
                '"Yes! I\'m so glad you had fun! Next year for sure!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "A great surprise! 😍",
                "Admitting you had fun takes honesty! 😍",
                "Sometimes things exceed expectations! 😍",
              ],
              emotionText: [
                "Saying it was more fun than expected is honest and positive. Your friend is glad you came around!",
                "Admitting you had fun even when you weren't expecting to shows self-awareness and openness. Your friend loves it!",
                "Being genuinely surprised by how good something was is a wonderful feeling to share with friends!",
              ],
              grammarText: [
                "'Way more fun than I expected' — 'way' as an intensifier before comparatives. 'Actually' signals a positive surprise!",
                "'I'll admit it' — a phrase used before confessing something. 'A lot of fun' — 'a lot of' quantifies the enjoyment!",
                "'I didn't expect to enjoy it so much' — past simple negative with infinitive. 'So much' emphasizes the degree!",
              ],
            },
            {
              en: [
                '"Eh, it was okay. Not bad, I guess."',
                '"I mean, it wasn\'t terrible. Just okay."',
                '"It happened. It was fine. Nothing to write home about."',
              ],
              kr: [
                "운동회 별거 없네?",
                "뭐, 그렇게 나쁘진 않았어. 그냥 그렇지.",
                "했어. 괜찮았어. 딱히 특별하진 않아.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, I\'ll take it! Better than hating it, right?"',
                "\"Okay, 'not terrible' is a start! Maybe you'll love it next time!\"",
                '"Ha! That\'s very you. Glad it was at least fine!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_thinking",
              },
              feedbackTitle: [
                "Keeping it real! 😐",
                "Cautiously okay! 😐",
                "Honest as ever! 😐",
              ],
              emotionText: [
                "A lukewarm reaction is honest, and your friend takes it in stride with a laugh!",
                "Not terrible is still something! Your friend hopes next time you'll enjoy it even more!",
                "Nothing to write home about is fair enough. Your friend smiles and is just glad you weren't miserable!",
              ],
              grammarText: [
                "'Not bad, I guess' — 'I guess' adds tentativeness. 'Not bad' is a mild double negative meaning acceptable!",
                "'Wasn't terrible' — past simple negative for a mild positive. 'Just okay' is a minimal, neutral judgment!",
                "'Nothing to write home about' — an idiom meaning unremarkable. A casual, understated way to describe something average!",
              ],
            },
            {
              en: [
                '"Honestly, that was pretty bad. Everyone underperformed."',
                '"I\'m not impressed. I expected way more from everyone."',
                '"What a letdown. We really didn\'t do well at all."',
              ],
              kr: [
                "왜 이렇게 못해! 진짜 별로야!",
                "별로야. 다들 더 잘할 줄 알았는데.",
                "실망이다. 진짜 잘 못했잖아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Hey, we all tried our best! That\'s mean."',
                '"Wow, that\'s harsh. We worked really hard today."',
                '"That really hurts to hear. We did our best."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That's no way to talk about your team! 😨",
                "Everyone tried — remember that! 😨",
                "Results aren't everything! 😨",
              ],
              emotionText: [
                "Saying everyone performed badly ignores the effort that went into the day. Your friends are hurt!",
                "Saying you expected more puts unfair pressure on your teammates after the fact. They gave it their all!",
                "Calling it a letdown right after the event takes the joy away from everyone. Try to focus on the good parts!",
              ],
              grammarText: [
                "'Pretty bad' — 'pretty' as an intensifier. 'Underperformed' — 'under' prefix meaning below expected level!",
                "'I'm not impressed' — present tense expressing a current feeling. 'Expected way more' — 'way' intensifies the comparison!",
                "'What a letdown' — an exclamatory structure. 'Didn't do well at all' — 'at all' emphasizes the negative!",
              ],
            },
          ],
        },

        "good-bad": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문으로 결과 이야기.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                "\"I didn't think I'd say this, but that was actually a good experience!\"",
                '"Honestly, that turned out better than I thought. I\'m glad we did it."',
                '"I came in not expecting much, but I actually had fun. I\'d do it again."',
              ],
              kr: [
                "생각보다 재미있었다. 또 하고 싶네.",
                "솔직히 생각보다 좋았어. 하길 잘했네.",
                "기대 안 했는데 생각보다 재미있었어. 또 할래.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"See! You never know until you try! Let\'s do it again next year!"',
                "\"I'm so glad! I was worried you'd hate it. Next time will be even better!\"",
                "\"Yes! That's the spirit! Let's make next time even more fun!\"",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "A welcome change of heart! 😍",
                "Glad you gave it a chance! 😍",
                "Open minds lead to great experiences! 😍",
              ],
              emotionText: [
                "Admitting you had a good time even when you came in with low expectations shows real growth. Your friend is delighted!",
                "Being honest about how your expectations were exceeded is a lovely thing to share. Your friend is genuinely happy for you!",
                "Coming in skeptical and leaving with a smile is the best outcome. Your friend can't wait for next time!",
              ],
              grammarText: [
                "'I didn't think I'd say this' — past simple + conditional. A phrase used before admitting something surprising!",
                "'Turned out better than I thought' — 'turn out' means to result in a certain way. 'Better than I thought' uses a comparative!",
                "'Came in not expecting much' — past simple with a participial phrase. 'I'd do it again' — conditional for willingness!",
              ],
            },
            {
              en: [
                '"I mean, it wasn\'t that exciting. Just kind of okay."',
                '"Eh. It\'s over, at least. Not terrible I suppose."',
                '"Nothing really stood out. It was just sports day."',
              ],
              kr: [
                "운동회 별거 없잖아?",
                "뭐. 끝나긴 했네. 나쁘진 않았나.",
                "딱히 특별한 게 없었어. 그냥 운동회지.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, okay. I thought it was fun though!"',
                "\"Well, it's over! That's something. I had a blast!\"",
                '"Fair enough. I enjoyed it either way!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "At least it wasn't terrible! 😐",
                "Low-key reaction! 😐",
                "Your friend had a better time! 😐",
              ],
              emotionText: [
                "Not finding it exciting is fair, but at least you finished with a neutral feeling. Your friend takes it well!",
                "Saying it's over and not terrible is a step up from dreading it. Your friend smiles and moves on!",
                "Nothing standing out is a valid reaction. Your friend enjoyed it regardless and doesn't hold it against you!",
              ],
              grammarText: [
                "'Not that exciting' — 'that' as an informal intensifier in negatives means 'so' or 'very'. Mild disappointment!",
                "'It's over, at least' — 'at least' introduces a small positive. 'I suppose' adds tentativeness!",
                "'Nothing really stood out' — 'stand out' means to be noticeable. 'Really' softens the statement!",
              ],
            },
            {
              en: [
                '"I knew it would be like this. Someone should have practiced more."',
                '"I told you this would happen. We just aren\'t good enough."',
                '"That went exactly how I expected. Not great."',
              ],
              kr: [
                "이럴 줄 알았어. 평소에 연습 좀 해.",
                "그럴 줄 알았어. 우리가 그냥 못하는 거야.",
                "딱 예상한 대로네. 별로였어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Wow. That\'s really discouraging to hear."',
                '"We tried our best. You don\'t have to say that."',
                '"We all worked hard. Don\'t dismiss it like that."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "Saying 'I told you so' never helps! 😨",
                "That's unfair to your teammates! 😨",
                "Don't dismiss everyone's efforts! 😨",
              ],
              emotionText: [
                "Saying you knew it would go badly and telling people to practice more is condescending. Your friend is hurt!",
                "Telling your team they just aren't good enough after they tried their best is deeply discouraging. That's not okay!",
                "Confirming your low expectations out loud dismisses everyone's effort. Your friends deserve better than that!",
              ],
              grammarText: [
                "'I knew it would be like this' — past simple + conditional for a prediction that came true. 'Should have practiced' — modal perfect for past advice!",
                "'I told you this would happen' — past simple for prior warning. 'We just aren't good enough' — 'just' makes the blunt statement feel final!",
                "'Went exactly how I expected' — past simple + relative clause. 'Not great' is an understated negative judgment!",
              ],
            },
          ],
        },

        "neutral-good": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"That was really fun! I\'d love to do it again!"',
                '"I actually enjoyed that a lot! Let\'s do this again!"',
                '"That was great fun! I\'m already looking forward to next time!"',
              ],
              kr: [
                "재미있었어. 또 하면 좋겠다.",
                "생각보다 많이 즐거웠어! 또 하자!",
                "진짜 재미있었어! 벌써 다음 번이 기대돼!",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Me too! Today was the best!"',
                '"Yes! Let\'s make it even better next time!"',
                '"Same! I\'m so glad we all had fun!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "A great time all around! 😍",
                "Sports day delivered! 😍",
                "The best ending to the day! 😍",
              ],
              emotionText: [
                "Saying it was fun and wanting to do it again is the perfect way to wrap up sports day!",
                "Sharing genuine enjoyment with your friends creates a lasting positive memory of the day!",
                "Being excited for next time already shows how much you got into the spirit of sports day. Your friend loves it!",
              ],
              grammarText: [
                "'That was really fun' — past simple for a completed experience. 'I'd love to do it again' — conditional for desire!",
                "'I actually enjoyed that a lot' — 'actually' signals a pleasant outcome. 'A lot' as an adverb of degree!",
                "'Great fun' — 'great' as an intensifier for 'fun'. 'I'm already looking forward to' — present continuous with future meaning!",
              ],
            },
            {
              en: [
                '"It was okay, I guess. Could have been worse."',
                '"Eh, it was alright. Not really my thing but fine."',
                '"It happened. I\'m not complaining."',
              ],
              kr: [
                "그럭저럭~",
                "뭐, 괜찮았어. 내 취향은 아닌데.",
                "했어. 불만은 없어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                "\"Ha, I'll take it! Glad you're not upset!\"",
                '"Okay! I had fun though. Maybe you\'ll like it more next time!"',
                '"Haha, that\'s enough for me! I had a great time!"',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_thinking",
              },
              feedbackTitle: [
                "Neutral but not negative! 😐",
                "A shrug is still okay! 😐",
                "At least it wasn't bad! 😐",
              ],
              emotionText: [
                "Not loving it but not hating it either is a valid reaction. Your friend is just glad you took part!",
                "A casual, neutral reaction is honest, and your friend hopes the next one will win you over more!",
                "Not complaining is a positive in its own way. Your friend laughs and shares their own enjoyment!",
              ],
              grammarText: [
                "'Could have been worse' — modal perfect for an unrealized worse outcome. A backhanded positive!",
                "'Not really my thing' — an informal expression for something that doesn't suit you. 'But fine' softens it!",
                "'I'm not complaining' — present continuous used as a set phrase meaning no objections!",
              ],
            },
            {
              en: [
                '"That was honestly pretty terrible. I\'m disappointed."',
                '"I can\'t believe how badly that went. So frustrating."',
                '"What a waste of time. We didn\'t even do well."',
              ],
              kr: [
                "진짜 별로야! 다음엔 더 잘해야 해!",
                "진짜 별로였어. 너무 실망이야.",
                "시간 낭비네. 잘하지도 못했잖아.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Wow. We all tried really hard today. That hurts to hear."',
                '"That\'s really harsh. We gave it everything."',
                '"Don\'t say that. Everyone worked hard today!"',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "That's unfair to your team! 😨",
                "Frustration is valid, but be kind! 😨",
                "Everyone worked hard today! 😨",
              ],
              emotionText: [
                "Saying it was terrible and demanding better next time dismisses all the effort your team put in today!",
                "Expressing how disappointed you are in front of teammates who tried their best is really discouraging!",
                "Calling it a waste of time hurts everyone who gave their energy to the day. Try to find something positive!",
              ],
              grammarText: [
                "'Honestly pretty terrible' — 'honestly' as a discourse marker. 'Should do better next time' — modal for future advice!",
                "'Can't believe how badly' — 'can't believe' for strong disbelief. 'How badly' is an exclamatory adverb structure!",
                "'What a waste of time' — exclamatory structure. 'Didn't even do well' — 'even' emphasizes the disappointment!",
              ],
            },
          ],
        },

        "neutral-neutral": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"That was actually more fun than I expected. I\'d do it again!"',
                "\"Okay, I'll admit — that was kind of fun. I wouldn't mind doing it again.\"",
                "\"I didn't think I'd enjoy it, but I actually did! Let's do it again sometime.\"",
              ],
              kr: [
                "생각보다 재미있네? 또 하고 싶다.",
                "인정, 나름 재미있었어. 또 해도 좋아.",
                "즐길 줄 몰랐는데 재미있었어! 또 하자.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Yes! See, you just had to try! Next year then!"',
                "\"Ha! I knew you'd come around. Let's do it again!\"",
                '"I\'m so glad! That makes me really happy!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "A great turnaround! 😍",
                "Admitting you had fun! 😍",
                "Surprised yourself today! 😍",
              ],
              emotionText: [
                "Discovering something was more fun than you expected is a great feeling to share. Your friend is thrilled!",
                "Admitting it was kind of fun even when you went in without high hopes shows real openness. Your friend loves it!",
                "Being surprised by your own enjoyment is a wonderful thing. Your friend can't wait to see you enjoy it even more next time!",
              ],
              grammarText: [
                "'More fun than I expected' — comparative with 'than' + clause. 'I'd do it again' — conditional for willingness!",
                "'I'll admit' — a phrase before confessing something. 'Wouldn't mind doing' — 'wouldn't mind + gerund' for mild willingness!",
                "'I didn't think I'd enjoy it' — past simple + conditional in a negative clause. 'Actually did' — 'actually' emphasizes the surprise!",
              ],
            },
            {
              en: [
                "\"Eh. It's done. I'm just tired.\"",
                "\"I mean, it was fine. I'm just glad it's over.\"",
                '"It was what it was. Nothing to say really."',
              ],
              kr: [
                "귀찮아 정말..",
                "뭐, 괜찮았어. 끝났으니 다행이야.",
                "그냥 그랬어. 딱히 할 말 없어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha, fair. Rest up then!"',
                '"I get it. At least it wasn\'t miserable, right?"',
                '"Okay, resting mode activated. Same honestly."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_surprised",
              },
              feedbackTitle: [
                "Running on empty! 😐",
                "Just glad it's done! 😐",
                "Not much to add! 😐",
              ],
              emotionText: [
                "Being tired after sports day is completely understandable. Your friend laughs and lets you rest!",
                "Being glad it's over is a fair reaction. At least you finished without a complaint!",
                "Nothing to say is fine. Your friend is just happy the day went smoothly!",
              ],
              grammarText: [
                "'It's done' — present perfect used as a state. 'I'm just tired' — 'just' focuses on the single feeling!",
                "'I'm just glad it's over' — 'glad + that-clause'. 'I mean' introduces a casual clarification!",
                "'It was what it was' — a fixed expression accepting a situation as it is. A fatalistic, closed statement!",
              ],
            },
            {
              en: [
                '"That was genuinely bad. I\'m not impressed at all."',
                '"Honestly, is this even fun? I don\'t get it."',
                "\"What's the point if we can't even win? This is pointless.\"",
              ],
              kr: [
                "이게 재미있어? 진짜 별론데.",
                "솔직히 재미있긴 해? 이해를 못하겠어.",
                "이기지도 못하는데 뭐가 재미있어. 의미 없어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Wow. Some of us really enjoyed it. Don\'t ruin it."',
                "\"You don't have to get it, but don't dismiss it for everyone else.\"",
                "\"It's not all about winning. That's a really negative way to see it.\"",
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "Don't bring everyone else down! 😨",
                "Your friends enjoyed it! 😨",
                "Sports day is about more than winning! 😨",
              ],
              emotionText: [
                "Calling it genuinely bad dismisses the fun your friends had. Try not to drag everyone's mood down!",
                "Not getting the point is okay, but saying so out loud can make others feel bad for enjoying it!",
                "Sports day isn't only about winning — it's about effort, teamwork, and fun. Don't reduce it to just the result!",
              ],
              grammarText: [
                "'Genuinely bad' — 'genuinely' as an intensifying adverb. 'Not impressed at all' — 'at all' emphasizes the negative!",
                "'Is this even fun?' — 'even' adds skepticism. 'I don't get it' is an informal way to say you don't understand!",
                "'What's the point if' — a rhetorical conditional question. 'Pointless' is an adjective meaning without purpose!",
              ],
            },
          ],
        },

        "neutral-bad": {
          title: [
            "The Teacher Steps In!",
            "Time to Explain!",
            "What Happened Here?",
          ],
          text: [
            "Your friend got upset and things got loud. The teacher comes over and asks what happened. What do you say?",
            "Your friend's reaction caused a commotion and the teacher stepped in. They ask you to explain. What do you say?",
            "Things got out of hand after your comment, and the teacher comes to find out what's going on. What do you say?",
          ],
          grammar: [
            "과거 시제(got upset, comes over)로 상황이 발생하고 선생님이 오는 흐름 표현. 'asks what happened' 간접의문문.",
            "과거 시제(caused, stepped in)로 소란이 일어난 상황 표현. 'ask you to explain' to부정사로 설명 요청.",
            "과거 시제(got out of hand)로 상황이 걷잡을 수 없게 된 표현. 'comes to find out' to부정사로 목적 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_angry",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                '"I said something unkind to my friend, teacher. I want to apologize to them."',
                '"I was rude to my friend before the race, teacher. I take responsibility and I\'m sorry."',
                '"I doubted my friend out loud, teacher. That wasn\'t fair of me and I want to make it right."',
              ],
              kr: [
                "제가 못되게 굴었어요, 선생님. 친구에게 사과할게요.",
                "경기 전에 친구에게 무례하게 굴었어요, 선생님. 제 잘못이에요, 미안해요.",
                "친구를 의심하는 말을 했어요, 선생님. 그건 옳지 않았어요. 바로잡고 싶어요.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"Thank you for being honest. Go ahead and apologize — I\'m sure your friend appreciates it."',
                "\"That takes courage to admit. I'm glad you're taking responsibility.\"",
                '"Good. Now go make it right with your friend."',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_thinking",
                extra: "teacher_happy",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Taking responsibility! 😍",
                "Honest and mature! 😍",
                "The right thing to say! 😍",
              ],
              emotionText: [
                "Admitting you were unkind and offering to apologize right away shows real maturity. Your teacher is proud of you!",
                "Taking responsibility in front of the teacher and your friend takes courage. That's a big step!",
                "Acknowledging that doubting your friend out loud wasn't fair and wanting to fix it is the right response. Your teacher agrees!",
              ],
              grammarText: [
                "'I said something unkind' — past simple for a specific action. 'I want to apologize to' — 'want to + verb' for intention!",
                "'I was rude to' — past simple + adjective. 'I take responsibility' — a formal phrase owning one's actions!",
                "'That wasn't fair of me' — 'fair of someone' judges a person's behavior. 'Make it right' means to correct a mistake!",
              ],
            },
            {
              en: [
                '"I\'m not sure why my friend got so upset, teacher."',
                '"We just had a disagreement, teacher. I don\'t really know why they reacted like that."',
                '"I only said what I thought, teacher. I didn\'t think it would cause this."',
              ],
              kr: [
                "친구가 왜 이렇게 화났는지 모르겠어요, 선생님.",
                "그냥 의견 차이가 있었어요, 선생님. 왜 이렇게 반응하는지 모르겠어요.",
                "제 생각을 말한 것뿐이에요, 선생님. 이렇게 될 줄 몰랐어요.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"You said something hurtful — even if you don\'t see it, your friend does. Think about how your words land."',
                '"A disagreement still has two sides. Consider how your friend felt when you said that."',
                '"Even well-meant words can sting. Try to see it from your friend\'s point of view."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_thinking",
                extra: "teacher_thinking",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Not quite taking responsibility! 😐",
                "There's more to the story! 😐",
                "Try to see your friend's side! 😐",
              ],
              emotionText: [
                "Saying you don't know why your friend is upset avoids the real issue. Your teacher gently points you back to your words!",
                "Framing it as just a disagreement minimizes what happened. Your teacher helps you see the other side!",
                "Saying you didn't mean for it to cause this is a start, but your teacher reminds you to think about impact, not just intent!",
              ],
              grammarText: [
                "'I'm not sure why' — an indirect way of expressing uncertainty. 'Got so upset' — 'get + adjective' for a change of state!",
                "'We just had a disagreement' — 'just' downplays the event. 'Reacted like that' — 'like that' refers to a manner or way!",
                "'I only said what I thought' — 'only' limits the scope of the action. 'Didn't think it would cause this' — past negative + conditional!",
              ],
            },
            {
              en: [
                "\"I was just being honest, teacher. If they can't run well, they can't run well.\"",
                "\"I only said the truth, teacher. I don't see why that's a problem.\"",
                '"I just said what I thought, teacher. Can\'t I have an opinion?"',
              ],
              kr: [
                "못뛰니까 못뛴다고 한 건데 왜요, 선생님?",
                "사실을 말했을 뿐이에요, 선생님. 왜 문제인지 모르겠어요.",
                "제 생각을 말한 건데요, 선생님. 의견을 가지면 안 되나요?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Honesty without kindness is just cruelty. Think about when and how you say things."',
                '"The truth can still be hurtful. There\'s a kind way and a careless way to share it."',
                '"Having an opinion is fine. But there\'s a difference between sharing it and using it to hurt someone."',
              ],
              scene: {
                hero: "hero_peeve",
                friend: "friend1_angry",
                extra: "teacher_angry",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Honesty without kindness isn't a virtue! 😨",
                "The truth can still hurt! 😨",
                "There's a right way to share opinions! 😨",
              ],
              emotionText: [
                "Defending your words by saying they were true misses the point. How and when we say things matters just as much as what we say!",
                "Saying you only told the truth doesn't consider the impact. Your teacher reminds you that kindness and honesty can coexist!",
                "Having an opinion is fine, but using it to doubt someone right before they compete isn't fair. Your teacher helps you see that!",
              ],
              grammarText: [
                "'If they can't run well, they can't run well' — a conditional tautology used to justify bluntness. Dismissive in tone!",
                "'I don't see why that's a problem' — 'see' used informally to mean understand. 'I only said' limits the scope defensively!",
                "'Can't I have an opinion?' — negative question seeking justification. A rhetorical challenge to the teacher's authority!",
              ],
            },
          ],
        },

        "bad-good": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_happy",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"That was actually a really good experience! I\'m glad we did it."',
                '"I came in grumpy but I have to say — that was great. I\'d do it again."',
                '"I didn\'t expect to enjoy it, but I genuinely did. That was worth it."',
              ],
              kr: [
                "좋은 경험이었어!",
                "불만이었는데 말해야겠어 — 진짜 좋았어. 또 할래.",
                "즐길 줄 몰랐는데 진짜 즐거웠어. 할 가치가 있었어.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"I\'m so glad you came around! That makes me really happy!"',
                '"Ha! See! I knew you\'d like it once you tried. Next year?"',
                "\"That's amazing to hear. I'm glad you gave it a real shot!\"",
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "What a change of heart! 😍",
                "Admitting you had fun is honest! 😍",
                "That's real growth! 😍",
              ],
              emotionText: [
                "Going from not wanting to do it at all to calling it a good experience is a meaningful shift. Your friend is overjoyed!",
                "Admitting you came in grumpy but ended up loving it is wonderfully honest. Your friend is so glad you gave it a chance!",
                "Saying it was genuinely worth it after resisting shows real growth. Your friend couldn't be happier!",
              ],
              grammarText: [
                "'That was actually a really good experience' — 'actually' signals a positive surprise. 'I'm glad we did it' — 'glad + clause'!",
                "'I have to say' — a phrase used before admitting something honestly. 'I'd do it again' — conditional for willingness!",
                "'I genuinely did' — 'genuinely' as an intensifier showing sincerity. 'Worth it' — an adjective phrase meaning the effort was justified!",
              ],
            },
            {
              en: [
                "\"Glad it's over. That's all I've got.\"",
                '"It ended. I survived. That\'s enough for me."',
                '"Done. Finally. That\'s my review."',
              ],
              kr: [
                "드디어 끝났다!",
                "끝났어. 살아남았어. 그걸로 충분해.",
                "끝. 드디어. 그게 내 후기야.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha! That\'s... one way to put it. I had fun though!"',
                '"Haha okay. I\'m glad you made it through at least!"',
                '"Short review but fair. I had a blast regardless!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_thinking",
              },
              feedbackTitle: [
                "Just relieved it's done! 😐",
                "Minimal enthusiasm! 😐",
                "Your friend had a different experience! 😐",
              ],
              emotionText: [
                "Being glad it's over is honest, and your friend takes it with a laugh. At least you participated!",
                "Surviving sports day is its own achievement. Your friend smiles and is just glad you were there!",
                "A one-word review is very you, and your friend finds it funny. They're just glad it went okay!",
              ],
              grammarText: [
                "'Glad it's over' — elliptical sentence. 'That's all I've got' — informal expression meaning nothing more to add!",
                "'I survived' — informal hyperbole meaning you got through something difficult. 'That's enough for me' sets a low bar!",
                "'That's my review' — treating the experience like something to be evaluated. Dry humor through brevity!",
              ],
            },
            {
              en: [
                '"We didn\'t even do well. Someone needs to practice more."',
                '"What a mess. I can\'t believe how badly we performed."',
                '"That was pointless. We lost and it wasn\'t even fun."',
              ],
              kr: [
                "너무 못하네. 연습 좀 해야겠다.",
                "엉망이네. 이렇게 못할 줄 몰랐어.",
                "의미 없어. 지기도 하고 재미도 없었어.",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"Hey! We all tried our hardest. Don\'t say that."',
                '"That\'s really harsh. We gave everything today."',
                '"Wow. Some of us had a great time. Don\'t ruin it."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "Your team worked hard today! 😨",
                "Don't dismiss everyone's effort! 😨",
                "There's more to sports day than winning! 😨",
              ],
              emotionText: [
                "Criticizing the team's performance right after the event ignores everyone's effort. Your friend is hurt!",
                "Calling it a mess dismisses the hard work everyone put in. Your friends feel deflated hearing that!",
                "Saying it was pointless because you lost misses what sports day is really about. Your friend is disappointed!",
              ],
              grammarText: [
                "'Someone needs to practice more' — 'need to + verb' for necessity. Indirect criticism aimed at teammates!",
                "'I can't believe how badly' — strong disbelief. 'We performed' uses 'perform' in the context of competing!",
                "'That was pointless' — blunt adjective judgment. 'We lost and it wasn't even fun' — two negatives joined by 'and'!",
              ],
            },
          ],
        },

        "bad-neutral": {
          title: ["How Was Sports Day?", "Talking It Over!", "After the Race!"],
          text: [
            "The events are over! You and your friends talk about how it all went. What do you say?",
            "Sports day has wrapped up! Your friends are sharing their thoughts. What do you say?",
            "The final event is done! Everyone's catching their breath and chatting. What do you say?",
          ],
          grammar: [
            "현재완료(are over)로 경기가 끝난 상황 표현. 'talk about how it all went' 간접의문문.",
            "현재완료(has wrapped up)로 운동회가 마무리된 상황 표현. 'sharing their thoughts' 현재진행형.",
            "현재진행형(catching, chatting)으로 동시에 일어나는 상황 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_happy",
          },
          choices: [
            {
              en: [
                '"That was actually a good experience. I\'m glad I participated."',
                '"Not what I expected, but in a good way. I\'d do it again."',
                '"I came in not wanting to do it, but honestly — I had fun. Worth it."',
              ],
              kr: [
                "좋은 경험이 된 것 같네.",
                "예상과 달랐어. 좋은 방향으로. 또 할래.",
                "하기 싫었는데 솔직히 — 재미있었어. 할 가치 있었어.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"I\'m so glad you think so! That means a lot!"',
                '"Yay! See, you never know! Next year for sure!"',
                '"That makes me so happy to hear. I\'m glad you gave it a chance!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_happy",
              },
              feedbackTitle: [
                "A genuine reflection! 😍",
                "Surprised yourself today! 😍",
                "Honesty and openness pay off! 😍",
              ],
              emotionText: [
                "Reflecting that it was a good experience even when you didn't want to do it is honest and meaningful!",
                "Being surprised in a good way and admitting it shows openness. Your friend is thrilled you feel that way!",
                "Coming in reluctant and leaving with a positive feeling is one of the best outcomes. Your friend is beaming!",
              ],
              grammarText: [
                "'That was actually a good experience' — 'actually' signals a contrast with prior expectation. 'I'm glad I participated'!",
                "'Not what I expected, but in a good way' — contrasting expectation with reality. 'I'd do it again' — conditional!",
                "'Honestly' as a discourse marker. 'Worth it' — adjective phrase meaning the experience justified the effort!",
              ],
            },
            {
              en: [
                "\"Phew. It's over. I'm done.\"",
                '"Finally finished. I need a rest."',
                '"It\'s done. I have nothing more to say."',
              ],
              kr: [
                "드디어 끝났다!!",
                "드디어 끝났어. 쉬어야겠어.",
                "끝났어. 더 할 말 없어.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Ha! Rest well! You earned it!"',
                '"Haha okay. Take a break, you did great!"',
                '"Okay, short and sweet. I had fun at least!"',
              ],
              scene: {
                hero: "hero_happy",
                friend: "friend1_thinking",
              },
              feedbackTitle: [
                "Running on empty! 😐",
                "Just surviving! 😐",
                "Brief but honest! 😐",
              ],
              emotionText: [
                "Being relieved it's over is fair after a long day. Your friend laughs and lets you rest!",
                "Needing a rest is completely valid. Your friend smiles and is just glad you made it through!",
                "Having nothing more to say is okay. Your friend doesn't mind and is just glad you participated!",
              ],
              grammarText: [
                "'Phew' — an interjection expressing relief. 'I'm done' — present tense as a state meaning finished or exhausted!",
                "'Finally finished' — adverb + past participle in an elliptical sentence. 'I need a rest' — 'need' for necessity!",
                "'I have nothing more to say' — present tense with 'nothing more' indicating the topic is closed!",
              ],
            },
            {
              en: [
                '"I knew this was going to be a waste. I was right."',
                '"I said from the start this wasn\'t worth doing. And look."',
                '"Exactly what I expected. Pointless. Can we go now?"',
              ],
              kr: [
                "이기지도 못할 걸 왜 하는 거야?",
                "처음부터 할 가치 없다고 했잖아. 봐봐.",
                "딱 예상한 대로야. 의미 없어. 이제 가도 돼?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                '"That\'s such a negative way to see it. We all tried hard!"',
                '"Don\'t say that. Everyone gave their best today."',
                '"Wow. Some of us really had fun. Don\'t ruin the memory."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
              },
              feedbackTitle: [
                "Don't say 'I told you so'! 😨",
                "Your team worked hard! 😨",
                "There's more to it than the result! 😨",
              ],
              emotionText: [
                "Framing the outcome as proof you were right focuses only on winning. Your friends tried hard regardless!",
                "Saying from the start it wasn't worth doing and then pointing to the result is discouraging for everyone!",
                "Confirming your negative prediction and asking to leave dismisses the whole experience. Your friend is hurt!",
              ],
              grammarText: [
                "'I knew this was going to be' — past simple + future in the past. 'I was right' — a self-satisfied confirmation!",
                "'I said from the start' — past simple referring back. 'And look' — an implied 'see what happened?' with a dismissive tone!",
                "'Exactly what I expected' — a confirmatory phrase. 'Can we go now?' — a request that signals disengagement!",
              ],
            },
          ],
        },

        "bad-bad": {
          title: [
            "The Teacher Steps In!",
            "Time to Explain!",
            "What Happened Here?",
          ],
          text: [
            "Your friend got upset and things got loud. The teacher comes over and asks what happened. What do you say?",
            "Your friend's reaction caused a commotion and the teacher stepped in. They ask you to explain. What do you say?",
            "Things got out of hand after your comment, and the teacher comes to find out what's going on. What do you say?",
          ],
          grammar: [
            "과거 시제(got upset, comes over)로 상황이 발생하고 선생님이 오는 흐름 표현. 'asks what happened' 간접의문문.",
            "과거 시제(caused, stepped in)로 소란이 일어난 상황 표현. 'ask you to explain' to부정사로 설명 요청.",
            "과거 시제(got out of hand)로 상황이 걷잡을 수 없게 된 표현. 'comes to find out' to부정사로 목적 표현.",
          ],
          scene: {
            hero: "hero_lookaway",
            friend: "friend1_angry",
            extra: "teacher_surprised",
          },
          newCharacter: "teacher",
          hideFriend: true,
          choices: [
            {
              en: [
                '"I said something really hurtful to my friend, teacher. I want to apologize right away."',
                '"I was harsh to my friend before the race, teacher. I regret it and I want to make it right."',
                '"I mocked my friend in front of everyone, teacher. That was wrong of me and I\'m sorry."',
              ],
              kr: [
                "제가 친구에게 심하게 놀렸어요, 선생님. 지금 바로 사과하고 싶어요.",
                "경기 전에 친구에게 심하게 말했어요, 선생님. 후회해요. 바로잡고 싶어요.",
                "친구를 모두 앞에서 놀렸어요, 선생님. 잘못이에요. 미안해요.",
              ],
              type: "good",
              emoji: "💗",
              friendReaction: [
                '"That took courage. Go ahead and apologize — your friend needs to hear it."',
                '"I\'m glad you said that. Go make it right."',
                '"Good. Owning your actions is the first step. Go apologize."',
              ],
              scene: {
                hero: "hero_sad",
                friend: "friend1_thinking",
                extra: "teacher_happy",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Owning your words! 😍",
                "Honest and ready to make it right! 😍",
                "That took real courage! 😍",
              ],
              emotionText: [
                "Admitting you said something hurtful and wanting to apologize immediately shows real maturity. Your teacher is proud!",
                "Regretting what you said and wanting to fix it is the right response. Your teacher is glad you stepped up!",
                "Admitting you mocked your friend in front of others and taking full responsibility is brave and honest!",
              ],
              grammarText: [
                "'I said something really hurtful' — past simple for a specific action. 'I want to apologize right away' — 'right away' means immediately!",
                "'I regret it' — present tense for a current feeling about a past action. 'Make it right' means to fix the situation!",
                "'Wrong of me' — 'wrong of + person' judges a person's action. 'I'm sorry' is a direct, sincere apology!",
              ],
            },
            {
              en: [
                '"I\'m not sure why my friend reacted like that, teacher."',
                '"We had a small disagreement, teacher. I didn\'t think it was a big deal."',
                '"I just said what I thought, teacher. I didn\'t expect this reaction."',
              ],
              kr: [
                "왜 갑자기 화를 내는지 모르겠어요, 선생님.",
                "그냥 작은 의견 차이였어요, 선생님. 큰 일인지 몰랐어요.",
                "제 생각을 말했을 뿐이에요, 선생님. 이런 반응은 예상 못 했어요.",
              ],
              type: "neutral",
              emoji: "🤍",
              friendReaction: [
                '"Your words had an impact whether you intended them to or not. Think about what you said before the race."',
                '"Small to you isn\'t always small to the other person. Try to understand how your friend felt."',
                '"Intent and impact are different things. Even if you didn\'t mean harm, your words still hurt."',
              ],
              scene: {
                hero: "hero_lookaway",
                friend: "friend1_thinking",
                extra: "teacher_thinking",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Think about the impact of your words! 😐",
                "It wasn't small to your friend! 😐",
                "Intent and impact are different! 😐",
              ],
              emotionText: [
                "Saying you don't know why your friend reacted that way avoids reflecting on your own words. Your teacher points you back!",
                "Calling it a small disagreement minimizes your friend's feelings. Your teacher gently corrects the framing!",
                "Saying you didn't expect this reaction shifts focus from your words to your friend's response. Your teacher helps you refocus!",
              ],
              grammarText: [
                "'I'm not sure why my friend reacted like that' — indirect expression of uncertainty. 'Reacted like that' refers to the manner!",
                "'I didn't think it was a big deal' — past simple negative + adjective phrase. Minimizing language!",
                "'I just said what I thought' — 'just' limits the scope. 'I didn't expect this reaction' — past simple negative for surprise!",
              ],
            },
            {
              en: [
                '"I was just being honest, teacher. Why is honesty a problem?"',
                "\"I only said the truth, teacher. If they can't handle it, that's on them.\"",
                "\"I just said they're not a good runner, teacher. That's a fact. Why is everyone upset?\"",
              ],
              kr: [
                "아니 그럼 못뛰는 걸 뭐라고 해요, 선생님?",
                "사실을 말한 건데요, 선생님. 받아들이지 못하면 그쪽 문제 아닌가요?",
                "달리기를 잘 못한다고 했을 뿐이에요, 선생님. 그게 사실인데 왜 다들 화내요?",
              ],
              type: "bad",
              emoji: "💔",
              friendReaction: [
                "\"Honesty without consideration for others' feelings isn't a virtue — it's carelessness. Think about the timing and the way you said it.\"",
                "\"'If they can't handle it' is not how we treat each other here. Being right doesn't give you permission to be cruel.\"",
                '"Facts can still be delivered kindly. What you said may be true, but how and when you said it made all the difference."',
              ],
              scene: {
                hero: "hero_angry",
                friend: "friend1_angry",
                extra: "teacher_angry",
              },
              newCharacter: "teacher",
              hideFriend: true,
              feedbackTitle: [
                "Honesty without kindness hurts! 😨",
                "Being right doesn't excuse being cruel! 😨",
                "How and when matters as much as what! 😨",
              ],
              emotionText: [
                "Defending yourself by questioning why honesty is a problem misses the real issue. Your teacher helps you see the difference between honesty and cruelty!",
                "Saying it's the other person's problem if they can't handle the truth is deeply dismissive. Your teacher addresses this directly!",
                "Calling it a fact and wondering why people are upset shows you don't yet understand the impact of your words. Your teacher explains gently but firmly!",
              ],
              grammarText: [
                "'Why is honesty a problem?' — a rhetorical question used defensively. Implies the speaker sees no fault in their actions!",
                "'If they can't handle it, that's on them' — a conditional clause shifting blame. 'That's on them' means it's their responsibility!",
                "'That's a fact' — a blunt declarative sentence. 'Why is everyone upset?' — rhetorical question showing lack of empathy!",
              ],
            },
          ],
        },
      },
    },
  ],
};

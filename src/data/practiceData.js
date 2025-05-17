// Word classes data (reduced to only nouns, verbs, adverbs and adjectives)
export const wordClassesData = [
  {
    id: 1,
    term: "Noun",
    definition: "A word that names a person, place, thing, or idea.",
    examples: ["dog", "London", "happiness", "teacher"],
    practice: [
      {
        question: "Identify the noun in this sentence: 'The cat sat on the mat.'",
        options: ["The", "cat", "sat", "on"],
        answer: "cat",
        explanation: "Cat is a noun because it names an animal/thing."
      },
      {
        question: "Identify the noun in this sentence: 'Sarah enjoys reading books.'",
        options: ["Sarah", "enjoys", "reading", "books"],
        answer: "books",
        explanation: "Books are things, so books is a noun."
      },
      {
        question: "Which is a noun?",
        options: ["quickly", "happy", "John", "write"],
        answer: "John",
        explanation: "John is a name of a person."
      },
      {
        question: "Identify the noun: 'The teacher gave homework.'",
        options: ["The", "teacher", "gave", "homework"],
        answer: "teacher",
        explanation: "Teacher is a person."
      }
    ]
  },
  {
    id: 2,
    term: "Verb",
    definition: "A word that shows action or state of being.",
    examples: ["run", "think", "is", "believe"],
    practice: [
      {
        question: "Identify the verb in this sentence: 'She runs every morning.'",
        options: ["She", "runs", "every", "morning"],
        answer: "runs",
        explanation: "Runs is a verb because it shows an action."
      },
      {
        question: "Identify the verb in this sentence: 'They are happy.'",
        options: ["They", "are", "happy"],
        answer: "are",
        explanation: "Are is a verb showing state of being."
      },
      {
        question: "Which is a verb?",
        options: ["slowly", "table", "dance", "beautiful"],
        answer: "dance",
        explanation: "Dance is an action."
      },
      {
        question: "Identify the verb: 'The dog barked loudly.'",
        options: ["The", "dog", "barked", "loudly"],
        answer: "barked",
        explanation: "Barked is the action in the sentence."
      }
    ]
  },
  {
    id: 3,
    term: "Adjective",
    definition: "A word that describes or modifies a noun.",
    examples: ["happy", "blue", "tall", "delicious"],
    practice: [
      {
        question: "Identify the adjective in this sentence: 'The tall building is new.'",
        options: ["The", "tall", "building", "new"],
        answer: "tall",
        explanation: "Tall describes the building (a noun)."
      },
      {
        question: "Identify the adjective in this sentence: 'The red car drove fast.'",
        options: ["The", "red", "car", "fast"],
        answer: "red",
        explanation: "Red describes the car (a noun)."
      },
      {
        question: "Which is an adjective?",
        options: ["quickly", "happy", "walk", "they"],
        answer: "happy",
        explanation: "Happy describes a state or feeling."
      },
      {
        question: "Identify the adjective: 'The delicious cake was eaten.'",
        options: ["The", "delicious", "cake", "eaten"],
        answer: "delicious",
        explanation: "Delicious describes the cake."
      }
    ]
  },
  {
    id: 4,
    term: "Adverb",
    definition: "A word that modifies a verb, adjective, or other adverb.",
    examples: ["quickly", "very", "well", "tomorrow"],
    practice: [
      {
        question: "Identify the adverb in this sentence: 'She ran quickly.'",
        options: ["She", "ran", "quickly"],
        answer: "quickly",
        explanation: "Quickly tells how she ran (modifies a verb)."
      },
      {
        question: "Identify the adverb in this sentence: 'The test was extremely difficult.'",
        options: ["The", "test", "extremely", "difficult"],
        answer: "extremely",
        explanation: "Extremely tells how difficult the test was (modifies an adjective)."
      },
      {
        question: "Which is an adverb?",
        options: ["slowly", "table", "run", "green"],
        answer: "slowly",
        explanation: "Slowly describes how an action is done."
      },
      {
        question: "Identify the adverb: 'He spoke very loudly.'",
        options: ["He", "spoke", "very", "loudly"],
        answer: "loudly",
        explanation: "Loudly describes how he spoke."
      }
    ]
  }
];

// Main language devices that will be directly accessible 
export const languageDevicesData = [
  {
    id: 1,
    term: "Metaphor",
    definition: "A comparison between two things without using 'like' or 'as'.",
    examples: ["He has a heart of stone.", "Time is money."],
    practice: [
      {
        question: "Which sentence contains a metaphor?",
        options: [
          "Life is like a box of chocolates.", 
          "She is as quiet as a mouse.", 
          "He is an early bird.", 
          "The trees were tall."
        ],
        answer: "He is an early bird.",
        explanation: "It directly compares him to a bird without using 'like' or 'as'."
      },
      {
        question: "Identify the metaphor:",
        options: [
          "She was like a star.", 
          "Her eyes were diamonds.", 
          "The baby was as loud as a siren.", 
          "The food was very tasty."
        ],
        answer: "Her eyes were diamonds.",
        explanation: "This directly compares eyes to diamonds without using 'like' or 'as'."
      }
    ]
  },
  {
    id: 2,
    term: "Simile",
    definition: "A comparison between two things using 'like' or 'as'.",
    examples: ["She runs like the wind.", "He is as tall as a giraffe."],
    practice: [
      {
        question: "Which sentence contains a simile?",
        options: [
          "The night was dark.", 
          "The stars are diamonds in the sky.", 
          "He eats like a horse.", 
          "Time flies."
        ],
        answer: "He eats like a horse.",
        explanation: "This uses 'like' to compare how he eats to a horse."
      },
      {
        question: "Identify the simile:",
        options: [
          "Her smile is sunshine.", 
          "She is as brave as a lion.", 
          "The city sleeps.", 
          "He broke the silence."
        ],
        answer: "She is as brave as a lion.",
        explanation: "This uses 'as...as' to compare her bravery to a lion."
      }
    ]
  },
  {
    id: 3,
    term: "Personification",
    definition: "Giving human qualities to non-human things.",
    examples: ["The wind whispered through the trees.", "The sun smiled down on us."],
    practice: [
      {
        question: "Which sentence uses personification?",
        options: [
          "The dog was brown.", 
          "The door creaked loudly.", 
          "The trees waved their branches at me.", 
          "The house was old."
        ],
        answer: "The trees waved their branches at me.",
        explanation: "Trees are given the human action of waving."
      },
      {
        question: "Identify the personification:",
        options: [
          "The river flows quickly.", 
          "The window was broken.", 
          "The thunder grumbled in the distance.", 
          "The snow was white."
        ],
        answer: "The thunder grumbled in the distance.",
        explanation: "Thunder is given the human ability to grumble."
      }
    ]
  },
  {
    id: 4,
    term: "Alliteration",
    definition: "Repetition of the same consonant sound at the beginning of nearby words.",
    examples: ["Peter Piper picked a peck of pickled peppers.", "She sells seashells by the seashore."],
    practice: [
      {
        question: "Which phrase uses alliteration?",
        options: ["Running rapidly", "Blue sky", "Happy days", "Cats and dogs"],
        answer: "Running rapidly",
        explanation: "Both words start with the 'r' sound."
      },
      {
        question: "Identify the alliteration:",
        options: [
          "Busy bees buzz.", 
          "The rain fell heavily.", 
          "She went to the store.", 
          "The dog barked at the cat."
        ],
        answer: "Busy bees buzz.",
        explanation: "All three words begin with the 'b' sound."
      }
    ]
  },
  {
    id: 5,
    term: "Onomatopoeia",
    definition: "Words that sound like what they describe.",
    examples: ["Buzz", "Splash", "Bang", "Meow"],
    practice: [
      {
        question: "Which word is an example of onomatopoeia?",
        options: ["Beautiful", "Crash", "Running", "Happy"],
        answer: "Crash",
        explanation: "Crash sounds like the noise it describes."
      },
      {
        question: "Identify the onomatopoeia:",
        options: ["Flower", "Thump", "Quickly", "Building"],
        answer: "Thump",
        explanation: "Thump sounds like the noise it describes."
      }
    ]
  },
  {
    id: 6,
    term: "Hyperbole",
    definition: "Extreme exaggeration not meant to be taken literally.",
    examples: ["I'm so hungry I could eat a horse.", "I've told you a million times."],
    practice: [
      {
        question: "Which sentence contains hyperbole?",
        options: [
          "It was a hot day.", 
          "The movie was good.", 
          "I'm dying of laughter.", 
          "She speaks French."
        ],
        answer: "I'm dying of laughter.",
        explanation: "This is an extreme exaggeration - the person isn't actually dying."
      },
      {
        question: "Identify the hyperbole:",
        options: [
          "She is tall.", 
          "I've walked miles to see you.", 
          "It's raining heavily.", 
          "My backpack weighs a ton."
        ],
        answer: "My backpack weighs a ton.",
        explanation: "This is a huge exaggeration - the backpack doesn't literally weigh a ton."
      }
    ]
  },
  {
    id: 7,
    term: "Oxymoron",
    definition: "A phrase combining contradictory terms.",
    examples: ["Jumbo shrimp", "Deafening silence", "Living dead"],
    practice: [
      {
        question: "Which phrase is an oxymoron?",
        options: ["Dark night", "Original copy", "Tall building", "Hot sun"],
        answer: "Original copy",
        explanation: "'Original' and 'copy' are contradictory terms used together."
      },
      {
        question: "Identify the oxymoron:",
        options: [
          "Happy days", 
          "Cruel kindness", 
          "Big house", 
          "Fast car"
        ],
        answer: "Cruel kindness",
        explanation: "'Cruel' and 'kindness' are contradictory terms combined."
      }
    ]
  },
  {
    id: 8,
    term: "Juxtaposition",
    definition: "Placing contrasting elements side by side for effect.",
    examples: ["The best of times, the worst of times.", "Rich man, poor man."],
    practice: [
      {
        question: "Which phrase shows juxtaposition?",
        options: ["Happy days", "Bitter enemies", "Love and hate", "Beautiful flowers"],
        answer: "Love and hate",
        explanation: "It places opposite emotions side by side."
      },
      {
        question: "Identify the juxtaposition:",
        options: [
          "Big and small", 
          "Table and chair", 
          "Running fast", 
          "Sunny weather"
        ],
        answer: "Big and small",
        explanation: "It places contrasting sizes side by side."
      }
    ]
  },
  {
    id: 9,
    term: "Irony",
    definition: "When something happens that's opposite to what's expected.",
    examples: ["A fire station burning down.", "A traffic cop getting a parking ticket."],
    practice: [
      {
        question: "Which situation is ironic?",
        options: [
          "A chef cooking dinner", 
          "A dentist with perfect teeth", 
          "A police officer getting robbed", 
          "A student studying for a test"
        ],
        answer: "A police officer getting robbed",
        explanation: "It's opposite to what's expected since police officers typically prevent robberies."
      },
      {
        question: "Identify the irony:",
        options: [
          "A teacher teaching a class.", 
          "A doctor falling ill.", 
          "A baker baking bread.", 
          "A painter painting a picture."
        ],
        answer: "A doctor falling ill.",
        explanation: "Doctors are expected to stay healthy, so it's ironic when they get sick."
      }
    ]
  },
  {
    id: 10,
    term: "Repetition",
    definition: "Using the same word or phrase multiple times for emphasis.",
    examples: ["I was alone, alone, all alone.", "Never give up, never surrender."],
    practice: [
      {
        question: "Which sentence uses repetition?",
        options: [
          "She walked to the park.", 
          "The big, scary monster appeared.", 
          "So many books, so little time.", 
          "Stop, stop, stop this noise right now!"
        ],
        answer: "Stop, stop, stop this noise right now!",
        explanation: "'Stop' is repeated three times for emphasis."
      },
      {
        question: "Identify the repetition:",
        options: [
          "The dog barked loudly.", 
          "I hate, hate, hate being late.", 
          "The sky is blue.", 
          "She runs fast."
        ],
        answer: "I hate, hate, hate being late.",
        explanation: "The word 'hate' is repeated three times for emphasis."
      }
    ]
  }
];

// Additional language devices for the "More Devices" section
export const moreLanguageDevicesData = [
  {
    id: 1,
    term: "Pathetic Fallacy",
    definition: "Attributing human emotions to nature or inanimate objects, often to reflect a character's mood.",
    examples: ["The clouds wept as she left.", "The wind howled in anger."],
    practice: [
      {
        question: "Which sentence demonstrates pathetic fallacy?",
        options: [
          "The sun shone brightly.", 
          "The mountains stood tall.", 
          "The sky cried tears of rain on the funeral day.", 
          "The flowers were colorful."
        ],
        answer: "The sky cried tears of rain on the funeral day.",
        explanation: "Weather (rain) is given the human emotion of sadness to match the mood of a funeral."
      },
      {
        question: "Identify the pathetic fallacy:",
        options: [
          "The house was old and dilapidated.", 
          "The wind sighed through the trees.", 
          "The birds flew south for winter.", 
          "The river flowed downstream."
        ],
        answer: "The wind sighed through the trees.",
        explanation: "The wind is given the human action of sighing to create a melancholic mood."
      }
    ]
  },
  {
    id: 2,
    term: "Extended Metaphor",
    definition: "A metaphor that continues throughout multiple sentences or an entire text.",
    examples: ["Life is a journey: we travel along roads, face obstacles, and eventually reach our destination.", "His life was a roller coaster, with thrilling highs and terrifying lows. Sometimes the ride was smooth, sometimes it jerked him around violently."],
    practice: [
      {
        question: "Which example shows an extended metaphor?",
        options: [
          "She's as brave as a lion.", 
          "The classroom was a zoo. Students howled and screeched, swung from the lights, and prowled between desks.", 
          "The tree was tall.", 
          "Time flies."
        ],
        answer: "The classroom was a zoo. Students howled and screeched, swung from the lights, and prowled between desks.",
        explanation: "The zoo metaphor is extended with multiple animal-related comparisons."
      },
      {
        question: "Identify the extended metaphor:",
        options: [
          "He ran quickly to the store.", 
          "Her mind was a computer, processing data rapidly and storing information in perfect sequence. Even her dreams were like screenshots of the day's events.", 
          "The dog barked loudly.", 
          "It was raining heavily yesterday."
        ],
        answer: "Her mind was a computer, processing data rapidly and storing information in perfect sequence. Even her dreams were like screenshots of the day's events.",
        explanation: "The computer metaphor is sustained and developed over multiple sentences."
      }
    ]
  },
  {
    id: 3,
    term: "Symbolism",
    definition: "Using an object, person, or color to represent an abstract idea or concept.",
    examples: ["A dove representing peace.", "A red rose symbolizing love."],
    practice: [
      {
        question: "Which is an example of symbolism?",
        options: [
          "The dog barked loudly.", 
          "She wore a crown to the party.", 
          "The black raven watching over the battlefield represented death.", 
          "The wind blew strongly."
        ],
        answer: "The black raven watching over the battlefield represented death.",
        explanation: "The raven symbolizes death, an abstract concept."
      },
      {
        question: "Identify the symbolism:",
        options: [
          "The boy ran across the field.", 
          "The chains that bound him represented his fear of change.", 
          "She spoke quietly.", 
          "The car was blue."
        ],
        answer: "The chains that bound him represented his fear of change.",
        explanation: "Physical chains are used to symbolize the abstract concept of fear."
      }
    ]
  },
  {
    id: 4,
    term: "Semantic Field",
    definition: "A group of words related in meaning, often used to reinforce a theme or setting.",
    examples: ["Using words like 'judge', 'courtroom', 'verdict', 'witness' (legal semantic field).", "Using 'waves', 'shore', 'sail', 'ocean' (sea semantic field)."],
    practice: [
      {
        question: "Which set of words represents a semantic field of war?",
        options: [
          "Blue, red, green, yellow", 
          "Happy, sad, angry, surprised", 
          "Battle, soldier, ammunition, enemy", 
          "Walk, run, jump, skip"
        ],
        answer: "Battle, soldier, ammunition, enemy",
        explanation: "All these words relate to the concept of war."
      },
      {
        question: "Identify the semantic field in: 'The chef garnished the dish, stirred the sauce, and checked if the meat was tender.'",
        options: [
          "Time", 
          "Cooking", 
          "Movement", 
          "Emotions"
        ],
        answer: "Cooking",
        explanation: "Chef, garnished, dish, stirred, sauce, meat, and tender all relate to cooking."
      }
    ]
  },
  {
    id: 5,
    term: "Rhetorical Question",
    definition: "A question asked for effect without expecting an answer.",
    examples: ["Why me?", "How could anyone not love this view?"],
    practice: [
      {
        question: "Which is a rhetorical question?",
        options: [
          "What time is it?", 
          "Where did you buy that shirt?", 
          "Isn't this weather just perfect?", 
          "Can you pass the salt?"
        ],
        answer: "Isn't this weather just perfect?",
        explanation: "This isn't asking for information but making a statement about the good weather."
      },
      {
        question: "Identify the rhetorical question:",
        options: [
          "What's your name?", 
          "How many times do I have to tell you?", 
          "Where is the nearest bank?", 
          "Did you complete your homework?"
        ],
        answer: "How many times do I have to tell you?",
        explanation: "The speaker doesn't expect a numerical answer but is expressing frustration."
      }
    ]
  },
  {
    id: 6,
    term: "Assonance",
    definition: "Repetition of vowel sounds in nearby words.",
    examples: ["The light of the fire is a sight.", "How now, brown cow."],
    practice: [
      {
        question: "Which phrase shows assonance?",
        options: [
          "Blue sky", 
          "Bright light might sight", 
          "Peter Piper picked", 
          "Fast car"
        ],
        answer: "Bright light might sight",
        explanation: "The 'i' sound is repeated in bright, light, might, and sight."
      },
      {
        question: "Identify the assonance:",
        options: [
          "She sells seashells", 
          "The black cat sat on the mat", 
          "Running quickly", 
          "The boy with the toy"
        ],
        answer: "The black cat sat on the mat",
        explanation: "The 'a' sound is repeated in black, cat, sat, and mat."
      }
    ]
  },
  {
    id: 7,
    term: "Sibilance",
    definition: "Repetition of 's', 'sh', and 'z' sounds for effect.",
    examples: ["The snake slithered silently.", "She sells seashells by the seashore."],
    practice: [
      {
        question: "Which sentence demonstrates sibilance?",
        options: [
          "The dog barked loudly.", 
          "Suzie sees the seaside shells.", 
          "The cat caught the mouse.", 
          "Running rapidly down the road."
        ],
        answer: "Suzie sees the seaside shells.",
        explanation: "The 's' sound is repeated in Suzie, sees, seaside, and shells."
      },
      {
        question: "Identify the sibilance:",
        options: [
          "Round and round the rugged rock", 
          "The waves crashed on the shore", 
          "Sweet dreams are made of this", 
          "The shadows swayed softly as she shuffled across the shore"
        ],
        answer: "The shadows swayed softly as she shuffled across the shore",
        explanation: "The 'sh' and 's' sounds are repeated throughout the sentence."
      }
    ]
  },
  {
    id: 8,
    term: "Euphemism",
    definition: "A milder word or phrase used in place of one considered harsh or offensive.",
    examples: ["Passed away (instead of died).", "Let go (instead of fired)."],
    practice: [
      {
        question: "Which phrase is a euphemism for 'died'?",
        options: [
          "Kicked the bucket", 
          "Fell over", 
          "Got sick", 
          "Went to sleep"
        ],
        answer: "Kicked the bucket",
        explanation: "This is a gentler way of saying someone died."
      },
      {
        question: "Identify the euphemism:",
        options: [
          "He is tall", 
          "She is poor", 
          "He is economically challenged", 
          "The car is red"
        ],
        answer: "He is economically challenged",
        explanation: "This is a gentler way of saying someone is poor."
      }
    ]
  },
  {
    id: 9,
    term: "Emotive Language",
    definition: "Words and phrases meant to evoke an emotional response.",
    examples: ["The innocent children suffered terribly.", "The brutal dictator oppressed his people."],
    practice: [
      {
        question: "Which sentence uses emotive language?",
        options: [
          "The car is blue.", 
          "They walked to school.", 
          "The helpless puppy was abandoned in the cold, cruel winter.", 
          "There are five people in the room."
        ],
        answer: "The helpless puppy was abandoned in the cold, cruel winter.",
        explanation: "Words like 'helpless', 'abandoned', and 'cold, cruel' are used to evoke sympathy."
      },
      {
        question: "Identify the emotive language:",
        options: [
          "The book is on the table.", 
          "The magnificent hero bravely sacrificed everything for his beloved country.", 
          "She went to the store.", 
          "It rained yesterday."
        ],
        answer: "The magnificent hero bravely sacrificed everything for his beloved country.",
        explanation: "Words like 'magnificent', 'bravely', 'sacrificed', and 'beloved' evoke feelings of admiration and patriotism."
      }
    ]
  },
  {
    id: 10,
    term: "Rule of Three",
    definition: "Using three elements (words, phrases, or ideas) for effect and emphasis.",
    examples: ["Education, Education, Education.", "Blood, sweat, and tears."],
    practice: [
      {
        question: "Which sentence uses the rule of three?",
        options: [
          "He went to the store.", 
          "She likes apples.", 
          "Reading, writing, and arithmetic are the foundation of education.", 
          "The dog is brown."
        ],
        answer: "Reading, writing, and arithmetic are the foundation of education.",
        explanation: "Three elements (reading, writing, arithmetic) are listed for emphasis."
      },
      {
        question: "Identify the rule of three:",
        options: [
          "The weather is nice today.", 
          "I came, I saw, I conquered.", 
          "She bought a new car.", 
          "The children played in the garden."
        ],
        answer: "I came, I saw, I conquered.",
        explanation: "Three parallel phrases are used for powerful rhetorical effect."
      }
    ]
  },
  {
    id: 11,
    term: "Facts/Statistics",
    definition: "Using numerical data or factual information to support an argument.",
    examples: ["90% of customers reported satisfaction.", "Over 500 people attended the event."],
    practice: [
      {
        question: "Which sentence uses facts/statistics?",
        options: [
          "The sunset was beautiful.", 
          "According to the survey, 78% of students prefer online learning.", 
          "I believe this is the best option.", 
          "She felt happy about the decision."
        ],
        answer: "According to the survey, 78% of students prefer online learning.",
        explanation: "This presents numerical data (78%) from a survey."
      },
      {
        question: "Identify the use of facts/statistics:",
        options: [
          "I think this policy is wrong.", 
          "The sky is blue.", 
          "Studies show that reading for just 20 minutes daily exposes children to 1.8 million words per year.", 
          "The movie was entertaining."
        ],
        answer: "Studies show that reading for just 20 minutes daily exposes children to 1.8 million words per year.",
        explanation: "This presents specific numerical data (20 minutes, 1.8 million words) to support the value of reading."
      }
    ]
  },
  {
    id: 12,
    term: "Plosives",
    definition: "Use of 'p', 'b', 't', 'd', 'k', and 'g' sounds for impact.",
    examples: ["The boulder bounced down the hill.", "Peter picked a peck of pickled peppers."],
    practice: [
      {
        question: "Which sentence uses plosives for effect?",
        options: [
          "She sells seashells by the seashore.", 
          "The balloon popped with a bang.", 
          "The river flowed smoothly.", 
          "The fire flickered in the darkness."
        ],
        answer: "The balloon popped with a bang.",
        explanation: "The 'b', 'p', and 'b' sounds in 'balloon', 'popped', and 'bang' create a percussive effect."
      },
      {
        question: "Identify the use of plosives:",
        options: [
          "The wind whistled through the trees.", 
          "The dog barked at the cat.", 
          "The determined detective discovered damning evidence.", 
          "The sun shone brightly."
        ],
        answer: "The determined detective discovered damning evidence.",
        explanation: "The repeated 'd' sounds create a hard, impactful effect."
      }
    ]
  },
  {
    id: 13,
    term: "Zoomorphism",
    definition: "Attributing animal characteristics to humans or non-animal objects.",
    examples: ["He prowled around the office like a tiger.", "The car purred down the road."],
    practice: [
      {
        question: "Which sentence demonstrates zoomorphism?",
        options: [
          "The cat meowed loudly.", 
          "She spoke softly.", 
          "The crowd roared with excitement.", 
          "The boy ran quickly."
        ],
        answer: "The crowd roared with excitement.",
        explanation: "The animal characteristic of roaring is applied to a human crowd."
      },
      {
        question: "Identify the zoomorphism:",
        options: [
          "The bird flew across the sky.", 
          "The woman was beautiful.", 
          "The snake slithered through the grass.", 
          "The manager barked orders at his team."
        ],
        answer: "The manager barked orders at his team.",
        explanation: "The animal action of barking is attributed to a human."
      }
    ]
  },
  {
    id: 14,
    term: "Opinion",
    definition: "A statement expressing a personal viewpoint rather than a fact.",
    examples: ["I think this is the best book ever written.", "In my view, the government's policy is misguided."],
    practice: [
      {
        question: "Which statement is an opinion rather than a fact?",
        options: [
          "Water boils at 100°C at sea level.", 
          "Paris is the capital of France.", 
          "The Godfather is the greatest film ever made.", 
          "The Earth orbits the Sun."
        ],
        answer: "The Godfather is the greatest film ever made.",
        explanation: "This is a subjective judgment that cannot be proven, rather than a verifiable fact."
      },
      {
        question: "Identify the opinion:",
        options: [
          "London is in England.", 
          "There are seven days in a week.", 
          "Chocolate ice cream tastes better than vanilla.", 
          "The heart pumps blood around the body."
        ],
        answer: "Chocolate ice cream tastes better than vanilla.",
        explanation: "This is a subjective preference rather than an objective fact."
      }
    ]
  }
];
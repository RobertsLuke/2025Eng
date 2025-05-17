// Data file for poem quotes
export const poemsList = [
  {
    id: "london",
    title: "London",
    author: "William Blake",
    form: "Narrative",
    description: "William Blake's poem about the suffering he witnesses in London during the Industrial Revolution."
  },
  {
    id: "bayonet-charge",
    title: "Bayonet Charge",
    author: "Ted Hughes",
    form: "Epic",
    description: "Ted Hughes' violent poem depicts a soldier's experience during a bayonet charge, examining the clash between patriotic ideals and the brutal reality of warfare."
  },
  {
    id: "remains",
    title: "Remains",
    author: "Simon Armitage",
    form: "Monologue",
    description: "Simon Armitage's powerful poem depicts a soldier haunted by the memory of killing a looter during combat, exploring the psychological aftermath of war."
  },
  {
    id: "kamikaze",
    title: "Kamikaze",
    author: "Beatrice Garland",
    form: "Narrative/Free Verse",
    description: "Beatrice Garland's poem explores a Japanese pilot who turns back from his kamikaze mission and faces the devastating social consequences of his choice."
  },
  {
    id: "mld",
    title: "My Last Duchess",
    author: "Robert Browning",
    form: "Dramatic Monologue",
    description: "Robert Browning's chilling poem features a Duke speaking to a visitor about a portrait of his deceased wife, revealing his controlling and murderous nature."
  }
];

// London quotes
export const londonQuotes = [
  {
    id: 1,
    quote: "Marks of weakness, marks of woe",
    devices: [
      {
        name: "Repetition",
        explanation: "Repetition of \"marks of\" at the beginning of phrases"
      },
      {
        name: "Hyperbole",
        explanation: "Suggests everyone the speaker encounters shows visible signs of suffering"
      }
    ],
    analysis: "This quote establishes the visible suffering in urban society, making it effective for comparing with other poems that examine social conditions, class struggles, or the contrast between idealized society and harsh reality.",
    practice: [
      {
        question: "What language device is shown in \"Marks of weakness, marks of woe\"?",
        options: ["Simile", "Repetition", "Alliteration", "Onomatopoeia"],
        answer: "Repetition",
        explanation: "The phrase uses repetition of \"marks of\" to emphasize the pervasive suffering in London."
      },
      {
        question: "How could this quote be used in a comparison with another poem?",
        options: [
          "To discuss rhyme schemes", 
          "To compare different settings", 
          "To examine social conditions and suffering", 
          "To analyze dialogue between characters"
        ],
        answer: "To examine social conditions and suffering",
        explanation: "This quote highlights visible suffering in urban society, making it useful to compare with poems exploring social conditions or class struggles."
      }
    ]
  },
  {
    id: 2,
    quote: "The mind-forged manacles I hear",
    devices: [
      {
        name: "Volta",
        explanation: "Turning point revealing the mental/psychological nature of oppression"
      },
      {
        name: "Symbolism",
        explanation: "Manacles represent psychological imprisonment created by society"
      }
    ],
    analysis: "This metaphor of psychological imprisonment works well for comparing with poems that explore themes of freedom vs. constraint, social conditioning, or institutional control over individuals.",
    practice: [
      {
        question: "What do the \"mind-forged manacles\" symbolize in the poem?",
        options: [
          "Physical chains", 
          "Psychological imprisonment", 
          "Urban architecture", 
          "Religious doctrine"
        ],
        answer: "Psychological imprisonment",
        explanation: "Blake uses this metaphor to show how people are mentally constrained by society and its systems."
      },
      {
        question: "Which theme is best explored through this quote?",
        options: [
          "Nature vs. civilization", 
          "Freedom vs. constraint", 
          "Love and romance", 
          "Family relationships"
        ],
        answer: "Freedom vs. constraint",
        explanation: "The quote directly addresses how societal restrictions create psychological constraints on people's minds."
      }
    ]
  },
  {
    id: 3,
    quote: "And the hapless soldier's sigh / Runs in blood down palace walls",
    devices: [
      {
        name: "Personification",
        explanation: "Gives human qualities to the sigh which \"runs\" in blood"
      },
      {
        name: "Oxymoron",
        explanation: "Contrasts the powerless soldier with the powerful palace"
      }
    ],
    analysis: "This powerful image juxtaposes the suffering of common people against institutions of power, making it valuable for comparing with poems about war, sacrifice, inequality, or the relationship between rulers and the ruled.",
    practice: [
      {
        question: "Which language device is used in \"the hapless soldier's sigh / Runs in blood down palace walls\"?",
        options: ["Metaphor", "Personification", "Alliteration", "Simile"],
        answer: "Personification",
        explanation: "The sigh is given the human ability to 'run' in blood, personifying an inanimate sound."
      },
      {
        question: "What contrast is established in this quote?",
        options: [
          "Youth vs. age", 
          "City vs. countryside", 
          "Common people vs. institutions of power", 
          "Past vs. present"
        ],
        answer: "Common people vs. institutions of power",
        explanation: "The quote juxtaposes the suffering of ordinary soldiers against palaces (representing authority/royalty), highlighting inequality."
      }
    ]
  }
];

// Bayonet Charge quotes
export const bayonetChargeQuotes = [
  {
    id: 1,
    quote: "Bullets smacking the belly out of the air",
    devices: [
      {
        name: "Personification",
        explanation: "Gives human attributes to air having a \"belly\""
      },
      {
        name: "Verb choice",
        explanation: "\"Smacking\" creates vivid auditory and physical imagery"
      }
    ],
    analysis: "This visceral imagery of violence can be compared with other war poems' depictions of combat, contrasting with more sanitized or glorified portrayals of battle.",
    practice: [
      {
        question: "What language device is used in 'Bullets smacking the belly out of the air'?",
        options: ["Simile", "Personification", "Alliteration", "Repetition"],
        answer: "Personification",
        explanation: "The air is given the human attribute of having a 'belly', personifying it."
      },
      {
        question: "What effect does the verb 'smacking' create in this quote?",
        options: [
          "A peaceful atmosphere", 
          "A gentle sensation", 
          "Vivid auditory and physical imagery", 
          "A sense of distance from the battle"
        ],
        answer: "Vivid auditory and physical imagery",
        explanation: "The verb 'smacking' creates a strong, visceral sound and physical impact that immerses the reader in the violence of battle."
      }
    ]
  },
  {
    id: 2,
    quote: "In bewilderment then he almost stopped",
    devices: [
      {
        name: "Volta/turning point",
        explanation: "Marks a shift from automatic action to consciousness"
      },
      {
        name: "Symbolism",
        explanation: "Represents the moment of realization amid chaos"
      },
      {
        name: "Juxtaposition",
        explanation: "Behavior goes against expected of a soldier and patriarchy"
      }
    ],
    analysis: "This moment of psychological clarity works well for comparing with poems that explore the mental impact of war or sudden moments of realization during traumatic experiences.",
    practice: [
      {
        question: "What does the soldier's moment of 'bewilderment' represent in the poem?",
        options: [
          "His physical exhaustion", 
          "His anger at the enemy", 
          "A shift from automatic action to consciousness", 
          "His excitement about battle"
        ],
        answer: "A shift from automatic action to consciousness",
        explanation: "This moment represents the soldier suddenly becoming conscious of his situation and questioning his automatic actions."
      },
      {
        question: "How could this quote be used in comparison with other poems?",
        options: [
          "To discuss rhyme schemes", 
          "To explore the mental impact of war and traumatic realizations", 
          "To examine landscape descriptions", 
          "To analyze different weapons used in warfare"
        ],
        answer: "To explore the mental impact of war and traumatic realizations",
        explanation: "This quote reveals the psychological effect of combat, making it useful for comparing with other poems that explore mental trauma or moments of sudden clarity in war."
      }
    ]
  },
  {
    id: 3,
    quote: "King, honour, human dignity, etcetera / Dropped like luxuries in a yelling alarm",
    devices: [
      {
        name: "List",
        explanation: "Enumerates abstract patriotic values"
      },
      {
        name: "Simile",
        explanation: "Compares discarded values to luxuries in an emergency"
      }
    ],
    analysis: "This critique of patriotic values being abandoned in the face of survival instinct pairs effectively with poems that question nationalism, propaganda, or the contrast between war's ideals and realities.",
    practice: [
      {
        question: "What language device is used in 'Dropped like luxuries in a yelling alarm'?",
        options: ["Metaphor", "Personification", "Simile", "Alliteration"],
        answer: "Simile",
        explanation: "This is a simile that compares patriotic values to luxuries abandoned during an emergency, using 'like' to make the comparison."
      },
      {
        question: "What is the effect of including 'etcetera' in the list of values?",
        options: [
          "To add more meaning to the values", 
          "To emphasize the importance of these concepts", 
          "To suggest there are too many values to list individually", 
          "To trivialize these abstract patriotic values"
        ],
        answer: "To trivialize these abstract patriotic values",
        explanation: "Using 'etcetera' reduces these supposedly important values to items on a mundane list, suggesting they become meaningless in the reality of combat."
      }
    ]
  }
];

export const remainsQuotes = [
  {
    id: 1,
    quote: "Well myself and somebody else and somebody else are all of the same mind, so all three of us open fire.",
    devices: [
      {
        name: "Juxtaposition",
        explanation: "Casual language ('Well') contrasts with the violent act"
      },
      {
        name: "Symbolism",
        explanation: "'same mind' represents collective guilt and shared responsibility"
      }
    ],
    analysis: "This depiction of group action and shared culpability works well for comparing with poems that explore moral responsibility, following orders, or the psychology of violence in groups.",
    practice: [
      {
        question: "What does the phrase 'all of the same mind' suggest about the soldiers?",
        options: [
          "They are telepathic", 
          "They share collective guilt and responsibility", 
          "They are thinking about different things", 
          "They are happy about their actions"
        ],
        answer: "They share collective guilt and responsibility",
        explanation: "This phrase suggests shared responsibility and collective decision-making, highlighting how guilt is distributed among the group."
      },
      {
        question: "What is the effect of the casual language ('Well') at the start of this quote?",
        options: [
          "It creates a formal tone", 
          "It juxtaposes with the violent act that follows", 
          "It suggests the speaker is educated", 
          "It indicates the event happened a long time ago"
        ],
        answer: "It juxtaposes with the violent act that follows",
        explanation: "The casual, conversational opening contrasts sharply with the violent action described, highlighting the disturbing normalization of violence."
      }
    ]
  },
  {
    id: 2,
    quote: "But I blink / and he bursts again through the doors of the bank. / Sleep, and he's probably armed, possibly not. / Dream, and he's torn apart by a dozen rounds.",
    devices: [
      {
        name: "Semantic field",
        explanation: "Words related to consciousness states (blink, sleep, dream)"
      },
      {
        name: "Foreshadowing",
        explanation: "Hints at the PTSD that will haunt the speaker"
      }
    ],
    analysis: "These lines depicting trauma's psychological aftermath can be compared with poems exploring mental scars of war, flashbacks, or the lasting impact of violence on perpetrators.",
    practice: [
      {
        question: "What semantic field is used in this quote?",
        options: [
          "Words related to weapons", 
          "Words related to consciousness states", 
          "Words related to banking", 
          "Words related to weather"
        ],
        answer: "Words related to consciousness states",
        explanation: "The quote uses 'blink,' 'sleep,' and 'dream' - all words related to different states of consciousness, showing how the memory invades all aspects of the speaker's mind."
      },
      {
        question: "What does this quote reveal about the speaker's experience?",
        options: [
          "He enjoys reminiscing about the past", 
          "He is suffering from post-traumatic flashbacks", 
          "He is planning another mission", 
          "He is celebrating his actions"
        ],
        answer: "He is suffering from post-traumatic flashbacks",
        explanation: "The quote shows how the memory of the killing keeps recurring in different states of consciousness, revealing the speaker's PTSD and trauma."
      }
    ]
  },
  {
    id: 3,
    quote: "he's here in my head when I close my eyes, dug in behind enemy lines",
    devices: [
      {
        name: "Personification",
        explanation: "Gives the memory agency to invade the speaker's mind"
      },
      {
        name: "Military metaphor",
        explanation: "'dug in behind enemy lines' suggests the memory as an entrenched enemy"
      }
    ],
    analysis: "This portrayal of internal psychological warfare pairs effectively with poems about the invisible wounds of war, guilt, or the battle between past trauma and present reality.",
    practice: [
      {
        question: "What is the effect of the military metaphor in this quote?",
        options: [
          "It glorifies war", 
          "It compares the speaker's mind to a battlefield where he cannot escape the memory", 
          "It suggests the speaker wants to return to combat", 
          "It indicates the speaker is still in the army"
        ],
        answer: "It compares the speaker's mind to a battlefield where he cannot escape the memory",
        explanation: "The military metaphor 'dug in behind enemy lines' portrays the traumatic memory as an enemy combatant that has infiltrated and established a position in the speaker's mind."
      },
      {
        question: "How does this quote relate to the poem's overall theme?",
        options: [
          "It focuses on the excitement of battle", 
          "It explores the lasting psychological impact of killing", 
          "It examines military strategy", 
          "It celebrates military accomplishments"
        ],
        answer: "It explores the lasting psychological impact of killing",
        explanation: "The quote demonstrates how the traumatic memory has become an inescapable part of the soldier's consciousness, illustrating the profound psychological impact of his actions."
      }
    ]
  }
];

export const kamikazeQuotes = [
  {
    id: 1,
    quote: "a shaven head full of powerful incantations",
    devices: [
      {
        name: "Metaphor",
        explanation: "Describes the pilot's head as containing incantations rather than thoughts"
      },
      {
        name: "Symbolism",
        explanation: "The shaven head symbolizes the ritual preparation for a suicide mission"
      }
    ],
    analysis: "This quote shows the religious and ritualistic preparation for the kamikaze mission, useful for comparing with poems that explore duty, indoctrination, or the role of ritual in preparing for sacrifice.",
    practice: [
      {
        question: "What does the 'shaven head' symbolize in this quote?",
        options: [
          "Fashion preferences", 
          "Cleanliness standards", 
          "Ritual preparation for sacrifice", 
          "Military rank"
        ],
        answer: "Ritual preparation for sacrifice",
        explanation: "The shaven head represents the ritualistic preparation for death, similar to practices in various cultures where the head is shaved before significant sacrificial or transitional moments."
      },
      {
        question: "What is suggested by the phrase 'powerful incantations'?",
        options: [
          "The pilot was singing songs", 
          "The pilot was under the influence of religious and patriotic ideology", 
          "The pilot was using magic", 
          "The pilot was communicating with others"
        ],
        answer: "The pilot was under the influence of religious and patriotic ideology",
        explanation: "'Incantations' suggests the almost magical, spell-like quality of the patriotic and religious indoctrination that prepared pilots for suicide missions."
      }
    ]
  },
  {
    id: 2,
    quote: "my mother never spoke again in his presence",
    devices: [
      {
        name: "Volta",
        explanation: "Marks a turning point revealing the social consequences of his decision"
      },
      {
        name: "Juxtaposition",
        explanation: "Contrasts the mother's previous relationship with her new silence"
      }
    ],
    analysis: "This line powerfully expresses the family's rejection of the pilot, effective for comparing with poems that explore social ostracism, family dynamics, or the conflict between individual choice and societal expectations.",
    practice: [
      {
        question: "Why does the mother never speak again in his presence?",
        options: [
          "She is physically unable to speak", 
          "She is showing her shame and rejection of him for dishonoring the family", 
          "She doesn't understand his language", 
          "She is too busy with housework"
        ],
        answer: "She is showing her shame and rejection of him for dishonoring the family",
        explanation: "Her silence represents a deliberate social rejection, showing how his failure to complete the suicide mission brought shame on the family in Japanese society."
      },
      {
        question: "What literary technique does this quote demonstrate?",
        options: [
          "Onomatopoeia", 
          "Hyperbole", 
          "Volta (turning point)", 
          "Alliteration"
        ],
        answer: "Volta (turning point)",
        explanation: "This line marks a significant turning point in the poem where we see the devastating social consequences of the pilot's decision to return home."
      }
    ]
  },
  {
    id: 3,
    quote: "He must have wondered which had been the better way to die",
    devices: [
      {
        name: "Juxtaposition",
        explanation: "Contrasts physical death in battle with social death at home"
      },
      {
        name: "Symbolism",
        explanation: "Represents the impossible choice between different forms of death"
      }
    ],
    analysis: "This quote captures the central dilemma of the poem, valuable for comparing with poems that explore no-win situations, moral choices, or the different ways people can experience death (physical, social, spiritual).",
    practice: [
      {
        question: "What two options are being compared in this quote?",
        options: [
          "Dying at sea versus dying on land", 
          "Dying young versus dying old", 
          "Dying physically in battle versus living with social rejection", 
          "Dying alone versus dying with others"
        ],
        answer: "Dying physically in battle versus living with social rejection",
        explanation: "The quote compares the physical death he would have experienced as a kamikaze pilot with the social death (rejection and shame) he experiences by returning home."
      },
      {
        question: "What does this line suggest about Japanese culture during WWII?",
        options: [
          "They valued individual choice", 
          "They didn't care about military service", 
          "They had a strict code of honor where duty to country outweighed personal survival", 
          "They encouraged pilots to return home"
        ],
        answer: "They had a strict code of honor where duty to country outweighed personal survival",
        explanation: "The quote reveals the severe cultural consequences of choosing personal survival over sacrifice for one's country, showing how dishonor could make life unbearable."
      }
    ]
  }
];

export const mldQuotes = [
  {
    id: 1,
    quote: "That's my last Duchess painted on the wall, / Looking as if she were alive",
    devices: [
      {
        name: "Dramatic irony",
        explanation: "The listener knows she is dead, but the casual tone reveals the Duke's callousness"
      },
      {
        name: "Caesura",
        explanation: "The comma creates a pause that emphasizes 'Looking as if she were alive'"
      }
    ],
    analysis: "This opening statement immediately establishes the Duke's possessiveness and the Duchess's death, useful for comparing with poems that explore power, control, or male attitudes toward women.",
    practice: [
      {
        question: "What does the phrase 'That's my last Duchess' reveal about the Duke's character?",
        options: [
          "His artistic appreciation", 
          "His possessiveness and objectification of women", 
          "His sadness over her death", 
          "His financial generosity"
        ],
        answer: "His possessiveness and objectification of women",
        explanation: "The possessive pronoun 'my' and the word 'last' (implying there will be others) reveal his view of women as possessions or collectibles."
      },
      {
        question: "What effect is created by the phrase 'Looking as if she were alive'?",
        options: [
          "It shows the Duke's grief", 
          "It praises the artist's skill", 
          "It creates a chilling implication about her fate", 
          "It criticizes the painting's quality"
        ],
        answer: "It creates a chilling implication about her fate",
        explanation: "The phrase subtly reveals that she is no longer alive and creates a sinister undertone about how she might have died."
      }
    ]
  },
  {
    id: 2,
    quote: "I gave commands; Then all smiles stopped together",
    devices: [
      {
        name: "Euphemism/Ambiguity",
        explanation: "Avoids directly stating he had her killed"
      },
      {
        name: "Enjambment",
        explanation: "Creates emphasis on 'Then all smiles stopped together'"
      }
    ],
    analysis: "This chilling euphemism for murder reveals the Duke's tyranny and narcissism, useful for comparing with poems that explore power, violence, or the consequences of challenging authority.",
    practice: [
      {
        question: "What does the Duke mean by 'all smiles stopped together'?",
        options: [
          "The Duchess became unhappy", 
          "Everyone at court became serious", 
          "The Duchess was killed", 
          "The painting was covered up"
        ],
        answer: "The Duchess was killed",
        explanation: "This is a euphemistic way of saying the Duchess was killed - the Duke 'gave commands' that resulted in her death."
      },
      {
        question: "What does this quote reveal about power in the relationship?",
        options: [
          "That the Duchess controlled the Duke", 
          "That they had an equal partnership", 
          "That the Duke had absolute power of life and death", 
          "That the Duchess was physically stronger"
        ],
        answer: "That the Duke had absolute power of life and death",
        explanation: "The quote shows the Duke could simply 'give commands' to have his wife killed, demonstrating his absolute power over her life."
      }
    ]
  },
  {
    id: 3,
    quote: "She had / A heart—how shall I say?—too soon made glad, / Too easily impressed",
    devices: [
      {
        name: "Caesura",
        explanation: "Dashes interrupt the flow, mimicking the Duke's careful word choice"
      },
      {
        name: "Rhetorical question",
        explanation: "'How shall I say?' highlights his calculated speech"
      }
    ],
    analysis: "This quote reveals the Duchess's crime in the Duke's eyes—being too appreciative of others—useful for comparing with poems that explore jealousy, control, or the constraints placed on women.",
    practice: [
      {
        question: "What character trait of the Duchess is the Duke criticizing?",
        options: [
          "Her greed and materialism", 
          "Her friendliness and joy in simple pleasures", 
          "Her lack of artistic taste", 
          "Her physical appearance"
        ],
        answer: "Her friendliness and joy in simple pleasures",
        explanation: "The Duke is criticizing how easily pleased and impressed the Duchess was by others, revealing his jealousy of her friendly nature."
      },
      {
        question: "What is the effect of the interruption 'how shall I say?'?",
        options: [
          "It shows the Duke's uncertainty", 
          "It demonstrates the Duke's careful, calculated speech", 
          "It indicates the Duke's poor vocabulary", 
          "It suggests the Duke is asking for advice"
        ],
        answer: "It demonstrates the Duke's careful, calculated speech",
        explanation: "This interruption shows the Duke deliberately choosing his words to present himself favorably while revealing his controlling nature."
      }
    ]
  }
];
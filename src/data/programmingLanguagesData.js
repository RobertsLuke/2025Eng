// Programming Languages Module 1: Introduction to Programming Languages
export const programmingLanguagesData = [
  {
    id: 1,
    term: "Programming Languages: Basic Concepts",
    definition: "Programming languages are formal languages used to communicate instructions to a computer. They allow humans to write code that can be translated into machine-readable instructions.",
    examples: [
      "Examples include Python, Java, C++, JavaScript, and many others",
      "Each language has its own syntax, semantics, and purpose"
    ],
    practice: [
      {
        question: "What is the primary purpose of a programming language?",
        options: [
          "To create websites", 
          "To communicate instructions to a computer", 
          "To design user interfaces", 
          "To store data in databases"
        ],
        answer: "To communicate instructions to a computer",
        explanation: "Programming languages serve as the bridge between human-readable instructions and machine-executable code."
      },
      {
        question: "Which of the following is NOT a component of a programming language?",
        options: [
          "Syntax", 
          "Semantics", 
          "Userbase", 
          "Runtime environment"
        ],
        answer: "Userbase",
        explanation: "While a programming language might have a community of users, the userbase is not an inherent component of the language itself."
      }
    ]
  },
  {
    id: 2,
    term: "Categorization by Uses",
    definition: "Programming languages can be categorized based on their primary application domains and intended uses.",
    examples: [
      "Machine languages: Hardware-implemented languages (binary/hexadecimal instructions)",
      "Assembly languages: Low-level languages with mnemonic codes",
      "High-level languages: Machine-independent with natural language-like syntax (C, Java)",
      "System programming languages: For operating systems and low-level software (C, C++)",
      "Scripting languages: For automation and connecting applications (Python, PHP)",
      "Domain-specific languages: For specific application areas (SQL, PostScript)"
    ],
    practice: [
      {
        question: "Which category of programming languages is closest to the hardware?",
        options: [
          "High-level languages", 
          "Scripting languages", 
          "Machine languages", 
          "Domain-specific languages"
        ],
        answer: "Machine languages",
        explanation: "Machine languages consist of binary or hexadecimal instructions that are directly executed by the CPU, making them the closest to the hardware."
      },
      {
        question: "Which of the following is an example of a domain-specific language?",
        options: [
          "Java", 
          "C++", 
          "SQL", 
          "Python"
        ],
        answer: "SQL",
        explanation: "SQL (Structured Query Language) is designed specifically for managing and querying databases, making it a domain-specific language."
      },
      {
        question: "What is the primary characteristic of high-level programming languages?",
        options: [
          "They are always interpreted rather than compiled",
          "They are machine-independent and more readable than low-level languages",
          "They can only be used for web development",
          "They always follow the object-oriented paradigm"
        ],
        answer: "They are machine-independent and more readable than low-level languages",
        explanation: "High-level languages are designed to be machine-independent (not tied to specific hardware) and have syntax that is more readable and similar to natural language compared to low-level languages."
      }
    ]
  },
  {
    id: 3,
    term: "Categorization by Paradigms",
    definition: "Programming languages can also be categorized by their programming paradigms, which represent different approaches to structuring and organizing code.",
    examples: [
      "Procedural: Programs built from procedures and functions (C, Pascal)",
      "Object-oriented: Programs built around objects and classes (Java, C++)",
      "Functional: Programs built by applying functions to values (Haskell, LISP)",
      "Logic: Programs built using logical rules (Prolog)"
    ],
    practice: [
      {
        question: "Which of the following best describes a procedural programming language?",
        options: [
          "A language where programs are built by applying functions to values",
          "A language where programs are built from procedures and functions",
          "A language based on logical rules and pattern matching",
          "A language specifically designed for one application domain"
        ],
        answer: "A language where programs are built from procedures and functions",
        explanation: "Procedural programming languages focus on building programs from procedures (also known as subroutines or functions). Examples include C and Pascal."
      },
      {
        question: "Which programming paradigm focuses on applying functions to values and avoids changing state?",
        options: [
          "Object-oriented programming",
          "Procedural programming",
          "Functional programming",
          "Logic programming"
        ],
        answer: "Functional programming",
        explanation: "Functional programming treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. Languages like Haskell and LISP follow this paradigm."
      }
    ]
  },
  {
    id: 4,
    term: "Categorization by Task Specification",
    definition: "Programming languages can be classified by how they specify tasks to be performed.",
    examples: [
      "Imperative languages: Define computation as a sequence of statements that change program state (C, Java)",
      "Declarative languages: Define what should be accomplished without specifying how (SQL, Haskell, Prolog)"
    ],
    practice: [
      {
        question: "What is the key difference between imperative and declarative programming languages?",
        options: [
          "Imperative languages are always compiled, while declarative languages are always interpreted",
          "Imperative languages use variables, while declarative languages do not",
          "Imperative languages specify how to accomplish tasks step-by-step, while declarative languages focus on what should be accomplished",
          "Imperative languages are older, while declarative languages are newer"
        ],
        answer: "Imperative languages specify how to accomplish tasks step-by-step, while declarative languages focus on what should be accomplished",
        explanation: "Imperative languages focus on defining exactly how something should be done through step-by-step commands, while declarative languages focus on what should be accomplished without specifying the exact steps."
      },
      {
        question: "Which of the following is an example of a declarative programming language?",
        options: [
          "C",
          "Java",
          "Python",
          "SQL"
        ],
        answer: "SQL",
        explanation: "SQL is declarative because it specifies what data to retrieve without detailing how to retrieve it. The database system determines the execution details."
      }
    ]
  },
  {
    id: 5,
    term: "Programming Domains",
    definition: "Different programming languages are designed for and excel in specific application domains.",
    examples: [
      "Scientific applications: Large numbers of floating-point computations; use of arrays (e.g., Fortran)",
      "Business applications: Produce reports, use decimal numbers and characters (e.g., COBOL)",
      "Artificial intelligence: Symbols rather than numbers manipulated; use of linked lists (e.g., LISP)",
      "Systems programming: Need efficiency because of continuous use (e.g., C)",
      "Web Software: Eclectic collection of languages: markup (e.g., HTML), scripting (e.g., PHP), general-purpose (e.g., Java)"
    ],
    practice: [
      {
        question: "Which programming language was primarily designed for scientific computing?",
        options: [
          "COBOL",
          "Fortran",
          "HTML",
          "PHP"
        ],
        answer: "Fortran",
        explanation: "Fortran (FORmula TRANslating system) was designed for scientific and engineering calculations, featuring strong support for numerical computation and array handling."
      },
      {
        question: "Business applications traditionally used which programming language?",
        options: [
          "COBOL",
          "LISP",
          "C",
          "Java"
        ],
        answer: "COBOL",
        explanation: "COBOL (COmmon Business-Oriented Language) was designed specifically for business data processing and report generation, with strong decimal arithmetic capabilities."
      }
    ]
  }
];

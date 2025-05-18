// Language Categories by Uses module content in conversational, chunked format
export const languageCategoriesModule = {
  moduleTitle: "Language Categories by Uses",
  moduleDescription: "Explore how programming languages are categorized based on their intended use cases.",
  
  chunks: [
    {
      id: "machine-assembly",
      title: "Machine Languages and Assembly Languages",
      content: `
        Let's look at how programming languages are categorized by their level of abstraction and intended uses. We'll start with the most fundamental categories: machine languages and assembly languages.
        
        **Machine Languages**
        
        At the most basic level, we have machine languages - the native languages that computers actually understand. When we talk about machine languages, we're referring to:
        
        • Binary or hexadecimal instructions that the CPU can directly execute
        • Hardware-specific instruction sets (different for Intel processors vs. ARM processors, etc.)
        • Operations at the level of individual CPU registers, memory addresses, and hardware operations
        
        Here's what makes machine languages unique:
        
        Machine code consists of pure numbers - typically shown in hexadecimal format (base 16) because it's more compact than binary. For example, an instruction in Intel 64 architecture might look like:
        
        \`\`\`
        89 F8 A9 01 00 00 00 75 06 6B C0
        \`\`\`
        
        Each of these numbers is a specific operation code (opcode) or a parameter that tells the CPU exactly what to do - move data between specific registers, perform an arithmetic operation, jump to a different instruction, etc.
        
        As you can imagine, programming directly in machine code is extremely difficult and error-prone. It's like trying to build a house by controlling each individual muscle movement of the construction workers!
        
        **Assembly Languages**
        
        To make programming more manageable while maintaining close control over the hardware, assembly languages were developed. Assembly languages:
        
        • Use mnemonic codes (like "MOV" or "ADD") instead of numeric opcodes
        • Allow the use of named variables instead of direct memory addresses
        • Provide labels for jump targets and subroutine addresses
        • Let programmers add comments to explain what the code is doing
        
        Assembly languages make code more human-readable while maintaining a direct correspondence to machine code. Each assembly instruction typically maps to exactly one machine instruction.
        
        Here's what the same code might look like in assembly language:
        
        \`\`\`
        MOV EAX, ESI    ; Copy value from ESI to EAX register
        TEST EAX, 1     ; Test if the value is odd (check lowest bit)
        JNZ odd_number  ; Jump to "odd_number" label if non-zero result
        IMUL EAX, 3     ; Multiply EAX by 3
        \`\`\`
        
        While assembly language is much more readable than machine code, it's still very low-level and closely tied to the specific hardware it runs on. Different CPU architectures have different assembly languages.
      `,
      questions: [
        {
          question: "What is the primary format used to represent machine language instructions?",
          options: [
            "Text-based mnemonics like ADD and MOV",
            "Binary or hexadecimal numeric codes",
            "English-like statements",
            "Mathematical formulas"
          ],
          answer: 1,
          explanation: "Machine language instructions are represented as binary or hexadecimal numerical codes that directly correspond to specific CPU operations. These numeric codes are the actual instructions that the processor executes."
        },
        {
          question: "What is the main advantage assembly languages provide over machine languages?",
          options: [
            "They are completely portable across different CPU architectures",
            "They execute faster than machine language",
            "They use mnemonic codes and labels that are more human-readable",
            "They provide high-level abstractions like objects and classes"
          ],
          answer: 2,
          explanation: "Assembly languages use mnemonic codes (like MOV, ADD) and named labels instead of numeric codes, making programs more readable and easier to write while maintaining a direct correspondence to the underlying machine code."
        }
      ]
    },
    {
      id: "high-level-languages",
      title: "High-Level Languages",
      content: `
        Now that we understand low-level languages, let's move up the abstraction ladder to discuss high-level programming languages.
        
        **High-Level Languages**
        
        High-level languages represent a major leap in making programming more accessible and productive. These languages:
        
        • Are machine-independent (the same code can run on different types of computers)
        • Use syntax that's closer to natural language or mathematical notation
        • Handle many low-level details automatically
        • Focus on solving problems rather than controlling hardware
        
        Let's explore the key characteristics that define high-level languages:
        
        **1. Variables, Types, and Memory Abstraction**
        
        In high-level languages, you work with named variables rather than memory addresses. The language handles memory allocation for you. Variables typically have types (like integer, string, etc.) that help prevent errors.
        
        **2. Complex Expressions**
        
        High-level languages allow you to write complex expressions that would require multiple steps in assembly language. For example:
        
        \`\`\`
        result = 2 * (y^5) + sqrt(4.8) / (2 % 3)
        \`\`\`
        
        **3. Control Structures**
        
        Instead of using jumps and labels, high-level languages provide structured control flow with constructs like:
        
        • Conditionals (if/else statements)
        • Loops (for, while)
        • Switch/case statements
        
        **4. Composite Data Types**
        
        High-level languages let you create and work with more complex data structures:
        
        • Arrays (collections of similar items)
        • Structs/records (groupings of related data)
        • Objects (in object-oriented languages)
        
        **5. Functions and Modularization**
        
        Code can be organized into reusable functions or procedures, making it more modular and easier to understand.
        
        Examples of high-level languages include C, Java, Python, and many others. The exact level of abstraction varies - C is sometimes called a "middle-level" language because it provides some access to low-level operations while still offering high-level constructs.
        
        The key advantage of high-level languages is productivity - programmers can accomplish much more in the same amount of time compared to assembly language. The trade-off is that you have less direct control over the hardware, which might affect performance in some cases.
      `,
      questions: [
        {
          question: "What key characteristic distinguishes high-level languages from assembly languages?",
          options: [
            "High-level languages always execute faster",
            "High-level languages are machine-independent",
            "High-level languages cannot access hardware directly",
            "High-level languages use fewer variables"
          ],
          answer: 1,
          explanation: "A key distinguishing feature of high-level languages is that they are machine-independent - the same code can run on different computer architectures because the language implementation handles the hardware-specific details."
        },
        {
          question: "Which of the following is NOT typically a feature of high-level programming languages?",
          options: [
            "Variables and data types",
            "Control structures like loops and conditionals",
            "Direct access to CPU registers",
            "Functions and procedures"
          ],
          answer: 2,
          explanation: "Direct access to CPU registers is a characteristic of low-level languages like assembly. High-level languages abstract away these hardware details, focusing instead on problem-solving constructs."
        },
        {
          question: "What is the primary advantage of high-level languages over low-level languages?",
          options: [
            "They always produce faster code",
            "They use less memory",
            "They increase programmer productivity",
            "They provide better security"
          ],
          answer: 2,
          explanation: "The primary advantage of high-level languages is increased programmer productivity. By abstracting away hardware details and providing powerful constructs, they allow programmers to accomplish more in less time."
        }
      ]
    }
  ],
  
  completion: {
    message: "Excellent! You've completed the Language Categories by Uses module.",
    nextModule: "system-scripting-languages"
  }
};

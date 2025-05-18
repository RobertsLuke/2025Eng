// Programming Domains module content in conversational, chunked format
export const programmingDomainsModule = {
  moduleTitle: "Programming Domains",
  moduleDescription: "Learn about different application areas that programming languages are designed for.",
  
  conversation: [
    {
      id: "intro",
      type: "system",
      message: "I'm going to teach you about Programming Domains - the different areas where programming languages are specialized. We'll cover Scientific, Business, AI, Systems, and Web domains. Ready to start?",
      options: [
        "Let's do this!", 
        "Sure, I'm ready", 
        "VAMOS!", 
        "Yep, let's go!", 
        "OK, got it!"
      ]
    },
    {
      id: "scientific-intro",
      type: "system",
      message: "Great! First up is Scientific Computing. When computers first emerged, scientists needed languages for complex mathematical calculations. Does that make sense?",
      options: [
        "Yes, go on", 
        "I follow", 
        "Makes sense", 
        "Continue", 
        "Got it"
      ]
    },
    {
      id: "scientific-needs",
      type: "system",
      message: `Scientists needed languages specifically designed for:
• Fast floating-point calculations
• Efficient array processing
• Mathematical expression support

Basically, they needed a way to translate math formulas into code easily.`,
      options: [
        "Interesting!", 
        "That makes sense", 
        "I see why", 
        "Continue", 
        "And then what?"
      ]
    },
    {
      id: "fortran-intro",
      type: "system",
      message: `This is where **Fortran** came in! The name actually stands for 'FORmula TRANslation'.

Fortran let scientists write code using notation similar to their mathematical formulas, rather than thinking in machine code. This made solving complex scientific problems much more approachable.`,
      options: [
        "That's clever!", 
        "I get it now", 
        "Makes sense", 
        "What about business needs?", 
        "Cool, what's next?"
      ]
    },
    {
      id: "business-intro",
      type: "system",
      message: `Now let's talk about Business Applications! Businesses had completely different needs from scientists. Instead of complex calculations, they needed to:

• Process business records
• Generate formatted reports
• Handle precise decimal calculations for finances
• Process text efficiently`,
      options: [
        "Different priorities!", 
        "I see the difference", 
        "Makes sense", 
        "Interesting contrast", 
        "Continue"
      ]
    },
    {
      id: "cobol-intro",
      type: "system",
      message: `That's why **COBOL** was created! It stands for 'COmmon Business-Oriented Language'.

COBOL used English-like syntax that business managers could actually read. For example, a COBOL statement might read: "SUBTRACT TAX FROM GROSS-PAY GIVING NET-PAY."

This made programs more accessible to non-programmers in business environments.`,
      options: [
        "That's practical!", 
        "Very readable", 
        "I understand now", 
        "Makes perfect sense", 
        "What's next?"
      ]
    },
    {
      id: "scientific-business-check",
      type: "quiz",
      message: `So we've covered two domains so far. Let me check if you understand the key differences:

What was Fortran primarily designed for?`,
      options: [
        {text: "Business record processing", correct: false},
        {text: "Scientific calculations and mathematical formulas", correct: true},
        {text: "Web development", correct: false},
        {text: "System programming", correct: false}
      ],
      explanation: "Fortran (FORmula TRANslation) was developed specifically for scientific computing, focusing on mathematical formulas and calculations."
    },
    {
      id: "ai-intro",
      type: "system",
      message: "Great! Now let's explore three more domains. First, let's talk about Artificial Intelligence programming. Ready?",
      options: [
        "Let's do it!", 
        "Ready for AI", 
        "Sure thing", 
        "Yes, tell me more", 
        "I'm ready"
      ]
    },
    {
      id: "ai-needs",
      type: "system",
      message: `AI researchers needed something very different from both scientists and business users. They needed languages for:

• Symbol manipulation (not just numbers)
• List processing for complex data structures
• Pattern matching and logical rules`,
      options: [
        "Interesting needs", 
        "I see the difference", 
        "Makes sense", 
        "Continue", 
        "What language did they use?"
      ]
    },
    {
      id: "lisp-intro",
      type: "system",
      message: `They created **LISP** (which stands for LISt Processing).

LISP was perfect for AI because it excelled at manipulating symbols and lists - essential for representing knowledge. Many modern programming concepts like recursion, dynamic typing, and garbage collection originated in LISP.`,
      options: [
        "That's influential!", 
        "I get it now", 
        "Makes sense", 
        "What about systems?", 
        "Continue"
      ]
    },
    {
      id: "systems-intro",
      type: "system",
      message: "Next domain: Systems Programming. As computers became more complex, there was a need to create operating systems and low-level utilities. What do you think systems programmers needed in a language?",
      options: [
        "Efficiency?", 
        "Low-level control?", 
        "Hardware access?", 
        "Speed?", 
        "All of the above?"
      ]
    },
    {
      id: "systems-needs",
      type: "system",
      message: `Exactly! Systems programming needed languages that could:

• Interface directly with hardware
• Manage memory efficiently
• Run with minimal overhead
• Provide fine-grained control`,
      options: [
        "Makes sense", 
        "I see why", 
        "That's logical", 
        "Continue", 
        "Which language was this?"
      ]
    },
    {
      id: "c-intro",
      type: "system",
      message: `This is where **C** came in. C balances high-level features with low-level control, making it ideal for systems programming.

C follows the principle of 'trust the programmer' - it's powerful but also lets you make dangerous mistakes if you're not careful. It became the foundation for operating systems like UNIX and Linux.`,
      options: [
        "Powerful but dangerous!", 
        "I understand now", 
        "Makes sense", 
        "One more domain?", 
        "What about the web?"
      ]
    },
    {
      id: "web-intro",
      type: "system",
      message: "Finally, let's talk about Web Software! The rise of the internet created yet another specialized domain. What makes web development unique is that it typically involves multiple languages working together. Cool, right?",
      options: [
        "Very interesting!", 
        "Multiple languages?", 
        "Tell me more", 
        "That is cool", 
        "How so?"
      ]
    },
    {
      id: "web-langs",
      type: "system",
      message: `Web development uses several specialized languages:

• HTML for structure
• CSS for presentation
• JavaScript for client-side behavior
• Server-side languages like PHP, Python, or Ruby

This multi-language approach is unique to web development, and has introduced concepts like event-driven programming to handle the Web's stateless nature.`,
      options: [
        "Got it!", 
        "Makes sense", 
        "I understand", 
        "Very interesting", 
        "I'd like to review"
      ]
    },
    {
      id: "domain-quiz",
      type: "quiz",
      message: "Let's see if you understand the different programming domains. Which programming language was specifically designed for artificial intelligence and symbolic computing?",
      options: [
        {text: "Fortran", correct: false},
        {text: "COBOL", correct: false},
        {text: "LISP", correct: true},
        {text: "C", correct: false}
      ],
      explanation: "LISP (LISt Processing) was designed specifically for symbolic computation and list manipulation, which made it ideal for representing and processing the symbolic knowledge needed in artificial intelligence systems."
    },
    {
      id: "completion",
      type: "system",
      message: `Congratulations! You've learned about five major programming domains:

1. Scientific Computing (Fortran)
2. Business Applications (COBOL)
3. Artificial Intelligence (LISP)
4. Systems Programming (C)
5. Web Development (HTML, CSS, JS, etc.)

Each domain has unique needs that shaped the design of its languages. Ready to move on?`,
      options: [
        "I've got it!", 
        "Ready for the next module", 
        "Let's move on", 
        "I understand domains now", 
        "Yes, I'm ready"
      ]
    }
  ],
  
  completion: {
    message: "Great job! You've completed the Programming Domains module.",
    nextModule: "language-categories-uses"
  }
};

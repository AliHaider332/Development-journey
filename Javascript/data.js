// JavaScript Topics
const JS_TOPICS = [
  {
    title: 'How the Internet and Websites Work',
    link: 'https://www.notion.so/Web-Development-Course-25b3a78e0e2280919c1ed15f0878fa15',
    questions: [
      {
        question: 'What happens when you type a URL in the browser?',
        answer:
          'DNS lookup → TCP connection → HTTP request → Server processing → Response → Browser renders → Loads resources.',
      },
      {
        question: 'Explain the difference between HTTP and HTTPS.',
        answer:
          'HTTP is unencrypted (port 80), HTTPS is encrypted with SSL/TLS (port 443) for secure communication.',
      },
      {
        question: 'What is DNS and how does it work?',
        answer:
          'DNS translates domain names to IP addresses using hierarchical servers: browser → resolver → root → TLD → authoritative.',
      },
      {
        question: 'Describe the client-server model.',
        answer:
          'Client requests services, server provides them. Communication via request-response pattern over HTTP/HTTPS.',
      },
      {
        question: 'What are the main components of a web page?',
        answer:
          'HTML (structure), CSS (styling), JavaScript (behavior), media assets, and metadata.',
      },
      {
        question: 'Explain the role of browsers in web development.',
        answer:
          'Render HTML/CSS, execute JavaScript, handle network requests, provide developer tools, and manage security.',
      },
      {
        question: 'What is a web server and how does it work?',
        answer:
          'Software that listens for HTTP requests, processes them, and returns responses (static files or dynamic content).',
      },
      {
        question: 'Describe the request-response cycle.',
        answer:
          'Client sends request → Server processes → Returns response with status code, headers, and body content.',
      },
      {
        question: 'What are cookies and how are they used?',
        answer:
          'Small data stored in browser for session management, personalization, tracking, and remembering user preferences.',
      },
      {
        question: 'Explain the concept of web hosting.',
        answer:
          'Service that stores website files on servers making them accessible online via shared, VPS, dedicated, or cloud hosting.',
      },
    ],
  },
  {
    title: 'Introduction to JavaScript & How JS Executes',
    link: 'https://www.notion.so/Introduction-to-Javascript-2763a78e0e22809db99af584c1c5c6ec',
    questions: [
      {
        question: 'What is JavaScript and what is it used for?',
        answer:
          'High-level scripting language for web interactivity, server-side programming (Node.js), mobile apps, and desktop applications.',
      },
      {
        question: 'Explain how JavaScript code is executed in a browser.',
        answer:
          'Parser → AST → Interpreter/Compiler → Execution context → Call stack → Event loop handles async operations.',
      },
      {
        question: 'What is the difference between JavaScript and Java?',
        answer:
          'JS: dynamic, interpreted, prototype-based, runs in browser. Java: static, compiled, class-based, runs on JVM.',
      },
      {
        question: 'What is a JavaScript engine? Name a few.',
        answer:
          'Program that executes JS code. Examples: V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari).',
      },
      {
        question: 'Explain the role of the JavaScript runtime environment.',
        answer:
          'Provides JS engine, Web APIs, event loop, callback queues for code execution in browser or Node.js.',
      },
      {
        question: 'What are the different ways to include JavaScript in HTML?',
        answer:
          'Inline, internal script tags, external files, modules, with async/defer attributes for loading control.',
      },
      {
        question:
          'What is the difference between client-side and server-side JavaScript?',
        answer:
          'Client-side runs in browser (DOM manipulation), server-side runs on server (Node.js for backend logic).',
      },
      {
        question: 'Explain the concept of Just-In-Time (JIT) compilation.',
        answer:
          'JS engine compiles hot code during execution for optimization while initially interpreting code.',
      },
      {
        question: 'What are the basic data types in JavaScript?',
        answer:
          'Primitives: string, number, boolean, undefined, null, symbol, bigint. Objects: arrays, functions, dates.',
      },
      {
        question: 'How does JavaScript handle asynchronous operations?',
        answer:
          'Using event loop, callbacks, promises, async/await with microtask and macrotask queues for non-blocking I/O.',
      },
    ],
  },
  {
    title: 'JavaScript Variables & Data Types (var, let, const, Mutable)',
    link: 'https://www.notion.so/Lecture-02-Data-Type-2773a78e0e228042ba55df0265e78c6b',
    questions: [
      {
        question: 'What are the differences between var, let, and const?',
        answer:
          'var: function-scoped, hoisted, can redeclare. let: block-scoped, hoisted but TDZ, no redeclare. const: block-scoped, must initialize, cannot reassign.',
      },
      {
        question: 'Explain variable hoisting in JavaScript.',
        answer:
          'Variable declarations moved to top of scope during compilation. var initialized as undefined, let/const in TDZ until declaration.',
      },
      {
        question: 'What are the primitive data types in JavaScript?',
        answer:
          '7 primitives: string, number, boolean, undefined, null, symbol, bigint. Stored by value, immutable.',
      },
      {
        question:
          'What is the difference between primitive and reference types?',
        answer:
          'Primitives: stored by value, immutable, compared by value. References: stored by reference, mutable, compared by reference.',
      },
      {
        question: 'Explain the concept of mutability in JavaScript.',
        answer:
          'Primitives are immutable (cannot change), objects are mutable (can change). Changing objects affects all references.',
      },
      {
        question: 'How does JavaScript handle type coercion?',
        answer:
          'Automatic type conversion in operations. Loose equality (==) coerces types, strict equality (===) does not.',
      },
      {
        question: 'What is the typeof operator and how is it used?',
        answer:
          'Returns string indicating type of operand. typeof null returns "object" (historical bug).',
      },
      {
        question: 'Explain the concept of variable scope in JavaScript.',
        answer:
          'Scope defines variable accessibility: global, function, block (let/const). Scope chain determines variable lookup.',
      },
      {
        question: 'What is the Temporal Dead Zone?',
        answer:
          'Time between entering scope and variable declaration where let/const variables exist but cannot be accessed.',
      },
      {
        question: 'How do you check if a variable is an array?',
        answer:
          'Array.isArray(variable) or variable instanceof Array. typeof returns "object" for arrays.',
      },
    ],
  },
  {
    title: 'JavaScript Memory Management: Stack vs Heap',
    link: 'https://www.notion.so/Lecture-03-V8-Engine-Memory-Allocation-27a3a78e0e228017963adec0533f0d78',
    questions: [
      {
        question: 'Explain the difference between stack and heap memory.',
        answer:
          'Stack: fixed-size, stores primitives and function calls (LIFO). Heap: dynamic, stores objects and complex data.',
      },
      {
        question: 'How does JavaScript manage memory allocation?',
        answer:
          'Automatic allocation for primitives (stack) and objects (heap), garbage collection for reclaiming unused memory.',
      },
      {
        question: 'What is garbage collection in JavaScript?',
        answer:
          'Automatic memory management that identifies and frees memory no longer in use (mark-and-sweep algorithm).',
      },
      {
        question: 'Explain memory leaks and how to prevent them.',
        answer:
          'Memory not released despite no longer needed. Prevent by: removing event listeners, clearing intervals, nullifying references.',
      },
      {
        question: 'What is the mark-and-sweep algorithm?',
        answer:
          'GC algorithm that marks reachable objects from roots, sweeps unmarked ones as garbage for collection.',
      },
      {
        question: 'How are primitive and reference types stored in memory?',
        answer:
          'Primitives stored in stack (by value). References stored in heap (object), stack holds pointer to heap location.',
      },
      {
        question: 'What is the call stack and how does it work?',
        answer:
          'LIFO structure tracking function execution. Pushes function calls, pops when completed, manages execution context.',
      },
      {
        question: 'Explain the concept of memory lifecycle in programming.',
        answer:
          'Allocate → Use → Release. Allocation happens automatically, usage during execution, release via garbage collection.',
      },
      {
        question: 'What are the common causes of memory leaks in JavaScript?',
        answer:
          'Global variables, forgotten timers, detached DOM elements, closures holding references, event listeners not removed.',
      },
      {
        question: 'How does the V8 engine optimize memory usage?',
        answer:
          'Uses generational GC (young/old generations), incremental marking, compaction, and hidden classes for efficient property access.',
      },
    ],
  },
  {
    title: 'Conditionals, Loops & Operators in JavaScript',
    link: 'https://www.notion.so/Lecture-04-27b3a78e0e228099a515cf3dd04dd9ac?source=copy_link',
    questions: [
      {
        question:
          'What are the different types of conditional statements in JavaScript?',
        answer:
          'if, else if, else, switch, ternary operator (condition ? true : false).',
      },
      {
        question: 'Explain the difference between == and === operators.',
        answer:
          '== performs type coercion before comparison, === compares both value and type without coercion.',
      },
      {
        question: 'What are the different types of loops in JavaScript?',
        answer:
          'for, while, do...while, for...in (objects), for...of (iterables), forEach (arrays).',
      },
      {
        question: 'How does the ternary operator work?',
        answer:
          'condition ? expressionIfTrue : expressionIfFalse - shorthand for if-else statements.',
      },
      {
        question: 'What is short-circuit evaluation?',
        answer:
          'Logical operators (&&, ||) stop evaluation early based on first operand truthiness/falsiness.',
      },
      {
        question: 'Explain the difference between for...in and for...of loops.',
        answer:
          'for...in iterates over enumerable property keys (objects). for...of iterates over iterable values (arrays, strings).',
      },
      {
        question: 'What are logical operators in JavaScript?',
        answer:
          '&& (AND), || (OR), ! (NOT). Return boolean or one of the operands based on short-circuit evaluation.',
      },
      {
        question: 'How does the switch statement work?',
        answer:
          'Evaluates expression, matches with case values, executes code block until break or default.',
      },
      {
        question:
          'What is the difference between break and continue statements?',
        answer:
          'break exits loop/switch entirely. continue skips current iteration and continues to next iteration.',
      },
      {
        question: 'Explain the concept of truthy and falsy values.',
        answer:
          'Falsy: false, 0, "", null, undefined, NaN. Truthy: everything else. Used in conditionals.',
      },
    ],
  },
  {
    title: 'JavaScript Numbers & Math Object (Random Number Generation)',
    link: 'https://www.notion.so/Lecture-05-Number-Math-and-String-27d3a78e0e2280c8a606ceb93c369d1b',
    questions: [
      {
        question: 'How does JavaScript handle numbers?',
        answer:
          'All numbers are 64-bit floating point (IEEE 754). Includes integers, decimals, Infinity, NaN. No separate integer type.',
      },
      {
        question: 'What is the Math object and what are its common methods?',
        answer:
          'Built-in object for mathematical operations: Math.random(), Math.floor(), Math.round(), Math.max(), Math.min(), Math.PI.',
      },
      {
        question: 'How do you generate random numbers in JavaScript?',
        answer:
          'Math.random() returns float between 0 (inclusive) and 1 (exclusive). Scale with multiplication and shift with addition.',
      },
      {
        question: 'Explain the difference between parseInt() and parseFloat().',
        answer:
          'parseInt() converts string to integer (whole number), parseFloat() converts to floating-point number (with decimals).',
      },
      {
        question: 'What is NaN and how do you check for it?',
        answer:
          'Not-a-Number, result of invalid math operations. Check with isNaN(value) or Number.isNaN(value).',
      },
      {
        question: 'How do you round numbers in JavaScript?',
        answer:
          'Math.round() to nearest, Math.floor() down, Math.ceil() up, Math.trunc() remove decimals, toFixed() for string with decimals.',
      },
      {
        question: 'What is the maximum safe integer in JavaScript?',
        answer:
          'Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991. Beyond this, precision may be lost.',
      },
      {
        question: 'Explain the concept of floating point precision issues.',
        answer:
          'Due to binary representation, some decimals cannot be represented exactly (0.1 + 0.2 !== 0.3). Use toFixed() or integer math.',
      },
      {
        question: 'How do you convert numbers to different bases?',
        answer:
          'toString(radix) with radix 2-36. parseInt(string, radix) to convert back. Example: num.toString(2) for binary.',
      },
      {
        question:
          'What is the difference between Math.floor() and Math.ceil()?',
        answer:
          'Math.floor() rounds down to nearest integer, Math.ceil() rounds up to nearest integer.',
      },
    ],
  },
  {
    title: 'JavaScript Strings & Dates (In-Depth)',
    link: 'https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b',
    questions: [
      {
        question:
          'What are the different ways to create strings in JavaScript?',
        answer:
          'Single quotes (\'\'), double quotes (""), backticks (``) for template literals, String constructor, String.fromCharCode().',
      },
      {
        question: 'Explain common string methods in JavaScript.',
        answer:
          'length, charAt(), slice(), substring(), toUpperCase(), toLowerCase(), trim(), split(), includes(), replace().',
      },
      {
        question: 'How do you work with template literals?',
        answer:
          'Use backticks (`), embed expressions with ${expression}, support multi-line strings without escape characters.',
      },
      {
        question: 'What is the Date object and how is it used?',
        answer:
          'Built-in object for date/time. new Date() creates instance, methods for getting/setting components, formatting.',
      },
      {
        question: 'How do you format dates in JavaScript?',
        answer:
          'toDateString(), toISOString(), toLocaleDateString(), Intl.DateTimeFormat, or manual formatting with get methods.',
      },
      {
        question:
          'Explain the difference between getTime() and valueOf() for dates.',
        answer:
          'Both return milliseconds since Unix epoch (Jan 1, 1970). getTime() is explicit, valueOf() used in comparisons.',
      },
      {
        question: 'How do you compare two dates?',
        answer:
          'Convert to timestamps (getTime()) and compare numbers, or compare Date objects directly (coerced to timestamps).',
      },
      {
        question: 'What is the Internationalization API for dates?',
        answer:
          'Intl.DateTimeFormat for locale-sensitive date formatting with options for timezone, calendar, numbering system.',
      },
      {
        question: 'How do you extract parts of a string?',
        answer:
          'slice(), substring(), substr() for substrings. split() for array of parts. match() with regex for patterns.',
      },
      {
        question:
          'What are regular expressions and how are they used with strings?',
        answer:
          'Patterns for text matching. Create with /pattern/ or RegExp(). Used with match(), test(), replace(), search(), split().',
      },
    ],
  },
  {
    title: 'JavaScript Arrays (In-Depth)',
    link: 'https://www.notion.so/Lecture-07-Array-in-javascript-2803a78e0e228002bcb2dffd112b7c4c',
    questions: [
      {
        question: 'What are arrays in JavaScript and how are they created?',
        answer:
          'Ordered collections of values. Created with [] literal, new Array(), Array.from(), or Array.of(). Can hold mixed types.',
      },
      {
        question: 'Explain common array methods (push, pop, shift, unshift).',
        answer:
          'push() add to end, pop() remove from end, shift() remove from start, unshift() add to start. All modify original array.',
      },
      {
        question: 'What is the difference between slice() and splice()?',
        answer:
          "slice() returns new array portion (doesn't modify original). splice() modifies array by adding/removing elements.",
      },
      {
        question: 'How do you iterate over arrays?',
        answer:
          'for loop, for...of, forEach(), map(), filter(), reduce(). Choose based on need for new array or side effects.',
      },
      {
        question: 'Explain the map(), filter(), and reduce() methods.',
        answer:
          'map() transforms each element to new array. filter() returns elements passing test. reduce() accumulates to single value.',
      },
      {
        question: 'What are sparse arrays?',
        answer:
          'Arrays with "holes" (empty slots). Created with new Array(5) or deleting elements. Iteration methods skip empty slots.',
      },
      {
        question: 'How do you check if an object is an array?',
        answer:
          'Array.isArray(obj) (best method). Also: obj instanceof Array, Object.prototype.toString.call(obj) === "[object Array]".',
      },
      {
        question: 'What is the difference between forEach() and map()?',
        answer:
          'forEach() executes function for each element (no return). map() returns new array with results of function.',
      },
      {
        question: 'How do you flatten a nested array?',
        answer:
          'flat(depth) method or flatMap(). For deep flattening: arr.flat(Infinity) or recursive solution.',
      },
      {
        question: 'What are array-like objects?',
        answer:
          'Objects with length property and indexed elements but not true arrays. Convert with Array.from() or [...arrayLike].',
      },
    ],
  },
  {
    title: 'JavaScript Objects (In-Depth)',
    link: 'https://www.notion.so/Lecture-08-Objects-in-Javascript-2833a78e0e2280109358ee39b2b35e4f',
    questions: [
      {
        question: 'What are objects in JavaScript and how are they created?',
        answer:
          'Collections of key-value pairs. Created with {} literal, new Object(), Object.create(), constructor functions, classes.',
      },
      {
        question:
          'Explain the difference between dot notation and bracket notation.',
        answer:
          'Dot notation: obj.key (static key). Bracket notation: obj["key"] (dynamic key, special characters, variables).',
      },
      {
        question: 'How do you iterate over object properties?',
        answer:
          'for...in loop (enumerable properties), Object.keys(), Object.values(), Object.entries() for arrays of key-value pairs.',
      },
      {
        question: 'What is object destructuring?',
        answer:
          'Unpack object properties into variables: const {name, age} = person. With aliasing: const {name: userName}.',
      },
      {
        question: 'Explain the concept of object references.',
        answer:
          'Objects assigned by reference (memory address). Multiple variables can reference same object. Primitives copied by value.',
      },
      {
        question: 'How do you clone an object?',
        answer:
          'Shallow: {...obj}, Object.assign({}, obj). Deep: JSON.parse(JSON.stringify(obj)), structuredClone(), lodash.cloneDeep().',
      },
      {
        question: 'What are getters and setters in objects?',
        answer:
          'Special methods that look like properties. get property() {return value}, set property(value) {}. Control access.',
      },
      {
        question:
          'Explain the Object.keys(), Object.values(), and Object.entries() methods.',
        answer:
          'Object.keys() returns array of keys. Object.values() returns array of values. Object.entries() returns array of [key, value] pairs.',
      },
      {
        question: 'What is the difference between shallow copy and deep copy?',
        answer:
          'Shallow copy copies top-level properties (nested objects still referenced). Deep copy copies all nested objects recursively.',
      },
      {
        question: 'How does property enumeration work in JavaScript?',
        answer:
          'Properties have enumerable attribute. for...in and Object.keys() only show enumerable properties. Can set with defineProperty().',
      },
    ],
  },
  {
    title: 'JavaScript Functions (In-Depth)',
    link: 'https://www.notion.so/Lecture-09-Function-in-javascript-2843a78e0e2280aeb47fd280307b1a38',
    questions: [
      {
        question:
          'What are the different ways to define functions in JavaScript?',
        answer:
          'Function declaration, function expression, arrow function, Function constructor, generator function, async function.',
      },
      {
        question:
          'Explain the difference between function declarations and function expressions.',
        answer:
          'Declarations: function name() {}, hoisted completely. Expressions: const func = function() {}, hoisted as variable (undefined).',
      },
      {
        question:
          'What are arrow functions and how do they differ from regular functions?',
        answer:
          'Shorter syntax: (params) => expression. No this binding (uses enclosing scope), no arguments object, cannot be constructor.',
      },
      {
        question: 'Explain the concept of higher-order functions.',
        answer:
          'Functions that take other functions as arguments or return functions. Examples: map(), filter(), reduce(), debounce().',
      },
      {
        question: 'What are callback functions?',
        answer:
          'Functions passed as arguments to other functions, to be called later (asynchronous operations, event handlers, array methods).',
      },
      {
        question: 'How do default parameters work in functions?',
        answer:
          'function greet(name = "Guest") {}. Default used if argument is undefined. Evaluated at call time, can be expressions.',
      },
      {
        question: 'What is the arguments object?',
        answer:
          'Array-like object available in non-arrow functions containing all passed arguments. Can be converted to array with spread [...arguments].',
      },
      {
        question: 'Explain the concept of function currying.',
        answer:
          'Transforming function with multiple arguments into sequence of functions each taking single argument: f(a,b,c) → f(a)(b)(c).',
      },
      {
        question: 'What are IIFEs and why are they used?',
        answer:
          'Immediately Invoked Function Expression: (function() {})(). Creates private scope, avoids polluting global namespace.',
      },
      {
        question: 'How does the return statement work in functions?',
        answer:
          'Ends function execution, returns value to caller. If no return or empty return, returns undefined. Only one value can be returned.',
      },
    ],
  },
  {
    title: 'How JavaScript Code Executes & Hoisting',
    link: 'https://www.notion.so/Lecture-10-JS-Code-Execution-2853a78e0e2280a8a3c2e21a712ebd43',
    questions: [
      {
        question: 'Explain the JavaScript execution context.',
        answer:
          'Environment where code executes. Contains variable environment, scope chain, this binding. Created for global and each function.',
      },
      {
        question: 'What is hoisting and how does it work?',
        answer:
          'Variable and function declarations moved to top of scope during compilation. Functions hoisted completely, variables as undefined.',
      },
      {
        question:
          'Explain the difference between function and variable hoisting.',
        answer:
          'Functions: hoisted with definition accessible. Variables: var hoisted as undefined, let/const hoisted but in TDZ until declaration.',
      },
      {
        question: 'What is the call stack?',
        answer:
          'LIFO data structure tracking function execution. Pushes execution contexts, pops when functions complete. Stack overflow if too deep.',
      },
      {
        question:
          'How does JavaScript handle synchronous and asynchronous code?',
        answer:
          'Synchronous executes immediately in call stack. Asynchronous offloaded to Web APIs, callbacks queued, executed when stack empty.',
      },
      {
        question: 'Explain the creation and execution phases in JavaScript.',
        answer:
          'Creation: setup memory space for variables/functions. Execution: code runs line by line, assignments happen.',
      },
      {
        question: 'What is the Temporal Dead Zone?',
        answer:
          'Period between entering scope and variable declaration where let/const exist but cannot be accessed (ReferenceError if attempted).',
      },
      {
        question: 'How are let and const variables hoisted?',
        answer:
          'Hoisted but not initialized. In TDZ until declaration line. Cannot be accessed before declaration.',
      },
      {
        question: 'What is the scope chain?',
        answer:
          'Hierarchy of scopes from current to outer. Determines variable accessibility. Lookup moves outward until variable found.',
      },
      {
        question: 'Explain the concept of lexical scoping.',
        answer:
          'Scope determined by where variables/functions declared in source code (not where called). Inner functions access outer scope variables.',
      },
    ],
  },
  {
    title: 'Closures, Scope & Higher-Order Functions',
    link: 'https://www.notion.so/Lecture-11-Scope-and-Closures-2873a78e0e228059a849d06ad3267ed9',
    questions: [
      {
        question: 'What is a closure in JavaScript?',
        answer:
          'Function that remembers its outer variables and can access them even after outer function has returned.',
      },
      {
        question: 'Explain lexical scoping.',
        answer:
          'Scope based on where variables/functions are declared in code. Inner functions have access to outer function variables.',
      },
      {
        question: 'How are closures used in practical applications?',
        answer:
          'Data privacy/encapsulation, currying, function factories, memoization, event handlers, module pattern.',
      },
      {
        question: 'What is the scope chain?',
        answer:
          'Hierarchy of nested scopes. Variable lookup starts in current scope, moves outward through chain until found or global.',
      },
      {
        question: 'Explain the concept of higher-order functions.',
        answer:
          'Functions that operate on other functions by taking them as arguments or returning them. Enables functional programming patterns.',
      },
      {
        question: 'How do closures help with data encapsulation?',
        answer:
          'Create private variables that cannot be accessed directly from outside, only through returned functions (privileged methods).',
      },
      {
        question: 'What is a common mistake with closures in loops?',
        answer:
          'Using var in loop creates single shared variable captured by closure. Solution: use let (block scope) or IIFE.',
      },
      {
        question: 'How do closures relate to memory management?',
        answer:
          'Closures keep outer scope variables alive (cannot be garbage collected) as long as closure exists. Can cause memory leaks.',
      },
      {
        question: 'What is the module pattern and how does it use closures?',
        answer:
          'Uses IIFE returning object with public methods that have access to private variables through closure.',
      },
      {
        question: 'Explain the difference between global and local scope.',
        answer:
          'Global: accessible everywhere, lives until page closes. Local: accessible only within function/block, destroyed after execution.',
      },
    ],
  },
  {
    title: 'Map, Filter, Reduce, Set & Map in JavaScript',
    link: 'https://www.notion.so/Lecture-12-filter-set-reducer-map-and-set-2873a78e0e2280e192bfc88fa8d0bea7',
    questions: [
      {
        question: 'Explain the map() method and how it works.',
        answer:
          'Creates new array by applying function to each element. Original array unchanged. Returns array of same length.',
      },
      {
        question: 'What is the filter() method and when would you use it?',
        answer:
          'Creates new array with elements passing test function. Used to select subset of data based on condition.',
      },
      {
        question: 'How does the reduce() method work?',
        answer:
          'Executes reducer function on each element accumulating to single value. Takes accumulator, current value, returns updated accumulator.',
      },
      {
        question: 'What is the difference between forEach() and map()?',
        answer:
          'forEach() executes function for side effects (no return). map() returns new array with transformed values.',
      },
      {
        question: 'Explain the Set object and its use cases.',
        answer:
          'Collection of unique values. Methods: add(), delete(), has(), clear(). Use for removing duplicates, membership testing.',
      },
      {
        question:
          'What is the Map object and how is it different from regular objects?',
        answer:
          'Key-value collection with any type as key (objects, functions). Maintains insertion order, has size property, better performance.',
      },
      {
        question: 'How do you convert an array to a Set and vice versa?',
        answer:
          'Array to Set: new Set(array). Set to array: [...set] or Array.from(set). Removes duplicates automatically.',
      },
      {
        question: 'What are the advantages of using Map over objects?',
        answer:
          'Keys can be any type, maintains insertion order, has size property, better performance for frequent additions/removals.',
      },
      {
        question: 'How do you chain array methods?',
        answer:
          'array.map().filter().reduce() - each method returns array (except reduce) enabling method chaining for data transformations.',
      },
      {
        question:
          'Explain the concept of immutability in relation to these methods.',
        answer:
          "map(), filter(), reduce() don't modify original array (immutable operations). Return new arrays instead of mutating.",
      },
    ],
  },
  {
    title: 'DOM Manipulation in JavaScript (Document Object Model)',
    link: 'https://www.notion.so/Lecture-13-Introduction-to-DOM-28b3a78e0e2280be9dbbf32ae46773b6',
    questions: [
      {
        question: 'What is the DOM?',
        answer:
          'Document Object Model - tree representation of HTML document. Programming interface for web documents using nodes/objects.',
      },
      {
        question: 'Explain the difference between the DOM and HTML.',
        answer:
          'HTML is source code/text. DOM is live, programmable representation in memory that can be modified via JavaScript.',
      },
      {
        question: 'How do you select elements in the DOM?',
        answer:
          'getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll().',
      },
      {
        question:
          'What is the difference between getElementById and querySelector?',
        answer:
          'getElementById returns single element by ID. querySelector returns first matching CSS selector (any selector).',
      },
      {
        question: 'How do you create and add new elements to the DOM?',
        answer:
          'document.createElement(), set attributes/content, then append with appendChild(), append(), or insertBefore().',
      },
      {
        question: 'Explain the concept of event delegation.',
        answer:
          'Attach single event listener to parent to handle events from children (even dynamically added). Uses event bubbling.',
      },
      {
        question: 'What is the difference between innerHTML and textContent?',
        answer:
          'innerHTML parses HTML string, can create elements. textContent sets plain text (escapes HTML).',
      },
      {
        question: 'How do you traverse the DOM tree?',
        answer:
          'parentNode, childNodes, children, firstChild, lastChild, nextSibling, previousSibling. Also querySelector for specific navigation.',
      },
      {
        question: 'What is the difference between attributes and properties?',
        answer:
          "Attributes: HTML source (string). Properties: DOM object properties (various types). Some sync (id), some don't (value).",
      },
      {
        question: 'How do you remove elements from the DOM?',
        answer:
          'element.remove() (modern) or parent.removeChild(element). Also setting innerHTML = "" but less efficient.',
      },
    ],
  },
  {
    title: 'CRUD Operations in the DOM',
    link: 'https://www.notion.so/Lecture-14-DOM-Manipulation-28c3a78e0e22802482ffcc9e423d3db0',
    questions: [
      {
        question: 'How do you create elements in the DOM?',
        answer:
          'document.createElement(tagName) or using innerHTML/insertAdjacentHTML for HTML strings.',
      },
      {
        question: 'Explain different methods to add elements to the DOM.',
        answer:
          'appendChild(), append() (multiple), prepend(), insertBefore(), insertAdjacentElement(), innerHTML, insertAdjacentHTML().',
      },
      {
        question: 'How do you update element content and attributes?',
        answer:
          'textContent, innerHTML for content. setAttribute(), property access (element.id), classList for classes.',
      },
      {
        question:
          'What are the different ways to remove elements from the DOM?',
        answer:
          'element.remove(), parent.removeChild(element), replaceChild(new, old), innerHTML = "", textContent = "".',
      },
      {
        question: 'How do you replace elements in the DOM?',
        answer:
          'replaceChild(new, old), outerHTML = newHTML, replaceWith(newElement) (modern).',
      },
      {
        question: 'Explain the difference between append() and appendChild().',
        answer:
          'append() accepts multiple nodes/text, no return. appendChild() single node only, returns appended node.',
      },
      {
        question: 'How do you clone elements in the DOM?',
        answer:
          'element.cloneNode(true/false) - true for deep clone (with children), false for shallow clone.',
      },
      {
        question: 'What is the DocumentFragment and why is it useful?',
        answer:
          'Lightweight document container. Batch DOM operations without causing reflows for each addition, then append once.',
      },
      {
        question: 'How do you handle dynamic content creation?',
        answer:
          'Template literals for HTML strings, clone templates, use DocumentFragment for batching, event delegation for handlers.',
      },
      {
        question:
          'What are the performance considerations for DOM manipulation?',
        answer:
          'Minimize reflows/repaints, batch changes, use DocumentFragment, avoid inline styles, cache DOM queries, use efficient selectors.',
      },
    ],
  },
  {
    title: 'Events & Event Handling in JavaScript',
    link: 'https://www.notion.so/Lecture-15-Event-Listener-and-Handler-28e3a78e0e2280b6a720c5387d057dae',
    questions: [
      {
        question: 'What is event propagation?',
        answer:
          'Event travels through DOM: capture phase (root to target) → target phase → bubble phase (target to root).',
      },
      {
        question:
          'Explain the difference between event capturing and bubbling.',
        answer:
          'Capturing: top-down (root to target). Bubbling: bottom-up (target to root). Default: bubble phase, capture optional.',
      },
      {
        question: 'How do you add and remove event listeners?',
        answer:
          'addEventListener(type, handler, options). removeEventListener(type, sameHandler, sameOptions) - requires same reference.',
      },
      {
        question:
          'What is the event object and what information does it contain?',
        answer:
          'Object passed to handler with event details: type, target, currentTarget, preventDefault(), stopPropagation(), key codes, coordinates.',
      },
      {
        question: 'How do you prevent default behavior in events?',
        answer:
          'event.preventDefault() stops default browser action (form submit, link navigation). Does not stop propagation.',
      },
      {
        question: 'What is event delegation and why is it useful?',
        answer:
          'Attach listener to parent to handle events from children. Useful for dynamic content, fewer listeners, better performance.',
      },
      {
        question: 'How do you create custom events?',
        answer:
          'new CustomEvent(type, {detail: data}). Dispatch with dispatchEvent(). Listen with addEventListener().',
      },
      {
        question: 'Explain the different types of mouse and keyboard events.',
        answer:
          'Mouse: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout. Keyboard: keydown, keyup, keypress.',
      },
      {
        question: 'What is the difference between target and currentTarget?',
        answer:
          'target: element that triggered event. currentTarget: element with event listener (this value in handler).',
      },
      {
        question: 'How do you handle asynchronous events?',
        answer:
          'Use async event handlers, queue events, debounce/throttle rapid events, use AbortController for cleanup.',
      },
    ],
  },
  {
    title: 'Event Loop in JavaScript (Why JS is Single-Threaded)',
    link: 'https://www.notion.so/Lecture-17-Event-Loop-in-JS-2943a78e0e22801582e6c6f4a83ecd9f',
    questions: [
      {
        question: 'What is the event loop in JavaScript?',
        answer:
          'Mechanism that enables async operations in single-threaded JS. Checks call stack, processes callback queues, maintains concurrency.',
      },
      {
        question:
          'Explain the call stack, callback queue, and microtask queue.',
        answer:
          'Call stack: tracks function execution. Callback queue: macrotasks (setTimeout, I/O). Microtask queue: promises, higher priority.',
      },
      {
        question: 'Why is JavaScript single-threaded?',
        answer:
          'Simplifies programming model, avoids complex synchronization. Uses event loop for non-blocking I/O despite single thread.',
      },
      {
        question: 'How does JavaScript handle asynchronous operations?',
        answer:
          'Offloads to Web APIs (browser) or Libuv (Node.js). When complete, callbacks queued, executed when call stack empty.',
      },
      {
        question: 'What is the difference between microtasks and macrotasks?',
        answer:
          'Microtasks: promises, queueMicrotask(), MutationObserver, higher priority. Macrotasks: setTimeout, setInterval, I/O, rendering.',
      },
      {
        question: 'Explain the concept of non-blocking I/O.',
        answer:
          "I/O operations don't block main thread. Callback executed when I/O completes. Enables handling many concurrent operations.",
      },
      {
        question: 'How does setTimeout() work with the event loop?',
        answer:
          'Timer set in Web API. When time expires, callback goes to callback queue (macrotask). Executed when stack empty and microtasks done.',
      },
      {
        question: 'What is the role of Web APIs in the browser?',
        answer:
          'Provide async capabilities: DOM, XMLHttpRequest/fetch, timers, storage, geolocation. Run in separate threads, callbacks to JS.',
      },
      {
        question: 'How does Promise resolution relate to the event loop?',
        answer:
          'Promise callbacks go to microtask queue (higher priority than macrotasks). Executed immediately after current task completes.',
      },
      {
        question: 'What are the potential issues with blocking the event loop?',
        answer:
          'Long-running synchronous code blocks UI updates, async callbacks, makes page unresponsive. Use Web Workers for heavy computations.',
      },
    ],
  },
  {
    title: 'Callback Hell & Async Programming',
    link: 'https://www.notion.so/Lecture-17-Event-Loop-in-JS-2943a78e0e22801582e6c6f4a83ecd9f',
    questions: [
      {
        question: 'What is callback hell?',
        answer:
          'Deep nesting of callbacks making code hard to read/maintain. Pyramid shape due to sequential async operations.',
      },
      {
        question:
          'How does callback hell affect code readability and maintenance?',
        answer:
          'Creates pyramid of doom, hard to follow flow, error handling complex, difficult to modify, debugging challenging.',
      },
      {
        question: 'What are the alternatives to callback hell?',
        answer:
          'Promises, async/await, named functions, control flow libraries, modularization, breaking code into smaller functions.',
      },
      {
        question: 'Explain the concept of error handling in callbacks.',
        answer:
          'Error-first pattern: callback(err, result). First argument is error (null if success). Must check error in each callback.',
      },
      {
        question:
          'How do you handle multiple asynchronous operations with callbacks?',
        answer:
          'Nested callbacks (hell), async library (async.waterfall), manual counter with callbacks, or convert to promises.',
      },
      {
        question: 'What is the "Pyramid of Doom" in JavaScript?',
        answer:
          'Visual name for callback hell - code indented increasingly rightward with each nested callback, forming pyramid shape.',
      },
      {
        question: 'How do promises help avoid callback hell?',
        answer:
          'Chain .then() calls instead of nesting. Return promises for sequential operations. Flatter, more readable code.',
      },
      {
        question: 'How does async/await help with callback hell?',
        answer:
          'Write async code like synchronous code. No callbacks needed. Try/catch for errors. Linear, readable flow.',
      },
      {
        question: 'What are the best practices for working with callbacks?',
        answer:
          'Keep callbacks shallow, use named functions, handle all errors, avoid nesting, modularize, consider promises/async.',
      },
      {
        question: 'Explain the concept of inversion of control with callbacks.',
        answer:
          'Callback gives control to another function (when to call it). Can lead to issues if callback never called, called multiple times.',
      },
    ],
  },
  {
    title: 'Promises in JavaScript | JSON vs JS Object',
    link: 'https://www.notion.so/Lecture-19-Promise-in-JS-2993a78e0e228091a900ff5fa583094a',
    questions: [
      {
        question: 'What is a Promise in JavaScript?',
        answer:
          'Object representing eventual completion/failure of async operation. States: pending, fulfilled, rejected. Chainable with .then().',
      },
      {
        question: 'Explain the states of a Promise.',
        answer:
          'Pending: initial state. Fulfilled: operation completed successfully. Rejected: operation failed. Settled: either fulfilled or rejected.',
      },
      {
        question: 'How do you create and consume Promises?',
        answer:
          'Create: new Promise((resolve, reject) => {}). Consume: .then(onFulfill, onReject), .catch(onReject), .finally(cleanup).',
      },
      {
        question:
          'What is the difference between Promise.all() and Promise.race()?',
        answer:
          'all() waits for all promises to fulfill (or first rejection). race() returns first settled promise (fulfill or reject).',
      },
      {
        question: 'How do you handle errors in Promises?',
        answer:
          '.catch() method, .then(undefined, onReject), try/catch with async/await, Promise.reject(), error boundaries.',
      },
      {
        question: 'What is the difference between JSON and JavaScript objects?',
        answer:
          'JSON: string format for data exchange (double quotes, no functions). JS Object: live in-memory structure with methods.',
      },
      {
        question: 'How do you convert between JSON and JavaScript objects?',
        answer:
          'JSON.stringify(obj) → JSON string. JSON.parse(json) → JS object. Replacer/reviver functions for custom serialization.',
      },
      {
        question: 'Explain Promise chaining.',
        answer:
          'Multiple .then() calls where each returns value/promise for next .then(). Handles sequential async operations.',
      },
      {
        question:
          'What are async functions and how do they relate to Promises?',
        answer:
          'Functions declared with async keyword. Always return promise. Allow await for promise resolution. Syntactic sugar for promises.',
      },
      {
        question: 'How do you cancel a Promise?',
        answer:
          'No native cancellation. Patterns: wrapper with cancel flag, AbortController with fetch, third-party libraries, Promise.race() with timeout.',
      },
    ],
  },
  {
    title: 'Async/Await in JavaScript',
    link: 'https://www.notion.so/Lecture-20-Async-Await-in-Javascript-2a73a78e0e228063b899c85279911c35',
    questions: [
      {
        question: 'What are async functions?',
        answer:
          'Functions declared with async keyword. Always return Promise. Allow using await keyword inside. Can contain await expressions.',
      },
      {
        question: 'How does the await keyword work?',
        answer:
          'Pauses async function execution until Promise settles. Returns resolved value. Can only be used inside async functions.',
      },
      {
        question: 'What is the difference between async/await and Promises?',
        answer:
          'async/await is syntactic sugar over promises. Makes async code look synchronous. Same performance, better readability.',
      },
      {
        question: 'How do you handle errors in async/await?',
        answer:
          'try/catch blocks around await calls. Also .catch() on async function call since it returns promise.',
      },
      {
        question: 'Can you use await outside of an async function?',
        answer:
          'No (except in modules top-level await). await only valid inside async functions. Top-level await available in ES modules.',
      },
      {
        question: 'How does async/await work with parallel operations?',
        answer:
          'Use Promise.all() with await: const [a, b] = await Promise.all([task1(), task2()]). Runs operations concurrently.',
      },
      {
        question: 'What is the return type of an async function?',
        answer:
          'Always returns Promise. If function returns value, promise resolves to that value. If throws, promise rejects.',
      },
      {
        question:
          'How do you convert existing Promise-based code to async/await?',
        answer:
          'Wrap in async function, replace .then() with await, .catch() with try/catch, ensure proper error handling.',
      },
      {
        question: 'What are the performance implications of async/await?',
        answer:
          'Same performance as promises (just syntactic sugar). Can be slower if await used sequentially instead of concurrent with Promise.all().',
      },
      {
        question:
          'How do you handle multiple async operations with async/await?',
        answer:
          'Sequential: await each. Parallel: await Promise.all([op1, op2]). Race: await Promise.race([op1, op2]).',
      },
    ],
  },
  {
    title: 'Prototypes & Classes in JavaScript',
    link: 'https://www.notion.so/Lecture-21-Prototype-and-Class-in-javascript-2a73a78e0e2280f9a76ad7141e3bd3b6',
    questions: [
      {
        question: 'What is prototypal inheritance?',
        answer:
          'Objects inherit directly from other objects via prototype chain. Each object has [[Prototype]] link to parent prototype.',
      },
      {
        question: 'Explain the prototype chain.',
        answer:
          'Sequence of prototypes from object to null. Property lookup follows chain upward. Object → prototype → prototype... → null.',
      },
      {
        question: 'What is the difference between __proto__ and prototype?',
        answer:
          "__proto__: property on instances pointing to constructor's prototype. prototype: property on constructors, template for instances.",
      },
      {
        question: 'How do classes work in JavaScript?',
        answer:
          'Syntactic sugar over prototype inheritance. class keyword, constructor, methods, extends for inheritance, super for parent.',
      },
      {
        question:
          'What is the difference between classical and prototypal inheritance?',
        answer:
          'Classical: classes as blueprints, instances created. Prototypal: objects inherit directly from other objects.',
      },
      {
        question: 'How do you create objects using constructor functions?',
        answer:
          'function Person(name) {this.name = name}; Person.prototype.method = function(){}; const john = new Person("John").',
      },
      {
        question: 'Explain the super() keyword in classes.',
        answer:
          'Calls parent class constructor. Required in derived class constructor before using this. Also used to call parent methods.',
      },
      {
        question: 'What are static methods in classes?',
        answer:
          'Methods called on class itself, not instances. Defined with static keyword. Used for utility functions related to class.',
      },
      {
        question: 'How do you implement inheritance using classes?',
        answer:
          'class Child extends Parent { constructor() { super(); } }. Methods inherited, can override, super calls parent version.',
      },
      {
        question: 'What is the Object.create() method?',
        answer:
          'Creates new object with specified prototype. const child = Object.create(parent). Pure prototypal inheritance.',
      },
    ],
  },
  {
    title: 'JavaScript "this" Keyword | call(), apply(), bind()',
    link: 'https://www.notion.so/Lecture-22-This-Keyword-in-javascript-2aa3a78e0e22802aa703dfcdce606b37',
    questions: [
      {
        question: 'What is the "this" keyword in JavaScript?',
        answer:
          'Reference to execution context. Value determined by how function is called (not where defined).',
      },
      {
        question: 'How is the value of "this" determined?',
        answer:
          '1. Global: undefined (strict) or window. 2. Method: object before dot. 3. Constructor: new instance. 4. call/apply/bind: specified. 5. Arrow: lexical.',
      },
      {
        question: 'Explain the different ways "this" can be bound.',
        answer:
          'Implicit: object method. Explicit: call/apply/bind. New: constructor. Default: global/window. Lexical: arrow functions.',
      },
      {
        question: 'What is the difference between call(), apply(), and bind()?',
        answer:
          'call(): invokes with this value and individual arguments. apply(): invokes with this value and array of arguments. bind(): returns new function with bound this.',
      },
      {
        question: 'How does "this" work in arrow functions?',
        answer:
          'Lexical this - uses this from enclosing scope where arrow function is defined. Cannot be changed with call/apply/bind.',
      },
      {
        question: 'What is the value of "this" in global scope?',
        answer:
          'In strict mode: undefined. Non-strict: global object (window in browser, global in Node.js).',
      },
      {
        question: 'How does "this" work in event handlers?',
        answer:
          'DOM event handler: element that triggered event. Inline handler: global object. Arrow function: lexical from enclosing scope.',
      },
      {
        question: 'Explain the concept of method borrowing.',
        answer:
          'Using call/apply to use method from one object on another object. Array methods on array-like objects: Array.prototype.slice.call(arguments).',
      },
      {
        question: 'How do you fix "this" context issues?',
        answer:
          'Use arrow functions for lexical this, bind() to preserve context, store this in variable (self/that), use call/apply.',
      },
      {
        question: 'What is the new binding for "this"?',
        answer:
          'When function called with new, this refers to newly created instance. Constructor functions and classes.',
      },
    ],
  },
];

// React Topics
const REACT_TOPICS = [
  {
    title: 'React Fundamentals',
    link: '#',
    questions: [
      {
        question: 'What is React and how is it implemented in JavaScript?',
        answer: `React is a declarative, component-based JavaScript library for building user interfaces.
    
    Core Implementation Concepts:
    
    Virtual DOM:
    • React creates a lightweight representation of the actual DOM
    • Updates to state/props trigger re-renders
    • React diffs the Virtual DOM with previous version
    • Only applies minimal necessary changes to real DOM
    
    JSX to JavaScript Transformation:
    // JSX:
    const element = <h1 className="title">Hello World</h1>;
    
    // Transpiled to:
    const element = React.createElement(
    'h1',
    {className: 'title'},
    'Hello World'
    );
    
    Component Reconciliation:
    • React maintains a tree of component instances
    • Each component has lifecycle methods/hooks
    • Efficient diffing algorithm (O(n) complexity)
    
    One-Way Data Flow:
    • Data flows from parent to child via props
    • State changes trigger re-renders
    • Unidirectional data flow simplifies debugging
    
    Key Implementation Details:
    • Uses requestIdleCallback for scheduling
    • Batched updates for performance
    • Synthetic events for cross-browser compatibility
    • Fiber architecture for incremental rendering}, { question: "What is the Virtual DOM and how does it work?", answer:Virtual DOM is a programming concept where an ideal/virtual representation of UI is kept in memory.
    
    How it works:
    
    Initial Render:
    • React creates Virtual DOM tree from components
    • Renders this to actual DOM
    
    On State Change:
    • React creates new Virtual DOM tree
    • Compares with previous (diffing algorithm)
    • Calculates minimal set of DOM operations
    • Batch updates real DOM
    
    Example Flow:
    // Initial state
    const vdom1 = {
    type: 'div',
    props: { className: 'container' },
    children: [{ type: 'p', children: 'Hello' }]
    };
    
    // After state change
    const vdom2 = {
    type: 'div',
    props: { className: 'container active' },
    children: [{ type: 'p', children: 'Hello World' }]
    };
    
    // React will only:
    
    Update className from 'container' to 'container active'
    
    Update text content from 'Hello' to 'Hello World'
    
    Benefits:
    • Performance optimization
    • Declarative programming model
    • Abstracts away direct DOM manipulation}, { question: "What are React Components and how do they differ from regular HTML elements?", answer:React Components are reusable, self-contained UI pieces with their own logic and appearance.
    
    Class Component Example:
    class Button extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    }
    
    text
    handleClick = () => {
        this.setState({ clicked: true });
    };
    
    render() {
        return (
            <button 
                onClick={this.handleClick}
                className={this.state.clicked ? 'active' : ''}
            >
                {this.props.text}
            </button>
        );
    }
    }
    
    Functional Component Example (with Hooks):
    function Counter() {
    const [count, setCount] = useState(0);
    
    text
    const increment = () => setCount(count + 1);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
    }
    
    Key Differences from HTML elements:
    • Have state and lifecycle
    • Can contain business logic
    • Reusable with different props
    • Can manage their own behavior
    • Encapsulate styling and functionality
    
    Usage:
    <Button text="Click Me" />
    <Counter />
    <Welcome name="John" />
    
    React components ultimately render to regular HTML elements but with enhanced capabilities.}, { question: "How does React handle events differently from vanilla JavaScript?", answer:React uses Synthetic Events - a cross-browser wrapper around native browser events.
    
    Vanilla JavaScript Event Handling:
    document.getElementById('btn').addEventListener('click', (e) => {
    console.log(e.target.value);
    e.preventDefault();
    });
    
    React Event Handling:
    function Form() {
    const handleSubmit = (e) => {
    e.preventDefault(); // Synthetic Event
    console.log('Form submitted');
    };
    
    text
    const handleChange = (e) => {
        console.log(e.target.value);  // Cross-browser compatible
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
    }
    
    Key Differences:
    
    Event Pooling:
    // Synthetic events are pooled for performance
    // Event properties are nullified after callback
    function handleClick(e) {
    console.log(e.type); // 'click'
    setTimeout(() => {
    console.log(e.type); // null! (in React 16 and below)
    }, 0);
    }
    
    Event Delegation:
    • React doesn't attach handlers to individual nodes
    • Single event listener at root (React 17+ changed this)
    • Events bubble through React's synthetic system
    
    Consistent API:
    • Same event names across browsers
    • Normalized event properties
    • Automatic memory management
    
    Performance:
    • Fewer event listeners
    • Efficient event delegation
    • Automatic cleanup
    
    Event Names in React:
    • onClick (not onclick)
    • onChange (triggers on each keystroke)
    • onSubmit
    • onMouseEnter, onMouseLeave`,
      },
    ],
  },
  {
    title: 'React JSX, Babel, React Components & Props Explained from Scratch',
    link: 'https://www.notion.so/Lecture-02-JSX-Babel-props-and-React-Component-2b13a78e0e22804797a1ef605cb2d3fb',
    questions: [
      {
        question: 'What is JSX in React and why is it used?',
        answer:
          'JSX is JavaScript XML syntax extension that allows writing HTML-like code in JavaScript. Used for creating React elements in readable format.',
      },
      {
        question: 'How does Babel transform JSX code?',
        answer:
          'Babel converts JSX to React.createElement() calls. Transpiles modern JavaScript/JSX to browser-compatible ES5 code.',
      },
      {
        question: 'What are React Components?',
        answer:
          'Reusable UI building blocks. Can be functional (with hooks) or class-based. Encapsulate logic, state, and rendering.',
      },
      {
        question: 'What are Props in React?',
        answer:
          'Properties passed from parent to child components. Read-only data that configures child components.',
      },
      {
        question: "What's the difference between Props and State?",
        answer:
          'Props: external data from parent (immutable). State: internal data managed by component (mutable).',
      },
      {
        question: "Why can't browsers read JSX directly?",
        answer:
          'Browsers only understand JavaScript. JSX is syntactic sugar that must be transpiled to React.createElement() calls.',
      },
      {
        question: 'What are PropTypes and why use them?',
        answer:
          'Type checking for React props. Catches bugs early, documents component API, improves development experience.',
      },
      {
        question: 'How do you create a React component?',
        answer:
          'Functional: function Component(props). Class: class Component extends React.Component. Use arrow functions for methods.',
      },
      {
        question: 'What is component composition in React?',
        answer:
          'Building complex UIs by combining smaller components. Pass components as props or children.',
      },
      {
        question: 'How do you pass data between components?',
        answer:
          'Parent to child: via props. Child to parent: callback functions. Sibling components: lift state up to common parent.',
      },
    ],
  },
  {
    title:
      'React + Vite Complete Setup and Deployment | npm, Plugins, node, Bundlers',
    link: 'https://www.notion.so/Lecture-03-Introduction-to-Vite-2b33a78e0e228056a899c8eafdf55107',
    questions: [
      {
        question: 'What is Vite and how is it different from Create React App?',
        answer:
          'Next-generation build tool vs. zero-config setup. Vite uses native ES modules for faster dev server and builds.',
      },
      {
        question: 'How do you create a React app with Vite?',
        answer:
          'npm create vite@latest, select React template, install dependencies with npm install, run dev server.',
      },
      {
        question:
          'What are the main configuration files in a Vite React project?',
        answer:
          'package.json: dependencies and scripts. vite.config.js: Vite configuration. index.html: entry point.',
      },
      {
        question: 'How does Vite handle development and production builds?',
        answer:
          'Dev: uses native ES modules for instant startup. Production: bundles with Rollup for optimized output.',
      },
      {
        question: 'What are Vite plugins and how are they used?',
        answer:
          'Extensions for Vite functionality. Install via npm, add to vite.config.js plugins array. Examples: @vitejs/plugin-react.',
      },
      {
        question: 'How do you deploy a Vite React application?',
        answer:
          'Build with npm run build, deploy dist folder to static hosting: Vercel, Netlify, GitHub Pages, or traditional hosting.',
      },
      {
        question: 'What is Hot Module Replacement in Vite?',
        answer:
          'Updates modules without full page reload during development. Preserves application state while updating code.',
      },
      {
        question: 'How do you add environment variables in Vite?',
        answer:
          'Create .env files (.env, .env.local, .env.production). Variables prefixed with VITE_ are exposed to client code.',
      },
      {
        question: 'What is tree shaking in Vite/Rollup?',
        answer:
          'Dead code elimination during build. Removes unused code from final bundle, reducing file size.',
      },
      {
        question: 'How do you configure paths/aliases in Vite?',
        answer:
          "In vite.config.js: resolve.alias for path mappings. Example: '@': path.resolve(__dirname, './src').",
      },
    ],
  },
  {
    title: 'What is hooks and useState hook',
    link: 'https://www.notion.so/Lecture-04-useState-Hook-2b83a78e0e228082aa6ef6bd539a9f32',
    questions: [
      {
        question: 'What are React Hooks?',
        answer:
          'Functions that let you use state and lifecycle features in functional components. Introduced in React 16.8.',
      },
      {
        question: 'What is the useState hook?',
        answer:
          'Hook that adds state to functional components. Returns array with state variable and setter function.',
      },
      {
        question: 'How do you use useState hook?',
        answer:
          "Import: import { useState } from 'react'. Use: const [state, setState] = useState(initialValue).",
      },
      {
        question: 'What are the rules of using hooks?',
        answer:
          'Only call hooks at top level of components. Only call from React functions. Use same order every render.',
      },
      {
        question: 'How does useState differ from this.setState?',
        answer:
          'useState: functional components, replaces state entirely (unless merging manually). setState: class components, auto-merges state.',
      },
      {
        question: 'Can you use multiple useState hooks in one component?',
        answer:
          'Yes, multiple useState calls for different state variables. Each manages independent piece of state.',
      },
      {
        question: 'How do you update objects/arrays with useState?',
        answer:
          "Create new object/array, use spread operator: setUser({...user, name: 'John'}).",
      },
      {
        question: 'What is the initial value in useState?',
        answer:
          'Value passed to useState(initialValue). Can be primitive, object, array, or function (lazy initialization).',
      },
      {
        question: 'How do you handle previous state with useState?',
        answer:
          'Use functional update: setCount(prev => prev + 1). Ensures updates based on latest state.',
      },
      {
        question: 'What is lazy initialization in useState?',
        answer:
          'Passing function to useState(() => expensiveComputation()). Function runs only on initial render.',
      },
    ],
  },
  {
    title: 'useEffect Hook in React',
    link: 'https://www.notion.so/Lecture05-useEffect-Hook-2bd3a78e0e228000a7a0f4f80a1cc793',
    questions: [
      {
        question: 'What is the useEffect hook?',
        answer:
          'Hook that performs side effects in functional components. Replaces lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount.',
      },
      {
        question: 'What are the common use cases for useEffect?',
        answer:
          'Data fetching, subscriptions, DOM manipulation, timers, and any operation that interacts with the outside world.',
      },
      {
        question: 'What is the basic syntax of useEffect?',
        answer:
          'useEffect(() => { effect }, [dependencies]). First param: function with effect logic. Second param: dependency array.',
      },
      {
        question: 'What does the dependency array control?',
        answer:
          'When effect runs: []: once on mount. [dep1, dep2]: when dependencies change. No array: on every render.',
      },
      {
        question: 'How do you clean up effects in useEffect?',
        answer:
          'Return cleanup function from effect: useEffect(() => { const sub = subscribe(); return () => unsubscribe(); }, []).',
      },
      {
        question: 'When does cleanup function run?',
        answer:
          'Before effect runs again (except initial run) and when component unmounts. Prevents memory leaks.',
      },
      {
        question: 'How does useEffect differ from lifecycle methods?',
        answer:
          'useEffect combines multiple lifecycle methods. Runs after render (including paint). Can handle mounting, updating, unmounting.',
      },
      {
        question:
          'What is the difference between useEffect and useLayoutEffect?',
        answer:
          'useEffect: runs after render is committed to screen. useLayoutEffect: runs before paint, can cause visual flicker if blocking.',
      },
      {
        question: 'How do you handle async operations in useEffect?',
        answer:
          'Create async function inside useEffect and call it: useEffect(() => { async function fetchData() {} fetchData(); }, []).',
      },
      {
        question: 'What are common mistakes with useEffect?',
        answer:
          'Missing dependencies, infinite loops from state updates without dependencies, not cleaning up subscriptions, async functions directly as effect.',
      },
    ],
  },
  {
    title:
      'How React works under the Hood | React reconciliation, fibre, diffing, key',
    link: 'https://www.notion.so/Lecture06-React-Virtual-DOM-Reconciliation-Complete-Study-Notes-2c43a78e0e228052ad82e4899bf42cb4',
    questions: [
      {
        question: 'What is React Reconciliation?',
        answer:
          'Process of updating DOM efficiently. Compares new Virtual DOM with previous, calculates minimal changes, applies updates.',
      },
      {
        question: 'What is the Virtual DOM?',
        answer:
          'Lightweight JavaScript representation of actual DOM. Enables efficient updates by minimizing direct DOM manipulation.',
      },
      {
        question: 'What is React Fiber?',
        answer:
          'Complete rewrite of React core algorithm (React 16+). Enables incremental rendering, prioritization, and better performance.',
      },
      {
        question: "How does React's diffing algorithm work?",
        answer:
          'Compares tree nodes level by level. O(n) complexity. Assumptions: different element types produce different trees, keys identify stable elements.',
      },
      {
        question: 'Why are keys important in React lists?',
        answer:
          'Help React identify which items changed, added, or removed. Should be stable, unique among siblings, preferably IDs not indexes.',
      },
      {
        question: 'What are the three phases of React Fiber?',
        answer:
          'Render/reconciliation: creates work-in-progress tree. Pre-commit: runs lifecycle methods. Commit: applies changes to DOM.',
      },
      {
        question: 'How does React handle element type changes?',
        answer:
          'Different types at same position cause complete subtree unmount and remount. Example: <div> to <span> rebuilds entire subtree.',
      },
      {
        question: 'What is the purpose of React keys?',
        answer:
          'Provide stable identity for list items during re-renders. Prevent unnecessary re-renders and preserve component state.',
      },
      {
        question: 'What are the limitations of using index as key?',
        answer:
          'Causes issues when list order changes (reorders, inserts, deletions). Items lose state, performance degradation, unexpected behavior.',
      },
      {
        question: 'How does React batch updates?',
        answer:
          'Groups multiple state updates into single re-render. In React 17+: automatic batching in most handlers. React 18: automatic batching everywhere.',
      },
    ],
  },
  {
    title: 'React Memo, useMemo and useCallback Hook in React',
    link: 'https://www.notion.so/Lecture07-React-memo-useMemo-useCallback-2ce3a78e0e2280b69d97f561779b69c8',
    questions: [
      {
        question: 'What is React.memo()?',
        answer:
          "Higher Order Component that memoizes functional components. Prevents re-renders when props haven't changed (shallow comparison).",
      },
      {
        question: 'What is the useMemo hook?',
        answer:
          'Memoizes expensive computations. Returns memoized value, only recalculates when dependencies change.',
      },
      {
        question: 'What is the useCallback hook?',
        answer:
          'Memoizes functions. Returns memoized callback, only recreates when dependencies change.',
      },
      {
        question: 'When should you use React.memo?',
        answer:
          'For components that render often with same props, expensive to render, or when parent re-renders unnecessarily.',
      },
      {
        question: 'When should you use useMemo?',
        answer:
          'For expensive calculations, derived state, or preventing unnecessary re-computations in renders.',
      },
      {
        question: 'When should you use useCallback?',
        answer:
          'When passing callbacks to optimized child components, or when function identity matters for effects/dependencies.',
      },
      {
        question: "What's the difference between useMemo and useCallback?",
        answer:
          'useMemo: memoizes values/results. useCallback: memoizes functions themselves.',
      },
      {
        question: 'How do you customize comparison in React.memo?',
        answer:
          'Pass second argument: arePropsEqual function. Compares previous and next props, returns true if equal.',
      },
      {
        question:
          'What are the performance implications of overusing memoization?',
        answer:
          'Memory overhead, complexity, premature optimization. Only use when measurable performance benefits.',
      },
      {
        question: 'How do useMemo and useCallback affect dependency arrays?',
        answer:
          'Stabilize values/functions, preventing infinite loops in useEffect/useMemo/useCallback dependencies.',
      },
    ],
  },
  {
    title: 'useRef Hook in React JS',
    link: 'https://www.notion.so/Lecture08-useRef-Hook-2d63a78e0e2280d5acd2c23ad28b9bee',
    questions: [
      {
        question: 'What is the useRef hook?',
        answer:
          'Hook that creates mutable reference object with .current property. Persists across re-renders without causing re-renders.',
      },
      {
        question: 'What are the main use cases for useRef?',
        answer:
          "Accessing DOM elements, storing mutable values that don't trigger re-renders, keeping previous state values.",
      },
      {
        question: 'How do you access DOM elements with useRef?',
        answer:
          'Create ref: const inputRef = useRef(null). Attach to element: <input ref={inputRef}>. Access: inputRef.current.focus().',
      },
      {
        question: 'How does useRef differ from useState?',
        answer:
          "useRef: mutable, changes don't trigger re-render, .current property. useState: immutable via setter, changes trigger re-render.",
      },
      {
        question: 'Can useRef store values other than DOM references?',
        answer:
          'Yes, any mutable value: interval IDs, previous props/state, counters, or any persistent data across renders.',
      },
      {
        question: 'How do you use useRef to track previous values?',
        answer:
          'Use useEffect to update ref after render: useEffect(() => { prevRef.current = value; }, [value]);',
      },
      {
        question: 'What is the lifetime of a useRef value?',
        answer:
          'Persists for full component lifetime. Created on initial render, exists until component unmounts.',
      },
      {
        question: "Why doesn't changing useRef.current cause re-render?",
        answer:
          "useRef returns plain JavaScript object. React doesn't track .current property changes for re-renders.",
      },
      {
        question: 'How do you use multiple refs in a component?',
        answer:
          'Create separate useRef calls for each ref needed. Example: const inputRef = useRef(); const divRef = useRef();',
      },
      {
        question: 'What are the common mistakes with useRef?',
        answer:
          'Accessing ref before attachment (null), using for state that should trigger re-render, mutating during render.',
      },
    ],
  },
];

// Combine all data
const LEARNING_DATA = {
  javascript: JS_TOPICS,
  react: REACT_TOPICS,
};

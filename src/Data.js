
import { FaHtml5, FaCss3Alt, FaJs,  FaJava } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { IoLogoPython } from "react-icons/io";

import { SiThealgorithms } from "react-icons/si";


 export const topics = [
  {
    id: 'html',
    name: 'HTML',
    icon: "FaHtml5" ,  
  },
  {
    id: 'css',
    name: 'CSS',
    icon: "FaCss3Alt" ,  // CSS Icon from React Icons
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: "FaJs" ,  // JavaScript Icon from React Icons
  },
  {
    id: 'python',
    name: 'Python',
    icon: "IoLogoPython" ,  // Python Icon from React Icons
  },
  {
    id: 'java',
    name: 'Java',
    icon: "FaJava" ,  // Java Icon from React Icons
  },
  {
    id: 'dsa',
    name: 'DSA',
    icon: "SiThealgorithms",  // Algorithms Icon from React Icons
  },
  {
    id: 'c',
    name: 'C ',
    icon: "SiC" ,  // C Icon from React Icons
  },
];


export const Freecourse = [
  {  
    id : 1,
    "title": "Master in Operating Systems",
    "description": "This course provides an in-depth exploration of operating systems, the backbone of modern computing. You’ll start with the basics of what an operating system is and its role in managing hardware and software resources. As you progress, you’ll delve into more advanced topics such as process management, where you’ll learn how operating systems handle multitasking and manage CPU resources. Memory management is another critical area covered, where you’ll understand how operating systems allocate and manage memory for different processes. You’ll also explore file systems, understanding how data is stored, retrieved, and managed on various storage devices. ",
    "features": [
      "Comprehensive coverage of operating system concepts",
      "In-depth lessons on process and memory management",
      "Hands-on labs and projects",
      "Real-world case studies"
    ],
    "benefits": "Gain a deep understanding of how operating systems work, improve your ability to troubleshoot and optimize system performance, and prepare for advanced studies or careers in system administration.",
    "conclusion": "This course is ideal for anyone looking to master operating systems and pursue a career in IT, software development, or systems engineering.",
    "image": "https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5,
    "pricing": "Free"
  },
  {
    id : 2,
    "title": "Learn HTML in 20 Days",
    "description": "HTML is the foundational language for creating web pages and web applications. This course is designed to take you from a complete beginner to a confident web developer in just 20 days. You’ll start by learning the basic structure of an HTML document and how to use various HTML tags to create headings, paragraphs, links, and images. As you progress, you’ll dive deeper into more complex topics like forms, tables, and semantic elements that improve the accessibility and SEO of your web pages. ",
    "features": [
      "Step-by-step guide to HTML basics",
      "Coverage of advanced HTML elements and attributes",
      "Practical examples and coding exercises",
      "Focus on accessibility and SEO best practices"
    ],
    "benefits": "Learn how to create the structure of web pages, understand the importance of semantic HTML, and build a strong foundation for learning CSS and JavaScript.",
    "conclusion": "This course is perfect for anyone looking to start a career in web development or enhance their skills in creating structured and accessible web content.",
    "image": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7,
    "pricing": "Free"
  },
  {
    id : 3,
    "title": "Learn CSS in 30 Days",
    "description": "CSS is the language used to style HTML documents and is essential for creating visually appealing and responsive web pages. In this 30-day course, you’ll learn how to transform plain HTML pages into beautiful, well-designed websites. The course starts with the basics of CSS, including selectors, properties, and values, before moving on to more advanced topics like layouts, positioning, and responsive design. You’ll learn how to use Flexbox and Grid to create complex layouts that adapt to different screen sizes. ",
    "features": [
      "Comprehensive guide to CSS basics and advanced topics",
      "In-depth coverage of Flexbox and Grid layouts",
      "Practical examples and hands-on projects",
      "Introduction to CSS preprocessors like Sass"
    ],
    "benefits": "Master the art of styling web pages, learn how to create responsive designs that work on any device, and enhance your web development skill set.",
    "conclusion": "This course is ideal for aspiring web designers and developers who want to create visually stunning and user-friendly websites.",
    "image": "https://images.unsplash.com/photo-1524666643752-b381eb00effb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6,
    "pricing": "Free"
  },
  {
    id : 4,
    "title": "Master in PHP",
    "description": "PHP is one of the most popular server-side scripting languages used to develop dynamic web applications. This course takes you from the basics of PHP to mastering advanced concepts, making you a proficient PHP developer. You’ll start with understanding the syntax and basic constructs of PHP, such as variables, loops, and functions. As you progress, you’ll learn about working with forms, handling user input, and connecting to databases using MySQL. ",
    "features": [
      "Detailed coverage of PHP syntax and constructs",
      "Introduction to database connectivity with MySQL",
      "Security best practices and input validation",
      "Real-world projects and hands-on experience"
    ],
    "benefits": "Develop dynamic, database-driven web applications, learn best practices for secure coding, and enhance your backend development skills.",
    "conclusion": "This course is perfect for anyone looking to become a backend developer or enhance their knowledge of server-side scripting with PHP.",
    "image": "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGMlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "rating": 4.4,
    "pricing": "Free"
  },
  {
    id : 5,
    "title": "Understand DBMS Concepts",
    "description": "Database Management Systems (DBMS) are crucial for managing data in any organization. This course provides a thorough understanding of DBMS concepts, from the basics of database design and modeling to advanced topics like normalization, indexing, and transaction management. You’ll start with understanding the relational model and how data is structured in tables. As you progress, you’ll learn about SQL, the standard language for querying and manipulating databases. The course also covers key concepts like database normalization, which ensures that your data is stored efficiently, and transaction management, which ensures data integrity. ",
    "features": [
      "Comprehensive coverage of DBMS fundamentals",
      "In-depth lessons on SQL and relational databases",
      "Focus on database normalization and transaction management",
      "Hands-on exercises and real-world examples"
    ],
    "benefits": "Gain a strong foundation in managing and designing databases, learn how to write efficient SQL queries, and prepare for careers in data management and software development.",
    "conclusion": "This course is ideal for aspiring database administrators, data analysts, and software developers who want to master database management.",
    "image": "https://images.unsplash.com/photo-1658204238967-3a81a063d162?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5,
    "pricing": "Free"
  },
  {
    id : 6,
    "title": "Learn JavaScript Basics in 20 Days",
    "description": "JavaScript is the programming language that brings web pages to life, enabling interactive content, dynamic interfaces, and complex user experiences. This 20-day course is designed for beginners who want to learn the fundamentals of JavaScript and start building interactive web applications. You’ll begin with understanding the basic syntax and constructs of JavaScript, including variables, data types, and operators. As you progress, you’ll learn about control structures like loops and conditionals, functions, and how to manipulate the Document Object Model (DOM) to create dynamic web pages.",
    "features": [
      "Comprehensive guide to JavaScript basics",
      "Focus on DOM manipulation and event handling",
      "Interactive examples and coding challenges",
      "Introduction to debugging and best practices"
    ],
    "benefits": "Learn how to add interactivity to your web pages, understand the fundamentals of JavaScript programming, and build a strong foundation for advanced JavaScript frameworks and libraries.",
    "conclusion": "This course is perfect for beginners who want to start their journey into web development and learn how to create dynamic and interactive web applications.",
    "image": "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8,
    "pricing": "Free"
  },
  {
    id : 7,
    "title": "Introduction to Machine Learning",
    "description": "Machine Learning is at the forefront of technological innovation, driving advancements in AI, data analysis, and automation. This introductory course provides a solid foundation in machine learning concepts, covering both supervised and unsupervised learning techniques. You’ll start with an understanding of what machine learning is and its applications in various fields. As you progress, you’ll learn about key algorithms like linear regression, decision trees, and clustering. The course also covers how to preprocess data, train models, and evaluate their performance.",
    "features": [
      "Introduction to supervised and unsupervised learning",
      "Coverage of key algorithms like regression and clustering",
      "Hands-on projects and practical examples",
      "Focus on data preprocessing and model evaluation"
    ],
    "benefits": "Gain a foundational understanding of machine learning, learn how to apply machine learning algorithms, and prepare for advanced studies or careers in data science and AI.",
    "conclusion": "This course is ideal for anyone interested in entering the field of machine learning or enhancing their data analysis skills.",
    "image": "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7,
    "pricing": "Free"
  },
  {
    id : 8,
    "title": "Get Started with ChatGPT",
    "description": "ChatGPT is a powerful AI language model that can be used to create a wide range of applications, from chatbots to content generation tools. This course is designed to help you get started with ChatGPT, covering everything from basic usage to building your own applications. You’ll start by learning how ChatGPT works and how to interact with it through simple text prompts. As you progress, you’ll dive into more advanced topics like API integration, allowing you to build applications that can interact with ChatGPT programmatically. ",
    "features": [
      "Introduction to ChatGPT and its capabilities",
      "Coverage of API integration and prompt engineering",
      "Practical examples and project-based learning",
      "Focus on ethical considerations and best practices"
    ],
    "benefits": "Learn how to leverage AI for various applications, gain experience with API integration, and develop skills in prompt engineering.",
    "conclusion": "This course is perfect for developers, content creators, and anyone interested in using AI to build innovative applications.",
    "image": "https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6,
    "pricing": "Free"
  },
  {
    id : 9,
    "title": "Master Prompt Engineering",
    "description": "Prompt engineering is an essential skill for anyone working with AI language models like ChatGPT. This course dives deep into the art of crafting effective prompts that elicit the best responses from AI models. You’ll start by understanding the basic principles of prompt engineering, including how to structure your prompts to achieve specific outcomes. As you progress, you’ll learn about advanced techniques for refining prompts, such as using contextual clues and multi-turn conversations. The course also covers how to evaluate the quality of AI outputs and make adjustments to your prompts as needed. ",
    "features": [
      "In-depth coverage of prompt engineering techniques",
      "Focus on structuring and refining prompts",
      "Practical exercises and real-world examples",
      "Introduction to evaluating and improving AI outputs"
    ],
    "benefits": "Learn how to maximize the effectiveness of AI models, develop skills in crafting precise and effective prompts, and enhance your ability to work with AI-driven tools.",
    "conclusion": "This course is ideal for AI developers, researchers, and anyone looking to master the art of prompt engineering for better AI interactions.",
    "image": "https://images.unsplash.com/photo-1712002641287-f9c8b7161c8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8,
    "pricing": "Free"
  }
];

















export const PaidCourses = [
  { 
    id: 1,
    title: "Advanced JavaScript Mastery",
    description: "Dive deep into JavaScript with advanced concepts such as closures, asynchronous programming, and design patterns. Perfect for those looking to master the language.",
    image: "https://images.unsplash.com/photo-1667372393096-9c864313e868?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    pricing: "$99",
    access: "Lifetime Access",
    features: [
      "In-depth video lectures",
      "Interactive coding exercises",
      "Certificate of Completion",
      "24/7 Support"
    ],
    benefits: "Gain a comprehensive understanding of advanced JavaScript, improve your problem-solving skills, and become proficient in writing clean and efficient code.",
    conclusion: "This course is ideal for developers who want to elevate their JavaScript skills to the next level and build high-quality web applications."
  },
  { 
    id: 2,
    title: "Full Stack Web Development",
    description: "An intensive bootcamp covering both front-end and back-end technologies. Learn HTML, CSS, JavaScript, Node.js, and more in this comprehensive course.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    pricing: "$299",
    access: "1 Year Access",
    features: [
      "Hands-on projects",
      "Real-world case studies",
      "Access to industry experts",
      "Job placement assistance"
    ],
    benefits: "Become a well-rounded full-stack developer with the ability to build complete web applications from scratch, and increase your employability in the tech industry.",
    conclusion: "This course is perfect for aspiring developers who want to gain the skills needed to build dynamic web applications and pursue a career in full-stack development."
  },
  { 
    id: 3,
    title: "Data Science with Python",
    description: "Master data science with Python, covering data analysis, visualization, and machine learning techniques. Ideal for those seeking to enter the data science field.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    rating: 4.7,
    pricing: "$149",
    access: "6 Months Access",
    features: [
      "Hands-on data projects",
      "Python programming",
      "Advanced analytics techniques",
      "Personalized feedback"
    ],
    benefits: "Develop strong data science skills using Python, learn to analyze and visualize data effectively, and gain practical experience through hands-on projects.",
    conclusion: "This course is ideal for individuals who want to break into the data science field and leverage Python to analyze complex datasets."
  },
  { 
    id: 4,
    title: "Master in Machine Learning",
    description: "An introductory course covering the basics of machine learning, including supervised and unsupervised learning, and fundamental algorithms.",
    image: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    pricing: "$199",
    access: "1 Year Access",
    features: [
      "Comprehensive tutorials",
      "Hands-on projects",
      "Expert support",
      "Certificate of Completion"
    ],
    benefits: "Learn the fundamentals of machine learning, understand key algorithms, and apply these concepts to real-world problems, boosting your career in AI.",
    conclusion: "This course is a great starting point for anyone interested in machine learning and AI, providing a solid foundation in the key concepts and techniques."
  },
  { 
    id: 5,
    title: "Deep Learning Specialization",
    description: "Explore deep learning techniques with a focus on neural networks, CNNs, and RNNs. Perfect for those looking to delve into advanced machine learning topics.",
    image: "https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    pricing: "$349",
    access: "Lifetime Access",
    features: [
      "Advanced deep learning techniques",
      "Real-world applications",
      "Hands-on assignments",
      "1-on-1 mentorship"
    ],
    benefits: "Gain expertise in deep learning, work on real-world projects, and receive personalized guidance to help you master complex topics and advance your career.",
    conclusion: "This specialization is ideal for professionals and enthusiasts looking to deepen their knowledge of deep learning and apply it to cutting-edge AI projects."
  },
  { 
    id: 6,
    title: "Graphic Design Fundamentals",
    description: "Learn the fundamentals of graphic design, including typography, color theory, and layout design. Ideal for beginners and those looking to improve their design skills.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    pricing: "$129",
    access: "6 Months Access",
    features: [
      "Practical design exercises",
      "Design principles",
      "Software tutorials",
      "Certificate of Completion"
    ],
    benefits: "Build a strong foundation in graphic design, learn essential tools and techniques, and create professional designs that stand out.",
    conclusion: "This course is perfect for beginners looking to start a career in graphic design or improve their existing skills."
  },
  { 
    id: 7,
    title: "Mastering Data Visualization",
    description: "Explore advanced data visualization techniques using tools like Tableau and D3.js. Learn to create interactive and impactful visualizations.",
    image: "https://plus.unsplash.com/premium_photo-1682310178386-1d20be620733?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    pricing: "$179",
    access: "1 Year Access",
    features: [
      "Interactive visualization tools",
      "Advanced charting techniques",
      "Real-world data projects",
      "Expert guidance"
    ],
    benefits: "Learn to present data in a visually appealing and understandable manner, enhance your data storytelling skills, and apply them to real-world scenarios.",
    conclusion: "This course is ideal for data enthusiasts who want to master the art of data visualization and create impactful, data-driven narratives."
  },
  { 
    id: 8,
    title: "Advanced Data Analysis with Python",
    description: "Dive into advanced data analysis techniques using Python. Learn to handle large datasets, perform complex analyses, and visualize results effectively.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    pricing: "$179",
    access: "1 Year Access",
    features: [
      "Advanced Python techniques",
      "Comprehensive data analysis",
      "Interactive visualizations",
      "Personalized feedback"
    ],
    benefits: "Enhance your Python skills, learn to analyze and interpret large datasets, and apply these skills to real-world business problems.",
    conclusion: "This course is perfect for analysts and data scientists who want to advance their Python and data analysis skills to tackle complex data challenges."
  },
  { 
    id: 9,
    title: "Complete UI/UX Design Course",
    description: "Master UI/UX design principles with a focus on creating user-centered designs. Learn wireframing, prototyping, and user testing in this extensive course.",
    image: "https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    pricing: "$219",
    access: "Lifetime Access",
    features: [
      "UI/UX design fundamentals",
      "Prototyping tools",
      "Real-world case studies",
      "Expert guidance"
    ],
    benefits: "Develop a strong understanding of user experience and interface design, learn to create intuitive and user-friendly designs, and gain practical experience with industry-standard tools.",
    conclusion: "This course is perfect for aspiring UI/UX designers who want to master the skills needed to create engaging and effective user experiences."
  }
];




























export const Ebooks = [
  {
      "id": 1,
      "title": "Bootstrap Interview Question",
      "author": "Code with Random",
      "fileUrl": "/documents/Bootstrap Interview Question.pdf",
      "imageUrl": "/images/bootstrap.png"
  },
  {
      "id": 2,
      "title": "CSS Interview Question",
      "author": "Code with Random",
      "fileUrl": "/documents/CSS Interview Question.pdf",
      "imageUrl": "/images/css.png"
  },
  {
      "id": 3,
      "title": "Hand Written Notes All",
      "author": "Code with Random",
      "fileUrl": "/documents/Hand Written Notes All.pdf",
      "imageUrl": "/images/notes.png"
  },
  {
      "id": 4,
      "title": "HTML Interview Question",
      "author": "Code with Random",
      "fileUrl": "/documents/HTML Interview Question.pdf",
      "imageUrl": "/images/html.png"
  },
  {
      "id": 5,
      "title": "JavaScript Interview Question",
      "author": "Code with Random",
      "fileUrl": "/documents/JavaScript Interview Question.pdf",
      "imageUrl": "/images/javascript.png"
  },
  {
      "id": 6,
      "title": "Master Frontend Ebook",
      "author": "Code with Random",
      "fileUrl": "/documents/Master Frontend Ebook.pdf",
      "imageUrl": "/images/frontend.png"
  },
  {
      "id": 7,
      "title": "Python Ebook",
      "author": "Code with Random",
      "fileUrl": "/documents/Python Ebook.pdf",
      "imageUrl": "/images/python.png"
  },
  {
      "id": 8,
      "title": "React Interview Question",
      "author": "Code with Random",
      "fileUrl": "/documents/React Interview Question.pdf",
      "imageUrl": "/images/react.png"
  },
  {
      "id": 9,
      "title": "React",
      "author": "Code with Random",
      "fileUrl": "/documents/React.pdf",
      "imageUrl": "/images/react.png"
  }
]

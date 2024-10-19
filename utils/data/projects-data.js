import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Tick Tick Go",
    description:
      "As part of my third-semester coursework in Design Thinking and Methodology, I developed a task management application using React.js. The app allows users to efficiently manage tasks by adding, editing, completing, and deleting them, with data persistence through Local Storage. It utilizes a component-based architecture with React Hooks for state management and unique identifiers for seamless task tracking. The interface, enhanced with FontAwesome icons, ensures a user-friendly experience. This project refined my skills in React.js and reinforced my understanding of user-centered design principles.",
    tools: ["React", "MongoDB", "Node", "HTML", "CSS", "JavaScript"],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Process State Transition",
    description:
      "As part of my third-semester coursework in Operating Systems, I developed an educational tool that models the lifecycle of processes within an operating system. This simulator visualizes key concepts such as process states, scheduling mechanisms, and performance metrics. Built in Python, it features an interactive interface that demonstrates transitions between states like New, Ready, Running, Waiting, and Terminated. It incorporates scheduling algorithms such as First-Come, First-Served (FCFS), Shortest Job Next (SJN), and Round Robin, allowing users to adjust parameters and observe their impact on metrics like turnaround time, waiting time, and CPU utilization. This project strengthened my understanding of scheduling trade-offs and provided practical experience in process management.",
    tools: [
      "Python",

      "Visual Studio Code",
      "PyCharm (Development Environment)",
      "Git / GitHub (Version Control)",
      "FCFS, SJN, Round Robin (Scheduling Algorithms)",
    ],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Appointment Scheduler",
    description:
      "As part of my third-semester course, 'Data Structures and Algorithms,' I developed the Appointment Scheduler, a C-based application designed to manage appointments efficiently using a priority queue implemented as a binary min-heap. This data structure ensures that appointments are dynamically sorted by their scheduled datetime, allowing the earliest appointment to be retrieved instantly. The application supports key operations such as inserting new appointments, deleting the earliest one, and retrieving the next upcoming appointment, all while maintaining efficient time complexities. This project exemplifies my understanding of data structures and their practical applications in real-time scheduling systems, with potential for future enhancements to improve scalability and functionality.",
    tools: ["C", "Binary Min-Heap", "Priority Queue"],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 4,
    name: "Word Count Application",
    description:
      "As part of my third-semester coursework in 'Advanced Programming Practice', I developed a Word Count Application using Python. This application processes textual input to accurately calculate the frequency of each word, showcasing essential concepts in text processing and data analysis. Key features include robust text normalization to handle case sensitivity, punctuation, and whitespace variations, ensuring reliable results. The application employs efficient data structures, such as dictionaries, for quick management of word counts and integrates data visualization for easy interpretation of word frequency patterns. This project not only enhances my programming skills but also deepens my understanding of natural language processing principles.",
    tools: ["Python", "Dictionaries", "Data Visualization"],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 5,
    name: "Coinify",
    description:
      "On February 2, 2024, during Project Day at SRM Institute of Science and Technology, Ramapuram, I showcased my project, Coinify. This innovative application revolutionized data encryption by transforming any text into a secure digital coin, protected by a unique password for decryption. Coinify ensured the privacy and security of sensitive information, providing a seamless solution for safeguarding valuable data. When shared via communication apps like WhatsApp or Facebook, the encrypted text appeared as a coin emoji, enhancing confidentiality in digital communication. This project exemplified my commitment to advancing secure data solutions and innovative encryption techniques.",
    tools: [
      "Python",
      "Encryption Algorithms",
      "Communication Apps Integration",
    ],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 6,
    name: "Rock, Paper, Scissors Game",
    description:
      "As part of my second-semester course, 'Object Oriented Design and Programming,' I developed a C++ application that simulates the classic game of Rock, Paper, Scissors, allowing users to compete against the computer in a dynamic and engaging environment. This project involved creating a user-friendly interface for intuitive gameplay, where players select their moves while the computer randomly generates its choices. I applied key object-oriented programming concepts, including enums and functions, to implement game logic and control flow, ensuring an entertaining experience with real-time feedback on wins, losses, and ties. This project not only demonstrates my proficiency in C++ but also highlights my ability to design interactive applications and enhance user experiences through effective programming techniques.",
    tools: ["C++", "Object-Oriented Programming", "User Interface Design"],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 7,
    name: "Strong Password Generator",
    description:
      "As part of my first-semester course, 'Programming for Problem Solving', I developed a robust Python script designed to generate highly secure, randomized passwords. The script harnesses the capabilities of Python’s string and random modules to create complex passwords, incorporating a broad spectrum of characters—including uppercase and lowercase letters, numbers, and special symbols—to ensure maximum security. It empowers users with the flexibility to customize password length, catering to diverse security requirements. To bolster the strength of each password, the script employs a randomized character selection algorithm followed by a final shuffle, significantly increasing its unpredictability and resistance to common password-cracking techniques. This solution is ideal for securing personal accounts and generating administrative-level passwords, making it a versatile tool for both everyday users and IT professionals in need of strong, reliable password security.",
    tools: [
      "Python",
      "String and Random Modules",
      "Password Security Techniques",
    ],
    role: "Team Lead and Developer",
    code: "",
    demo: "",
    image: "",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

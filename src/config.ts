export const siteConfig = {
  name: "Mohawiz Hamid",
  title: "Data and AI Engineer",
  description: "Portfolio website of Mohawiz Hamid",
  accentColor: "#1d4ed8",
  social: {
    email: "mohawizh@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohawiz-hamid-97b88525a?",
    github: "https://github.com/mohawiz",
  },
  aboutMe:
    "Data Science graduate with expertise in Python, machine learning, and cloud-based system development. I build end-to-end, data-driven applications by integrating AI/ML models—including NLP and deep learning—into full-stack solutions using frameworks like FastAPI and Vue.js. My project experience spans healthcare automation, intelligent chatbots, business intelligence dashboards, and OCR-driven workflow systems. I am focused on developing practical, scalable AI tools that enhance decision-making and solve complex real-world problems.",
  skills: ["Python","Javascript","Vue.js", "React", "Node.js", "C/C++", "Java","SQL","Docker","Linux"],
  
  projects: [
    {
      name: "Seamless Automation of Data Analysis via LLMs",
      description:
        "Engineered a system using LLMs to automate the end-to-end data analysis pipeline. It interprets complex datasets and delivers precise analytical reports, eliminating manual analysis steps.",
      link: "https://github.com/mohawiz/FYP2252",
      skills: ["Python", "Streamlit", "LLama","Cohere","Matplotlib","Seaborn"],
    },
    {
      name: "Linear Regression on Advertising Budget and Sales Data",
      description:
        "Implemented a linear regression analysis to predict sales outcomes based on multi-channel advertising data. The project involved comprehensive EDA, data standardization with StandardScaler, and model validation, identifying TV ad spend as the most significant predictor.",
      link: "https://github.com/mohawiz/Linear_Regression",
      skills: ["Python", "Numpy","Scikitlearn","Lenear Regression","Data-Wrangling"],
    },
    {
      name: "Sentiment Analysis using LSTM (IMDb Dataset)",
      description:
        "Built and benchmarked multiple ML models—Linear Regression, Support Vector Machine, and Naive Bayes—for sentiment analysis on a large-scale IMDB dataset. The project highlights how different algorithmic approaches tackle the same text classification problem with varied results.",
      link: "https://github.com/mohawiz/Sentiment-Analysis-IMDB",
      skills: ["Python", "LLama", "ML-Models"],
    },
  ],
  experience: [
    {
      company: "Petcon Oil & Gas Services",
      title: "Data & AI Engineer",
      dateRange: "July 2025 - Present",
      bullets: [
        "Developed and customized enterprise-level applications using the Frappe Framework, Vue.js, JavaScript, and Python.",
        "Built integrated solutions with robust front-end interfaces and back-end systems to meet specific business requirements.",
        "Enhanced overall system efficiency and user experience (UX) across various application modules.",
        "Automated key business processes using OCR technology (Tesseract) to digitize and streamline document workflows.",
        
      ],
    },
    {
      company: "IT SOLERA",
      title: "AI Intern",
      dateRange: "July 2024 - September 2024",
      bullets: [
        "Successfully completed an internship focused on Artificial Intelligence and Natural Language Processing (NLP)",
        "Developed AI solutions focused on the Healthcare sector, including Chatbot systems",
        "Explored and applied techniques for AI Speech-to-Speech Model development, specifically involving Image-Based Communication",
        "Demonstrated an exceptional ability to learn quickly, adapt to various challenges, and collaborate effectively with the team.",
        
      ],
    },
    {
      company: "CyberSync Technologies",
      title: "AI Intern",
      dateRange: "Aug 2023 - September 2023",
      bullets: [
        "Performed end-to-end data preprocessing, exploratory data analysis (EDA), and developed machine learning models to extract actionable insights for business intelligence tasks.",
        "Assisted in building and implementing classification models and conversational AI systems, contributing to projects from prototyping to integration.",
        "Utilized a core data science stack including Python, pandas, scikit-learn, and spaCy to create efficient data handling pipelines and machine learning workflows",
      ],
    },
  ],
  education: [
    {
      school: "University of Engineering and Technology, Peshawar",
      degree: "Bachelor of Science in Data Science",
      dateRange: "2021 - 2025",
      achievements: [
        "Graduated with a B.Sc. in Data Science from UET Peshawar (CGPA: 3.48/4.00)",
        "Demonstrated strong academic performance, achieving a high CGPA in core Data Science disciplines.",
        "Developed proficiency in key areas including Data Mining, Machine Learning, and Big Data technologies.",
      ],
    },
    {
      school: "AtomCamp",
      degree: "Gen AI | Data Analytics BootCamp",
      dateRange: "2025",
      achievements: [
        "Successfully completed two advanced bootcamps in Generative AI and Data Analytics from AtomCamp.",
        "Proficient in a diverse stack of analytical and AI tools, including SQL, Python, and advanced NLP Models.",
        "Applied expertise in **Exploratory Data Analysis (EDA), model fine-tuning, and specialized geospatial analysis tools like QGIS and Pysloth.",
      ],
    },
  ],
};

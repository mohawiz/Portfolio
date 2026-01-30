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
        "Engineered a web-based data analysis assistant using Streamlit, LangChain, and LLMs (Cohere, LLaMA) that allows users to perform complete exploratory data analysis through natural language prompts. The system automates data summarization, visualization generation, and profiling, enabling non-technical users to gain insights from datasets like Titanic without writing code.",
      link: "https://github.com/mohawiz/Seamless-Automation-of-Data-Analysis-via-LLMS",
      skills: ["Python", "Streamlit", "LLama","Cohere","Matplotlib","Seaborn", 'Large Language Models (LLM)', 'Natural Language Processing (NLP)', 'Automated Data Analysis', 'Streamlit', 'LangChain', 'Data Visualization'],
    },
    {
      name: "Linear Regression on Advertising Budget and Sales Data",
      description:
        "Built a predictive analytics model to forecast sales based on advertising budget allocation across TV, Radio, and Newspaper channels. Performed comprehensive data analysis including correlation heatmaps and feature standardization, achieving a model with RMSE of 1.56, identifying TV advertising as the strongest predictor (correlation: 0.78). The project demonstrates end-to-end machine learning workflow from EDA to model evaluation.",
      link: "https://github.com/mohawiz/Linear_Regression",
      skills: ["Python", "Numpy","Scikitlearn","Lenear Regression","Data-Wrangling", 'Linear Regression', 'Predictive Analytics', 'Feature Correlation', 'Advertising Analytics', 'Scikit-learn'],
    },
    {
      name: "Sentiment Analysis using LSTM (IMDb Dataset)",
      description:
        "This project involved building and comparing three different machine learning models (Linear Regression, Support Vector Machine, and Naïve Bayes) to classify the sentiment of 50,000 movie reviews as positive or negative. It included a complete NLP pipeline from text preprocessing and feature extraction (like TF-IDF) to model training and evaluation. The comparative analysis of the models highlights their distinct strengths and weaknesses in handling textual data for sentiment classification.",
      link: "https://github.com/mohawiz/Sentiment-Analysis-IMDB",
      skills: ["Python", "LLama", "ML-Models", 'Sentiment Analysis', 'NLP', 'Text Classification', 'Model Comparison', 'Scikit-learn', 'IMDB Reviews'],
    },
    {
      name: "RAG-Powered Healthcare Chatbot",
      description:
        "Developed a specialized medical chatbot that processes medical literature (PDFs) using Retrieval-Augmented Generation (RAG). The system extracts and chunks text from PDFs, creates vector embeddings via a Sentence Transformer, and stores them in a Pinecone vector database for efficient semantic search. User queries retrieve relevant medical context, which is then synthesized into accurate, source-grounded responses using the LLaMA 3 70B model via the Groq API.",
      link: "https://github.com/mohawiz/Sentiment-Analysis-IMDB",
      skills: ['Retrieval-Augmented Generation (RAG)', 'Healthcare AI', 'Vector Database', 'LangChain', 'Pinecone', 'LLaMA 3', 'Medical NLP', 'PDF Processing'],
    },
    {
      name: "AI Voice Assistant with Groq & LLaMA",
      description:
        "Developed an interactive AI voice assistant that integrates speech-to-text, the Groq LLaMA 3.1 70B language model, and text-to-speech into a seamless, real-time conversation loop. The application enables natural spoken interactions by capturing audio via microphone, transcribing and processing queries with a state-of-the-art LLM, and delivering responses with synthesized speech, complete with maintained conversation context.",
      link: "https://github.com/mohawiz/AI-Speech-to-Speech-Model-with-Image-Based-Communication",
      skills: ["Conversational AI", "Voice Assistant", "Groq API", "LLaMA 3.1", "Speech-to-Text", "Text-to-Speech", "Real-time Processing"],
    },
    {
      name: "Personal Protective Equipment (PPE) detection system",
      description:
        "Python-based computer vision application that performs live detection of Personal Protective Equipment (PPE). It uses a state-of-the-art YOLO (You Only Look Once) object detection model to analyze video from a webcam feed in real-time. The script continuously captures frames, processes them through a pre-trained model (best.pt), draws bounding boxes and labels around detected safety gear (e.g., hard hats, vests), and displays the annotated video stream to the user.",
      link: "https://github.com/mohawiz/Personal-Protective-Equipment-PPE-detection-system",
      skills: ["Bounding Box Visualization",
    "OpenCV (cv2) Library",
    "Ultralytics YOLO Framework",
    "Real-time Video Processing",
    "Computer Vision",
    "Object Detection",
    "Python"],
    },
    {
      name: "Enterprise Learning Management System (LMS) for Oil & Gas",
      description:
        "End-to-End development, customization, and on-premises deployment of a secure, enterprise-grade Learning Management System (LMS). The platform manages mandatory compliance training, technical skill certifications, and safety protocols for a specialized industrial workforce, serving as the central hub for organizational competency and compliance tracking.",
      link: "https://ace.petconlms.com/lms/courses?",
      skills: ['Computer Vision', 'OCR', 'Tesseract', 'Vue', 'Python', 'Frappe Framework', "Full-Stack Development","Linux Deployment", "Enterprise Application","Docker"],
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
        "Applied expertise in Exploratory Data Analysis (EDA), model fine-tuning, and specialized geospatial analysis tools like QGIS and Pysloth.",
      ],
    },
  ],
};

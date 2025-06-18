/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Guilherme Santos",
  title: "Hi all, I'm Guilherme",
  subTitle: emoji(
    "Senior Full-Stack Developer and AI/ML Engineer 🚀 with 15+ years in IT, 10+ years in full-stack development, and 5+ years specialized in AI/ML. Expert in GenAI solutions, RAG pipelines, and LLM integrations. Currently pursuing PhD in Computer Science focused on biosignal processing with Deep Learning."
  ),
  resumeLink:
    "http://lattes.cnpq.br/9555628106640180", // Lattes CV
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/guilhrme",
  linkedin: "https://www.linkedin.com/in/guilhrme",
  gmail: "guilhermesantos@outlook.com",
  youtube: "https://www.youtube.com/@dataquality",
  wordpress: "https://guilhrme.wordpress.com/",
  medium: "https://medium.com/@guilherme",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML ENGINEER & FULL-STACK DEVELOPER WHO LOVES TO EXPLORE CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop production-ready GenAI solutions, RAG pipelines, and LLM integrations using Azure AI Services"
    ),
    emoji("⚡ Build scalable AI-powered applications with PyTorch, TensorFlow, LangChain, and CrewAI"),
    emoji(
      "⚡ Design full-stack solutions with React, Node.js, and modern cloud infrastructure (Azure/AWS)"
    ),
    emoji(
      "⚡ Implement MLOps pipelines and data engineering solutions using Microsoft Fabric and Azure Databricks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "databricks",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "azure-synapse",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "microsoft-fabric",
      fontAwesomeClassname: "fas fa-layer-group"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University of Ceará (UFC)",
      logo: require("./assets/images/ufcLogo.png"),
      subHeader: "PhD in Computer Science",
      duration: "February 2025 - February 2030",
      desc: "Focused on Biosignal Processing (ECG, PPG, EEG) using signal processing techniques and Deep Learning/Machine Learning for classification.",
      descBullets: [
        "Research in partnership with Hospital Universitário Walter Cantídio (HUWC) and Samsung Korea",
        "Specialized in signal processing and neural networks for medical applications"
      ]
    },
    {
      schoolName: "Federal University of Ceará (UFC)",
      logo: require("./assets/images/ufcLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "March 2022 - November 2024",
      desc: "Thesis: Post-cardiac arrest prognosis using Deep Learning with EEG data analysis. Focused on Deep learning, EEG pattern analysis, Machine learning, Neural networks, Clinical outcome prediction.",
      descBullets: [
        "Developed multimodal classification systems for neurological assessment",
        "Applied automated feature extraction and time series analysis techniques"
      ]
    },
    {
      schoolName: "Centro Universitário Christus (Unichristus)",
      logo: require("./assets/images/unichristusLogo.png"),
      subHeader: "Bachelor's Degree in Information Systems",
      duration: "2008 - 2012",
      desc: "Foundation in software development, database management, and information systems design.",
      descBullets: [
        "Comprehensive education in software engineering principles",
        "Strong foundation in programming and system analysis"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML/GenAI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data & AI Technical Lead / Senior Full-Stack Developer",
      company: "Lanlink Informática",
      companylogo: require("./assets/images/lanlink-logo.jpg"),
      date: "2021 – Present",
      desc: "Leading Data & AI technical area, implementing production RAG systems and GenAI applications. Created innovative cloud-agnostic GenAI application management solution. Achieved Microsoft Advanced Specialization in AI/ML with top assessment score (39/40).",
      descBullets: [
        "Created innovative cloud-agnostic solution for GenAI application management, supporting multiple LLM models",
        "Architected production RAG systems using LangChain, LangGraph, and CrewAI with Vector Databases", 
        "Developed multi-agent AI architectures and MCP servers with LLM tools integration",
        "Built enterprise-scale GenAI applications with comprehensive evaluation pipelines",
        "Led mining industry projects using Azure ML Studio for regression models and deep learning"
      ]
    },
    {
      role: "Project Management Supervisor",
      company: "Grupo 3 Corações",
      companylogo: require("./assets/images/grupo-3-coracoes-logo.png"),
      date: "2019 – 2021",
      desc: "Supervised project teams managing medium and high complexity projects in Logistics, Supply, Procurement and Digital Transformation sectors.",
      descBullets: [
        "Managed project teams and improved PMO methodologies",
        "Presented agile project methodology to CEO",
        "Created project visibility dashboards using Power BI and Qlik Sense"
      ]
    },
    {
      role: "CTO & Co-Founder",
      company: "InterfaceIT",
      companylogo: require("./assets/images/interface-it-logo.png"),
      date: "2013 – 2018",
      desc: "First entrepreneurial experience managing Solution Delivery area. Led development team in deliveries for major clients, developing applications in .NET, JavaScript, Angular, Microsoft SQL Server, Reporting Services, Cloud, and other technologies.",
      descBullets: [
        "Led development team in deliveries for major clients using .NET, JavaScript, Angular",
        "Delivered Business Intelligence solutions using Microsoft SQL Server suite and Reporting Services",
        "Deployed Intranet Portals using SharePoint Server and SharePoint Online with custom .NET solutions",
        "Implemented Project Management solutions with Microsoft Project Server",
        "Developed cloud-based system integrations using Web Services and Microservices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research Projects",
  subtitle: "AI/ML RESEARCH PROJECTS IN PARTNERSHIP WITH INDUSTRY AND ACADEMIA",
  projects: [
    {
      image: require("./assets/images/ecg-heartbeat.png"),
      projectName: "SPPCR - Post-Cardiac Arrest Prediction System",
      projectDesc: "Intelligent multiparametric system for predicting evolution of post-cardiac arrest patients using Deep Learning and EEG analysis. Partnership with HUWC and FUNCAP funding.",
      footerLink: [
        {
          name: "Research Details",
          url: "http://lattes.cnpq.br/9555628106640180"
        }
      ]
    },
    {
      image: require("./assets/images/samsung-logo.png"),
      projectName: "AI4WELLNESS - Samsung AI Excellence Center",
      projectDesc: "AI ecosystem project with Samsung Korea focusing on health and wellness applications using mobile and wearable devices with Deep Learning and IoT technologies.",
      footerLink: [
        {
          name: "Research Details",
          url: "http://lattes.cnpq.br/9555628106640180"
        }
      ]
    },
    {
      image: require("./assets/images/youtube-logo.png"),
      projectName: "DataQuality YouTube Channel",
      projectDesc: "Educational content creation focused on Data & AI topics, sharing knowledge about machine learning, data engineering, and AI best practices with the community.",
      footerLink: [
        {
          name: "Visit Channel",
          url: "https://www.youtube.com/@dataquality"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Microsoft & AWS Certified Professional with expertise in AI/ML, Cloud Computing, and Data Analytics!",

  achievementsCards: [
    {
      title: "Microsoft Azure AI Engineer Associate",
      subtitle:
        "Certified in designing and implementing AI solutions using Azure AI services, including machine learning and cognitive services.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Microsoft Azure AI Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "http://lattes.cnpq.br/9555628106640180"
        }
      ]
    },
    {
      title: "AWS AI/ML Scholarship - Udacity",
      subtitle:
        "Selected for AWS AI/ML Scholarship program with Amazon Web Services and Udacity, focusing on machine learning and artificial intelligence.",
      image: require("./assets/images/aws-scholarship.jpg"),
      imageAlt: "AWS Udacity Scholarship",
      footerLink: [
        {
          name: "AWS Scholarship",
          url: "https://www.linkedin.com/in/guilhrme"
        }
      ]
    },
    {
      title: "AWS Machine Learning Engineer Scholarship 2022 Gold Badge",
      subtitle: "2022 Gold Badge AWS Machine Learning Engineer Scholarship recognition from Amazon Web Services and Udacity.",
      image: require("./assets/images/aws-gold-badge-2022.jpg"),
      imageAlt: "AWS MLE Gold Badge",
      footerLink: [
        {
          name: "Gold Badge 2022",
          url: "https://www.linkedin.com/in/guilhrme"
        }
      ]
    },
    {
      title: "PhysioNet Challenge 2025 - 4th Place UFC",
      subtitle: "Led Federal University of Ceara team to 4th place among all teams and 6th best overall result in PhysioNet Challenge 2025, detecting Chagas disease through ECG signals.",
      image: require("./assets/images/physionet-challenge-2025.jpg"),
      imageAlt: "PhysioNet Challenge 2025",
      footerLink: [
        {
          name: "PhysioNet Challenge",
          url: "https://lnkd.in/dE57F-p3"
        }
      ]
    },
    {
      title: "Melhor Clima Organizacional - 1º Lugar",
      subtitle: "Área sob liderança ficou em 1º lugar em toda a companhia como a área com melhor clima organizacional entre todas as áreas da organização.",
      image: require("./assets/images/melhor-clima-organizacional.jpg"),
      imageAlt: "Melhor Clima Organizacional",
      footerLink: [
        {
          name: "Leadership Award",
          url: "https://www.linkedin.com/in/guilhrme"
        }
      ]
    },
    {
      title: "Databricks Generative AI Engineer Associate",
      subtitle: "Latest certification in Generative AI fundamentals and engineering practices using Databricks platform.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Databricks Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "http://lattes.cnpq.br/9555628106640180"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Content Creation",
  subtitle:
    "Sharing knowledge about AI/ML, Data Engineering, and Software Development through multiple platforms.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.youtube.com/@dataquality",
      title: "DataQuality YouTube Channel - Data & AI Content",
      description:
        "Educational content focused on Data & AI topics, sharing knowledge about machine learning, data engineering, and AI best practices with the community."
    },
    {
      url: "https://guilhrme.wordpress.com/",
      title: "Technology Blog - Programming & Development",
      description:
        "Personal blog covering technology topics including SharePoint development, SQL programming, Microsoft technologies, and software engineering practices."
    },
    {
      url: "http://lattes.cnpq.br/9555628106640180",
      title: "Academic Publications & Research",
      description:
        "Academic publications on EEG signal processing, Deep Learning for medical applications, and post-cardiac arrest prognosis prediction using AI."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const videoSection = {
  title: emoji("Featured Videos 📹"),
  subtitle: "TECHNICAL TALKS AND EDUCATIONAL CONTENT ON POWER BI AND DATA ANALYTICS",

  // YouTube video IDs (extract from https://www.youtube.com/watch?v=VIDEO_ID)
  videos: [
    {
      id: "woGDn56N5Iw",
      title: "Copilot for Power BI - Microsoft's Generative AI Integration",
      description: "Practical demonstration of Copilot, Microsoft's Generative AI integrated into Power BI that promises to revolutionize Analytics. Creating reports at unprecedented speed through prompts with the same quality as an experienced Power BI developer."
    },
    {
      id: "AEJr87lVdfg",
      title: "Power BI Security Risks - 'Publish to Web' Dangers",
      description: "Exploring the dangers of sharing Power BI reports with the 'Publish to Web' function, highlighting how sensitive data can be inadvertently exposed and emphasizing the importance of maintaining information security."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an AI/ML project, research collaboration, or just want to say hi? My Inbox is open for all.",
  number: "+55-85-99980-4800",
  email_address: "guilhermesantos@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Professional Projects Section

const professionalProjects = {
  display: true,
  data: [
    {
      title: "Iron Quality Prediction Models for Mining Operations",
      summary: "Multiple regression models for predicting iron ore quality and level using sensor data and soil analysis in mining extraction processes.",
      description: "Comprehensive machine learning project developing multiple regression models to predict iron ore quality and level during mining extraction. The project utilized sensor data and soil analysis from over 300 variables to maintain optimal iron quality throughout excavation processes, directly influencing mineral pricing. We implemented 6 different models: 3 neural networks (MLP, CNN, Transformer) and 3 traditional models (Random Forest, OLS, XGBoost) plus an AutoML solution. Dimensionality reduction was performed using PCA and SHAP for feature importance analysis. The best performing model was deployed as an inference endpoint for business areas.",
      image: require("./assets/images/mineracao-morro-do-ipe.jpg"),
      technologies: ["Azure ML Studio", "Python", "TensorFlow", "Azure Storage Account", "MLP", "CNN", "Transformer", "Random Forest", "XGBoost", "PCA", "SHAP", "AutoML"],
      metrics: [
        { value: "300+", description: "Sensor Variables" },
        { value: "98.5%", description: "Best Model Accuracy" },
        { value: "6", description: "ML Models Trained" },
        { value: "40%", description: "Dimensionality Reduction" }
      ],
              achievements: [
          "Successfully trained 6 different regression models (3 neural networks + 3 traditional ML models)",
          "Achieved 40% dimensionality reduction while preserving 90%+ data variability using PCA and SHAP",
          "Significantly improved training time through effective feature selection and dimensionality reduction",
          "Achieved extremely low error rates in regression models for iron quality prediction",
          "Deployed production-ready inference endpoint using Azure ML Studio",
          "Enabled real-time iron quality monitoring affecting mineral pricing decisions"
        ],
      duration: "8 months",
      keyMetric: "98.5% Accuracy",
      industry: "Mining & Metallurgy",
      teamSize: "6 people"
    },
    {
      title: "Legal Jurisprudence Search Assistant with RAG Architecture",
      summary: "Advanced RAG system for legal document search with hybrid retrieval and semantic processing of 50GB+ unstructured data.",
      description: "Intelligent assistant for legal jurisprudence search built with Node.js and React (backend and frontend), featuring Azure Entra ID authentication, ingestion of over 50GB of unstructured legal documents. The system uses Azure Document Intelligence for OCR processing, semantic chunking with 10% overlap, metadata enrichment, and hybrid search (vector + keyword) for specific rapporteur or year queries. Includes vector database indexing and standalone question generation for improved vector search using similarity algorithms.",
      image: require("./assets/images/rag-juridico-architecture.jpg"),
      technologies: ["Node.js", "React", "Azure Entra ID", "Azure Document Intelligence", "Vector Databases", "OCR", "Semantic Chunking", "Hybrid Search"],
      metrics: [
        { value: "50GB+", description: "Documents Processed" },
        { value: "95%", description: "Search Accuracy" },
        { value: "10%", description: "Chunk Overlap" },
        { value: "3s", description: "Average Response Time" }
      ],
      achievements: [
        "OCR processing of 50GB+ unstructured legal documents using Azure Document Intelligence",
        "Semantic chunking with 10% overlap and metadata enrichment for improved context",
        "Hybrid search implementation (vector + keyword) for specific rapporteur and year filtering",
        "Standalone question generation for enhanced vector search similarity",
        "Azure Entra ID integration for secure authentication and authorization",
        "Real-time jurisprudence search with contextual legal document retrieval"
      ],
      duration: "3 months",
      keyMetric: "50GB+ Processed",
      industry: "Legal Technology",
      teamSize: "6 people"
    },
    {
      title: "Text-To-SQL GenAI Platform on AWS",
      summary: "Natural language to SQL query system enabling executives to access data lake information through conversational interface.",
      description: "Advanced Text-To-SQL platform built on AWS using GenAI models, enabling executives to query massive data lakes through natural language via a web application. The system features an intelligent agent created with AWS models that converts user requests into SQL queries for gigantic databases. Database schemas are indexed to handle enormous volumes of tables and data structures while respecting the maximum context size limits of the models. This solution democratizes data access by allowing non-technical users to extract insights from complex data warehouses using simple, conversational queries.",
      image: require("./assets/images/text-to-sql-architecture.png"),
      technologies: ["AWS Bedrock", "AWS Lambda", "Amazon RDS", "Natural Language Processing", "SQL Generation", "Schema Indexing", "GenAI", "Web Application"],
      metrics: [
        { value: "1000+", description: "Tables Indexed" },
        { value: "95%", description: "Query Accuracy" },
        { value: "3s", description: "Average Response Time" },
        { value: "90%", description: "User Adoption Rate" }
      ],
      achievements: [
        "Schema indexing system for massive database structures with context optimization",
        "Natural language to SQL conversion using AWS GenAI models with high accuracy",
        "Intelligent agent capable of understanding complex business queries",
        "Web application interface for non-technical executive users",
        "Context-aware query generation respecting model token limits",
        "Real-time data lake access through conversational interface"
      ],
      duration: "6 months",
      keyMetric: "1000+ Tables",
      industry: "Enterprise Analytics",
      teamSize: "8 people"
    },
    {
      title: "Voice Assistant for Public Service Complaints - Multi-Agent Architecture",
      summary: "Real-time voice assistant enabling citizens to file public service complaints through audio using Coqui TTS and dynamic agent orchestration.",
      description: "Innovative voice assistant system built with Coqui TTS for real-time voice processing, enabling citizens to file public service complaints through natural speech. The system features a dynamic multi-agent architecture using LangGraph in Python, where each public service is assigned a specialized agent through a React administrative application. A supervisor strategy orchestrates agent selection based on complaint themes, with each agent collecting the minimum required information for specific services.",
      image: require("./assets/images/voice-assistant-ouvidoria.png"),
      technologies: ["Coqui TTS", "LangGraph", "Python", "React", "MongoDB", "NoSQL", "Multi-Agent Systems", "Voice Processing", "Real-time Audio", "Administrative Dashboard"],
      metrics: [
        { value: "6", description: "Public Services" },
        { value: "6", description: "Specialized Agents" },
      ],
      achievements: [
        "Real-time voice processing using Coqui TTS for natural citizen interaction",
        "Dynamic multi-agent architecture with supervisor strategy for complaint routing",
        "Specialized agents for each public service with minimum information requirements",
        "React administrative application for agent configuration and service management",
      ],
      duration: "3 months",
      keyMetric: "6 Services",
      industry: "Public Sector & Government",
      teamSize: "1 people"
    },
    {
      title: "MCP Server for Power BI Integration using GenAI",
      summary: "Model Context Protocol (MCP) server for Power BI automation and governance using natural language processing.",
      description: "Advanced MCP server built with mcp[server]>=1.0.0 and fastmcp>=0.9.0, featuring comprehensive tools for Power BI API integration. The system enables data manipulation and consultation on the Power BI platform through natural language interface, automating governance activities and administrative tasks. The project includes workspace management, dataset operations, report automation, and user permission handling through conversational AI, significantly reducing manual overhead in Power BI administration.",
      image: require("./assets/images/mcp-inspector-screenshot.png"),
      technologies: ["Model Context Protocol (MCP)", "mcp[server]>=1.0.0", "fastmcp>=0.9.0", "Power BI APIs", "Python", "Natural Language Processing", "API Integration", "Automation"],
      metrics: [
        { value: "18", description: "Workspaces Connected" },
        { value: "100%", description: "API Coverage" },
        { value: "80%", description: "Task Automation" },
        { value: "90%", description: "Time Saved" }
      ],
      achievements: [
        "Complete MCP server implementation for Power BI API integration",
        "Natural language interface for Power BI governance and administration",
        "Automated workspace and dataset management through conversational AI",
        "Real-time Power BI platform monitoring and manipulation capabilities",
        "Comprehensive tools for user permissions and access control automation",
        "Significant reduction in manual administrative overhead for Power BI operations"
      ],
      duration: "2 months",
      keyMetric: "18 Workspaces"
    }
  ]
};

// Events Gallery Section

const eventsGallery = {
  title: "Speaking Events",
  subtitle: "CONFERENCE TALKS, WORKSHOPS, AND KNOWLEDGE SHARING SESSIONS 🎤",
  events: [
    {
      title: "Cloud Data Engineering Workshop",
      description: "Workshop for 20 representatives from medium and large Brazilian companies focusing on cloud data engineering solutions and practical implementations.",
      image: require("./assets/images/workshop-azure-synapse.jpg"),
      imageAlt: "Cloud Data Engineering Workshop",
      footerLink: [
        {
          name: "Azure Synapse",
          url: "https://www.linkedin.com/in/guilhrme"
        },
        {
          name: "Data Engineering",
          url: "#"
        }
      ]
    },
    {
      title: "Productivity Enhancement through Artificial Intelligence",
      description: "Event for nearly 50 leaders from major Brazilian industries discussing GenAI applications for business productivity and innovation.",
      image: require("./assets/images/evento-ia-rio.jpg"),
      imageAlt: "AI Productivity Event Rio de Janeiro",
      footerLink: [
        {
          name: "Rio de Janeiro",
          url: "#"
        },
        {
          name: "GenAI",
          url: "#"
        }
      ]
    },
    {
      title: "Microsoft AI Tour 2024 - São Paulo",
      description: "Participation in Microsoft AI Tour 2024 in São Paulo with Satya Nadella, focusing on AI innovations and Microsoft technologies.",
      image: require("./assets/images/microsoft-ai-tour-2024.jpg"),
      imageAlt: "Microsoft AI Tour 2024 São Paulo",
      footerLink: [
        {
          name: "Microsoft AI Tour",
          url: "#"
        },
        {
          name: "São Paulo",
          url: "#"
        }
      ]
    },
    {
      title: "Supreme Federal Court - Generative AI Solution",
      description: "Presentation to Minister Luís Roberto Barroso and his technology team on judicial process summarization using recursive summarization and Generative AI.",
      image: require("./assets/images/stf-ia-generativa.jpg"),
      imageAlt: "STF Generative AI",
      footerLink: [
        {
          name: "STF",
          url: "#"
        },
        {
          name: "Generative AI",
          url: "#"
        }
      ]
    },
    {
      title: "Artificial Intelligence Lecture",
      description: "AI presentation for Computer Science undergraduate students at Centro Universitário 7 de Setembro, covering AI fundamentals and applications.",
      image: require("./assets/images/speaking-event-graduation.jpg"),
      imageAlt: "AI Lecture at Centro Universitário 7 de Setembro",
      footerLink: [
        {
          name: "Centro Universitário",
          url: "#"
        },
        {
          name: "AI Education",
          url: "#"
        }
      ]
    },
    {
      title: "Generative Artificial Intelligence for Public Sector",
      description: "Presentation on Generative Artificial Intelligence for approximately 200 participants including judges and public servants from a Brazilian public institution, covering GenAI applications, benefits, and implementation strategies for the public sector.",
      image: require("./assets/images/mpce.jpeg"),
      imageAlt: "Generative AI Presentation for Public Sector",
      footerLink: [
        {
          name: "Public Sector",
          url: "#"
        },
        {
          name: "Generative AI",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// Testimonials Section

const testimonials = {
  title: "What Colleagues Say",
  subtitle: "TESTIMONIALS FROM TEAMMATES AND CLIENTS 💬",
  testimonials: [
    {
      name: "Lucas Marchand",
      role: "Senior Data Engineer & Data Architect",
      company: "Lanlink",
      relationship: "Direct Report",
      date: "June 2023",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGsk3wb1iAh0g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1675947863669?e=1755734400&v=beta&t=4agTO2hB5LS00BTFRvbuta6a9dDABTMX_k4jc6cvNUA",
      testimonial: "Guilherme is a brilliant guy with great technical potential and management skills at the same time. He's a versatile person who knows how to speak the language of both application and data developers. He relates very well with clients and the internal team. He also has a knack for leadership and good humor that makes the work routine much more pleasant. Thank you, Guilherme, for having the privilege of working with you!",
      linkedinUrl: "https://www.linkedin.com/in/lucas-marchand/",
      tags: ["Technical Leadership", "Team Management", "Client Relations", "Data Engineering"]
    },
    {
      name: "Isabela Ferreira",
      role: "Project Specialist | Scrum Master | PMO",
      company: "3 Corações",
      relationship: "Client",
      date: "December 2020",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQG-jzwA-zfdmg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1655308817783?e=1755734400&v=beta&t=Np1B0pEuq3B1enkH3c6QP7hz6DG2GuT3LwrDktPTfkA",
      testimonial: "I have worked with many professionals from partner companies executing projects, building and configuring software... But Guilherme is different, he is a sincere, honest, objective, realistic, creative and collaborative professional. He knows how to negotiate and communicate with great efficiency and empathy! He became a friend, my personal luxury consultant for EPM and SharePoint.",
      linkedinUrl: "https://www.linkedin.com/in/isabela-ferreira-pmp-psm/",
      tags: ["Project Management", "Communication", "SharePoint", "Partnership", "Creativity"]
    }
  ],
  display: true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  videoSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  professionalProjects,
  eventsGallery,
  testimonials
};

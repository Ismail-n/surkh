const servicesData = [
  {
    id: "mobile-app",
    mainTitle: "AI-Powered Intelligence for a Competitive Edge",
    mainSubTitle:
      "Harness the power of advanced analytics, machine learning, and AI-driven insights to optimize decision-making, innovate faster, and create measurable business value.",
    title: "Think Smart. Act Faster.",
    subtitle:
      "With us, transform your data into intelligent insights and AI-powered solutions that deliver impact from day one.",
    categories: [
      {
        icon: "aiDataScience/predAnlsys",
        title: "Predictive Analytics",
        titleMaxWidth: 169,
        subtitle:"Powerful, AI-driven insights that forecast trends, optimize operations, and drive smarter business decisions.",
      },
      {
        icon: "aiDataScience/foreModels",
        title: "Forecasting Models",
        titleMaxWidth: 169,
        subtitle:"Advanced algorithms that predict future trends, behaviors, and outcomes using historical and real-time data.",
      },
      {
        icon: "aiDataScience/rtCsDgnstc",
        title: "Root-cause Diagnostics",
        titleMaxWidth: 169,
        subtitle:"AI-powered analysis to identify the true source of problems, reduce downtime, and prevent future failures.",
      },
      {
        icon: "aiDataScience/compVision",
        title: "Computer vision",
        titleMaxWidth: 169,
        subtitle:"AI that interprets and understands visual data to automate tasks, enhance accuracy, and unlock real-time insights.",
      },
      {
        icon: "aiDataScience/nlpForIndustrial",
        title: "NLP For Industrial Text Data",
        titleMaxWidth: 204,
        subtitle:"Turn unstructured logs, manuals, and reports into actionable insights with domain-specific natural language processing.",
      },
    ],
    overview: {
      image: "empoweringInnovationWithAiBg",
      heading: "Empowering Innovation with AI & Data Science",
      paragraphs: [
        "We leverage cutting-edge artificial intelligence and advanced data science techniques to empower organizations to navigate the complexities of today’s digital world. By transforming vast amounts of data into meaningful insights and actionable strategies, we enable businesses to innovate continuously, optimize performance, and create sustainable competitive advantages across industries.",
      ],
    },
  },
  {
    id: "web",
    mainTitle: "Advanced Energy Analytics to Power Your Future",
    mainSubTitle:
      "Unlock operational efficiency and sustainability with data-driven insights, predictive models, and intelligent energy management solutions.",
    title: "Full-Spectrum Energy Intelligence. Maximum Impact.",
    subtitle:
      "From real-time monitoring to advanced forecasting, harness the complete analytics stack to optimize performance and drive measurable results.",
    categories: [
      {
        icon: "adwanceEnergyAnalytics/realTime",
        title: "Real-time SCADA Data Analysis",
        titleMaxWidth: 169,
        titleArMaxWidth: 200,
        subtitle:
          "Unlock operational intelligence by analyzing SCADA streams in real time to detect anomalies, optimize performance, and ensure system reliability.",
      },
      {
        icon: "adwanceEnergyAnalytics/renewableEnergy",
        title: "Renewable Energy Optimization",
        titleMaxWidth: 169,
        subtitle:
          "Maximize efficiency and output from solar, wind, and hybrid systems using AI-driven forecasting and smart grid integration.",
      },
      {
        icon: "adwanceEnergyAnalytics/loadForecasting",
        title: "Load Forecasting",
        titleMaxWidth: 169,
        subtitle:
          "Accurately predict energy demand using AI models to improve grid reliability, reduce costs, and optimize resource planning",
      },
      {
        icon: "adwanceEnergyAnalytics/assetHealth",
        title: "Asset Health Prediction",
        titleMaxWidth: 169,
        subtitle:
          "Accurate, intelligent asset health prediction solutions designed to optimize maintenance, reduce downtime, and maximize operational efficiency.",
      }
    ],
    overview: {
      image: "adwanceEnergyAnalyticsOverview",
      heading: "Turning Energy Data into Intelligent Decisions.",
      maxHeading: 452,
      paragraphs: [
        "We transform vast, complex streams of energy data into meaningful insights that empower utilities, businesses, and households to make smarter, faster, and more sustainable decisions. Through advanced analytics, real-time monitoring, and AI-driven intelligence, we help you predict demand, reduce waste, and optimize energy usage across the entire value chain.",
      ],
    },
  },
  {
    id: "digital",
    mainTitle: "Reimagine Conversations for the Digital Age",
    mainSubTitle:
      "At Surkh, transform customer interactions with intelligent chatbots and smart interfaces that deliver instant, personalized, and engaging experiences.",
    title: "Build Smart. Connect Faster.",
    subtitle:
      "Achieve more with AI-powered communication tools designed to streamline support, reduce response times, and drive customer satisfaction.",
    categories: [
      {
        icon: "chatbotsAndSmartInterFaces/chatWithYourData",
        title: "Chat with your data (SQL/NOSQL DBs)",
        titleArMaxWidth: 190,
        subtitle:
          "Instantly query, analyze, and visualize your databases using natural language — no coding required.",
      },
      {
        icon: "chatbotsAndSmartInterFaces/chatWithAiDocument",
        title: "AI Document Search Assistants",
        titleArMaxWidth: 190,
        subtitle:
          "Quickly find answers across complex documents with intelligent, context-aware search powered by natural language understanding.",
      },
      {
        icon: "chatbotsAndSmartInterFaces/chatWithCustomers",
        title: "AI Customer Service bots",
        titleMaxWidth: 240,
        titleArMaxWidth: 300,
        subtitle:
          "Deliver fast, 24/7 support with intelligent bots that understand queries, resolve issues, and enhance customer satisfaction.",
      }
    ],
    overview: {
      image: "chatbotsSmartInterfacesOverview",
      heading: "Smarter Chats. Seamless Experiences.",
      paragraphs: [
        "At the intersection of AI, UX, and automation, we craft advanced chat interfaces that redefine how people interact with digital systems. Our solutions aren't just chatbots—they're intelligent conversation layers that understand user intent, respond naturally, and guide people through complex tasks effortlessly. From customer support to internal knowledge access, we enable smarter interactions that feel intuitive, responsive, and delightfully seamless.",
      ],
    },
  },
  {
    id: "odoo",
    mainTitle: "Full-Stack Solutions Tailored to Your Vision",
    mainSubTitle:
      "Turn ideas into market-ready products with end-to-end development across front-end, back-end, and cloud — all aligned with your business goals.",
    title: "Product Development, Reimagined for Impact",
    subtitle:
      "With us, design, build, and scale high-performing digital products that adapt to your evolving market needs.",
    categories: [
      {
        icon: "fullStackProductDevelopment/customWebMobileApp",
        title: "Custom web & Mobile apps",
        subtitle:
          "Tailored digital solutions designed to meet your unique business needs, built for performance, scalability, and great user experience.",
        titleMaxWidth: 198,
        titleArMaxWidth: 100,
      },
      {
        icon: "fullStackProductDevelopment/scalableBackend",
        title: "Scalable Backend Architecture",
        subtitle:
          "Robust, cloud-ready systems built to handle growth, ensure reliability, and power high-performance applications.",
        titleArMaxWidth: 150,
      },
      {
        icon: "fullStackProductDevelopment/frontendDesign",
        title: "Frontend Design Systems",
        subtitle:
          "Consistent, reusable UI components and patterns that accelerate development and ensure seamless user experiences across platforms.",
        titleMaxWidth: 219,
      },
      {
        icon: "fullStackProductDevelopment/devOps",
        title: "DevOps & CI/CD pipelines",
        titleMaxWidth: 200,
        subtitle:
          "Streamline development with automated workflows, faster releases, and reliable deployments through modern DevOps practices.",
      }
    ],
    overview: {
      image: "fullStackProductDevelopmentOverview",
      heading: "End-to-End Innovation. Full-Stack Execution.",
      paragraphs: [
        "From product discovery and architecture to frontend finesse and backend scalability, we manage every phase of development under one roof. Our full-stack teams combine deep technical expertise with creative agility, ensuring your product is not only functional but future-ready. Whether you're launching an MVP or scaling enterprise software, we deliver seamless, efficient, and high-impact solutions—faster."
      ],
    },
  },
];

const servicesTabs = [
  { id: "mobile-app", maxTitleWidth:71, text: "AI & Data Science"},
  { id: "web", maxTitleWidth:135, text: "Advanced Energy Analytics" },
  { id: "digital", maxTitleWidth:139, text: "Chatbots & Smart Interfaces" },
  { id: "odoo", maxTitleWidth:145, text: "Full-Stack Product Development" }
];

export { servicesData, servicesTabs };

const navbar = document.querySelector('.navbar');
const revealElements = document.querySelectorAll('.reveal');
const languageButtons = document.querySelectorAll('[data-lang]');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
    pt: {
        pageTitle: 'Nilton Pegas | Data Scientist & Senior Data Analyst | Python · ML · MLOps',
        metaDescription: 'Nilton Pegas, Data Scientist e Senior Data Analyst com projetos em Machine Learning, MLOps, Python, SQL, Power BI, demand forecasting, anomaly detection e MLflow.',
        navAria: 'Navegação principal',
        languageAria: 'Selecionar idioma',
        profilePhotoAlt: 'Foto de perfil de Nilton Pegas',
        googleBadgeAlt: 'Emblema Google Advanced Data Analytics',
        heroPanelAria: 'Resumo profissional',
        navAbout: 'Sobre',
        navSkills: 'Competências',
        navProjects: 'Projetos',
        navContact: 'Contato',
        heroEyebrow: 'Data Scientist · Senior Data Analyst · MLOps · Machine Learning',
        heroTitle: 'Transformo dados em modelos, automações e decisões com impacto mensurável.',
        heroCopy: 'Sou Nilton Pegas, Senior Market Intelligence Analyst no Grupo OFS, com atuação em Python, SQL, Power BI, machine learning e MLOps. Desenvolvo análises e modelos aplicados a varejo, incluindo detecção de anomalias, automação de rotinas e exploração de 700k+ cupons fiscais por mês.',
        btnGithub: 'GitHub',
        btnLinkedin: 'LinkedIn',
        btnKaggle: 'Kaggle',
        focusLabel: 'Foco atual',
        focusTitle: 'Machine learning aplicado ao negócio',
        focusCopy: 'Desenvolvimento de pipelines analíticos, modelos preditivos, dashboards e automações que conectam evidências quantitativas a decisões operacionais, rentabilidade e eficiência.',
        metricProfit: 'Rentabilidade apoiada por modelos de detecção de anomalias e priorização comercial',
        metricAutomation: 'Redução de tempo operacional com automação de análises e rotinas de dados',
        metricCoupons: 'Cupons fiscais analisados por mês em projetos aplicados ao varejo',
        metricGoogle: 'Advanced Data Analytics Certificate, com foco em análise, modelagem e comunicação técnica',
        aboutEyebrow: 'Sobre mim',
        aboutTitle: 'Perfil senior em analytics, machine learning e automação aplicada.',
        aboutPresentationTitle: 'Apresentação',
        aboutPresentationCopy: 'Trabalho na interseção entre inteligência de mercado, ciência de dados e MLOps. Como Senior Market Intelligence Analyst no Grupo OFS, desenvolvo análises, dashboards, modelos e automações com Python, SQL, Power BI, MLflow, Docker, FastAPI e N8N. Meus projetos incluem modelos de detecção de anomalias que contribuíram para +11% de rentabilidade, automações que reduziram cerca de 76% do tempo operacional e análises recorrentes sobre 700k+ cupons fiscais por mês.',
        educationTitle: 'Formação',
        educationCopy: 'Business Intelligence & Analytics pela Conquer Business School e Engenharia Mecânica pela UFF.',
        credentialsTitle: 'Credenciais',
        credentialsCopy: 'Google Advanced Data Analytics, ML Zoomcamp (DataTalks.Club) e MLOps Zoomcamp (DataTalks.Club).',
        skillsEyebrow: 'Competências',
        skillsTitle: 'Stack orientada a análise, modelagem, automação e entrega.',
        skillBiTitle: 'Dados e BI',
        skillBiCopy: 'Power BI, Tableau, Excel, N8N, automação com LLMs, análise exploratória, indicadores e storytelling com dados.',
        skillPythonTitle: 'Python e SQL',
        skillPythonCopy: 'Pandas, NumPy, scikit-learn, MySQL, Oracle, ETL, limpeza de dados e automação de rotinas analíticas.',
        skillMlTitle: 'Machine Learning',
        skillMlCopy: 'Regressão, classificação, anomaly detection, demand forecasting, customer segmentation, validação, tuning e XGBoost.',
        skillMlEngTitle: 'Engenharia de ML',
        skillMlEngCopy: 'FastAPI, Docker, MLflow, deploy, serialização de modelos, RAG, Ollama e fundamentos de MLOps.',
        skillGenAiTitle: 'GenAI & Automation',
        skillGenAiCopy: 'N8N, Ollama, ChatGPT/Gemini API, WhatsApp automation, fluxos com LLMs e integração de agentes em processos de negócio.',
        projectsEyebrow: 'Projetos selecionados',
        projectsTitle: 'Portfólio com foco em código, documentação, deploy e aplicação prática.',
        projectsCopy: 'Projetos selecionados para demonstrar análise aplicada, engenharia de atributos, modelagem, MLOps, visualização e comunicação de impacto de negócio.',
        projectChurnType: 'Classificação · RH Analytics',
        projectChurnTitle: 'Google Advanced Analytics: Churn de Funcionários',
        projectChurnCopy: 'Modelo supervisionado para prever risco de desligamento na Salifort Motors, conectando satisfação, desempenho, tempo de casa, carga de projetos e horas mensais a decisões de retenção. O projeto compara regressão logística, árvores, Random Forest e XGBoost em pipeline modularizado com leitura orientada a impacto de negócio.',
        projectTaxiType: 'Regressão · Mobilidade Urbana',
        projectTaxiTitle: 'Google Advanced Analytics: Previsão de Tarifa de Táxi',
        projectTaxiCopy: 'Projeto de regressão para estimar o valor de corridas Yellow Taxi em Nova York a partir de distância, duração, horário, rota e características operacionais. Inclui engenharia de atributos temporais, tratamento de outliers, comparação de modelos e avaliação com métricas alinhadas à tomada de decisão.',
        projectScrapingType: 'Web Scraping · Dados Públicos',
        projectScrapingTitle: 'Gastos Públicos: Web Scraping e Power BI',
        projectScrapingCopy: 'Projeto aplicado de coleta automatizada de dados públicos de Volta Redonda com Python, preparação tabular com pandas e dashboard em Power BI para analisar despesas com viagens e diárias, reforçando transparência e monitoramento de recursos públicos.',
        projectMlopsType: 'MLOps · Ciclo de Vida',
        projectMlopsTitle: 'Zoomcamp: MLOps Course',
        projectMlopsCopy: 'Projeto de aprendizado aplicado em MLOps com rastreamento de experimentos, versionamento, avaliação e operacionalização de modelos. O repositório organiza práticas com MLflow, experiment tracking e deploy para transformar modelos em entregas reprodutíveis além do notebook.',
        projectMlType: 'ML Engineering · DataTalksClub',
        projectMlTitle: 'Zoomcamp: Machine Learning Course',
        projectMlCopy: 'Projeto de aprendizado aplicado em engenharia de machine learning, cobrindo regressão, classificação, métricas, árvores, XGBoost, deep learning e entrega de modelos. Inclui práticas com Docker, FastAPI, deploy, APIs e organização de código para produção.',
        projectDioType: 'Bootcamps · Python e Banco de Dados',
        projectDioTitle: 'DIO Challenges: Ciência de Dados e Bancos de Dados',
        projectDioCopy: 'Coleção de desafios práticos envolvendo Python, SQL, ETL, modelagem de dados, machine learning e fundamentos de bancos de dados. Demonstra consistência de estudo, resolução de problemas e organização de entregas em trilhas intensivas.',
        moreProjectsEyebrow: 'Mais projetos',
        moreProjectsTitle: 'Explore outros estudos, notebooks e repositórios públicos.',
        moreProjectsButton: 'Ver todos os repositórios',
        contactEyebrow: 'Contato',
        contactTitle: 'Vamos conversar sobre dados, machine learning e modelos aplicados a negócio?',
        contactCopy: 'Acesse meus perfis para avaliar projetos, notebooks e histórico profissional.',
        copyright: '© 2026 Nilton Pegas. Data Scientist & Senior Data Analyst | Python · ML · MLOps · BI'
    },
    en: {
        pageTitle: 'Nilton Pegas | Data Scientist & Senior Data Analyst | Python · ML · MLOps',
        metaDescription: 'Nilton Pegas, Data Scientist and Senior Data Analyst with projects in Machine Learning, MLOps, Python, SQL, Power BI, demand forecasting, anomaly detection and MLflow.',
        navAria: 'Main navigation',
        languageAria: 'Select language',
        profilePhotoAlt: 'Profile photo of Nilton Pegas',
        googleBadgeAlt: 'Google Advanced Data Analytics badge',
        heroPanelAria: 'Professional summary',
        navAbout: 'About',
        navSkills: 'Skills',
        navProjects: 'Projects',
        navContact: 'Contact',
        heroEyebrow: 'Data Scientist · Senior Data Analyst · MLOps · Machine Learning',
        heroTitle: 'I turn data into models, automations and decisions with measurable impact.',
        heroCopy: 'I am Nilton Pegas, Senior Market Intelligence Analyst at Grupo OFS, working with Python, SQL, Power BI, machine learning and MLOps. I build analyses and models applied to retail, including anomaly detection, workflow automation and exploration of 700k+ fiscal receipts per month.',
        btnGithub: 'GitHub',
        btnLinkedin: 'LinkedIn',
        btnKaggle: 'Kaggle',
        focusLabel: 'Current focus',
        focusTitle: 'Business-applied machine learning',
        focusCopy: 'Development of analytical pipelines, predictive models, dashboards and automations that connect quantitative evidence to operational decisions, profitability and efficiency.',
        metricProfit: 'Profitability supported by anomaly detection models and commercial prioritization',
        metricAutomation: 'Reduction in operational time through analytics automation and data routines',
        metricCoupons: 'Fiscal receipts analyzed per month in retail-focused applied projects',
        metricGoogle: 'Advanced Data Analytics Certificate, focused on analysis, modeling and technical communication',
        aboutEyebrow: 'About me',
        aboutTitle: 'Senior profile in analytics, machine learning and applied automation.',
        aboutPresentationTitle: 'Overview',
        aboutPresentationCopy: 'I work at the intersection of market intelligence, data science and MLOps. As Senior Market Intelligence Analyst at Grupo OFS, I develop analyses, dashboards, models and automations with Python, SQL, Power BI, MLflow, Docker, FastAPI and N8N. My projects include anomaly detection models that contributed to +11% profitability, automations that reduced operational time by around 76%, and recurring analyses over 700k+ fiscal receipts per month.',
        educationTitle: 'Education',
        educationCopy: 'Business Intelligence & Analytics from Conquer Business School and Mechanical Engineering from UFF.',
        credentialsTitle: 'Credentials',
        credentialsCopy: 'Google Advanced Data Analytics, ML Zoomcamp (DataTalks.Club) and MLOps Zoomcamp (DataTalks.Club).',
        skillsEyebrow: 'Skills',
        skillsTitle: 'Stack focused on analysis, modeling, automation and delivery.',
        skillBiTitle: 'Data and BI',
        skillBiCopy: 'Power BI, Tableau, Excel, N8N, LLM automation, exploratory analysis, KPIs and data storytelling.',
        skillPythonTitle: 'Python and SQL',
        skillPythonCopy: 'Pandas, NumPy, scikit-learn, MySQL, Oracle, ETL, data cleaning and automation of analytical routines.',
        skillMlTitle: 'Machine Learning',
        skillMlCopy: 'Regression, classification, anomaly detection, demand forecasting, customer segmentation, validation, tuning and XGBoost.',
        skillMlEngTitle: 'ML Engineering',
        skillMlEngCopy: 'FastAPI, Docker, MLflow, deployment, model serialization, RAG, Ollama and MLOps fundamentals.',
        skillGenAiTitle: 'GenAI & Automation',
        skillGenAiCopy: 'N8N, Ollama, ChatGPT/Gemini API, WhatsApp automation, LLM workflows and agent integration into business processes.',
        projectsEyebrow: 'Selected projects',
        projectsTitle: 'Portfolio focused on code, documentation, deployment and practical application.',
        projectsCopy: 'Selected projects demonstrating applied analysis, feature engineering, modeling, MLOps, visualization and business impact communication.',
        projectChurnType: 'Classification · HR Analytics',
        projectChurnTitle: 'Google Advanced Analytics: Employee Churn',
        projectChurnCopy: 'Supervised model to predict employee attrition risk at Salifort Motors, connecting satisfaction, performance, tenure, project load and monthly hours to retention decisions. The project compares logistic regression, trees, Random Forest and XGBoost in a modular pipeline with a business impact perspective.',
        projectTaxiType: 'Regression · Urban Mobility',
        projectTaxiTitle: 'Google Advanced Analytics: Taxi Fare Prediction',
        projectTaxiCopy: 'Regression project to estimate New York Yellow Taxi fares using distance, duration, time, route and operational characteristics. Includes temporal feature engineering, outlier handling, model comparison and evaluation with metrics aligned to decision-making.',
        projectScrapingType: 'Web Scraping · Public Data',
        projectScrapingTitle: 'Public Expenses: Web Scraping and Power BI',
        projectScrapingCopy: 'Applied project for automated collection of public data from Volta Redonda using Python, tabular preparation with pandas and a Power BI dashboard to analyze travel and per diem expenses, supporting transparency and public resource monitoring.',
        projectMlopsType: 'MLOps · Lifecycle',
        projectMlopsTitle: 'Zoomcamp: MLOps Course',
        projectMlopsCopy: 'Applied MLOps learning project with experiment tracking, versioning, evaluation and model operationalization. The repository organizes practices with MLflow, experiment tracking and deployment to turn models into reproducible deliverables beyond notebooks.',
        projectMlType: 'ML Engineering · DataTalksClub',
        projectMlTitle: 'Zoomcamp: Machine Learning Course',
        projectMlCopy: 'Applied machine learning engineering project covering regression, classification, metrics, trees, XGBoost, deep learning and model delivery. Includes practices with Docker, FastAPI, deployment, APIs and production-oriented code organization.',
        projectDioType: 'Bootcamps · Python and Databases',
        projectDioTitle: 'DIO Challenges: Data Science and Databases',
        projectDioCopy: 'Collection of practical challenges involving Python, SQL, ETL, data modeling, machine learning and database fundamentals. Demonstrates consistent study, problem solving and organized deliveries in intensive tracks.',
        moreProjectsEyebrow: 'More projects',
        moreProjectsTitle: 'Explore other studies, notebooks and public repositories.',
        moreProjectsButton: 'View all repositories',
        contactEyebrow: 'Contact',
        contactTitle: 'Let’s talk about data, machine learning and business-applied models?',
        contactCopy: 'Visit my profiles to review projects, notebooks and professional background.',
        copyright: '© 2026 Nilton Pegas. Data Scientist & Senior Data Analyst | Python · ML · MLOps · BI'
    }
};

function applyLanguage(language) {
    const dictionary = translations[language] || translations.pt;

    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    document.title = dictionary.pageTitle;

    if (metaDescription) {
        metaDescription.setAttribute('content', dictionary.metaDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
        element.dataset.i18nAttr.split(',').forEach((item) => {
            const [attribute, key] = item.split(':').map((value) => value.trim());

            if (attribute && dictionary[key]) {
                element.setAttribute(attribute, dictionary[key]);
            }
        });
    });

    languageButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === language);
    });

    localStorage.setItem('portfolioLanguage', language);
}

const preferredLanguage = localStorage.getItem('portfolioLanguage') || 'en';

applyLanguage(preferredLanguage);

languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if ('IntersectionObserver' in window) {
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((element) => revealOnScroll.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('active'));
}

window.addEventListener('load', () => {
    document.querySelectorAll('#hero .reveal').forEach((element) => {
        element.classList.add('active');
    });
});

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
        heroCopy: 'Sou Nilton Pegas, Analista e Cientista de Dados com formação em Engenharia Mecânica pela Universidade Federal Fluminense e Pós-graduação em Business Intelligence & Data Analytics. Atuo com Python, Machine Learning e MLOps, SQL e Power BI — construindo modelos, pipelines e automações aplicados a problemas reais de negócio.',
        btnGithub: 'GitHub',
        btnLinkedin: 'LinkedIn',
        btnKaggle: 'Kaggle',
        focusLabel: 'Ciclo completo de ML - Dos dados à produção',
        focusTitle: 'End-to-End Data Science',
        focusCopy: 'Pipelines analíticos, modelos preditivos e automações — da exploração ao deploy: EDA, feature engineering, modelagem supervisionada, validação, MLOps e automação com Python, SQL, MLflow e Docker.',
        metricTop6: 'Bootcamp Python Data Analytics com 23k+ participantes',
        metricTop17: 'Bootcamp Data Science com Python com 17k+ participantes',
        metricRepos: 'Repositórios públicos com estudos e projetos de dados',
        metricGoogle: 'Advanced Data Analytics Certificate',
        aboutEyebrow: 'Sobre mim',
        aboutTitle: 'Perfil senior em analytics, machine learning e automação aplicada.',
        aboutPresentationTitle: 'Apresentação',
        aboutPresentationCopy: 'Trabalho na interseção entre análise de dados, ciência de dados e engenharia de ML. Minha formação em Engenharia Mecânica pela Universidade Federal Fluminense me deu base analítica sólida; a pós-graduação em BI & Data Analytics e trilhas como ML Zoomcamp e MLOps Zoomcamp (DataTalksClub) ampliaram meu repertório técnico para o ciclo completo de modelos — da exploração ao deploy. Tenho interesse crescente em GenAI, RAG e automação inteligente com LLMs, áreas que venho explorando em projetos próprios com Ollama e N8N.',
        educationTitle: 'Formação',
        educationCopy: 'Business Intelligence & Analytics pela Conquer Business School e Engenharia Mecânica pela UFF.',
        credentialsTitle: 'Credenciais',
        credentialsCopy: 'Google Advanced Data Analytics, ML Zoomcamp (DataTalks.Club) e MLOps Zoomcamp (DataTalks.Club).',
        skillsEyebrow: 'Competências',
        skillsTitle: 'Stack orientada a análise, modelagem, automação e entrega.',
        skillBiTitle: 'Dados & BI',
        skillBiCopy: 'Power BI · Tableau · Excel · Análise Exploratória · Indicadores · Storytelling com Dados',
        skillPythonTitle: 'Python & SQL',
        skillPythonCopy: 'Pandas · NumPy · Scikit-learn · MySQL · Oracle · ETL · Automação de Rotinas',
        skillMlTitle: 'Machine Learning',
        skillMlCopy: 'Regressão · Classificação · Clusterização · Detecção de Anomalias · Previsão de Demanda · XGBoost · Tuning · Validação Cruzada',
        skillStatsTitle: 'Estatística',
        skillStatsCopy: 'Modelagem Estatística · Testes de Hipótese · Teste A/B · Regressão · Correlação · Inferência',
        skillMlEngTitle: 'Engenharia de ML & MLOps',
        skillMlEngCopy: 'MLflow · Docker · FastAPI · Deploy · Serialização de Modelos · Experiment Tracking · Versionamento',
        skillGenAiTitle: 'GenAI & Automação',
        skillGenAiCopy: 'N8N · Ollama · RAG · ChatGPT/Gemini API · Automação com LLMs · Integração de Agentes',
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
        heroCopy: 'I am Nilton Pegas, Data Analyst and Data Scientist with a degree in Mechanical Engineering from Universidade Federal Fluminense and a postgraduate specialization in Business Intelligence & Data Analytics. I work with Python, Machine Learning, MLOps, SQL and Power BI — building models, pipelines and automations applied to real business problems.',
        btnGithub: 'GitHub',
        btnLinkedin: 'LinkedIn',
        btnKaggle: 'Kaggle',
        focusLabel: 'End-to-End ML — From data to production',
        focusTitle: 'End-to-End Data Science',
        focusCopy: 'Analytical pipelines, predictive models and automations — from exploration to deployment: EDA, feature engineering, supervised modeling, validation, MLOps and automation with Python, SQL, MLflow and Docker.',
        metricTop6: 'Python Data Analytics Bootcamp with 23k+ participants',
        metricTop17: 'Data Science with Python Bootcamp with 17k+ participants',
        metricRepos: 'Public repositories with data studies and projects',
        metricGoogle: 'Advanced Data Analytics Certificate',
        aboutEyebrow: 'About me',
        aboutTitle: 'Senior profile in analytics, machine learning and applied automation.',
        aboutPresentationTitle: 'Overview',
        aboutPresentationCopy: 'I work at the intersection of data analysis, data science and ML engineering. My Mechanical Engineering degree from Universidade Federal Fluminense gave me a solid analytical foundation; my postgraduate specialization in BI & Data Analytics and programs like ML Zoomcamp and MLOps Zoomcamp (DataTalksClub) expanded my technical repertoire across the full model lifecycle — from exploration to deployment. I have growing interest in GenAI, RAG and intelligent automation with LLMs, areas I have been exploring in personal projects using Ollama and N8N.',
        educationTitle: 'Education',
        educationCopy: 'Business Intelligence & Analytics from Conquer Business School and Mechanical Engineering from UFF.',
        credentialsTitle: 'Credentials',
        credentialsCopy: 'Google Advanced Data Analytics, ML Zoomcamp (DataTalks.Club) and MLOps Zoomcamp (DataTalks.Club).',
        skillsEyebrow: 'Skills',
        skillsTitle: 'Stack focused on analysis, modeling, automation and delivery.',
        skillBiTitle: 'Data & BI',
        skillBiCopy: 'Power BI · Tableau · Excel · Exploratory Analysis · KPIs · Data Storytelling',
        skillPythonTitle: 'Python & SQL',
        skillPythonCopy: 'Pandas · NumPy · Scikit-learn · MySQL · Oracle · ETL · Routine Automation',
        skillMlTitle: 'Machine Learning',
        skillMlCopy: 'Regression · Classification · Clustering · Anomaly Detection · Demand Forecasting · XGBoost · Tuning · Cross-Validation',
        skillStatsTitle: 'Statistics',
        skillStatsCopy: 'Statistical Modeling · Hypothesis Testing · A/B Testing · Regression · Correlation · Inference',
        skillMlEngTitle: 'ML Engineering & MLOps',
        skillMlEngCopy: 'MLflow · Docker · FastAPI · Deploy · Model Serialization · Experiment Tracking · Versioning',
        skillGenAiTitle: 'GenAI & Automation',
        skillGenAiCopy: 'N8N · Ollama · RAG · ChatGPT/Gemini API · LLM Automation · Agent Integration',
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

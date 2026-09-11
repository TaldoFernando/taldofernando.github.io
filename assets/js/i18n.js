(() => {
    const pt = {
        'Home': 'Início',
        'Projects': 'Projetos',
        'Experience': 'Experiência',
        'Skills': 'Habilidades',
        'Profiles': 'Perfis',
        'Contact': 'Contato',
        'Light': 'Claro',
        'Dark': 'Escuro',
        'Computer Science at UFPB': 'Ciência da Computação na UFPB',
        'Full Stack & AI Developer building practical products with web, data, and language models.': 'Desenvolvedor Full Stack e de IA criando produtos práticos com web, dados e modelos de linguagem.',
        'I turn research ideas and product needs into working software: dashboards, OCR pipelines, tutoring tools, LLM assistants, healthcare AI prototypes, and telemetry systems.': 'Transformo ideias de pesquisa e necessidades de produto em software funcional: dashboards, pipelines de OCR, ferramentas educacionais, assistentes com LLMs, protótipos de IA para saúde e sistemas de telemetria.',
        'I turn research ideas and product needs into working software: REST APIs, full-stack products, OCR pipelines, RAG assistants, AI agents, healthcare prototypes, and telemetry systems.': 'Transformo ideias de pesquisa e necessidades de produto em software funcional: APIs REST, produtos full stack, pipelines de OCR, assistentes RAG, agentes de IA, protótipos para saúde e sistemas de telemetria.',
        'View projects': 'Ver projetos',
        'AI and web projects': 'projetos de IA e web',
        'research and tech groups': 'grupos de pesquisa e tecnologia',
        'teaching award': 'prêmio de iniciação à docência',
        'Professional work, research involvement, and education initiatives in software and applied AI.': 'Experiência profissional, participação em pesquisas e iniciativas educacionais em software e IA aplicada.',
        'Professional': 'Profissional',
        'Jun 2025 – Present': 'Jun 2025 – Atual',
        'Software Development Intern': 'Estagiário de Desenvolvimento de Software',
        'Developing an innovative home exchange hosting application as an alternative to traditional hotels. Focusing on system architecture, database integration, and full-stack features.': 'Desenvolvimento de uma plataforma inovadora de hospedagem por troca de casas como alternativa aos hotéis tradicionais, com foco em arquitetura de sistemas, integração de bancos de dados e funcionalidades full stack.',
        'Building a peer-to-peer home-swapping platform with Next.js, Node.js, TypeScript, PostgreSQL, and Prisma. Working across REST APIs, business logic, data modeling, frontend features, debugging, scalability, and user experience.': 'Desenvolvo uma plataforma peer-to-peer de troca de residências com Next.js, Node.js, TypeScript, PostgreSQL e Prisma, atuando em APIs REST, regras de negócio, modelagem de dados, frontend, depuração, escalabilidade e experiência do usuário.',
        'May 2024 – Present': 'Mai 2024 – Atual',
        'Full Stack and AI Intern': 'Estagiário Full Stack e de IA',
        'Developed a dashboard for construction project management': 'Desenvolvi um dashboard para gestão de obras',
        'Built an OCR system for automated invoice data extraction': 'Criei um sistema de OCR para extração automatizada de dados de notas fiscais',
        'Created a flashcard web application for student learning': 'Criei uma aplicação web de flashcards para estudantes',
        'Participated in the LOTEP government bidding project': 'Participei do projeto de licitação governamental da LOTEP',
        'Tech stack: Next.js, Node.js, SQL/NoSQL Databases, Scrum': 'Stack: Next.js, Node.js, bancos de dados SQL/NoSQL e Scrum',
        'Jan 2024 – Jan 2025': 'Jan 2024 – Jan 2025',
        'Education & Technology Intern': 'Estagiário de Educação e Tecnologia',
        'Evolução School and Course': 'Colégio e Curso Evolução',
        'Designed a class scheduling system for teachers, optimizing workload distribution for grades 6–12. Supported the implementation of new mathematics teaching methodologies. Additionally, developed a reporting system that identifies the most frequently missed questions, enabling targeted feedback and instructional adjustments. Integrated an AI-powered model via the Groq API to recommend personalized study plans for each subject, enhancing student performance through adaptive learning strategies.': 'Projetei um sistema de horários para professores, otimizando a distribuição da carga de trabalho do 6º ano ao Ensino Médio. Apoiei a implementação de novas metodologias de ensino de matemática e desenvolvi um sistema de relatórios que identifica as questões com mais erros, permitindo feedback direcionado e ajustes pedagógicos. Também integrei um modelo de IA pela API da Groq para recomendar planos de estudo personalizados por disciplina.',
        'May 2023 – Dec 2023': 'Mai 2023 – Dez 2023',
        'Tutor': 'Monitor',
        'Vector Calculus and Analytic Geometry': 'Cálculo Vetorial e Geometria Analítica',
        'Conducted mentoring sessions (in-person and online) supporting public school students affected by pandemic learning gaps. Awarded the Teaching Initiation Award 2023.': 'Conduzi sessões de mentoria presenciais e on-line para apoiar estudantes da rede pública afetados pelas lacunas de aprendizagem da pandemia. Recebi o Prêmio de Iniciação à Docência de 2023.',
        'Research & Communities': 'Pesquisa e Comunidades',
        '2025 – Present': '2025 – Atual',
        'Sensing and Telemetry Member': 'Membro de Sensoriamento e Telemetria',
        "Working on data collection and analysis solutions for UFPB's electric kart, supporting performance improvement through telemetry.": 'Trabalho em soluções de coleta e análise de dados para o kart elétrico da UFPB, apoiando a melhoria de desempenho por meio de telemetria.',
        "Developing embedded systems and telemetry solutions for UFPB's electric kart, including data collection, CAN bus communication, circuit analysis, and circuit development with KiCad.": 'Desenvolvo sistemas embarcados e soluções de telemetria para o kart elétrico da UFPB, incluindo coleta de dados, comunicação CAN bus, análise e desenvolvimento de circuitos com KiCad.',
        'Research Lab Member': 'Membro de Laboratório de Pesquisa',
        'LABEN Laboratory – UFPB': 'Laboratório LABEN – UFPB',
        'Supporting neuroscience research initiatives and AI development for healthcare-related investigation.': 'Apoio iniciativas de pesquisa em neurociência e o desenvolvimento de IA aplicada a investigações na área da saúde.',
        'Researching AI applied to medical imaging, with machine learning workflows for multiple sclerosis lesion detection and segmentation in MRI scans.': 'Pesquiso IA aplicada a imagens médicas, com fluxos de aprendizado de máquina para detecção e segmentação de lesões de esclerose múltipla em ressonâncias magnéticas.',
        '2024 – Present': '2024 – Atual',
        'DevOps Directorate Member': 'Membro da Diretoria de DevOps',
        'TAIL – AI League at UFPB': 'TAIL – Liga de IA da UFPB',
        "Supporting the league's engineering infrastructure and delivery workflows while contributing to applied projects across LLMs, NLP, and MLOps.": 'Atuo na infraestrutura de engenharia e nos fluxos de entrega da liga, além de contribuir com projetos aplicados de LLMs, PLN e MLOps.',
        "Supporting the league's engineering infrastructure and delivery workflows as a DevOps Directorate member, with previous contributions to LLM evaluation, NLP, prompt engineering, sentiment analysis, and RAG projects.": 'Atuo na infraestrutura de engenharia e nos fluxos de entrega da liga como membro da Diretoria de DevOps, com contribuições anteriores em avaliação de LLMs, PLN, engenharia de prompts, análise de sentimentos e projetos RAG.',
        'Project Development Member': 'Membro de Desenvolvimento de Projetos',
        'TRIL Laboratory': 'Laboratório TRIL',
        'Participating in applied research and product development initiatives focused on education and innovation.': 'Participo de iniciativas de pesquisa aplicada e desenvolvimento de produtos com foco em educação e inovação.',
        'Aug 2022 – Jul 2023': 'Ago 2022 – Jul 2023',
        'Software Developer & Entrepreneurship Facilitator': 'Desenvolvedor de Software e Facilitador de Empreendedorismo',
        'Estruture Negócios – UFPB Extension Project': 'Estruture Negócios – Projeto de Extensão da UFPB',
        'Taught Lean Startup, MVP validation, and business modeling to entrepreneurs while helping build a TypeScript and JavaScript management platform from validated requirements.': 'Ensinei Lean Startup, validação de MVP e modelagem de negócios a empreendedores, além de colaborar na construção de uma plataforma de gestão em TypeScript e JavaScript a partir de requisitos validados.',
        'B.Sc. in Computer Science': 'Bacharelado em Ciência da Computação',
        'Federal University of Paraíba – UFPB': 'Universidade Federal da Paraíba – UFPB',
        'GPA: 8.38/10. Coursework includes Data Structures, Algorithms, Object-Oriented Programming, Software Engineering, Operating Systems, Computer Networks, and Database Systems. Languages: Portuguese (native), English (advanced), and Spanish (intermediate).': 'CRA: 8,38/10. Disciplinas incluem Estruturas de Dados, Algoritmos, Programação Orientada a Objetos, Engenharia de Software, Sistemas Operacionais, Redes de Computadores e Bancos de Dados. Idiomas: português nativo, inglês avançado e espanhol intermediário.',
        'Inside the work': 'Por dentro do trabalho',
        'From research question to working system.': 'Da pergunta de pesquisa ao sistema funcionando.',
        'I combine experimentation, product thinking, and engineering to turn ambiguous problems into measurable software.': 'Combino experimentação, visão de produto e engenharia para transformar problemas ambíguos em software com resultados mensuráveis.',
        '01 / PROCESS': '01 / PROCESSO',
        'Iterative': 'Iterativo',
        'Ideas move through a practical loop.': 'As ideias avançam por um ciclo prático.',
        'Research': 'Pesquisa',
        'Prototype': 'Protótipo',
        'Validate': 'Validação',
        'Ship': 'Entrega',
        '02 / BUILD': '02 / CONSTRUIR',
        '03 / MEASURE': '03 / MEDIR',
        'Macro F1 on fiscal text normalization': 'Macro F1 na normalização de textos fiscais',
        '04 / FOCUS': '04 / FOCO',
        'Web, data, and applied AI.': 'Web, dados e IA aplicada.',
        'AI': 'IA',
        'DATA': 'DADOS',
        'NLP': 'PLN',
        'Featured Projects': 'Projetos em Destaque',
        'Selected work across AI, machine learning, automation, and full-stack product development.': 'Trabalhos selecionados em IA, aprendizado de máquina, automação e desenvolvimento full stack.',
        'AI & Machine Learning': 'IA e Aprendizado de Máquina',
        'Game Narration AI': 'IA para Narração de Jogos',
        'Academic prototype capable of real-time match narration using NLP and Machine Learning. Demonstrates advanced natural language processing capabilities for live sports commentary.': 'Protótipo acadêmico capaz de narrar partidas em tempo real usando PLN e aprendizado de máquina. Demonstra recursos avançados de processamento de linguagem natural aplicados a comentários esportivos ao vivo.',
        'Real-time AI': 'IA em tempo real',
        'Healthcare AI': 'IA para Saúde',
        'Multiple Sclerosis Detection': 'Detecção de Esclerose Múltipla',
        'ML model for lesion detection in MRI scans of MS patients. Developed at LABEN laboratory, contributing to medical research and diagnostic assistance.': 'Modelo de aprendizado de máquina para detectar lesões em exames de ressonância magnética de pacientes com esclerose múltipla. Desenvolvido no LABEN, contribuindo para a pesquisa médica e o apoio ao diagnóstico.',
        'Computer Vision': 'Visão Computacional',
        'Medical AI': 'IA Médica',
        'TAIL · LLM Directorate': 'TAIL · Diretoria de LLM',
        'Academic LLM for UFPB': 'LLM Acadêmica para a UFPB',
        "Large language model designed to answer UFPB students' questions about academic procedures and university bureaucracy. It makes institutional information easier to access through intelligent conversation.": 'Modelo de linguagem desenvolvido para responder às dúvidas de estudantes da UFPB sobre procedimentos acadêmicos e burocracia universitária, facilitando o acesso às informações institucionais por meio de conversas inteligentes.',
        'Mobile Application': 'Aplicação Mobile',
        'WhatsApp Medication Bot': 'Bot de Medicamentos no WhatsApp',
        'Intelligent bot that provides drug-related information based on official package inserts. Improves medication safety through accessible information delivery.': 'Bot inteligente que fornece informações sobre medicamentos com base em bulas oficiais, tornando o acesso a orientações mais simples e seguro.',
        'Automation': 'Automação',
        'Healthcare': 'Saúde',
        'Web Application': 'Aplicação Web',
        'TRIL Tutoring App': 'Aplicação de Monitoria TRIL',
        'Application for scheduling academic tutoring sessions. Connects students with tutors and facilitates educational support in a structured platform.': 'Aplicação para agendamento de sessões de monitoria acadêmica. Conecta estudantes e monitores e organiza o suporte educacional em uma plataforma estruturada.',
        'Scheduling': 'Agendamento',
        'Education': 'Educação',
        'Web App': 'Aplicação Web',
        'Algorithm Optimization': 'Otimização de Algoritmos',
        'Karting Path Optimization': 'Otimização de Traçado no Kart',
        'Algorithm to optimize amateur karting lap times through path analysis and racing line calculations. Combines data science with sports performance optimization.': 'Algoritmo para reduzir tempos de volta no kart amador por meio da análise de trajetórias e do cálculo da linha ideal, combinando ciência de dados e otimização de desempenho esportivo.',
        'Optimization': 'Otimização',
        'Telemetry': 'Telemetria',
        'Data Science': 'Ciência de Dados',
        'TAIL · NLP Directorate': 'TAIL · Diretoria de PLN',
        'Emotion Detection in Portuguese Texts': 'Detecção de Emoções em Textos em Português',
        'NLP research inspired by VLibras that detects and classifies emotion in Portuguese text. The goal is to carry emotional context into Portuguese-to-gloss-to-Libras translation, enabling more expressive and appropriate signing.': 'Pesquisa em PLN inspirada no VLibras que detecta e classifica emoções em textos em português. O objetivo é levar o contexto emocional à tradução de português para glosa e Libras, permitindo uma sinalização mais expressiva e adequada.',
        'Emotion AI': 'IA de Emoções',
        'E-commerce Product Title Normalization': 'Normalização de Títulos de Produtos em E-commerce',
        'Uses LLMs to extract attributes such as brand, model, type, capacity, voltage, and color from Mercado Livre listings, creating standardized representations for deduplication and entity matching. The study compares Gemini, GPT, and DeepSeek across F1, consistency, and stability.': 'Usa LLMs para extrair atributos como marca, modelo, tipo, capacidade, voltagem e cor de anúncios do Mercado Livre, criando representações padronizadas para deduplicação e correspondência de entidades. O estudo compara Gemini, GPT e DeepSeek em F1, constância e estabilidade.',
        'Paper published at BRACIS / SBC STIL.': 'Artigo publicado no BRACIS / SBC STIL.',
        'Entity Matching': 'Correspondência de Entidades',
        'TAIL · MLOps Directorate': 'TAIL · Diretoria de MLOps',
        'TAIL CMS Website': 'Site CMS da TAIL',
        "Development of the league's content-management website, giving TAIL a maintainable platform for publishing projects, research, events, and institutional updates.": 'Desenvolvimento do site com CMS da liga, oferecendo à TAIL uma plataforma fácil de manter para publicar projetos, pesquisas, eventos e atualizações institucionais.',
        'Web Development': 'Desenvolvimento Web',
        'AI SaaS · Product Engineering': 'SaaS com IA · Engenharia de Produto',
        'Corta AI Subscription Auditor': 'Corta AI – Auditor de Assinaturas',
        'AI-powered SaaS concept that analyzes bank statements to identify recurring software subscriptions, unused licenses, and cost-saving opportunities for small and medium-sized businesses.': 'Conceito de SaaS com IA que analisa extratos bancários para identificar assinaturas recorrentes de software, licenças não utilizadas e oportunidades de redução de custos para pequenas e médias empresas.',
        'Fintech': 'Fintech',
        'AI Security · Developer Tools': 'Segurança de IA · Ferramentas para Desenvolvedores',
        'MCP Security Scanner': 'Scanner de Segurança MCP',
        'Security tool for detecting tool-poisoning attacks in Model Context Protocol servers through heuristic analysis of malicious tool descriptions and prompt-injection patterns.': 'Ferramenta de segurança para detectar ataques de tool poisoning em servidores Model Context Protocol por meio da análise heurística de descrições maliciosas de ferramentas e padrões de prompt injection.',
        'AI Agents': 'Agentes de IA',
        'Security': 'Segurança',
        'Java · Concurrent Systems': 'Java · Sistemas Concorrentes',
        'Interactive Quiz Simulator': 'Simulador Interativo de Quiz',
        'Java application that uses object-oriented and concurrent programming to simulate interactive multiplayer quiz sessions.': 'Aplicação Java que utiliza programação orientada a objetos e concorrente para simular sessões interativas de quiz multijogador.',
        'Concurrency': 'Concorrência',
        'Technical expertise across programming languages, frameworks, and AI technologies.': 'Experiência técnica em linguagens de programação, frameworks e tecnologias de IA.',
        'Programming Languages': 'Linguagens de Programação',
        'Frameworks & Tools': 'Frameworks e Ferramentas',
        'AI & Data Science': 'IA e Ciência de Dados',
        'Machine Learning': 'Aprendizado de Máquina',
        'Deep Learning': 'Aprendizado Profundo',
        'Prompt Engineering': 'Engenharia de Prompts',
        'Vector Databases': 'Bancos de Dados Vetoriais',
        'Data Processing': 'Processamento de Dados',
        'Data Pipelines': 'Pipelines de Dados',
        'Databases & Cloud': 'Bancos de Dados e Nuvem',
        'Engineering Practices': 'Práticas de Engenharia',
        'Software Architecture': 'Arquitetura de Software',
        'API Design': 'Design de APIs',
        'System Integration': 'Integração de Sistemas',
        'Testing': 'Testes',
        'Debugging': 'Depuração',
        'Resume versions': 'Versões de currículo',
        'One background, three professional profiles.': 'Uma trajetória, três perfis profissionais.',
        'My experience is organized into tailored resumes for AI, startup, and corporate opportunities, each available in American English and Brazilian Portuguese.': 'Minha experiência está organizada em currículos direcionados a oportunidades de IA, startups e empresas, cada um disponível em inglês americano e português brasileiro.',
        'Artificial Intelligence': 'Inteligência Artificial',
        'Focused on AI engineering, LLM applications, RAG, agents, MCP, NLP, computer vision, model evaluation, and applied research.': 'Foco em engenharia de IA, aplicações com LLMs, RAG, agentes, MCP, PLN, visão computacional, avaliação de modelos e pesquisa aplicada.',
        'English': 'Inglês',
        'Download ↓': 'Baixar ↓',
        'Startup & Product': 'Startup e Produto',
        'Focused on a builder mindset, zero-to-one products, rapid learning, scalable architecture, full-stack delivery, and solving real customer problems.': 'Foco em mentalidade construtora, produtos do zero ao um, aprendizado rápido, arquitetura escalável, entrega full stack e resolução de problemas reais de clientes.',
        'Product': 'Produto',
        'Software Engineering': 'Engenharia de Software',
        'Focused on full-stack engineering, backend systems, REST APIs, integrations, workflow automation, databases, testing, and team collaboration.': 'Foco em engenharia full stack, sistemas backend, APIs REST, integrações, automação de fluxos, bancos de dados, testes e colaboração em equipe.',
        'Get in Touch': 'Entre em Contato',
        'Open to internships, research collaborations, freelance projects, and product ideas involving web development or applied AI.': 'Aberto a estágios, colaborações em pesquisa, projetos freelance e ideias de produto envolvendo desenvolvimento web ou IA aplicada.',
        'Location': 'Localização',
        'João Pessoa, PB - Brazil': 'João Pessoa, PB - Brasil',
        'Always learning. Always building.': 'Sempre aprendendo. Sempre construindo.',
        'signal / system / software': 'sinal / sistema / software',
        'Back to top': 'Voltar ao topo'
    };

    const originalText = new WeakMap();

    const normalize = (value) => value.replace(/\s+/g, ' ').trim();

    function translateTextNodes(language) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
                return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });

        let node;
        while ((node = walker.nextNode())) {
            if (!originalText.has(node)) originalText.set(node, normalize(node.nodeValue));
            const english = originalText.get(node);
            const value = language === 'pt-BR' ? (pt[english] || english) : english;
            const leading = node.nodeValue.match(/^\s*/)[0];
            const trailing = node.nodeValue.match(/\s*$/)[0];
            node.nodeValue = `${leading}${value}${trailing}`;
        }
    }

    function translateAttributes(language) {
        const isPt = language === 'pt-BR';
        const values = [
            ['.language-selector', 'aria-label', 'Language', 'Idioma'],
            ['[data-language-value="en-US"]', 'aria-label', 'Use American English', 'Usar inglês americano'],
            ['[data-language-value="pt-BR"]', 'aria-label', 'Use Brazilian Portuguese', 'Usar português brasileiro'],
            ['.theme-selector', 'aria-label', 'Color theme', 'Tema de cores'],
            ['[data-theme-value="light"]', 'aria-label', 'Use light theme', 'Usar tema claro'],
            ['[data-theme-value="dark"]', 'aria-label', 'Use dark theme', 'Usar tema escuro'],
            ['.hero-photo', 'alt', "Fernando d'Ávila by the sea in a yellow structure", "Fernando d'Ávila junto ao mar, em uma estrutura amarela"],
            ['.hero-stats', 'aria-label', 'Portfolio highlights', 'Destaques do portfólio'],
            ['.process-track', 'aria-label', 'Research, prototype, validate, and ship', 'Pesquisar, prototipar, validar e entregar'],
            ['.code-window', 'aria-label', 'Example development workflow', 'Exemplo de fluxo de desenvolvimento'],
            ['.stack-marquee', 'aria-label', 'Technology stack', 'Stack de tecnologias'],
            ['.profile-languages', 'aria-label', 'Available downloads', 'Downloads disponíveis'],
            ['[data-resume="ai-en"]', 'aria-label', 'Download AI resume in American English', 'Baixar currículo de IA em inglês americano'],
            ['[data-resume="ai-pt"]', 'aria-label', 'Download AI resume in Brazilian Portuguese', 'Baixar currículo de IA em português brasileiro'],
            ['[data-resume="startup-en"]', 'aria-label', 'Download startup resume in American English', 'Baixar currículo para startups em inglês americano'],
            ['[data-resume="startup-pt"]', 'aria-label', 'Download startup resume in Brazilian Portuguese', 'Baixar currículo para startups em português brasileiro'],
            ['[data-resume="corporate-en"]', 'aria-label', 'Download corporate resume in American English', 'Baixar currículo corporativo em inglês americano'],
            ['[data-resume="corporate-pt"]', 'aria-label', 'Download corporate resume in Brazilian Portuguese', 'Baixar currículo corporativo em português brasileiro'],
            ['.footer-matrix', 'aria-label', 'Animated data signal', 'Sinal de dados animado'],
            ['.back-to-top', 'aria-label', 'Back to the top', 'Voltar ao topo']
        ];

        values.forEach(([selector, attribute, en, br]) => {
            document.querySelectorAll(selector).forEach((element) => {
                element.setAttribute(attribute, isPt ? br : en);
            });
        });

        const description = isPt
            ? "Portfólio de Fernando d'Ávila, desenvolvedor Full Stack e de IA com projetos em web, PLN, OCR e aprendizado de máquina."
            : "Fernando d'Ávila is a Full Stack and AI Developer building web applications, NLP tools, OCR systems, and machine learning solutions.";
        const socialDescription = isPt
            ? 'Portfólio com projetos de IA, aprendizado de máquina, desenvolvimento full stack e pesquisa aplicada.'
            : 'Portfolio with AI, machine learning, full-stack development, research, and applied software projects.';

        document.title = isPt
            ? "Fernando d'Ávila | Desenvolvedor Full Stack e de IA"
            : "Fernando d'Ávila | Full Stack & AI Developer";
        document.querySelector('meta[name="description"]')?.setAttribute('content', description);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', socialDescription);
        document.querySelector('meta[property="og:locale"]')?.setAttribute('content', isPt ? 'pt_BR' : 'en_US');
    }

    function applyLanguage(language) {
        const nextLanguage = language === 'pt-BR' ? 'pt-BR' : 'en-US';
        document.documentElement.lang = nextLanguage;
        localStorage.setItem('portfolio-language', nextLanguage);
        translateTextNodes(nextLanguage);
        translateAttributes(nextLanguage);

        document.querySelectorAll('[data-language-value]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.languageValue === nextLanguage));
        });
    }

    window.initLanguageSelector = function initLanguageSelector() {
        const buttons = document.querySelectorAll('[data-language-value]');
        buttons.forEach((button) => {
            button.addEventListener('click', () => applyLanguage(button.dataset.languageValue));
        });

        const savedLanguage = localStorage.getItem('portfolio-language');
        applyLanguage(savedLanguage === 'pt-BR' ? 'pt-BR' : 'en-US');
    };
})();

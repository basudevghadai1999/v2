import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Basudev',
    lastName: 'Ghadai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'AI Fullstack Developer | Python Developer | AWS & GenAI Specialist',
    avatar: '/images/avatar.jpg',
    location: 'Asia/Kolkata',   // Expecting the IANA time zone identifier, e.g., 'Asia/Kolkata'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I write about AI, cloud technologies, and software development. Get insights on LLMs, AWS, Python, and the latest in AI-powered solutions delivered to your inbox.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/basudevghadai1999', // Replace with actual GitHub link
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ghadaibasudev1234@gmail.com', // Replace with actual email
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>AI Fullstack Developer & AWS Certified AI Practitioner</>,
    subline: <>I'm Basudev Ghadai, an AI Fullstack Developer at <InlineCode>Aimplify</InlineCode>, where I build cloud-native AI applications using Python, FastAPI, LangGraph, and AWS/GCP. Passionate about leveraging LLMs and multi-agent systems to drive automation and intelligent solutions.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendar.google.com/calendar/u/0/r'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm Basudev Ghadai, an AI Fullstack Developer based in Odisha, India, currently working at <InlineCode>Aimplify</InlineCode> in Bengaluru. I specialize in designing and deploying cloud-native AI applications using cutting-edge technologies like Python, FastAPI, LangGraph, and Model Context Protocol (MCP). As an AWS Certified AI Practitioner, I bring expertise in integrating LLM-powered systems, vector databases, and multi-agent architectures to build scalable, intelligent solutions that drive real-world automation and insights. My passion lies in leveraging emerging AI frameworks and cloud infrastructures (AWS/GCP) to create reliable, real-time applications that transform how businesses operate and make decisions.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Aimplify',
                timeframe: 'April 2025 - Present',
                role: 'AI Fullstack Developer',
                achievements: [
                    <>Built and deployed AI-powered automation and analytics solutions using FastAPI, LangGraph, and MCP.</>,
                    <>Integrated intelligent dashboards, LLMs, and cloud-based agents with AWS (Elastic Beanstalk, ECS, App Runner) and GCP (Vertex AI).</>,
                    <>Developed real-time, scalable systems enabling improved data processing and decision-making.</>,
                    <>Specialized in semantic memory and multi-agent orchestration for adaptive AI workflows.</>
                ],
                images: []
            },
            {
                company: 'Spat International',
                timeframe: 'April 2024 - March 2025',
                role: 'Software Developer',
                achievements: [
                    <>Developed APIs and microservices using Python, focusing on AWS, API integration, and containerization.</>,
                    <>Enhanced platform performance and business process automation via Odoo ERP solutions.</>,
                    <>Collaborated on end-to-end backend delivery pipelines with cloud deployment.</>
                ],
                images: []
            },
            {
                company: 'Central Parking Services',
                timeframe: 'June 2023 - March 2024',
                role: 'Technical Service Engineer',
                achievements: [
                    <>Provided technical support for IoT-based systems across smart parking solutions.</>,
                    <>Delivered hardware/software troubleshooting and real-time system monitoring.</>,
                    <>Implemented performance optimization across service management tools.</>
                ],
                images: []
            },
            {
                company: 'Freelance',
                timeframe: 'December 2022 - May 2023',
                role: 'Backend Developer',
                achievements: [
                    <>Delivered custom backend solutions for clients using Python, Django, and Flask.</>,
                    <>Integrated AWS CLI, Selenium WebDriver, and Django REST Framework to build scalable API backends.</>,
                    <>Managed cloud deployment and CI/CD for client-facing web applications.</>
                ],
                images: []
            },
            {
                company: 'Confluex',
                timeframe: 'August 2022 - November 2022',
                role: 'Python Backend Developer',
                achievements: [
                    <>Designed and implemented RESTful APIs and backend logic using Django and MongoDB.</>,
                    <>Conducted A/B testing, API documentation with Swagger, and optimized endpoints for high performance.</>,
                    <>Worked with Pinata, Beautiful Soup, and unit testing frameworks for production-grade stability.</>
                ],
                images: []
            },
            {
                company: 'Confluex',
                timeframe: 'May 2022 - July 2022',
                role: 'Internship Trainee (Backend)',
                achievements: [
                    <>Contributed to backend automation tasks using Selenium and Django.</>,
                    <>Assisted in developing testing suites for web service validation and Python-based automation tools.</>
                ],
                images: []
            },
            {
                company: 'IBM',
                timeframe: 'October 2021 - February 2022',
                role: 'AI/ML Internship Trainee',
                achievements: [
                    <>Worked on AI/ML model development, data analysis, and visualization using Pandas, NumPy, Matplotlib, and Seaborn.</>,
                    <>Gained practical exposure to machine learning workflows, EDA, and AI integration into backend applications.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'IGNOU',
                description: <>Bachelor of Computer Applications (BCA), Expected Graduation: 2025</>,
            },
            {
                name: 'National Skills Training Institute, Bhubaneswar',
                description: <>Advanced Diploma in IT, Graduated with 86% in 2022 (AIR Rank 24)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'AI & LLM Development',
                description: <>Expert in building LLM-powered systems using FastAPI, LangGraph, LangChain, LlamaIndex, and MCP. Specialized in multi-agent orchestration and semantic memory.</>,
                images: []
            },
            {
                title: 'Cloud Platforms',
                description: <>AWS Certified AI Practitioner with hands-on experience in Elastic Beanstalk, ECS, App Runner, Lambda, S3, EC2, SageMaker, Bedrock. Also proficient in GCP (Vertex AI).</>,
                images: []
            },
            {
                title: 'Backend Development',
                description: <>Proficient in Python, FastAPI, Django, Flask. Experienced in building RESTful APIs, microservices, and scalable backend architectures.</>,
                images: []
            },
            {
                title: 'Databases & Vector Stores',
                description: <>Skilled in MongoDB, PostgreSQL, and vector databases including Pinecone and Weaviate for AI-powered search and retrieval.</>,
                images: []
            },
            {
                title: 'AI Tools & Frameworks',
                description: <>Hands-on with OpenAI APIs, Vertex AI, AWS Bedrock, prompt engineering, and AI system design for production environments.</>,
                images: []
            },
            {
                title: 'DevOps & Containerization',
                description: <>Experienced with Docker, Git, CI/CD pipelines, and Agile development methodologies for efficient deployment workflows.</>,
                images: []
            },
            {
                title: 'Data Science & ML',
                description: <>Proficient in Pandas, NumPy, Matplotlib, Seaborn for data analysis, visualization, and machine learning model development.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about software development and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Python-based development and AI projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My project gallery',
    description: `A showcase of projects and experiences by ${person.name}`,
    images: [
        { src: '/images/gallery/9f5db35f-0ce0-47b5-b43a-6dc55f377556.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-01.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/0192a612-5b13-4227-81d9-bc25ea0000ee.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/14a3bc3a-f376-4034-9ced-aaa11ed78a49.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/1720c36a-30c3-4e2a-b7a4-629e596a93cf.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/24755a16-8340-4ed0-8a74-ec2210308183.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/278fa9c8-aaf2-4b2d-b1a9-d8c4cddce901.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/397eae31-e271-4f0d-b4c8-6012f08686c8.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/48b1fdd3-8db4-4c97-820b-3cb3c175ff97.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/49377bdc-2231-46eb-9874-2e5b16a3dac7.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/4c2a2d5f-d77f-4052-9b32-686301871d89.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/6b9d3df1-6434-40e5-9772-8b9464d1cb6b.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/72b2b074-2826-48e0-ab15-c8682ac90f3b.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/75b55177-d3af-4400-9cf7-f523d574b2d7.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/8d94a8a9-d41e-4f45-92a7-dd3be5782fe9.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/977d3a7e-65a2-4c68-8e03-50ffcdd276f2.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/97b88c5a-c2e4-4203-97e4-e46da124a2a1.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/a10c63d9-cc0e-4b3e-aa0b-85f3096ca80d.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/a2470244-95a9-4283-a23d-dbeb32950192.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/c6bb57dd-2a25-44a1-90a7-6c2a3f461911.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/d73bbbab-4f64-42f1-92d4-f8eb95322860.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/f31b8981-2157-4b30-a3ea-b00da599c334.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/f770e113-c838-4ed3-8f4e-30a4d194d473.jpeg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/ff6c5840-bf9f-4000-8958-6793e8a422f7.jpeg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-02.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-03.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-04.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-05.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-06.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-07.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-08.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-09.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-10.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-11.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-12.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-13.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-14.jpg', alt: 'Gallery image', orientation: 'horizontal' },
        { src: '/images/gallery/img-016.jpg', alt: 'Gallery image', orientation: 'vertical' },
        { src: '/images/gallery/img-022.jpg', alt: 'Gallery image', orientation: 'horizontal' }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };

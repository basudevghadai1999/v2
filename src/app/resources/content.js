import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Basudev',
    lastName:  'Ghadai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  '/India/Mumbai',        // Updated to reflect your location
    languages: ['English', 'Odia','Hindi']  // Optional: Update as necessary
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about software development, AI, and my experiences in the tech industry.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/basudevghadai1999/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/basudevghadai',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ghadaibasudev1234@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer | Python, AI & Web Technologies</>,
    subline: <>I'm Basudev, a software developer at Sapat International Pvt Ltd, working on projects that leverage Python, AI, and web development. In my free time, I work on personal projects related to Generative AI.</>
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
        link: 'https://cal.com/basudevghadai'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Basudev is an India-based Python Developer with expertise in backend development, cloud technologies, and ERP customization. His work focuses on building scalable applications, leveraging automation, and integrating AI/ML solutions.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sapat International Pvt Ltd',
                timeframe: 'April 2024 - Present',
                role: 'Software Developer',
                achievements: [
                    <>Developed and maintained high-performance web applications using Python and Flask.</>,
                    <>Designed and managed APIs for seamless integration with internal and external systems.</>,
                    <>Customized and extended Odoo ERP modules to align with business requirements.</>,
                    <>Enhanced LMS features on OpenedX for advancing e-learning platforms.</>,
                    <>Collaborated with cross-functional teams to create scalable software solutions.</>
                ],
                images: []
            },
            {
                company: 'Central Parking Services',
                timeframe: 'June 2023 - March 2024',
                role: 'Service Engineer',
                achievements: [
                    <>Automated operational tasks using Selenium in a Linux environment.</>,
                    <>Managed and configured AMANO parking software for high-traffic locations.</>,
                    <>Optimized software performance and ensured system functionality.</>
                ],
                images: []
            },
            {
                company: 'Confluex Marketing Pvt Ltd',
                timeframe: 'May 2022 - November 2022',
                role: 'Python Backend Developer',
                achievements: [
                    <>Developed scalable backend systems to improve application performance.</>,
                    <>Integrated user-facing elements and enhanced functionality.</>,
                    <>Optimized code and system performance for seamless operation.</>
                ],
                images: []
            },
            {
                company: 'IBM',
                timeframe: 'September 2021 - February 2022',
                role: 'Intern',
                achievements: [
                    <>Worked on a self-driving car lane detection system project, deploying models on the cloud.</>,
                    <>Utilized Streamlit, Heroku, OpenCV, and Scikit-learn for developing the solution.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Indira Gandhi National Open University (IGNOU)',
                description: <>Bachelor of Computer Applications (BCA) - Expected completion in 2025</>,
            },
            {
                name: 'National Skills Training Institute (NSTI)',
                description: <>Advanced Diploma in IT, 86% - 2022 (AIR rank 24)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>Python</>,
                images: []
            },
            {
                title: 'Web Development',
                description: <>Flask, HTML, CSS</>,
                images: []
            },
            {
                title: 'Backend Development',
                description: <>Performance Optimization, REST APIs, and Integration</>,
                images: []
            },
            {
                title: 'Machine Learning & AI',
                description: <>Streamlit, OpenCV, Scikit-learn</>,
                images: []
            },
            {
                title: 'Automation',
                description: <>Selenium, Linux</>,
                images: []
            },
            {
                title: 'ERP Systems',
                description: <>Odoo (Customization and Extension)</>,
                images: []
            },
            {
                title: 'Cloud Services',
                description: <>AWS (DynamoDB, EventBridge, Lambda, S3, EC2, SageMaker AI, and more)</>,
                images: []
            },
            {
                title: 'Learning Management Systems',
                description: <>OpenedX (LMS Customization)</>,
                images: []
            },
            {
                title: 'Version Control',
                description: <>Git</>,
                images: []
            }
        ]
    }
};

const blog = {
    label: 'Blog',
    title: 'Writing about AI, Python, and Software Development...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Software development projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };

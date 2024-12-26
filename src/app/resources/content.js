import { InlineCode } from "@/once-ui/components";

const person = {
<<<<<<< HEAD
    firstName: 'Basudev',
    lastName:  'Ghadai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  '/India/Mumbai',        // Updated to reflect your location
    languages: ['English', 'Odia','Hindi']  // Optional: Update as necessary
=======
    firstName: 'Selene',
    lastName:  'Yu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
<<<<<<< HEAD
    description: <>I occasionally write about software development, AI, and my experiences in the tech industry.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/basudevghadai1999/',
=======
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
<<<<<<< HEAD
        link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200',
=======
        link: 'https://www.linkedin.com/company/once-ui/',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    },
    {
        name: 'X',
        icon: 'x',
<<<<<<< HEAD
        link: 'https://x.com/basudevghadai',
=======
        link: '',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    },
    {
        name: 'Email',
        icon: 'email',
<<<<<<< HEAD
        link: 'mailto:ghadaibasudev1234@gmail.com',
=======
        link: 'mailto:example@gmail.com',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
<<<<<<< HEAD
    headline: <>Software Developer | Python, AI & Web Technologies</>,
    subline: <>I'm Basudev, a software developer at Sapat International Pvt Ltd, working on projects that leverage Python, AI, and web development. In my free time, I work on personal projects related to Generative AI.</>
=======
    headline: <>Design engineer and builder</>,
    subline: <>I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
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
<<<<<<< HEAD
        link: 'https://cal.com/basudevghadai'
=======
        link: 'https://cal.com'
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    },
    intro: {
        display: true,
        title: 'Introduction',
<<<<<<< HEAD
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
=======
        description: <>Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
            }
        ]
    },
    studies: {
<<<<<<< HEAD
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
=======
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
            }
        ]
    },
    technical: {
<<<<<<< HEAD
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
=======
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
}

const work = {
    label: 'Work',
    title: 'My projects',
<<<<<<< HEAD
    description: `Software development projects by ${person.name}`
=======
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
<<<<<<< HEAD
=======
    // Images from https://pexels.com
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
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
<<<<<<< HEAD
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
=======
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca

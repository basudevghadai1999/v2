import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Basudev',
    lastName:  'Ghadai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Python Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',   // Expecting the IANA time zone identifier, e.g., 'Asia/Kolkata'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
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
    headline: <>Software Developer and Builder</>,
    subline: <>I'm Basudev Ghadai, a software developer at <InlineCode>Sapat International Pvt Ltd</InlineCode>, where I build scalable web applications, APIs, and AI-powered solutions.</>
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
        description: <>Basudev Ghadai is a Python Developer based in Odisha, specializing in backend development, AI, and automation. With experience in building scalable solutions and optimizing performance, Basudev is passionate about creating efficient and impactful software.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sapat International Pvt Ltd',
                timeframe: 'April 2024 - Present',
                role: 'Software Developer',
                achievements: [
                    <>Developed and maintained web applications using Python and Flask.</>,
                    <>Customized and extended Odoo ERP modules to meet business requirements.</>,
                    <>Worked with OpenedX to enhance LMS features.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Sapat Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Central Parking Services',
                timeframe: 'June 2023 - March 2024',
                role: 'Service Engineer',
                achievements: [
                    <>Automated tasks using Selenium in a Linux environment.</>,
                    <>Managed parking software configurations at Jio World Centre.</>
                ],
                images: []
            },
            {
                company: 'Confluex Marketing Pvt Ltd',
                timeframe: 'May 2022 - November 2022',
                role: 'Python Backend Developer',
                achievements: [
                    <>Wrote scalable code and integrated user-facing elements with back-end components to improve performance.</>
                ],
                images: []
            },
            {
                company: 'IBM',
                timeframe: 'September 2021 - February 2022',
                role: 'Intern',
                achievements: [
                    <>Developed and deployed a self-driving car lane detection model using OpenCV, Streamlit, and AWS.</>
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
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <>Experienced in backend development, performance optimization, and API integrations using Python.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Python Project',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Flask',
                description: <>Skilled in building web applications using Flask.</>,
                images: []
            },
            {
                title: 'OpenCV',
                description: <>Developed and deployed AI-based models using OpenCV.</>,
                images: []
            },
            {
                title: 'Selenium',
                description: <>Used Selenium for automation in a Linux environment.</>,
                images: []
            },
            {
                title: 'Odoo',
                description: <>Customized and extended Odoo ERP modules.</>,
                images: []
            },
            {
                title: 'AWS',
                description: <>Utilized AWS services like Lambda, S3, EC2, SageMaker, and DynamoDB for cloud deployment and AI projects.</>,
                images: []
            },
            {
                title: 'Streamlit',
                description: <>Built AI/ML applications using Streamlit for real-time interaction.</>,
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
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };

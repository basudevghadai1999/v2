import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
<<<<<<< HEAD
        firstName: 'Basudev',
        lastName:  'Ghadia',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"), // Role will be translated
        avatar:    '/images/avatar.jpg', // Change this if you have a new avatar
        location:  'Asia/Kolkata', // India time zone as you're based in Odisha
        languages: ['English', 'Hindi', 'Odia'],  // Optional: You can add languages here
=======
        firstName: 'Selene',
        lastName:  'Yu',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
<<<<<<< HEAD
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/basudevghadai1999', // Update with your GitHub link
=======
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
            link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200/', // Update with your LinkedIn link
=======
            link: 'https://www.linkedin.com/company/once-ui/',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
        },
        {
            name: 'X',
            icon: 'x',
<<<<<<< HEAD
            link: 'https://twitter.com/basudevghadai', // Update with your Twitter link
=======
            link: '',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
        },
        {
            name: 'Email',
            icon: 'email',
<<<<<<< HEAD
            link: 'mailto:ghadaibasudev1234@gmail.com', // Update with your email
=======
            link: 'mailto:example@gmail.com',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
<<<<<<< HEAD
            link: 'https://cal.com/basudev', // You can update this with your calendar link if available
=======
            link: 'https://cal.com'
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
<<<<<<< HEAD
            display: true, 
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'Sapat International Pvt Ltd',
                    timeframe: t("about.work.experiences.Sapat.timeframe"),
                    role: t("about.work.experiences.Sapat.role"),
                    achievements: t("about.work.experiences.Sapat.achievements").split(";"),
                    images: [
                        {
                            src: '/images/projects/project-01/cover-01.jpg',
                            alt: 'NA',
=======
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'FLY',
                    timeframe: t("about.work.experiences.FLY.timeframe"),
                    role: t("about.work.experiences.FLY.role"),
                    achievements: t("about.work.experiences.FLY.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                        {
                            src: '/images/projects/project-01/cover-01.jpg',
                            alt: 'Once UI Project',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
<<<<<<< HEAD
                    company: 'CPS India Pvt Ltd',
                    timeframe: t("about.work.experiences.CPS.timeframe"),
                    role: t("about.work.experiences.CPS.role"),
                    achievements: t("about.work.experiences.CPS.achievements").split(";"),
=======
                    company: 'Creativ3',
                    timeframe: t("about.work.experiences.Creativ3.timeframe"),
                    role: t("about.work.experiences.Creativ3.role"),
                    achievements: t("about.work.experiences.Creativ3.achievements").split(";"),
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
                    images: [ ]
                }
            ]
        },
        studies: {
<<<<<<< HEAD
            display: true,
            title: 'BCA - Computer Applications',
            institutions: [
                {
                    name: 'IGNOU (Indira Gandhi National Open University)',
                    description: <>{t(`about.studies.institutions.IGNOU.description`)}</>,
                },
                {
                    name: 'National Skills Training Institute (Advanced Diploma in IT)',
                    description: <>{t("about.studies.institutions.NSTI.description")}</>,
=======
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'University of Jakarta',
                    description: <>{t(`about.studies.institutions.University of Jakarta.description`)}</>,
                },
                {
                    name: 'Build the Future',
                    description: <>{t("about.studies.institutions.Build the Future.description")}</>,
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
                }
            ]
        },
        technical: {
<<<<<<< HEAD
            display: true,
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Python',
                    description: <>{t("about.technical.skills.Python.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Python Project',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    title: 'Flask',
                    description: <>{t("about.technical.skills.Flask.description")}</>, 
                    images: [
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Flask Project',
=======
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Figma',
                    description: <>{t("about.technical.skills.Figma.description")}</>,
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
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
<<<<<<< HEAD
                    title: 'Odoo 17',
                    description: <>{t("about.technical.skills.Odoo.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Odoo Project',
=======
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
                            width: 16,
                            height: 9
                        },
                    ]
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
<<<<<<< HEAD
=======
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
<<<<<<< HEAD
=======
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
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
            },
            { 
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
<<<<<<< HEAD
                orientation: 'horizontal'
=======
                orientation: 'vertical'
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
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
<<<<<<< HEAD
        ]
    }
    
=======
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
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

<<<<<<< HEAD
export { createI18nContent };
=======
export { createI18nContent };
>>>>>>> 93324baadfcfe5b6b49694667d7bcba8d46490ca

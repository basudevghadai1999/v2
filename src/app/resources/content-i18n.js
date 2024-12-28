import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Basudev',
        lastName:  'Ghadai',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Kolkata', // Updated location to match your profile
        languages: ['English', 'Odia', 'Hindi'],
    };

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
        description: <>{t("newsletter.description")}</>,
    };

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/basudevghadai1999', // Replace with actual GitHub link
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200/', // Your LinkedIn profile link
        },
        {
            name: 'X',
            icon: 'x',
            link: 'https://x.com/biplab_tech_guy', // Updated to your X profile link
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'ghadaibasudev1234@gmail.com', // Updated email address
        },
    ];

    const home = {
        label: t("home.label"),
        title: t("home.title", { name: person.name }),
        description: t("home.description", { role: person.role }),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>,
    };

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", { name: person.name, role: person.role, location: person.location }),
        tableOfContent: {
            display: true,
            subItems: true,
        },
        avatar: {
            display: true,
        },
        calendar: {
            display: true,
            link: 'https://cal.com',
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>,
        },
        work: {
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
                            alt: 'Sapat International Project',
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    company: 'Confluex Marketing Pvt Ltd',
                    timeframe: t("about.work.experiences.Confluex.timeframe"),
                    role: t("about.work.experiences.Confluex.role"),
                    achievements: t("about.work.experiences.Confluex.achievements").split(";"),
                    images: [],
                },
                {
                    company: 'IBM',
                    timeframe: t("about.work.experiences.IBM.timeframe"),
                    role: t("about.work.experiences.IBM.role"),
                    achievements: t("about.work.experiences.IBM.achievements").split(";"),
                    images: [],
                },
            ],
        },
        studies: {
            display: true,
            title: 'Studies',
            institutions: [
                {
                    name: 'IGNOU (Bachelor of Computer Applications)',
                    description: <>{t("about.studies.institutions.IGNOU.description")}</>,
                },
                {
                    name: 'National Skills Training Institute',
                    description: <>{t("about.studies.institutions.NSTI.description")}</>,
                },
            ],
        },
        technical: {
            display: true,
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Python',
                    description: <>{t("about.technical.skills.Python.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Python Project Image',
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: 'Odoo',
                    description: <>{t("about.technical.skills.Odoo.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Odoo Project Image',
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: 'Flask',
                    description: <>{t("about.technical.skills.Flask.description")}</>,
                    images: [],
                },
            ],
        },
    };

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", { name: person.name }),
        // You can create new blog posts by adding a new .mdx file to app/blog/posts
    };

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", { name: person.name }),
        // You can create new project pages by adding a new .mdx file to app/blog/posts
    };

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", { name: person.name }),
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'Image',
                orientation: 'vertical',
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'Image',
                orientation: 'horizontal',
            },
            {
                src: '/images/gallery/img-03.jpg',
                alt: 'Image',
                orientation: 'vertical',
            },
            {
                src: '/images/gallery/img-04.jpg',
                alt: 'Image',
                orientation: 'horizontal',
            },
        ],
    };

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery,
    };
};

export { createI18nContent };

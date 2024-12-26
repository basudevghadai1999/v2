import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Basudev',
        lastName:  'Ghadia',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"), // Role will be translated
        avatar:    '/images/avatar.jpg', // Change this if you have a new avatar
        location:  'Asia/Kolkata', // India time zone as you're based in Odisha
        languages: ['English', 'Hindi', 'Odia'],  // Optional: You can add languages here
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/basudevghadai1999', // Update with your GitHub link
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/basudev-ghadai-67b07b200/', // Update with your LinkedIn link
        },
        {
            name: 'X',
            icon: 'x',
            link: 'https://twitter.com/basudevghadai', // Update with your Twitter link
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:ghadaibasudev1234@gmail.com', // Update with your email
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
            link: 'https://cal.com/basudev', // You can update this with your calendar link if available
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
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
                            alt: 'NA',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'CPS India Pvt Ltd',
                    timeframe: t("about.work.experiences.CPS.timeframe"),
                    role: t("about.work.experiences.CPS.role"),
                    achievements: t("about.work.experiences.CPS.achievements").split(";"),
                    images: [ ]
                }
            ]
        },
        studies: {
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
                }
            ]
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
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'Odoo 17',
                    description: <>{t("about.technical.skills.Odoo.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Odoo Project',
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
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
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
                orientation: 'horizontal'
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
        ]
    }
    
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

export { createI18nContent };

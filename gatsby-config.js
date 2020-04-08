let siteMetadata = {
    title: `Yazgeldi Seyidov`,
    capitalizeTitleOnHome: true,
    logo: `/images/location2.svg`,
    icon: `/images/location.png`,
    titleImage: `/images/aqua.jpg`,
    introTag: `Front End Web Developer | Back End Web Developer`,
    description: `Seeking for open positions.`,
    author: `@yazseyit77`,
    blogItemsPerPage: 4,
    portfolioItemsPerPage: 6,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOGS",
            url: "/blog"
        },
        {
            name: "PROJECTS",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "MIT Licence",
            url: "/license"
        },
        {
            name: "GitHub",
            url: "https://github.com/yazseyit77"
        }
    ],
    social: [
        {
            name: "Website",
            icon: "/images/domain.svg",
            url: "https://yazseyit77.github.io/portfoliopage/"
        },
        {
            name: "LinkeIn",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/yazgeldi-seyidov"
        },
        {
            name: "GitHub",
            icon: "/images/github3D.svg",
            url: "https://github.com/yazseyit77"
        },
        {
            name: "Resume",
            icon: "/images/word.svg",
            url:
                "https://drive.google.com/file/d/1rqXyksA8u4P89COwVmWhlB2oSHdw3muP/view?usp=sharing"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "https://formspree.io/moqwdqvp",
        description: `Please feel free to reach out to me for any questions.`,
        mail: "Gmail: yazgeldi.seyidov",
        phone: "Phone: 619-717-9556",
        address: "Location: San Diego, CA"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};

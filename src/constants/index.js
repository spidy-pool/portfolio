import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "TEIFIC",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2023 - Till Now",
        points: [
            "Component development: Emphasize your ability to design and build reusable, well-structured React components",
            "Performance optimization: Mention experience in optimizing components for fast loading and smooth user experience.",
            "Front-end architecture: Briefly describe your skills in building scalable and maintainable front-end architectures using React.",
            "Collaboration: Touch on your experience working with back-end teams to integrate user interfaces.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/spidy-pool',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/parvendra-singh-mern/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'User-Auth',
        des : `The website is built using Next.js, a React framework for server-side rendering. This provides better SEO and initial page load performance. JSON Web Tokens (JWT) are used for secure authentication, while Bcrypt ensures the protection of user passwords against unauthorized access.`,
        description: 'This user authentication website is a web-based application designed to provide secure and efficient user management. Users can create accounts, log in, and reset their passwords. The website utilizes JSON Web Tokens (JWT) for session management and Bcrypt for password hashing, ensuring the protection of user credentials.',
       link: 'https://user-auth-detail.vercel.app/login',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-orange',
        name: 'Voltplay',
        des: `Our platform is built on the robust MERN (MongoDB, Express.js, React.js, Node.js) stack, ensuring a seamless and scalable experience. The frontend utilizes React.js and Material UI for a visually appealing interface, while the backend is powered by Node.js and Express.js. MongoDB stores data, and the Paytm gateway guarantees secure payments.`,
        description: `Discover a world of innovative IoT devices on our user-friendly e-commerce platform. Browse our extensive catalog, add your favorite items to your cart, and enjoy a secure checkout process powered by Paytm. Benefit from personalized features like user accounts, order tracking, and dedicated customer support.`,
        link: 'https://voltplay.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'GURU AI',
        des : `The project leverages React and Vite, two popular JavaScript frameworks. React's component-based architecture enables efficient development, while Vite's server-side rendering and bundling provide faster build times. The project also utilizes a [specify the NLP library or framework used] for natural language processing.`,
        description: 'This AI assistant is a web-based application that provides intelligent and helpful responses to user queries. It uses natural language processing to understand and respond to user input in a natural and informative manner.',
        link: 'https://guru-ai.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'TEIFIC',
        des: `Our website is crafted with a powerful blend of HTML, CSS, JavaScript, GSAP, and Locomotive Scroll. This technology stack ensures a visually stunning and highly interactive experience, providing seamless navigation and engaging animations.`,
        description: `Discover a world of innovative IoT solutions on our cutting-edge platform. Explore our comprehensive range of products and services, learn from client success stories, and gain valuable insights into IoT trends. Connect with us to explore partnership opportunities and request a personalized demo.`,
        link: 'https://spidy-pool.github.io/e-commerce/',
    },
   
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'EV Charging Station',
        des: `IoT, Embedded Systems, app development, web development`,
        description: `We have made a plug in EV charger system where you can bring your own charger and charge your EV you doesn't need to install any app and make any wallet is the Hustle free process you can easily come pay and go admit as you want to charge so pay as you go process has been used.`,
        // link: 'https://github.com/spidy-pool',
    },
 
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Soil Moisture Detection',
        des: `IoT, Embedded Systems, app development, web development`,
        description: `It measures essential components and data of the plant and then applies the required care to the plant so it can nurture it at its own it has totally customisable environment creator feature it can create a customize environment for the plant to live in to make it nurture faster and in effective healthier process.`,
        // link: 'https://github.com/spidy-pool',
    },
   
];
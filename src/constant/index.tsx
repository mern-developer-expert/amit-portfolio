import { TeamMember } from "@/components/types";
import { BookOpen, Code, Lightbulb } from "lucide-react";

export const resumeContent = `
AMIT KUMAR
Full Stack Engineer (MERN + Next.js) | 4 years

Email: notgetin18@gmail.com
Phone: (+91) 9660637657
Address: Laxmi Nagar, New Delhi - 110092

Github: https://github.com/mern-developer-expert
Linkedin: https://www.linkedin.com/in/mern-developer-expert-amit
X: https://x.com/Amitsin40190332
Portfolio: https://www.amitdevjourney.com/

SUMMARY:
Full Stack Engineer (MERN + Next.js) | 3.5+ years
Built & shipped production platforms for Bright Digi Gold (1M+ users, fintech), TestOfire (EdTech), and Medical Kundali — a live healthcare compatibility (SaaS) platform using Next.js, TypeScript, microservices, AWS S3, RabbitMQ, Redis (caching), and end-to-end encrypted communication. Skilled in architecting high-performance applications, leading cross-functional teams, and shipping features that increase engagement and revenue.

TECHNICAL SKILLS:
Frontend: JavaScript, React.js, React Native, Next.js, Redux, TypeScript, Tailwind CSS, HTML, CSS, Integration of Complex APIs
Backend: Node.js, Express.js, TypeScript, RESTful API Development
DevOps: Docker, Git & GitHub, Jira & Slack
Database: MongoDB, MySQL, AWS (EC2, S3)

PROFESSIONAL EXPERIENCE:

Software Developer (Frontend Developer) | Bright Digital Gold
April 2022 – Present
• Engineered responsive web and mobile interfaces using React.js, TypeScript, and Redux within the MERN stack, delivering intuitive experiences for a 1M+ user base.
• Integrated RESTful APIs and developed dynamic data visualizations, enhancing customer engagement by 15% through improved usability and accessibility.
• Optimized website performance by 30% by implementing React state management, Formik for form handling, and streamlining KYC, transaction, buy/sell, and gifting workflows.
• Collaborated with cross-functional teams to deliver high-quality software products, contributing to a 10% revenue increase through enhanced user experiences.
• Designed and implemented coupon discount systems and promotional features (welcome promos, gifting scenarios), driving a 20% revenue surge as measured by sales and profit margins.
• Led end-to-end development of new product features—from UI/UX implementation to backend integration—resulting in smoother user journeys across onboarding, transactions, and savings experiences.

Freelance Software Developer (Full Stack Developer) | TestOfire Technologies
November 2021 – Present | Remote
• Led the development of a student-coaching app platform using MERN stack, integrating advanced APIs for real-time synchronization of user actions between student and coaching apps.
• Ensured seamless communication by implementing instant updates, improving collaboration efficiency and user satisfaction across both applications.

Full Stack Developer | Medical Kundali
January 2025 – Present | Remote
• Developed a secure healthcare compatibility platform with report-sharing using MERN stack, enabling OTP-based authentication and microservices architecture.
• Built independent microservices communicating via encrypted payloads and RabbitMQ for asynchronous report processing and notifications.
• Designed user authentication, report upload, and sharing workflows integrated with MongoDB for efficient data management.
• Engineered file upload & secure sharing module using presigned S3 URLs and AWS S3 for serving medical documents with cache invalidation.
• Built responsive admin and user dashboards using Next.js App Router, Tailwind CSS, Shadcn/ui, and server actions — achieving 100% Lighthouse accessibility score.
• Collaborated with business stakeholders to define requirements and deliver a scalable solution that improved user engagement and streamlined report-sharing processes.

EDUCATION:
Master of Computer Applications (MCA) | Maharaja Agrasen Himalayan Garhwal University (MAHGU)
2021 – 2023 | Uttarakhand
• Focused on advanced software development, database management, and web technologies.

Bachelor of Computer Applications (BCA) | Indira Gandhi National Open University (IGNOU)
2018 – 2021 | Delhi
• Focused on SDLC, Programming, Operating Systems, Computer Networking, and software engineering.

KEY PROJECTS:
Investing & Saving Platform | Bright Digi Gold (April 2022 – Present)
• Developed a full-fledged e-commerce platform for buying, selling, ordering, and gifting digital gold/silver using MERN stack; integrated payment gateways.
• Reduced transaction processing time by 25% through backend optimizations with Node.js and Express.js.

Medical Matrimony Platform | Medical Kundali (Jan 2025 – Present)
• Designed and delivered a secure healthcare compatibility platform from scratch using modern architecture (microservices, RabbitMQ, encrypted comms, Redis).

Student-Coaching App | TestOfire Technologies (November 2021 – October 2024)
• Built a real-time app ecosystem using MERN stack, facilitating seamless interaction between students and coaches.

CERTIFICATIONS:
• JavaScript + ES6 with MERN | Udemy | 2022

ADDITIONAL INFORMATION:
• Languages: English (Fluent), Hindi (Native)
• Interests: Open-source contributions, tech blogging, Cricket

POSITION OF RESPONSIBILITY:
Volunteered as a tutor for locals in my village, teaching underprivileged children basic computer skills and primary education.
`;

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const defaultBlogPosts = [
  {
    id: 1,
    title: "Building Scalable MERN Applications: Best Practices",
    excerpt:
      "Learn the essential patterns and practices for building robust MERN stack applications that can handle thousands of users.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Optimizing React Performance: Real-world Techniques",
    excerpt:
      "Discover the performance optimization techniques I used to boost website speed by 30% in production applications.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "React",
    icon: Lightbulb,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "API Integration Strategies for Modern Web Apps",
    excerpt:
      "Explore different approaches to API integration and how to handle complex data flows in MERN applications.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Backend",
    icon: BookOpen,
    gradient: "from-green-500 to-teal-500",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Ayush Arya",
    role: "Backend Developer",
    expertise: "Masters scalable REST APIs with Node.js, Express, and MongoDB, delivering high-performance systems through advanced caching and resilient error handling.",
    link: "https://www.linkedin.com/in/ayush-arya-36505a218/",
    avatar: "/team/Ayush.jpeg"
  },
  {
    name: "Ritesh Singh",
    role: "Full Stack Developer & Technical Lead",
    expertise: "10+ years of expertise in MERN, TypeScript, Next.js, AWS/CI-CD pipeline management and leading AI platform development. Delivered SaaS based Platform.",
    link: "https://www.linkedin.com/in/1124ritesh/",
    avatar: "/team/Ritesh.jpeg"
  },
  {
    name: "Shashi Bhushan Jha",
    role: "Full-Stack Specialist",
    expertise: "Leads cross-platform mobile apps via Flutter, seamlessly integrating payment gateways while prioritizing security and flawless multi-device performance.",
    link: "https://www.linkedin.com/in/shashi-bhushan-jha-7797371a3/",
    avatar: "/team/Shashi.jpeg"
  },
  {
    name: "Mritunjay Gupta",
    role: "Product Engineer",
    expertise: "Drives SaaS growth through end-to-end feature lifecycles, blending B2B/B2C strategies for optimal user retention and scalable market expansion.",
    link: "https://www.linkedin.com/in/mritunjay-gupta/",
    avatar: "/team/Mritunjay.jpeg"
  },
  {
    name: "Vipin Rathore",
    role: "Motion Graphic Designer & Video Editor",
    expertise: "Transforms ideas into dynamic video content and motion graphics, elevating digital marketing campaigns with storytelling that captivates and converts audiences.",
    link: "https://www.linkedin.com/in/vipin-rathore-615a3019b/",
    avatar: "/team/Vipin.jpeg"
  },
  {
    name: "Simran Meena",
    role: "Content Writer",
    expertise: "Crafts SEO-optimized technical narratives, from in-depth docs to engaging user guides, making complex dev concepts accessible and search-ready for global readers.",
    link: "https://www.linkedin.com/in/simran-meena-a44b262a7/",
    avatar: "/team/Simran.jpeg"
  },
  {
    name: "Raghvender Singh",
    role: "UI/UX Engineer",
    expertise: "Designs intuitive frontend architectures and responsive interfaces, leveraging Figma and React to prototype user flows that prioritize accessibility and delight.",
    link: "https://www.linkedin.com/in/raghvender-singh-627089121/",
    avatar: "/team/Raghvender.jpeg"
  },
];

export const faqItems = [
  {
    question: "What makes a portfolio the best example?",
    answer:
      "A best portfolio example shows real outcomes, clear problem-solving, and credible proof. It combines strong case studies, performance and UX details, and measurable impact like users reached or conversion lift.",
  },
  {
    question: "How many projects should a developer portfolio include?",
    answer:
      "Three to five strong case studies beat a long list. Each should show the problem, approach, architecture decisions, and results.",
  },
  {
    question: "Do I need a portfolio if I already have a resume?",
    answer:
      "Yes. A resume lists skills, while a portfolio proves them with real examples, screenshots, and live links.",
  },
  {
    question: "How can I improve my portfolio's ranking on Google?",
    answer:
      "Create a focused landing page, write supporting blog posts, add structured data (FAQ and breadcrumbs), and earn backlinks from developer communities and portfolios lists.",
  },
];
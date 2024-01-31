import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';
import project7 from '../assets/images/project-7.png';
import project8 from '../assets/images/project-8.png';
import project9 from '../assets/images/project-9.png';
import project10 from '../assets/images/project-10.png';
import project11 from '../assets/images/project-11.png';
import project12 from '../assets/images/project-12.png';
import project13 from '../assets/images/project-13.png';
import project14 from '../assets/images/project-14.png';
import { PROJECT_TYPES_VARIABLES } from './constant';

export const projects = [
  {
    id: 'project-1',
    title: 'Threads Clone',
    desc: 'social media app',
    featuredProject: true,
    url: project1,
    info: 'A "Threads Clone" project is inspired by the popular social media platform "Threads" and aims to replicate some of its core features, allowing users to post short messages, follow other users, and engage in real-time discussions using chat feature and many more',
    sourceCode: 'https://github.com/faruk-mansuri/mern-threads-clone',
    liveProject: 'https://threads-clone-app.onrender.com',
    type: PROJECT_TYPES_VARIABLES.MERN_STACK,
  },
  {
    id: 'project-2',
    title: 'Auth Next JS',
    desc: 'User Verification',
    url: project2,
    info: `Elevate User Security with Next.js! Introducing my new project that offers seamless registration, login, and password reset with email verification. It's time to redefine how users experience your web app! 🔐🌟`,
    sourceCode: 'https://github.com/faruk-mansuri/next-js-auth-setup',
    liveProject: 'https://auth-next-js.netlify.app',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
  {
    id: 'project-3',
    title: 'unsplash images',
    desc: 'search gallery',
    featuredProject: true,
    url: project3,
    info: 'Unsplash image application that enables users to search for images using the Unsplash API. The app also includes a dark mode option for theme management. To optimize data retrieval and caching, I utilized React Query and its developer tools for efficient debugging and monitoring.',
    sourceCode: 'https://github.com/faruk-mansuri/vite-images',
    liveProject: 'https://unsplash-images-project-v2.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-4',
    title: 'comfy sloth',
    desc: 'furniture e-commerce website',
    featuredProject: true,
    url: project4,
    info: 'E-commerce project focusing on an online furniture store. The project utilizes Auth0 for user authentication. I implemented an advanced filter system, allowing users to conveniently sort products by various criteria such as name, company, color, and price range. The user interface features a column and row layout, enhancing the browsing experience.',
    sourceCode: 'https://github.com/faruk-mansuri/react-comfy-sloth',
    liveProject: 'https://react-comfy-sloth-v1.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-5',
    title: 'git-user',
    desc: 'git-app',
    url: project5,
    info: 'React.js project that enables visitors to search for GitHub users. The project displays various information about the users, including the number of repositories they have and a list of their followers. I integrated Auth0 for authentication and utilized the Axios library for fetching data. Additionally, I incorporated a chat feature to provide detailed information about the user.',
    sourceCode: 'https://github.com/faruk-mansuri/rect-github-users',
    liveProject: 'https://react-github-user-1.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-6',
    title: 'jobify',
    desc: 'job tracking app',
    featuredProject: true,
    url: project6,
    info: 'A job tracking app as my first MERN stack project. This application empowers users to perform CRUD operations by registering, creating, editing, deleting, and searching for jobs. I employed Express Validators to validate user inputs. For heightened security, I implemented JSON Web Tokens (JWT). Furthermore, I optimized data retrieval and caching through React Query.',
    sourceCode: 'https://github.com/faruk-mansuri/jobify',
    liveProject: 'https://jobify-eold.onrender.com/',
    type: PROJECT_TYPES_VARIABLES.MERN_STACK,
  },
  {
    id: 'project-7',
    title: 'Hacker News app',
    desc: 'news application',
    url: project7,
    info: 'I built a Hacker News app where users have access to a search form and interact with the Hacker News API to fetch stories related to their input. Additionally, I implemented server-side pagination to enhance the user experience.',
    sourceCode: 'https://github.com/faruk-mansuri/react-hacker-news-project-4',
    liveProject: 'https://react-hacker-new-project-4.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-8',
    title: 'Movie DB',
    desc: 'movie search application',
    url: project8,
    info: 'Movies DB, where user can search for movie and api returns movie then user can see those movies and if query does return anything the of course user will see that error',
    sourceCode: 'https://github.com/faruk-mansuri/movieDB',
    liveProject: 'https://react-moviedb-project.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-9',
    title: 'ReactJS E-Commerce Application',
    desc: 'E-Commerce Furniture Store',
    url: project9,
    info: 'E-commerce furniture store where users can log in, register, add items to their cart, toggle themes, view order history, and more. Utilizing the latest tools such as React Query, React Router DOM 6.14, Redux Toolkit, and more. The site offers a fast and efficient product filtering system, along with authentication and authorization functionalities.',
    sourceCode: 'https://github.com/faruk-mansuri/ReactJS-E-Commerce',
    liveProject: 'https://reactjs-e-commerce-app.netlify.app/',
    type: PROJECT_TYPES_VARIABLES.REACTJS,
  },
  {
    id: 'project-10',
    title: 'GPTGenius',
    desc: 'GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!',
    featuredProject: true,
    url: project10,
    info: `"GPTGenius" a full stack nextJS web application that integrates OpenAI's 3.5 GPT model. Clerk for authentication and user management. Implemented features including a chatbot for interactive conversations and dynamic tour generation using openAI
.`,
    sourceCode: 'https://github.com/faruk-mansuri/GPTGenius',
    liveProject: 'https://gpt-genius-one.vercel.app/',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
  {
    id: 'project-11',
    title: 'Promptopia',
    desc: 'Promptopia is an open-source creative prompting tool that allows users to discover, create, and share prompts.',
    url: project11,
    info: `"Promptopia" is an open-source creative prompting tool that allows users to discover, create, and share prompts. It includes user authentication with email verification and leverages the latest Next.js features, such as middleware.`,
    sourceCode: 'https://github.com/faruk-mansuri/next-js-promptopia',
    liveProject: 'https://next-js-promptopia.netlify.app/login',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
  {
    id: 'project-12',
    title: 'Genius',
    desc: 'Genius is an AI Platform with five AI tools. Powered by the Next.js 13 App Router, our platform will not only be efficient but also user-centric.',
    featuredProject: true,
    url: project12,
    info: `"Genius" is more than just a platform; it's your ultimate creative companion! 🎨💬 Imagine a space where you can chat with AI, effortlessly create stunning images, convert prompts to music and videos, or can ask AI to generate code for you. `,
    sourceCode: 'https://github.com/faruk-mansuri/genius',
    liveProject: 'https://genius-nu.vercel.app/',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
  {
    id: 'project-13',
    title: 'AI Companion',
    desc: 'AI-Companion is a next-gen platform where you can seamlessly create, edit, and even chat with your own AI companions!.',
    featuredProject: false,
    url: project13,
    info: `I believe in the power of AI to enhance our daily lives. AI-Companion is designed to be your virtual sidekick, offering personalized experiences and meaningful interactions. 🤯 "Imagine having a chat with Albert Einstein or Steve Jobs.`,
    sourceCode: 'https://github.com/faruk-mansuri/ai-companion',
    liveProject: 'https://ai-companion-rose-eight.vercel.app/',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
  {
    id: 'project-14',
    title: 'Messenger App',
    desc: 'AI-Companion is a next-gen platform where you can seamlessly create, edit, and even chat with your own AI companions!.',
    featuredProject: false,
    url: project14,
    info: `A "Messenger Clone" project is inspired by the popular social media platform "Messenger" and aims to replicate some of its core features, allowing users create or delete single or groups conversation at your convenience. Stay on top of your conversations with the Seen and Unseen feature and Know when your friends are online or offline.`,
    sourceCode: 'https://github.com/faruk-mansuri/messenger-clone',
    liveProject: 'https://messenger-clone-ruby-eight.vercel.app',
    type: PROJECT_TYPES_VARIABLES.NEXTJS,
  },
];

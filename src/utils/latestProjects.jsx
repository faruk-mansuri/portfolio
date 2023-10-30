import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';
import project7 from '../assets/images/project-7.png';
import project8 from '../assets/images/project-8.png';
import project9 from '../assets/images/project-9.png';

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
  },
  {
    id: 'project-2',
    title: 'Auth Next JS',
    desc: 'User Verification',
    url: project2,
    info: `Elevate User Security with Next.js! Introducing my new project that offers seamless registration, login, and password reset with email verification. It's time to redefine how users experience your web app! 🔐🌟`,
    sourceCode: 'https://github.com/faruk-mansuri/auth-next-js',
    liveProject: 'https://auth-next-js.netlify.app',
  },
  {
    id: 'project-3',
    title: 'unsplash images',
    desc: 'search gallery',
    featuredProject: true,
    url: project3,
    info: 'Unsplash image application that enables users to search for images using the Unsplash API. The app also includes a dark mode option for theme management. For enhanced security, I employed environment variables for sensitive information. To optimize data retrieval and caching, I utilized React Query and its developer tools for efficient debugging and monitoring.',
    sourceCode: 'https://github.com/faruk-mansuri/vite-images',
    liveProject: 'https://unsplash-images-project-v2.netlify.app/',
  },
  {
    id: 'project-4',
    title: 'comfy sloth',
    desc: 'furniture e-commerce website',
    featuredProject: true,
    url: project4,
    info: 'E-commerce project focusing on an online furniture store. The project utilizes Auth0 for user authentication. I implemented an advanced filter system, allowing users to conveniently sort products by various criteria such as name, company, color, and price range. The user interface features a column and row layout, enhancing the browsing experience. Additionally, I integrated a sorting feature to help users find products more easily. For secure payment processing, used the Stripe API.',
    sourceCode: 'https://github.com/faruk-mansuri/react-comfy-sloth',
    liveProject: 'https://react-comfy-sloth-v1.netlify.app/',
  },
  {
    id: 'project-5',
    title: 'git-user',
    desc: 'git-app',
    url: project5,
    info: 'React.js project that enables visitors to search for GitHub users. The project displays various information about the users, including the number of repositories they have and a list of their followers. I integrated Auth0 for authentication and utilized the Axios library for fetching data. Additionally, I incorporated a chat feature to provide detailed information about the user.',
    sourceCode: 'https://github.com/faruk-mansuri/rect-github-users',
    liveProject: 'https://react-github-user-1.netlify.app/',
  },
  {
    id: 'project-6',
    title: 'jobify',
    desc: 'job tracking app',
    featuredProject: true,
    url: project6,
    info: 'A job tracking app as my first MERN stack project. This application empowers users to perform CRUD operations by registering, creating, editing, deleting, and searching for jobs. I employed Express Validators to validate user inputs. For heightened security, I implemented JSON Web Tokens (JWT). Furthermore, I optimized data retrieval and caching through React Query, its developer tools for effective debugging and monitoring. In this project, I also utilized the latest features of react-router-dom, such as actions and loaders',
    sourceCode: 'https://github.com/faruk-mansuri/jobify',
    liveProject: 'https://jobify-eold.onrender.com/',
  },
  {
    id: 'project-7',
    title: 'Hacker News app',
    desc: 'news application',
    url: project7,
    info: 'I built a Hacker News app where users have access to a search form and interact with the Hacker News API to fetch stories related to their input. Additionally, I implemented server-side pagination to enhance the user experience.',
    sourceCode: 'https://github.com/faruk-mansuri/react-hacker-news-project-4',
    liveProject: 'https://react-hacker-new-project-4.netlify.app/',
  },
  {
    id: 'project-8',
    title: 'Movie DB',
    desc: 'movie search application',
    url: project8,
    info: 'Movies DB, where user can search for movie and api returns movie then user can see those movies and if query does return anything the of course user will see that error',
    sourceCode: 'https://github.com/faruk-mansuri/movieDB',
    liveProject: 'https://react-moviedb-project.netlify.app/',
  },
  {
    id: 'project-9',
    title: 'ReactJS E-Commerce Application',
    desc: 'E-Commerce Furniture Store',
    url: project9,
    info: 'E-commerce furniture store where users can log in, register, add items to their cart, toggle themes, view order history, and more. Utilizing the latest tools such as React Query, React Router DOM 6.14, Redux Toolkit, and more. The site offers a fast and efficient product filtering system, along with authentication and authorization functionalities.',
    sourceCode: 'https://github.com/faruk-mansuri/ReactJS-E-Commerce',
    liveProject: 'https://reactjs-e-commerce-app.netlify.app/',
  },
];

import project1 from '../assets/project1.JPG';
import project2 from '../assets/project2.JPG';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

export const projects = [
  {
    id: 'artifact-tracker',
    name: 'Historical Artifacts Tracker',
    image: project3,
    stack: ['React', 'Express', 'MongoDB', 'TailwindCSS'],
    brief: 'A platform to browse, add and manage historical artifacts with user contributions and likes.',
    live: 'https://historical-artifacts-tra-1d742.web.app',
    repoClient: 'https://github.com/md-asgor-ali/a11-historical-artifacts-tracker-client',
    challenges: 'Handling authentication, role-based access (adder vs admin), and preserving likes on update/delete.',
    improvements: 'Add advanced search, image optimization, pagination, and a mobile-friendly admin UI.'
  },
  {
    id: 'recipe-book',
    name: 'Recipe Book App',
    image: project2,
    stack: ['React', 'Firebase Auth', 'Node.js', 'MongoDB'],
    brief: 'Users can add, like, and manage recipes. Auth-protected routes allow personal recipe management.',
    live: 'https://recipe-book-app-1a246.web.app',
    repoClient: 'https://github.com/md-asgor-ali/a10-recipe-book-app-client',
    challenges: 'Implementing likes that prevent liking own recipes and syncing likes across pages.',
    improvements: 'Add review moderation, recipe export (PDF), and community features.'
  },
  {
    id: 'micro-task',
    name: 'Micro TaskHive',
    image: project1,
    stack: ['React', 'Stripe', 'Express', 'MongoDB', 'TailwindCSS'],
    brief: 'A micro-task marketplace featuring coin payments, role-based boards (Buyer/Worker/Admin).',
    live: 'https://micro-task-earning-a12.web.app',
    repoClient: 'https://github.com/md-asgor-ali/a12-micro-task-earning-client',
    challenges: 'Stripe integration, coin accounting, and approval workflows for submissions.',
    improvements: 'Real-time notifications, better analytics, and improved UX for mobile.'
  },
  {
    id: 'law-services',
    name: 'Law.BD',
    image: project4,
    stack: ['React','React Router','React-Toastify','DaisyUi','TailwindCSS'],
    brief: 'We Provide Best Law Services.',
    live: 'https://regal-biscochitos-504708.netlify.app',
    repoClient: 'https://github.com/md-asgor-ali/b11a8-law-bd-services',
    challenges: 'React state management and implement react-toastify.',
    improvements: 'Implement the react router and authentication system with firebase.'
  },
  {
    id: 'auction-gallery',
    name: 'Auction Gallery',
    image: project5,
    stack: ['React','React-Toastify','DaisyUi','TailwindCSS'],
    brief: 'Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.',
    live: 'https://b11a7-simple-react-assignment-7.netlify.app',
    repoClient: 'https://github.com/md-asgor-ali/a7-auction-gallery',
    challenges: 'React router management and implement lode data using loader.',
    improvements: 'Implement backend and authentication system with firebase.'
  }
];

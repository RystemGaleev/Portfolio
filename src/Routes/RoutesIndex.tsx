import { About } from '../Page/AboutPage/About';
import { Home } from '../Page/HomePage/Home';
import { Projects } from '../Page/ProjectsPage/Projects';

export const privateRoutes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/about', element: <About /> },
];

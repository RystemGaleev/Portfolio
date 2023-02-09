import { SingleProject } from '../components/SIngleProject/SingleProject';
import { About } from '../Page/AboutPage/About';
import { Home } from '../Page/HomePage/Home';
import { Projects } from '../Page/ProjectsPage/Projects';

export const privateRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/portfolio/:id', element: <SingleProject /> },
];

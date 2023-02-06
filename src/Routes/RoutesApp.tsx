import { privateRoutes } from './RoutesIndex';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

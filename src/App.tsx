import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppRouter } from './Routes/RoutesApp';
import './assets/sass/App.scss';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;

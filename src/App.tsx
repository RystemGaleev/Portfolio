import { HashRouter } from 'react-router-dom';
import './assets/sass/App.scss';
import { ThemeProvider } from './context/ThemeContext';
import { AppRouter } from './Routes/RoutesApp';

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

import { BrowserRouter as Router } from 'react-router-dom';
import './assets/sass/App.scss';
import { ThemeProvider } from './context/ThemeContext';
import { AppRouter } from './Routes/RoutesApp';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;

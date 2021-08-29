
import './App.css';
import './buttons.css'

import Routes from './pages/_routes'
import AppHeader from './components/AppHeader/AppHeader';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <AppContent>
          <Routes />
        </AppContent>
      </BrowserRouter>
    </div>
  );
}

export default App

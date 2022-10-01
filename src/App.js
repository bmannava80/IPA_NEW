import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Container.css';
import Home from './pages/home';
import ClaimsAnalyst from './pages/claimsAnalyst';
import EnrollmentAnalyst from './pages/enrollmentAnalyst';
import ClaimsAdmin from './pages/claimsAdmin';
import PrintableView from './pages/PrintableView';
import { createContext } from 'react';
import { usersExtractData } from './utils/mockData';
import { AppProvider } from './context/appContext';

const AppContext = createContext(null);

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route exact path="/claimsAdmin" element={<ClaimsAdmin />} />
          <Route exact path="/claimsAnalyst" element={<ClaimsAnalyst />} />
          <Route exact path="/enrollmentAnalyst" element={<EnrollmentAnalyst />} />
          <Route exact path="/printable-view" element={<PrintableView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;

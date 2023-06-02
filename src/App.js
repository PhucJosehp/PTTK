import './css/App.css';
import Dashboard from './screens/Dashboard';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;

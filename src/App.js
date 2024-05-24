
import HomePage from './components/pages/homepage/HomePage';

import { Route, Routes } from 'react-router-dom';
function App() {
  
 

  return (
    
    <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
      
   
  );
}

export default App;

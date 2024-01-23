// App.tsx
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './components/Home';
import FilterScreen from './components/FilterScreen';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/'  element={<HomePage/>}/>
      <Route path='/Filter' element={<FilterScreen />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
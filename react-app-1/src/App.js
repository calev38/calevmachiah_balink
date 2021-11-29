
import Home from './Container/Home/Home'
import HomeHe from './Container/Home/HomeHe'
import {Routes, Route} from 'react-router-dom'
import Card1 from './Container/Card/Card1';
import Card1He from './Container/Card/Card1He';
import Sources from './Container/Sources/Sources';


function App() {




  return (
    <div className="App">
        <h1> Info Weather</h1>
        
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/he' element={<HomeHe/>}/>
        <Route path='/card1/:slug' element={<Card1/>}/>
        <Route path='he/card1he/:slug' element={<Card1He/>}/>
        <Route path='/sources' element={<Sources/>}/> 

        </Routes>
        
    </div>
  );
}

export default App;

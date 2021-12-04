
import Home from './Container/Home/Home'
import {Routes, Route} from 'react-router-dom'
import PageCard from './Container/Card/PageCard';
import Sources from './Container/Sources/Sources';
import { useTranslation } from "react-i18next";


function App() {


  const { t, i18n } = useTranslation();

  const select = {
    width: '100px',
    margin: '30px',
    textAlign : 'right'
};

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  

  return (
    <div className="App">

      <select style={select} onChange={changeLanguageHandler}>
        <option value="en" >{t('English')}</option>
        <option value="he" >{t('Hebrew')}</option>
      </select>



        <h1> {t('Info Weather')}</h1>
        
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/card1/:slug' element={<PageCard/>}/>
        <Route path='/sources' element={<Sources/>}/> 

        </Routes>
        <h3>&copy; Weather, Inc. 2021. {t('We love weather')}</h3>
        
    </div>
  );
}

export default App;

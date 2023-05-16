import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea';
import AboutDeveloper from './components/AboutDeveloper';
import { useState } from 'react';




let lightMode=true;
function App() {
  const [theme,setTheme]=useState('light')
  // creating function to manipulate theme
  let toggleModeForTheme=()=>{
    if(lightMode===true){
      setTheme('dark');
      lightMode=false;
      document.body.style.backgroundColor='#31353c'
      // console.log('activating dark theme ')
    }
    else{
      // console.log('activating light theme ')
      document.body.style.backgroundColor='white'
      setTheme('light')
      lightMode=true;
    }
  }
  return (
    <>
    <Navbar title='Darks Text Modifier Application' themeColor={theme} anyFunction={toggleModeForTheme} themeLabel={lightMode===true?'Light':'Dark'}/>
    <TextArea heading='Enter Your Text:' themeColor={theme}/>
   <AboutDeveloper developerName='Sameer Abbas Mughal'themeColor={theme}/>
    </>
   
  );
}

export default App;

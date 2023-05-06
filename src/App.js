import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea';
import AboutDeveloper from './components/AboutDeveloper';



function App() {
  return (
    <>
    <Navbar title='Darks Text Modifier Application'/>
    <TextArea heading='Enter Your Text:' />
   <AboutDeveloper developerName='Sameer Abbas Mughal'/>
    </>
   
  );
}

export default App;

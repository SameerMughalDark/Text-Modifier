import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea';
import Button from './components/Button';

function App() {
  return (
    <>
    <Navbar title='Darks Text Modifier Application'/>
    <TextArea heading='Enter Your Text:'/>
    <div className="container">
    <Button buttonName='To Uppercase'/>
    </div>
    </>
   
  );
}

export default App;

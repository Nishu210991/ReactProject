import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';

function App() {
  const[mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark');
  }
   else{
  setMode('light');
   }
}

  return (
    <>

   <Navbar title="Tokyo" about="About Us" mode={mode} toggleMode={toggleMode}/>
   <div className="container">
    <TextForm heading="Write Your Comment" />
    {/* <About/> */}
   </div>
   

  
   </>
  );
  
}

export default App;

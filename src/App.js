
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
          msg: message,
          type: type
        })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textulits-DarkMode"
  }
   else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        // document.title = "Textulits-LightMode"

       }
}

  return (
    <>
  <Router>

   <Navbar title="Tokyo"  mode={mode} toggleMode={toggleMode} />
   <Alert  alert={alert} />
   <div className="container">
   <Routes>
    <Route exact path='/about' element={<About mode={mode} />} />
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Word counter, Character counter, Remove extra spaces" mode={mode} />} />
    </Routes>
   </div>
   </Router>
  
   </>
  );
  

}

// element={<TextForm showAlert={showAlert} heading="Write Your Comment" mode={mode} />}

export default App;

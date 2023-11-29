import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>

   <Navbar title="Tokyo" about="About Us"/>
   <div className="container">
    <TextForm heading="Write Your Comment" />
    {/* <About/> */}
   </div>
   

  
   </>
  );
  
}

export default App;

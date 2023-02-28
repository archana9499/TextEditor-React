
import { useState } from 'react';
import './App.css';
//import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  //const [alert,setAlert]=useState(null);

{/*const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
  }*/}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#131a24';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      {/*<Alert alert={alert}/>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter your text" mode={mode}/>
      {/*<About/>*/}
      
    </>
  );
}

export default App;

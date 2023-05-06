
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import About from './Components/About';





function App() {
  const [mode,setmode]=useState({
    backgroundColor:"#080b55"
  })
  useEffect(() => {
    console.log('Mode:', mode);
  }, [mode]);


  const [text1,toggletext]=useState("Enable Dark Mode")
  const togglemode=()=>{
      if (mode.backgroundColor==="#080b55"){
        setmode({backgroundColor:"#bcbeee"})
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        toggletext("Enable Dark Mode")
        showalert("this is my light mode","Success")
        
      }
      else{
        setmode({backgroundColor:"#080b55"})
        document.body.style.backgroundColor="#101174"
        document.body.style.color="white"
        toggletext("Enable Light Mode")
        showalert("this is my Dark mode","Success")
      }
  }

  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
      setalert({
        type:type,
        msg:message
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  const colorgreen=()=>{
    document.body.style.backgroundColor="#00ff66"
  }
  const colorred=()=>{
    document.body.style.backgroundColor="#F87171"
  }
  const colorblue=()=>{
    document.body.style.backgroundColor="#60A5FA"
  }



  
  return (
    <>
    {/* <Router> */}
    <Navbar title="Lipsify" heading='Home'  mode={mode} togglemode={togglemode} toggletext={text1} colorgreen={colorgreen} colorblue={colorblue} colorred={colorred}/>
    <Alert alert={alert}/>
    {/* <Routes> */}
      {/* exact matches the exact path given otherwise if i have a route say /about/know it will still render the /about if exact is not used as route partially matches the path */}
        {/* <Route exact path="/" element={<Textform heading="Enter your text here" showalert={showalert}/>} />
        <Route exact path="/about" element={<About />} /> */}
        
      {/* </Routes> */}
   
    <Textform heading="Enter your text here"  showalert={showalert} />
    
   

    {/* </Router> */}
  
  </>
  
  );
}

export default App;

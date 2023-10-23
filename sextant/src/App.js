import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './comps/banner';
import Container from './comps/container';

var alreadyFetchedData = false; //will be lost in each render

function App() {
  const [IPv4, setIPv4] = useState("IPv4");
  const [IPv6, setIPv6] = useState("IPv6");


  useEffect(() => {
    if (alreadyFetchedData) {
      return;
    }
    fetch("https://api.whatismyip.com/ip.php?key=mytoken")
      .then(response => response.text())
      .then(data => {
        setIPv4(data);
        setIPv6(data);
        console.log(data); // TODO: it is being logged twice? why?
        // console.log("sfadsf");
      });
    alreadyFetchedData = true; // double render, maybe due to reacts dev mode

  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className="App">
      {Banner()}
      {Container(IPv4, IPv6)}
    </div>
  );
}

export default App;

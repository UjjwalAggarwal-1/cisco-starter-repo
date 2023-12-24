import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './comps/banner';
import Container from './comps/container';

let alreadyFetchedData = false; //for the double render, due to reacts dev mode //will be lost in each render, (even refresh)


function App() {
  const [IPv4, setIPv4] = useState("IPv4");
  const [IPv6, setIPv6] = useState("IPv6");
  const [ZipCode, setZipCode] = useState("ZipCode");
  const [Latitude, setLatitude] = useState("Latitude");
  const [Longitude, setLongitude] = useState("Longitude");
  const [City, setCity] = useState("City");
  const [Region, setRegion] = useState("Region");  

  useEffect(() => {
    if (alreadyFetchedData) {
      return;
    }
    fetch("https://api.whatismyip.com/ip.php?key=asfdasdf")
      .then(async response => await response.text())
      .then(data => {
        setIPv4(data);
        setIPv6(data);
        return data;
      }).then((data) => {
    fetch("http://api.ipstack.com/"+data+"?access_key=asdfasf")
      .then(async response => await response.json())
      .then(data => {
        setZipCode(data.zip);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setCity(data.city);
        setRegion(data.region_name);
      });
      });
    alreadyFetchedData = true; 

  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className="App">
      <Banner />
      <Container IPv4={IPv4} IPv6={IPv6} ZipCode={ZipCode} Latitude={Latitude} Longitude={Longitude} City={City} Region={Region}/>
    </div>
  );
}

export default App;

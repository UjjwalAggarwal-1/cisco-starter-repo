import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
let c = 0;

function WSCC() {
  const [latency, setLatency] = useState(-1);
  
  useEffect(() => {
    if (c > 0) return; // Only run once (on mount
    c = 1;
    const client = new WebSocket('ws://localhost:55455/');

    client.onmessage = function (e) {
      const serverTimestamp = parseInt(e.data, 10);
      const clientTimestamp = new Date().getTime();
      const currentLatency = clientTimestamp - serverTimestamp;
      setLatency(currentLatency);
    };

    return () => {
      client.close(); // Close the WebSocket connection when the component unmounts
    };
  }, []); 

  return <Card title="Latency" desc={latency} />;
}

export default WSCC;

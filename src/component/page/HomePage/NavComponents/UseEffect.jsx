import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  
  const clickedx = () => {
      setCountx(countx + 1);
    };
    const clickedy = () => {
        setCounty(county + 1);
    };
    
    
    ///Using Api
    let [facts, setFact] = useState("Fact");

    // for btn
    let [factBtn, setfactBtn] = useState(true);
    const getFact = () => {
        setfactBtn(!factBtn);
    };
    
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.fact);
        setFact(data.fact);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [factBtn]);

  return (
    <div>
      <h1>Fact</h1>
      <p>{facts}</p>
      <button onClick={getFact}>getCatFact</button>
      <br />
      <hr />
      <h3>Countx : {countx}</h3>
      <br />
      <button onClick={clickedx}>Click To count</button>
      <hr />
      <h3>Count Y: {county}</h3>
      <br />
      <button onClick={clickedy}>Click To count</button>
    </div>
  );
}

export default UseEffect;

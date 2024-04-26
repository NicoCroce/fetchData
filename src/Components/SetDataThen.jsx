import { useEffect, useState } from 'react';
import img from '../assets/SetDataThen.png';

const url = "http://localhost:2173";

const getData = async () => 
  ( await fetch(url) ).json();

export const SetDataThen = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    getData().then(res=> setData(res));
  }, []);

  return (
    <div>
      <h2>SetDataThen { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
useEffect(()=> {
  getData().then(res=> setData(res));
}, []);
        `}
      </pre>
    </div>
  )
};
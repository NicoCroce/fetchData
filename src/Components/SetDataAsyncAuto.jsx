import { useEffect, useState } from 'react';
import img from '../assets/SetDataThen.png';

const url = "http://localhost:2173";

const getData = async () => 
  ( await fetch(url) ).json();

export const SetDataAsyncAuto = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    (async() => {
      const res = await getData();
      setData(res);
    })()
  }, []);

  return (
    <div>
      <h2>SetDataAsyncAuto { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
useEffect(()=> {
  (async() => {
    const res = await getData();
    setData(res);
  })()
}, []);
        `}
      </pre>
    </div>
  )
};
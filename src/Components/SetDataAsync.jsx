import { useEffect, useState } from 'react';
import img from '../assets/SetDataThen.png';

const url = "http://localhost:2173";

const getData = async () => 
  ( await fetch(url) ).json();

export const SetDataAsync = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    const get = async () => {
      const res = await getData();
      setData(res);
    }
    get();
  }, []);

  return (
    <div>
      <h2>SetDataAsync { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
  useEffect(()=> {
    const get = async () => {
      const res = await getData();
      setData(res);
    }
    get();
  }, []);
        `}
      </pre>
    </div>
  )
};
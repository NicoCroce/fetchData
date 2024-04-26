import { useEffect, useState } from 'react';
import img from '../assets/GetDataAwait.png';

const url = "http://localhost:2173";

const getData = async () => 
  ( await fetch(url) ).json();

export const GetDataAwait = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    getData().then(res=> setData(res));
  }, []);

  return (
    <div>
      <h2>GetDataAwait { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
const getData = async () => 
  ( await fetch(url) ).json();
        `}
      </pre>
    </div>
  )
};
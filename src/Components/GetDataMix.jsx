import { useEffect, useState } from 'react';
import img from '../assets/GetDataMix.png';

const url = "http://localhost:2173";

const getData = () => fetch(url)
  .then(res=>res.json());

export const GetDataMix = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    getData().then(res=> setData(res));
  }, []);

  return (
    <div>
      <h2>GetDataMix { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
const getData = () => fetch(url)
  .then(res=>res.json());
        `}
      </pre>
    </div>
  )
};
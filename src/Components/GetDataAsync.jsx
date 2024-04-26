import { useEffect, useState } from 'react';
import img from '../assets/GetDataAsync.png';

const url = "http://localhost:2173";

const getData = async () => {
  const data = await fetch(url);
  return data.json();
}

export const GetDataAsync = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    getData().then(res=> setData(res));
  }, []);

  return (
    <div>
      <h2>GetDataAsync { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
const getData = async () => {
  const data = await fetch(url);
  return data.json();
}
        `}
      </pre>
    </div>
  )
};
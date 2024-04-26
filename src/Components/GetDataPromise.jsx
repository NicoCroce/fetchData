import { useEffect, useState } from 'react';
import img from '../assets/GetDataPromise.png';

const url = "http://localhost:2173";

const getData = () => new Promise((r) => fetch(url)
  .then(res=> r(res.json())));

export const GetDataPromise = () => {
  const [data, setData] = useState("");

  useEffect(()=> {
    getData().then(res=> setData(res));
  }, []);

  return (
    <div>
      <h2>GetDataPromise { data && <span>✅</span>}</h2>
      <img width="100%" src={img} />
      <pre>
        {`
const getData = () => new Promise((r) => fetch(url)
  .then(res=> r(res.json())));
        `}
      </pre>
    </div>
  )
};
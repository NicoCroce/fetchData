# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This is an example about differents ways to fetc information, and update state in React. 

Both examples havan't catch errors, only test success. 

`getData` execute fetch and transform the response. 
![image](https://github.com/NicoCroce/fetchData/assets/6332275/7470030d-4740-42a2-8884-bfb025d704ba)


`useEffect` execute `getData`and await the promise.

![image](https://github.com/NicoCroce/fetchData/assets/6332275/627b348b-50d8-41df-b474-7f0b532451eb)

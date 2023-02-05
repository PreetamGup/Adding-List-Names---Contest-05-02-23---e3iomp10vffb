import React , {useState,useEffect} from 'react'
// import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const[item, setitem]= useState('');
  const[list,setList]= useState([]);

  const handleList=()=>{
    const arr= [...list,item];
    setList(arr);
  }

  return (
    <div id="main">
       <input id="input" onChange={(e)=> setitem(e.target.value)} />
      <button id="button" onClick={handleList}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;

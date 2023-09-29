
import {useState,useEffect} from "react"
import { FaLessThan,FaGreaterThan } from 'react-icons/fa';

import Card from "./Card"

function App() {

  let [index,setIndex]  = useState(0)
  const [user,setUser]  = useState([
    {id:"",name:"",username:"",email:""}
  ])


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>setUser(res))
  },[])


  const {id,name,username,email}  = user[index]
  

  const lessThan = ()=>{
    if(index <=0){
      index = user.length;
      setIndex(--index)
    }else{
      setIndex(--index)
    }
  }


  const greaterThan  =()=>{
    if(index >= user.length -1){
      index = -1;
      setIndex(++index)
    }else{
      setIndex(++index)
    }
  }


  return (
    <div className="App">


     <Card>
     <div>ID:{id}</div>
     <div>NAME:{name}</div>
     <div>USERNAME:{username}</div>
     <div>EMAIL:{email}</div>
     </Card>
     <div>
      <button className="button" onClick={lessThan}>
        <FaLessThan/>

      </button>
      <button  className="button" onClick={greaterThan}>
      <FaGreaterThan/>

      </button>
     </div>

      
    </div>
  );
}

export default App;

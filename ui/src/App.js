import React ,{useEffect, useState}from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
 const [name, setName] = useState("")
 const [friends,setFriends] = useState([])


 useEffect(()=>{
    fetchFriends()
},[])

  function onInputChange(e){
    setName(e.target.value)

  }
 async function fetchFriends (){
   //fetching data 
    let data = await fetch('http://localhost:4000/friend',{method:'get'}).then(res=>res.json()).catch(err=>console.log(err))
    setFriends(data)
  }
  function onAdd(){
  
    let data ={
      name:name,
      createdAt:new Date()
    }
    //posting data
    fetch("http://localhost:4000/friend",
    {method:"post",
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)}
    )
      .then(res=>{
        setName('')
        fetchFriends()
      })
  }

 async function onDelete(id){
   //delete req
   await fetch(`http://localhost:4000/friend/${id}`,{method:'delete'}).then(res=>{
    fetchFriends()
   }).catch(err=>console.log(err))
  }
  return (
    <div className="App">
        <label>Enter Name:</label>
        <input type="text" onChange={onInputChange} value={name}/>
        <button onClick={onAdd}>Add</button>
        <br></br>
        <br></br>
        
        <ul>
          
          {
            friends.map(_f=>{
              return <React.Fragment key={_f.id} > <div style={{display:'flex',justifyContent:"space-around"}}><li>{_f.name}</li> <button onClick={()=>onDelete(_f.id)}>delete</button></div></React.Fragment> 
            })
          }
        </ul>
        
    </div>
  );
}

export default App;

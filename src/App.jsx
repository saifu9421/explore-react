
import './App.css'
import Counter from './Counter';
import Team from './Team';
// import Users from './Users';
import Friends from './Friends';

function App() {

  function handelClick(){
      alert("Button click");
  }
    const handelClick2 = ()=>{
       alert("Button  2 click")
    };

     const  addToFive = (num)=>{
      alert(num + 5);
     };

  return (
    <>

      <h3> React Core Concepts 2</h3>

      <Friends></Friends>
      {/* <Users></Users> */}
    
      <Team></Team>

        <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
   <button onClick={handelClick2}>Click2</button>
   <button onClick={()=>{
      alert("Third Click")
   }}>
      Third 
   </button>

   {/* vejailla  */}
   
   <button onClick={()=>{
     addToFive(3)
   }}>
    Four
   </button>
    </>
  )
}

export default App

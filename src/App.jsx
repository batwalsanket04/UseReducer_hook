 import React, { useReducer, useState } from 'react'
 
 const App = () => {
  // state hook
  //const [state,Setstate]=useState(state)

  //2.defines reducer

  const reducer=(state,action)=>
  {  
    // alert(state.count);//intial state
    // alert(action.type);//action type

  switch(action.type)
  {
   case 'INC':return {count:state.count + 1}

   case 'DEC':return {count:state.count - 1}

   case 'RESET':return{count:state.count=0}

   default:return state;
   
  }
}
   
//  1.step
  const[state,dispach]=useReducer(reducer,{count:0})

  

   return (
     <div style={{  
  
        justifyContent: "center",
        alignContent: "center",
        height: "70vh", // full viewport height
        width: "0vw", // full viewport width,
        textAlign: "center",
          padding: "20px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

     }}>

       <h2>Use Reducer Hook</h2>
       <hr />
       
       <h1>Initial Count: <mark>{state.count}</mark></h1>
       <button onClick={()=>dispach({type:'INC'})} className='me-2'>Update Count</button>
       <button onClick={()=>dispach({type:'DEC'})} >Reduce Count </button>
       <button onClick={()=>dispach({type:'RESET'})} className='ms-2'>Reset</button>
     </div>


   )
 }
 
 export default App
  
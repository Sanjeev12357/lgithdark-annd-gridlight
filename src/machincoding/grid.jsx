



//code for grid lights

import { useState } from "react"
import "./index.css"
function Cell({filled,onClick,isDisabled}){
  return (<button
  
  type='button'
  disabled={isDisabled}
  onClick={onClick}
  className={filled?'cell  cell-activated':"cell  "}
  ></button>)
}

const App = () => {
  const [order,setOrder]=useState([]);
  const [isDeactivating,setIsDeactivating]=useState(false);
  const config=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const deactivateCells=()=>{
    setIsDeactivating(true);
    const timer=setInterval(()=>{
      setOrder((origOrder)=>{
        const newOrder=origOrder.slice();
        newOrder.pop();

        if(newOrder.length === 0){
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder
      })
    },300)
  }
  const activateCells=(index)=>{
    const newOrder=[...order,index];
     setOrder(newOrder);
     console.log(newOrder);

     //deactivate

     if(newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells()
     }
  }
  return (
    <div className=" flex  justify-center items-center gap-[16px]  ">
      <div className="flex flex-wrap max-w-[400px]  w-100% p-[20px] gap-[20px]  border-2 border-black">
        {config.flat(1).map((value, i) => {
          
      
         return  value ?  (<Cell key={i} filled={order.includes(i)} onClick={() => activateCells(i)} isDisabled={order.includes(i) } />) : <span className="w-[100px] h-[100px]"></span>
          
        })}
      </div>
    </div>
  );
}

export default App
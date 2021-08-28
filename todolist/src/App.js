import React,{useState} from 'react';
import Mylist from './Mylist';


const App = () => {
  const [inputList,setinputList]=useState('');
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setinputList(event.target.value);
  }
  const listOfItems=()=>{
   setItems((oldItems)=>{
     return [...oldItems,inputList];
   })
   setinputList("");
  }
  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList</h1>
        <br />
        <input type="text" placeholder="add a items" value={inputList}
        onChange={itemEvent}/>
       <button onClick={listOfItems}>+</button>
       <ol>
        {
          items.map((itemval,index)=>{
            return (<Mylist
            key={index}
            id={index}
            text={itemval}
            onSelects={deleteItem}
            />
          )
          })
        }
       </ol>
      </div>
    </div>
 
    </>
  )
}

export default App;

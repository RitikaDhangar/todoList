import React from 'react'

const Mylist = (props) => {
    return (
        <>
          <div className="todo_style">
              <i className="fa fa-times" aria-hidden="true"
              onClick={()=>{
                  props.onSelects(props.id);

              }}/>
              <li>{props.text}</li>
              </div>  
        </>
    )
}

export default Mylist

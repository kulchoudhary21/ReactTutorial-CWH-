import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
    console.log("ok",props);
  return (
    <div>
        {props.todos.map((item)=> 
        {
            console.log("hii",item);
            return( <TodoItem  props={item}/>);
            

        })}
    </div>
  )
}


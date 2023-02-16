import React from 'react'
import TodoItem from "./Todoitem.js";

export default function Todos(props) {
    return (
        <div className='container' >
            <h3 className="text-center my-3" >
                To Do'sList
            </h3>
            {props.todos.length === 0 ? "Nothing here" :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }





        </div>
    );
}

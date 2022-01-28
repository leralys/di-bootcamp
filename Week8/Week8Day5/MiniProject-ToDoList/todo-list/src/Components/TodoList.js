import React from 'react';
import '../App.css';

function TodoList(props) {
    return (
        <div className='App Todo-list'>
            {
                props.todos.map(obj => {
                    return <div
                        id={obj.id}
                        onClick={props.handleClick}
                        key={obj.id}>{obj.text}
                    </div>
                })
            }
        </div>
    )
}



export default TodoList;
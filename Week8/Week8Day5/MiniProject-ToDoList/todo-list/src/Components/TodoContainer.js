import '../App.css'
import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodoComponent from './AddTodoComponent'


class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'Learn React' },
                { id: 2, text: 'Wash the dishes' }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    handleClick(e) {
        let newArrTodos = this.state.todos.filter(obj => obj.id != e.target.id)
        this.setState({ todos: newArrTodos });
    }
    addTodo(todo) {
        this.setState(prevState => ({
            todos: [...prevState.todos, todo]
        }));
    }
    render() {
        return (
            <>
                {this.state.todos.length > 0
                    ? <TodoList handleClick={this.handleClick} {...this.state} />
                    : <div className='App'>You have no todo's left, yay!</div>
                }
                <AddTodoComponent addTodo={this.addTodo} {...this.state} />
            </>
        )
    }
}

export default TodoContainer;

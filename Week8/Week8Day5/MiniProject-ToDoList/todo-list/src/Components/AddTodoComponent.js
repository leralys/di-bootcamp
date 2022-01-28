import React, { Component } from 'react';

class AddTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        let nextId = this.props.todos.length + 1;
        if ((e.code === 'Enter' || e.key === 'Enter') && e.target.value !== '') {
            this.props.addTodo({ id: nextId, text: e.target.value });
            e.target.value = '';
        }
    }
    render() {
        return (
            <div className='App'>
                < br />
                <label htmlFor="addTodo">Add a new todo:</label>
                < br />
                <input onKeyPress={this.handleKeyPress}
                    type="text" name="addTodo" maxLength={30} />
            </div>
        )
    }
}

export default AddTodoComponent;
import React, { Component } from 'react';
import UserList from './UserList';
import SearchBox from './SearchBox';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchField: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await responce.json();
            this.setState({ users: data });
        } catch (err) {
            console.log(err)
        }
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { users, searchField } = this.state;
        const filteredUsers = users.filter(el => {
            return (el.name.toLowerCase().includes(searchField.toLowerCase()) ||
                el.username.toLowerCase().includes(searchField.toLowerCase()) ||
                el.email.toLowerCase().includes(searchField.toLowerCase()))
        })
        return (
            <>
                <h1>USERS</h1>
                {
                    !users.length
                        ? <h2>Loading</h2>
                        : <>
                            <SearchBox handleChange={this.handleChange} />
                            <UserList users={filteredUsers} />
                        </>

                }
            </>


        )
    }
}

export default Users;
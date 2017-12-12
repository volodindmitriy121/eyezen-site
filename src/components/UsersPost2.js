import React, {Component} from 'react';

let myApiUrl = "http://localhost:8000/users/";


class UsersPost2 extends Component {

    constructor() {
        super();
        this.state = {username: '', email: '', number: '', password: ''};
    }


    handleSubmit(e) {
        var self = this;
        e.preventDefault();

        fetch(`${myApiUrl}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Vary': 'Accept',
            },
            body: JSON.stringify({
                'username': this.state.username,
                'email': this.state.email,
                'password': this.state.password,
                'number': this.state.number,
            })
        })
    }

    handleChangeName(event) {
        this.setState({username: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    handleChangeNumber(event) {
        this.setState({number: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="username" value={this.state.username}
                       onChange={this.handleChangeName.bind(this)}/>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)}/>
                <input type="text" name="password" value={this.state.password}
                       onChange={this.handleChangePassword.bind(this)}/>
                <input type="text" name="number" value={this.state.number}
                       onChange={this.handleChangeNumber.bind(this)}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default UsersPost2;
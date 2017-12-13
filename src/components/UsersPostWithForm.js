import React, {Component} from 'react';

let myApiUrl = "http://localhost:8000/users/";


class UsersPostWithForm extends Component {

    constructor() {
        super();
        this.state = {username: '', email: '', number: '', password: '12qwaszx'};
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


            <div class="col-md-8 pr-md-5 pr-sm-0 mb-4">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div class="row">
                        <div class="col-md">
                            <div class="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control p-3 rounded-0" name="username"
                                       value={this.state.username} onChange={this.handleChangeName.bind(this)}
                                       id="name"/>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control p-3 rounded-0" name="email"
                                       value={this.state.email} onChange={this.handleChangeEmail.bind(this)}
                                       id="email"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="message">Number</label>
                        <input type="text" className="form-control p-3 rounded-0" name="number"
                               value={this.state.number} onChange={this.handleChangeNumber.bind(this)} id="number"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn pb_outline-dark pb_font-13 pb_letter-spacing-2 p-3 rounded-0"
                               value="Send Message"/>
                    </div>
                </form>
            </div>


        )
    }
}

export default UsersPostWithForm;
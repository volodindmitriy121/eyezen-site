import React, {Component} from 'react';

const urlForUsernumber = 'http://localhost:8000/users/1';

class Users extends Component{

    constructor(){
        super();
        this.state = {
            requestFailed: false
        }
    }

    componentDidMount(){
        fetch(urlForUsernumber)
            .then(response =>{
                if(!response.ok){
                    throw Error("Network response error")
                }
                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    userData:d
                })
            }, ()=>{
                this.setState({
                    requestFaild:true
                })
            })
    }

    render(){
        if(this.state.requestFailed) return <p>Failed ...</p>
        if(!this.state.userData) return <p>Loading ...</p>
        return(
            <div>
                <p>{this.state.userData.username}</p>
            </div>
        )
    }
}

export default Users;

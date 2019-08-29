import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { addUser } from './actions/postActions'

export class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: ''
        }
        this.add = this.add.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    add() {
        if(this.state.name !== '') {
            let post = {
                id: this.state.id,
                name: this.state.name
            }
            this.props.addUser(post)
        }
    }

    onChange(e) {
        this.setState({
            id: uuid(),
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                    <button onClick={this.add}>ADD</button>
                </label>
            </div>
        )
    }
}

export default connect(null, { addUser })(AddUser)

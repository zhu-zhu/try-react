import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, getUser } from './actions/postActions'

export class users extends Component {
    constructor(props) {
        super(props)
        this.getUser = this.getUser.bind(this)
    }

    componentWillMount() {
        this.props.fetchPost()
    }

    componentWillReceiveProps(nextProps) {
        this.props.posts.unshift(nextProps.newPost)
    }

    getUser() {
        this.props.getUser()
    }

    render() {
        const postUser = this.props.posts.map(post => (
            <p key={post.id}>{post.name}</p>
        ))
        return (
            <div>
                {postUser}
                <button onClick={this.getUser}>GET</button>
            </div>
        )
    }
}

const mapStateProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateProps, {fetchPost, getUser})(users)

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }

    deletePost = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        const postDetail = this.props.post !== undefined ? (
                    <div>
                        <h4 className="center text-red">
                        {this.props.post.title}
                        </h4>
                        <p>{this.props.post.body}</p>
                        <button className="btn" onClick={this.deletePost}>
                            Delete post
                        </button>
                    </div>

        ) : (
            <div className="center">
                The post is not exist            
            </div>
        );
        return (
            <div className="container">
                {postDetail}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
      }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        console.log(this.props)
        let postsData = this.props.posts;
        const postData = postsData.length ? (postsData.map(post => {
            return(
                <div className="card post" key={post.id}>
                
                    <div className="card-content">
                        <Link to={'/'+post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div> 
                </div>
            );
            
        })) : (
            <div className="center">
                No data yet
            </div>
        );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
                {postData}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts // Map the posts object of this component to the state.posts of the reducer
    }
}

export default connect(mapStateToProps)(Home);
import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        // setTimeout(()=>{
        //    this.props.history.push('/about');
        // }, 2000);
        // console.log(this.props);
        return (
            <div className="container">
                <h4 className="center">Contact</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
            </div>
        );
    }
}

export default Contact;
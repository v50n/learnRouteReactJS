import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="/" className="brand-logo">Poke Times</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavbarItem);
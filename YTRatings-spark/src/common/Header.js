import React, {Component} from 'react';

import {Link, withRouter} from 'react-router-dom';
import history from '../history.js';

import {Menu} from 'semantic-ui-react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: history.location.pathname
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {id}) {
        this.setState({activeItem: id})
    }

    render() {
        const {activeItem} = this.state

        history.listen((location) => {
            this.setState({activeItem: history.location.pathname})
        });

        return (<Menu pointing secondary stackable style={{
            backgroundColor: '#f2efdc'
        }} size='huge'>
            <Link to="/"><Menu.Item id='/' name='home' active={activeItem === '/'} onClick={this.handleItemClick}/></Link>
            <Link to="/signup"><Menu.Item id='/signup' name='Sign Up' active={activeItem === '/signup'} onClick={this.handleItemClick}/></Link>
        </Menu>)
    }
}

export default withRouter(Header);

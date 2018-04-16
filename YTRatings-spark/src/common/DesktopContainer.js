import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import history from '../history.js';

class DesktopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: history.location.pathname
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
    handleItemClick(e, {id}) {
        this.setState({activeItem: id})
    }

    render() {
        const { children } = this.props;
        const { fixed } = this.state;
        const {activeItem} = this.state

        history.listen((location) => {
            this.setState({activeItem: history.location.pathname})
        });

        return (
            <Responsive minWidth={768}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Link to={'/'}><Menu.Item active={activeItem === '/'}>Home</Menu.Item></Link>
                                <Link to={'/youtubers'}><Menu.Item active={activeItem === '/youtubers'}>YouTubers</Menu.Item></Link>
                                <Link to={'/categories'}><Menu.Item active={activeItem === '/categories'}>Categories</Menu.Item></Link>
                                <Link to={'/allreviews'}><Menu.Item active={activeItem === '/allreviews'}>All Reviews</Menu.Item></Link>
                                <Link to={'/about'}><Menu.Item active={activeItem === '/about'}>About</Menu.Item></Link>
                                <Menu.Menu position='right' >
                                <Link to={'/donate'}><Menu.Item active color='teal'>Donate</Menu.Item></Link>
                                </Menu.Menu>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer;

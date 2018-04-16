import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import history from '../history.js';

class MobileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: history.location.pathname
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
    handleItemClick(e, {id}) {
        this.setState({activeItem: id})
    }

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state
        const {activeItem} = this.state

        history.listen((location) => {
            this.setState({activeItem: history.location.pathname})
        });

        return (
            <Responsive maxWidth={767}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='push' inverted vertical visible={sidebarOpened}>
                        <Link to={'/'}><Menu.Item active={activeItem === '/'}>Home</Menu.Item></Link>
                        <Link to={'/youtubers'}><Menu.Item active={activeItem === '/youtubers'}>YouTubers</Menu.Item></Link>
                        <Link to={'/categories'}><Menu.Item active={activeItem === '/categories'}>Categories</Menu.Item></Link>
                        <Link to={'/allreviews'}><Menu.Item active={activeItem === '/allreviews'}>All Reviews</Menu.Item></Link>
                        <Link to={'/donate'}><Menu.Item active={activeItem === '/donate'}>Donate</Menu.Item></Link>
                        <Link to={'/about'}><Menu.Item active={activeItem === '/about'}>About</Menu.Item></Link>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
                        <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default MobileContainer;

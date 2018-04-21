import PropTypes from 'prop-types'
import React from 'react'
import {
    Button,
    Container,
    Header,
    Icon, Responsive, Visibility, Segment
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const HomepageHeading = ({mobile}) => (
    <Responsive>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' style={{minHeight: 500, padding: '1em 0em'}} vertical>
                <Container text>
                    <Header
                        as='h1'
                        content='YouTuber Reviews!'
                        inverted
                        style={{
                            fontSize: mobile ? '2em' : '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: mobile ? 0 : '1.5em',
                        }}
                    />
                    <Header
                        as='h2'
                        inverted
                        style={{
                            fontSize: mobile ? '1.5em' : '1.7em',
                            fontWeight: 'normal',
                            marginTop: mobile ? '0.5em' : '1.5em',
                        }}
                    >Find out what your favorite youtubers are saying about <b>Books</b>, <b>Movies</b>, <b>Games</b>,
                        and many more! </Header>
                    <Link to='/youtubers'>
                        <Button primary size='huge'>
                            Check them out!
                            <Icon name='right arrow'/>
                        </Button>
                    </Link>
                </Container>
            </Segment>
        </Visibility>
    </Responsive>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

export default HomepageHeading;

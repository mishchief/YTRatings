import React from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';

const Footer = () => (<Segment inverted vertical style={{
    paddingTop: '7em'
}}>
    <Container>
        <Header style={{
            color: 'white'
        }} as="h3" dividing textAlign="center" size="tiny">This website was created and curated by Mijail N Montero.
        </Header>
        <Header style={{
            color: 'white'
        }} as="h3" dividing textAlign="center" size="tiny">Copyright TraVip 2018 ©
        </Header>
    </Container>
</Segment>);

export default Footer;

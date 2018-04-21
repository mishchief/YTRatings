import React from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';
import { FooterStyle } from '../styles/Grid';

const Footer = () => (
    <FooterStyle>
        <Segment inverted vertical padded='very' color='black'>
            <Container>
                <Header as="h3" dividing textAlign="center" size="tiny">This website was created and curated by Mijail N
                    Montero.
                </Header>
                <Header as="h3" dividing textAlign="center" size="tiny">Copyright Sibba 2018 ©
                </Header>
            </Container>
        </Segment>
    </FooterStyle>);

export default Footer;

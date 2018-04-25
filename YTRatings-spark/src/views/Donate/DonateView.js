import React from 'react';
import {Divider, Container, Header, Button, Grid} from 'semantic-ui-react';

const DonateView = () => {
    return (
        <Container text style={{padding: '3em '}}>
            <Header content='LIKE THE PROJECT?'/>
            <Header.Subheader content='CONSIDER DONATING!'/>
            <Divider/>
            <p> I pay for all the costs of this project so anything really helps, it helps me keep updating this project
                and putting on the time to make it better!</p>
            <p> You can donate the following ways! </p>
            <Grid columns={2} centered >
                <Grid.Row>
                    <Grid.Column>
                        <Button content='PAYPAL' href='https://paypal.me/festiveox' color='blue' fluid/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button content='PATREON' href='https://www.patreon.com/festiveox' color='orange' fluid/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/*TODO: Add contact form*/}
        </Container>
    )
};

export default DonateView;

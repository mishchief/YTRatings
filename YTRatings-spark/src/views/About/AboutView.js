import React from 'react';
import {Divider, Container, Header} from 'semantic-ui-react';

const AboutView = () => {
    return (
        <Container text style={{padding: '3em '}}>
            <Header content='ABOUT THIS PROJECT'/>
            <Divider/>
            <p> I decided to create this project as I don't see any of the reviews by the YouTubers consolidated in one
                place.</p>
            <p> I don't know if it will have appeal but I honestly like to get my review info from them. </p>
            <p>On top of that is a good medium to showcase my programming abilities and show people to come here to see
                something I've done.</p>
            <p>I always say: "I don't care if it goes big as long as it is useful for one person". Hopefully it is.</p>
            {/*TODO: Add contact form*/}
        </Container>
    )
};

export default AboutView;

import React from 'react'
import {
    Grid,
    Header,
    Segment,
    Button,
    Image
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

import HomepageHeading from './HomepageHeading';

const HomeViewLayout = () => (
    <div>
        <HomepageHeading/>
        <Segment style={{
            display: 'flex',
            flexDirection: 'column', padding: '5em 5em', backgroundColor: '#EDEBF2', color: '#536A73'
        }} vertical>
            <Grid container stackable verticalAlign='middle' textAlign='center'>
                <Grid.Row>
                    <Grid.Column>
                        <Link to='/categories'>
                            <Header as='h3' style={{fontSize: '2em', color: '#536A73'}}>CATEGORIES</Header>
                            <p style={{fontSize: '1.33em', color: '#536A73'}}>
                                You can also sort them by category! Meme Review from PewDiePie? dunkview from Dunkey? We
                                got
                                them!
                            </p>
                        </Link>
                        <Link to='/allreviews'>
                            <Header as='h3' style={{paddingTop: '2em', fontSize: '2em', color: '#536A73'}}>BUT I WANT TO
                                SEE THEM
                                ALL!!!1!</Header>
                            <p style={{fontSize: '1.33em', color: '#536A73'}}>
                                Whoa there well if you click this you can see <b>ALL</b> the reviews we have in our
                                database!
                            </p>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{
            display: 'flex',
            flexDirection: 'column', padding: '5em 5em'
        }} vertical>
            <Grid container stackable verticalAlign='middle' textAlign='center' columns={2} >
                <Grid.Row >
                    <Grid.Column >
                        <Link to='/donate'>
                            <Header as='h3' style={{fontSize: '2em'}}>ARE YOU A GENEROUS OVERLORD?</Header>
                            <p style={{fontSize: '1.33em', color: '#EDEBF2'}}>
                                Do you appreciate the reviews and this domain not being down? Do you thing this is a
                                good service?
                                <br/> Consider donating to this good cause. Hosting can be expensive :/
                            </p>
                        </Link>
                    </Grid.Column>
                    <Grid.Column >
                        <Link to='/donate'>
                            <Button content='CLICK HERE TO DONATE' color='teal' size='massive'/>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid container stackable verticalAlign='middle' textAlign='center'>
            <Link to='/donate'>
                <Header as='h3' style={{paddingTop: '2em', fontSize: '2em'}}>HERE ARE A COUPLE OF THINGS I
                    WOULD DO WITH YOUR MONEY!</Header>
            </Link>
            </Grid>
            <Grid container stackable  textAlign='center' columns={3}>
                <Grid.Row >
                    <Grid.Column>
                        <Link to='/donate'>
                        <Image inline src='https://i.imgur.com/KASVOQT.jpg' size='medium'/>
                        <Header content='BUY SERVER TIME OR EVEN UPGRADE, FOR YOU :)'/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to='/donate'>
                        <Image inline src='https://i.imgur.com/PSVRUiv.jpg' size='medium' />
                        <Header content='ENJOY A DELICIOUS ALCOHOLIC BEVERAGE, THANKS TO YOU! PICTURED HERE, MY FAVORITE BEER .'/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to='/donate'>
                        <Image inline src='https://i.imgur.com/SAdzKAL.jpg' size='medium'/>
                        <Header content='SEND MONEY TO VENEZUELA TO HELP THE OPPOSITION TOPPLE THE CORRUPT GOVERNMENT.'/>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>
)

export default HomeViewLayout;

import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
// Semantic styles
import {Dimmer, Loader} from 'semantic-ui-react'
// Components
import YouTuberDetail from './components/YouTuberDetail';

const query = gql`
query ($name: String!){
    youtuber (name: $name){
        name
        img
        uri
        categories{
            _id
            name
        }
        reviews {
            title
        }
    }   
}`;

class DetailView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) {
            return (
                <Dimmer active>
                    <Loader/>
                </Dimmer>
            )
        }
        return (<YouTuberDetail youtuber={data.youtuber}/>)
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            name: props.match.params.name,
        },
    }),
};

DetailView = graphql(query, queryOptions)(DetailView);
export default DetailView;

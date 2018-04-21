import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

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
            return <div>Loading...</div>
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

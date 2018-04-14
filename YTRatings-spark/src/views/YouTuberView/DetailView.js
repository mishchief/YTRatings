import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ReviewsList from './ReviewsList';

const query = gql`
  query Anything($name: String!){
  youtuber (name: $name){
    name
    categories{
      category
    }
}
}`;

class DetailView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) {
            return <div>Loading...</div>
        }
        console.log(data.youtuber[0]);
        return ( <ReviewsList youtuber={data.youtuber[0]}/>)
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

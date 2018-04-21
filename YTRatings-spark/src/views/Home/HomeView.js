import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import HomeViewLayout from './components/HomeViewLayout';
import HomeGrid from './components/HomeGrid';

function HomeView({data: {allYouTubers}}) {

    return (
        <div>
            <HomeViewLayout/>
        </div>
    );
}

export default graphql(gql`
    query {
  allYouTubers{
    _id
    name
    img
    uri
  }
}
`)(HomeView);

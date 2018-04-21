import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import YouTubersGrid from './components/YouTubersGrid';

function AllYouTubers({data: {allYouTubers}}) {

    return (
        <div>
            {allYouTubers && <YouTubersGrid youtubers={allYouTubers}/>}
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
`)(AllYouTubers);

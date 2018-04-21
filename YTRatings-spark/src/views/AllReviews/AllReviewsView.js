import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import AllReviewsList from './components/AllReviewsList';
import _ from "lodash";

class AllReviewsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            column: null,
            tableData: [],
            direction: null,
        };
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
    }

    loadTableData() {
        this.setState({tableData: this.props.data.allReviews});
    }

    handleSort = clickedColumn => () => {
        const {column, tableData, direction} = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                tableData: _.sortBy(tableData, [clickedColumn]),
                direction: 'ascending',
            });

            return
        }

        this.setState({
            tableData: tableData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    render() {
        let {data} = this.props;
        if (data.loading) {
            return <div>Loading...</div>
        } else if (this.state.tableData.length === 0) {
            this.loadTableData();
        }
        return (<AllReviewsList data={this.state.tableData} goBack={this.goBack}
                                sort={this.handleSort} column={this.state.column} direction={this.state.direction}/>)
    }
}

export default graphql(gql`
query {
	allReviews{
	_id
    title
    rating
    category
    youtuberName
    salesURI
  }
}`)(AllReviewsView);

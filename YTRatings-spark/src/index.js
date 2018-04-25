import React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import App from './App';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
// apollo imports
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory';
// CSS imports
import 'semantic-ui-react';
import 'semantic-ui-css';
import './styles/GlobalStyle.js';
// Router and Views
import NotFound from './common/NotFound'
import HomeView from './views/Home/HomeView';
import CreateView from './views/CreateView';
import DetailView from './views/YouTuberProfile/DetailView';
import ReviewsView from './views/Reviews/ReviewsView';
import AllYouTubers from './views/AllYouTubers/AllYouTubers';
import CategoriesView from './views/Categories/CategoriesView';
import AllReviewsView from './views/AllReviews/AllReviewsView';
import AboutView from './views/About/AboutView';
import DonateView from './views/Donate/DonateView';


const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
    // to a different host
    link: new HttpLink({uri: 'https://api.youtuberreviews.com/graphql'}),
    cache: new InMemoryCache(),
    opts: {
        credentials: 'same-origin',
        mode: 'no-cors',
    }
});

// Necessary for react router move to the top of the page when loading a new view
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

render((
    <ApolloProvider client={client}>
        <Router history={history}>
            <App>
                <Route component={ScrollToTop}/>
                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route exact path="/messages/create/" component={CreateView}/>
                    <Route exact path="/youtuber/:name/" component={DetailView}/>
                    <Route exact path="/youtuber/:name/:category/" component={ReviewsView}/>
                    <Route exact path="/youtubers/" component={AllYouTubers}/>
                    <Route exact path="/categories/" component={CategoriesView}/>
                    <Route exact path="/allreviews/" component={AllReviewsView}/>
                    <Route exact path="/about/" component={AboutView}/>
                    <Route exact path="/donate/" component={DonateView}/>
                    <Route render={NotFound}/>
                </Switch>
            </App>
        </Router>
    </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();

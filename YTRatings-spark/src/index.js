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
import HomeView from './views/HomeView/HomeView';
import CreateView from './views/CreateView';
import DetailView from './views/YouTuberView/DetailView';
import ReviewView from './views/ReviewView/ReviewView';


const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
    // to a different host
    link: new HttpLink({uri: 'http://localhost:4000/graphql'}),
    cache: new InMemoryCache(),
    opts: {
        credentials: 'same-origin',
        mode: 'no-cors',
    }
});

render((
    <ApolloProvider client={client}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route exact path="/messages/create/" component={CreateView}/>
                    <Route exact path="/:name/" component={DetailView}/>
                    <Route exact path="/:name/:category" component={ReviewView}/>
                    <Route render={NotFound}/>
                </Switch>
            </App>
        </Router>
    </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();

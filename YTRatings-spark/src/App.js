import React, {
    Component
} from 'react';
import {
    withRouter
} from 'react-router-dom';

import ResponsiveContainer from './common/Header/ResponsiveContainer';
import Footer from './common/Footer';

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <ResponsiveContainer >
                <div style={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column'
                }}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                </ResponsiveContainer>
                <Footer />
            </div>
        )
    }
}

export default withRouter(App);

import React from 'react';
import {render} from 'react-dom';
import Frame from './Frame.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class App extends React.Component {
 
  render () {
    injectTapEventPlugin();

    return (
  
      <div>
        <Router history={browserHistory} >
          <Route path='/' component={Frame} />
        </Router>
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
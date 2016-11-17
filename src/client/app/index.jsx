import React from 'react';
import {render} from 'react-dom';
import Frame from './Frame.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
 
  render () {
    injectTapEventPlugin();

    return (
  
      <div>
      <MuiThemeProvider>
        <Router history={browserHistory} >
          <Route path='/' component={Frame} />
        </Router>
      </MuiThemeProvider>  
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
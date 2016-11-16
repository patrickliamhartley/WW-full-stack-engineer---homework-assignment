import React from 'react';
import {render} from 'react-dom';
import Frame from './Frame.jsx';

class App extends React.Component {
  render () {
    return ( 
      <div>
        <Frame/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
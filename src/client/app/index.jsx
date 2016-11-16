import React from 'react';
import {render} from 'react-dom';
import Frame from './Frame.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test'
    };
    this.checkUser = this.checkUser.bind(this);
  }

  componentWillMount(){
    this.checkUser();
  }
  checkUser () {

    var context = this;
    fetch('https://oath.reddit.com/api/v1/me', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'NPT1WQ7lcrJUVQR35bbkUHK4iUk'
      }

    })
    .then(function(res) {
      console.log(res);
      res.json().then(function(parsedRes){
        if (parsedRes) {
          console.log(parsedRes);
          context.setState({
            user: parsedRes
          });
        }
      });
    });
  }
  render () {
    injectTapEventPlugin(); 
    var context = this;


    return (
  
      <div>
        <Frame/>
        <a href="https://www.reddit.com/api/v1/authorize?client_id=YF8_1ba7h8u8Mw&response_type=code&state=secret&redirect_uri=http://localhost:3000&duration=temporary&scope=identity"><p>Link your reddit account</p></a>
        <p>{context.state.user}</p>
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
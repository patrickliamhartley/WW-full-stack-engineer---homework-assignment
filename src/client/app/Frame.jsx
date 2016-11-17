import React from 'react';
import FrontPage from './FrontPage.jsx';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test',
      code: null,
      token: null
    };
    this.checkUser = this.checkUser.bind(this);
    this.setCode = this.setCode.bind(this);
    this.setToken = this.setToken.bind(this);
  }



  setCode() {
   
    if (this.props.location.query.code) {
      var context=this;

      this.setState({
        code: this.props.location.query.code
      }, function(){
        context.setToken();
      });
    }
  }

  setToken() {
    var context = this;
    console.log(this.state);
    fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Authorization': 'HTTPBasicAuth(client_id, client_secret)'
      },
      body: 'grant_type=authorization_code&code='+ context.state.code+'&redirect_uri=http://localhost:3000',
    })
    .then(function(res){ 
      res.text().then(function(parsedRes){
        context.setState({
          token: parsedRes
        }, function(){
          console.log(context.state);
        });
      });
    });

    
  }
  componentWillMount() {
    this.setCode();
  }

  checkUser () {

    var context = this;
    fetch('https://oath.reddit.com/api/v1/me', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
   
        'Authorization': 'RGh4VLowAIYRYA41yD6Iry0nZt0'
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




  render() {
    var context = this;
    return (
      <div>
        <div className="banner-image">
        </div>
        
        <FrontPage/>
        <a href="https://www.reddit.com/api/v1/authorize?client_id=YF8_1ba7h8u8Mw&response_type=code&state=secret&redirect_uri=http://localhost:3000&duration=temporary&scope=identity"><p>Link your reddit account</p></a>
       
       
      </div>
    );
  }

}

export default Frame;

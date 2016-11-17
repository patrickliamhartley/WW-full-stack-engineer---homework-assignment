import React from 'react';

class Oauth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test'
    };
    this.checkUser = this.checkUser.bind(this);
  }

  componentWillMount(){
    this.checkUser();
    console.log(this.props.location);
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
        <p>Welcome to reddit</p>
        <a href="https://www.reddit.com/api/v1/authorize?client_id=YF8_1ba7h8u8Mw&response_type=code&state=secret&redirect_uri=http://localhost:3000&duration=temporary&scope=identity"><p>Link your reddit account</p></a>
        <p>{context.state.user}</p>
       
      </div>
    );
  }

}

export default Oauth;

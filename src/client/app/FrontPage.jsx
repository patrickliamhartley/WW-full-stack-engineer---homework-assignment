import React from 'react';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPageData: null
    };
    this.loadFrontPage = this.loadFrontPage.bind(this);
  }

  componentWillMount(){
    this.loadFrontPage();
 
  }
  loadFrontPage () {

    var context = this;
    fetch('https://www.reddit.com/top.json?limit=20', {
      method: 'GET'
    })
    .then(function(res) {
      console.log(res);
      res.json().then(function(parsedRes){
        
        
        context.setState({
          frontPageData: parsedRes
        }, function(){
          console.log(context.state.frontPageData);
        });
        
      });
    });
  }


  render() {
    var context = this;
    return (
      <div>
        <p>frontpage</p>
       
      </div>
    );
  }

}

export default FrontPage;

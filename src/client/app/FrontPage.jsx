import React from 'react';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPageData: [{data:{title: "no data"}}]
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
          frontPageData: parsedRes.data.children
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

        {context.state.frontPageData.map(function(item){
          return(
            <div>
              <a href={item.data.url}>
              <p>{item.data.title}</p>
              <img src={item.data.thumbnail || '../assets/redditIcon.png'}/>
              <p>{item.data.score}</p>
              </a>            
            </div>
          );
        })}
        
       
      </div>
    );
  }

}

export default FrontPage;

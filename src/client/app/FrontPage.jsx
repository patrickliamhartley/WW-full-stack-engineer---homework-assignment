import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPageData: [{data: {title: "Fetching Data..."}}]
    };
    this.loadFrontPage = this.loadFrontPage.bind(this);
    this.loadTop = this.loadTop.bind(this);
    this.loadNew = this.loadNew.bind(this);
    this.loadNext = this.loadNext.bind(this);
  }

  componentWillMount(){
    this.loadFrontPage('https://www.reddit.com/hot.json?limit=25');
  }

  loadFrontPage (url) {

    var context = this;
    fetch(url, {
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

  loadTop(){
    this.loadFrontPage('https://www.reddit.com/top.json?limit=25');
  }

  loadNew(){
    this.loadFrontPage('https://www.reddit.com/new.json?limit=25');
  }

  loadNext(){
    this.loadFrontPage('https://www.reddit.com/hot.json?count=25&after=' + this.state.frontPageData[24].data.name);
  }

  render() {
    var context = this;
    return (
      <div className="frontpage">
        <div className="button-bar">
          <RaisedButton
            style={{width: '24%'}}
            onTouchTap={()=>context.loadFrontPage('https://www.reddit.com/hot.json?limit=25')}
          >HOT</RaisedButton>

          <RaisedButton
            style={{width: '24%'}}
            onTouchTap={context.loadTop}
          >TOP</RaisedButton>

          <RaisedButton
            style={{width: '24%'}}
            onTouchTap={context.loadNew}
          >NEW</RaisedButton>

          <RaisedButton
            style={{width: '24%'}}
            onTouchTap={context.loadNext}
          >NEXT</RaisedButton>
        </div>
        

        {context.state.frontPageData.map(function(item){
          return(
            <a className="enclosing-link" href={item.data.url}>
            <Card style={{width: "98%", height: 100, padding: 10, margin: "10px 10px 10px 10px"}}>
            <div>
            <CardHeader
              titleStyle={{fontSize:15}}
              title={item.data.title}
              subtitle={"Score: "+item.data.score}
              avatar={item.data.thumbnail}
            />
              
              
              
              
           
                        
            </div>
            </Card> 
            </a> 
          );
        })}
        
       
      </div>
    );
  }

}

export default FrontPage;

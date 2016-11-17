import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
      <div className="frontpage">
        

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

import React, { Component } from 'react';
//import mui from 'material-ui';
//import AppBar from 'material-ui/lib/app-bar';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import { Row,Col }  from 'react-bootstrap';
import Questions from './Questions';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './theme/theme';


class App extends Component {
    
    constructor(){
        super();
        
        
    }
    
  static childContextTypes= {
    muiTheme: React.PropTypes.object,
  } 
  
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme),
    };
  }
  
   handleClick(){
       
       var elem =document.getElementsByClassName("question-section");
       console.log(elem)
       elem[0].scrollIntoView(true);
      
   }


    render() {
        return ( <div>
                   <Toolbar style={{background: 'rgba(0,0,0,0.3)',position: 'fixed',top:0,zIndex:1000}} >
                    <ToolbarTitle text="Personality Test" />
                   </Toolbar>
                   
                   <Row  className="container" style={{textAlign:'center',minHeight:550}}>
                       <Col className="" lg={12}  >
                        <h1 style={{paddingTop:'80px'}}>Some random Heading here</h1>
                        <h2 >Some random subheadeing </h2>
                         <RaisedButton onClick={this.handleClick.bind(this)} label="Secondary" secondary={true} style={{margin:'12px'}} />
                       </Col>
                    </Row>
                    <Row className="question-section" style={{minHeight:470}}>
                        
                           <Questions />
                        
                    </Row>
                    
                </div>
                
            )
    }
}

export default App
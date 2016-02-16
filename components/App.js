import React, { Component } from 'react';
//import mui from 'material-ui';
//import AppBar from 'material-ui/lib/app-bar';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';



class App extends Component {
    
    constructor(){
        super();
        
        
    }
    
   handleClick(){
       alert("hello");
   }


    render() {
        return ( <div>
                   <Toolbar style={{background: 'rgba(0,0,0,0.3)',}} >
                    <ToolbarTitle text="Personality Test" />
                   </Toolbar>
                   <div className="container" style={{'text-align':'center'}}>
                       <div className="col-lg-12" >
                        <h1 style={{'padding-top':'80px'}}>Some random Heading here</h1>
                        <h2 >Some random  Sub heading Heading here</h2>
                         <RaisedButton onClick={this.handleClick.bind(this)} label="Secondary" secondary={true} style={{margin:'12px'}} />
                       </div>
                    </div>   
                </div>
                
            )
    }
}
export default App
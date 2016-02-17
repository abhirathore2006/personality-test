import React from 'react'
import {Tabs,Tab,RaisedButton,LinearProgress,TextField, RadioButton, RadioButtonGroup } from 'material-ui'
import {Col, Row } from 'react-bootstrap'
var injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

const styles = {
  radioButton: {
      
      color:'#fff !important',
 
  }
  
};

class Questions extends React.Component {
    
    constructor(props){
        super(props);
        
        
        this.state = {
      value : '0',
       };
    }
  handleClick(e){
     //alert();
     var cur = parseInt(this.state.value) + 1;
      this.setState({value : cur.toString()});
  }
  
    render(){
        
        return (
            <Col lg={12} style={{minHeight:400}}>
             <Tabs value={this.state.value}>
                <Tab label="Question1" value='0'> 
                     <h3>Are you outwardly or inwardly ? focused if you</h3>
                      <RadioButtonGroup name="question1" >
                            <RadioButton 
                                value="E"
                                label="Extraversion"
                                style={styles.radioButton}
                                />
                            <RadioButton 
                                value="I"
                                label="Introversion"
                                style={styles.radioButton}
                                />    
                            
                    </RadioButtonGroup>
                    <RaisedButton label="Next" primary={true}  onClick={this.handleClick.bind(this)} />
                </Tab>
                <Tab label="Question2" value='1'>
                    Some Input will go here more
                   <RadioButtonGroup name="question2" >
                            <RadioButton 
                                value="I"
                                label="Introversion"
                                style={styles.radioButton}
                                /> 
                                 <RadioButton 
                                value="E"
                                label="Extraversion"
                                style={styles.radioButton}
                                />
                    </RadioButtonGroup>            
                    <RaisedButton label="Next" primary={true} />
                </Tab>
             </Tabs>
            </Col>
            )
    }
}
export default Questions 
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
  handleClick(val,e){
    //  alert(val);
     //alert();
     //console.log(e);
     //console.log(val);
     var cur = val;
     //parseInt(this.state.value) + 1;
      this.setState({value : cur.toString()});
  }
  
  question1Change(name,e,value){
      //console.log(e);
      //console.log(value);
     // console.log(name);
      let a =[name,value]
      
      this.props.actions.saveAnswer(a)
    //  console.log(value)
  }
  
    render(){
        
        return (
            <Col lg={12} style={{minHeight:400}}>
              <Row>
             <Tabs value={this.state.value} >
                <Tab label="Step1" value='0'> 
                    <Col lg={6} lgOffset={3}>
                     <h3>Are you outwardly or inwardly ? focused if you</h3>
                      <RadioButtonGroup name="question1"  onChange={this.question1Change.bind(this,0)}>
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
                    <RaisedButton label="Next" primary={true}  onClick={this.handleClick.bind(this,'1')} />
                    </Col>
                </Tab>
                <Tab label="Step2" value='1'>
                    <Col xs={6} xsOffset={3} >
                    <h3>Some Input will go here more</h3>
                   <RadioButtonGroup name="question2"  onChange={this.question1Change.bind(this,1)} >
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
                    <RaisedButton label="Next" primary={true} onClick={this.handleClick.bind(this,2)} />
                    </Col>
                </Tab>
                <Tab label="Step3" value='2'>
                  <Col xs={6} xsOffset={3} >
                    Some Input will go here more
                   <RadioButtonGroup name="question3"  onChange={this.question1Change.bind(this,2)}  >
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
                    <RaisedButton label="Next" primary={true} onClick={this.handleClick.bind(this,3)} />
                    </Col>
                </Tab>
                <Tab label="Step4" value='3'>
                <Col xs={6} xsOffset={3} >
                    <h3>Some Input will go here more</h3>
                   <RadioButtonGroup name="question4"  onChange={this.question1Change.bind(this,3)} >
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
                    <RaisedButton label="Next" primary={true} onClick={this.handleClick.bind(this,4)} />
                    </Col>
                </Tab>
                <Tab label="Step5" value='4'>
                 <Col xs={6} xsOffset={3} >
                    <h3>Some Input will go here more</h3>
                         
                    <RaisedButton label="Next" primary={true} onClick={this.handleClick.bind(this,0)} />
                    </Col>
                </Tab>
             </Tabs>
             </Row>
            </Col>
            )
    }
}
export default Questions 
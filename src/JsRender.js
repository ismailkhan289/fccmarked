import React from "react";

const styles={
    width:2000,
    padding:10,
    margin:20
}

class JsRender extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            randomIndex:'',
            display:true,
            inputAge:'',
            userAge:''
        }
        this.ask=this.ask.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.toggleButton=this.toggleButton.bind(this);
        this.submit=this.submit.bind(this);
        this.handleAge=this.handleAge.bind(this);
    }
    ask(){
        if(this.state.userInput){
            this.setState(state=>({
                randomIndex:Math.floor(Math.random()*20),
                userInput:''
            }))
        }
    }
    handleChange(event){
        this.setState(state=>({
            userInput:event.target.value
        }))
    }
    toggleButton(){
        this.setState(state=>({
            display:!state.display
        }))
    }
    submit(){
        if(this.state.inputAge){
            this.setState(state=>({
                userAge:state.inputAge,
                
            }))
        }
    }
    handleAge(event){
        this.setState(state=>({
            inputAge:event.target.value,
            userAge:''
        }))
    }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const yourAnswer=possibleAnswers[this.state.randomIndex];
    const buttonOne=<button onClick={this.submit}>Submit</button>;
    const buttonTwo=<button>You are not allowed</button>;
    const buttonThree=<button>You are great to go</button>;
    return(
        <div style={styles}>
            <input type="text"
            value={this.state.value}
            onChange={this.handleChange}
            />
            <button onClick={this.ask}>Ask the Magic Eight Ball!</button>

            <h4>Your Answer is Here</h4>
            <h1>{yourAnswer}</h1>

            <button onClick={this.toggleButton}>Toggle Button</button>
            {(this.state.display)&& <h1>{yourAnswer}</h1>}

            <h1>Enter your Age</h1> 
            <input  type='number' onChange={this.handleAge} value={this.state.inputAge}/>
            {(this.state.userAge)?(this.state.userAge>=18)?buttonThree:buttonTwo:buttonOne}
           
        </div>
    )
}
}

export default JsRender;
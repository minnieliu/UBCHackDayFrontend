import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, Checkbox } from 'material-ui';

const Panel = ({question, children}) => (
  <div style={{width: '100%', height: 'min-content', minHeight: 300, border: '1px solid green'}}>
    <h2 style={{color: '#fff', width: '100%'}}>{question}</h2>
    {children}
  </div>
);

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Checkbox
        checked={this.props.checked}
        onCheck={(item, isChecked) => this.props.onCheck(this.props.item, isChecked)}
        label={this.props.item.text}
      />
    )
  }
}

class MultipleChoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: {id: -1, text: ""}
    };
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(item, isChecked) {
    console.log(item, isChecked);
    if (isChecked) {
      this.setState({ selection: item });
      this.props.registerSelection(item);
    }
  }
  render() {
    return (
      <div style={{width: '40%'}} onClick={() => this.props.onSelectQuestion(this.props.id)}>
        {this.props.answers.map((item) => (
          <Answer
            key={item.text}
            onCheck={this.onCheck}
            checked={this.state.selection.id === item.id}
            item={item}
          />
        ))}
      </div>
    )
  }
}


const MOCK_ANSWERS = [
  {id: 0, text: 'Mental health'},
  {id: 1, text: 'Accessibility on Campus'},
  {id: 2, text: 'Racial Diversity'},
  {id: 3, text: 'Sexual health'},
];

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: -1
    };
    this.registerSelection = this.registerSelection.bind(this);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
  }
  registerSelection() {
    console.log('selected');
  }
  setCurrentQuestion() {
    console.log('current question');
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.scrollContainer}>
          <h1>Tell us about you!</h1>

          <Panel question='I want to talk about:'>
            <MultipleChoice
              id={0}
              answers={MOCK_ANSWERS}
              registerSelection={this.registerSelection}
              onSelectQuestion={this.setCurrentQuestion}
            />
          </Panel>


          <RaisedButton>



            <Link to='/camera'>Camera</Link>
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default Survey;

const styles = {
  container: {
    backgroundColor: '#67c2ff',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    height: '100%'
  },
  scrollContainer: {
    display: 'flex',
    flex: 'none',
    flexFlow: 'column',
    alignItems: 'center',
    padding: '0 150px',

    color: '#FFF',
    border: '1px solid yellow',
    height: 'min-content',
    minHeight: 1600,
    width: '100%',

  }
};
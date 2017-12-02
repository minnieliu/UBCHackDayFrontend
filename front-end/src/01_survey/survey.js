import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import IconSelect from './iconselect';
import ShortInput from './shortinput';

const Panel = ({question, children, selected, onClick}) => (
  <div
    onClick={onClick}
    style={{
      width: '80%',
      height: 'min-content',
      minHeight: 300,
      padding: '5% 20%',
      backgroundColor: selected ? '#84cfff' : 'transparent'
  }}>
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
    const style = {
      color: '#FFF',
      fill:'#FFF',
      height: 34,
      width: 34,
      alignItems: 'center',
    };

    return (
      <Checkbox
        checked={this.props.checked}
        onCheck={(item, isChecked) => this.props.onCheck(this.props.item, isChecked)}
        label={this.props.item.text}
        style={{padding: 10, paddingLeft: 0}}
        labelStyle={{color: '#FFF', fontSize: 30}}
        iconStyle={style}
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
    this.onSelect = this.onSelect.bind(this);
  }
  onCheck(item, isChecked) {
    if (isChecked) {
      this.setState({ selection: item });
      this.props.registerSelection(this.props.id, item);
    }
  }
  onSelect() {
    this.props.onSelectQuestion(this.props.id);
  }
  render() {
    return (
      <div style={{width: '100%'}} onClick={this.onSelect}>
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
const MOCK_ANSWERS2 = [
  {id: 0, text: 'Coffee', icon: 'coffee'},
  {id: 1, text: 'Meetup', icon: 'meetup'},
  {id: 2, text: 'Club Event', icon: 'club'},
  {id: 3, text: 'Board Games', icon: 'boardgames'},
  {id: 4, text: 'Study Group', icon: 'study'}
];
const SHORT_ANSWER = { text: 'example'};

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: -1,
      responses: {}
    };
    this.registerSelection = this.registerSelection.bind(this);
    this.onSelectQuestion = this.onSelectQuestion.bind(this);
  }
  registerSelection(questionId, item) {
    // create new object and assign new response
    const newObj = Object.assign({}, this.state.responses, {[questionId]: item});
    this.setState({responses: newObj});
  }
  onSelectQuestion(questionId) {
    this.setState({currentQuestionId: questionId});
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.scrollContainer}>
          <h1>Tell us about you!</h1>
          <h2 style={{width: '70%'}}>based on your answers, we will try to match you with someone who shares similar interests</h2>

          <Panel
            selected={this.state.currentQuestionId === 0}
            question='1. I want to talk about:'
            onClick={() => this.onSelectQuestion(0)}>
            <MultipleChoice
              id={0}
              answers={MOCK_ANSWERS}
              registerSelection={this.registerSelection}
              onSelectQuestion={this.onSelectQuestion}
            />
          </Panel>

          <Panel
            selected={this.state.currentQuestionId === 1}
            question='2. I want to connect over:'
            onClick={() => this.onSelectQuestion(1)}>
            <IconSelect
              id={1}
              answers={MOCK_ANSWERS2}
              registerSelection={this.registerSelection}
              onSelectQuestion={this.onSelectQuestion}
            />
          </Panel>

          <Panel
            selected={this.state.currentQuestionId === 2}
            question='3. I am good at:'
            onClick={() => this.onSelectQuestion(2)}>
            <ShortInput
              id={2}
              registerSelection={this.registerSelection}
              onSelectQuestion={this.onSelectQuestion}
            />
          </Panel>

          <Panel
            selected={this.state.currentQuestionId === 3}
            question='4. I am good at:'
            onClick={() => this.onSelectQuestion(3)}>
            <ShortInput
              id={3}
              registerSelection={this.registerSelection}
              onSelectQuestion={this.onSelectQuestion}
            />
          </Panel>

          <RaisedButton onClick={() => this.props.onSave('survey', this.state.responses)}>
            <Link to='/camera'>Submit</Link>
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
    height: 'min-content',
    minHeight: 1600,
    width: '100%',

  }
};
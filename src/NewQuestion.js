import React, { Component } from 'react'
import pollService from './PollService'

import PropTypes from 'prop-types'

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        question: "",
        choices: [""]
      }
    }

    this.addNewChoice = this.addNewChoice.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
    this.changeQuestionName = this.changeQuestionName.bind(this);
    this.changeChoice = this.changeChoice.bind(this);
  }

  addNewChoice() {
    let question = this.state.question;
    question.choices.push("");

    this.setState({ question });
  }

  changeChoice(e, index) {
    let question = this.state.question;
    question.choices[index] = e.target.value;

    this.setState({ question });
  }

  saveQuestion() {
    pollService.saveQuestion(this.state.question);
    this.props.history.push("/");
  }

  changeQuestionName(element) {
    let question = this.state.question;
    question.question = element.target.value;

    this.setState({ question });
  }

  render() {

    const choicesWidget = this.state.question.choices.map((choice, index) => {
      const id = `choice${index}`;

      return (
        <div key={index}>
          <label htmlFor={id}>{`Choice ${index + 1}`}</label>
          <input type="text" id={id} name={id} value={choice} onChange={(e) => {
            this.changeChoice(e, index);
          }}></input>
        </div>
      );
    });

    return (
      <div>
        <h1>Create New Question</h1>

        <label htmlFor="questionText">Question</label>
        <input type="text" id="questionText" name="questionText" onChange={this.changeQuestionName}></input>

        <h3>Choices</h3>
        {choicesWidget}

        <button className="grey-button" onClick={this.addNewChoice}>Add New Choice</button>
        <button onClick={this.saveQuestion}>Save Question</button>
      </div>
    )
  }
}

NewQuestion.contextTypes = {
  router: PropTypes.object
};


export default NewQuestion

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import pollService from '../service/PollService'

class Poll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionDetails: null,
      selectedChoiceUrl: ""
    }

    this.selectVote = this.selectVote.bind(this);
    this.saveSelectedVote   = this.saveSelectedVote.bind(this);
  }

  componentWillMount() {
    const questionId = this.props.match.params.questionId;

    pollService.getQuestionDetails(questionId).then((questionDetails) => {
      this.setState({ questionDetails });
    });
  }

  selectVote(selectedChoiceUrl) {
    this.setState({selectedChoiceUrl});
  }

  saveSelectedVote(){
    pollService.postVote(this.state.selectedChoiceUrl);
    this.props.history.push("/");
  }

  render() {
    let question = "";
    let answers = "";

    if (this.state.questionDetails) {
      question = this.state.questionDetails.question;
      answers = this.state.questionDetails.choices.map((choiceData, index) => {
        let selectedClass = "";
        if (this.state.selectedChoiceUrl === choiceData.url) {
          selectedClass = "selected";
        }

        return (<li className={`vote ${selectedClass}`} key={index} onClick={() => { this.selectVote(choiceData.url) }} >
          <span className="questionTitle"> {choiceData.choice} </span>
          <span className="voteCount"> {choiceData.votes} </span>
        </li>)
      });
    }

    return (
      <div className="questionDetails">
        <h1>Question Detail</h1>
        <h2>Question: {question} </h2>

        <ul className="votes">
          {answers}
        </ul>

        <button onClick={this.saveSelectedVote}>Save Vote</button>
      </div>
    )
  }
}

Poll.contextTypes = {
  router: PropTypes.object
};

export default Poll

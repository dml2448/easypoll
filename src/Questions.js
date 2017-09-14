import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import pollService from './PollService'

class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    componentWillMount() {
        pollService.getQuestions().then(questions => {
            this.setState({ questions });
        });
    }

    render() {
        const questionsWidgets = this.state.questions.map((questionObj, index) => {
            const publishingDate = questionObj.published_at;

            let url = "#";
            if (questionObj.choices.length > 0) {
                url = questionObj.url;
            }

            return (<NavLink to={url} key={index} className="questionCard">
                <div key={index}>
                    <h2> {questionObj.question.substr(0, 35)} </h2>
                    <div className="infoBox">
                        <div> Published: {publishingDate} </div>
                        <div> Questions: {questionObj.choices.length} </div>
                    </div>
                </div>
            </NavLink>)
        });

        return (
            <div>
                <h1>Questions</h1>

                <div className="newQuestionBox">
                    <NavLink to="/questions/create">
                        <button>Create New Question</button>
                    </NavLink>
                </div>

                <div className="questionCollection">
                    {questionsWidgets}
                </div>
            </div>
        )
    }
}

export default Questions

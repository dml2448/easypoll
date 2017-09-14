const URL_KEY = "QUESTIONS_URL";

class PollService {
    constructor() {
        this.baseURL = "https://polls.apiblueprint.org";
        this.questionsURL = "";
    }

    init(onResult) {
        const storedURL = localStorage.getItem(URL_KEY);

        if (!storedURL) {
            this.getQuestionsURL().then(url => {
                this.questionsURL = url.questions_url;
                localStorage.setItem(URL_KEY, this.questionsURL);

                if (onResult) {
                    onResult();
                }
            });
        } else {
            this.questionsURL = storedURL;

            if (onResult) {

                onResult();
            }
        }
    }

    getQuestionsURL() {
        return fetch(this.baseURL, { method: 'GET' }).then((response) => {
            if (response.ok) {
                return response.json();
            }

            return "";
        });
    }

    getQuestions() {
        const url = `${this.baseURL}${this.questionsURL}`;
        return fetch(url, {method: 'GET'}).then((response) => {
            if (response.ok) {
                return response.json();
            }
    
            return {};
        });
    }

    getQuestionDetails(questionId) {
        const url = `${this.baseURL}${this.questionsURL}/${questionId}`
        return fetch(url, {method: 'GET'}).then((response) => {
            if (response.ok) {
                return response.json();
            }
    
            return {};
        });
    }

    postVote(voteURL) {
        const url = `${this.baseURL}${voteURL}`
        return fetch(url, {method: 'POST'}).then((response) => {
            if (response.ok) {
                return response.json();
            }
    
            return {};
        });
    }
}

const pollService = new PollService();

export default pollService

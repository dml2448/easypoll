# easypoll
Easypoll is a simple demo of the  [Poll API](http://docs.pollsapi.apiary.io/.)

## Assumptions
The application was created using reactjs and
bootstrap using create-react-app.

## Out of scope
Due to time constraints following elements were omitted

1. **Handling and validating of user input**: - In production-ready application, it is important to validate every user input to prevent security issues and improve usability

2. **Better structuring of code**. React best practices are to divide the application into components and containers. For smaller applications this can decrease readability due to additional files

3. **Writing more tests**. I focused my tests on showing the most important concepts of mocking the data, network calls and rendering of components. In production ready application more tests need to be written to ensure good quality of code.



## How to build the project

```javascript
npm install
npm start
```

### To run tests

```javascript
npm test
```

### Screenshots

![Question List](screenshots/questions.png "Question List")
![Question Detail](screenshots/question_detail.png "Question Detail")
![Create New Question](screenshots/new_question.png "Create New Question")




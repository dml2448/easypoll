import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import pollService from '../service/PollService';

function initLocalStorageMock() {
  class LocalStorageMock {
    constructor() {
      this.store = {}
    }

    clear() {
      this.store = {}
    }

    getItem(key) {
      return this.store[key] || null
    }

    setItem(key, value) {
      this.store[key] = value
    }

    removeItem(key) {
      delete this.store[key]
    }
  }

  window.localStorage = new LocalStorageMock();

}

function initFetchMock(){
  const mockedQuestions = [
    {
      "question": "Test Question",
      "url": "/questions/6392",
      "choices": [
        {
          "choice": "choice 1",
          "votes": 1,
          "url": "/questions/6392/choices/23977"
        },
        {
          "choice": "",
          "votes": 0,
          "url": "/questions/6392/choices/23980"
        },
        {
          "choice": "choice 2",
          "votes": 0,
          "url": "/questions/6392/choices/23978"
        },
        {
          "choice": "choice 3",
          "votes": 0,
          "url": "/questions/6392/choices/23979"
        }
      ],
      "published_at": "2017-09-14T14:26:23.133094+00:00"
    },
    {
      "question": "Favourite programming language?",
      "url": "/questions/6391",
      "choices": [
        {
          "choice": "Objective-C",
          "votes": 0,
          "url": "/questions/6391/choices/23975"
        },
        {
          "choice": "Python",
          "votes": 0,
          "url": "/questions/6391/choices/23974"
        },
        {
          "choice": "Ruby",
          "votes": 0,
          "url": "/questions/6391/choices/23976"
        },
        {
          "choice": "Swift",
          "votes": 0,
          "url": "/questions/6391/choices/23973"
        }
      ],
      "published_at": "2017-09-14T14:23:45.933838+00:00"
    }];

  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        Id: '123',
        json: function () {
          return mockedQuestions
        }
      });
    });

    return p;
  });
}

beforeAll(() => {
  initLocalStorageMock();
  initFetchMock();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  pollService.init(() => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
});

it('questions count is ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  pollService.getQuestions().then(questions => {
    expect(questions.length).toBe(2);
  });
});

it('choices count is ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  pollService.getQuestions().then(questions => {
    expect(questions[0].choices.length).toBe(4);
  });
});

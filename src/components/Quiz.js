import React, { useState } from 'react';
import questions from '../data/questions';
import { Button, Card } from 'react-bootstrap';

function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish(score + (selected === questions[current].answer ? 1 : 0));
    }
  };

  const q = questions[current];

  return (
    <div className="quiz-container">
      <Card className="p-4 shadow-sm">
        <h4 className="text-success">Question {current + 1} of {questions.length}</h4>
        <h5 className="mt-3">{q.question}</h5>
        <div className="mt-3">
          {q.choices.map((choice, index) => (
            <Button
              key={index}
              variant={selected === choice ? 'success' : 'outline-success'}
              className="d-block mb-2 w-100"
              onClick={() => setSelected(choice)}
            >
              {choice}
            </Button>
          ))}
        </div>
        <Button
          className="mt-3"
          variant="success"
          onClick={handleNext}
          disabled={!selected} // Disable if no answer is selected
        >
          Next
        </Button>
      </Card>
    </div>
  );
}

export default Quiz;

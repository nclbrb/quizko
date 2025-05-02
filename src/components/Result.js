import React from 'react';
import { Card, Button } from 'react-bootstrap';
import questions from '../data/questions';

function Result({ score, onRestart }) {
  const percentage = ((score / questions.length) * 100).toFixed(0);
  return (
    <div className="quiz-container">
      <Card className="p-5 shadow text-center">
        <h2 className="text-success">🎉 Quiz Complete!</h2>
        <p className="mt-3 fs-4">You scored <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
        <p className="fs-5">Your score: <strong>{percentage}%</strong></p>
        <Button variant="success" size="lg" onClick={onRestart} className="mt-4">
          Take Quiz Again
        </Button>
      </Card>
    </div>
  );
}

export default Result;

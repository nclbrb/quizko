import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

function Home({ onStart }) {
  return (
    <div className="quiz-container">
      <Card className="p-5 shadow-lg text-center">
      <div className="d-flex justify-content-center mb-4">
        <FaQuestionCircle size={80} className="text-success" />
        </div>
        <h2 className="mb-4">Will you take the quiz now?</h2>
        <Button variant="success" size="lg" onClick={onStart}>
          Start Now
        </Button>
      </Card>
    </div>
  );
}

export default Home;

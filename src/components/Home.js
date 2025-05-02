import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

function Home({ onStart }) {
  return (
    <div className="quiz-container">
      <Card className="p-5 shadow-lg text-center">
        <FaQuestionCircle size={80} className="text-success mb-4" />
        <h2 className="mb-4">Will you take the quiz now?</h2>
        <Button variant="success" size="lg" onClick={onStart}>
          Start Now
        </Button>
      </Card>
    </div>
  );
}

export default Home;

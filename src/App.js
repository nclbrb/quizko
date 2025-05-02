import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [step, setStep] = useState('home');
  const [score, setScore] = useState(0);

  const restart = () => {
    setScore(0);
    setStep('home');
  };

  return (
    <div className="green-bg">
      <div className="container text-center">
        {step === 'home' && <Home onStart={() => setStep('quiz')} />}
        {step === 'quiz' && <Quiz onFinish={(finalScore) => {
          setScore(finalScore);
          setStep('result');
        }} />}
        {step === 'result' && <Result score={score} onRestart={restart} />}
      </div>
    </div>
  );
}

export default App;

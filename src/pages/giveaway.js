import Layout from '@/components/Layout'
import Quiz from '@/components/Quiz';
import React from 'react'
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  // Add more questions...
];

function giveaway() {

  return (
    <Layout>
      <Quiz questions={quizData}/>
    </Layout>
  )
}


giveaway.auth=true;
  export default giveaway
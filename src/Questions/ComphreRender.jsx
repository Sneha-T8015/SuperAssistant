import React from 'react'
import Comprehension from './Comprehension';
export default function ComphreRender() {
    const questions = [
        {
          text: 'What is another term for global warming?',
          type: 'MCA',
          options: ['Climate Change', 'temperature', 'Rain', 'Cold'],
        },
      ];
      const QuestionRender ='What is another term for global warming?'
      const OptionsRender=['Climate Change', 'temperature', 'Rain', 'Cold']
  return (
    <Comprehension
    initialReferenceText="Global warming, also referred to as climate change, is the long-term heating of Earth's climate system. The average global temperature has increased significantly over the past century, primarily due to human activities such as the burning of fossil fuels, deforestation, and industrial processes. These activities release greenhouse gases, including carbon dioxide (CO2) and methane (CH4), into the atmosphere. Greenhouse gases trap heat from the sun and prevent it from escaping, causing a gradual rise in Earth's temperature."
    initialQuestions={questions}
    initialOptions={OptionsRender} 
    QuestionRender={QuestionRender}
  />
  )
}

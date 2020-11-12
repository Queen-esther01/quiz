import './App.css';
import {useState} from 'react'

function App() {
  const [formData] = useState([
    {
      question: '1. What was Katheryn Johnson best known for?',
      firstchoice: 'Aeronautics',
      secondchoice: 'Mathematics',
      thirdchoice: 'NASA',
      fourthchoice: 'Algebra',
      answer: 'Mathematics'
    },
    {
      question: '2. Who was Ada LoveLace known to be?',
      firstchoice: 'The first computer programmer who believed computers were capable of more',
      secondchoice: 'The scientist who specialised in rocket science',
      thirdchoice: 'The woman who invented the analytical engine',
      fourthchoice: 'The first African-American woman in space',
      answer: 'The first computer programmer who believed computers were capable of more'
    },
    {
      question: '3. Rosalind Franklin is....',
      firstchoice: 'A rocket scientist',
      secondchoice: 'A Mathematician',
      thirdchoice: 'A Geneticist',
      fourthchoice: 'A Chemist and Crystallographer',
      answer: 'A Chemist and Crystallographer'
    },
    {
      question: '4. Who invented COBOL programming Language?',
      firstchoice: 'Virginia Holsinger',
      secondchoice: 'Rachel Carson',
      thirdchoice: 'Grace Murray Hopper',
      fourthchoice: 'Sally Ride',
      answer: 'Grace Murray Hopper'
    },
    {
      question: '5. Who was the first black woman to travel into space?',
      firstchoice: 'Mae Carol Jemison',
      secondchoice: 'Barbara McClintock',
      thirdchoice: 'Edith Clark',
      fourthchoice: 'Katherine Johnson',
      answer: 'Mae Carol Jemison'
    }
  ])

  const [number, setnumber] = useState(0)
  const [buttonText] = useState('Next')
  const [score, setScore] = useState(0)

  const addNumber = (e) =>{
    setnumber(number + 1)
    e.preventDefault()
    document.getElementsByName('choice').checked = false;
  }

  const subtractNumber = (e) =>{
    e.preventDefault();
    setnumber(number - 1)
  }

  const answerHandler = ({target}) =>{
    console.log(target.value)
    if(target.value === formData[number].answer){
      setScore(score + 1)
    }
  }

  const refreshPage = () => {
    return window.location.reload();
  }

  console.log(score)
  // formData.forEach( data => {
  //   console.log(data)
  // });
  
  // for(let x = 0; x < formData.length; x++){
  //   console.log(formData[x].question)
  // }

  return (
    <> 
      <div className = 'form-container'>
        <h1>Women in STEM</h1>
        <form onChange = {answerHandler}>
        {number < 5 ?
          <div>
            <label className = 'question' htmlFor="choice">{formData[number].question}</label><br/><br/>

            <input type="radio" value={formData[number].firstchoice} id="choice1" name="choice" />
            <label htmlFor="choice1">{formData[number].firstchoice}</label><br/><br/>
            
            <input type="radio" value={formData[number].secondchoice} id="choice2" name="choice" />
            <label htmlFor="choice2">{formData[number].secondchoice}</label><br/><br/>

            <input type="radio" value={formData[number].thirdchoice} id="choice3" name="choice" />
            <label htmlFor="choice3">{formData[number].thirdchoice}</label><br/><br/>

            <input type="radio" value={formData[number].fourthchoice} id="choice4" name="choice" />
            <label htmlFor="choice4">{formData[number].fourthchoice}</label><br/><br/>

            {number >= 1 && number < 4 ? <button onClick = {subtractNumber} className = 'back'>Back</button>
            // : number === 4 ? null 
            : null}

          
            <button onClick = {addNumber} className = 'next'>
              {
                number === 4 ? 'Submit' : buttonText
              }
            </button>
          </div>
          : <div className = 'congratulations'>
              <p>You have scored {score} out of 5</p>
              <button onClick = {refreshPage}>Start Over</button>
            </div>
          }
        </form>
      </div>
    </>
  );
}

export default App;

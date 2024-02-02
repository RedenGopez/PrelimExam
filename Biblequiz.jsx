//Biblequiz.jsx
import react from 'react';
import '/.Biblequiz.css'

function Correct() {
    return(
        <div>
        <h1>
            Bible Quiz
        </h1>
        <h1>The Bible consists of the old and new Testaments.
            Moses led the Israelities out of Egypt.
            The Sermon on the mount is found in the Book of Luke.
        </h1>
        </div>
    );
}

function Incorrect() {
    return(
        <div>
            <h1>Bible Quiz</h1>
            <h1>The Bible consists of the old and new Testaments.
                <p className="green">Correct</p>
            </h1>
            <h1>Moses led the Israelites out of Egypt.
                <p className='green'>Correct</p>
            </h1>
            <h1>The Sermon on the mount is found in the book of luke. 
                <p className='red'>Incorrect</p>
            </h1>
        </div>
    );
}

function CorrectOrIncorrect(props){
    const isCorrect = props.isCorrect;
    if(isCorrect){
        return(
            <Correct/>
        );
    }
    return(
        <Incorrect/>
    );
}

export default function Biblequiz() {
    return(
        <div>
            <CorrectOrIncorrect isCorrect={true}/>
        </div>
    );
}
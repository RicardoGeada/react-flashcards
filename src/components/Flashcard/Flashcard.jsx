import { useState } from "react";
import { useDataContext } from "../../context";
import "./flashcard.css";

function Flashcard({ id, question, answer }) {

const [show, setShow]  = useState(false);
const { flashcards, setFlashcards } = useDataContext();

function showAnswer() {
  if(show) {setShow(false)}
  else {setShow(true)};
}

function deleteFlashcard(flashcardId) {
  setFlashcards(flashcards.filter((fc) => fc.id !== flashcardId));
}

  return (
    <div id={'flashcard-' + id} className="flashcard" onClick={showAnswer}>
      {!show && <div className="question">Q: { question }</div>}
      {show && <div className="answer">A: { answer }</div>}
      <button className="btn-delete" onClick={() => deleteFlashcard(id)}>x</button>
    </div>
  );
}

export default Flashcard;

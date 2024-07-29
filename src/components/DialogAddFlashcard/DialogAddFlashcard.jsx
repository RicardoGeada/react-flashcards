import { useParams } from "react-router-dom";
import {  useDataContext } from "../../context";
import "./dialogaddflashcard.css";

function DialogAddCategory() {
    const params = useParams();
  const { flashcards, setFlashcards } = useDataContext();

  function addFlashcard(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const question = formData.get("question");
    const answer = formData.get("answer");
    const id = Math.max(...flashcards.map( c => c.id)) + 1;
    if (question != '' && answer != '') {
      setFlashcards([
        ...flashcards,
        {"id": id, "categoryId": params.categoryId, "question": question, "answer": answer}
      ]);
      document.getElementById('question').value = '';
      document.getElementById('answer').value = '';
    }
  }

  return (
      <div className="dialog-add-flashcard">
        <h1>Add New Flashcard</h1>
        <form onSubmit={addFlashcard}>
            <input type="text" name="question" id="question" placeholder="Question" required/>
            <input type="text" name="answer" id="answer" placeholder="Answer" required/>
            <button type="submit">Add new flashcard</button>
        </form>
      </div>
  );
}

export default DialogAddCategory;

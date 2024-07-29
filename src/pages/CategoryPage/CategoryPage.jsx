import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import Flashcard from "../../components/Flashcard/Flashcard";
import { useDataContext } from "../../context";
import DialogAddFlashcard from "../../components/DialogAddFlashcard/DialogAddFlashcard";
import Dialog from "../../components/Dialog/Dialog";
import "./categorypage.css";

export default function CategoryPage() {
  const params = useParams();
  const { categories, flashcards } = useDataContext();

  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div className="category-page">
      <Link to="/">Home</Link>
      <h1>Category {categories.find((c) => c.id == params.categoryId).name}</h1>
      <div className="flashcards">
        {flashcards
          .filter((fc) => fc.categoryId == params.categoryId)
          .map((fc) => (
            <Flashcard
              key={fc.id}
              id={fc.id}
              question={fc.question}
              answer={fc.answer}
            ></Flashcard>
          ))}
        <button
          className="btn-dialog-add-flashcard"
          onClick={() => {
            setDialogContent(<DialogAddFlashcard />);
            toggleDialog();
          }}
        >
          +
        </button>
        <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          {dialogContent}
        </Dialog>
      </div>
    </div>
  );
}

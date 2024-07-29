import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import DialogAddCategory from "../../components/DialogAddCategory/DialogAddCategory";
import Dialog from "../../components/Dialog/Dialog";
import { useDataContext } from "../../context";
import "./mainpage.css";


export default function MainPage() {
  const { categories, setCategories } = useDataContext();

  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef(null);

  function toggleDialog() {

    if(!dialogRef.current) { return; }

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }


  function deleteCategory(categoryId) {
    setCategories(categories.filter((c) => c.id !== categoryId));
  }

  return (
    <div className="main-page">
      <h1>Choose your category</h1>
      <div className="category-links">
        {categories.map((category) => (
          <div key={category.id} className="category-link">
            <Link to={`/categories/${category.id}`}>
              {category.name}
            </Link>
            <button onClick={() => deleteCategory(category.id)} className="btn-delete">x</button>
          </div>
        ))}
        <button className="category-link" onClick={() => {
          setDialogContent(<DialogAddCategory/>);
          toggleDialog()
        }}>+</button>
        <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          {dialogContent}
        </Dialog>
      </div>
    </div>
  );
}

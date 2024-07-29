import {  useDataContext } from "../../context";
import "./dialogaddcategory.css";

function DialogAddCategory() {
  const { categories, setCategories } = useDataContext();

  function addCategory(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const category = formData.get("categoryText");
    const id = Math.max(...categories.map( c => c.id)) + 1;
    if (category != '') {
      setCategories([
        ...categories,
        {id: id, name: category}
      ]);
      document.getElementById('categoryText').value = '';
    }
  }

  return (
      <div className="dialog-add-category">
        <h1>Add New Category</h1>
        <form onSubmit={addCategory}>
            <input type="text" name="categoryText" id="categoryText"/>
            <button type="submit">Add new category</button>
        </form>
      </div>
  );
}

export default DialogAddCategory;

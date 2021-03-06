import React, { useContext, useState } from 'react';
import noteContext from '../Context/noteContext';


const Addnote = (props) => {

  const context = useContext(noteContext)
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })   // ... is a spread operator
  }
  return (
    <div className="container my-5 px-5 py-3 shadow-light col-md-11 col-12 mx-auto">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control bg-dark text-light" id="title" name="title" value={note.title} onChange={onChange} aria-describedby="title" required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control bg-dark text-light " id="description" name="description" value={note.description} rows="2" onChange={onChange} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input className="form-control bg-dark text-light" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-outline-success" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote

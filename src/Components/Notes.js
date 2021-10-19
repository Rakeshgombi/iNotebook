import React, { useContext, useEffect, useRef, useState } from 'react'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import noteContext from '../Context/noteContext'

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getNotes, addNote } = context;
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })
  useEffect(() => {
    getNotes()
  }, [])

  const ref = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Updating the note", note);
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })   // ... is a spread operator
  }

  return (
    <>
      <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update your Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} aria-describedby="etitle" value={note.etitle} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <textarea className="form-control" id="edescription" name="edescription" rows="2" onChange={onChange} value={note.edescription}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <Addnote />
      <div className="my-3">
        <h1>Your Notes</h1>
        <div className="w-100 d-flex justify-content-center align-items-sm-start flex-wrap">
          {notes.map((note) => {
            return <Noteitem key={note._id} updateNote={updateNote} note={note} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes

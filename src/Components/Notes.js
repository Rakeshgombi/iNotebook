import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../Context/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })
  useEffect(() => {
    getNotes()
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  
  const handleClick = (e) => {
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag)
    e.preventDefault();
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
                  <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} aria-describedby="etitle" value={note.etitle} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <textarea className="form-control" id="edescription" name="edescription" rows="2" onChange={onChange} value={note.edescription} required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button  disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-outline-success btn-sm" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <Addnote />
      <hr />
      <div className="my-3 ">
        <h1 className="text-center">Your Notes</h1>
        <div className="w-100 d-flex justify-content-center align-items-sm-start flex-wrap">
          {notes.length === 0 && <h3>No Notes to display</h3>}
          {notes.map((note) => {
            return <Noteitem key={note._id} updateNote={updateNote} note={note} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes

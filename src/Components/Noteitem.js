import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';


const Noteitem = (props) => {
  const { note, updateNote } = props;

  const context = useContext(noteContext)
  const { deleteNote } = context;
  return (

    <div className="card col-md-3 m-2 bg-dark text-light shadow border">
      <div className="card-body ">
        <div className="d-flex justify-content-between">
          <h5 className="card-title text-wrap">{note.title}</h5>
          <div className="actions d-flex fs-5 ">
            <span className="text-success mx-1"  role="button" onClick={() => { updateNote(note) }}><i className="far fa-edit" role="button"></i></span>
            <span className="text-danger mx-1"  role="button" onClick={() => { deleteNote(note._id) }}><i className="far fa-trash-alt"></i></span>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  )
}

export default Noteitem

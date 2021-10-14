import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';


const Noteitem = (props) => {
  const { note } = props;

  const context = useContext(noteContext)
  const { deleteNote } = context;
  return (
    <div className="card col-md-3 m-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title text-wrap">{note.title}</h5>
          <div className="actions d-flex fs-5">
            <span className="text-primary mx-1"><i className="far fa-edit" role="button"></i></span>
            <span className="text-danger mx-1" onClick={() => { deleteNote(note._id) }}><i className="far fa-trash-alt" role="button"></i></span>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  )
}

export default Noteitem

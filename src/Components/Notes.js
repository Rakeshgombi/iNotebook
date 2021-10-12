import React, { useContext } from 'react'
import noteContext from '../Context/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, setnotes } = context;
  return (
    <div className="my-3">
      <h1>Your Notes</h1>
      <div className="w-100 d-flex justify-content-center align-items-sm-start flex-wrap">

        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes

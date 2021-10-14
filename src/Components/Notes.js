import React, { useContext } from 'react'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import noteContext from '../Context/noteContext'

const Notes = () => {
  const context = useContext(noteContext)
  const { notes } = context;
  return (
    <>
      <Addnote />
      <div className="my-3">
        <h1>Your Notes</h1>
        <div className="w-100 d-flex justify-content-center align-items-sm-start flex-wrap">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes

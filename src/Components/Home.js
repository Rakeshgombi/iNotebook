import React, { useContext } from 'react'
import noteContext from '../Context/noteContext';

const Home = () => {
  const context = useContext(noteContext)
  const { notes, setnotes } = context;
  return (
    <div>
      <div className="container my-4 px-5">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="InputText" className="form-label">Enter the Title</label>
            <input type="text" className="form-control" id="InputText" aria-describedby="InputText" />
          </div>
          <div className="mb-3">
            <label htmlFor="InputDesc" className="form-label">Example textarea</label>
            <textarea className="form-control" id="InputDesc" rows="2"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return note.title
        })}
      </div>
    </div>
  )
}

export default Home

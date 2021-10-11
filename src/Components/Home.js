import React, { useContext } from 'react'
import Notes from './Notes';

const Home = () => {
  return (
    <div>
      <div className="container my-4 px-5 bg-white shadow-light">
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
      <Notes/>
      </div>
    </div>
  )
}

export default Home

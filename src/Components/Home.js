import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container my-4 px-5">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="InputText" className="form-label">Enter the Title</label>
            <input type="text" className="form-control" id="InputText" aria-describedby="InputText" />
          </div>
          <div class="mb-3">
            <label for="InputDesc" class="form-label">Example textarea</label>
            <textarea class="form-control" id="InputDesc" rows="2"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h1>Your Notes</h1>
      </div>
    </div>
  )
}

export default Home

import React from 'react'

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="card col-md-3 m-2">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tempora cum, magni dolore maiores sunt nesciunt sit nulla. Facere corporis aperiam accusamus, quae consequatur praesentium voluptates quos molestiae hic rerum.</p>
      </div>
    </div>
  )
}

export default Noteitem

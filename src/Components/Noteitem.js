import React from 'react'

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="card col-md-3 m-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title text-wrap">{note.title}</h5>
          <div className="actions d-flex fs-5">
            <i className="far fa-edit text-primary p-1" role="button"></i> <i className="far fa-trash-alt text-danger p-1" role="button"></i>
          </div>
        </div>
        <p className="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tempora cum, magni dolore maiores sunt nesciunt sit nulla. Facere corporis aperiam accusamus, quae consequatur praesentium voluptates quos molestiae hic rerum.</p>
      </div>
    </div>
  )
}

export default Noteitem

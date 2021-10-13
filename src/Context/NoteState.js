import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "6161cebc33c4de8e3227620b5",
      "user": "613df60f283cfcabef3aac4f",
      "title": "My turtle",
      "description": "This is a description",
      "tag": "Testing",
      "date": "2021-10-09T17:17:48.920Z",
      "__v": 0
    },
    {
      "_id": "6161cec8332c4de8e227620b7",
      "user": "613df60f283cfcabef3aac4f",
      "title": "My turtle part 2",
      "description": "This is a description part 2",
      "tag": "Testing",
      "date": "2021-10-09T17:18:00.544Z",
      "__v": 0
    },
    {
      "_id": "6161cec833c43de8e227620b7",
      "user": "613df60f283cfcabef3aac4f",
      "title": "My turtle part 2",
      "description": "This is a description part 2",
      "tag": "Testing",
      "date": "2021-10-09T17:18:00.544Z",
      "__v": 0
    },
    {
      "_id": "6161cec833c4de8e2237620b7",
      "user": "613df60f283cfcabef3aac4f",
      "title": "My turtle part 2",
      "description": "This is a description part 2",
      "tag": "Testing",
      "date": "2021-10-09T17:18:00.544Z",
      "__v": 0
    },
    {
      "_id": "6161cec833c4de83e227620b7",
      "user": "613df60f283cfcabef3aac4f",
      "title": "My turtle part 2",
      "description": "This is a description part 2",
      "tag": "Testing",
      "date": "2021-10-09T17:18:00.544Z",
      "__v": 0
    }
  ]


  const [notes, setnotes] = useState(notesInitial)

  // Add a note
  const addNote = (title, description, tag) => {
    console.log("Adding a new Note");
    // TODO API
    const note = {
      "_id": "6161cec8fs33c4de83e227620b7",
      "user": "613df60f283cfcabef3aac4f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-10-09T17:18:00.544Z",
      "__v": 0
    };
    setnotes(notes.concat(note))
  }
  // Delete a note
  const deleteNote = () => {
    // setnotes(notes.
  }

  // Edit a note
  const editNote = () => { }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
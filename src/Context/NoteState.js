import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [  ]


  const [notes, setnotes] = useState(notesInitial)

  // Add a note
  const addNote = async(title, description, tag) => {
    // API Call
    // TODO API
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log("Adding a new Note");
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


  // Add a note
  const getNotes = async () => {
    // API Call
    // TODO API
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      }
    });
    const json = await response.json();
    console.log(json);
    setnotes(json)
  }



  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting the note with ID" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setnotes(newNotes)
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit a call      
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
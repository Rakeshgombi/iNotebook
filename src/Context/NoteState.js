import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []


  const [notes, setnotes] = useState(notesInitial)

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    // TODO API
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
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
    setnotes(json)
  }


  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      }
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setnotes(newNotes)
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZGY2MGYyODNjZmNhYmVmM2FhYzRmIn0sImlhdCI6MTYzMjU2ODQyMX0.vVrYysYxzaO_ip0c2f-o-LvqXmFcMONvESyu9ijhstE'
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = await response.json(); 
    // Logic to edit a call      

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
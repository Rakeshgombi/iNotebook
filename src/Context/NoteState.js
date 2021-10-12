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
  return (
    <NoteContext.Provider value={{notes, setnotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
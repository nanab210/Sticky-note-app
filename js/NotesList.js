import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepMatchSearch = (note) => note.doesMatchSearch === true;
  const matchSearch = props.notes.filter(keepMatchSearch);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

  const notesElements = matchSearch.map(renderNote);
  return <ul className="notes-list">{notesElements}</ul>;
};

export default NotesList;

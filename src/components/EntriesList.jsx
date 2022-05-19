import React from 'react';
import Entry from './Entry.jsx';

const EntriesList = ({entries}) => {

  return (
    <div className="entries-container">
      <div className="entries-list">
        {Array.isArray(entries) && entries.length === 0 && <div className="no-entries">No entries yet, ask something!</div>}
        {entries && entries.slice(0).reverse().map(entry => (
          <Entry key={entry.id} entry={entry}/>
        ))}
      </div>
    </div>
  );
}

export default EntriesList;
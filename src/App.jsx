import React from 'react';

import AddPrompt from './components/AddPrompt.jsx';
import EntriesList from './components/EntriesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }

    this.saveEntries = this.saveEntries.bind(this);
  }

  componentWillMount() {
    localStorage.getItem('entries') && this.setState({
      entries: JSON.parse(localStorage.getItem('entries'))
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('entries', JSON.stringify(nextState.entries));
  }

  saveEntries(answer) {
    this.setState(prevState => ({entries: [...prevState.entries, answer]}));
    console.log(this.state.entries);
  }

  render() {
    return(
      <div className="main">
        <h1>Ask me something!</h1>
        <AddPrompt save={this.saveEntries}/>
        <EntriesList entries={this.state.entries} />
      </div>
    );
  }
}

export default App;



import React from 'react';

import AddPrompt from './components/AddPrompt.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Ask me something!</h1>
        <AddPrompt />
      </div>
    );
  }
}

export default App;



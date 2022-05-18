import React from 'react';
import axios from 'axios';
import API_KEY from '../../config.js';

class AddPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: ''
    }

    this.handlePrompt = this.handlePrompt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrompt(e) {
    this.setState({prompt: e.target.value});
  }

  handleSubmit(e) {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
      }
    }
    let data = {
      prompt: this.state.prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
    
    axios.post('https://api.openai.com/v1/engines/text-curie-001/completions', data, config)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return(
      <div className="AddPromptContainer">
        <textarea className="prompt" placeholder="Enter your prompt" name="prompt" onChange={this.handlePrompt} />
        <button className="submit-prompt" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AddPrompt;
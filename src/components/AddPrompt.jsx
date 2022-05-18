import React from 'react';
import axios from 'axios';
import API_KEY from '../../config.js';

class AddPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
      engine: 'text-curie-001'
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
      this.props.save({
        id: res.data.id, 
        prompt: this.state.prompt, 
        answer: res.data.choices[0].text,
        engine: res.data.model,
        timestamp: new Date()
      });
      console.log(res);
    })
  }

  selectEngine(e) {
    this.setState({engine: e.target.value});
  }

  render() {
    return(
      <div className="add-prompt-container">
        <div className="engine-select-container">
          Select OpenAI Engine
          <select className="engine-select" defaultValue="text-curie-001">
            <option value="text-davinci-002">Davinci</option>
            <option value="text-curie-001">Curie</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-ada-001">Ada</option>
          </select>
          Learn More
        </div>
        <textarea className="prompt" placeholder="Enter your prompt" name="prompt" onChange={this.handlePrompt} />
        <button className="submit-prompt" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AddPrompt;
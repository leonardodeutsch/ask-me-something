import React from 'react';
import axios from 'axios';
// import API_KEY from '../../config.js';

import Preset from './Preset.jsx';
import loading from '../images/loading.png';
import presets from '../utils/presets.js';

class AddPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
      engine: '',
      engineError: false,
      promptError: false,
      loading: false
    }

    this.handlePrompt = this.handlePrompt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectEngine = this.selectEngine.bind(this);
    this.handlePreset = this.handlePreset.bind(this);
  }

  handlePrompt(e) {
    this.setState({prompt: e.target.value});
  }

  handleSubmit(e) {
    if (this.state.engine === '') {
      this.setState({engineError: true})
    } else if (this.state.prompt === '') {
      this.setState({promptError: true})
      this.setState({engineError: false})
    } else {
      this.setState({engineError: false})
      this.setState({promptError: false})
      this.setState({loading: true})
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`
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
  
      axios.post(`https://api.openai.com/v1/engines/${this.state.engine}/completions`, data, config)
      .then(res => {
        this.props.save({
          id: res.data.id, 
          prompt: this.state.prompt, 
          answer: res.data.choices[0].text,
          engine: res.data.model,
          timestamp: new Date()
        });
        this.setState({loading: false});
        if (window.innerHeight < 1000) {
          window.scrollTo({
            top: 800,
            behavior: 'smooth'
          })
        }
      })
    }
  }

  selectEngine(e) {
    this.setState({engine: e.target.value});
  }

  handlePreset(preset) {
    document.getElementById("prompt").value = preset.presetPrompt;
    this.setState({prompt: preset.presetPrompt});
    document.getElementById("engine").value = preset.presetEngine;
    this.setState({engine: preset.presetEngine});
  }

  render() {
    return(
      <div className="add-prompt-main">
        <div className="add-prompt-container">
          <div className="engine-select-container">
            <select className="engine-select" id="engine" defaultValue="select-engine" onChange={this.selectEngine}>
              <option value="select-engine" disabled hidden>Select Engine</option>
              <option value="text-davinci-002">Davinci</option>
              <option value="text-curie-001">Curie</option>
              <option value="text-babbage-001">Babbage</option>
              <option value="text-ada-001">Ada</option>
            </select>
            <a className="learn-more-link" href="https://beta.openai.com/docs/engines/gpt-3" target="_blank" aria-label="OpenAI Engines">
              What is this?
            </a>
          </div>
          <textarea className="prompt" id="prompt" placeholder="Enter your prompt" name="prompt" onChange={this.handlePrompt}/>
          <button className="submit-prompt" onClick={this.handleSubmit}>Submit</button>
          {this.state.engineError && 
            <div className="error-message">Please select an engine.</div>
          }
          {this.state.promptError && 
            <div className="error-message">Please type a prompt.</div>
          }
          {this.state.loading &&
            <img className="loading" src={loading}/>
          }
        </div> 
        <div className="presets-container">
          <div className="presets-header">Need some help? Try these presets!</div>
          <div className="presets-buttons">
            {presets.map(preset => (
              <Preset key={preset.presetId} preset={preset} click={this.handlePreset}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AddPrompt;
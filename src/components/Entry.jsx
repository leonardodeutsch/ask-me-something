import React from "react";
import moment from 'moment';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleColor = this.handleColor.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleColor(engine) {
    if (engine === 'text-davinci:002' || engine === 'text-davinci-002') {
      return 'rgb(73 148 241)';
    } else if (engine === 'text-curie:001' || engine === 'text-curie-001') {
      return 'rgb(255 131 131)';
    } else if (engine === 'text-babbage:001' || engine === 'text-babbage-001') {
      return 'rgb(91 173 112)';
    } else if (engine === 'text-ada:001' || engine === 'text-ada-001') {
      return 'rgb(203 101 195)';
    }
  }
  handleName(engine) {
    if (engine === 'text-davinci:002' || engine === 'text-davinci-002') {
      return 'Davinci';
    } else if (engine === 'text-curie:001' || engine === 'text-curie-001') {
      return 'Curie';
    } else if (engine === 'text-babbage:001' || engine === 'text-babbage-001') {
      return 'Babbage';
    } else if (engine === 'text-ada-001' || engine === 'text-ada-001') {
      return 'Ada';
    }
  }

  render() {
    return(
      <div className="entry-container">
        <div className="engine-tag" style={{background: this.handleColor(this.props.entry.engine)}}>
          {this.handleName(this.props.entry.engine)}
        </div>
        <div className="prompt-container">
          <div className="entry-header">
            Prompt:
          </div>
          <div className="entry-body">
            {this.props.entry.prompt}
          </div>
        </div>
        <div className="answer-container">
          <div className="entry-header">
            Answer:
          </div>
          <div className="entry-body">
            {this.props.entry.answer}
          </div>
        </div>
        <div className="timestamp-container">
          Asked {moment(this.props.entry.timestamp).startOf('second').fromNow()}
        </div>
      </div>
    );
  }
}

export default Entry;


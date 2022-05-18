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
    if (engine === 'text-davinci:002') {
      return 'orange';
    } else if (engine === 'text-curie:001') {
      return 'green';
    } else if (engine === 'text-babbage:001') {
      return 'yellow';
    } else if (engine === 'text-ada:001') {
      return 'purple';
    }
  }
  handleName(engine) {
    if (engine === 'text-davinci:002') {
      return 'Davinci';
    } else if (engine === 'text-curie:001') {
      return 'Curie';
    } else if (engine === 'text-babbage:001') {
      return 'Babbage';
    } else if (engine === 'text-ada:001') {
      return 'Ada';
    }
  }

  render() {
    return(
      <div className="answer-entry-container">
        <div className="engine-tag" style={{background: this.handleColor(this.props.entry.engine)}}>
          {this.handleName(this.props.entry.engine)}
        </div>
        <div>
          Prompt: {this.props.entry.prompt}
        </div>
        <div>
          Answer: {this.props.entry.answer}
        </div>
        <div>
          Asked {moment(this.props.entry.timestamp).startOf('second').fromNow()}
        </div>
      </div>
    );
  }
}

export default Entry;


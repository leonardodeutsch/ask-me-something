import React from "react";
import moment from 'moment';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="answer-entry-container">
        <div>
          Engine used: {this.props.entry.engine}
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
import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  static displayName = 'Demo';

  render() {
    const content = 'Hello World! ';
    const contentArr = content.split('');
    let newContent = '';
    for(word of contentArr) {
      newContent += word.repeat(3);
    }
    return (
      <div>
        {newContent}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('App'));

import React, { useState } from 'react';
import './App.css';

function Editor(state: any) {
  return (
    <div className="editor-container">
      <div className="editor-title">
        <p>Editor</p>
      </div>
      <textarea
        id="editor"
        onChange={(event) => {
          state.updateState(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

function MarkdownPreviewer(currentState: any) {
  let renderedMardown = (window as any).marked(currentState.currentState);

  return (
    <div className="preview-container">
      <div className="preview-title">
        <p>Preview</p>
      </div>

      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: renderedMardown,
        }}
      ></div>
    </div>
  );
}

function App() {
  const [unparsedMarkdown, updateMarkdown] = useState('*Hey* **there**!');

  return (
    <div className="App">
      <h1>Welcome Live Markdown!</h1>
      <Editor currentState={unparsedMarkdown} updateState={updateMarkdown} />
      <MarkdownPreviewer currentState={unparsedMarkdown} />
    </div>
  );
}

export default App;

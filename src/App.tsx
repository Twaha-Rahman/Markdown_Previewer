import React, { useState } from 'react';
import './App.css';

function Editor(currentState: any, updateState: any) {
  return (
    <div className="editor-container">
      <div className="editor-title">
        <p>Editor</p>
      </div>
      <textarea id="editor" cols={30} rows={10}></textarea>
    </div>
  );
}

function MarkdownPreviewer(currentState: any) {
  console.log(window, currentState);

  let renderedMardown = (window as any).marked(currentState.currentState);

  return (
    <div className="preview-container">
      <div className="preview-title">
        <h1>Preview</h1>
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
      <Editor currentState={unparsedMarkdown} updateMarkdown={updateMarkdown} />
      <MarkdownPreviewer currentState={unparsedMarkdown} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function Editor(state: any) {
  return (
    <div className="editor-container">
      <div className="title">
        <p>Editor</p>
      </div>
      <textarea
        id="editor"
        onChange={(event) => {
          state.updateState(event.target.value);
        }}
      >
        {state.currentState}
      </textarea>
    </div>
  );
}

function MarkdownPreviewer(currentState: any) {
  let renderedMardown = (window as any).marked(currentState.currentState);

  return (
    <div className="preview-container">
      <div className="title">
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
  const preMarkdown = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)`;

  const [unparsedMarkdown, updateMarkdown] = useState(preMarkdown);

  return (
    <div className="App">
      <h1>Live Markdown Previewer</h1>
      <Editor currentState={unparsedMarkdown} updateState={updateMarkdown} />
      <MarkdownPreviewer currentState={unparsedMarkdown} />
    </div>
  );
}

export default App;

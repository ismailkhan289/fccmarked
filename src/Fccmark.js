import React, { useState } from 'react';
import './Mark.css'
import {marked} from 'marked';

const Fccmark = () => {
  const [markdownText, setMarkdownText] = useState(' # Hello World # \n*hello world* \n\n**bold text example** \n\n An [example](http://url.com/ "Title")\n \n![alt text](/path/img.jpg "Title")\n\n');

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const getMarkdownAsHtml = () => {
    return { __html: marked(markdownText) };
  };

  return (
    
    <div className="container">
        <div id='topHeading'>
            <h2>Markdown Editor and Preview</h2>
        </div>
        <div id="app">
            <div id="textEditor">
                <div id='topbar'>
                    <span>Editor</span>
                </div>
                <textarea id='editor'
                value={markdownText}
                onChange={handleInputChange}
                placeholder="Enter your Markdown here..."
                />
            </div>
            <div id="preview">
            <div id='topbar'>
              <span>Preview</span>
                </div>
                <div dangerouslySetInnerHTML={getMarkdownAsHtml()} />
            </div>
      </div>
      <div id='footer'>Coded and Design by Ismail Khan</div>
    </div>
  );
};

export default Fccmark;

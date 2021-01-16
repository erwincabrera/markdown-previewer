import React, { useState } from "react";
import DOMPurify from "dompurify";
const marked = require("marked");

export const App = () => {
  const [textMd, setTextMd] = useState("sdfsdf");

  return (
    <>
      <textarea
        id="editor"
        value={textMd}
        onChange={(e) => setTextMd(e.target.value)}
      />
      <p
        id="preview"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(textMd)) }}
      ></p>
    </>
  );
};

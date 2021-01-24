import React, { useState } from "react";
import DOMPurify from "dompurify";
const marked = require("marked");
import image from "./image.jpg";

marked.setOptions({
  gfm: true,
  breaks: true,
});

const defaultText = `# Heading 1

## Heading 2

[Link](https://www.google.com)  

\`inline code\`

\`\`\`
a
code
block
\`\`\`

- List item 0
- List item 1
- List item 2

> A block quote

**bold text**

![Image](${image})
`;

export const App = () => {
  const [textMd, setTextMd] = useState(defaultText);

  return (
    <div className="app">
      <textarea
        id="editor"
        value={textMd}
        onChange={(e) => setTextMd(e.target.value)}
      />
      <p
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(textMd)) }}
      ></p>
    </div>
  );
};

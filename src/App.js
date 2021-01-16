import React, { useState } from "react";

export const App = () => {
  const [textMd, setTextMd] = useState("sdfsdf");

  return (
    <>
      <textarea
        id="editor"
        value={textMd}
        onChange={(e) => setTextMd(e.target.value)}
      />
      <p id="preview">{textMd}</p>
    </>
  );
};

import { useState } from "react";
import copy from "copy-to-clipboard";
import "./styles.css";

export default function App() {
  const [textvalue, setTextValue] = useState("");

  const copyToClipboard = () => {
    console.log(textvalue);
    copy(textvalue);
  };
  const cancel = () => {
    setTextValue("");
  };
  return (
    <div className="App">
      <h1>Clipboard Copy example</h1>
      <textarea
        rows="4"
        cols="50"
        onChange={(e) => setTextValue(e.target.value)}
        value={textvalue}
      ></textarea>
      <div>
        <button onClick={copyToClipboard}>Copy</button>
        <button onClick={cancel}>cancel</button>
      </div>
      <input type="text" placeholder="Paste value here" />
    </div>
  );
}

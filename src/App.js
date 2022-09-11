import { useState } from "react";
import reactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>
    </main>
  );
};

export default App;

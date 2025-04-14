// import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" min={1} />
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://example.com">
          A link
        </Button>
      </p>
    </main>
  );
}

export default App;

// import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" min={1} />
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://example.com">A link</Button>
      </p>
      <p>
        <Container as="section">
          <h2>Section Title</h2>
          <p>This is a section wrapped in a polymorphic component.</p>
        </Container>
        {/* or */}
        <Container as={Button} onClick={() => {}} type="button">
          Click me bitch
        </Container>
      </p>
    </main>
  );
}

export default App;

// import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" min={1} />
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://example.com">A link</Button>
      </p>
      <p>
        <Container as="section">
          <h2>Section Title</h2>
          <p>This is a section wrapped in a polymorphic component.</p>
        </Container>
        {/* or */}
        {/* <Container as={Button} onClick={() => {}} type="button">
          Click me bitch
        </Container> */}
      </p>

      <p>
        <Card title="My Card" actions={
          <Button el="button">Click me Dude</Button>
          // <Container as={Butt} onClick={() => console.log('Button clicked!')}>Click me</Container>
        }>
          <p>Some Content</p>
        </Card>
      </p>
    </main>
  );
}

export default App;

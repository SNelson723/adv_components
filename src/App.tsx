// import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";
import Form, { type FormHandle } from "./components/Form";
import { useRef } from "react";

type FormOutput = {
  name: string;
  age: string;
  option: string;
};

function App() {
  const input = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
  const form = useRef<FormHandle>(null);

  if (input.current && input2.current) {
    console.log(input.current.type);
    console.log(input2.current.type);
  }

  const handleSave = (value: unknown) => {
    const extractedData = value as FormOutput;
    console.log(extractedData);
    form.current?.clear();
  };

  return (
    <main>
      <div>
        <Button el="button">A button</Button>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <Button el="anchor" href="https://example.com">
          A link
        </Button>
      </div>
      <div>
        <Container as="section">
          <h2>Section Title</h2>
          <p>This is a section wrapped in a polymorphic component.</p>
        </Container>
      </div>

      <div>
        <Card
          title="My Card"
          actions={<Button el="button">Click me Dude</Button>}
        >
          <p>Some Content</p>
        </Card>
      </div>
      <div>
        <Form onSave={handleSave} ref={form}>
          <Input id="name" label="Name" type="text" ref={input} />
          <Input id="age" label="Age" type="number" ref={input2} />
          <select
            name="option"
            className="button"
            style={{ width: "100%", display: "block", marginBottom: "1rem" }}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
          <Button el="button" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default App;

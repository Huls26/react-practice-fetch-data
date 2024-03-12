import { useState } from "react";

export default function FormInput() {
  const [textValue, setTextValue] = useState();

  function handleTextInput(event) {
    const target = event.target;
    const value = target.value;

    setTextValue(() => value);
  }

  return (
    <form>
      <label htmlFor="display">Type text</label>
      <input type="text" id='display' name='display' onChange={handleTextInput} value={textValue} />
      <h1>{textValue}</h1>
    </form>
  )
}

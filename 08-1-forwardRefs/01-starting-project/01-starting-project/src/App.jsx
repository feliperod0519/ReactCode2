import { useRef } from "react";
import CustomInput from "./Component/CustomInput";

function App() {

  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current)
      inputRef.current.focus();
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Sandbox</h1>
        <p>
          ForwardRef
        </p>
      </header>
      <main>
        <h2>google AI</h2>
        <CustomInput label="Minou the cat" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </main>
    </div>
  );
}

export default App;

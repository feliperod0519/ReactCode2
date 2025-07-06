import Counter from "./components/Counter";
import { CounterProvider } from "./components/CounterProvider";

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Sandbox</h1>
        <p>
          How to combine useContext with useReducer
        </p>
      </header>
      <main>
        <h2>https://www.geeksforgeeks.org/reactjs/how-to-combine-usecontext-with-usereducer/</h2>
      </main>
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </div>
  );
}

export default App;

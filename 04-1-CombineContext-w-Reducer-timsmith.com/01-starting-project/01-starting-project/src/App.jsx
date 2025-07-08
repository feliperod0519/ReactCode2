import MyComponent from "./components/MyComponent";
import { MyContextProvider } from "./components/MyContextProvider";

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Sandbox</h1>
        <p>
          Using Reducers with Context in React
        </p>
      </header>
      <main>
        <h2>https://www.iamtimsmith.com/blog/using-reducers-with-context-in-react</h2>
      </main>
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>
    </div>
  );
}

export default App;

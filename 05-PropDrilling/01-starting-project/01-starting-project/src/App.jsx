import GrandChild from "./components/GrandChild";
import Parent from "./components/Parent";
import { UserContext } from "./components/UserContext";

function App() {

  const userName = 'Minou the Cat'

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Sandbox</h1>
        <p>
          Prop drilling
        </p>
      </header>
      <main>
        <h2>https://www.geeksforgeeks.org/reactjs/what-is-prop-drilling-and-how-to-avoid-it/</h2>
      </main>
      <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider>
    </div>
  );
}

export default App;

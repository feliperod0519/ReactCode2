import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Card from './components/Card.jsx';

function App() {
  
  console.log('APP COMPONENT EXECUTING');

  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <div>
        <Card
          headerContent={<h2>My Awesome Card</h2>}
          bodyContent={<p>This is the main content of the card.</p>}
          footerContent={<button>Learn More</button>}
        />

        <Card
          headerContent={<h3>Another Card</h3>}
          bodyContent={
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          }
          footerContent={<span>&copy; 2025</span>}
        />
      </div>
    </>
  );
}

export default App;

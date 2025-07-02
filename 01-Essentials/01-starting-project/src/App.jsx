import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data-with-examples.js';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic ] = useState()

  function handleSelect(selectedButton){
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  console.log('App component executing--> 1 time')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcepts key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcepts 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} 
                       onSelect={()=>handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} 
                       onSelect={()=>handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic==='props'} 
                       onSelect={()=>handleSelect('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic==='state'} 
                       onSelect={()=>handleSelect('state')}>
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p> }
          {selectedTopic && (
                                <div id="tab-content">
                                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                                  <p>{EXAMPLES[selectedTopic].description}</p>
                                  <pre>
                                    <code>
                                      {EXAMPLES[selectedTopic].code}
                                    </code>
                                  </pre>
                                </div>
                              )}         
        </section>
      </main>
    </div>
  );
}

export default App;

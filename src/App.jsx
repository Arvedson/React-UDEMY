//import ComponentsImg from "./assets/components.png"
import Header from "./components/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx"
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx"


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>      
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>  
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>

          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
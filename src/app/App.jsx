import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;

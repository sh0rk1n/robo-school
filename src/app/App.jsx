import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Perspective } from '../components/perspective/Perspective';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Perspective />
      </main>
    </div>
  );
}

export default App;

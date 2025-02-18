import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Perspective } from '../components/perspective/Perspective';
import { Coach } from '../components/coach/Coach';
import { Service } from '../components/service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Perspective />
        <Coach />
        <Service />
      </main>
    </div>
  );
}

export default App;

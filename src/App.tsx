import { useEffect, useState } from 'react';
import type { Technology } from './types/technology';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyList from './components/TechnologyList';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="tech" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Technologies
        </h2>

        {loading ? (
          <p>Loading technologies...</p>
        ) : (
          <TechnologyList technologies={technologies} />
        )}
        <StackSidebar />
      </section>
      <Footer />
    </>
  );
}

export default App;
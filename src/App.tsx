import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Technology } from './types/technology';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyList from './components/TechnologyList';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

function App() {

  // All technologies from JSON
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Technologies selected by the user
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);


  // Load technologies from JSON
  useEffect(() => {

    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => {

        setTechnologies(data);
        setLoading(false);

      })
      .catch((error) => {

        console.error('Error fetching data:', error);

        toast.error('Failed to load technologies data.');

        setLoading(false);

      });

  }, []);


  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {

    // Check if exist
    const isAlreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (isAlreadyAdded) {

      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    // Add technology
    setSelectedStack([
      ...selectedStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  // Remove single technology
  const handleRemoveFromStack = (
    id: string,
    name: string
  ) => {

    const updatedStack = selectedStack.filter(
      (item) => item.id !== id
    );

    setSelectedStack(updatedStack);

    toast.info(
      `${name} removed from your stack.`
    );
  };


  // Remove all technologies
  const handleClearAll = () => {

    setSelectedStack([]);

    toast.error(
      'All items removed from stack.'
    );
  };


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />


      {/* Header */}
      <Navbar />


      {/* Banner */}
      <Hero />


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Section Heading */}
        <div className="mb-6">

          <h2 className="text-2xl font-bold">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="text-slate-500 text-sm">
            Pick options per category to build your ideal stack.
          </p>

        </div>


        {/* Loading */}
        {loading ? (

          <div className="flex justify-center items-center py-20">

            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>

          </div>

        ) : (

          /* Technologies + Sidebar */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Technology Cards */}
            <div className="lg:col-span-3">

              <TechnologyList
                technologies={technologies}
                selectedStack={selectedStack}
                onAddToStack={handleAddToStack}
              />

            </div>


            {/* Your Stack */}
            <StackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />

          </div>

        )}

      </main>


      <Footer />

    </div>
  );
}

export default App;
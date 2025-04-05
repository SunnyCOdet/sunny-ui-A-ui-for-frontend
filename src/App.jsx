import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    // Apply dark theme globally
    <div className="dark">
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
           {/* The Dashboard component now contains the grid */}
           <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App

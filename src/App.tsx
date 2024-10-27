import React from 'react';
import CIRSAssistantTool from './components/CIRSAssistantTool';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-500 to-teal-700">
      <main className="flex-grow container mx-auto px-4 py-8">
        <CIRSAssistantTool />
      </main>
    </div>
  );
}

export default App;
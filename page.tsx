// app/page.tsx
'use client';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const generateMedia = async () => {
    setLoading(true);
    // We will connect this to Fal.ai or Replicate later!
    alert(`Generating AI media for: ${prompt}`);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
      <h1>My AI Generator</h1>
      <p>Credits remaining: <strong>5</strong></p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image or video you want to create..."
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '10px' }}
      />

      <button
        onClick={generateMedia}
        disabled={loading}
        style={{ padding: '15px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', width: '100%' }}
      >
        {loading ? 'Generating...' : 'Generate (Costs 1 Credit)'}
      </button>
    </div>
  );
}

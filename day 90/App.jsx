import React from 'react';


function Hero({ title, description, children }) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', marginBottom: '16px' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
     
      <Hero title="Hello" description="This is the first hero">
        <button>Click me</button>
      </Hero>

      <Hero title="Second hero" description="This one has two children">
        <p>Some text inside</p>
        <a href="#">Learn more</a>
      </Hero>
    </div>
  );
}

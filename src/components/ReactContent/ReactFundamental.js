import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ReactFundamentalsBlog = () => {
  // Functional Component Example
  const functionalComponentExample = `
import React, { useState } from 'react';

const UserProfile = () => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const updateProfile = () => {
    // Profile update logic
    setUsername('Jane Doe');
    setEmail('jane.doe@example.com');
  };

  return (
    <div className="user-profile">
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfile;`;

  // Hooks Example
  const hooksExample = `
import React, { useState, useEffect, useContext } from 'react';

const UserContext = React.createContext();

const UserDashboard = () => {
  // useState for managing state
  const [count, setCount] = useState(0);
  
  // useContext for consuming context
  const user = useContext(UserContext);
  
  // useEffect for side effects
  useEffect(() => {
    document.title = \`Clicks: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UserDashboard;`;

  return (
    <div className="max-w-4xl mx-auto p-6 prose lg:prose-xl">
      <h2 className="text-3xl font-bold mb-6">Mastering Modern Web Development with React</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p>React has revolutionized front-end web development with its component-based architecture and intuitive design. This comprehensive guide will explore the core fundamentals of React, providing insights into why it has become the most popular JavaScript library for building user interfaces.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What is React?</h3>
        <p>Developed and maintained by Facebook (now Meta), React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state with unprecedented ease and performance.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Key Architecture Principles</h3>
        <ol>
          <li><strong>Component-Based Architecture:</strong> Build encapsulated components that manage their own state</li>
          <li><strong>Declarative Design:</strong> Create simple views that update efficiently when data changes</li>
          <li><strong>Virtual DOM:</strong> Optimize rendering performance through intelligent updating</li>
          <li><strong>Unidirectional Data Flow:</strong> Predictable and easier to debug application state management</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Functional Component Example</h3>
        <p>Modern React emphasizes functional components with hooks, providing a clean and intuitive way to create components:</p>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {functionalComponentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">React Hooks Deep Dive</h3>
        <p>Hooks allow you to use state and other React features without writing a class component:</p>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {hooksExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Core Advantages of React</h3>
        <ul>
          <li><strong>Performance:</strong> Efficient update and rendering mechanism</li>
          <li><strong>Reusability:</strong> Component-based architecture promotes code reuse</li>
          <li><strong>Ecosystem:</strong> Rich set of libraries and tools</li>
          <li><strong>Community Support:</strong> Massive developer community and continuous improvements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Learning Path</h3>
        <p>To master React, focus on:</p>
        <ol>
          <li>JavaScript fundamentals</li>
          <li>Component lifecycle and hooks</li>
          <li>State management (useState, useReducer)</li>
          <li>Side effects (useEffect)</li>
          <li>Context and state management libraries</li>
          <li>Performance optimization techniques</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p>React continues to be a game-changer in web development, offering developers a powerful, flexible, and efficient way to build complex user interfaces. Its component-based approach and robust ecosystem make it an excellent choice for modern web applications.</p>
      </section>
    </div>
  );
};

export default ReactFundamentalsBlog;
import React, { useState, useEffect } from 'react';
import './index.scss';

// Import the detailed content component
import ReactFundamentalsBlog from '../ReactContent/ReactFundamental';
import ReactLifecycleBlog from '../ReactContent/ReactLifeCycle';
// Create a mapping of component IDs to their respective components
const DetailedContentComponents = {
  1: ReactFundamentalsBlog,
  3: ReactLifecycleBlog
  // Add more mappings as you create more detailed React content components
};

const ReactReactBlog = () => {
  // Content data structure focused on React
  const contentData = [
    {
      id: 1,
      title: 'React Fundamentals',
      content: 'React is a powerful JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and efficiently manage application state.',
      hasDetailedContent: true
    },
    {
      id: 2,
      title: 'State Management',
      content: 'State management in React involves tracking and updating component data. Hooks like useState and useReducer provide powerful ways to handle complex state logic in functional components.',
      diagram: `
flowchart LR
    A[useState Hook] --> B[Initial State]
    B --> C{State Changes}
    C --> |Update| D[Component Re-renders]
    C --> |Persist| E[useReducer for Complex State]
      `
    },
    {
      id: 3,
      title: 'Component Lifecycle',
      content: 'React components go through a lifecycle of mounting, updating, and unmounting. Understanding these phases helps developers control component behavior and optimize performance.',
      diagram: `
stateDiagram-v2
    [*] --> Mounting
    Mounting --> Updating
    Updating --> Unmounting
    Unmounting --> [*]
    note right of Mounting
        Constructor
        render()
        componentDidMount
    end note
    note right of Updating
        shouldComponentUpdate
        render()
        componentDidUpdate
    end note
    note right of Unmounting
        componentWillUnmount
    end note
      `
    },
    {
      id: 4,
      title: 'Hooks Deep Dive',
      content: 'React Hooks revolutionized functional components by allowing state and other React features without writing a class. Key hooks include useState, useEffect, useContext, and useReducer.',
      diagram: `
flowchart TB
    A[React Hooks] --> B[useState]
    A --> C[useEffect]
    A --> D[useContext]
    A --> E[useReducer]
    B --> F[Manage Component State]
    C --> G[Side Effects Management]
    D --> H[Context API Integration]
    E --> I[Complex State Logic]
      `
    }
  ];

  // Initialize theme from sessionStorage, default to 'light' if not set
  const [theme, setTheme] = useState(() => {
    const savedTheme = sessionStorage.getItem('app-theme');
    return savedTheme || 'light';
  });

  const [selectedContent, setSelectedContent] = useState(contentData[0]);

  // Theme toggle effect with sessionStorage
  useEffect(() => {
    // Update body class for theme
    document.body.className = `${theme}-theme`;
    
    // Save theme to sessionStorage
    sessionStorage.setItem('app-theme', theme);
  }, [theme]);

  // Handle item selection
  const handleItemSelect = (item) => {
    setSelectedContent(item);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // Directly save to sessionStorage
      sessionStorage.setItem('app-theme', newTheme);
      return newTheme;
    });
  };

  // Render content based on detailed content or default
  const renderContent = () => {
    // Check if there's a detailed component for this content
    const DetailedComponent = DetailedContentComponents[selectedContent.id];

    return (
      <>
        <h2 className="content-title">{selectedContent.title}</h2>
        <div className="content-underline"></div>
        
        {/* Render detailed component if exists, otherwise render default content */}
        {DetailedComponent ? (
          <DetailedComponent theme={theme} /> // Pass theme to detailed components
        ) : (
          <p className="content-description">{selectedContent.content}</p>
        )}
      </>
    );
  };

  return (
    <div className="split-page-container">
      {/* Theme Toggle Button */}
      <button 
        className="mode-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Left Panel - Content List */}
      <div className="left-panel">
        {contentData.map((item) => (
          <div 
            key={item.id}
            className={`content-list-item ${selectedContent.id === item.id ? 'selected' : ''}`}
            onClick={() => handleItemSelect(item)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Right Panel - Selected Content */}
      <div className="right-panel">
        {renderContent()}
      </div>
    </div>
  );
};

export default ReactReactBlog;
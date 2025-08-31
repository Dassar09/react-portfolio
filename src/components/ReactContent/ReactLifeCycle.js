import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ReactLifecycleBlog = () => {
  const classComponentLifecycle = `
class UserProfile extends React.Component {
  // Mounting Phase
  constructor(props) {
    super(props);
    this.state = { user: null };
    console.log('Constructor called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Component mounted');
    // Fetch user data
    this.fetchUserData();
  }

  // Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component updated');
    // Perform side effects after update
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('Component will unmount');
    // Clean up subscriptions, timers
  }

  render() {
    console.log('Render method called');
    return <div>{/* Component UI */}</div>;
  }
}`;

  const functionalComponentLifecycle = `
import React, { 
  useState, 
  useEffect, 
  useCallback, 
  useMemo 
} from 'react';

function UserProfile({ userId }) {
  // State Hook - Replaces this.state
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect Hook - Combines componentDidMount, 
  // componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    // Runs after render
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    // Cleanup function - similar to componentWillUnmount
    return () => {
      // Cancel any ongoing requests or subscriptions
      console.log('Cleanup on component unmount');
    };
  }, [userId]); // Dependency array - reruns effect if userId changes

  // Memoized callback
  const handleUpdateProfile = useCallback(() => {
    // Update profile logic
  }, [user]);

  // Memoized value
  const processedUserData = useMemo(() => {
    return user ? {
      fullName: \`\${user.firstName} \${user.lastName}\`,
      age: calculateAge(user.birthDate)
    } : null;
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {processedUserData && (
        <h1>{processedUserData.fullName}</h1>
      )}
    </div>
  );
}`;

  const hooksComparisonTable = `
| Lifecycle Method     | Class Component            | Functional Component Equivalent           |
|----------------------|----------------------------|-------------------------------------------|
| constructor          | constructor()              | useState()                                |
| componentDidMount    | componentDidMount()        | useEffect(() => {}, [])                   |
| componentDidUpdate   | componentDidUpdate()       | useEffect(() => {}, [dep])                |
| componentWillUnmount | componentWillUnmount()     | useEffect(() => { return () => {} }, [])  |
| shouldComponentUpdate| shouldComponentUpdate()    | React.memo() / useMemo()                  |`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        React Component Lifecycle: From Class to Functional Components
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Class Component Lifecycle</h2>
        <p className="mb-4">
          Traditional React class components have a complex lifecycle with multiple 
          methods that run at different stages of a component's existence.
        </p>

        <SyntaxHighlighter language="typescript" style={materialDark}>
          {classComponentLifecycle}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Functional Components with Hooks</h2>
        <p className="mb-4">
          Modern React leverages hooks to manage component lifecycle and state 
          in a more concise and flexible manner.
        </p>

        <SyntaxHighlighter language="typescript" style={materialDark}>
          {functionalComponentLifecycle}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Lifecycle Methods Comparison</h2>
        <p className="mb-4">
          Here's a quick comparison between class component lifecycle methods 
          and their functional component equivalents:
        </p>

        <SyntaxHighlighter language="markdown" style={materialDark}>
          {hooksComparisonTable}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Lifecycle Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Mounting:</strong> Initial rendering of a component
          </li>
          <li>
            <strong>Updating:</strong> Re-rendering due to state or prop changes
          </li>
          <li>
            <strong>Unmounting:</strong> Removing a component from the DOM
          </li>
          <li>
            <strong>Hooks:</strong> Provide a more flexible way to use 
            lifecycle features in functional components
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ReactLifecycleBlog;
import React from 'react';
import Layout from './Layout';
const LazyComponent = React.lazy(() => import('./ConsoleWindow'));

import "./../assets/scss/App.scss";
import reactLogo from "./../assets/img/react_logo.svg";


const App = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [spinnerChar, setSpinnerChar] = React.useState<string>("|");

  const pages = {
      1: [
        "Open Network Spirituality",
      ],
      2: [
        "Open Network Spirituality",
        "Copywrite (C) 2007 好きです。",
        "AFK Max L1 R1 06 Nov. 19 2006 An Immutable Star Ally",
        "",
        "Installing...",
      ]
  };

  const totalPages = Object.keys(pages).length;

  React.useEffect(() => {
      setMessages(pages[currentPage]);
  }, [currentPage]);

  React.useEffect(() => {
    if (currentPage >= totalPages) return; // Stop when on the last page
      const timer = setTimeout(() => {
          setCurrentPage(prevPage => prevPage + 1);
      }, 2000); // Switch page every 10 seconds

      return () => clearTimeout(timer);
  }, [currentPage, totalPages]);

  React.useEffect(() => {
    const spinnerChars = ["|", "/", "-", "\\"];
    let currentCharIndex = 0;
    
    const spinnerInterval = setInterval(() => {
        currentCharIndex = (currentCharIndex + 1) % spinnerChars.length;
        setSpinnerChar(spinnerChars[currentCharIndex]);
    }, 300); // Adjust this duration for the speed of spinner change

    return () => clearInterval(spinnerInterval);
  }, []);

  return (
      <Layout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent messages={[...messages, spinnerChar]} />
          </React.Suspense>
      </Layout>
  );
};

export default App;
import React, { useState, useEffect } from 'react';

const Donate = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen % 3) + 1);
    }, 3000); // Change screen every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const content = {
    1: {
      title: 'FundMyFuture Foundation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fermentum urna. Nulla fringilla, quam id euismod interdum.',
      buttonText: 'Donate',
    },
    2: {
      title: 'Empower Children',
      description: 'Ut fringilla, dolor sed efficitur lobortis, ex est mattis nisl, ac tincidunt ligula tortor id sapien. Quisque vitae rutrum neque.',
      buttonText: 'Donate',
    },
    3: {
      title: 'Change Lives',
      description: 'Pellentesque et ante nisl. Vivamus elementum nunc ac rutrum lacinia. In cursus vestibulum vestibulum. Phasellus ut lectus metus.',
      buttonText: 'Donate',
    },
  };

  const donateContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
    border: '1px solid #ccc', // Add border
  };

  const donateScreenStyle = {
    display: 'none',
    textAlign: 'center',
    transition: 'opacity 0.5s ease',
  };

  const activeScreenStyle = {
    display: 'block',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    margin: '5px',
  };

  return (
    <div style={donateContainerStyle}>
      {Object.keys(content).map((screen) => (
        <div
          key={screen}
          style={{
            ...donateScreenStyle,
            ...(currentScreen === parseInt(screen) ? activeScreenStyle : {}),
          }}
        >
          <h2>{content[screen].title}</h2>
          <p>{content[screen].description}</p>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle}>{content[screen].buttonText}</button>
            <button style={buttonStyle}>Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donate;

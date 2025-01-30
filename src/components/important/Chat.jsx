import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    if (!window.Tawk_API) {  // Prevents duplicate script loading
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/679778e53a842732607557cc/1iijr0gmd';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    }
  }, []);

  return null; // No UI needed, since Tawk.to handles it
};

export default Chat;

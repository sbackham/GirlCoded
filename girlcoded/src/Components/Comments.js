import React, { useEffect, useState } from 'react';
import { observeAuthState, signOutUser } from '../authService';

const Comments = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.commentBox('5706269499326464-proj');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = observeAuthState(setUser);
    return unsubscribe; // Unsubscribe on unmount
  }, []);

  return (
    <div>

        <div className="commentbox">
          {/* Render comment box for logged-in users */}

        </div>
      )}
    </div>
  );
};

export default Comments;

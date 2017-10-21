import React from 'react';
import './Loading.css'

export default function Loading({isLoading, error}) {
  // Handle the loading state
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};
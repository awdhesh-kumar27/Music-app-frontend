import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './NotificationBar.css';

function NotificationBar() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);
  var colorlist = ['secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'];
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setShow(false);
          return 0;
        }
        return prev - 1;
      });
    },50); // Decrease progress every 100ms

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  if (!show) return null;

  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <>
        <Alert key={variant} variant={variant} style={{width:'300px',position:'absolute',top:'80%',left:'80%'}}>
          This is a  alert—check it out!
          <ProgressBar  variant={variant} now={progress}  />
        </Alert>
      
        </>
      ))}
    </>
  );
}

export default NotificationBar;

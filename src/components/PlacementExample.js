import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlacementExample() {
  useEffect(() => {
    handleToast();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleToast = () => {
    toast.info('Hello! FOSSEE Team.', {
      position: 'bottom-left',
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: true, // Hide the progress bar
    });
  };

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default PlacementExample;

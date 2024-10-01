import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAdminProtection = (WrappedComponent: React.FC) => {
  const ProtectedComponent: React.FC = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Perform any necessary checks here
      // Navigate if user isn't supposed to be here (for now, assume everyone is an admin)
      // Example:
      // if (!isAdmin) {
      //   navigate("/");
      // }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withAdminProtection;

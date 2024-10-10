import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorised = () => {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirecting(true);
    }, 1500);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);
  return (
    <div>
      <p>401 You are not authorised to access this content. Please log in</p>
      {redirecting && <div>Redirecting to login page</div>}
    </div>
  );
};

export default NotAuthorised;

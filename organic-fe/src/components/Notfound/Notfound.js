import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/error');
  }, [navigate]);

  return null;
}
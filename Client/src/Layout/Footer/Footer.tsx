import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <p
        onClick={() => {
          navigate("/about");
        }}
      >
        create by diemond groop &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

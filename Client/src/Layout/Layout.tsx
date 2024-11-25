import Footer from "../Layout/Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
// import Users from "./Main/User/Users"

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="app-container">
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  );
};

export default Layout;

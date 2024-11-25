import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Puzzles app</h1>
        {userContext?.user && <ProfileComp />}
        <div className="login_register">
          <button
            onClick={async () => {
              if (userContext?.user) {
                await getFatch();
                userContext.setUser(null);
              } else {
                navigate("/login");
              }
            }}
          >
            {userContext?.user ? "logout" : "login"}
          </button>
          <button>
            <Link to={"/addNewUser"}></Link>register
          </button>
        </div>

        <div className="navlink">
          <NavLink to={"/Welcome"}>Welcome</NavLink>
          <NavLink to={"/"}>EinsTalk</NavLink>
          <NavLink to={"/Puzzle"}>Puzzle</NavLink>
          <NavLink to={"/Profile"}>Profile</NavLink>
          <NavLink to={"/Users"}>Users</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;

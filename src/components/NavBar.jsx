import profile_icon from "../assets/profile_icon.png";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div className="navbar bg-base-200 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Let's Connect</a>
          </div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-4"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile logo" src={profile_icon} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

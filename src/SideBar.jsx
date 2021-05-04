export default function SideBar() {
    return (
        <div className="sidebar">
   
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="" className="simple-text logo-mini">
              CT
            </a>
            <a href="" className="simple-text logo-normal">
              Creative Tim
            </a>
          </div>
          <ul className="nav">
            <li className="active ">
              <a href="./dashboard.html">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="./icons.html">
                <i className="tim-icons icon-atom"></i>
                <p>Icons</p>
              </a>
            </li>
            <li>
              <a href="./map.html">
                <i className="tim-icons icon-pin"></i>
                <p>Maps</p>
              </a>
            </li>
            <li>
              <a href="./notifications.html">
                <i className="tim-icons icon-bell-55"></i>
                <p>Notifications</p>
              </a>
            </li>
            <li>
              <a href="./user.html">
                <i className="tim-icons icon-single-02"></i>
                <p>User Profile</p>
              </a>
            </li>
            <li>
              <a href="./tables.html">
                <i className="tim-icons icon-puzzle-10"></i>
                <p>Table List</p>
              </a>
            </li>
            <li>
              <a href="./typography.html">
                <i className="tim-icons icon-align-center"></i>
                <p>Typography</p>
              </a>
            </li>
            <li>
              <a href="./rtl.html">
                <i className="tim-icons icon-world"></i>
                <p>RTL Support</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="./upgrade.html">
                <i className="tim-icons icon-spaceship"></i>
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
        </div>    
  
      </div>
    )
}
import NavItem from './NavItem';

function SideBar(){
    {
        return (
      <nav className="sidebar">
        <div className="sidebar-logo">
          <span>Instagram</span>
        </div>
        <ul className="sidebar-links">
          <NavItem />
          <NavItem />
          <NavItem />
        </ul>
      </nav>
    );
    }
}
export default SideBar;
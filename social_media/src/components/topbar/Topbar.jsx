import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
export default function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">NoyonSocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search your friend post" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <div className="topbarLink">Homepage</div>
            <div className="topbarLink">TimeLine</div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadg">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadg">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadg">1</span>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>
        </div>
      </div>
    </>
  );
}

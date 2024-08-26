import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
// import MenuIcon from "@mui/icons-material/Menu";
// import RestoreIcon from "@mui/icons-material/Restore";
import git from "../assets/git.svg";
import versionImage from "../assets/version.svg";
import MenuIcon from "../assets/MenuIcon.svg";
import Frame from "../assets/Frame.svg";
const Leftpanel = () => {
  return (
    <div className="bg-[#363636]  h-screen">
      <div className="flex flex-col justify-between items-center h-screen  ">
        <div className=" pt-2 flex flex-col items-center text-white">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="pt-10 cursor-pointer">
            {/* <MenuIcon /> */}
            <img src={MenuIcon} alt="menu-icon" />
          </div>
          <div className="pt-8 cursor-pointer">
            {/* <RestoreIcon /> */}
            <img src={Frame} alt="frame" />
          </div>

          <div className="pt-8 cursor-pointer">
            <img src={git} alt="git" />
          </div>
          <div className="pt-8 cursor-pointer">
            <img src={versionImage} alt="version" />
          </div>
        </div>
        <div className="pb-8">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Leftpanel;

import Notifications from "./Notifications";
import Search from "./Search";
import Home from "./home";
import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;

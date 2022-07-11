import {
  Counter,
  Image,
  Item,
  Items,
  Navbar,
  Search,
  SearchInput,
  Wrapper,
} from "./AdminNavbar.styles";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const AdminNavbar = () => {
  return (
    <Navbar>
      <Wrapper>
        <Search>
          <SearchInput type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </Search>
        <Items>
          <Item>
            <LanguageOutlinedIcon />
            Enlgish
          </Item>
          <Item>
            <DarkModeOutlinedIcon />
          </Item>
          <Item>
            <FullscreenExitOutlinedIcon />
          </Item>
          <Item>
            <NotificationsOffOutlinedIcon />
            <Counter>1</Counter>
          </Item>
          <Item>
            <ChatBubbleOutlineOutlinedIcon />
            <Counter>2</Counter>
          </Item>
          <Item>
            <ListOutlinedIcon />
          </Item>
          <Item>
            <Image
              src="https://i1.sndcdn.com/avatars-xK2cS4dDrz8LNke4-X4YlUw-t500x500.jpg"
              alt="User logo"
            />
          </Item>
        </Items>
      </Wrapper>
    </Navbar>
  );
};

export default AdminNavbar;

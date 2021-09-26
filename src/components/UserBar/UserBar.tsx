import UserData from '../../data/User.data';
import { getUserInitial } from '../../constants/getUserInitials';
import { getWelcomeMsg } from '../../constants/getWelcomeMsg';
import { AiOutlineUser } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { UserBarContainer, UserInitial, UserWelcome } from './UserBar.styles';

const UserBar = () => {
  const activeUser = UserData.find((user) => user._id === '00001');

  return (
    <UserBarContainer>
      <UserInitial>{activeUser ? getUserInitial(activeUser) : <AiOutlineUser />}</UserInitial>
      <UserWelcome>
        <span>{getWelcomeMsg()},</span>
        <span>{activeUser?.name}</span>
        <span className="arrowDown">
          <RiArrowDownSLine />
        </span>
      </UserWelcome>
    </UserBarContainer>
  );
};

export default UserBar;

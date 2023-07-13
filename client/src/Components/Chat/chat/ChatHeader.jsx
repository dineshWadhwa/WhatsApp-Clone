import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { useAccountContext } from '../../Context/AccountProvider';
import { emptyProfilePicture } from '../../Constants/data';

const Header = styled(Box)`
    height: 40px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
  width: 40,
  height: 40,
  objectFit: 'cover',
  borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({ person }) => {

  const url = person.picture || emptyProfilePicture;

  const { activeUsers } = useAccountContext();

  return (
    <Header>
      <Image src={url} alt="display picture" />
      <Box>
        <Name>{person.name}</Name>
        {/* <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>     */}
        <Status>Offline</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  )
}

export default ChatHeader;
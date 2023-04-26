import { useDispatch } from "react-redux";
import { toggleFollow } from "../../redux/operations";
import logo from "../../images/logo.png";
import bg from "../../images/bg.png";
import {
  Background,
  Logo,
  CardWrapper,
  UserAvatarWrapper,
  UserAvatar,
  Tweet,
  Follower,
  Btn,
} from "./TweetCard.styled";

const TweetCard = ({
  user: { id, user, tweets, followers, avatar, follow },
}) => {
  const dispatch = useDispatch();

  const handleFollowToggle = () => {
    dispatch(toggleFollow(id));
  };

  return (
    <>
      <Background src={bg} alt="avatar" />
      <Logo src={logo} alt="Logo" />
      <CardWrapper />
      <UserAvatarWrapper>
        <UserAvatar src={avatar} alt={`Avatar of ${user.name}`} />
      </UserAvatarWrapper>
      <Tweet>{`${tweets.toLocaleString("en-US")} tweets`}</Tweet>
      <Follower>{`${(followers + 100000).toLocaleString(
        "en-US"
      )} followers`}</Follower>
      <Btn follow={follow} onClick={handleFollowToggle}>
        {follow ? "Following" : "Follow"}
      </Btn>
    </>
  );
};

export default TweetCard;

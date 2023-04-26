import TweetCard from "../TweetCard/TweetCard";
import { List, Card } from "./TweetCardList.styled";

const TweetCardList = ({ users }) => {
  return (
    <>
      <List>
        {users.map((user) => (
          <Card key={user.id}>
            <TweetCard user={user} />
          </Card>
        ))}
      </List>
    </>
  );
};

export default TweetCardList;

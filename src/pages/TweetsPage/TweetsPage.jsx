import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "../../redux/operations";
import {
  selectVisibleUsers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import  TweetCardList  from "../../components/TweetCardList/TweetCardList";
import  BackBtn  from "../../components/BackBtn/BackBtn";
import  FilterStatus  from "../../components/FilterStatus/FilterStatus";
import  { Loader }  from "../../components/Loader/Loader";
import { LoadMoreBtn } from "./TweetsPage.styled";
// Loader, FilterStatus, BackBtn


const TweetsPage = () => {
  const [visible, setVisible] = useState(3);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectVisibleUsers);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <>
      <BackBtn to={backLinkHref}>Go back</BackBtn>
      <FilterStatus />
      <TweetCardList users={users.slice(0, visible)} />
      {isLoading && !error && <Loader />}
      {visible < users.length && (
        <LoadMoreBtn onClick={showMoreItems}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default TweetsPage;

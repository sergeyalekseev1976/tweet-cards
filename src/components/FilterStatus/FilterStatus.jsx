import { useSelector, useDispatch } from "react-redux";
import { Wrapper, FilterBtn } from "./FilterStatus.styled";
import { status } from "../../redux/constants";
import { selectFilterStatus } from "../../redux/selectors";
import { setFilterStatus } from "../../redux/filterSlice";

const FilterStatus = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterStatus);

  const handleFilterChange = (filter) => dispatch(setFilterStatus(filter));

  return (
    <>
      <Wrapper>
        <FilterBtn
          selected={filter === status.all}
          onClick={() => handleFilterChange(status.all)}
        >
          show all
        </FilterBtn>
        <FilterBtn
          selected={filter === status.follow}
          onClick={() => handleFilterChange(status.follow)}
        >
          follow
        </FilterBtn>
        <FilterBtn
          selected={filter === status.followings}
          onClick={() => handleFilterChange(status.followings)}
        >
          followings
        </FilterBtn>
      </Wrapper>
    </>
  );
};

export default FilterStatus;

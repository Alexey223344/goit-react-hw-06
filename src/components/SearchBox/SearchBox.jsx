import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearchUser = (event) => {
    const form = event.target;
    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div>
      <label>Find contact by name
        <input type='text' onChange={handleSearchUser}/>
      </label>
    </div>
  );
};
export default SearchBox;

import { useDispatch } from "react-redux";
import { delContact } from "../../redux/contactsSlice";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelContactUser = () => {
    dispatch(delContact(user.id));
  };
  return (
    <>
      <div>
        <p>Name:{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
        <p>Phone:{user.number}</p>
      </div>
      <button type="button" onClick={handleDelContactUser}></button>
    </>
  );
};
export default Contact;

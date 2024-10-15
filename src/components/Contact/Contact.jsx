import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelContactUser = () => {
    dispatch(deleteContact(user.id));
  };
  return (
    <>
      <div>
        <p>Name:{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
        <p>Phone:{user.number}</p>
      </div>
      <button type="button" onClick={handleDelContactUser}>Delete</button>
    </>
  );
};
export default Contact;

import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlise";
import Contact from "../Contact/Contact";


const ContactList = () => {
  const userContacts = useSelector(selectContacts);
  const searchUsers = useSelector(selectNameFilter);
  const filteredContacts = userContacts.filter((item) =>
    item.name.toLowerCase().includes(searchUsers)
  );
  return (
    <div>
      <ul>
        {filteredContacts.map((user) => (
          <li key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

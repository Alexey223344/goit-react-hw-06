import { useSelector } from "react-redux";
import { nameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const userContacts = useSelector(selectContacts);
  const searchUsers = useSelector(nameFilter);
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [serchUser, setSerchUser] = useState("");
  const contactsData = useSelector((state) => state.contacts.item);
  useEffect(() => {
    localStorage.setItem("contactsUser", JSON.stringify(contactsData));
  }, [contactsData]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox serchUser={serchUser} setSerchUser={setSerchUser} />
      <ContactList />
    </div>
  );
};
export default App;

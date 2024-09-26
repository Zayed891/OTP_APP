import contacts from '../data/contacts.json';
import { useNavigate } from 'react-router-dom';

const ContactsList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li
            key={contact.id}
            className="p-2 border-b cursor-pointer"
            onClick={() => navigate(`/contact/${contact.id}`)}
          >
            {contact.firstName} {contact.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

import { useParams, useNavigate } from 'react-router-dom';
import contacts from '../data/contacts.json';

const ContactInfo = () => {
  const { id } = useParams();
  const contact = contacts.find(c => c.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{contact.firstName} {contact.lastName}</h2>
      <p>Phone: {contact.phone}</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white" 
        onClick={() => navigate(`/message/${id}`)}>
        Send Message
      </button>
    </div>
  );
};

export default ContactInfo;

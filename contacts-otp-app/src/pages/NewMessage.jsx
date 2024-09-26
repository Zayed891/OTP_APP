import { useState } from 'react';
import contacts from '../data/contacts.json';
import { useParams } from 'react-router-dom';

const NewMessage = ({ setMessages }) => {
  const { id } = useParams();
  const contact = contacts.find(c => c.id === parseInt(id));
  const [otp, setOtp] = useState(Math.floor(100000 + Math.random() * 900000));

  const sendOTP = async () => {
    const message = `Hi. Your OTP is: ${otp}`;
    try {
      // Send OTP via SMS API (Twilio, etc.)
      alert(`Message sent to ${contact.phone}: ${message}`);
      setMessages(prevMessages => [
        ...prevMessages,
        { contactName: `${contact.firstName} ${contact.lastName}`, time: new Date().toISOString(), otp }
      ]);
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="p-4">
      <h2>Send OTP to {contact.firstName} {contact.lastName}</h2>
      <textarea 
        className="w-full p-2 border mt-2" 
        value={`Hi. Your OTP is: ${otp}`}
        readOnly
      />
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white" 
        onClick={sendOTP}>
        Send
      </button>
    </div>
  );
};

export default NewMessage;

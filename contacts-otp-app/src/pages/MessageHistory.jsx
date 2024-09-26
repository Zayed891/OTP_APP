const MessageHistory = ({ messages }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Message History</h1>
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx} className="p-2 border-b">
              {msg.contactName} - {new Date(msg.time).toLocaleString()} - OTP: {msg.otp}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MessageHistory;
  
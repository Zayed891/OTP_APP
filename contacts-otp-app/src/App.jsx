import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsList from './pages/ContactsList';
import ContactInfo from './pages/ContactInfo';
import NewMessage from './pages/NewMessage';
import MessageHistory from './pages/MessageHistory';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/message/:id" element={<NewMessage setMessages={setMessages} />} />
        <Route path="/history" element={<MessageHistory messages={messages} />} />
      </Routes>
    </Router>
  );
};

export default App;


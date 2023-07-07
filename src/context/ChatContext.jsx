/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const defaultChatState = {
		id: '',
		username: '',
		country: '',
		userRole: '',
		img: '',
	};
	const [userToChat, setUserToChat] = useState(defaultChatState);
	const [myChatId] = useState('myId');
	const [messages, setMessages] = useState([1, 2, 3]);

	const updateChat = (value) => {
		setUserToChat({ ...userToChat, ...value });
	};

	// const latestMessage = () => {
	// 	setGetRecentMessage(!getRecentMessage);
	// };

	return (
		<ChatContext.Provider
			value={{
				defaultChatState,
				userToChat,
				myChatId,
				messages,
				setMessages,
				updateChat,
				// latestMessage,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
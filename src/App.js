import React, { useEffect, useRef } from "react";
import Talk from "talkjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyNetworkPage from "./pages/MyNetworkPage";
import MessagingPage from "./pages/MyNetworkPage";
import "./App.scss";
// export default function App() {
//   const inboxRef = useRef(null);

//   useEffect(() => {
//     // Promise can be `then`ed multiple times
//     Talk.ready
//       .then(() => {
//         const me = new Talk.User({
//           id: "12345231",
//           name: "George Looney",
//           email: "george@looney.net",
//           photoUrl: "https://talkjs.com/docs/img/george.jpg",
//           welcomeMessage: "Hey there! How are you? :-)",
//         });

//         if (!window.talkSession) {
//           window.talkSession = new Talk.Session({
//             appId: "t1lPDdDR", // Replace with your actual TalkJS app ID
//             me: me,
//           });
//         }

//         const other = new Talk.User({
//           id: "54321",
//           name: "Ronald Raygun",
//           email: "ronald@teflon.com",
//           photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
//           welcomeMessage: "Hey there! Love to chat :-)",
//         });

//         // You control the ID of a conversation. oneOnOneId is a helper method that generates
//         // a unique conversation ID for a given pair of users.
//         const conversationId = Talk.oneOnOneId(me, other);

//         const conversation =
//           window.talkSession.getOrCreateConversation(conversationId);
//         conversation.setParticipant(me);
//         conversation.setParticipant(other);

//         const inbox = window.talkSession.createInbox({
//           selected: conversation,
//         });
//         inbox.mount(inboxRef.current);

//         return () => {
//           inbox.destroy();
//         };
//       })
//       .catch((e) => console.error(e));
//   }, []);

//   return (
//     <div className="App">
//       {" "}
//       {/* Add any styling classes here */}
//       <div style={{ height: "500px" }} ref={inboxRef}>
//         Loading...
//       </div>
//     </div>
//   );
// }
// function App() {
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/my-network" element={<MyNetworkPage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/messaging" element={<MessagingPage />} />
//     </Routes>
//   </BrowserRouter>;
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/my-network" element={<MyNetworkPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

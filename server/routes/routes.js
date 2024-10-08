import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation, getConversation } from "../controller/conversation-controller.js";
import { getMessages, newMessage } from "../controller/message-controller.js";

const route = express.Router();

// For User
route.post("/add", addUser);
route.get("/users", getUsers);

// For Conversations and Messages
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

export default route;

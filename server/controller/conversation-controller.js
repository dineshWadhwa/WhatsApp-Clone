import Conversation from "../modal/Conversation.js";

export const newConversation = async (req, res) => {
  const { body } = req;
  try {
    const senderID = body.senderId
    const receiverId = body.receiverId

    let exist = await Conversation.findOne({ members: { $all: [receiverId, senderID] } })

    if (exist) {
      res.status(200).json({ message: 'Conversation already exists' })
    } else {
      const newConversation = new Conversation({
        members: [senderID, receiverId]
      })
      await newConversation.save();
      res.status(200).json({ message: 'Conversation saved Successfully' })
    }

  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getConversation = async (req, res) => {
  const { body } = req;
  try {
    const senderID = body.senderId
    const receiverId = body.receiverId
    let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderID] } })
    res.status(200).json(conversation)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
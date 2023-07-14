import Conversation from "../modal/Conversation.js"
import Message from "../modal/Message.js"

export const newMessage = async (req, res) => {
  const { body } = req
  try {
    const newMessage = new Message(body)

    await newMessage.save();
    await Conversation.findByIdAndUpdate(body.conversationId, { message: body.text })

    return res.status(200).json({ message: 'Message saved Successfully' })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id })
    return res.status(200).json(messages)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

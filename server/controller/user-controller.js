import User from "../modal/User.js";

export const addUser = async (req, res) => {
  const { body } = req;

  try {
    let exist = await User.findOne({ sub: body.sub })

    if (exist) {
      res.status(200).json({ message: 'User already exist' })
    } else {
      const newUser = new User(body)
      await newUser.save();
      res.status(200).json({ message: 'User Login Successfully' })
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}
export const getUsers = async (req, res) => {
  try {
    let users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
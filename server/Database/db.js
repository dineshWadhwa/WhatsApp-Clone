import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatspp-clone.0pxuqsz.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true })
    console.log('DataBAse connexted succesfully');
  } catch (error) {
    console.log('DAtabase connection error', error);
  }
}
export default Connection; 
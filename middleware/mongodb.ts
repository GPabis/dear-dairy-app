import mongoose from 'mongoose';
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';

const connectDB = (handler:(req:NextApiRequest, res:NextApiResponse) => void)=> async (req:NextApiRequest, res:NextApiResponse) => {
  const url = process.env.MONGODB_URL ? process.env.MONGODB_URL : '';
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
}

export default connectDB;
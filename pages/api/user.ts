import connectDB from '../../middleware/mongodb';
import User from '../../models/user';
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

const userHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
          const hashedPassword = await bcrypt.hash(password, 12);
          const user = new User({
            name,
            email,
            password: hashedPassword,
          });
          const usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          
          return res.status(500).send({err: error.message, dupa:'dupa'});
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(userHandler);
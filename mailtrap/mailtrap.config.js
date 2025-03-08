import Nodemailer from 'nodemailer';

import dotenv from 'dotenv';

dotenv.config();

export const transport = Nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDINBLUE_USERNAME,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
});

export const sender = {
  address: 'mohamedbasyonydawood@gmail.com',
  name: 'Mailtrap Test',
};

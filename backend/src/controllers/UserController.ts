import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [
  { name: 'Diego', email: 'diego@rocketseat.com.br' },
  { name: 'André', email: 'andre@gmail.com.br' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async store(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'André Zagatti',
        email: 'andre@gmail.com.br'
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo!'
      }
    });

    return res.send();
  }
};

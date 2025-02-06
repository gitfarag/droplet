import { Injectable } from '@nestjs/common';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SPACE_EMAIL_HOST,
      port: process.env.SPACE_EMAIL_PORT,
      secure: true, // or 'STARTTLS'
      auth: {
        user: process.env.SPACE_EMAIL_USER,
        pass: process.env.SPACE_EMAIL_PASSWORD,
      }
    })
  }
  // Method to send email
  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'tech@ahmedfarag.info', // Sender address
      to, // Recipient address
      subject, // Subject
      html: `
      <h1>Welcome to Our Service!</h1>
      <p>Hi there,</p>
      <p>We're thrilled to have you on board. Thank you for signing up for our service!</p>
      <p>If you have any questions, feel free to contact us anytime.</p>
      <p>Best regards,<br>The Team</p>
      <div class=""signature>
      <p>John Doe</p>
      <p>Customer Support</p>
      <p>Company XYZ</p>
      <p>Email: john.doe@company.com</p>
      <p>Phone: +1 234 567 890</p>
      </div>
    `, // Plain text body
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  findAll() {
    return `This action returns all mailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailer`;
  }

  update(id: number, updateMailerDto: UpdateMailerDto) {
    return `This action updates a #${id} mailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailer`;
  }
}

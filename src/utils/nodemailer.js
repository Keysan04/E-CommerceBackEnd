import nodemailer from "nodemailer";
//smtp configuration
// email body
// send email

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const emailSender = async (obj) => {
  try {
    const info = await transporter.sendMail(obj);

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
};

export const sendEmailVerificationLinkEmail = ({ email, fName, url }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Follow the instruction to verify your account", // Subject line
    text: `Hello ${fName}, please follow the link to verify you account ${url} \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p>thank you for creating account with us. Click the button  to verify your account</p>

<p>
    <a href="${url}">
    <button style="background: green; padding: 2rem; color: white; font-weight: bolder">Verify</button>
    </a>
</p>

<br />
<p>
   If the above button desn't work, copy paste the folling link in your browser ${url}
</p>
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};

export const sendEmailVerifiedNotificationnEmail = ({ email, fName }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Your email has been verified", // Subject line
    text: `Hello ${fName}, You email has been verified. you may login now \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p>You email has been verified. you may login now</p>
 
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};

export const sendOtpEmail = ({ email, fName, otp }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Your OTP for password reset", // Subject line
    text: `Hello ${fName}, here is your otp ${otp} \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p>Here is the OTP to reset your password</p>
<p style="font-size:3rem; color: red">${otp}</p>

 
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};

export const passwordUpdateNotificationEmail = ({ email, fName }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Your password has been updated", // Subject line
    text: `Hello ${fName}, Your password has been update. If this wasn't you. Pelase contact us or change password asap \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p> Your password has been update. If this wasn't you. Pelase contact us or change password asap</p>

 
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};

export const profileUpdateNotificationEmail = ({ email, fName }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Your profile  has been updated", // Subject line
    text: `Hello ${fName}, Your profile has been update. If this wasn't you. Pelase contact us or change password asap \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p> Your password has been update. If this wasn't you. Pelase contact us or change password asap</p>

 
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};
export const paymentNotificationEmail = ({ email, fName }) => {
  const body = {
    from: `"Tech Gare" <${process.env.SMTP_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Your profile  has been updated", // Subject line
    text: `Hello ${fName}, Your profile has been update. If this wasn't you. Pelase contact us or change password asap \n\n Regards, Tech Gare`, // plain text body
    html: `
    <p>Hello ${fName}</p>
<br />
<br />

<p> Your password has been update. If this wasn't you. Pelase contact us or change password asap</p>

 
<br />
<br />
---------
<p>
    Regards,
    <br />
    Tech gare 
    <br />
    www.mysite.com
</p>
  
    `, // html body
  };

  emailSender(body);
};

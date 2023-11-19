const nodemailer = require('nodemailer');

const generateRandomCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString();
};

const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu-correo@gmail.com', // Cambia con tu dirección de correo Gmail
      pass: 'tu-contraseña', // Cambia con tu contraseña de Gmail
    },
  });

  const code = generateRandomCode();

  const mailOptions = {
    from: 'tu-correo@gmail.com', // Cambia con tu dirección de correo Gmail
    to,
    subject: 'Código de Verificación',
    text: `Tu código de verificación es: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return code;
  } catch (error) {
    console.error(error);
    throw new Error('Error al enviar el correo electrónico. Verifica que la dirección y las credenciales sean correctas.');
  }
};

module.exports = { sendEmail };
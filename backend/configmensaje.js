const nodemailer = require('nodemailer');
module.exports = (formulario) => {

    console.log('Credentials obtained, sending message...');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'andrefer2505@gmail.com',
            pass: 'andrefer2505'
        }
    });

    const message = {
        from: `"Admin" <sofiaespada20@gmail.com>`,
        to: `"${formulario.nombre}" <${formulario.email}>`,
        subject: "Bienvenido al Newsletter de Pokeweb!!",
        html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email}
        `
    };

    transporter.sendMail(message, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}  
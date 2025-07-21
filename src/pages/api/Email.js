import nodemailer from 'nodemailer';

export default async function handler(req,res) {
    if(req.method !== 'POST') return res.status(405).end();
    const {name,email,title,message} =req.body;
    if(!name || !email || !title ||!message){
        return res.status(400).json({error:"Missing required Details."})
    }
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user: process.env.Email_User,
            pass: process.env.Email_Pass,
        },
    });
    const mailOptions = {
        from:`${name} <${process.env.Email_User}>`,
        replyTo: email,
        to:"arun0211.singh@gmail.com",
        subject:`${title}`,
        text: message,
        html:`<p><strong>From:</strong> ${name} (${email}) </p><p>${message}</p>`,
    }
    try{
        await transporter.sendMail(mailOptions);
        return res.status(200).json({message:'Email sent Successfully.'});
    }catch(err){
        console.error('Error sending mail',err);
        return res.status(500).json({error:'Sending mail failed.'})
    }
}
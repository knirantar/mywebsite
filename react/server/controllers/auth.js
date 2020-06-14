const User = require('../models/user');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API);

exports.signup = (req,res) =>{
  const {name,email,password} = req.body

  User.findOne({email}).exec((err,user) =>{
    if(user)
    {
      return res.status(400).json({
        error:'Email is taken'
      })
    }

    const token = jwt.sign({name,email,password},process.env.JWT_ACCOUNT_ACTIVATION,{expiresIn:'10m'});

    const emailData = {
      from:process.env.EMAIL_FROM,
      to:email,
      subject:`Account Activation Link`,
      html:`
              <h1>Please use this link to activate your account</h1>
              <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
              <hr />
              <p>This email may contain sensitive information</p>
              <p>${process.env.CLIENT_URL}</p>
          `
    };
    sgMail.send(emailData)
    .then(sent =>{
      console.log("signup email is sent");
      return res.json({
        message:`email has been sent to ${email},Follow the instruction to activate the account`
      });
    }).catch((error) =>
    {
    console.log(error.response.body)
    return res.json({
      message:error.message
    });
    });
});
}
exports.accountActivation = (req,res) => {

  const {token} = req.body
  if(token){
    jwt.verify(token,process.env.JWT_ACCOUNT_ACTIVATION,function(err,decoded){
      if(err)
      {
        console.log('JWT VERIFY IN ACCOUNT ACTIATION ERROR',err);
        return res.status(401).json({
          error:'Expired link signup again'
        })
      }

      const {name,email,password} = jwt.decode(token)

      const user = new User({name,email,password})
      user.save((err,user) =>{
        if(err)
        {
          console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR',err);
          return res.status(401).json({
            error:"ERROR SAVING USER IN DATABASE TRY SIGNUP AGAIN"
          });
        }
        else {
          console.log("saved");
          return res.json({
            message:'Signup successfully'
          });
        }
      });
    });
  }

  else{
    return res.json({
      message:'SOMETHING WENT WRONG TRY AGAIN'
    });
  }
}
exports.signin = (req,res) =>{
  const{email,password} = req.body
  //check if user exist

  User.findOne({email}).exec((err,user) =>{
    if(err || !user)
    {
      return res.status(400).json({
        error:'User with that email does not exist.'
      });
    }
  //authenticate
  if(!user.authenticate(password)){
    return res.status(400).json({
      error:'Email and password do not match'
    });
  }

  const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
  const {_id,name,email,role} = user

  return res.json({
    token,
    user:{_id,name,email,role}
  });

 });
}

const bcrypt = require('bcryptjs');
const {userData} = require('../data/datas');


let register = async (req, res) => {
    const {user,email,password, phone} = req.body
    let valid = userData.addClient(user, email,password, phone);
    if(!valid){
        return res.status(201).send(
            {status: 'Register Completed'}
        ); 
    }else{
        return res.status(404).send(
            {status: 'Bad register'}
        )
    }
}   


module.exports = {register};
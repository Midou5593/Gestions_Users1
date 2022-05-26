const c = require('../db/postgres.db');

exports.getAllUsers = async(req,res,next)=>{
    try {
        const response = await c.client.query("select * from users");
        res.status(200).json({message:response.rows});
        c.client.end;
    } catch (error) {
        res.status(500).json(error);
    }
};
exports.getUserById = async(req,res,next)=>{
    
    try {
        const response = await c.client.query("select * from users where id = $1",[req.params.id]);
        res.status(200).json({message:response.rows});
        c.client.end;
    } catch (error) {
        res.status(500).json({err:error});
    }
};

exports.updateUserById = async(req,res,next)=>{
    const id = req.params.id;
    const {nom,prenom,username,age,password,confirmpassword} = req.body;
    try {
        const response = c.client.query("update users set nom = $1 , prenom = $2 , username = $3 , age = $4 , passeword = $5 ,confirmpasseword = $6 where id = $7",[nom,prenom,username,age,password,confirmpassword,id]);
        console.log(response);
        res.status(200).json(`Le User avec ID ${id} est mis a jour  avec success`);
        c.client.end;
    } catch (error) {
        
    }
}
exports.deleteUserById = async(req,res,next)=>{
    const id= req.params.id;
    try {
        const response = await c.client.query("delete from users where id = $1",[id]);
        console.log(response);
        res.status(200).json(`Le User avec ID ${id} est supprimer avec success`);
        c.client.end;
    } catch (error) {
        res.status(500).json({err:error});
    }
};

exports.signUp = async(req,res,next)=>{
    const {nom,prenom,username,age,password,confirmpassword} = req.body;
    try {
        const newUser = await c.client.query('insert into users (nom,prenom,username,age,passeword, confirmpasseword) values ($1,$2,$3,$4,$5,$6)',[nom,prenom,username,age,password,confirmpassword]);
        console.log(newUser);
    res.status(201).json({message:"Object created",response:newUser});
    c.client.end;
    } catch (error) {
        res.status(500).json(error);
    }  
};
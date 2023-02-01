import User from "../Models/UserModel.js";

export const getDashboard = async(req,res)=>{
    const siswa = await User.findAll();
    res.render('dashboard',{
    layout: 'layout/layout',
    siswa
    });
};
export const postData = async(req,res)=>{
   const siswa = await User.findAll();
   await User.create(req.body); 
   res.redirect('/')
}; 
export const getDelete = async(req,res)=>{
    await User.destroy({
        where:{
            id: req.params.id
        }
    })
    res.redirect('/')
};
export const getUp = async(req,res)=>{
    await User.update(req.body,{
        where:{
            id: req.params.id
    }
    });
     res.redirect('/')

};
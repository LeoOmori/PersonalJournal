const Entry = require('../models/entryModel');


module.exports = {

    async store(req,res){

        const {id} =  req.body

        const {title,content,date} =req.body

        try{

            await Entry.create({title,content,date, author:id}); 

            return res.json({message:'entry created'});

        }catch(e){
            return res.status(500).json({message:'internal error'});
        }

    },

    async show(req,res){

        const {id:userId} = req.body

        const {entryId} =req.params

        try{
            const entries = await Entry.findOne({author:userId, id:entryId});
            return res.json(entries);
        }catch(e){
            return res.status(409).json({message:"error on finding entry"});
        }

    },

    async index(req,res){

        const {id:userId} = req.body;
        
        try{
            const entries = await Entry.find({author:userId});
            return res.json(entries);
        }catch(e){
            return res.status(409).json({message:"error on finding entries"});
        }


    }






}
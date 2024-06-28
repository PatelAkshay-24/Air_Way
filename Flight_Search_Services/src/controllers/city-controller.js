
const { response } = require('express');
const {CityService} = require('../services/index')

const cityservices = new CityService();


//POST. -> /city/create
const create = async (req,res)=>{
    try{

        const city = await cityservices.createCity(req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'city is create successfully',
            error:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'somthing went wrong city is not created',
            error:error
        })
    }

}

//DELETE. -> /city/:id
const destroy = async (req,res)=>{
    try{
        const response = await cityservices.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'city is successfully delete',
            error:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'something went wrong city is not delete',
            error:error
        })
    }
    
}

//PATCH/PUT. -> /city
const update = async (req,res)=>{
    try{
        const city = await cityservices.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'city is successfully update',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'something went wrong city is not update3',
            error:error
        })
    }
    
}

//GET. -> /city/:id
const get = async (req,res)=>{
    try{
         const city = await cityservices.getCity(req.params.id);
         return res.status(200).json({
            data:city,
            success:true,
            message:'all city available',
            error:{}

         })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'data is not show',
            error:error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get

}
import {Request,Response} from 'express';
import userServices from '../services/user.services';


const addUserController  =  async(req:Request,res:Response)=>{
    try {
        
        /* 	#swagger.tags = ['User']
              #swagger.description = 'Only user can add type all Parameter are mandatory in swagger for testing purpose' */

        /*	#swagger.parameters['obj'] = {
                    in: 'body',
                    description: 'add  details.',
                    required: true,
                    schema: { $ref: "#/definitions/addUserController" }
            } */

        /* #swagger.security = [{
                    "apiKeyAuth": []
            }] */

        let result:any  = await userServices.addUserServices(req.body)
        if(result.rowCount<=0){
            return res.status(200).json({message:'User Details Not Added In Data Base.',status:false})
        }else{
            return res.status(200).json({message:'User Details  Added Successfully.',status:true,Data:[{id:result.rows[0].id}]})
 
        }
          
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
}

const updateUserController  =  async(req:Request,res:Response)=>{
    try {
           /* 	#swagger.tags = ['User']
              #swagger.description = 'Only user can add type all Parameter are mandatory in swagger for testing purpose' */

        /*	#swagger.parameters['obj'] = {
                    in: 'body',
                    description: 'update  details.',
                    required: true,
                    schema: { $ref: "#/definitions/updateUserController" }
            } */

        /* #swagger.security = [{
                    "apiKeyAuth": []
            }] */

        let result:any  = await userServices.updateUserServices(req.body)
        if(result.rowCount<=0){
            return res.status(200).json({message:'User Details Not Updated In Data Base.',status:false})
        }else{
            return res.status(200).json({message:'User Details  Updated Successfully.',status:true})
 
        }
          
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
}

const getUserController =  async(req:Request,res:Response)=>{
    try {
         // #swagger.tags = ['User']
//         // #swagger.description = 'put 0 for all user list'

          if(!req.params.id){
             req.params.id='0'
          }
       
        let result:any  = await userServices.getUserServices(req.params.id)
        if(result.rowCount<=0){
            return res.status(200).json({message:'No Data Found.',status:false})
        }else{
            return res.status(200).json({message:'User Details.',status:true,data:result.rows})
 
        }
          
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
}

const deleteUserController =  async(req:Request,res:Response)=>{
    try {
        
             // #swagger.tags = ['User']
//         // #swagger.description = 'put id for delete the user'

        let result:any  =await  userServices.deleteUserServices(req.params.id)
        if(result.rowCount<=0){
            return res.status(200).json({message:'No Data Found.',status:false})
        }else{
            return res.status(200).json({message:'User Deleted Successfully.',status:true})
 
        }
          
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
}


export default {
    addUserController,
    updateUserController,
    getUserController,
    deleteUserController


}
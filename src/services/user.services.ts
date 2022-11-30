import { client } from "../config/db.connection";
import { IUser } from "../model/user.model";
import userQuery from "../utility/user.query";

class user{
    constructor(){}

    async addUserServices(userDetails:IUser){
           let query:any = {
            text:userQuery.addUser(),
            values:[
                userDetails.first_name,
                userDetails.last_name,
                userDetails.address,
                userDetails.email_id,
                userDetails.status_enum_id,
                new Date(),
                userDetails.phone_number
            ]
           } 
        return new Promise(async(resolve,reject)=>{
            try {
                let result = await client.query(query)
                resolve(result)
            } catch (error) {
                reject(error)
            }
          
        })
    }
    async updateUserServices(userDetails:IUser){

          let query:any = {
            text:userQuery.updateUser(),
            values:[
                userDetails.first_name,
                userDetails.last_name,
                userDetails.address,
                userDetails.email_id,
                userDetails.status_enum_id,
                new Date(),
                userDetails.phone_number,
                userDetails.id ]
          
            
           } 
           return new Promise(async(resolve,reject)=>{
            try {
                let result =await client.query(query)
                resolve(result)
            } catch (error) {
                reject(error)
            }
          
        })
    }
    async getUserServices(userDetailsId:string){
        let query:any = {
            text:userQuery.getUser(),
            values:[userDetailsId]
           } 

           return new Promise(async(resolve,reject)=>{
            try {
                let result =await client.query(query)
                resolve(result)
            } catch (error) {
                reject(error)
            }
          
        })
 
    }
    async deleteUserServices(userDetailsId:string){
        let query:any = {
            text:userQuery.deleteUser(),
            values:[userDetailsId]
           } 
           return new Promise(async(resolve,reject)=>{
            try {
                let result =await client.query(query)
                resolve(result)
            } catch (error) {
                reject(error)
            }
          
        })
    }

}

export default new user()

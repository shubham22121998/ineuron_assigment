let userQuery ={
    addUser:()=>{
        return `INSERT INTO  users.tbl_user_details(
             u_first_name, u_last_name, u_address, u_email_id, u_status_enum_id, u_createdon_date, u_phone_number)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`
    },
    updateUser:()=>{
       return `UPDATE  users.tbl_user_details
       SET  u_first_name=$1, u_last_name=$2, u_address=$3, u_email_id=$4, u_status_enum_id=$5, u_updatedon_date=$6, u_phone_number=$7
       WHERE id=$8;`
    },
    getUser:()=>{
       return `SELECT id, u_first_name, u_last_name, u_address, u_email_id, u_status_enum_id, u_createdon_date, u_updatedon_date, u_phone_number
       FROM users.tbl_user_details
       WHERE (id=$1 or $1=0);`
    },
    deleteUser:()=>{
         return `DELETE FROM users.tbl_user_details
          WHERE id=$1;`
    }

}

export default userQuery;
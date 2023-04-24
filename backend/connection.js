const mysql=require("mysql");
let fs=require("fs");
const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"react_ecom"
})


// fs.readFile(__dirname+"/product.json","utf-8",(error,data)=>{
  
//     let arr=JSON.parse(data);
//     for(let i=0;i<arr.length;i++)
//     {
//         connection.query(`insert into products (name,imgurl,des,wprice,price,stock) values("${arr[i].name}","${arr[i].imgurl}","${arr[i].des}",${arr[i].wprice},${arr[i].price},${arr[i].stock})`,(er,re)=>{
//             if(er)
//             console.log(er);
//             else
//             console.log(re);
//         });
//     }
// })
 module.exports=connection;
 
import Jwt  from "jsonwebtoken"
    
const generarJWT = (id) => {
   return (
    Jwt.sign({
        id
    },'palabrasecreat',{
        expiresIn:'1d'
    })

   ) 
}
const generarid = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

export {
    generarid,
    generarJWT
}
// class ApiError extends Error {
//     constructor(statusCode,message){
//         super(message)
//         this.statusCode = statusCode,
//         this.message = message
//     }
// }
class ApiError  {
    constructor(statusCode,message){
        this.statusCode = statusCode,
        this.message = message
    }
}
module.exports = ApiError
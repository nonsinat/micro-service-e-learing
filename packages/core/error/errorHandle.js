 class HttpError extends Error {
     statusCode;
     error;
     constructor(statusCode, error) {
         super()
         this.statusCode = statusCode;
         this.error = error;
     }
 }
 class NotFoundError extends HttpError {
     constructor(error) {
         super(404, error);
         this.message = "Not Found";
     }
 }
 class BadRequest extends HttpError {
     constructor(error) {
         super(400, error);
         this.message = "Bad request";
     }
 }
 class Unauthorized extends HttpError {
     constructor(error) {
         super(401, error);
         this.message = "Unauthorized";
     }
 }

 module.exports.BadRequest = BadRequest
 module.exports.HttpError = HttpError
 module.exports.Unauthorized = Unauthorized
 module.exports.NotFoundError = NotFoundError
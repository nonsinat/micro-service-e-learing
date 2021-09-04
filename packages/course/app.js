const app = require("./http/server");

app.listen(process.env.PORT | 3000, ()=>console.log("Server is running on port : 3000"))
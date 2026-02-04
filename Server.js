const app=require('./src/app')
const db=require('./config/db')
require('dotenv').config()
db()
app.listen(3000,()=>{
    console.log('Server is started!!');
    
})
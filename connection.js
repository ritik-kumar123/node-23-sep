const mongoose = require('mongoose');
async function connection()
{
    try
    {
        let connection = await mongoose.connect('mongodb://localhost:27017/batch-2-20-sept');
          console.log("Data base connected");
          console.log();
    }
    catch(err)
    {
        console.log(err.message,'msg......');
    }
}
module.exports = connection
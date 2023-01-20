const db = require('../../configs/db.config');

const getShareInfo = (name)=>{

  return db.query("SELECT * FROM shares WHERE name = $1", [name]).then(data=>{
    return data.rows;
  })
}
module.exports = { getShareInfo}
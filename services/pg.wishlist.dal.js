const dal = require("./pg.auth_db");

var getDestinations = function () {
  if (DEBUG) console.log("logins.pg.dal.getLogins()");
  return new Promise(function (resolve, reject) {
    const sql = `SELECT id, country, city, destination FROM public."Travel-Wishlist" \ 
    ORDER BY id ASC LIMIT 14;`;
    dal.query(sql, [], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};


module.exports = {
    getDestinations
};
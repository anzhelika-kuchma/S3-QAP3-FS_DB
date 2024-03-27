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

async function getDestById(id) {
  if (DEBUG) console.log("pg.wishlist.dal.getDestById()");
  const sql = `SELECT id, destination, city, country FROM public."Travel-Wishlist" WHERE id = $1;`;
  try {
    let result = await dal.query(sql, [id]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}


module.exports = {
    getDestinations,
    getDestById,
};
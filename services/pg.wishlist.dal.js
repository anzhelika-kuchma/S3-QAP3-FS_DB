const dal = require("./pg.auth_db");

var getDestinations = function () {
  if (DEBUG) console.log("wishlist.pg.dal.getDestinations()");
  return new Promise(function (resolve, reject) {
    const sql = `SELECT id, destination, country, city FROM public."Travel-Wishlist" \ 
    ORDER BY id;`;
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
  if (DEBUG) console.log("pg.destlist.dal.getDestById()");
  const sql = `SELECT id, destination, country, city FROM public."Travel-Wishlist" WHERE id = $1;`;
  try {
    let result = await dal.query(sql, [id]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addDest(destination, country, city) {
  if (DEBUG) console.log("pg.wishlist.dal.addDest()");
  const sql = `INSERT INTO public."Travel-Wishlist"(destination, country, city) VALUES ($1, $2, $3, $4) RETURNING id;`;
  try {
    let result = await dal.query(sql, [destination, country, city]);
    if (DEBUG) console.log(result.rows);
    return result.rows[0].id;
  } catch (error) {
    if (error.code === "23505") return error.code;
    console.log(error);
    throw error;
  }
}

async function patchDest(id, destination, country, city) {
  if (DEBUG) console.log("pg.wishlist.dal.patchDest()");
  const sql = `UPDATE public."Travel-Wishlist" SET destination=$2, country=$3, city=$4 WHERE id=$1;`;
  try {
    let result = await dal.query(sql, [id, destination, country, city]);
    if (DEBUG) console.log(result);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteDest(id) {
  if (DEBUG) console.log("pg.wishlist.dal.deleteDest()");
  const sql = `DELETE FROM public."Travel-Wishlist" WHERE id = $1;`;
  try {
    let result = await dal.query(sql, [id]);
    if (DEBUG) console.log(result);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getDestinations,
  addDest,
  getDestById,
  patchDest,
  deleteDest,
};
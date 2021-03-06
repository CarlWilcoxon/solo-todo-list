const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here

  queryText =
  `SELECT * FROM "todo"
  ORDER BY "id" ASC;`

  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(500));
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here

  queryText =
  `INSERT INTO "todo" (task)
  VALUES ($1);`

  pool
    .query(queryText, [req.body.text] )
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));

});

/**
 * GET route template
 */
router.put('/:id', (req, res) => {
  // GET route code here

  queryText =
  `UPDATE "todo"
  SET "completed" = $1
  WHERE "id" = $2;`

  console.log

  pool
    .query(queryText, [req.body.checked , req.params.id] )
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));


});

/**
 * POST route template
 */
router.delete('/:id', (req, res) => {
  // POST route code here

  queryText =
  `DELETE FROM "todo"
  WHERE "id"=$1;`

  pool
    .query(queryText, [req.params.id] )
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));

});

module.exports = router;

function index(req, res) {
  res.json({
    message: 'Welcome to tunely!',
    documentation_url: 'https://github.com/sf-wdi-labs/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

/*
// GET /api/albums
function index(req, res) {
// send back all albums as JSON
}
//
// POST /api/albums
function create(req, res) {
// create an album based on request body and send it back as JSON
}
//
// GET /api/albums/:albumId
function show(req, res) {
// find one album by id and send it back as JSON
}
//
// DELETE /api/albums/:albumId
function destroy(req, res) {
// find one album by id, delete it, and send it back as JSON
}
//
// PUT or PATCH /api/albums/:albumId
function update(req, res) {
// find one album by id, update it based on request body,
// and send it back as JSON
}
 */

module.exports = {
  index: index
    /*
	create: create,
	show: show,
	destroy: destroy,
	update: update   */
}

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * List handler for reservation resources
 */
async function list(req, res) {
    res.json({
        data: [],
    });
}

module.exports = {
    list,
    create: asyncErrorBoundary(create),
};
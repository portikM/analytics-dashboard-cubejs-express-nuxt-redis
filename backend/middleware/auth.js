//const client = require('../redis-client');

const cubejsApiSecret = process.env.CUBEJS_API_SECRET;

exports.userRoles = () => {

    return [
        async (req, res, next) => {

            // 1. Get API token from request headers.

            if (!req.headers.authorization) {
                return res.status(401).json({
                    message: "Not authenticated."
                });
            }

            const apiToken = req.headers.authorization;

            // 2. Here normally we would perform token verification logic, but we'll drop it for now.

            // 3. Perform user roles check to see if the user is allowed to view requested content.

            await setTimeout(() => { next(); }, 3000);
        }
    ];
}
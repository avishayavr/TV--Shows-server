const axios = require('axios');

// get data from WS
exports.getShows = (req, res,next) => {
  const data =  axios.get("https://api.tvmaze.com/shows");
  if(!data) res.status(401);
  return data;
};

const showMiddleware = require("../middleware/showsMiddleware");
const showModel = require("../models/showsModel");

// get all data with post

// get data with Middleware
exports.getAllData = async (req, res, next) => {
  const showsModel = await showModel.find({});
  // if (showsModel.length > 0) return showsModel;
  try {
    // let { data: shows } = await showMiddleware.getShows();
    // shows = shows.map((show) => {
    //   return {
    //     name: show.name,
    //     genres: show.genres,
    //     url: show.url,
    //     premiered: show.premiered,
    //     ended: show.ended,
    //     status:show.status,
    //     imageMedium:show.image.medium,
    //     imageOriginal:show.image.original,
    //     rating:show.rating.average,
    //     summary:show.summary
    //   };
    // });

    // shows.forEach(async (show) => {
    //   const eachShow = new showModel(show);
    //   await eachShow.save();
    // });

    res.status(200).json(showsModel);
  } catch (error) {
    next(error);
  }
};

// get show by id
exports.getDataById = async (req, res, next) => {
  const { id } = req.params;
  try {
    // if (req.show._id === req.params.id){
    const show = await showModel.findById(id);
    res.status(200).json(show);
    // }
    // res.status(401).json('show not authorized');
  } catch (error) {
    next(error);
  }
};

  // create show
  exports.createShow = async (req, res, next) => {
    const obj = req.body;
    try {
  const newShow = new showModel({
          // _id:obj._id,
          name: obj.name,
          genres: obj.genres,
          url: obj.url,
          premiered: obj.premiered,
          ended: obj.ended,
          status:obj.status,
          imageMedium:obj.image.medium,
          imageOriginal:obj.image.original,
          rating:obj.rating.average,
          summary:obj.summary
  });

    console.log(obj);
    await newShow.save();
    res.status(200).json("created");
  } catch (error) {
    next(error);
  }
};

// update a show
exports.updateShow = async (req, res, next) => {
  const obj = req.body;
  const { id } = req.params;
  try {
    // if(req.show._id === id){
    await showModel.findByIdAndUpdate(id, obj);
    res.status(200).json("show updated");
    // }
    // res.status(401).json('show not authorized');
  } catch (error) {
    next(error);
  }
};

// delete a show
exports.deleteShow = async (req, res, next) => {
  const {id} = req.params
  try {
    // if (req.show._id === id) {
      await showModel.findByIdAndDelete(id);
      res.status(200).json("show Deleted");
    // }
    // res.status(401).json("show not authorized");
  } catch (err) {
    next(err);
  }
};

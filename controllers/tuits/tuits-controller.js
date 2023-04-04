import * as tuitsDao from "./tuits-dao.js";
// import posts from "./tuits.js";
// let tuits = posts;

const currentUser = {
  username: "NASA",
  handle: "@nasa",
  image: "nasa.jpg",
  title: "New tweet by Nasa",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  disliked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  dislikes: 0,
};

// const createTuit = (req, res) => {
//   const newTuit = {
//     ...req.body,
//     ...templateTuit,
//   };
//   newTuit._id = new Date().getTime() + "";
//   tuits.push(newTuit);
//   res.json(newTuit);
// };
const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit.likes = 0;
  // newTuit.liked = false;

  newTuit.topic = "New Tuit";
  newTuit.username = "NASA";
  newTuit.handle = "NASA";
  newTuit.time = "1h";
  newTuit.image = "nasa.jpg";
  newTuit.liked = false;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

// const findTuits = (req, res) => {
//   res.json(tuits);
// };
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

// const updateTuit = (req, res) => {
//   const tuitdIdToUpdate = req.params.tid;
//   const updates = req.body;
//   const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
//   tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
//   res.sendStatus(200);
// };
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

// const deleteTuit = (req, res) => {
//   const tuitdIdToDelete = req.params.tid;
//   tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
//   res.sendStatus(200);
// };
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};

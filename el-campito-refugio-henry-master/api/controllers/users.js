const { usersModel } = require("../models");


const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find({isDelete: false});
    res.status(201).send(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};


// const getUsersId = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const users = await usersModel.findById({ _id: id });
//     res.json(users);
//   } catch (e) {
//     res.status(404).send({ error: e });
//   }
// };


const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await usersModel.create(body);
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  createUser,
  getUsers, 
  // getUsersId,
};

/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  uploadReleaseData: async (req, res) => {
    console.log(req.body);
    var data = JSON.parse(req.body.data);
    var userName = data.userName;
    console.log(userName);
    var createdUser = await User.findOrCreate({ userName }, { userName });
    console.log(createdUser);
    var createdReleaseData = await Release.create({
      coords: data.coords,
      objectName: data.objectName,
      owner: createdUser.id
    }).fetch();
    console.log(createdReleaseData);
    res.json(createdReleaseData);
  },

  uploadZoneData: async (req, res) => {
    var data = JSON.parse(req.body.data);
    var userName = data.userName;
    console.log(userName);
    var createdUser = await User.findOrCreate({ userName }, { userName });
    console.log(createdUser);
    var createdZoneData = await Zone.create({
      coords: data.coords,
      objectName: data.objectName,
      owner: createdUser.id,
      isCorrect: data.isCorrect
    }).fetch();
    console.log(createdZoneData);
    res.json(createdZoneData);
  }

};


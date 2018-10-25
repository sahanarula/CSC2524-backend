/**
 * PingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  ping: (req, res) => {
    res.view("sorry");
  }

};


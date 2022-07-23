import User from '../../models/User';
import History from '../../models/History';
import { connect, disconnect } from '../../utils/db';

// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getUsers(req, res)
    }

    case 'POST': {
      return addUser(req, res);
    }

    case 'PUT': {
      return res.json({
        message: "Not allowed!",
        success: false,
      })
    }

    case 'DELETE': {
      return deleteUser(req, res);
    }
  }
}

async function getUsers(req, res) {
  try {
    const connectionRes = await connect()
    if (connectionRes.success) {
      const limit = req.query.limit
      const sumOfprevLimits = req.query.sumOfprevLimits

      if (req.query.uid) {
        const uid = req.query.uid
        var user = await User.findOne({ uid })
        await disconnect()
        return res.json({
          message: JSON.parse(JSON.stringify(user)),
          success: true,
        });
      }

      var users = await User.find().sort({ "createdAt": -1 }).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
      await disconnect()

      return res.json({
        message: JSON.parse(JSON.stringify(users)),
        success: true,
      });
    }
  } catch (err) {
    // // console.log('err', err)
    res.json({
      message: new Error(err).message,
      success: false,
    })
  }
}

async function deleteUser(req, res) {
  try {
    const uid = req.query.uid
    await connect()
    await User.deleteOne({ uid: uid })
    const newHistory = new History({ user: null, action: 'Delete user', details: `The user with uid ${uid} was deleted` })
    await newHistory.save()
    await disconnect()
    return res.json({ success: true });
  } catch (err) {
    // // console.log(err)
    return res.json({ message: new Error(err).message, success: false });
  }

}

async function addUser(req, res) {
  try {
    let data = req.body
    await connect()
    const newUser = new User(data)
    const requestToAddUser = await newUser.save()
    await disconnect()
    //   // console.log('requestToAddUser', requestToAddUser)
    return res.json({
      message: JSON.parse(JSON.stringify(requestToAddUser)),
      success: true,
    });
  } catch (err) {
    // // console.log('err', err)
    res.json({
      message: new Error(err).message,
      success: false,
    })
  }
}

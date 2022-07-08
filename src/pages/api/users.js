import User from '../../models/User';
import { connect, disconnect } from '../../utils/db';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getUsers(req, res)
    }

    case 'POST': {
      // if (req.body.editing) {
      //     return updateUser(req, res)
      // }
      return addUser(req, res);
    }

    // case 'PUT': {
    //     if (req.query.propty) {
    //         return updateUserpropty(req, res)
    //     }
    //     return updateUser(req, res);
    // }

    // case 'DELETE': {
    //     return deleteUser(req, res);
    // }
  }
}

async function addUser(req, res) {
  let data = req.body

  try {
    await connect()
    const newUser = new User(data)
    const requestToAddUser = await newUser.save()
    await disconnect()
    // console.log('requestToAddUser', requestToAddUser)
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


async function getUsers(req, res) {
  const connectionRes = await connect()
  if (connectionRes.success) {
    const limit = req.query.limit
    const sumOfprevLimits = req.query.sumOfprevLimits

    if (req.query.uid) {
      const uid = req.query.uid
      // console.log(uid)
      const user = await User.findOne({ uid: uid })
      await disconnect()
      // console.log("api get user by uid", user)

      if (user) {
        return res.json({
          message: JSON.parse(JSON.stringify(user)),
          success: true,
        });
      }
      return res.json({
        message: 'Not a customer yet!',
        success: false,
      })

      // try {
      // } catch (err) {
      //   // // console.log('err', err)
      //   res.json({
      //     message: new Error(err).message,
      //     success: false,
      //   })
      // }
    }

    const users = await User.find().sort({ "createdAt": -1 }).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
    await disconnect()

    return res.json({
      message: JSON.parse(JSON.stringify(users)),
      success: true,
    });
  }

  res.json({
    message: 'mongodb connection error',
    success: false,
  })
}
import User from '../../models/User';
import History from '../../models/History';
import { connect, disconnect } from '../../utils/db';

// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getHistories(req, res)
    }

    case 'POST': {
      return addHistory(req, res);
    }

    case 'PUT': {
      return res.json({
        message: "Not allowed!",
        success: false,
      })
    }

    case 'DELETE': {
      return deleteHistory(req, res);
    }
  }
}

async function getHistories(req, res) {
  try {
    const connectionRes = await connect()
    if (connectionRes.success) {
      const limit = req.query.limit
      const sumOfprevLimits = req.query.sumOfprevLimits

      if (req.query.uid) {
        const uid = req.query.uid
        var History = await Product.findOne({ uid })
        await disconnect()
        return res.json({
          message: JSON.parse(JSON.stringify(History)),
          success: true,
        });
      }

      var Histories = await Product.find().sort({ "createdAt": -1 }).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
      await disconnect()

      return res.json({
        message: JSON.parse(JSON.stringify(Histories)),
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

async function deleteHistory(req, res) {
  try {
    const uid = req.query.uid
    await connect()
    await History.deleteOne({ uid: uid })
    const newHistory = new History({ History: null, action: 'Delete History', details: `The History with uid ${uid} was deleted` })
    await newHistory.save()
    await disconnect()
    return res.json({ success: true });
  } catch (err) {
    // // console.log(err)
    return res.json({ message: new Error(err).message, success: false });
  }

}

async function addHistory(req, res) {
  // console.log("req.body", req.body)
  try {
    const uid = req.body.uid
    var _id = null
    var user = null

    await connect()
    if(uid){
      user = await User.findOne({ uid })
      _id = user ? user._id : null
    }
    let data = { userRef: _id, action: req.body.action, details: req.body.details }
    // console.log("data", data)
    if (data?.action) {
      const newHistory = new History(data)
      const h = await newHistory.save()
      await disconnect()
      // console.log('h', h)
      return res.json({
        message: JSON.parse(JSON.stringify(h, user)),
        success: true,
      });
    }else{
      return res.json({
        message: "data error",
        success: false,
      })
    }      
  } catch (err) {
    // // console.log('err', err)
    return res.json({
      message: new Error(err).message,
      success: false,
    })
  }
}

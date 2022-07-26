import mongoose from 'mongoose'

var connection = {}

async function connect() {
  if (connection.isConnected) {
    console.log('already connected')
    return {success: true}
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('use previous connection')
      return {success: true}
    }
    await mongoose.disconnect()
  }
  // const db = await mongoose.connect("mongodb+srv://sorm:h2V6JUeyQWJeTVH@cluster0.ti1ie.mongodb.net/?retryWrites=true&w=majority", {
    // const db = await mongoose.connect(process.env.MONGODB_URI, {
  const db = await mongoose.connect("mongodb://sorm:h2V6JUeyQWJeTVH@cluster0-shard-00-00.ti1ie.mongodb.net:27017,cluster0-shard-00-01.ti1ie.mongodb.net:27017,cluster0-shard-00-02.ti1ie.mongodb.net:27017/?ssl=true&replicaSet=atlas-jmcdej-shard-0&authSource=admin&retryWrites=true&w=majority", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  console.log('new connection')
  connection.isConnected = db.connections[0].readyState
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('not disconnected')
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.updatedAt = doc.updatedAt.toString()
  return doc
}

export { connect, disconnect, convertDocToObj }

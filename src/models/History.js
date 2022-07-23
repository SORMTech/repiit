import mongoose from 'mongoose';

const { ObjectId, String } = mongoose.Schema.Types;

const HistorySchema = new mongoose.Schema(
  {
    //referencing the User model
    userRef: { type: ObjectId, ref: 'User', default: null },
    action: { type: String, require: true },
    details: { type: String, default: '' },
  },
  {
    timestamps: true
  }
);

export default mongoose.models.History || mongoose.model('History', HistorySchema);

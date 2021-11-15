import * as mongoose from 'mongoose';
import LineSchema from '../models/lineSchema';

export default mongoose.model("line", LineSchema);
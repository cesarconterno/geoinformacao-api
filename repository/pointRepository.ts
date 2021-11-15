import * as mongoose from 'mongoose';
import PointSchema from '../models/pointSchema';

export default mongoose.model("point", PointSchema);
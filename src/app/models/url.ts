import { Schema, models, model } from "mongoose";

const urlSchema = new Schema({
	long: { type: String, required: true },
	short: { type: String, required: true, unique: true, index: true },
	createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 24 },
});

const Url = models.url || model("url", urlSchema);

export default Url;

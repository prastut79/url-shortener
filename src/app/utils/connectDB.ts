import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectDb = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGO_URI!);

		console.log(`MongoDB Connected:`);

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};

import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectDb = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}

	try {
		const conn = await mongoose.connect(
			"mongodb+srv://zerotakumi79:pbBpHVhss6QDQDDu@url-shortner.msmvt0m.mongodb.net/url_shortner"
		);

		console.log(`MongoDB Connected: ${conn.connection.host}`);

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};

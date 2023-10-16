"use server";

import { revalidatePath } from "next/cache";
import Url from "./models/url";
import { connectDb } from "./utils/connectDB";
import { getMongooseErrors } from "./utils/mongooseUtils";
import { URL_SHORT_SIZE, URL_SHORT_MAX_SIZE } from "./utils/config";

export const addUrl = async (data: FormData): Promise<any> => {
	try {
		await connectDb();
		const long = data.get("long")?.toString();
		const short = data.get("short")?.toString();

		if (!long) {
			return { message: "Long is Required", error: true };
		}

		if (short && short.length > URL_SHORT_MAX_SIZE) {
			return {
				message: "Short Alias cannot have more than 8 letters",
				error: true,
			};
		}
		const url = await Url.create({ long, short: short || getShortKey() });
		// revalidatePath("/");

		return { url, message: "Url Shortened Sucessfully." };
	} catch (e) {
		return { message: getMongooseErrors(e), error: true };
	}
};

const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getShortKey() {
	let key = "";
	for (let i = 0; i < URL_SHORT_SIZE; i++) {
		key += characters.charAt(Math.floor(Math.random() * 62));
	}
	return key;
}

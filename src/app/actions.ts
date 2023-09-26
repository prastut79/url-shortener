"use server";

import { revalidatePath } from "next/cache";
import Url from "./models/url";
import { connectDb } from "./utils/connectDB";
import { getMongooseErrors } from "./utils/mongooseUtils";
import { URL_SHORT_SIZE } from "./utils/config";

export const addUrl = async (data: FormData): Promise<any> => {
	try {
		await connectDb();
		const long = data.get("long")?.toString();

		if (!long) {
			return { message: "Long is Required", error: true };
		}

		const url = await Url.create({ long, short: getShortKey() });
		// revalidatePath("/");

		return { url, message: "Url Created Sucessfully." };
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

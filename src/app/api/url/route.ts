import Url from "@/app/models/url";
import { connectDb } from "@/app/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const short = searchParams.get("short");

	await connectDb();

	const url = await Url.findOne({ short });

	if (url) {
		return NextResponse.json({ url });
	}

	return NextResponse.json({ message: "Not Found" }, { status: 404 });
}

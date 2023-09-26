import { redirect } from "next/navigation";
import { UrlType } from "../types";
import { API_URL, URL_SHORT_SIZE } from "../utils/config";

function getUrl(slug: string) {
	const req = fetch(API_URL + "?short=" + slug, { cache: "no-store" });
	return req;
}

export default async function Page({ params }: { params: { slug: string } }) {
	var message = "Link Expired or Invalid";
	var long;

	if (params.slug?.length === URL_SHORT_SIZE) {
		try {
			const res = await getUrl(params.slug);

			if (res.ok) {
				const data = (await res.json()) as { url: UrlType };

				if (data.url.long) {
					long = data.url.long;
				}
			}
		} catch (e) {
			message = "An Error Occured";
			console.log("error", e);
		}
	}

	/**MOving the Redirect Logic outside the try-catch block because of a bug, when placed the redirect inside the try-catch block */

	if (long) {
		redirect(long);
	}

	return (
		<div
			style={{
				width: "100%",
				padding: "10px 0",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					padding: "100px 0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<h3 style={{ fontSize: "2rem", textAlign: "center" }}>
					{message}
				</h3>
				<br />
				<a
					href="/"
					style={{
						cursor: "pointer",
						padding: "16px 32px",
						borderRadius: "4px",
						backgroundColor: "rgb(2, 132, 199)",
						textDecoration: "none",
						fontSize: "18px",
						color: "white",
						fontWeight: "600",
					}}
				>
					Create New
				</a>
			</div>
		</div>
	);
}

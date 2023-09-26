"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { UrlType } from "../types";

/**Local Storage URL Key */
export const URL_KEY = "url";

export const UrlContext = createContext<{
	setUrls: (urls: UrlType[]) => void;
	urls: UrlType[] | undefined;
} | null>(null);

export default function UrlProvider({ children }: PropsWithChildren<any>) {
	const [urls, setUrls] = useState<UrlType[]>();

	useEffect(() => {
		try {
			const data = localStorage.getItem(URL_KEY);

			if (data) {
				const urls = JSON.parse(data);
				setUrls(urls);
			}
		} catch (e) {}
	}, []);

	function updateUrls(urls: UrlType[]) {
		setUrls(urls);
	}

	return (
		<UrlContext.Provider
			value={{
				setUrls(urls) {
					updateUrls(urls);
				},
				urls,
			}}
		>
			{children}
		</UrlContext.Provider>
	);
}

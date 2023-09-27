"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { UrlType } from "../types";

/**Local Storage URL Key */
export const URL_KEY = "url";

export const UrlContext = createContext<{
	setUrls: (urls: UrlType[]) => void;
	urls: UrlType[] | undefined;
} | null>(null);

export function getRecentLinks(temp: UrlType[]) {
	/**Get Date of a day ago */
	const today = new Date();
	today.setDate(today.getDate() - 1);

	/**FIlter the Urls */
	const data = temp.filter(({ createdAt }) => {
		return new Date(createdAt!) > today;
	});
	return data;
}

export default function UrlProvider({ children }: PropsWithChildren<any>) {
	const [urls, setUrls] = useState<UrlType[]>();

	useEffect(() => {
		try {
			const data = localStorage.getItem(URL_KEY);

			if (data) {
				const temp = JSON.parse(data);
				const urls = getRecentLinks(temp);

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

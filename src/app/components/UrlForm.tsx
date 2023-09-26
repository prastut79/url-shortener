"use client";

import { toast } from "react-toastify";
import { addUrl } from "../actions";
import Input from "./atoms/Input";
import { SubmitButton } from "./atoms/SubmitButton";
import { URL_KEY, UrlContext } from "./UrlProvider";
import { useContext, useEffect, useState } from "react";
import { UrlType } from "../types";

/**Daily Url SHorten Limit */
const DAILY_URL_LIMIT = 20;

function saveUrl(url: UrlType) {
	/**Function to save added URL to local storage */
	try {
		const temp = JSON.parse(
			localStorage.getItem(URL_KEY) ?? "[]"
		) as UrlType[];

		/**Get Date of a day ago */
		const today = new Date();
		today.setDate(today.getDate() - 1);

		/**FIlter the Urls */
		const data = temp.filter(({ createdAt }) => {
			return new Date(createdAt!) > today;
		});

		data.unshift(url);

		localStorage.setItem(URL_KEY, JSON.stringify(data));
		return data;
	} catch (e) {
		localStorage.setItem(URL_KEY, JSON.stringify([url]));
	}
}

const UrlForm = () => {
	const urlContext = useContext(UrlContext);

	async function formSubmit(formData: FormData) {
		const long = formData.get("long")?.toString();

		if (!long) {
			return;
		}
		const res = await addUrl(formData);

		if (res?.error) {
			toast.error(res.message || "Something Went Wrong.");
		} else {
			toast.success(res.message || "Sucessfully added Link");

			/**Adding URL to local storage */
			if (res?.url) {
				const urls = saveUrl(res.url);
				if (urls) {
					urlContext?.setUrls(urls);
				}
			}
		}
	}

	/**Checked If the user has reached a One Day Limit */
	if (
		urlContext?.urls?.length &&
		urlContext?.urls?.length >= DAILY_URL_LIMIT
	) {
		return (
			<div className="fc_xy font-bold text-red-300 py-14">
				You have reached your limit for today. Please come back
				tommorrow.
			</div>
		);
	}

	return (
		<form action={formSubmit}>
			<h3 className="text-ts font-extrabold">Create Link</h3>
			<div className="py-4">
				<Input label="Long URL" name="long" required type="url" />
			</div>
			<div className="flex justify-end">
				<SubmitButton />
			</div>
		</form>
	);
};

export default UrlForm;

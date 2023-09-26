"use client";

import { useContext, useEffect, useState } from "react";
import Table from "./atoms/TableRaw/Table";
import TBody from "./atoms/TableRaw/TBody";
import Td from "./atoms/TableRaw/Td";
import { UrlType } from "../types";
import { getTimeAgo } from "../utils/dateFormat";
import { UrlContext } from "./UrlProvider";

const header = ["Sn", "Url", "Shorten URL", "Added On"];

export default function UrlList() {
	const url = useContext(UrlContext);

	return (
		<div>
			<h3 className="font-extrabold text-ts pb-4">Recently Added URLs</h3>
			{url?.urls ? (
				<>
					<Table>
						<thead className="text-[13px] w-full sticky top-0 z-20 text-ts uppercase bg-bl font-bold select-none">
							<tr>
								{header.map((name, i) => (
									<th className="px-4 py-3" key={i}>
										{name}
									</th>
								))}
							</tr>
						</thead>
						<TBody>
							{url?.urls?.map(({ long, short, createdAt }, i) => (
								<tr
									className="border-b border-bl whitespace-nowrap"
									key={i}
								>
									<Td>{i + 1}</Td>
									<Td>
										<a
											className="text-theme"
											target="_blank"
											href={long}
										>
											{long}
										</a>
									</Td>
									<Td>
										<a
											href={`${short}`}
											target="_blank"
											className="text-theme"
										>
											https://{window.location.hostname}/
											{short}
										</a>
									</Td>
									<Td>
										{getTimeAgo(
											createdAt || (new Date() as any)
										)}
									</Td>
								</tr>
							))}
						</TBody>
					</Table>
					<p className="italic font-bold text-sm text-ts py-4 text-ri">
						*The Links will expire after 1 day.
					</p>
				</>
			) : (
				<div className="fc_xy font-bold  text-tp  py-14">
					No Links Added
				</div>
			)}
		</div>
	);
}

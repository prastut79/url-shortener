export const PROD_PATH =
	process.env.NODE_ENV === "development"
		? "http://localhost:3001"
		: process.env.PROD_PATH || "https://url-shortener.prastut.com.np";

export const API_URL = PROD_PATH + "/api/url";

export const DAILY_URL_LIMIT = 10;

export const URL_SHORT_SIZE = 6;
export const URL_SHORT_MAX_SIZE = 8;

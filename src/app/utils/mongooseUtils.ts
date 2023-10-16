import { Error } from "mongoose";

export function getMongooseErrors(err: any) {
	var validationErrors = [];

	if (err instanceof Error.ValidationError) {
		for (let field in err.errors) {
			validationErrors.push(err.errors[field].message);
		}
	} else if (err.code === 11000) {
		const key = Object.keys(err.keyValue)[0];
		validationErrors.push(
			`Record with ${key} alias: ${err.keyValue[key]}, already exists.`
		);
	}
	return validationErrors.join("\n");
}

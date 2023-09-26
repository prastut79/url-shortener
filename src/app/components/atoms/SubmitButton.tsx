"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Button from "./Button";

export function SubmitButton({}) {
	const { pending } = useFormStatus();

	return <Button loading={pending}>Create</Button>;
}

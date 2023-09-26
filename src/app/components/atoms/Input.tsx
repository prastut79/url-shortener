import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	animationDelay?: number;
}

const Input = forwardRef(function Input(
	{
		id,
		label,
		type = "text",
		error,
		animationDelay,
		className,
		...props
	}: InputProps,
	ref: any
) {
	return (
		<div
			className={`w-full relative ${animationDelay ? "slideup" : ""}`}
			style={{
				...(animationDelay
					? { animationDelay: `${animationDelay}ms` }
					: {}),
			}}
		>
			<input
				ref={ref}
				id={id}
				placeholder=" "
				type={type}
				className={`peer w-full px-3 py-2 pt-6 z-10 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-bp text-tp border-2 border-bl placeholder:text-tp ${
					error
						? "animate-shake !border-rose-500 focus:border-rose-500"
						: "focus:border-theme border-bl"
				}${className ? className : ""}`}
				{...props}
			/>
			<label
				className={`absolute pointer-events-none text-sm duration-300 transform -translate-y-4 top-5 z-0 origin-[0]  left-3 scale-[.85] peer-placeholder-shown:scale-105 peer-placeholder-shown:translate-y-0 
				peer-focus:scale-[.85] peer-focus:-translate-y-4 peer-focus:text-theme ${
					error ? "text-rose-500" : "text-zinc-400"
				}
        `}
				htmlFor="peer"
			>
				{label}
			</label>
			{error && (
				<p className="text-red-400 font-semibold text-sm text-center">
					{error}
				</p>
			)}
		</div>
	);
});

export default Input;

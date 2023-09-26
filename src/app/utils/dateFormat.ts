export function getTimeAgo(timestamp: string) {
	const now: any = new Date();
	const targetTime: any = new Date(timestamp);

	const milliseconds = now - targetTime;
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (days >= 1) {
		return "long time ago";
	} else if (hours >= 1) {
		return `${hours} hours ago`;
	} else if (minutes >= 1) {
		return `${minutes} minutes ago`;
	} else {
		return "Just now";
	}
}

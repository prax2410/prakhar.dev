import { useState, useEffect } from "react";

/**
 * Hook providing live formatted Bengaluru time (IST, UTC+5:30)
 */
export function useBengaluruTime() {
	const [timeString, setTimeString] = useState("");

	useEffect(() => {
		const formatTime = () => {
			try {
				const now = new Date();
				const formatted = new Intl.DateTimeFormat("en-US", {
					timeZone: "Asia/Kolkata",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: true,
				}).format(now);
				setTimeString(formatted);
			} catch {
				setTimeString("IST (UTC+5:30)");
			}
		};

		formatTime();
		const timer = setInterval(formatTime, 1000);
		return () => clearInterval(timer);
	}, []);

	return timeString;
}

import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";

function Timer({ onComplete }) {
	const [startTime, setStartTime] = useState(Date.now());
	const [progress, setProgress] = useState(0);
	const [color, setColor] = useState("#2db7f5");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const elapsedTime = (Date.now() - startTime) / 1000;

			const totalSeconds = 30;
			const newProgress = (elapsedTime / totalSeconds) * 100;

			setProgress(Math.min(newProgress, 100));

			if (newProgress < 40) {
				setColor("lightgreen");
			} else if (newProgress >= 40 && newProgress <= 60) {
				setColor("orange");
			} else {
				setColor("red");
			}

			if (newProgress >= 100 && onComplete) {
				onComplete();
				setStartTime(Date.now());
				setProgress(0);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [startTime, onComplete]);

	return (
		<Circle
			className="timer-circle h-[100px] w-[100px]"
			percent={progress}
			strokeWidth={10}
			strokeColor={color}
			trailWidth={7}
			trailColor="#D3D3D3"
		/>
	);
}

export default Timer;

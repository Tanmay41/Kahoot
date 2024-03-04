import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";

function Timer({ onComplete, trigger }) {
	const [startTime, setStartTime] = useState(Date.now());
	const [progress, setProgress] = useState(0);
	const [color, setColor] = useState("#2db7f5");
	const [elapsedTime, setElapsedTime] = useState(0);

	const totalSeconds = 30; // Define totalSeconds here

	useEffect(() => {
		setStartTime(Date.now());
		setProgress(0);

		const intervalId = setInterval(() => {
			const currentTime = Date.now();
			const elapsedTimeInSeconds = (currentTime - startTime) / 1000;

			const newProgress = (elapsedTimeInSeconds / totalSeconds) * 100;

			setProgress(Math.min(newProgress, 100));
			setElapsedTime(Math.floor(elapsedTimeInSeconds));

			if (newProgress < 40) {
				setColor("lightgreen");
			} else if (newProgress >= 40 && newProgress <= 60) {
				setColor("orange");
			} else {
				setColor("red");
			}

			if (newProgress >= 100 && onComplete) {
				onComplete();
				setStartTime(currentTime);
				setProgress(0);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [startTime, onComplete, trigger, totalSeconds]);

	return (
		<div>
			<Circle
				className="timer-circle h-[100px] w-[100px]"
				percent={progress}
				strokeWidth={10}
				strokeColor={color}
				trailWidth={7}
				trailColor="#D3D3D3"
			/>
			<p>
				Time left: {totalSeconds - elapsedTime}s / {totalSeconds}s
				<input
					id="elapsedTime"
					type="text"
					hidden
					value={elapsedTime}
					readOnly
				/>
			</p>
		</div>
	);
}

export default Timer;

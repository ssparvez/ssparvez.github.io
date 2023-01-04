import React, { useEffect } from 'react';
import './HelloText.scss';

export const HelloText = () => {
	// const [textIdx, setTextIdx] = useState(0);

	const textArray = ['world!', 'from New York!', 'everybody!']

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// setInterval(() => {
		// 	let currentIdx = textIdx;
		// 	setTextIdx(currentIdx + 1);
		// }, 500);
	});


	// let textThatChanges = textArray[textIdx % textArray.length];
	return (
		<div id="hello-text">
			<span>[</span>
			<div>
				<p>Hello,</p>
				<ul>
					<li>{textArray[0]}</li>
					<li>{textArray[1]}</li>
					<li>{textArray[2]}</li>
				</ul>
			</div>
			<span>]</span>
		</div>
	)
}

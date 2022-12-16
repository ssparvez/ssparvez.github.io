import jotterImage from './../assets/jotter.png';
import lineTabImage from './../assets/linetab.png';
import cryptofyImage from './../assets/cryptofy.jpg';
import audiumImage from './../assets/audium.png';
import geometricVRImage from './../assets/geometricvr.png';
import plDataImage from './../assets/pldata.png';

export const projectHistory = [
	{
		name: 'Jotter',
		years: [2020],
		mainURL: 'http://thejotter.xyz',
		codeURL: 'https://github.com/ssparvez/jotter',
		image: jotterImage,
		description: 'A full-stack web app for quickly taking and organizing notes',
		techStack: ['react', 'redux', 'node', 'express', 'mongodb']
	},
	{
		name: 'Line Tab',
		years: [2019],
		mainURL:
			'https://chrome.google.com/webstore/detail/line-tab/flfjdodphlkeahmbnchjjjkoooahhkio?hl=en-US',
		codeURL: 'https://github.com/ssparvez/line-tab',
		image: lineTabImage,
		description:
			'A CLI-inspired new tab extension for Google Chrome',
		techStack: ['html', 'js', 'css']
	},
	{
		name: 'Cryptofy',
		years: [2018],
		image: cryptofyImage,
		mainURL: 'https://ssparvez.github.io/cryptofy/',
		codeURL: 'https://github.com/ssparvez/cryptofy',
		description: 'A cross-platform mobile app that tracks the prices and latest news on top cryptocurrencies',
		techStack: ['ionic', 'angular', 'firebase']
	},
	{
		name: 'Audium',
		years: [2017],
		image: audiumImage,
		mainURL: 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/',
		codeURL: 'https://github.com/ssparvez/AudiumFrontEnd',
		description: 'A full-stack web clone of Spotify',
		techStack: ['angular', 'spring', 'mysql']

	},
	{
		name: 'GeometricVR',
		years: [2017],
		image: geometricVRImage,
		mainURL:
			'https://drive.google.com/file/d/1b6D29qBMbOsCPq_k_hg5pFzTj9bmwRWF/view?usp=sharing',
		codeURL: 'https://github.com/ssparvez/geometric-vr',
		description: 'A virtual reality app that visualizes 3D shapes for iOS/Android',
		techStack: ['unity', 'csharp']

	},
	{
		name: 'PL Data Visualization',
		years: [2016],
		image: plDataImage,
		mainURL: 'https://ssparvez.github.io/premier-league-data/',
		codeURL: 'https://github.com/ssparvez/premier-league-data',
		description: 'An interactive website that visualizes a Premier League soccer data set',
		techStack: ['js', 'd3', 'html', 'css']
	}
];
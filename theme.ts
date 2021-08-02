import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
	colors: {
		text: 'black',
		title: 'rgba(100,100,100,1)',
		background: 'rgb(255,255,255)',
		separator: 'rgba(0,0,0,.15)',
		tint: '#2f95dc',
		tabIcon: '#ccc',
		tabIconSelected: '#2f95dc',
	},
};

export const darkTheme: DefaultTheme = {
	colors: {
		text: 'white',
		title: 'rgba(155,155,155,1)',
		background: 'rgb(24,25,26)',
		separator: 'rgba(255,255,255,0.1)',
		tint: '#fff',
		tabIcon: '#ccc',
		tabIconSelected: '#fff',
	},
};
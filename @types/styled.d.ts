import 'styled-components/native';

declare module 'styled-components/native' {
	export interface DefaultTheme {
		colors: {
			text: string;
			title: string;
			background: string;
			separator: string;
			tint: string;
			tabIcon: string;
			tabIconSelected: string;
		};
	}
}

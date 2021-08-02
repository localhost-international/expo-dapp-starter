import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	font-family: 'space-mono';
	color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: ${(props) => props.theme.colors.text};
`;

export const Separator = styled.View`
	margin: 30px;
	height: 1px;
	width: 80%;
	background-color: ${(props) => props.theme.colors.separator};
`;

export const Link = styled.TouchableOpacity`
	margin-top: 15px;
	padding-vertical: 15px;
`;

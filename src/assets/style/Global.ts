import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		width: 100%;
    height: 100%;
    background-color: #fff;
		padding: 0;
		margin: 0 auto;
		font-family: '나눔고딕', NanumGothic, Dotum, '돋움', Helvetica, "Apple SD Gothic Neo", sans-serif;
    font-size: 12px;
	}
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
		height: 100%;
	}

	body, p, h1, h2, h3, h4, h5, h6, menu, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {
    margin: 0;
    padding: 0;
	}

	body {
		width: 100%;
    height: 100%;
    background-color: #fff;
		padding: 0;
		margin: 0 auto;
		font-family: '나눔고딕', NanumGothic, Dotum, '돋움', Helvetica, "Apple SD Gothic Neo", sans-serif;
		font-size: 12px;
		
		h4 {
			margin: 0;
			padding: 0;
			font-family: '나눔고딕', NanumGothic, Dotum, '돋움', Helvetica, "Apple SD Gothic Neo", sans-serif;
			font-size: 12px;
		}

		ul, ol {
				list-style: none;
		}
		
		button {
			font-family: '나눔고딕', NanumGothic, Dotum, '돋움', Helvetica, "Apple SD Gothic Neo", sans-serif;
			font-size: 12px;
			display: inline-block;
			overflow: visible;
			height: 23px;
			padding: 1px 4px 0;
			border: 1px solid #c3c3c3;
			background-color: #fff;
			color: #333;
			line-height: 100%;
			letter-spacing: 0;
			vertical-align: top;
			white-space: nowrap;
			cursor: pointer;
			-webkit-appearance: none;
			-webkit-text-size-adjust: none;
			border-radius: 0;
		}
	}
`;

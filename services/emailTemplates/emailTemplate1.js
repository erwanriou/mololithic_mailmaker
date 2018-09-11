const keys = require('../../config/keys').keys

module.exports = (survey) => {
  return `
  <html>
  	<head>
  		<style type="text/css">
  			@import url('https://fonts.googleapis.com/css?family=Roboto:100,400');
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
        	margin: 0;
        	padding: 0;
        	border: 0;
        	font-size: 100%;
        	font: inherit;
        	vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
        	display: block;
        }
        body {
        	line-height: 1;
        }
        ol, ul {
        	list-style: none;
        }
        blockquote, q {
        	quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
        	content: '';
        	content: none;
        }
        table {
        	border-collapse: collapse;
        	border-spacing: 0;
        }
        a {
        	text-decoration: none;
        }
  			body {
  		     font-family: 'Roboto', sans-serif;
  				 font-size: 14px;
  		   }
  			h1 {
  			  font-size: 3rem;
  			  font-weight: 100;
  				background-color: #ec9292;
  				color: white;
  				padding: 5rem;
  			}
  			h2 {
          color: black;
  				margin:1rem 0;
  				font-size: 2rem;
  				font-weight: bold;
  			}
  			h3 {
  				margin:2rem 0;
  				font-size: 1rem;
  				font-weight: bold;
  			}
  			footer {
  				margin-top: 4rem;
  				background-color: #343a40;
  				color: white;
  				padding: 5rem;
  			}
  			span {
  				padding: 0.5rem;
  			}
  			p {
          color: black;
  				padding: 0.5rem;
  			}
  			a {
  				padding: 1rem 2rem;
  				margin: 1rem;
  			}
  		</style>
  	</head>
  	<body>
  		<div style="text-align: center">
  			<h1>The MailMaker Application</h1>
  			<h2>WE ARE REQUESTING YOUR HELP!</h2>
  			<p>Please, help us answering the folowing question:</p>
  			<h3>${survey.body}</h3>
  			<div>
  				<a href="${keys.domain.url}/api/surveys/thanks">Yes</a>
  				<a href="${keys.domain.url}/api/surveys/thanks">No</a>
  			</div>
  			<footer>
  				<span>Copyright 2018 MailMaker - Erwan Riou</span>
  			</footer>
  		</div>
  	</body>
  </html>
    `
}

import Head from 'next/head';

const Meta= ({title, keywords, description}) => {
	return (
		<Head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			<meta charSet="UTF-8"></meta>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<meta name="keywords" content={keywords}/>
			<meta name="description" content={description}/>
			<title>{title}</title>
		</Head>
	)
}

Meta.defaultProps={
	title:'Magnitopic',
	keywords:'programing, code, page',
	description:'Magnitopic\'s web page'
}

export default Meta
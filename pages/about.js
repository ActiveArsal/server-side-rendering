import Link from 'next/link';

const about = () => {
	return(
		<div style={{fontSize: '20px', color: 'blue'}}>
			<h1>About Me</h1>
			<p>I am a Server Side Rendering specialist</p>
			<Link href='/'>
				Home
			</Link>
			{/*<a href='/'>Home</a>*/}
		</div>
	);
}

export default about;
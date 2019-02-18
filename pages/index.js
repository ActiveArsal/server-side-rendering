import Link from 'next/link';

const index = () => {
	return (
		<div> 
			<h1>Server Side Rendering</h1>
			<Link href='/about'>
				<button>About</button>
			</Link>
			<Link href='/robots'>
				<button>Robots</button>
			</Link>

			{/*<a href='/about'>About</a>*/} 
		</div>
	);
}

export default index;
import Link from 'next/link'
import Image from 'next/image'


export default function NotFound() {
	return (
		<div className='grid place-items-center z-10'>
			<Link href='/'>
				<Image src='/notfound.png ' width={500} height={500} alt='not found ' className='cursor-pointer' />
				
			</Link>
		</div>
	)
}

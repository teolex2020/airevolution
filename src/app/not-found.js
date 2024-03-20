import Link from 'next/link'
import Image from 'next/image'



export default function NotFound() {
	return (
		<div className='grid place-items-center z-10'>
			<Link href='/'>
				<Image
					src='/notfound.png '
					width={500}
					height={500}
					alt='not found '
					className='cursor-pointer'
				/>
				<div className='w-full flex justify-center'>
					<button className='border-2 rounded-3xl border-zinc-700/50 px-10 py-2 hover:font-semibold justify-center flex    duration-300  z-10   items-center gap-5  uppercase  $ text-xl mt-5'>
						Back to the Home page
					</button>
				</div>
			</Link>
		</div>
	)
}

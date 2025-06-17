import clsx from 'clsx'
import { ImgHTMLAttributes } from 'react'

interface ImageColumnProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
	className?: string
}

export const ImageColumn = ({ src, alt, className }: ImageColumnProps) => {
	return (
		<img
			className={clsx('w-1/3 object-cover h-screen blur-[2px]', className)}
			src={src}
			alt={alt}
		/>
	)
}

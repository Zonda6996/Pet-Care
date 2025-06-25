import clsx from 'clsx'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/Card'

import { ReactNode } from 'react'

interface AuthLayoutProps {
	className?: string
	title: ReactNode
	description: ReactNode
	form: ReactNode
	footerText: ReactNode
}

export const AuthLayout = ({
	title,
	description,
	form,
	footerText,
	className,
	...props
}: AuthLayoutProps) => {
	return (
		<div
			className={clsx(
				'flex flex-col justify-center items-center mx-auto pt-[50px]',
				className
			)}
			{...props}
		>
			<CardTitle className='text-center text-xl'>{title}</CardTitle>
			<Card className='w-[400px]'>
				<CardHeader>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>{form}</CardContent>
				<CardFooter className='items-center justify-center'>
					<div className='text-center text-sm'>
						<p className='[&_a]:underline [&_a]:underline-offset-4 flex-col flex'>
							{footerText}
						</p>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}

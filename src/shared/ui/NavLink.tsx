import { Link } from 'react-router-dom'
import { LiHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { RouteValue } from '../routes/routes'

interface NavLinkProps extends LiHTMLAttributes<HTMLLIElement> {
	route: RouteValue
	children?: ReactNode
	className?: string
}

function NavLink({ className, route, children, ...props }: NavLinkProps) {
	return (
		<li
			className={clsx(
				'hover:bg-light-gray rounded-md p-2 transition-colors',
				className
			)}
			{...props}
		>
			<Link to={route}>{children}</Link>
		</li>
	)
}

export default NavLink

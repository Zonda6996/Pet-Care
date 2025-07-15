import { PetList } from '@/modules/PetForm'

function DashboardPage() {
	return (
		<div className='pt-[120px] text-center font-bold text-2xl'>
			<PetList />
		</div>
	)
}

export const Component = DashboardPage

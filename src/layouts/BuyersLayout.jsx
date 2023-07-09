import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { buyersTags } from '../lib/utils';
import { useContext } from 'react';
import OtherContext from '../context/OtherContext';

const BuyersLayout = () => {
	const { id } = useParams();
	const { usersNumbers } = useContext(OtherContext);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<BackButtonNavigation />
				{!id && <CreateNewButton role='Users' />}
				{id && <UsersTagHolders tags={buyersTags} />}
			</div>
			{!id && (
				<header className='flex justify-start items-center gap-5 mt-3 md:mt-0'>
					<SquareBox
						number={usersNumbers.buyers}
						tag='Buyers'
						classnames='border border-primary-700'
					/>
					<div className='flex flex-col gap-2'>
						<Active_InactiveUsers
							key={Math.random()}
							active={true}
						/>
						<Active_InactiveUsers key={Math.random()} />
					</div>
				</header>
			)}

			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default BuyersLayout;

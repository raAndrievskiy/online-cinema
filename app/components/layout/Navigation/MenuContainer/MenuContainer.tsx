import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'
import styles from './Menu.module.scss'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* Genres Menu */}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer

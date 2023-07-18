import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logoImage from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			<Image
				src={logoImage}
				width={60}
				height={60}
				alt="Online cinema"
				draggable={false}
			/>
			<span className={styles.logoText}>Online cinema</span>
		</Link>
	)
}

export default Logo

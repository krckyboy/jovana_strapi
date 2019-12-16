import Fb from '../../../assets/images/svg/facebook.svg'
import Instagram from '../../../assets/images/svg/instagram.svg'
import React from 'react'

export default function SocialIcons() {
	return (
		<>
			<a
				href="https://www.facebook.com/jovana.jevtic.94"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Fb} alt="Facebook" />
			</a>
			<a
				href="https://www.instagram.com/kreativni_snovi_jovana_jevtic"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Instagram} alt="Instagram" />
			</a>
		</>
	)
}

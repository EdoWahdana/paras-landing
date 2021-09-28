import React from 'react'
import { iconDefaultProps } from '../IconProps'

const IconCamera = ({ size, color, ...props }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M4 5C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14.414C14.1488 4.99994 13.8945 4.89455 13.707 4.707L12.586 3.586C12.211 3.2109 11.7024 3.00011 11.172 3H8.828C8.29761 3.00011 7.78899 3.2109 7.414 3.586L6.293 4.707C6.10551 4.89455 5.85119 4.99994 5.586 5H4ZM10 14C10.394 14 10.7841 13.9224 11.1481 13.7716C11.512 13.6209 11.8427 13.3999 12.1213 13.1213C12.3999 12.8427 12.6209 12.512 12.7716 12.1481C12.9224 11.7841 13 11.394 13 11C13 10.606 12.9224 10.2159 12.7716 9.85195C12.6209 9.48797 12.3999 9.15726 12.1213 8.87868C11.8427 8.6001 11.512 8.37913 11.1481 8.22836C10.7841 8.0776 10.394 8 10 8C9.20435 8 8.44129 8.31607 7.87868 8.87868C7.31607 9.44129 7 10.2044 7 11C7 11.7956 7.31607 12.5587 7.87868 13.1213C8.44129 13.6839 9.20435 14 10 14Z"
			fill={color}
		/>
	</svg>
)

IconCamera.defaultProps = {
	...iconDefaultProps,
}

export default IconCamera

import React from 'react'

const ContactDescription = ({classNames, children}) => {
	return (
		<div className={"text-gray-300 " + classNames}>{children}</div>
	)
}

export default ContactDescription
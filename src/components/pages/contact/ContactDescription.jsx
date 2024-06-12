import React from 'react'

const ContactDescription = ({classNames, children}) => {
	return (
		<div className={"text-[#c0ab57] " + classNames}>{children}</div>
	)
}

export default ContactDescription
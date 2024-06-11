import React from 'react'

const ControlButtons = ({userDoc, confirmDelete}) => {
	return (
		<div>{userDoc && userDoc.role === "admin" && (
			<div className="absolute top-[-25px] left-0">
				<button
					onClick={confirmDelete}
					className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300"
				>
					Usuń
				</button>
				<button className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300">
					Edytuj
				</button>
			</div>
		)}</div>
	)
}

export default ControlButtons
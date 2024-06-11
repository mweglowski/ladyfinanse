import React from 'react'
import { Link } from 'react-router-dom'

const ControlButtons = ({userDoc, confirmDelete, postId}) => {
	return (
		<div>{userDoc && userDoc.role === "admin" && (
			<div className="absolute top-[-25px] left-0">
				<button
					onClick={confirmDelete}
					className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300"
				>
					Usuń
				</button>
				<Link to={`/blog/post/edit/${postId}`} className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300">
					Edytuj
				</Link>
			</div>
		)}</div>
	)
}

export default ControlButtons
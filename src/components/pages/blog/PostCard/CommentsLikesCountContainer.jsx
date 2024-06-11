import React from 'react'
import CommentIcon from "../../../../icons/comment.svg";
import LikeIcon from "../../../../icons/like.svg";

const CommentsLikesCountContainer = ({likesCount, commentsCount}) => {
	return (
		<div className="absolute bottom-1 right-[120px] z-20 rounded-lg flex">
        <div className="flex flex-col text-center">
          <img src={LikeIcon} className="w-[23px]" />
          <p className="mt-[-4px] text-gray-400">{likesCount}</p>
        </div>
        <div className="flex flex-col text-center">
          <img src={CommentIcon} className="w-[25px]" />
          <p className="mt-[-6px] text-gray-400">{commentsCount}</p>
        </div>
      </div>
	)
}

export default CommentsLikesCountContainer
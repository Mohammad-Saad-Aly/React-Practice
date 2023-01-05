import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

export default function posts(props) {
  return (
    <div>
      <div className='post-box'>
        <img src={props.profileImage} alt="" />
        <p>{props.profileText}</p>
        <div className='inner-box'>
          <div><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
          <div> <FontAwesomeIcon icon={faComment} /> Comment</div>
          <div><FontAwesomeIcon icon={faThumbsUp} /> Share</div>
        </div>
      </div>

    </div>
  )
}

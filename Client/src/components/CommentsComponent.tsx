import { useContext } from 'react'
import { IComment } from '../Interface/Interfaces'
import { UserLogContext } from '../Provider/CociProvider'
import { Link } from 'react-router-dom'

interface Prop {
    comments: IComment[]
}

export default function CommentsComponent({comments}: Prop) {
    comments = []
    const { user } = useContext(UserLogContext);

  return (
    <div>
        {comments.map((c) => 
            <p>{c.content} {c.author}</p>
        )}
        {user ? <input type='text'></input> : <button><Link to={'/'}></Link>Register</button>}
    </div>
  )
}

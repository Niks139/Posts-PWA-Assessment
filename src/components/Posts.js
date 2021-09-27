import React, { useState }  from 'react'
import './posts.css';
import ReplyPost from './Posts/ReplyPost';
import './Posts/reply.css'

const Posts = (props) => {

    const[reply,setReply] = useState([{}]) 

    const [rname,setRName] = useState('')
    const [remail,setREmail] = useState('')
    const [postReply,setPostReply] = useState('')
    const [showForm,setShowForm]=useState(false)

    const handleNameChange = (e) => {
        setRName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setREmail(e.target.value)
    }

    const handlePostChange = (e) => {
        setPostReply(e.target.value)
    }
    const handleSubmit = (id) => {
        setReply([...reply, {
            name : rname,
            email: remail,
            desc: postReply,
            id: id
        }]);
        setRName('')
        setREmail('')
        setPostReply('')
        console.log(id)
        setShowForm(true)
    }

   const  handleClick=(id)=>{
        return(
            // Reply form
            <>
            <div className='row'>
                <div className='col-sm-6 col-md-6'>
                    <input type='text' className='reply-form-input' placeholder='Repliers name' value={rname} onChange={handleNameChange}/>
                    <input type='email' className='reply-form-input' placeholder='Repliers email' value={remail} onChange={handleEmailChange}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <input type='textarea' className='reply-form-input'  placeholder='Add reply' value={postReply} onChange={handlePostChange}/>
                    <button className='reply-form-input' aria-label="Post Reply" onClick={()=>handleSubmit(id)}> Reply</button>
                </div>
            </div>
            </>
        )
    }

    const handleReplyClick= () => {
        if(showForm === true){
            setShowForm(false)
        }
        else {
            setShowForm(true)
        }
    }

    return (
        
        <div className='container box'>
            {props?.name ?(
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <span className='author-name'>{props.name}</span>
                                <span className='author-email mx-1'>{props.email}</span>    
                                <span className='float-end'>
                                    <button className='btn btn-danger mt-2 mb-2' aria-label="Delete Button" onClick={() => {props.removePost(props.id)}}>
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </span>                            
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <span className='author-desc'>{props.desc}</span>
                                <button className='btn' aria-label="Add Reply Button" onClick={handleReplyClick}><i class="fas fa-comment"></i></button>
                            </div>
                        </div>
                    </div> 
            ):(
                null
            ) }
          
           {showForm ? 
           <>
           {handleClick(props.id)}
           {
                reply.map((r)=>{
                return (
                <>
                    <ReplyPost data={r}/>
                </>
                )
                })
            }
           
           </>
           :null}
        </div>
    )
}

export default Posts

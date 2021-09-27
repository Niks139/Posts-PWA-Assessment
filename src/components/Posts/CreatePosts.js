import React, { useState } from 'react'
import Posts from '../Posts'
import {v4 as uuidv4} from 'uuid'
import '../Posts/createpost.css'

const CreatePosts = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [postDes,setPostDes] = useState('')
    const [search,setSearch] = useState('')

    //Existing posts array
    const[post,setNewPost] = useState([
        {
          name: 'Nirmit',
          email: 'p.niks007@gmail.com',
          desc: 'This is a simple check post',
          id: 1
        }
      ])      

    // Set name,email and desc according to the change in value
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePostChange = (e) => {
        setPostDes(e.target.value)
    }
    
    //Add new post to existing posts
    const handleSubmit = (e) => {
        e.preventDefault();
        var id = uuidv4();
        setNewPost([...post, {
            name : name,
            email: email,
            desc: postDes,
            id: id
        }]);
        setName('')
        setEmail('')
        setPostDes('')
        console.log(id)
    }

    // Remove/Delete the post
    const handleRemovePost = (id) => {
        const prevState = post.filter(p => p.id !== id);
        console.log(prevState);
        setNewPost([...prevState]);
    }


    return (
        <>
        <div className='row'>
            <input type="text" placeholder="Search" className="mb-2 w-50 mt-2 m-auto search-box" onChange={(event) => {setSearch(event.target.value)}}/>
            </div>
        <div className='author mx-auto'>
            
        
            {/* Form to submut the new post */}
            <form className='author-form m-auto' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <input type='text' placeholder='Author name' className='author-form-input' value={name} onChange={handleNameChange}/>
                    </div>
                    <div className='col-sm-6'>
                        <input type='email' placeholder='Author email' className='author-form-input' value={email} onChange={handleEmailChange}/>
                    </div>                
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <input type='textarea' rows="1" placeholder='Add post content' className='author-form-textarea' value={postDes} onChange={handlePostChange} />
                    </div>
                    <div className='col-sm-6'>
                        <button type='submit' className='btn btn-primary author-form-input'>Post <i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>  
            </form>
            </div>
            <div>

            {/* Pass the values to the Post Component */}
            {
                // Search funcitonality
                post?.filter(
                    (val) => {
                        if (search === ""){
                            return <Posts
                            name={val.name}
                            email={val.email}
                            desc={val.desc}
                            id={val.id}
                            removePost={handleRemovePost}
                        />
                        }
                        else if (
                            val.name.toLowerCase().includes(search.toLowerCase()) || 
                            val.email.toLowerCase().includes(search.toLowerCase()) || 
                            val.desc.toLowerCase().includes(search.toLowerCase()) ) {
                            
                        return <Posts
                            name={val.name}
                            email={val.email}
                            desc={val.desc}
                            id={val.id}
                            removePost={handleRemovePost}
                        />
                        }
                    }
                ).map((p)=>{
                    return <Posts
                        name={p.name}
                        email={p.email}
                        desc={p.desc}
                        id={p.id}
                        removePost={handleRemovePost}
                    />
                })
            }
        </div>
        </>
    )
}

export default CreatePosts

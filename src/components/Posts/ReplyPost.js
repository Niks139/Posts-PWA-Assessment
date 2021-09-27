import React from 'react'
import './reply.css'

function ReplyPost({data}) {
    return (
      <>
      <div className='row'>
        <div className='col'>
          <span className='replier-name'>{data.name}</span>
          <span className='replier-email mx-1'>{data.email}</span>
        </div>
      </div>
      <div className='row'>
          <span className='replier-desc'>{data.desc}</span>
      </div>
      </>
        
    )
}

export default ReplyPost

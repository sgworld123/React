import React from 'react'
import Profile from './Profile'

function Gallery(){
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
            <h2>Profile Image</h2>
            <Profile />
            <Profile />
        </div>
    )
}
export default Gallery
import React from 'react';

function Images(props){
    return  props.data.map(photo => (
        <li  key={photo.id}> <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />  </li>
    )); 
}
export default Images;
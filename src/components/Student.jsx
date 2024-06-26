import React, { useState} from 'react';

const Student = () => {
    const [selectedId, setSelectedId] = useState()

    const list = [
        {id:0,name:'Cochave'},
        {id:1,value:'Shira'},
        {id:2,value:'Esty'},
    ]

    const handleClick = (id) => {
        setSelectedId(id)
    }
    return (
        <div>
            {list.map(item=><li onClick={()=>handleClick(item.id)}>{item.value}</li>)}
            {selectedId ? <div>
                This is the selectedID {selectedId}
            </div>:<p>no selected </p>}

            <p>{!!selectedId && 'WOW'}</p>
        </div>
    );
};

export default Student;


import React, {useState} from 'react'

const Categories = ({ items }) => {

    const [activeItem, setActiveItem] = useState(1)

    return(
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map( (item, index) => <li 
                        key = {`${item}_${index}`} 
                        className = {`${activeItem === index ? 'active' : ''}`}
                        onClick = {() => setActiveItem(index)}
                    >{item}</li> )
                }
            </ul>
        </div>
    )
}

export default Categories
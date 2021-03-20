import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Item.css'

function Items({title,desc,first,descLinks, backgroundImg,leftBtnText,rightBtnText,twoButtons}) {
    return (
        <div className="items" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <span>{title}</span>
                    <div className="item__textDescription">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lower">
                    <div className="item__buttons">
                        <Button imp='primary' text={leftBtnText}/>
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnText}/>
                        )}
                    </div>
                    {first && (
                        <div className="item__expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Items

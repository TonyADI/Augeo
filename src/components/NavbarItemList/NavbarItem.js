import React from "react"

export const NavbarItemList = ({items}) => {
    return (
        <React.Fragment id={itemId} className={itemStyle}>
            {items ? items.map() : null}
        </React.Fragment>
    )
}
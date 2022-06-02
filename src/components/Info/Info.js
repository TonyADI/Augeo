export const Info = ({info, infoStyle, containerStyle}) => {
    return (
        <div className={`product-detail ${containerStyle || ''}`}>
                <span className={infoStyle || ''}>
                    {info}
                </span>
        </div>
    )
}

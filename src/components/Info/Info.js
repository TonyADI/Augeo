export const Info = ({info, detailStyle, containerStyle}) => {
    return (
        <div className={`product-detail ${containerStyle}`}>
                <span className={detailStyle}>
                    {info}
                </span>
        </div>
    )
}

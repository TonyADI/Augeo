// import { useState } from 'react';
export const Modal = ({modalStyle, containerStyle, heading, handleChange, name, children,
                       display, value, type, placeholder, submitValue, handleSubmit}) => {
    //const [name, setName] = useState('');
    return (
        <div className={modalStyle} style={{display: display}}>
            <div className={containerStyle}> {/* probably the same */}
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <h2>{heading}</h2>
                        <div className="input-container">
                            <input
                                className="input-field" 
                                type={type}
                                name={name}
                                onChange={handleChange} 
                                value={value}
                                placeholder={placeholder}/>
                            {children}
                        </div>
                        <input 
                            type="submit" 
                            className="button" 
                            value={submitValue}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
import { forwardRef } from "react";

let CustomInput = forwardRef((props,ref)=>{
    
    const {label,...rest} = props;

    return (
        <>
            <label>{label}</label>
            <input ref={ref} {...rest} />
        </>
    )
})

export default CustomInput = CustomInput
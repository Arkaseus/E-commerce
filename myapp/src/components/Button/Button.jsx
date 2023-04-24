
let Style={
    padding: '5px',
    height:'auto', width:'auto', 
    cursor:'pointer',
    background_color:'white',
    margin:'none'
}
let Button=(props)=>{

    return (
        <button style={{...Style,...props}} onClick={props.onClick} >
            {props.label}
        </button>
    );
}
export default Button;
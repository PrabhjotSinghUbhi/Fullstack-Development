// import styles from './button.module.css'


// USING Inline.
function button(){

    // OBJECT.
    const styles = {
        
            cursor: "pointer" ,
            backgroundColor: "hsl(200, 100%, 50%)" ,
            color: "#fff" ,
            padding:" 10px 20px" ,
            borderRadius: "5px" ,
            border: "none" ,
    }

    return (
        <button style={styles} >
            Click Me
        </button>
    );
}

export default button;
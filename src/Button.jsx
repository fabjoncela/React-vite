
function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH! 🤐";





    return (<button onClick={(e) => handleClick(e)}>click me pls 😊</button>);
}
export default Button
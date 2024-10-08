
function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Wellcome
        {" " + props.username} </h2>

const loginPrompt =<h2 className="login-prompt">Please log in</h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);


}
export default UserGreeting
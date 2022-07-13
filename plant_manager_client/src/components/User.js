import React from "react"
import { connect } from 'react-redux'
// import Countdown from './Countdown';    
// import Emoji from './Emoji'

const User = ({ user }) => {
return (
    <div>
        <h3> Hello, {user.username}!</h3>
    </div>
)
}

const mapStateToProps = state => {
    return { user: state.user}
}

export default connect(mapStateToProps)(User)
import React from 'react'

const Alert = (props) => {
  const capitalize = {
    textTransform: "Capitalize"
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong style={capitalize}>{props.alert.type === 'danger'? 'error:':props.alert.type }</strong> {props.alert.msg}
    </div>
  )
}

export default Alert
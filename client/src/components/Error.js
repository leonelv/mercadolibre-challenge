import React from 'react'
export default ({ message }) => (
  <div
    style={{
      width: '100%',
      height: '60vh',
      backgroundColor: 'white',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16
    }}
  >
    <p>{message}</p>
  </div>
)

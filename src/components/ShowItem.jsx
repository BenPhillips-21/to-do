import React from 'react'

const ShowItem = ({ list }) => {
  return list ? (
    <>
    <p>{list.content}</p>
    </>
  ) : (
    <p>Item not found</p>
  )
}

export default ShowItem
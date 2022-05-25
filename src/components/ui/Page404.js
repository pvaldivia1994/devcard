import React from 'react'

export const Page404 = () => {
  window.location.href = `${process.env.PUBLIC_URL}/`;
  return (
    <div>Page404</div>
  )
}

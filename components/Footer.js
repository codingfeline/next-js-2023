import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-2 px-4">{`@ ${new Date().getFullYear()}`}</footer>
  )
}

export default Footer

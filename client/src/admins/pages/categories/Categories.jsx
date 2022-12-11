import React, { useEffect } from 'react'

const Categories = ({ setSelectedLink, link }) => {

  useEffect(() => {
    setSelectedLink(link);
  }, []);

  return (
    <div>Categories</div>
  )
}

export default Categories
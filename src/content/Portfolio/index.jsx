import React from 'react'

// components
import Section1 from './Section1'
import Section2 from './Section2'

function PortfolioMain() {
  return (
    <div className='flex flex-col max-w-[636px] w-full'>
        <Section1 />
        <Section2 />
    </div>
  )
}

export default PortfolioMain
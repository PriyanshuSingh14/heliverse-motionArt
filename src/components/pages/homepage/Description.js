import React from 'react'

const Description = () => {
    return (
        <div className='flex  flex-col md:flex-row  justify-between mt-20 px-0 md:px-6'>
            <div className='flex flex-col '>
                <h2 className="text-xl font-outfit font-semibold"style={{
          background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }} >    <span className='block'>Transform</span>
                    
                    <span className='block'>Your Website</span>
                </h2>
                <h3>
                <span className='block'>With Motion Art</span>
                    
                    <span className='block'>Effect</span>
                </h3>
            </div>

        </div>
    )
}

export default Description
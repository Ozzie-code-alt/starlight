import React from 'react'
const Campsite = ()=>{
  return(
    <div>
      <h1>Campsite 1 </h1>
    </div>
  )
}



const Camp = () => {
  return (
    <section className=' border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:m-20'> 
          <div className='hide-scrollbbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
      <Campsite
      backgroundImage = ""
      />
      <Campsite/>
          </div>
    </section>
  )
}

export default Camp
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
  
        <section className="bg-white self-center items-center justify-center object-center mt-4 mb-4 mx-auto">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    Testimonials from Participants and Winners
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            alt="" 
width={500}
height={500}
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            alt="" 
width={500}
height={500}
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
           

            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            alt="" 
width={500}
height={500}
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
           
            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>
    </div>
  </div>
</section>
  )
}

export default Testimonials

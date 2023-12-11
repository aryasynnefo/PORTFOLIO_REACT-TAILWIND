import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid aperiam atque. Aspernatur nisi, at quibusdam delectus cum esse sunt quam ratione. Exercitationem sunt beatae iste perspiciatis? Officiis, obcaecati. Enim minima excepturi amet alias, atque accusamus neque optio itaque nulla nam suscipit fugit, facere rerum, eligendi cumque consequatur laboriosam cupiditate?
            </p>
            <br />
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit odio esse libero, nulla vel aperiam aliquid mollitia ea corporis nostrum quis odit iusto ipsam sit a error. Commodi nisi tenetur expedita nam assumenda soluta, id perspiciatis fugiat adipisci saepe quis quidem dicta provident deserunt ab! Suscipit sed harum sequi distinctio.</p>
        </div>
    </div>
  )
}

export default About
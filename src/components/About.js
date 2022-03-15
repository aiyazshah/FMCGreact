import React from 'react'
import { SiUnilever } from 'react-icons/si';

export default function About() {
  return (
    <div className='flex m-10 bg-green-50 '>
      <div className="w-1/2">
        <div className=' m-auto w-3/4 italic text-2xl'>
          <p> Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            Nulla suscipit reiciendis neque pariatur
            quidem natus voluptate dolor ducimus
            rem at quam saepe unde ut voluptatibus,
            velit rerum culpa eos! Ut?Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            Nulla suscipit reiciendis neque pariatur
            quidem natus voluptate dolor ducimus
            rem at quam saepe unde ut voluptatibus,
            velit rerum culpa eos! Ut?</p>
        </div>
        <div className="mt-16">
          <iframe title="" className='m-auto w-3/4' src="https://www.openstreetmap.org/export/embed.html?bbox=74.8057606816292%2C34.1796048355052%2C74.80875402688982%2C34.18090068621603&amp;layer=mapnik&amp;marker=34.180252763348484%2C74.80725735425949"></iframe>
        </div>
      </div>

      <div className='flex'>

        <div className='flex'>
          <div className='h-55 bg-gray-800 w-2'></div>
        </div>
        <div className='self-center'>
          <SiUnilever size={500} />
        </div>
      </div>
    </div>
  )
}

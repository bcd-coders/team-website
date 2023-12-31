import React from 'react'
import { SectionWrapper } from '@/shared'

interface workExperience {
    title: string,
    company: string,
    location: string,
    date: string,
    description: string,
    bulletPoints: string[]
}

interface Props {
    workExperience: workExperience[]
}

export default function workExperience({workExperience}: Props) {
  return (
    <SectionWrapper title="Work Experience"> 
      {workExperience.map((data, i)=>(
        <div key={i} className={i % 2 ? `mt-1` : `mt-half`}>
        <div className="flex mt-2">
          <h3 className='font-semibold text-lg'>
            {data.company} - {data.location}
          </h3>
          <span className="ml-auto text-muted">{data.date}</span>
        </div>
        <h4 className='italic text-lg text-gray-300'>{data.title}</h4>
        <p className='text-md ml-2'>{data.description}</p>
        <ul className="ml-3 text-sm text-gray-400 list-disc ml-2">
          {data.bulletPoints.map((bulletPoint) => (
            <li key={bulletPoint}>{bulletPoint}</li>
          ))}
        </ul>
      </div>
      ))}
   </SectionWrapper>
  )
}

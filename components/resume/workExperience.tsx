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
        <div className={i % 2 ? `mt-1` : `mt-half`}>
        <div className="flex">
          <h3>
            {data.company} - {data.location}
          </h3>
          <span className="ml-auto text-muted">{data.date}</span>
        </div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <ul className="ml-3">
          {data.bulletPoints.map((bulletPoint) => (
            <li key={bulletPoint}>{bulletPoint}</li>
          ))}
        </ul>
      </div>
      ))}
   </SectionWrapper>
  )
}

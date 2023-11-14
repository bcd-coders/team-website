import React from 'react'
import { SectionWrapper } from '@/shared'

interface education {
    school: string
    date: string
    degree: string
    location: string
}

interface Props {
    educationData: education[]
}

export default function education({educationData}: Props) {
  return (
    <SectionWrapper title="Education">
        {educationData.map(data=>(
            <div>
                <div className='flex'>
                    <h3>{data.school} - {data.location}</h3>
                    <span className="ml-auto text-muted">{data.date}</span>
                </div>
                <h4>{data.degree}</h4>
            </div>
        ))}
    </SectionWrapper>
  )
}

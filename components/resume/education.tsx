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
        {educationData.map((data, i)=>(
            <div key={i} className='mt-2'>
                <div className='flex'>
                    <h3 className='text-lg font-bold'>{data.school} - {data.location}</h3>
                    <span className="ml-auto text-muted">{data.date}</span>
                </div>
                <h4 className='italic'>{data.degree}</h4>
            </div>
        ))}
    </SectionWrapper>
  )
}

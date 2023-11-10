import React from 'react'
import { SectionWrapper } from '@/shared'

interface Props{
    programming: string[]
    soft: string[]
}

export default function skills({programming, soft}: Props) {
  return (
    <SectionWrapper title="Skills">
    <div className='flex'>
        <div>
            <h3>Programming Skills</h3>
            {programming.map((data) => (
                <p className="inline-block">
                <span className="mx-1">•</span>
                <span>{data}</span>
                </p>
            ))}
        </div>
        <div>
            <h3>Soft Skills</h3>
            {soft.map((data) => (
                <p className="inline-block">
                <span className="mx-1">•</span>
                <span>{data}</span>
                </p>
            ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

import React from 'react'
import { SectionWrapper } from '@/shared'

interface Props{
    programming: string[]
    soft: string[]
}

export default function skills({programming, soft}: Props) {
  return (
    <SectionWrapper title="Skills">
    <div className='flex flex-col mt-2'>
        <div>
            <h3 className='text-lg font-semibold'>Programming Skills</h3>
            {programming.map((data, i) => (
                <p key={i} className="inline-block text-sm text-gray-400">
                <span className="mx-1">•</span>
                <span>{data}</span>
                </p>
            ))}
        </div>
        <div>
            <h3 className='font-semibold'>Soft Skills</h3>
            {soft.map((data, i) => (
                <p key={i} className="inline-block text-sm text-gray-400">
                <span className="mx-1">•</span>
                <span>{data}</span>
                </p>
            ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

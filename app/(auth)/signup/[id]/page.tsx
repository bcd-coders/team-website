import React from 'react'
import { profileData } from './profileData'
import WorkExperience from '../../../../components/resume/workExperience'
import Education from '@/components/resume/education'
import Skills from '@/components/resume/skills'

interface Props {
  params: {id: number}
};

export default function profile({params}: Props) {
  const workData = profileData[params.id].workExperience || []
  const educationData = profileData[params.id].Education || []
  const programSkill = profileData[params.id].Skills?.programming || []
  const softSkill = profileData[params.id].Skills?.soft || []

  return (
    <div className="flex-col m-auto w-1/2 mt-20 border-2 border-solid p-3">
      <div className='text-center'>
        <h1 className='text-xl font-bold'>{profileData[params.id].Name}</h1>
        <h2 className='italic'>{profileData[params.id].Title}</h2>
        <p className='text-xs text-gray-400'><span>{profileData[params.id].Email}</span></p>
      </div>
      <div className='mx-4 mt-4'>
        <Skills key={params.id} programming={programSkill} soft={softSkill}/>

        <WorkExperience key={params.id} workExperience={workData}/>

        <Education key={params.id} educationData={educationData}/>
      </div>
    </div>
  )
}

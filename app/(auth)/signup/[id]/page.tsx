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
    <div className="flex-col m-auto mt-20 border-2 border-solid p-3">
      <h1>{profileData[params.id].Name} - {profileData[params.id].Title}</h1>
      
      <Skills programming={programSkill} soft={softSkill}/>

      <WorkExperience workExperience={workData}/>

      <Education educationData={educationData}/>
    </div>
  )
}

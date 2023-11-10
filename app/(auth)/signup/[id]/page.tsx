import React from 'react'
import { profileData } from './profileData'
import WorkExperience from '../../../../components/resume/workExperience'

interface Props {
  params: {id: number}
};

export default function profile({params}: Props) {
  const workData = profileData[params.id].workExperience || []
  return (
    <div>
        <WorkExperience workExperience={workData}/>
      
      <p className='text-white-600'>nice: {profileData[params.id].Name}</p>
    </div>
  )
}

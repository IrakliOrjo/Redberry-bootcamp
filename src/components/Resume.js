import React from 'react'

import Mail from '../images/mail.svg'
import Phone from '../images/Group.svg'
import Avatar from '../images/avatar.png'



import { format } from 'date-fns'

import {useForm} from 'react-hook-form'


const Resume = (props) => {

       
  

 

  return (
      
    <div>
        <div className={`flex flex-col justify-around pt-11 pl-[4em]
           
        `}>
            <div className=''>
                <h1 className='text-[#F93B1D] tracking-wide
                 font-[700] text-[2.125rem] mb-4'>{props.data?.name} {props.data?.surname}</h1>
                <div className='mb-1'>
                {props.data.email && <img className='inline-block mr-2' src={Mail} alt='mail-icon' />}
                <p className='inline-block text-[#1A1A1A] font-medium text-[1.1rem]'>{props.data.email}</p>
                </div>
            
                <div className='mb-6'>
                {props.data.phone_number && <img className='inline-block mr-2' src={Phone} alt='phone-icon' />}
                <p className='text-[#1A1A1A] inline-block font-medium text-[1.1rem]'>{props.data.phone_number}</p>
                </div>
                
            </div>
            <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.data.about && 'ჩემ შესახებ'}</p>
            <p className='max-w-[432px] text-[#1A1A1A] font-medium text-[1.1rem]'>{props.data.about} </p>
        
        {props.data.name && props.data.surname && props.data.email && props.data.phone_number && <div className='border w-[45.375em] mx-auto mt-5'></div>}
        </div>
        <img className='absolute rounded-full
        left-[98.3125em] top-[2em] w-[246px] h-[246px]' src={props.data.image} alt='avatar'/>
        
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.data.experiences[0].position && 'გამოცდილება'}</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>{`${props.data.experiences[0].position}${props.data.experiences[0].employer && ','} ${props.data.experiences[0].employer}`}</p>
                <p className='text-[#909090] mb-2'>
                    {`${props.data.experiences[0].start_date?.match(/^\d{4}/) ? props.data.experiences[0].start_date : ''}  ${props.data.experiences[0].due_date?.match(/^\d{4}/) ? props.data.experiences[0].due_date : ''}`}</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>{props.data.experiences[0].description}</p>
                     {props.data.position && <div className='border w-[45.375em] mx-auto mt-7'></div>}
            </div>
        </div>
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.data.education && 'განათლება'}</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>{`${props.data.educations[0].institute}${props.data.educations[0].degree_id && ','} ${props.data.educations[0].degree_id}`}</p>
                <p className='text-[#909090] mb-3'>{`${props.data.educations[0].due_date?.match(/^\d{4}/) ? props.data.educations[0].due_date : ''}  `}</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>{props.data.educations[0].description} </p>
                     {props.data.educations[0].description && <div className='border w-[45.375em] mx-auto mt-7'></div>}
            </div>
        </div>

    </div>

  )
}

export default Resume
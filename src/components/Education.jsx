import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../constants'; 
import Footer from './Footer';

const Education = () => {
  return (
    <div className='education bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='education'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Education.</h2>
      </div>

      <VerticalTimeline className='mt-9'>
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="relative vertical-timeline-element--education"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={edu.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={edu.url} target='_blank' rel="noopener noreferrer">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{edu.degree}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {edu.institution}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {edu.highlights.map((point, idx) => (
                <li
                  key={`education-point-${idx}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Footer />
    </div>
  );
}

export default Education;

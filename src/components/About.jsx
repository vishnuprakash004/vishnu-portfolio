import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Vishnu Prakash P M, a BE Electronics and Communication Engineering student 🎓 with a passion for crafting efficient software solutions and intuitive user interfaces. As an aspiring Java Developer, I specialize in Full Stack Development and have experience in building mobile applications and web applications. 🚀

Let's connect! I'm always open to learning and collaborating.
<a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/vishnu-prakash-p-m-2a84b6268/' target='_blank'>Connect with me on LinkedIn</a>.
              <br />
              ✍️ Beyond coding, I enjoy sharing knowledge and exploring new technologies. I love diving into software development, problem-solving, and emerging tech trends, always looking for ways to improve and innovate.

On a different note, I'm also passionate about photography 📸—not just as a hobby, but as a way to capture moments, tell stories, and see the world from a different perspective. 🌟📷</p>

<ButtonLink
  href='https:https://drive.google.com/file/d/1H6XALOs0NrpTcgG0VX4X4vyOUi6ONN_K/view?usp=sharing'
  target="_blank"
  rel="noopener noreferrer"
  text='View Resume →'
  padding={`p-3`}
/>


          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
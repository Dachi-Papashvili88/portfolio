import heroImg from '/public/assets/coding.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>Hi, I'm Dachi</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            React Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/Dachi-Papashvili88' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href='https://www.linkedin.com/in/dachi-papashvili-96924915b' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href='https://twitter.com/DachiPapashvili' target='_blank'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='ml-16 h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
const Skills = () => {
  return (
    <section className='py-20 align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 flex flex-wrap gap-x-8 md:flex justify-between lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
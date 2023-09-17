import profilePhoto from "/public/assets/profile-photo.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={profilePhoto} className="w-96 h-96 rounded-full" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm React Frontend Developer, based in Georgia, Rustavi. I love building apps that
            solve real-world problems, and that are delightful to use. 
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Recently, I completed the Frontend Developer Career Path at Scrimba.
            I build responsive websites using HTML, CSS, JavaScript and React
          </p>
        
        </article>
      </div>
    </section>
  );
};
export default About;

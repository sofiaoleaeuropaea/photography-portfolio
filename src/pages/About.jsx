import profilePhoto from '../assets/images/about-photo.jpg';
import { bioDetails } from '../data/index';
import InfoCard from '../components/InfoCard';

const About = () => {
  return (
    <>
      <div className='w-full h-80'></div>
      <section className='sm:grid sm:grid-cols-7 mx-4 text-base'>
        <div className='mt-11'>
          <img src={profilePhoto} alt='Sofia Oliveira' />
        </div>
        {bioDetails.map((bioDetail) => (
          <InfoCard
            key={bioDetail.id}
            className={bioDetail.className}
            title={bioDetail.title}
            description={bioDetail.description}
          />
        ))}
      </section>
    </>
  );
};
export default About;

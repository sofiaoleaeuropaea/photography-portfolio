import profilePhoto from "../assets/images/about-photo.jpg"
const About = () => {
  return (
    <>
      <div className='w-full h-44'></div>
      <section className='grid grid-cols-7'>
        <div>
          <img src={profilePhoto} alt='Sofia Oliveira' />
        </div>
        <div className="col-start-3 col-end-6">
          <h2 className="uppercase">Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            deleniti laboriosam, asperiores minima, in ad qui modi esse quasi
            quam officia! Aperiam ipsum accusantium quo necessitatibus autem
            quia officia sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos provident et itaque hic voluptate, commodi
            enim quod veritatis? Fugiat alias porro nesciunt ipsa similique
            tempore aut quae quibusdam ex iure.
          </p>
        </div>
        <div>
          <h2 className="uppercase">Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quasi earum perspiciatis eius ducimus impedit. Iusto est temporibus
            accusantium, obcaecati sit quos fuga animi corrupti rem, consequatur
            reprehenderit, accusamus sequi.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;

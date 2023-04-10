import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=""
      >
      </motion.div>
    </Tilt>  
  ) 
}


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p 
       variants={fadeIn("","", 0.1, 1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl
       leading-[30px]"
      >
         Lorem ipsum,
         dolor sit amet consectetur adipisicing elit. 
         Praesentium hic beatae deleniti minima perspiciatis 
         ad est possimus, laudantium corrupti, a iure. 
         Laboriosam ratione in illo dolorem dignissimos 
         suscipit ab, sapiente non amet veritatis at iusto 
         nesciunt soluta blanditiis nostrum unde, voluptatem 
         aspernatur. Saepe consequatur facilis maxime sint 
         dolor vero vitae nemo quod animi incidunt fugit libero
         tenetur natus sed eligendi asperiores quia tempora 
         assumenda minima, molestias eos perspiciatis expedita 
         adipisci nisi? Animi, quam, pariatur porro incidunt 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index = {index}
          {...service}/>
        ))}

      </div>
    </>
  )
}

export default About
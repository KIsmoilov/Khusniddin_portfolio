import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { SiProgress } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => (
  <section
    id="features"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <Title title="Features" des="What I Do" />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
      />
      <Card
        title="App Development"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
        icon={<AiFillAppstore />}
      />
      <Card
        title="SEO Optimisation"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
        icon={<SiProgress />}
      />
    </div>
  </section>
);

export default Features;

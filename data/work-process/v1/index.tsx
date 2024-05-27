import { WorkprocessSectionProps } from '@/src/sections/work-process/v1';
import Image from 'next/image';
import peakPerformanceImg from './peakperformance.png';
import innovativeplaymImg from './innovativeplaym.png';
import playercentricexImg from './playercentricex.png';
import dynamicdesignImg from './dynamicdesign.png';

export const workprocessSectionData: WorkprocessSectionProps = {
  texts: [''],
  cards: [
    {
      icon: <Icon1 />,
      title: 'Peak Performance Play',
      description:
        'Every game we develop is optimized for the best performance, ensuring a seamless gaming experience on any device',
      count: '01',
      link: '',
    },
    {
      icon: <Icon2 />,
      title: 'Innovative Play Mechanics',
      description:
        'Our studio focuses on crafting unique gameplay mechanics to refresh traditional games, aiming to engage and delight players with each memorable release ',
      count: '02',
      link: '',
    },
    {
      icon: <Icon3 />,
      title: 'Player-Centric Experiences',
      description:
        'We prioritize player engagement and fairness in our games, offering fun, transparency and the chance to win big',
      count: '03',
      link: '',
    },
    {
      icon: <Icon4 />,
      title: 'Dynamic Design',
      description:
        'Our game designs are a blend of artistry and innovation, creating dynamic gameplay that stands out in the crowded market of online slots',
      count: '04',
      link: '',
    },
  ],
};

function Icon1() {
  return (
    <Image
      src={peakPerformanceImg}
      alt="Peak Performance Play Icon"
      width={65}
      height={66}
    />
  );
}

function Icon2() {
  return (
    <Image
      src={innovativeplaymImg}
      alt="Peak Performance Play Icon"
      width={65}
      height={66}
    />
  );
}

function Icon3() {
  return (
    <Image
      src={playercentricexImg}
      alt="Peak Performance Play Icon"
      width={65}
      height={66}
    />
  );
}

function Icon4() {
  return (
    <Image
      src={dynamicdesignImg}
      alt="Peak Performance Play Icon"
      width={65}
      height={66}
    />
  );
}

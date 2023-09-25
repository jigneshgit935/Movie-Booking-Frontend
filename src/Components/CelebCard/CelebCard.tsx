import { CelebrityCardType } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import './CelebCard.css';

const CelebCard = (data: CelebrityCardType) => {
  return (
    <div className="celebcard">
      <Image src={data.imageUrl} alt={data.name} width={200} height={200} />
      <h3>{data.name}</h3>
      <h3>{data.role}</h3>
    </div>
  );
};

export default CelebCard;

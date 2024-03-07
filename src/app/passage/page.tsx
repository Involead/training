import React from 'react';
import TopicDescriptionSection from '@/components/TopicDescriptionSection';
import { VideosContainer } from '@/components/VideosContainer';

const Passage = () => {
  return (
    <div className='flex flex-row h-full'>
      <TopicDescriptionSection />
      <VideosContainer />
    </div>
  );
};

export default Passage;

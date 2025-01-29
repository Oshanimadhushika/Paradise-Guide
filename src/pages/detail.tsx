// "use client";

// import DetailPage from '@/components/DetailPage';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import DetailPage from '@/components/DetailPage';
import dynamic from 'next/dynamic';

const Detail = () => {
  const location = useLocation();
  const place = location.state?.place;

  if (!place) {
    return <div>Place not found</div>;
  }

  return <DetailPage place={place} />;
};

// Prevent SSR for this page
export default dynamic(() => Promise.resolve(Detail), {
  ssr: false
}); 
// import { useLocation } from 'react-router-dom';
// import DetailPage from '@/components/DetailPage';
// import dynamic from 'next/dynamic';

// const Detail = () => {
//   // const location = useLocation();
//   // const place = location.state?.place;

//   // console.log("location",location);
//   // console.log("location state",location.state?.place);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const placeData = queryParams.get("place");

//   const place = placeData ? JSON.parse(decodeURIComponent(placeData)) : null;

//   console.log("place", place);


//   if (!place) {
//     return <div>Place not found</div>;
//   }

//   return <DetailPage />;
// };

// // Prevent SSR for this page
// export default dynamic(() => Promise.resolve(Detail), {
//   ssr: false
// }); 
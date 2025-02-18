import { useRouter } from "next/router";
import DetailPage from "@/components/DetailPage"; 

const DetailView = () => {
  const router = useRouter();
  const {  location_code } = router.query;

  if ( !location_code) return <p>Loading...</p>;

  return <DetailPage  location_code={location_code} />;
};

export default DetailView;

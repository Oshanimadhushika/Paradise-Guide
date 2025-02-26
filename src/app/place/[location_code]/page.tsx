import DetailPage from "@/components/DetailPage";

const fetchPost = async (locationCode: string) => {
  if (!locationCode) return null;

  try {
    const response = await fetch(
      `https://paradise.aventureit.com/api/location/data`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location_id: 0,
          location_code: locationCode,
        }),
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch post:", response.status);
      return null;
    }

    const data = await response.json();
    return data.success ? data.output : null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export async function generateMetadata({
  params,
}: {
  params: { location_code: string };
}) {
  if (!params?.location_code)
    return { title: "Not Found", description: "Place not found." };

  const postData = await fetchPost(params.location_code);

  console.log("Fetched Post Data:", postData); 

  if (!postData) {
    console.warn("Metadata generation failed: No valid post data.");
    return { title: "Not Found", description: "Place not found." };
  }

  return {
    title: postData.title || "Paradise Guide",
    description: "Explore the beauty of this place.",
    openGraph: {
      title: postData.title || "Paradise Guide",
      // description: postData.description || "Explore the beauty of this place.",
      description: "Explore the beauty of this place.",

      url: `https://paradiseguide.netlify.app/place/${params.location_code}`,
      site_name: "paradise_guide",
      images: [
        {
          url: `https://th.bing.com/th/id/OIP.gASMlPqsrIt_9q8Y76PZKgHaFj?rs=1&pid=ImgDetMain`,
          width: 1260,
          height: 720,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}

// export async function generateMetadata({ params }: { params: { location_code?: string } }) {
//   // Ensure params exist before proceeding
//   if (!params || !params.location_code) {
//     console.warn("Metadata generation failed: No valid params.");
//     return { title: "Not Found", description: "Place not found." };
//   }

//   const locationCode = params.location_code; // Extract safely

//   try {
//     const postData = await fetchPost(locationCode);

//     if (!postData) {
//       console.warn("Metadata generation failed: No valid post data.");
//       return { title: "Not Found", description: "Place not found." };
//     }

//     return {
//       title: postData.title || "Paradise Guide",
//       description: "Explore the beauty of this place.",
//       openGraph: {
//         title: postData.title || "Paradise Guide",
//         description: "Explore the beauty of this place.",
//         url: `https://paradiseguide.netlify.app/place/${locationCode}`,
//         site_name: "paradise_guide",
//         images: [
//           {
//             url: `https://th.bing.com/th/id/OIP.gASMlPqsrIt_9q8Y76PZKgHaFj?rs=1&pid=ImgDetMain`,
//             width: 1260,
//             height: 720,
//           },
//         ],
//         locale: "en-US",
//         type: "website",
//       },
//     };
//   } catch (error) {
//     console.error("Metadata fetch error:", error);
//     return { title: "Error", description: "An error occurred." };
//   }
// }

export default function GetDetailsEachPlace({
  params,
}: {
  params: { location_code: string };
}) {
  if (!params.location_code) return <p>Loading...</p>;

  return <DetailPage location_code={params.location_code} />;
}





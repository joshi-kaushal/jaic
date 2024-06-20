import GridBackground from "@/components/grid-bg";
import ImageUpload from "@/components/image-upload";

export default function Home() {
  return (
    <main className="quarter-width mt">

      <h1 className="text-center">Just Another Image Converter</h1>
      <h2 className="text-center mt font-normal">An open source image converter that requires no sign-ups, allows bulk uploads, and has no limit on how many images you can convert.</h2> 

      <ImageUpload />
    </main>
  );
}


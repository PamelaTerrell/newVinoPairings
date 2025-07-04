import Image from 'next/image';

export const metadata = {
  title: 'About - Vino Pairings',
  description: 'Learn more about the creator of Vino Pairings.',
};

export default function AboutPage() {
  return (
    <div className="prose prose-lg mx-auto mt-8 p-4">
      <h1>About Vino Pairings</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/Me.jpg"
          alt="Photo of Pamela Terrell"
          width={200}
          height={200}
          objectFit="contain"
          className="rounded-full border border-gray-300 shadow"
        />
        <p className="mt-4 text-center">
          Hi, I’m Pamela Terrell, creator of Vino Pairings. I’ve always enjoyed exploring how great food and wine can complement each other, and I built this site to make it easy for everyone to find delicious combinations.
        </p>
      </div>
    </div>
  );
}

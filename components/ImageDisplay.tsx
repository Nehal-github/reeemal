'use client';
interface Props {
  index: number;
}

const images = [
  './1.jpg',
  './2.jpg',
  './23.jpg',
  './17.jpg',
  './5.jpg',
  './6.jpg',
  './7.jpg',
  './14.jpg',
  './9.jpg',
  './10.jpg',
  './11.jpg',
  './12.jpg',
  './13.jpg',
];

export default function ImageDisplay({ index }: Props) {
  const image = images[index % images.length]; // ensures safe looping

  return (
    <div className="flex justify-center p-4">
      <img
        src={image}
        alt="Romantic scene"
        className="rounded-xl shadow-romantic w-full max-w-md transition-transform duration-1000 ease-in-out hover:scale-105"
      />
    </div>
  );
}

import { leftGridUrl, rightGridUrl } from '@/config/photos';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="sm:w-[58%] mx-auto grid  gap-x-5 grid-cols-2 justify-items-center mt-20">
      <div className="space-y-5">
        {leftGridUrl.map((item, idx) => {
          return item.type === 'img' ? (
            <Image
              key={idx}
              src={item.url}
              width={300}
              height={400}
              alt="logo"
              className="object-cover rounded-lg"
            />
          ) : (
            <video
              src={item.url}
              key={idx}
              height={400}
              width={300}
              muted
              autoPlay
              playsInline
              loop
              className="object-cover rounded-lg"
            />
          );
        })}
      </div>
      <div className="mt-10 space-y-5">
        {rightGridUrl.map((item, idx) => {
          return item.type === 'img' ? (
            <Image
              key={idx}
              src={item.url}
              width={300}
              height={400}
              alt="logo"
              className="object-cover rounded-lg"
            />
          ) : (
            <video
              src={item.url}
              key={idx}
              height={400}
              width={300}
              playsInline
              muted
              autoPlay
              loop
              className="object-cover rounded-lg"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Gallery;

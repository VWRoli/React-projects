import Image from './Image';
import Video from './Video';
import { useGlobalContext } from '../context';

const Images = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <section className="images">
      {data
        .map((imageData) => {
          if (imageData.media_type === 'image') {
            return <Image key={imageData.date} imageData={imageData} />;
          } else {
            return <Video key={imageData.date} imageData={imageData} />;
          }
        })
        .sort((a, b) => {
          if (a.key < b.key) return 1;
          if (b.key < a.key) return -1;
          return 0;
        })}
    </section>
  );
};

export default Images;

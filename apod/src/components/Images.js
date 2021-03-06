import Image from './Image';
import { useGlobalContext } from '../context';

const Images = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <section className="images">
      {data.map((imageData) => {
        return <Image key={imageData.date} imageData={imageData} />;
      })}
    </section>
  );
};

export default Images;

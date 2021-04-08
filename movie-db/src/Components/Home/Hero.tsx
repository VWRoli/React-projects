import Carousel from "react-bootstrap/Carousel";

interface CarouselItem {
  id: number;
  src: string;
  title: string;
  slogan: string;
}

const CarouselItem: CarouselItem[] = [
  {
    id: 1,
    src: "../../images/bg-1.jpg",
    slogan: "Watch the new trailers in one place",
    title: "Exclusive videos",
  },
  {
    id: 2,
    src: "../../images/bg-2.jpg",
    slogan: "",
    title: "What to watch",
  },
  {
    id: 3,
    src: "../../images/bg-3.jpg",
    slogan: "",
    title: "Fan favorite movies",
  },
];

const Hero: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;

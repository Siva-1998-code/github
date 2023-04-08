import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark" className="mb-5">
      <Carousel.Item>
        <a href='#'>
          <img
            className="d-block w-100"
            src="https://cf.ltkcdn.net/jewelry/images/orig/273031-1600x1066-jewelry-101-masterclass-accessories.jpg"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='#'>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/831659416/photo/luxury-clothing-shop-for-men.jpg?s=612x612&w=0&k=20&c=ojRX38zxl2WyAfZBV4NlrBAQvjlLnvWekTuF2ZLzNIA="
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='#'>
          <img
            className="d-block w-100 "
            src="https://s3images.zee5.com/wp-content/uploads/2022/05/754287-gold-jewel.jpg"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;


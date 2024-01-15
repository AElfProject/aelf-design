import Carousel from '../components/Carousel/index'
export default function CarouselExample() {
  const mockData = [
    {
      id: '1',
      url: 'src/assets/swiper/1.png'
    },
    {
      id: '2',
      url: 'src/assets/swiper/2.png'
    },
    {
      id: '3',
      url: 'src/assets/swiper/3.png'
    },
    {
      id: '4',
      url: 'src/assets/swiper/4.png'
    },
    {
      id: '5',
      url: 'src/assets/swiper/5.png'
    },
    {
      id: '6',
      url: 'src/assets/swiper/6.png'
    },
    {
      id: '7',
      url: 'src/assets/swiper/7.png'
    },
    {
      id: '8',
      url: 'src/assets/swiper/8.png'
    }
  ]
  return (
    <Carousel
      data={mockData}
      onSlideClick={(item) => {
        console.log(item, 'item')
      }}
    />
  )
}

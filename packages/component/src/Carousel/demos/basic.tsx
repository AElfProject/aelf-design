import React from 'react';
import { Carousel } from 'aelf-design';

export default function CarouselExample() {
  const IPFSAddress =
    'https://silver-abstract-unicorn-590.mypinata.cloud/ipfs/QmUyz5k2i8mxWJ9oLZcZnnRXW4zzq4tjTZzVCJUcyrQgLJ';
  const array = Array.from({ length: 6 }, (_, index) => index + 1);
  const mockData = array.map((item) => {
    return {
      id: item,
      url: `${IPFSAddress}/${item}.png?pinataGatewayToken=J-4VqFJOcNwmARnesBKmHYTpzCmzYA9o5Zx2On1Tp2VOC6W1DYjx45AygAaXHfpV`,
    };
  });
  return (
    <Carousel
      data={mockData}
      onSlideClick={(item) => {
        console.log(item, 'item');
      }}
    />
  );
}

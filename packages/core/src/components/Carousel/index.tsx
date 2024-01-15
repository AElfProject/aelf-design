import { Swiper, SwiperSlide } from 'swiper/react'
import React, { SetStateAction, useState } from 'react'
import { useResponsive } from 'antd-style'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import useStyles from './styles'
import PrevButton from 'assets/prev.svg?react'
import NextButton from 'assets/next.svg?react'

export interface ISlideItem {
  url: string
  [key: string]: unknown
}

export interface ISwiperProps {
  data: ISlideItem[]
  className?: string
  onSlideClick?: (value: ISlideItem) => void
}

export default function Carousel(props: ISwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { data, onSlideClick, className } = props
  const { styles: st, cx, prefixCls } = useStyles()
  const responsive = useResponsive()
  return (
    <div className={cx(st.Carousel, prefixCls + 'carousel', className)}>
      <Swiper
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }}
        slidesPerGroupSkip={1}
        spaceBetween={16}
        slidesPerView={'auto'}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerGroup: 1,
            centeredSlides: false
          }
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-gallery"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="gallery-slide" key={index}>
              <img
                src={item.url}
                onClick={() => {
                  onSlideClick && onSlideClick(item)
                }}
              />
            </SwiperSlide>
          )
        })}
        <div className="swiper-button-next">
          <NextButton
            className="navigation-button"
            color="#070A26"
            data-hovercolor="#22253E"
            data-activecolor="#131631"
            width={16}
            height={60}
          />
        </div>
        <div className="swiper-button-prev">
          <PrevButton
            className="navigation-button"
            color="#070A26"
            data-hovercolor="#22253E"
            data-activecolor="#131631"
            width={16}
            height={60}
          />
        </div>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => {
          setThumbsSwiper(swiper as unknown as SetStateAction<null>)
        }}
        autoHeight
        spaceBetween={16}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              className={cx(
                responsive.md ? 'thumbs-slide' : 'mobile-thumbs-slide'
              )}
              key={index}
            >
              <div className="slide-container">
                <img src={item.url} />
                <div className="slide-mask"></div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

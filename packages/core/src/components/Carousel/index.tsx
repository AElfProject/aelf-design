import { Swiper, SwiperSlide } from 'swiper/react'
import React, { SetStateAction, useState } from 'react'
import { useResponsive } from 'antd-style'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import useStyles from './styles'
import PrevButton from 'assets/prev.svg?react'
import NextButton from 'assets/next.svg?react'
import 'swiper/swiper-bundle.css'

export interface ICarouselSlideItem {
  url: string
  [key: string]: any
}

type TGalleryObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export interface ICarouselProps {
  data: ICarouselSlideItem[]
  className?: string
  thumbsSlidesPerView?: number
  galleryObjectFit?: TGalleryObjectFit
  thumbsSwiperWidth?: number
  onSlideClick?: (value: ICarouselSlideItem) => void
}

export default function Carousel(props: ICarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const {
    data,
    onSlideClick,
    className,
    thumbsSlidesPerView = 5,
    thumbsSwiperWidth,
    galleryObjectFit
  } = props
  const {
    styles: st,
    cx,
    prefixCls
  } = useStyles({
    thumbsSwiperWidth:
      thumbsSwiperWidth ||
      72 * thumbsSlidesPerView + (thumbsSlidesPerView - 1) * 16,
    galleryObjectFit: galleryObjectFit || 'cover'
  })
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
        autoHeight
        breakpoints={{
          768: {
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
              <div className="slide-container">
                <img
                  src={item.url}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSlideClick && onSlideClick(item)
                  }}
                />
              </div>
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
        spaceBetween={responsive.md ? 16 : 12}
        slidesPerView={thumbsSlidesPerView}
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

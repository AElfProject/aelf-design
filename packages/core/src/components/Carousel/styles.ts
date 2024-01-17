import { createStyles } from 'antd-style'

const useStyles = createStyles(
  (
    { responsive, css },
    props: {
      thumbsSwiperWidth: number
    }
  ) => {
    return {
      Carousel: css`
        .swiper-gallery {
          margin-bottom: 16px;
          .gallery-slide {
            display: flex;
            justify-content: center;
            ${responsive.sm} {
              width: 89%;
            }
            img {
              width: 320px !important;
              height: 176px !important;
              border-radius: 6px;
              cursor: pointer;
              ${responsive.sm} {
                width: 100% !important;
                height: 100% !important;
              }
            }
          }
        }
        .thumbs-swiper {
          width: ${props.thumbsSwiperWidth}px;
          ${responsive.sm} {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
          }
          .thumbs-slide {
            width: 72px !important;
            height: 40px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 6px;
              cursor: pointer;
            }
          }
          .mobile-thumbs-slide {
            img {
              width: 100%;
              height: 100%;
              border-radius: 6px;
              cursor: pointer;
            }
          }
        }

        .slide-container {
          position: relative;
          .slide-mask {
            width: 100%;
            height: 100%;
            position: absolute;
            cursor: pointer;
            inset: 0;
            background-color: #ffffffcc;
          }
        }
        .swiper-button-next {
          width: 16px;
          height: 60px;
          right: 0;
          ::after {
            display: none;
          }
          ${responsive.sm} {
            display: none;
          }
        }

        .swiper-button-prev {
          width: 16px;
          height: 60px;
          left: 0;
          ::after {
            display: none;
          }
          ${responsive.sm} {
            display: none;
          }
        }

        .swiper-slide-thumb-active {
          .slide-mask {
            display: none;
          }
        }
      `
    }
  }
)

export default useStyles

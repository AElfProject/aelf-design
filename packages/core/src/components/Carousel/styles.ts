import { createStyles } from 'antd-style'

const useStyles = createStyles(
  (
    { responsive, css },
    props: {
      thumbsSwiperWidth: number
      galleryObjectFit: string
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
            .slide-container {
              width: 320px;
              height: 176px;
              img {
                height: auto;
                min-width: 100%;
                max-width: 100%;
                min-height: 100%;
                max-height: 100%;
                border-radius: 6px;
                object-fit: ${props.galleryObjectFit};
                border-radius: 6px;
                cursor: pointer;
                ${responsive.sm} {
                  aspect-ratio: 2/1.1;
                }
              }
              ${responsive.sm} {
                /* aspect-ratio: 4/3; */
                width: 100%;
                height: auto;
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
              object-fit: cover;
            }
          }
          .slide-container {
            position: relative;
            height: 100%;
            .slide-mask {
              width: 100%;
              height: 100%;
              position: absolute;
              cursor: pointer;
              inset: 0;
              background-color: #ffffffcc;
            }
          }
          .mobile-thumbs-slide {
            img {
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
              border-radius: 6px;
              object-fit: cover;
              aspect-ratio: 4/3;
            }
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

import { useMemo } from 'react'
import { useWindowSize } from 'react-use'
import isMobileFn from 'utils/isMobile'

export default function useResponsive() {
  const ua = navigator.userAgent
  const mobileType = isMobileFn(ua)
  const isMobile =
    mobileType.apple.phone ||
    mobileType.android.phone ||
    mobileType.apple.tablet ||
    mobileType.android.tablet

  const { width } = useWindowSize()
  const isSM = useMemo(() => {
    return width < 640
  }, [width])
  const isMD = useMemo(() => {
    return width < 768
  }, [width])
  const isLG = useMemo(() => {
    return width < 1024
  }, [width])
  const isXL = useMemo(() => {
    return width < 1280
  }, [width])
  const is2XL = useMemo(() => {
    return width < 1440
  }, [width])

  return {
    isMobile: isSM || isMobile,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL
  }
}

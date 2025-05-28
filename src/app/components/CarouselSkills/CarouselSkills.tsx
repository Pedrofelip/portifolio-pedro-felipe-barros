import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./carouselSkills.module.css"

type Skill = {
  image: string;
  title: string;
  description: string;
};

type PropType = {
  slides: Skill[]
  options?: EmblaOptionsType
  directionSlide: "forward" | "backward" | undefined
}

const CarouselSkills: React.FC<PropType> = (props) => {
  const { slides, options, directionSlide } = props
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, direction: directionSlide})])

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((item, index) => (
            <article className={styles.embla__slide} key={index}>
              <div className={styles.grid_card}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarouselSkills

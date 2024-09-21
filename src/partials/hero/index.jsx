/*
This is the Hero section
It supports different variants (image, video, particles) that can be rendered by passing a "variant" prop
*/

import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Typed from 'typed.js'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Link as ScrollLink } from 'react-scroll'
import ImageVariant from './variants/image'
import VideoVariant from './variants/video'
import ParticlesVariant from './variants/particles'
import styled from './style'

// Mouse shape component linked to the about section
const MouseShape = () => (
  <ScrollLink
    css={styled.MouseShape}
    to={'about'}
    spy={true}
    smooth={true}
    duration={600}
  >
    <div className='_shape'>
      <div className='_wheel' />
    </div>
  </ScrollLink>
)

// Hero component
const Hero = (props) => {
  // Destructure variant and rest of props
  const { variant, ...otherProps } = props

  // Data for typed effect
  const data = {
    roles: ['Writer', 'Singer', 'Feminist', 'Mentor', 'Friend', 'Mother', 'Grandmother'],
  }

  // UseEffect to initialize typed plugin
  useEffect(() => {
    const options = {
      strings: data.roles,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      smartBackspace: false,
      backDelay: 4000,
    }

    const typed = new Typed('#typed', options)
    return () => {
      typed.destroy()
    }
  }, [data.roles])

  /*
  Set the variant component based on the
  value of the "variant" property passed
  */
  const setVariant = () => {
    switch (variant) {
      case 'image':
        return <ImageVariant />
      case 'video':
        return <VideoVariant />
      case 'particles':
        /*
        ParticlesVariant also requires
        the preset property to be passed
        */
        return <ParticlesVariant preset={props.preset} />
      default:
        return <ImageVariant />
    }
  }

  return (
    // Render hero section
    <SectionWrapper
      css={styled.Hero}
      containerProps={{ className: 'h-100' }}
      style={{ position: 'relative' }}
      {...otherProps}
    >
      {/* Render the variant */}
      {setVariant()}

      <Row
        style={{ position: 'relative', zIndex: 1 }}
        className='align-items-center justify-content-center h-100'
      >
        {/* Text content */}
        <Col xs='12' lg='9' className='text-center'>
          <h2 className='_headline'>In memory of</h2>
          <h1 className='_name'>
            Norma
            <span> Marder</span>
          </h1>
          <h1 className='_headline'>1934 - 2023</h1>

          <h4 className='_headline'>
            <span id='typed' />
          </h4>
        </Col>

        {/* Display mouse shape */}
        <MouseShape />
      </Row>
    </SectionWrapper>
  )
}

// Export default Hero component
export default Hero

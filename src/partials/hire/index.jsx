/*
This is the Hire section
*/

import SectionWrapper from 'root/src/components/section-wrapper'
import hireImg from 'root/public/partials/hire/background.jpg'
import { Col, Row } from 'react-bootstrap'
import Button from 'root/src/components/button'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const Hire = (props) => (
  <SectionWrapper
    css={styled.Hire}
    backgroundProps={{
      alt: 'Hire background',
      src: hireImg,
      brightness: '17%',
    }}
    {...props}
  >
    {/* Title and description part */}
    <Row className='_row'>
        <h1 className='_title'>Music</h1>

        <h2 className='_title'>
                        <iframe width="80%" height="400" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1764075174&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </h2>

      {/* Button part */}

    </Row>
  </SectionWrapper>
)

export default Hire

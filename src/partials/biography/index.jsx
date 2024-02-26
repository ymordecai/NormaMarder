/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg1 from 'root/public/partials/about/picture1.jpg'
import aboutImg2 from 'root/public/partials/about/picture2.jpg'
import aboutImg3 from 'root/public/partials/about/picture3.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'Something' }}
    {...props}
  >
    <div className='row align-items-top'>
      {/* Image part - Displays profile image */}
      <Col xs='3' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'

          alt='About Picture'
          src={aboutImg1}
        />
        <Image
          className='img-thumbnail'

          alt='About Picture'
          src={aboutImg2}
        />

      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='9' lg='7'>
        { /* Information part */}
<div className='_title'><h2>By Michael Marder</h2></div>
<div className='_description'>
       <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac hendrerit nulla. Donec in tincidunt lacus. Mauris facilisis interdum lobortis. Praesent nec ultrices ante, eget cursus diam. Aliquam nisl tortor, viverra ac gravida nec, varius sit amet massa. Proin placerat, neque interdum sodales interdum, orci nulla elementum massa, nec blandit mi magna nec dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac tellus at arcu mollis aliquam. Morbi faucibus nisi vitae massa laoreet, laoreet pulvinar mi luctus. Vivamus orci nisi, condimentum non semper id, semper ut lorem.</h5>

<h5>Donec mollis tincidunt dolor, et consequat nunc tempus id. Donec venenatis cursus vulputate. Pellentesque blandit lectus nec cursus euismod. Vivamus iaculis lacinia orci, vehicula blandit leo porta ac. Duis eleifend mauris quis augue vulputate, non dictum diam finibus. Quisque euismod magna sed nisl tincidunt cursus. Aliquam sodales augue ligula, ac posuere dolor blandit a. Duis ante nisl, lacinia ut luctus ut, varius et urna. Quisque nisi mauris, tempor in ligula et, malesuada interdum ligula. Phasellus congue sodales purus, eget maximus urna ornare nec. Duis dictum odio sit amet nisl aliquam, eget venenatis enim lacinia. Integer volutpat facilisis dolor vitae cursus. Vivamus at consectetur quam. Aliquam at orci laoreet, bibendum ipsum quis, auctor ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>

<h5>Etiam ullamcorper ante quis augue aliquam, vel congue tortor mattis. Duis rutrum orci id tortor ultricies, ac consectetur est scelerisque. Donec finibus ante eget eros feugiat placerat. Vivamus congue vitae tortor sit amet euismod. Morbi et elit quis erat egestas ullamcorper. Aliquam ultrices est a metus finibus, quis pretium dui congue. Duis ac viverra augue, id pharetra mi. Integer accumsan lacus nec orci pellentesque, et faucibus eros eleifend. Vivamus quis scelerisque risus, nec ultrices erat. Nulla suscipit facilisis tellus, id dignissim mi vestibulum imperdiet. Phasellus ac mauris quis mauris posuere condimentum in non enim.</h5>


        </div>


      </Col>
    </div>
  </SectionWrapper>
)

export default About

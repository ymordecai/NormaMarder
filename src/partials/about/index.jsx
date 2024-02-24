/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg1 from 'root/public/partials/about/picture1.jpg'
import aboutImg2 from 'root/public/partials/about/picture2.jpg'
import aboutImg3 from 'root/public/partials/about/picture3.jpg'
import aboutImg4 from 'root/public/partials/about/picture4.jpg'
import aboutImg5 from 'root/public/partials/about/picture5.jpg'
import aboutImg6 from 'root/public/partials/about/picture6.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'The Derecho' }}
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
                <Image
          className='img-thumbnail'

          alt='About Picture'
          src={aboutImg3}
        />
                        <Image
          className='img-thumbnail'

          alt='About Picture'
          src={aboutImg4}
        />
                        <Image
          className='img-thumbnail'

          alt='About Picture'
          src={aboutImg6}
        />

      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='9' lg='7'>
        { /* Information part */}

<div className='_description'>
        <h5>Our Mother, Norma Marder, her words, her ideas, her memories, her artistry as a writer and a musician; how does one capture the essence of an artist who herself captured her life as her life's work? Read her essays, her stories, and her novel, listen to her sing, and you will absorb so much more than the retelling of facts and dates. Even tributes about our beautiful loving mother cannot compare to the tribute she gives to herself and the generations of our family. I will, however, tell the story of her passing which unfolded as if it were a final piece from one of her memoirs.</h5>

<h5>In April 2023, she was diagnosed with advanced-stage ovarian cancer. Almost immediately, she knew what she wanted to do.....no treatment. She wanted to go home and live whatever time she had left, with dignity, at her writing desk, in her beautiful house, with her beloved husband of sixty-six years. And so she came home, to a new space we created for her downstairs in the living room, with her bed, her nurse, a new routine, in control, with her life intact. She could have months, or maybe years. She spent two months living this new way, feeling tired, but good, not even taking aspirin, no pain. Her condition even seemed to improve a bit. Michael got her hearing aids and she could hear! And then on June 28 she got out of bed and fell, fracturing her hip. It was a setback which landed her back in the hospital. But the news wasn't so bad. A hairline fracture, it would heal on its own, she would be home in a few days. But we soon learned that an underlying infection had made her fall, and on the morning of June 29, the bottom dropped out of her blood pressure. My brother and I very quickly had to come to terms with what mom’s expressed intentions were regarding intervention.</h5>

<h5>But the real judgment came from the sky.</h5>

<h5>In <em>An Eye for Dark Places</em>—the novel she started in 1982 when we were living for a year in a small English village forty miles southwest of London—she tells the story of Sephony climbing down a hole in her kitchen floor. Published in 1988, the novel is set in a dystopian future where England is ruled by a totalitarian regime in which people are monitored, controlled, and bred. Sephony is an upper-class woman, unhappy in her world, judged by society, repressed by her family, and by the structures designed to keep her in her place: marriage, patriarchy, motherhood, and daughterhood. Conventionality is the gilded cage that entraps and stifles her.</h5>

<h5>Into this caged world comes a strange man, The Chicken Man, bringing whimsy, danger, mystery, chaos, and escape. He invites Sephony to climb down a ladder into a hole in her kitchen floor and into another dimension. His name is Claro. He is Sephony's guide and lover; her foil and provocateur. In Sephony's journey through the world of Domino, she finds a different kind of freedom, beauty, passion, and her own powerful sense of self and self determination. What she doesn't find however, is home. She must return to the place she came from, and with great sadness she climbs up the ladder back into her own world.</h5>

<h5>Back at home, Sephony meets Mo, an eccentric craftsman, another trapped person, who also has traveled to another dimension through a hole in the world. In Domino, Mo found his own guide, and his own love. Returning back to London, lost and desolate, he discovers that he feels rejuvenated in the midst of a storm, and in the midst of a particularly powerful one his lover comes and speaks to him from across the dimensions. In the center of the storm, Mo finds his love. And soon he spends all his time chasing storms, hoping to recapture these fleeting moments that emerge through the charged particles and atmospheric power. This image of the power within storms provides a pivotal idea in <em>An Eye for Dark Places</em>. As Sephony transforms into a freer and less repressed version of herself, her encounter with Mo is confirmation that she is not insane, that her experiences are real, and universal. I’ve often wondered how much of our mother was Sephony, the comfortable but repressed wife and mother, at odds with, but embedded in a comfortable and conventional life? And how much of her was Mo, the scrappy, awkward working class kid, and keeper of secrets? As in dreams, which were the source of so much of her art, perhaps all of the characters in her novel were representations of her truth.</h5>

<h5>And so, in the early afternoon of June 29, suddenly there was no more time. As her life surged up to its final crest, a violent storm came barreling through the prairie, across the ocean of corn and soy, so different from the steep hills and valleys of the Pennsylvania steel town where she grew up. This powerful wind formation called a derecho came smashing into our small city, pulling down trees, bringing down power lines, with furious thunder and lightning, charging the atmosphere with force and electricity. As Michael and I sat on opposite sides of the country, the caregiver raced to bring our father, fragile and disoriented, to the hospital as our mother lapsed into unconsciousness.</h5>

<h5>And in the vortex of this storm, just as it passed overhead, our mother was carried up and away, and left this earth.</h5>

        </div>


      </Col>
    </div>
  </SectionWrapper>
)

export default About

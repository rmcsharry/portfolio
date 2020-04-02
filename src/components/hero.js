import React from "react"

const Hero = props => {
  const block = props.data

  return (
    <>
      <img className='bg' src={block.BlockMedia.publicURL} width="200px" alt="background image"/>

      <style jsx>{`
        .bg {
          /* The image used */
          background-image: url("img_girl.jpg");

          /* Full height */
          height: 100%;

          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
      </style>
    </>
  )
}

export default Hero

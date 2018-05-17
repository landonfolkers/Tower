import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'

const PHOTO_SET = [
    {
      src: '/photos/farm.jpg',
      width: 4,
      height: 3
    },
    {
        src: '/photos/farm4.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/photos/farm8.jpg',
        width: 4,
        height: 3
      }
  ]

  export default class Photos extends React.Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} />
	)
    }
}

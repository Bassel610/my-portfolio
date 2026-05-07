'use client';
import Gallery from '../../Gallery';

export default function Preview({ images, title }) {
  return <Gallery images={images} alt={title} />;
}

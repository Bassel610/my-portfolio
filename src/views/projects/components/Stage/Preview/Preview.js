'use client';
import Iframe from './Iframe';
import Image from './Image';

export default function Preview({ src, title, isIframe }) {
  return isIframe ? (
    <Iframe src={src} title={title} />
  ) : (
    <Image src={src} alt={title} />
  );
}

"use client"
import { ReactNode } from 'react';

import { Parallax } from 'react-parallax';

interface Props {
    children: ReactNode
}

function ParallaxWrapper({
    children
}: Props) {
  return (
    <Parallax bgImage='/assets/img/manufacturing-facility.png' bgImageAlt="Manufactoring Facility" strength={200}>
        {children}
    </Parallax>
  )
}

export default ParallaxWrapper
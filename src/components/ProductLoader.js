import React from 'react'
import Skeleton from "react-loading-skeleton";

function ProductLoader() {
  return (
    <Skeleton count={10} />
  )
}

export default ProductLoader
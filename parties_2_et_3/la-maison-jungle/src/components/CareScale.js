import imgSun from '../images/sun.svg'
import imgWater from '../images/water.svg'

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? <img src={imgSun} alt="Sun" /> : <img src={imgWater} alt="Water" />

  return (
      <div>
          {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
          )}
      </div>
  )
}

export default CareScale

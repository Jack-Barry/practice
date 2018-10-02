/*
We can set default values for parameters
*/

const calculateDiscount = (price: number, rate: number = 0.5) => {
  const discount = price * rate
  console.log(`Discount: ${discount}`)
}

calculateDiscount(100)
calculateDiscount(100, 0.3)

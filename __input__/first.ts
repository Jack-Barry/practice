let global_num: number = 20 //global, accessible anywhere

class Numbers {
  num: number = 10 //class, accessible on instances of the class
  static sval: number = 5 //static, available on class

  storeNum(): number {
    let local_num: number = 30 //local, only available within the method
    return local_num
  }
}

const obj = new Numbers()

console.log(`global_num:   ${global_num}`)
console.log(`Numbers.sval: ${Numbers.sval}`)
console.log(`obj.num:      ${obj.num}`)
console.log(`local_num:    ${obj.storeNum()}`)

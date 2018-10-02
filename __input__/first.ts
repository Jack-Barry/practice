class StaticExample {
  static num: number

  static disp(): void {
    console.log(`Num is ${StaticExample.num}`)
  }
}

StaticExample.num = 22
StaticExample.disp()

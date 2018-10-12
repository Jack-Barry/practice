let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

/**
 * Error, ReadonlyArray does not allow updating of values
 * ro[0] = 12
 * ro.push(5)
 * ro.length = 100
 * a = ro
 */

/**
 * The following is allowed by overriding with a type assertion
 */
a = ro as number[]

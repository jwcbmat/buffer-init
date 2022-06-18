const Buffer = require('buffer').Buffer

const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64])

console.log(buf) // outputs <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

/**
 * @description  convert to "utf16le"
 */
console.log(buf.toString('utf16le')) // outputs '敨汬⁯潷汲'

/**
 * @description  convert to "utf8"
 */
console.log(buf.toString('utf8')) // outputs 'Hello world'



/**
 * @title Convert String to Buffer:
 * 
 * Encodings work in “both directions”. 
 * That is, you can convert from a buffer to a string and from a string to a buffer. 
 * We already saw that converting to a string can be done with the toString method. 
 * To get a buffer from a string you can use the Buffer.from method like this:
 */
console.log(Buffer.from('Hello World', 'utf8')) // outputs <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>


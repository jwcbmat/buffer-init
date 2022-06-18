/**
 * @title Creating buffers:
 * 
 * Use: 
 *      Buffer.alloc()
 *      Buffer.allocUnsafe()
 *      Buffer.from()
 * 
 * the simplest is probably just using the alloc method. 
 * If you know you’re going to fill up the buffer immediately then you can use 
 * allocUnsafe which is more efficient but doesn’t clear out random unused bytes from the buffer.
 * Or you can use the from method, where you’ll most commonly be passing in an array of numbers,
 * a string, or another buffer.
 */

const Buffer = require('buffer').Buffer

const buf = Buffer.from('Hello world', 'utf8')

console.log(buf.toString('utf8')) // outputs 'hello world'

/**
 * @title Numbers:
 * 
 * @method
 * - Either ‘read’ or ‘write’ to indicate the type of operation.
 * - Followed by either ‘Float’, ‘Double’, ‘Int’, or ‘UInt’ (unsigned int).
 * - Followed by the bitlength. This isn’t used by floats or doubles since 
 * they have an assumed bitlength of 32 and 64 respectively.
 * - Followed by ‘BE’ or ‘LE’, big-endian and little-endian respectively. 
 * This isn’t used by 8 bit integers because endianness is a byte-level property. 
 * You can’t order a single byte.
 */

// create an empty buffer with length of 4 bytes.
const bufNumber = Buffer.alloc(4)

// write the unsigned 32-bit, big-endian number 123 into the buffer starting
// at index 0 of the buffer.
bufNumber.writeUInt32BE(123, 0)

// read the number starting at index 0
console.log(bufNumber.readUInt32BE(0)) // outputs: 123

/**
 * @tips
 * 
 * copy - 
 * 
 * when you have a buffer and you want save your content in new buffer
 */

// create an empty buffer with length of 11 bytes.
const bufCopy = Buffer.alloc(11)

// create two buffers, one that contains 'hello ', the other 'world'.
const word1 = Buffer.from('Hello', 'utf8')
const word2 = Buffer.from('world', 'utf8')

// copy the word buffers into `buf` at index 0 and 6 respectively.
word1.copy(bufCopy, 0)
word2.copy(bufCopy, 6)

console.log(bufCopy.toString('utf8')) // outputs 'hello world'

// Import the encryptors functions here.
const encryptors = require('./encryptors');
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
    let ceasarMessage = caesarCipher(str, 5);
    let symbolMessage = symbolCipher(ceasarMessage);
    return reverseCipher(symbolMessage);
  }
  
  const decodeMessage = (str) => {
    let reverseDecode = reverseCipher(str);
    let symbolDecode = symbolCipher(reverseDecode);
    return caesarCipher(symbolDecode, 21);
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);
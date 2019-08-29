//隨機從陣列中抽一個value出來
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

//隨機產生密碼
function generatePassword(options) {
  //建立要放進陣列的資料
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  //建立空陣列
  let collection = [];

  //如果小寫字母開啟，將小寫字母放進collection
  if (options.lowercase === "on") {
    collection = collection.concat(...lowerCaseLetters);
  }

  //如果大寫字母開啟，將大寫字母放進collection
  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  //如果數字開啟，將數字放進collection
  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  //如果符號開啟，將符號放進collection
  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }
  //如果excludeCharacters有值，將collection中對應的字符剃除
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`);
    collection = collection.filter(
      //原本有對應的value會回傳對應的資料，但是由於是要剃除對應的資料，所以要用!回傳false來剔除
      character => !options.excludeCharacters.includes(character)
    );
  }

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  //依照輸入的長度，將sample隨機取出的value組成字串
  let password = "";
  for (let i = 0; i < options.length; i++) {
    password += sample(collection);
  }

  return password
}

module.exports = generatePassword

function rot13(str) {
  input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  temp = "";
  for (let i = 0; i < str.length; i++) {
    if (!input.includes(str[i])) {
      temp += str[i];
    } else {
      for (let j = 0; j < input.length; j++) {
        if (str[i] === input[j]) {
          temp += output[j];
        }
      }
    }
  }
  console.log(temp);
}

rot13("test");

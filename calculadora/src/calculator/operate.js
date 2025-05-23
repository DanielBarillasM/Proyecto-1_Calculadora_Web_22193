const operate = (a, b, operation) => {
  let result = 0
  switch (operation) {
    case '+': result = a + b; break
    case '-': result = a - b; break
    case '*': result = a * b; break
    case '/': result = a / b; break
    case '%': result = a % b; break
    default: return 'ERROR'
  }

  if (isNaN(result) || result < 0 || result > 999999999) {
    return 'ERROR'
  }

  return result
}

export default operate
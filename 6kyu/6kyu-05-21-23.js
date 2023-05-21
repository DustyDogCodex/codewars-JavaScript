/* Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).
 */

function calc(expr) {
  const num_array = expr.split(' ');
  const stack = [];
  for (i = 0, l = num_array.length; i < l; i++)
  {
    switch(num_array[i])
    {
      case '*':
        stack.push(stack.pop() * stack.pop())
        break;

      case '+': 
        stack.push(stack.pop() + stack.pop())
        break;

      case '-':
        let temp = stack.pop(); stack.push(stack.pop() - temp)
        break;

      case '/':
        let temp1 = stack.pop(); stack.push(stack.pop() / temp1)
        break;

      case '':
        continue;

      default:
        stack.push(Number(num_array[i]));
    }    
  }
  return stack.length ? stack.pop() : 0;
}

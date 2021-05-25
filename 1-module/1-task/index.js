function factorial(n) {
  let a = 1;
  while(n){
  if ( n == 0 || n == 1)
    break ;
  a *= n;
  n = n - 1
  }
  return a;
}

function add(a, b) {
    return a + b;
}
add(1, 1); // OK 
// add("placki", 1) // Errors but still compiles
// Argument of type 'string' is not assignable to parameter of type 'number'. ts(2345)
// add('ala','makota')

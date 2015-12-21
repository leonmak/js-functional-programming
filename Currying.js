// Here's the function that we want to recurse.
X = function (recurse, n) {
  if (0 === n)
    return 1;
  else
    return n * recurse(recurse, n - 1);
};

// This will get X to recurse.
Y = function (builder, n) {
  return builder(builder, n);
};

// Here it is in action.
Y(
  X,
  5
);


// No assignment this time.
function al (builder, n) {
  return builder(builder, n);
}(
  function (recurse, n) {
    if (0 === n)
      return 1;
    else
      return n * recurse(recurse, n - 1);
  },
  5
);

// Using fn(builder){ return function(n) {.. } } (arg)
// The dreaded Y-combinator in action!
function Y(builder) { return function (n) {
  return builder(builder)(n);
}}(
  function (recurse) { return function (n) {
    if (0 === n)
      return 1;
    else
      return n * recurse(recurse)(n - 1);
  }; })(
  5 // arg
);

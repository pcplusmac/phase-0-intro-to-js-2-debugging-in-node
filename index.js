let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`The loop has executed ${count} time.`);
  } else {
    console.log(`The loop has executed ${count} times.`);
  }
  count += 1;
  // Add the second breakpoint, so that we can check both before and after the incrementation of count variable. 
  debugger; 
}

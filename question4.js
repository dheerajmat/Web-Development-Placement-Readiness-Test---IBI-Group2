// First Promise
const step1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("dheeraj1.");
      resolve();
    }, 1000);
  });
  
  // Second Promise
  const step2 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("dheeraj2 ");
      resolve();
    }, 1500);
  });
  
  // Third Promise
  const step3 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("dheeraj3");
      resolve();
    }, 800);
  });
  
  
  // Promise Chaining
  step1
    .then(() => step2)
    .then(() => step3)
    .then(() => {
      console.log("All steps completed!");
    });
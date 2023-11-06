async function printNumbers() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  for (let i = 1; i <= 6; i++) {
    if (i <= 5) {
      await sleep(1000);
    } else {
      await sleep(i * 1000);
    }
    console.log(i);
  }
}

async function main() {
  await printNumbers();
}

main();

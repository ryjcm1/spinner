// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = "|/-\\|/-\\|";

const spin = (spinner) =>{
  let increment = 0;

  for (let symbol of spinner) {
    setTimeout(()=>{
      process.stdout.write(`\r${symbol}`);

    }, 100 + increment * 200);

    increment++;
  }

};

spin(spinner);


export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "edemenko" );
  }

  if (query.includes("What is your name?")) {
    return "edemenko-313"; 
  }


  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) + parseInt(numbers[1]);
      return `${result}`;  // Return just the number as a string
    }
  }

  // Handle largest number queries like "Which of the following numbers is the largest: 93, 53, 50?"
  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
    if (numbers && numbers.length > 1) {
      const largest = Math.max(...numbers.map(num => parseInt(num)));
      return `${largest}`;  // Return just the largest number as a string
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) * parseInt(numbers[1]);
      return `${result}`;  // Return just the multiplication result as a string
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
    if (numbers) {
      const isSquareAndCube = (num: number) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const results = numbers.filter(num => isSquareAndCube(parseInt(num)));
      return results.join(", ");  // Return the matching numbers, if any, as a comma-separated string
    }
}

if (query.toLowerCase().includes("which of the following numbers are primes")) {
  const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
  if (numbers) {
    const isPrime = (num: number) => {
      if (num <= 1) return false;  // 0 and 1 are not prime
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;  // If divisible by any number other than 1 and itself, not prime
      }
      return true;
    };
    const primes = numbers.filter(num => isPrime(parseInt(num)));
    return primes.join(", ");  // Return the prime numbers as a comma-separated string
  }
}

if (query.toLowerCase().includes("minus")) {
  const numbers = query.match(/(\d+)/g);  // Extract numbers from the query
  if (numbers && numbers.length === 2) {
    const result = parseInt(numbers[0]) - parseInt(numbers[1]);
    return `${result}`;  // Return just the subtraction result as a string
  }
}


  return "";
}


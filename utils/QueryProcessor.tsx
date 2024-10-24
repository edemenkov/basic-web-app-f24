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


  if (query.includes("plus")) {
    const numbers = query.match(/(\d+)/g);
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) + parseInt(numbers[1]);
      return `The result is ${result}`;
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/(\d+)/g); 
    if (numbers && numbers.length > 1) {
      const largest = Math.max(...numbers.map(num => parseInt(num)));
      return `The largest number is ${largest}`;
    }
  }


  return "";
}


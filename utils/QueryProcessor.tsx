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


  return "";
}


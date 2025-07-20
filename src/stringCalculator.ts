
export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    let input = numbers;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n(.*)/);
      if (match) {
        delimiter = new RegExp(match[1]);
        input = match[2];
      }
    }
  
    const tokens = input.split(delimiter);
    const negatives: string[] = [];
    const total = tokens.reduce((sum, val) => {
      const num = parseInt(val.trim(), 10);
      if (isNaN(num)) return sum;
      if (num < 0) negatives.push(num.toString());
      return sum + num;
    }, 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return total;
  }
  

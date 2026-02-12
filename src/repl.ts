export function cleanInput(input: string): string[] {
   const trimInput = input.trim();
   const lowerCaseInput = trimInput.toLowerCase();
   const arr = lowerCaseInput.split(" ");
   return arr;
}

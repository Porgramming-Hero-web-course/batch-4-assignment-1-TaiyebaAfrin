function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
      if (!obj.hasOwnProperty(key)) {
        return false; 
      }
    }
    return true; 
  }
  
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
  
  
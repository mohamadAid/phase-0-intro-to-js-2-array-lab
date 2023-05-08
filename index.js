// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//appends an element to the end of the cats array
const destructivelyAppendCat = (name) => {
    return cats.push(name);
  };
  
  //prepends an element to the beginning of the cats array
  const destructivelyPrependCat = (name) => {
    return cats.unshift(name);
  };
  
  //removes the last element from the cats array
  const destructivelyRemoveLastCat = () => {
    return cats.pop();
  };
  
  //removes the last element from the cats array
  const destructivelyRemoveFirstCat = () => {
    return cats.shift();
  };
  
  //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
const appendCat = (name) => {
  let copyCats = [...cats, name];
  return copyCats;
};

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
const prependCat = (name) => {
  let copyCats = [name, ...cats];
  return copyCats;
};

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
const removeLastCat = () => {
  return cats.slice(0, -1);
};

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
const removeFirstCat = () => {
  return cats.slice(1);
};
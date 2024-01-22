function hasTargetSum(array, target) {
  const visited = new Set()

  for (const num of array) {
    const diff = target - num
    if (visited.has(diff)) {
      return true
    }
    visited.add(num)
  }

  return false
}

// The time complexity of this algorithm is O(n) because it iterates through the array once.
// The space complexity is also O(n) because it uses a set to store visited elements, and the set's size can be at most the size of the input array.

// The hasTargetSum function operates as follows:
// It initializes an empty hash set to keep track of visited elements.
// For each element in the input array:
// - It calculates the difference (diff) between the target sum and the current element.
// - If the difference (diff) exists in the hash set, it means that we have found two elements that add up to the target sum, and the function returns true.
// - Otherwise, it adds the current element to the hash set to mark it as visited.
// If the loop completes without finding a valid pair, the function returns false.

// The hasTargetSum function efficiently finds if there are two elements in the input array that add up to the target sum, making use of the hash set to optimize the search process.

// You can run node index.js to view these console logs
if (require.main === module) {

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10))
  
  console.log("")
  
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25))
  
  console.log("")
  
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([1, 2, 5], 4))
  
  console.log("")
  
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3))
  
  console.log("")
  
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5))
  
  console.log("")
  
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4))
  
  console.log("")
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4))
}
module.exports = hasTargetSum
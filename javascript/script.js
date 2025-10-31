const nums = [3, 7, 2, 9, 12, 5, 8];

function findMaxAndMin(nums){ 
    let max = nums[0];
    let min = nums[0];
    for(let i = 1; i< nums.length; i++){
        if(nums[i] > max;){
            max = numbs[i];
        }
        if (nums[i] < min){
            min = nums[i];
        }
        }
    return {max, min}
    }
}

const result = findMaxAndMin(nums);
console.log(`Max: ${result.max}, Min: ${result.min}`);
function summaryRanges(nums: number[]): string[] {
    let retVal:string[] = [];
    let start:number = 0;
    let finish:number = 0;

    if(nums.length === 0) return []
    if(nums.length === 1)
    {
        retVal.push(nums[0].toString())
        return retVal
    }

    for(let i = 1 ; i< nums.length ; i++)
    {
        console.log(i)
        if(nums[i]-1 === nums[i-1])
        {   
            start = i-1;
            for(i = start ; i < nums.length ; i++)
            {
                //console.log(i)
                if(nums[i]+1 !== nums[i+1])
                {
                    finish = i;
                    i++;
                    break;
                }
            }
            //console.log(i)
            retVal.push(`${nums[start]}->${nums[finish]}`)
        }else{
            retVal.push(nums[i-1].toString())
        }
    }

    if(nums[nums.length-1]-1 !== nums[nums.length-2])
        retVal.push(nums[nums.length-1].toString())
    return retVal
};


console.log(summaryRanges([1,3,5,6,9,10,11,14]))
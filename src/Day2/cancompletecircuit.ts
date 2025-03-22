function canCompleteCircuit(gas: number[], cost: number[]): number {
    for(let i=0 ; i < gas.length ; i++)
    {
        let cur_gas = gas[i];
        let cur_station = i;
        for(let j = 0; j < gas.length ; j++)
        {
            cur_gas -= cost[cur_station]
            if(cur_gas < 0) break;
            cur_station++;
            if(cur_station === gas.length) cur_station = 0;
            cur_gas += gas[cur_station];
            if(cur_station === i) return i;
        }
    }
    return -1;
};
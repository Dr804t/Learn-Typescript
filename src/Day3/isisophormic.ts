function isIsomorphic(s: string, t: string): boolean {
    let map = new Map<string, string>()
    let map2 = new Map<string, string>()
    for (let i=0 ; i < s.length ; i++)
    {
        if(map.has(s[i]))
        {
            if(map.get(s[i]) !== t[i])
            {
                return false
            }
        }else{
            map.set(s[i],t[i])
        }

        if(map2.has(t[i]))
            {
                if(map2.get(t[i]) !== s[i])
                {
                    return false
                }
            }else{
                map2.set(t[i],s[i])
            }
    }
    return true
};


console.log(isIsomorphic("badc","baba"))
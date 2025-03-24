function isValid(s: string): boolean {
    if(s.length<=1) return false

    let key = new Map<string, string>()
    key.set('(',')')
    key.set('[',']')
    key.set('{','}')
    
    let brac : string[] = [];
    for(let i = 0 ; i<s.length ; i++)
    {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
            brac.push(s[i])
        else{
            if(key.get(brac[brac.length-1]) === s[i])
            {
                brac.pop()
            }
            else
            {
                return false
            }
        }
    }

    if(brac.length !== 0) return false
    return true
};
function canConstruct(ransomNote: string, magazine: string): boolean {
    let m = new Map<string, number>();
    console.log(m);
    for(let i = 0 ; i < magazine.length ; i++){     // how many characters are a? how many characters are b? etc.
        if(m.has(magazine[i])){
            m.set(magazine[i], m.get(magazine[i])! + 1);
        }else{
            m.set(magazine[i], 1);
        }
        console.log(m);
    }
    for(let i = 0 ; i < ransomNote.length ; i++){   // check if the characters in ransomNote are in magazine
        if(m.has(ransomNote[i]) && m.get(ransomNote[i])! > 0){
            m.set(ransomNote[i], m.get(ransomNote[i])! - 1);
        }else{
            return false;
        }
    }
    return true;
};

// const m = new Map<string, string>();
// m.set('a', '1');
// m.set('b', '2');
// m.set('c', '3');
// m.set('d', '4');
// console.log(m.get('a'));
// console.log(m.has('a'));
canConstruct("aa", "aab");
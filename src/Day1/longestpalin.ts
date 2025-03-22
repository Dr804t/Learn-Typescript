function isPalindrome(s:string): boolean{
    for(let i = 0 ; i < s.length/2 ; i++)
    {
        if(s[i] !== s[s.length-i-1])
        {
            return false;
        }
    }
    return true;
}

function longestPalindrome(s: string): string {
    let retval:string = "";    
    if(s.length === 1) return s;
    for(let i = 0 ; i < s.length ; i++){
        for(let j = i+1 ; j < s.length+1 ; j++){
            //console.log(`i : ${i} ,j : ${j}, str : ${s.slice(i,j)}`)
            if(isPalindrome(s.slice(i,j)) && s.slice(i,j).length > retval.length){
                retval = s.slice(i,j)
            }
        }
    }
    return retval;
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbg"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("xaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"))
function Shortener(string) {
    let newStr = string
    let chars = []

    for (let i = 0; i < string.length; i++) {
        const str = string[i]
        if (!chars.includes(str)) {
            newStr = short(str, newStr)
        }
    }

    function short(char, string) {
        return string.replaceAll(char + char, '')
    }

    return newStr
}

console.log(Shortener('aaabbabaccaccaabbbab'))
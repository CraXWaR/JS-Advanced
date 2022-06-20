function solve(array) {
    array.sort(twoCriteriaSort)
    return array.join('\n')
    function twoCriteriaSort(curr, next) {
        if (curr.length === next.length) {
            return curr.localeCompare(next)
        }
        return curr.length - next.length
    }
}
console.log(solve(['alpha', 
'beta', 
'gamma']));
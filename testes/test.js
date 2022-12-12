var x = []
function test (item) {
    x.push(item);
}
test({
    oi: "salve",
    b: "aa",
})

var tst = x['oi'];

console.log(tst);
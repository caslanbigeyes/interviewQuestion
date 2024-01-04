
window.name = 'zxx';

const obj = {
    name: 'llf',
    fn: () => {
        console.log(this.name, 'name')
    }
}

console.log(obj.fn(),'')



class Lru {
    constructor(max) {
        this.max = max;
        this.cache = new Map();
    }


    get(key) {
        if (!this.cache.has(key)) { return -1 }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        // 更新的数据放前面
        return value
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.max) {
            const lastNotUsed = this.cache.keys().next().value;
            this.cache.delete(lastNotUsed);

        }
        this.cache.set(key, value);
        console.log(this.cache, 'this.cache')
    }
}


const lruCache = new Lru(2);
lruCache.set(1, 1);
lruCache.set(2, 2);
lruCache.set(3, 3);



console.log(lruCache.get(1), 111)
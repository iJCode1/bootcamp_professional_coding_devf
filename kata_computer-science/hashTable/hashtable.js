class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  //   set(key, value) {
  //     let index = this._hash(key);
  //     this.table[index] = [key, value];
  //     this.size++;
  //   }

  set(key, value) {
    let index = this._hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Encuentra ese key - value
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] === value;
          return;
        }
      }
      // No encuentra el key - value
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
    this.size++;
  }

  //   get(key) {
  //     let index = this._hash(key);
  //     return this.table[index];
  //   }

  get(key) {
    let index = this._hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }

    return undefined;
  }

  //   drop(key) {
  //     let index = this._hash(key);

  //     if (this.table[index] && this.table[index].length) {
  //       this.table[index] = undefined;
  //       this.size--;
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  remove(key) {
    let index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                this.size--;
                return true;
            }
        }
    } else {
        return false;
    }
  }

  show() {
    this.table.forEach((values, index) => {
        const items = values.map(([key, value]) => `[${key}: ${value}]`);
        console.log(`${index}: ${items}`)
    })
  }
}
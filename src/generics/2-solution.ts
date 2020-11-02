class Queue<T> {
  private data = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

/** Again sample usage */
const queue = new Queue<number>();
queue.push(0);
queue.push('1')

function reverse<T extends string | number>(items: T[]): T[] {
  let reversed = [];
  for (let i = items.length - 1; i >= 0; i--) {
      reversed.push(items[i]);
  }
  return reversed;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);
console.log(reversed); // 3,2,1

reversed[0] = '1'
reversed = ['1', '2']

reversed[0] = 1
reversed = [1, 2]

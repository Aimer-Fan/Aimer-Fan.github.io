const target = {
  name: "foo"
};

const p = new Proxy(target, {
  set (target, property, value, receiver) {
    // console.log(receiver);
    // 在这里可以运行与当前属性相关的函数
    return Reflect.set(target, property, value, receiver);
  },
  get (target, key, receiver) {
    console.log(target);
    // 在这里可以将当前读取的属性和正在运行的函数关联起来
    return Reflect.get(target, key, receiver);
  }
});

console.log(p.name);
// p.name = "bar";

// Object.defineProperty(target, "name", {
//   set () {
//     console.log(this);
//   },
//   get () {
//     console.log(this);
//     return "1";
//   }
// });

// const obj = {};
// obj.__proto__ = p;
// obj.name = "jen";



// target.name = "123";

// Object.defineProperty(obj, "name", {
//   set () {
//     console.log(this);
//   }
// });
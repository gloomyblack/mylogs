# Dart

## 基本事实和概念

* 凡是保存在变量中的皆为对象，都是某个类的实例，无论是数字、函数还是null都是对象，所有的对象都继承了`Object`类；
* Dart是强类型语言，但是也可以推断类型，若要明确说明不需要任何类型需要使用`dynamic`；
* Dart支持泛型；
* Dart支持顶级函数（例如main())，支持函数内创建函数；
* Dart支持顶级变量；
* Dart没有可见性关键字，以下划线（_)开头表示相对于库来说是私有的；

## 变量

```dart
var name = 'Bob'
daynamic name = 'Bob'
String name = 'Bob'
```

### 默认值

未初始化的变量默认为null，因为一切皆为对象，因此数字类型也不例外。

### final和const

:::tip static、final和const的区别

1. const有以下几种使用场景

   * const用在等号左边，其作用是声明变量并且要求**必须在声明变量时赋值，一旦赋值就不允许修改，而声明值必须是编译时常数**，const在声明变量的时候可以省略变量的类型，至于编译时常数有以下几种情况：
     * 数字、字符串和其他const变量
     * 表达式，且其值在编译时是可知的
     * 集合或对象，集合必须用const修饰，对象的构造函数必须用const修饰

     ```dart
     void main() {
       const a = 1;
       const b = 'hello';
       const c = a;

       const aa = 1;
       const bb = aa > 1 ? 2 : 1;

       const aaa = const[1, 2, 3];
       const bbb = ConstObject(2);
     }
     class ConstObject {
       final value;
       const ConstObject(this.value)；
     }
     ```

   * const用在等号右边，一般用作修饰集合，要求集合的元素必须是递归的编译时常数，不允许对集合内容做任何改变。

     ```dart
     void main() {
       var c = 2;
       // 错误，集合的元素必须是编译时常量
       var a = const [c, 2, 3];
       const b = const [1, 2, 3];
       // 错误，集合内容不允许修改
       b[1] = 3;
     }
     ```

   * const修饰构造函数，要求类的所有成员变量必须由final修饰。

     ```dart
     class ConstObject {
       final value;
       // 错误，必须是final变量
       int value2;
       const ConstObject(this.value);
       log () {
         print(value)
       }
     }
     ```

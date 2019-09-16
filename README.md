# Javascript Array Methods

#### 자바스크립트 Array의 기본 내장 메소드들을 직접 구현해보며 동작 방식 이해하기

1. Array의 기본 메소드들의 동작 방식을 파악 (`forEach`  ,  `filter`  ,  `map`  ,  `every`)

2. 기본적인 자바스크립트 문법들을 사용해 직접 구현

   ```javascript
   // 참고용 예제 (배열의 index와 해당 index의 값을 함께 출력해주는 메소드 구현)
   Array.prototype.showDetail = function(length = this.length) {
       for(let i = 0; i < length; i++) {
           console.log(`Index[${i}] => ${this[i]}`)
       }
       console.log('\n')
   }
   const arr = [1,2,3,4,5]
   arr.showDetail()
   arr.showDetail(3)
   ```

   

3. Javascript 는 함수의 인자로 함수가 올 수 있다.

   ```javascript
   function functionWrapper(f) {
       console.log('Function Start')
       f()
       console.log('Function End')
   }
   function waitWhile() {
       let i = 0
       while(i<1000000000) {
           i++
       }
       return
   }
   
   functionWrapper(waitWhile)
   ```

   

4. 구현과 관련된 키워드들

   - `if`     `else if`     `else`    등 조건문

   - 반복 연산을 위한 `for`문

   - ```javascript
     const array = [1,10,100]
     let sum = 0
     
     for(let i=0; i<array.length; i++) {
       sum += array[i]
     }
     console.log(sum)	// 111
     ```

   - `Array.push(something)`

     ```javascript
     const array = [1,3,5]
     array.push(7)
     console.log(array) // [1,3,5,7]
     ```

   - `this`
     - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
     - https://blueshw.github.io/2018/03/12/this/
   - 그 외 여러가지

##### 참고

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array


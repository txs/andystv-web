---
description: 'Lesson: 3-1 var、let、const 的用法與差異'
duration: 9m4s
level: beginner
tags:
- JavaScript
tier: free
title: 3-1 var、let、const 的用法與差異
youtubeId: KGCrP9c1zUM
---

# 3-1 var、let、const 的用法與差異

Original: https://course.andys.pro/Javascript-Intro/03-1-how-to-use-var-let-const-and-differences-between/

### 講義

#### 1. 變數宣告關鍵字
JavaScript 提供三種方式來宣告變數：

*   **`var` (Variable)**：
    *   **特點**：ES6 之前的舊標準，作用域為**函式 (Function Scope)**。
    *   **缺點**：容易汙染全域變數，且允許重複宣告。
*   **`let`**：
    *   **特點**：ES6 新增，作用域為**區塊 (Block Scope)** (即 `{}` 內部)。
    *   **優點**：變數生命週期僅限於該區塊，變數管理更安全、嚴謹，是目前宣告變數的首選。
*   **`const` (Constant)**：
    *   **特點**：宣告**常數**，一旦賦值後就**不能重新賦值 (Reassign)**。
    *   **限制**：宣告時**必須同時初始化** (給予值)，否則會報錯。

#### 2. 常見錯誤訊息
*   **`undefined`**：變數已宣告，但尚未賦值。
    *   例：`var a; console.log(a); // undefined`
*   **`is not defined` (ReferenceError)**：變數完全未宣告，卻嘗試去存取它。
    *   例：`console.log(b); // Uncaught ReferenceError: b is not defined`
*   **`Assignment to constant variable`**：嘗試修改 `const` 宣告的變數。

#### 3. 實務建議
*   **優先使用 `const`**：如果確定資料不會變動。
*   **需要變動用 `let`**：如迴圈計數器 `i`。
*   **盡量少用 `var`**：避免不可預期的作用域問題。

### 影片逐字稿largev2

大家好,我們現在來講第三章常數與變數的宣告好,那這邊我們會學到我們剛才已經有學到 var 了嘛對不對,我們剛才已經用很多了其實 var 就是一直在宣告一個變數然後呢,後面 es6就是這個是原本的那這個是 es6 新增的e s 6 新增了為什麼我的 s 好像 5好, es6 新增了 let 跟 const然後識別字的規則還有 var 跟 let 的差異好,我們開始吧那我們會看到 3 之 1 是 var 宣告還有 let 的宣告,還有 const 的宣告那 var 是什麼的宣告原本是什麼呢它叫做 variablevariable 就是變數所以這個中文字寫下來變它是一個變數那其實因為 Java C 和 C++ 都是比較C 和 C++ 是比較比較高比較低,就是比較難的一些語言然後 Java 也是那 script language 就是所以它就有借鑑它這三種語言那它有三種宣告方式原本只有 var 的宣告方式後面再新增 let 跟 const那 var 你可以直接宣告一個東西像我們剛剛一直在宣告嘛我們現在後面宣告加了什麼 document 等等一堆東西那主要呢,var比如說你 var x 就是宣告一個 x 的變數那我們這邊可以直接拿一個網頁比如說我們自己Google.com好,我們用最基礎的網頁然後呢,我們在inspect然後裡面有 console然後我可以先 clear,先清掉它那我可以 var x這時候我的 x 就是 undefined就沒有任何東西可是比如說我如果叫 y 出來它會跟你講,y is not defined所以你有宣告一個 x可是你叫 x,它裡面的值是 undefined可是你如果沒有宣告,你直接叫 y 的話它會跟你講說,y is not defined所以你可以直接宣告一個 x就是,系統,我需要一個變數 x那如果沒有任何東西它裡面的預設值是 undefined那個值就叫 undefined然後呢,如果我可以就是 x 等於 2那這個時候我叫 x 的時候它就會跟我講,x 是等於x 是 2 的值這應該沒有什麼問題那我這邊寫 2 這個時候呢這個都是數字喔,2 是一個數字那如果我寫說 x 等於 2這時候 2 是直傳簡單講一下在 var 宣告的時候它都是全域的全域就是 global就是任何地方調用任何地方調用的意思是說在我們教化 script就是這個頁面裡面調用它就是都可以叫它那如果是在 function就是函式範疇就是 function就是我們剛才前面看到的 function裡面呢我的 var 就會只有在function 裡面喔就是我的 var 宣告就不會是在 global它是只有在這個 function 裡面的變數OK所以比如說我今天有一個我今天叫一個 function就我們剛才 function test 嘛對不對那我有一個 x然後裡面宣告了一個東西叫做var y 等於 5好我今天有一個 test 對不對test 也確實存在OK比如說 test 1好它確實存在那我這邊也宣告了 y可是你看我在外面叫 y它還是跟你講說y is not defined 對不對它還是叫給你聽嘛因為我這個 var 是在 function 裡面function 外面是拿不到 y 的OK在 test 裡面才有 y在 test 外面沒有 y那這個我們先理解 var 是這樣運作就是你在 function 裡面創的跟在 function 外面創的是兩回事OK我們先簡單理解這件事情好好然後再來我們這邊來學 letlet 跟 var 相似但並不一樣好這是 ES6 多的那它這個宣告是在 block就是區塊作用域什麼叫做區塊作用域呢我們可以把區塊作用域我們這邊大家跟我一起寫一下就是 block 我們可以把它視為叫做這個大括弧裡面OK這我覺得在這裡講都很早不過沒關係就是先講給大家教材也是這樣像我們剛剛前面我們講 var 的時候是在是在function 裡面嘛可是我們等一下後面會學到 if就是比如說 if 會有這樣嘛然後會有 else 嘛對不對這樣子那在這裡面呢假如你一個 let 一個 x那這個 let只會在這個大括弧裡面存活就是它的在裡面拿可以拿的到在外面拿就拿不到因為它的作用域是在 block這個 block 是就是我剛剛講的這個大括弧好我先簡單這樣記一下好let 不會變全域變數所以它就是只會在區域那這個對於就是在寫 code 的時候它的變數會比較簡單因為你不會宣告一個變數可能其他人用過了或是你的同事用過了那這時候你的命名就會變很複雜你就需要什麼什麼 Andy什麼 x 對不對還是什麼 Joe x還是什麼 Trump x等等之類就會變得是每個人都會很複雜那 let 就是因為它都是區域所以會比較簡單那 const 呢它不同我們叫做它常數因為大家在寫 code 的時候很怕什麼很怕有一些固定的東西被改掉比如說有時候拿一個東西那這個東西就是不要改所以我們就叫做 const那所以 const 很好玩是什麼呢呃等一下再試給大家看好 const 一定要有值不可以是 not所以你在宣告它的時候你的 const 必須比如說 x 等於 1你如果沒有宣告它有值的話它是不行的然後它之後它是無法修改的所以快速給大家看一下就是 const 的做法就比如說我今天寫 const呃 z 等於 5對不對好那我今天 z 的話就是 5 嘛那可是我如果今天想要寫 z 等於 6不行因為它是一個 const它是一個常數它已經被訂定了就是 z 就是 5不能動那這個其實是建立在於說呃它是一個區域變數如果它是一個全域變數的話就是反正就是我們記得 const 是一個不可以改的可是它在宣告的時候它不可以是 not你一定要給它有值那我們也可以試試看就是比如說 const呃 yy然後它就會跟你講說喔你不行這樣喔因為你一定要有值它才可以讓你用常數ok好那這邊 level 1就是要讓大家去練習一下就是用 var, let, const來做做看然後呃嘗試用等於 delete這些都還沒有教我們可以先不用嘗試我們等一下晚一點再嘗試好那三之一是這樣
---
description: 'Lesson: 13-3 Closure 閉包'
duration: 6m49s
level: beginner
tags:
- JavaScript
tier: free
title: 13-3 Closure 閉包
youtubeId: 0Q8bjF7mTbk
---

# 13-3 Closure 閉包

Original: https://course.andys.pro/Javascript-Intro/13-3-closure-closure/

### 講義

#### 1. 什麼是閉包 (Closure)？
閉包是 JavaScript 中非常強大且獨特的特性。簡單來說，當一個函式能夠「記住」並「存取」它被建立時的作用域環境，即使它是在原本的作用域之外被執行，這就是閉包。

#### 2. 閉包的運作原理
*   **環境打包**：當你在大函式裡面寫一個小函式，並把小函式「回傳」出去時，小函式會連同當時大函式裡的變數一起被「打包」。
*   **範例分析**：
    ```javascript
    function outer() {
        var msg = "我是閉包內容";
        return function inner() {
            console.log(msg);
        };
    }
    var myFunc = outer(); // 此時 outer 執行完畢，但 msg 被 inner 記住了
    myFunc(); // 印出 "我是閉包內容"
    ```
*   即便全域也有一個變數叫 `msg`，`myFunc` 執行時依然會使用當初打包進去的那個區域變數。

#### 3. 閉包的功用
*   **私有變數 (Private Variables)**：
    - 在物件導向程式設計中，如果你不希望某個變數被隨意修改，可以把它藏在函式內，只透過閉包提供的方法來讀取或修改它。
*   **保護資料**：外部程式無法直接讀取函式內的局部變數，必須透過你回傳的介面。
*   **維持狀態**：閉包可以讓變數狀態在函式執行完後依然被保存下來（例如：計數器功能）。

#### 4. 小結
閉包的關鍵點在於：**它將函式與其相關的引用環境組合在一起**。
*   如果你想把函式內部的區域變數傳遞出來，使用閉包回傳一個新的函式是唯一的辦法。
*   理解閉包對於學習進階 JavaScript（如 React Hooks 或模組化開發）至關重要。

### 影片逐字稿 (AI 生成)

我們接下來繼續看到 十三之三closureclosure就是 中文就是 避包然後我們先了解它的原理 還有它的功用好的在電腦科學中 就是closure好 然後它有兩種有一種是lexico 就是詞法避包和韓式避包 function closures好 那這個自由變速箱跟這個韓式一同存在如果離開它的環境也是一樣的好的 我們來看一下比如說 像這邊呢這個 我們有一個 function 對不對然後 function 裡面有一個變數 叫做msg未經不是msg 就是message然後呢這個list is a closure然後 display 裡面是不是又有一個 function然後它在這裡定義的時候它是不是就開始往外面找這個msg所以在這邊它就是會抓到這個的list is a closure好那在這邊呢 大家你看呃 為什麼前面會一直提到就是說 call function和 function 當作一個變數因為這邊它沒有執行它把這個函式傳出去喔有沒有 return 這個函式喔所以你在closure這邊執行這個的時候你拿到的東西是什麼你拿到的是這個裡面的這個 function喔OK嗎你拿到這裡面的這個 function呢你再傳給呃...my func所以my func其實就是 display message然後擁有的這個msg這個 message的訊息在這裡所以當你外面也是用就是全運變數msg你去call這個my function其實它還是 alert會 alert出this is a closure好嗎那我們跑一下它是一個看一下func...closureclosure沒有什麼vrvrvrmsg等於this is a closurevrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrvrmsg然後我們這邊要做什麼事呢外面再去宣告一個 var 然後這個 var 幹嘛my function等於 closure然後這個 closure 這邊有執行嘛有 call 他 然後 return把這個給他那這個時候 假如說如果我們去執行 my function他會給我講說他會執行 console logmsg 因為他是 display msg那如果說 我今天在這段 code 最上面然後我去說什麼 var msg等於this is global對不對好那我們現在看到 msg 在外面全域的時候他會跟我講說 this is global可是我們在執行 my function的時候有沒有 this is closure因為他是把裡面這個環境的 msg就是在裡面這個變數的 this is closure包起來還記得嗎 靜態作用域靜態作用域是不是就是當你在宣告的時候你 msg 找到的是這個就是這個所以這個 function 被包起來就算在外面他去call的時候他call msg 就不是找痊癒他就算在外面全域的call他的時候因為他還是從裡面的環境抓出來ok這樣理解嗎這不是根好這邊這個中文你們可以去看一下我剛才也有解釋對我剛才也有解釋好臂包的功用臂包能把你的資料透過作用域的環境把它就是包出來可以丟出來那使用臂包可以有什麼好處呢就是你有很多 function有很多 class然後他是有辦法讓他 private 的能力所以你外面是沒有辦法拿到裡面這個 function 的一些參數ok就是你這些 function只有比如說你 return 出來的或是 return 出來的 function你是可以拿到在裡面做了什麼事情外部是無法存取的那外面也看不到裡面的變數ok那這個是臂包13-3那本身的重點就是了解了變數領域的一些基本概念然後呢也了解了說傳統是只有 function 的作用域那新的 ES6是有那個 block 的作用域那也了解閉包的原理和應用方法就是其實裡面的一些訊息還是有辦法可以傳得出來的只是你可能要把它包成是一個 function然後在外面再把它 call 出來這樣子再把裡面那個環境叫出來所以有時候在傳的時候就是要對 closure 清楚的認識ok像之前面試的時候有考過就是你裡面的值裡面的 scope作用域要怎麼把這個值傳出來你就要對 closure 很清楚你要把它包成一個 function然後在外面再把它抓出來其實是在看裡面的東西是對有有有有有有有有有有有有

### 影片逐字稿largev2

接下來繼續看到十三之三,closureclosure中文就是閉包,我們先了解它的原理還有它的功用好的,在電腦科學中就是closure然後它有兩種,有一種是lexical,就是詞法閉包它的韓式閉包function closure那這個自由變數將跟這個韓式一同存在如果離開它的環境也是一樣的我們來看一下比如說像這邊呢這個我們有一個function對不對然後function裡面有一個變數叫做msg味精,不是,就是msg,就是message然後呢,就this is a closure然後它的display,它裡面是不是又有一個function然後它在這裡定義的時候,它是不是就開始往外面找這個msg,所以在這邊它就是會抓到這個的this is a closure這個好,那在這邊呢,大家你看為什麼前面會一直提到就是說call function和function當作一個變數因為這邊它沒有執行,它把這個韓式傳出去喔有沒有,return這個韓式喔所以你在closure這邊執行這個的時候你拿到的東西是什麼你拿到的是這個裡面的這個function喔ok嗎你拿到的是這裡面的這個function呢你再傳給myfunc所以myfunc其實就是display message然後擁有的這個msg這個message的訊息在這裡所以當你外面也是用就是全域變數msg你去call這個myfunction其實它還是alert出this is a closure好嗎,那我們跑一下它是一個functionclosure然後closure也沒有什麼varmsg等於this is a closureclosure然後呢functiondisplaymsg然後這是在function裡面去declare一個function然後這個function會做什麼事情呢它這邊用alert我不喜歡alert所以我們用control log因為用alert假如你在VSCode跑可能就會炸掉所以不想這樣用這邊呢我們把這個裡面的這個function丟到外面給別人用display所以msg然後我們這邊要做什麼事呢外面外面去宣告一個var然後這個var要幹嘛myfunction等於closure然後這個closure這邊有執行嘛有call它然後return把這個給它ok那這個時候假如說我們去執行myfunction它會給我想說它會執行control log因為它是display msg那如果說我今天在這段code的最上面然後我去說什麼var msg等於This is global對不對好那我們現在看到msg在外面痊癒的時候它會跟我講說This is global可是我們在執行myfunction的時候有沒有This is closure因為它是把裡面這個環境的msg就是在裡面這個變數的This is closure包起來還記得嗎靜態作用域靜態作用域是不是就是當你在宣告的時候你msg找到的就是這個所以這個function被包起來就算到外面它去call的時候它call msg就不是找痊癒喔它就算在外面痊癒的call它的時候因為它還是從裡面的環境抓出來OK這樣理解嗎這不是跟好這邊這個中文你們可以去看一下我剛剛也有解釋好幣包的功用幣包能把你的資料透過作用域的環境把它就是包出來可以丟出來那使用幣包可以有什麼好處呢就是你有很多function有很多class然後它是有方法讓它private的能力所以你外面是沒有辦法拿到裡面這個function的一些參數的OK就是你這一些function只有比如說你return出來的或是return出來的function你是可以拿到在裡面做了什麼事情外部是無法存取的那外面也看不到裡面的變數OK那這個是幣包十三之三那本身的重點就是了解了變數領域的一些基本概念然後呢也了解了說傳統是只有function的作用域那新的ES6是有那個block的作用域那也了解幣包的原理和應用方法就是其實裡面的一些訊息還是有辦法可以傳得出來的只是你可能要把它包成是一個function然後在外面再把它call出來這樣子再把裡面那個環境叫出來所以有時候在傳的時候就是要對closure有清楚的認識OK像之前面試的時候有考過就是你裡面的值在做裡面的scope作用域要怎麼把這個值傳出來你就要對closure很清楚你要把它包成一個function然後在外面再把它抓出來其實是在看裡面的東西
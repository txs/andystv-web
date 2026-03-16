---
description: 'Lesson: 12-1 Function 函式，函式宣告，呼叫函式 call function'
duration: 5m30s
level: beginner
tags:
- JavaScript
tier: free
title: 12-1 Function 函式，函式宣告，呼叫函式 call function
youtubeId: YottqShnyic
---

# 12-1 Function 函式，函式宣告，呼叫函式 call function

Original: https://course.andys.pro/Javascript-Intro/12-1-function-function-function-declaration-call-function-call-function/

### 講義

#### 1. 什麼是函式 (Function)？
函式是 JavaScript 中的一種物件，它可以將多行指令包裝在一起。
*   **重複使用**：寫好一次，可以在不同地方多次呼叫。
*   **方便維護**：修改一個地方，所有引用的功能都會更動。

#### 2. 函式的宣告與組成
一個標準的函式定義包含：
*   **關鍵字**：`function`
*   **函式名稱**：例如 `square` (平方)。
*   **參數 (Parameter)**：放於小括號 `()` 內，接收外部輸入的值。
*   **語句塊**：放於大括號 `{}` 內，是要執行的程式邏輯。
*   **回傳值 (Return)**：使用 `return` 關鍵字將結果丟出去，並**結束**該函式的執行。

```javascript
function square(number) {
    return number * number; // 回傳平方值
}
```

#### 3. 如何呼叫函式 (Call Function)？
*   **執行函式**：必須加上小括號，例如 `square(5)`。
*   **參考函式**：只寫 `square`（不加括號），這只是代表該函式本身，並不會跑裡面的程式。
*   **接收結果**：可以用變數來接住回傳值：`var result = square(5);` (result 會等於 25)。

#### 4. 注意事項
*   **`return` 的重要性**：函式執行到 `return` 就會停止。如果沒有寫 `return`，函式執行完後會預設回傳 `undefined`。
*   **缺少參數**：若呼叫時沒給參數，該參數會是 `undefined`。若拿 `undefined` 去做數學運算，結果會得到 `NaN` (Not a Number)。

### 影片逐字稿 (AI 生成)

好 我們現在開始進入十二章 韓式那我們在十一我們在十二之一我們會學到基本型的韓式再來十二之二我們會學到匿名韓式那在十二之三我們會學到蠻新而且好用的箭頭韓式好 首先十二之一韓式就是 function然後再來我們會學會怎麼樣去宣告一個韓式再來我們要了解怎麼去 call韓式呼叫韓式叫做 call function好的好 首先韓式是物件的一種除了基本型類別以外的東西都是物件OK好了 那你可以在韓式裡面你可以把一段到多段的指令把它包裝起來可以重複使用方便維護首先呢它是小括號大括號那小括號裡面它會是一個韓式的參數在大括號裡面呢是一些Javascript的語句好了 那我們來看一下我們如何來宣告 function首先你可以寫一個 function然後呢它的名字是 square裡面放的參數是 number那在這個 function裡面呢我們會把 number然後我們會 return我們會回傳一個值就是這個兩個相乘所以這個 function就很清楚了啦相乘就是平方啦所以它當然它把它命名叫做 square這沒有什麼太大的問題所以這邊我看到這是名稱這是它的參數參數其實沒有小括號參數是中間這個 number才是參數喔那韓式的功能 return是回傳 numbers成 number好的 那這個這邊我看一下我們把它複製起來這邊有一個減號我們把它拿掉好的 這樣子就可以宣告好一個 square的 function那我就可以怎麼樣呢我可以這樣直接叫它然後它就會回傳給我25對不對它有回傳給我嗎那我這樣call它以後它會回傳一個25那有時候我可以把這個東西把它就是我可以把它拿一個變數來把它接起來那我要用什麼接呢我把它叫做S5好了Square 5等於Square 5這時候S5就是什麼就是25OK因為我回傳值可以用指定運算值指定給我剛剛宣告的這個S5所以我就可以塞給它然後就是25OK好了那其實我剛才那樣在做在幹嘛呢其實我就其實在執行剛剛這個呼叫韓式這一張要講的就是Square 5就會去呼叫這個韓式那大家還記得前面嗎就是有小括號代表說有去叫它執行讓這個 function可以執行就是這邊在講的好的 可是你如果只有叫Square它會給你什麼其實你是拿這個 function你是去取這個 function有小括號才是去執行喔OK嗎那你如果這樣Square然後小括號的話它就會給你什麼給你一個回傳一個NAN給你為什麼它會回傳一個NAN給你因為你居然把Undefine乘以Undefine再returnUndefine乘以Undefine是它的numberOK好的那return這個東西可以幹嘛呢return它有一個功能是它可以終止韓式執行當一個functionreturn的時候就代表說它回傳了同時它也結束了那很多時候呢在你的韓式裡面你沒有寫return它全部跑完的時候它會自動的去returnUndefine所以為什麼我們在那個console裡面去跑一些程式的時候後面它會看到你會看到一個反回來的箭頭然後它下面寫Undefine是因為你跑程式結束了那它回傳一個預設的UndefineOK這裡有講到那你如果回傳比如說像剛剛這個function我們回傳的是什麼我們回傳的是Numbers所以它就比如說我把它5給它然後它就會把它乘自己然後再回傳所以就變平方好的Level 1就要請大家去做做看嘍

### 影片逐字稿largev2

好,我們現在開始進入十二章,函式那我們在十二之一,我們會學到基本型的函式再來十二之二,我們會學到匿名函式那在十二之三,我們會學到蠻新而且好用的箭頭函式首先十二之一,函式就是function然後再來我們會學會怎麼樣去宣告一個函式再來我們要了解怎麼去call函式就是呼叫函式,叫做call function好,首先,函式是物件的一種除了基本型類別以外的東西都是物件在函式裡面,你可以把一段到多段的指令把它包裝起來可以重複使用,方便維護首先,它是小括號、大括號小括號裡面會是一個函式的參數大括號裡面是一些Javascript的語句那我們來看一下,我們如何來宣告function吧首先你可以寫一個function,它的名字是square裡面放的參數是number那在這個function裡面,我們會把number乘以number然後我們會return,我們會回傳一個值就是這個兩個相乘所以這個function就很清楚了,相乘就是平方所以當然它把它命名叫做square,這沒有什麼太大的問題所以這邊我們看到,這是名稱,這是它的參數參數其實沒有小括號,參數是中間這個number才是參數那函式的功能return是回傳number乘number好的,那這個,這邊我看一下,把它複製起來這邊有一個減號,把它拿掉好的,這樣子就可以宣告好一個square的function那我就可以怎麼樣呢,我可以這樣直接叫它然後它就會回傳給我25,對不對它有回傳給我嘛,那我這樣call它以後它會回傳一個25那有時候我可以把這個東西把它,就是我可以把它拿一個變數來把它接起來那我要用什麼接呢,我把它叫做s5好了square5等於square5這時候s5就是什麼,就是25因為我回傳值可以用指定運算值指定給我剛剛宣告的這個s5所以我就可以塞給它,然後就是25ok,好了,那其實我剛剛那樣在幹嘛呢其實我在執行剛剛這個呼叫函式這一章要講的就square5就會去呼叫這個函式那大家還記得前面嗎,就是有小括號代表說有去叫它執行讓這個function可以執行,就是這邊在講的好的,可是你如果只有叫square它會給你什麼,其實你是拿這個function你是去取這個function,有小括號才是去執行哦ok嗎,那你如果這樣square然後小括號的話它就會給你什麼,給你一個回傳一個nan給你為什麼它會回傳一個nan給你因為你居然把undefined乘以undefined再returnundefined乘以undefined是not a number好的,那return這個東西可以幹嘛呢return它有一個功能是它可以終止函式執行當一個function return的時候就代表說它回傳了同時它也結束了那很多時候呢,在你的函式裡面你沒有寫return它全部跑完的時候,它會自動的去return undefined所以為什麼我們在console裡面去跑一些程式的時候你會看到一個反回來的箭頭,然後它下面寫undefined是因為你跑的程式結束了,那它回傳一個預設的undefinedok,這有講到那你如果回傳比如說像剛剛這個function我們回傳的是什麼,我們回傳的是number乘number所以它就比如說我把5給它,然後它就會把它乘自己然後再回傳,所以就變成平方好的,lab1就要請大家去做做看囉
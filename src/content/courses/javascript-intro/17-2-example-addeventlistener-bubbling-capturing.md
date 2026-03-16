---
description: 'Lesson: 17-2 範例 addEventListener: Bubbling, Capturing'
duration: 4m33s
level: beginner
tags:
- JavaScript
tier: free
title: '17-2 範例 addEventListener: Bubbling, Capturing'
youtubeId: -2EB10hfEfc
---

# 17-2 範例 addEventListener: Bubbling, Capturing

Original: https://course.andys.pro/Javascript-Intro/17-2-example-addeventlistener-bubbling-capturing/

### 講義

#### 1. 範例目標：觀察事件觸發順序
本範例建立兩組巢狀元素（父元素內含子元素），分別示範 JavaScript 事件流的兩種觸發模式。

#### 2. 模式一：冒泡 (Bubbling)
*   **設定**：`addEventListener(..., false)` (或省略第三個參數)。
*   **行為**：**由內而外** 觸發。
*   **實測效果**：
    - 當點擊最內層的白色子元素時，會先彈出「子元素」的警告窗，接著才是「父元素」的警告窗。
    - 就像水底的泡泡，先從深處產生再往上冒。

#### 3. 模式二：捕獲 (Capturing)
*   **設定**：`addEventListener(..., true)`。
*   **行為**：**由外而內** 觸發。
*   **實測效果**：
    - 雖然點擊的是子元素，但瀏覽器會先從最外層尋找監聽器。
    - 因此會先彈出「父元素」的警告窗，最後才是點擊目標「子元素」的警告窗。

#### 4. 小結與建議
*   **預設值**：大部分開發場景皆使用「冒泡模式」。
*   **應用場景**：除非你有特殊的攔截需求（例如想在子元素接到訊號前，先由父元素做某些預處理），否則通常不需要將第三個參數設為 `true`。
*   **關鍵記憶點**：`false` = 由內而外 (預設)；`true` = 由外而內。

### 影片逐字稿 (AI 生成)

好的 這邊這個example 我跑一下給大家看這邊是17-2的example好的 我們把我們剛剛那個HTML的code就是第六個這個example 把它貼過來好 我們這邊有兩個一個是由下到上然後會先經過白色元素再經到橘色白色 OK 它alert 橘色那這邊capturing是由大到小那先經過橘色再經過白色好的 我們來看一下它code是怎麼實作的好 首先呢 它是不是有一個ID是MyDiff1然後這邊是一個ID MyDiff2那這個是由下到上 是Diff1由上到下 是Diff2OK 它這邊有一個ID是MyP1它另外是MyP2好 那我們現在看第一個example第一個example呢 我們來看一下它加了什麼EventListener第一個它你看 MyP1它說它Alert嘛 Click然後這個也是用 Click的EventListener那這邊它的值都是設什麼 都是設FalseOK嗎 那False就是預設值就是由小到大所以我們有一個是在比較大的負元素這是指元素 這是負元素 OK然後我們就設好EventListener那當我只有一個Click的EventOK 我就點這邊 它是由小對不對它是先觸發比較小的字再觸發負的這個EventOK 就是第一個就是第一個這個MyDiff1這裡面的一些元素好 再來我們看一下第二個example就是MyDiff2和MyP2這邊那這邊呢 其實它們的EventListener都也是在監聽 Click只是它們的差別是它們把後面這邊改成True那True就是Capturing由大到小來做監聽所以當我去點第二個example這個Click我雖然是點在這個子元素上面但是因為它的Capturing是從外面一直跑到裡面所以它發現外面有EventListener是橘色這個 它會先跑然後再來它才會跑裡面這個子元素那這是一個比較簡單的一個example它是只有兩層而已那當然大家可以就是之後做非常厲害的應用那可能就會有很多層那大家可以知道說True是由大到小然後那個False是由小到大那預設是False預設是像前面這樣就是說它只有先找裡面這個然後再慢慢往外找OK那這個copan我們把它寫成是好17-2的它這邊是寫說是lab02是不是好lab02save好存好留在這邊它為什麼沒有URL呢好 那我們開箱為什麼不讓我存換掉嗎application error有了有了存好它剛才可能沒有跳準然後把這連結我們把它附在這個第六個這個example底下這邊其實EX6跟現在剛才寫的是一樣的codeOK這邊好的那這個是我們17-2的lab02的example

### 影片逐字稿largev2

好的這邊這個example我跑一下給大家看這邊是17-2的example好的我們把剛剛那個html的code就是第六個這個example把它複製貼過來好我們這邊有兩個一個是由下到上然後會先經過白色元素再經過橘色白色他alert橘色alert那這邊capturing是由大到小那先經過橘色再經過白色好的我們來看一下他code是怎麼實作的好首先呢他是不是有一個id是mydiv1然後這邊是一個idmydiv2那這個是由下到上是div1由上到下是div2那這邊有一個id是myp1他另外一個是myp2好那我們現在看第一個example第一個example呢我們來看一下他加了什麼event listener第一個你看myp1他說他alert嘛click然後這個也是用click的event listener那這邊他的值都是設什麼都是設falseok嗎那false就是預設值就是由小到大所以我們有一個是在比較大的負元素這是子元素這是負元素ok然後我們就設好event listener那當我只有一個click的eventok我只有點這邊他是由小對不對他是先觸發比較小的子再觸發負的這個eventok就是第一個就是第一個這個mydiv1這裡面的一些元素好再來我們看一下第二個example就是mydiv2和myp2這邊那這邊呢其實他們的event listener都也是在監聽click只是他們的差別是他們把後面這邊改成true那true就是capturing由大到小來做監聽所以當我去點第二個example這個click我雖然是點在這個子元素上面但是因為他的capturing是從外面一直跑到裡面所以他發現外面有event listener是橘色這個他會先跑然後再來他才會跑裡面這個子元素那這是一個比較簡單的example他是只有兩層而已那當然大家可以就是之後做非常厲害的應用那可能就會有很多層那大家可以知道說true是由大到小然後那個false是由小到大那預設是false預設是像前面這樣就是說他只有先找裡面這個然後再慢慢往外找ok那這個copain我們把它寫成是17-2他這邊是寫說是lab02是不是lab02save存好以後這邊啊他怎麼沒有url咧好那我們看一下為什麼不讓我存application error喔有了有了存好了他剛剛可能沒有跳轉好那我們把這個連結我們把它附在這個第六個這個example這邊一個其實ex6跟現在剛才寫的是一樣的code好的那這個是我們17-2的lab02的example
---
description: 'Lesson: 17-2 addEventListener'
duration: 5m3s
level: beginner
tags:
- JavaScript
tier: free
title: 17-2 addEventListener
youtubeId: DEVKbMgyfOE
---

# 17-2 addEventListener

Original: https://course.andys.pro/Javascript-Intro/17-2-addeventlistener/

### 講義

#### 1. 為什麼要使用 `addEventListener`？
與傳統在 HTML 標籤寫 `onclick` 的方式相比，`addEventListener` 具有以下優點：
*   **支援多個處理程序**：可以在同一個物件上掛載多個不同的 function，它們會依序執行而不會互相覆蓋。
*   **更乾淨的程式碼**：將 JavaScript 邏輯與 HTML 結構分離，方便管理與維護。
*   **不重複執行**：如果你不小心掛載了兩個完全相同的監聽器，瀏覽器會聰明地捨棄重複的部分，只執行一次。

#### 2. 基本語法
`element.addEventListener(event, function, useCapture)`
*   **`event`**：要監聽的事件名稱（注意：這裡**不用加 on**），例如 `"click"`、`"mouseover"`。
*   **`function`**：當事件觸發時要執行的程式碼。
*   **`useCapture`**：這是一個布林值，決定事件觸發的階段：
    - **`false` (預設)**：採用 **冒泡 (Bubbling)**，由內而外觸發。
    - **`true`**：採用 **捕獲 (Capturing)**，由外而內觸發。

#### 3. 關於 `this`
在 `addEventListener` 所觸發的函式中，關鍵字 `this` 通常代表「觸發該事件的元素本身」。這讓你可以輕鬆地對當前被點擊的物件進行操作。

#### 4. 元件化開發與累加功能
在大型專案或使用第三方插件時，`addEventListener` 非常重要。它可以確保你的程式碼不會破壞原本網頁中既有的事件功能，而是以「累加」的方式融入其中。

#### 5. 小結
*   **推薦做法**：現代前端開發幾乎一律使用 `addEventListener`。
*   **移除監聽器**：如果有需要，也可以使用 `removeEventListener` 來將監聽功能手動刪除。

### 影片逐字稿 (AI 生成)

接著我們來看十七之二add event listener第一個 我們會帶到一些觀念再來我們會更深入的了解這些觀念然後我們再來看一些add event listener的語法好了 首先為什麼我們要用add event listener那它的優點是它可以為一個事件去增加多個處理程序如果我們今天是直接去動這個事件的話那是不是可能它原本就有一些插件會它這些原件裡面原本就有一些它就是它預設的一些處理方法那我們可能就會動到它原本的功能可是我們如果是在外面再多加一個add event listener當這件事情做完以後我們再補充一些再多監聽它然後它發生的時候我們再去做那這樣是不是就是可以累加很多功能在一個事件上面加很多功能所以這個是用add event listener的好處那當正在發生一個添加的 event listener上去的時候事件不會被事件所觸發它是在流程中後期可能被觸發就是後期才會觸發就是bubbling的階段就是說你可能剛開始的時候在比較小的時候不會碰到它到比較大的時候它才會去處理它那我們叫這個東西叫bubbling那我們叫這個東西叫bubbling好如果你今天有一樣的event listener然後再就是它會你有多做好幾次那這個時候呢它會把一樣的東西它會捨棄所以你就不會一下掛太多相同的event listener它只會掛一次因為程式不會重複掉用event listener所以也不用用remove event listener來將它手動刪除在前面我們有學到setTimeout跟setInterval對不對那如果我們做了很多setTimeout和setInterval的話如果我們就是setTimeout做了3秒這件事情如果做了兩次是它會連續可能跳出兩次alert可是在event listener就不會有這樣的狀況那list在event listener的話代表是現在這個值所以我們在韓式裡面可以用list來表示這個代表的值來拿它OK好那我們現在就開始來看add event listener的語法首先我們前面是我們的element然後我們把它加上比如說它是一個按鈕啊或是它是一個連結啊我們把它加上一個event listener然後還有我們要做的event我們要監聽的event那比如說像click啊mouseover啊等等之類那我們會更仔細後面會更仔細來講這些event那function就是說我們監聽到這個event以後我們要做什麼事情那useCapture就是說剛剛我們有講到由大到小和由小到大比如說你到底是小的東西觸發完了以後才慢慢往外面去擴散或是你是從上面開始慢慢慢慢找到最小的這個東西有點像是在有點像是柱子柱子嘛對不對像我們台灣是從由大到小台灣省然後慢慢的什麼雲林線然後斗六四這樣慢慢就是由大到小那像美國他們的柱子是由小到大就是它是先寫數字然後再來講說它是哪一條街然後這樣慢慢慢慢慢慢才到到就是說喔這個地點是在美國那就是表示方法的不同好的那這邊Lab02會去有一個example會讓大家看到就是說你點的時候它的觸發是從裡面到外面和由外面到裡面好的那我剛才這邊又不小心少提到了是Use Capture這邊啊就是預設我們都是用Bubbling的這種方法就由小到大的的觸發方式來做OK預設都是由False好的這邊是17-2

### 影片逐字稿largev2

接著我們來看17-2 AddEventListener第一個我們會帶到一些觀念再來我們會更深入的了解這些觀念然後我們再來看一些AddEventListener的語法好了首先為什麼我們要用AddEventListener那他的優點是他可以為一個事件去增加多個處理程序如果我們今天是直接去動這個事件的話那是不是可能他原本就有一些插件會他這些元件裡面原本就有一些就是他預設的一些處理方法那我們可能就會動到他原本的功能可是我們如果是在外面再多加一個AddEventListener當這件事情做完以後我們再補充一些再多聽他監聽他然後他發生的時候我們再去做那這樣是不是就是可以累加很多功能上在一個事件上面加很多功能所以這個是用AddEventListener的好處那當成當正在發生一個添加的AddEventListener上去的時候事件不會被事件所觸發他是在流程中後期可能被觸發就是後期才會觸發就是Bubbling的階段就是說你可能剛開始的時候在比較小的時候不會碰到他到比較大的時候他才會去處理到那我們叫這個東西叫做Bubbling如果你今天有一樣的AddEventListener然後他會你有多做好幾次那這個時候呢他會把一樣的東西他會捨棄所以你就不會一下掛太多相同的AddEventListener他只會掛一次因為程式不會重複調用AddEventListener所以也不用用RemoveAddEventListener來將他手動刪除在前面我們有學到SetTimeout跟SetInterval那如果我們做了很多SetTimeout和SetInterval的話如果我們就是SetTimeout做了三秒這件事情如果做兩次是他會連續可能跳出兩次Alert可是在AddEventListener就不會有這樣的狀況那List在EventListener的話代表是現在的這個值所以我們在函式裡面可以用List來表示這個代表的值來拿他那我們現在就開始來看AddEventListener的語法首先我們前面是我們的Element然後我們把他加上比如說他是一個按鈕或是他是一個連結我們把他加上一個EventListener然後還有我們要做的Event我們要監聽的Event比如說像Click、MouseOver等等之類那我們後面會更仔細的來講這些EventFunction就是說我們監聽到這個Event以後我們要做什麼事情那UseCapture就是說剛剛我們有講到由大到小和由小到大就是說你到底是小的東西觸發完了以後才慢慢往外面去擴散或是你是從上面開始慢慢慢慢找到最小的這個東西有點像是柱子像我們台灣是從由大到小從由大到小台灣省、雲林縣、斗六市這樣慢慢就是由大到小像美國他們的柱子是由小到大就是他先寫數字然後再來講說他是哪一條街然後再慢慢慢慢到最後說這個地點是在美國那就是表示方法的不同好的,那這邊Lab02會去有一個example讓大家看到就是說你點的時候他的觸發是從裡面到外面和由外面到裡面好的,那我剛才這邊又不小心少提到的是UseCapture這邊就是預設我們都是用Bubbling的這種方法就由小到大的觸發方式來做預設都是由False,預設只是False好的這邊是17-2
---
description: 'Lesson: 18-3 Ajax : Fetch 的屬性與方法'
duration: 7m15s
level: beginner
tags:
- JavaScript
tier: free
title: '18-3 Ajax : Fetch 的屬性與方法'
youtubeId: 8B8RgqSftqE
---

# 18-3 Ajax : Fetch 的屬性與方法

Original: https://course.andys.pro/Javascript-Intro/18-3-ajax-properties-and-methods-of-fetch/

### 講義

#### 1. 跨來源資源共用 (CORS)
當你在網域 A (Domain A) 的網頁，想要去網域 B 拿資料時，會受到瀏覽器的安全性限制。
*   **CORS (Cross-Origin Resource Sharing)**：是一種機制，伺服器必須明確告訴瀏覽器「允許」哪些外來網域抓取資料（就像開門讓鄰居進來拿東西）。
*   如果你發現 `fetch` 失敗並顯示標頭錯誤，通常就是遇到了跨域限制問題。

#### 2. Fetch API 的寫法
`fetch(URL, [init])`
*   **URL**：請求的地點（必填）。
*   **init (設定物件)**：選填。可以設定以下屬性：
    - **`method`**：預設為 `GET` (拿東西)。若要「給東西」則改為 `POST`。
    - **`body`**：POST 請求時要傳送的內容（通常會用 `JSON.stringify(obj)` 轉成字串）。
    - **`headers`**：設定傳送的標頭。
    - **`mode`**：設定跨域模式（如 `cors`, `no-cors`）。

#### 3. 理解 Promise 物件
`fetch` 執行後會回傳一個 **Promise (承諾)**：
*   **Promise** 是非同步的。你可以把它想像成「答應你待會會給你資料」。
*   當「承諾兌現」時，會執行 **`.then()`** 後面的程式。
*   當「發生錯誤」時，會執行 **`.catch()`** 後面的程式。

#### 4. 處理回應 (Response) 的方式
伺服器回傳的是原始封包，我們需要將它轉換成我們需要的格式：
*   **`response.json()`**：最常用。將內容直接轉化為 JavaScript 物件。
*   **`response.text()`**：將內容轉化為純文字字串。
*   **`response.blob()`**：用於處理解碼後的非結構化資料，例如圖片。

#### 5. 小結
`fetch` 是目前最現代且彈性的技術。它簡化了 Ajax 的開發流程，讓前端工程師能用更精簡的程式碼，完成複雜的資料請求與頁面更新。

### 影片逐字稿 (AI 生成)

接下來我們來看18-3 Fetch 這個方法好 那我們會首先來講CORS就是跨來源資源的共用然後再來我們才會講到 Fetch 的基本用法和它的屬性和方法好的 首先CORS 代表什麼意思叫做 Cross-Origin Resource Sharing就代表說 在不同的網域底下的請求那比如說你今天有一個網站是 Domain A他要到 Domain B 去拿照片那如果 Domain B 沒有允許 Domain A 可以來訪問訪問就會被限制你可以把它想像成是家就說我要去你家拿你的照片就是 對如果你不同意 你不開門 我就拿不到所以網域你可以把它這樣想像就是說 我要去 access 到別人的網域就到別人的同意 才可以拿得到那像我們剛剛 Demo 的時候是不是用 Cold Pen然後 Cold Pen 是不是去 Google 的網域裡面去抓了一張首先我是去到我的 Geekhub 上面去拿我投貼的照片對不對再來我是不是在下課做 iPhone 12 Demo 那時候的圖片 Demo 的時候我是跑到 Google Image 去找一張照片那我是不是直接跑到 Google 上面去拿這張照片就是這樣的例子那像這些 比如說像部落格啊 或是線上文章的照片通常是不會鎖 就是 Cross-Origin的可是如果是一些個人的 比如說你的 Google Photo 裡面你一些自己個人的家人的照片那是不是就應該要鎖 就是別人不能從外面拿到或是有權限的人他可以拿得到 其他的人不能拿得到所以這時候就是其他的服務去跟 Google Photo 拿 可能都拿不到照片可是如果是部落格的話 那當然就是要讓大家看嘛好 所以這邊大家先大致瞭解一下 Cross-Origin Resource Sharing那有的時候 因為我們有時候拿別人的 比如說有時候你拿 Facebook 的個人的一些資料那可能就會拿不到 會遇到 Cross-Origin 的問題好不好就大家可以知道說 如果在寫網站的時候有些 resource 拿不到的 就會出現這個好 再來我們理解一下 Fetch 的基本用法那 Fetch 提供了一個獲取資源的介面它類似於 XML HTTP Request但是這個 API 更強 更彈性 更好用好 那所以 Fetch 是 Method它是最基本的寫法 屬性不一定要填那我們看一下它的寫法是 長得是怎麼樣哇 是不是 開心的很多它把 XML HTTP Request 的寫法 變得更精簡好用首先我 Fetch 一個網址比如說剛剛那個網址然後拿到了以後 Then Function 去做把這個 response 處理 response那如果沒有拿到像 我們可以想像一下 200如果拿到 status 是 200是不是就會跑這個正確的 拿到 response那如果是 404 沒有拿到有錯誤 就 Error然後就在這邊 你就可以把這個 Error 印出來你就可以知道說 我發生了什麼錯誤好 這邊先提到一下它是一個 Promise 的物件那 Promise 是在 JavaScript 我們簡單的 小介紹一下就是 Promise 可以把它 想像成 就是答應別人一個請求那答應別人請求 那是不是後面就是 完成那個請求的時候它是一個非同步的我現在給的一個請求 就是一個 Promise那之後 Then 結束當我拿到的時候完成這個請求的時候 再處理所以可以簡單的了解一下 Promise 這個東西那如果想要更深入了解可以去 Google 一下 Promise 的用法那我們在深入的 JavaScript 也會介紹怎麼樣更深入的來處理 Promise好的 我們來看一下 Fetch 的屬性與方法首先呢 這個 URL 是必填的就是我們剛剛前面這邊的這個網址再來呢 後面有一些選填那 選填它是用 大瓜糊 包住所有的屬性所以其實這個 Innit 這個是什麼Init 這個其實是一個Object 嘛 類似像 Object 的東西裡面有 Key 是 Method有 Mode 有 Header 有 Body那 Method 就是來填 比如說 Get 啊 Post 啊那它預設是 Get 要拿東西那它的 Mode 有好幾種喔有 Cross 有可以跨跨 Domain 的 不跨 Domain 的同樣的位置的 或是 Navigate那預設是跨 Domain 的好的 Header 的話 相關要求的 Header 物件就預設是沒有拿的那你如果到對這個網站 想要拿它的 Header比如說它的 Title 啊 它的 Description 啊那你在這邊就可以要求一些好的 那 Body 是什麼呢我們在拿東西的時候 通常我們要拿東西我們是不是不會有資料要傳給他我們就只問他說 欸 你有沒有我要什麼東西 可不可以給我對不對 那 我要給別人資料的時候是不是才有 Post 才會需要 Body就是 啊 我要給你什麼然後裡面有一坨東西 要給你所以 Body 其實是在 Post 的時候要傳送的內容 寫在這個 Body 裡面大家大概可以理解嗎好那 Fetch 做完 它會返回一個 Promise 的物件然後就是拿到以後的 ResponseOK所以 這些 Response 有什麼呢你要拿到它的 Response 的方法有 用 Json 這個 Function 可以拿到 Json 的物件那用 Text 就是 Call 這個 Text 的時候它會給你一個字串或是 B-L-O-B它是一個非結構的物件資料那 有的時候這個非結構有時候會傳的是圖片之類的有的時候啦 還有其他的非結構的資料好的 我們 18 章講完了那 我們本章的重點精華回顧是說我們先了解說 欸 怎麼樣可以因為有 JavaScript 的關係所以我不刷新頁面 我就可以更新內容然後再來是 XML HTTP Request可以讓它發出請求和接收的回應那 Fetch 可以更彈性的來用 XML HTTP Request但這個 API 更強 更彈性 更好用OK那這邊是 18 章

### 影片逐字稿largev2

接下來我們來看18-3 FETCH這個方法好,那我們會首先來講CORS就是跨來源資源的共用然後再來我們才會講到FETCH的基本用法和它的屬性和方法好的,首先CORS代表什麼意思叫做Cross-Origin Resource Sharing就代表說在不同的網域底下的請求那比如說你今天有一個網站是Domain A他要到Domain B去拿照片那如果Domain B沒有允許Domain A可以來訪問訪問就會被限制你可以把它想像成是家就說我要去你家拿你的照片如果你不同意,你不開門,我就拿不到所以網域你可以把它這樣想像就是說,我要去Access到別人的網域就要別人同意才可以拿得到那像我們剛剛Demo的時候是不是用Codepen然後Codepen是不是去Google的網域裡面去抓了一張首先我是去到我的Github上面去拿我頭貼的照片再來我是不是在下課做iPhone 12 Demo那時候的圖片Demo的時候我是不是跑到Google Image去找一張照片那我是不是直接跑到Google上面去拿這張照片都是這樣的例子那像這些比如說像部落格或是線上文章的照片通常是不會鎖Cross-Origin的可是如果是一些個人的比如說你的Google Photo裡面一些自己個人的家人的照片那是不是就應該要鎖就是別人不能從外面拿到或是有權限的人他可以拿到其他的人不能拿到所以這時候就是其他服務去跟Google Photo拿可能都拿不到照片可是如果是部落格的話那當然就是要讓大家看嘛好所以這邊大家先大致了解一下Cross-Origin Resource Sharing那有的時候因為我們有時候拿別人的比如說有時候你拿Facebook的個人的一些資料那可能就會拿不到會遇到Cross-Origin的問題好不好就大家可以知道說在寫網站的時候有些Resource是拿不到的就會出現這個狀況好再來我們理解一下Fetch的基本用法那Fetch提供了一個獲取資源的介面它類似於XML HTTP Request但是這個API更強更彈性更好用好那所以Fetch是Method它是最基本的寫法屬性不一定要填那我們看一下它的寫法長的是怎麼樣哇是不是開心的很多它把XML HTTP Request的寫法變得更精簡好用首先我Fetch一個網址比如說剛剛那個網址然後拿到了以後then function去做把這個response處理response那如果沒有拿到像我們可以想像一下如果拿到的status是200是不是就會跑這個正確的拿到response那如果是404沒有拿到有錯誤就Error然後在這邊就可以把這個Error印出來就可以知道說我發生了什麼錯誤好這邊先提到一下它是一個Promise的物件那Promise是在JavaScript我們簡單的小介紹一下就是Promise可以把它想像成就是答應別人一個請求那答應別人的請求是不是後面完成那個請求的時候它是一個非同步的我現在給的一個請求就是一個Promise那之後then結束當我拿到的時候完成這個請求的時候再處理所以可以簡單的了解一下Promise這個東西那如果想要更深入的了解可以去Google一下Promise的用法那我們在深入的JavaScript也會介紹怎麼樣更深入的來處理Promise好的我們來看一下Fetch的屬性與方法首先呢這個URL是必填的就是我們剛剛前面這邊的這個網址再來呢後面有一些選填那選填它是用大括弧包住所有的屬性所以其實這個init這個是什麼init這個其實是一個object嘛類似像object的東西裡面有key是method有mode有header有body那method就是來填比如說get啊post啊那預設是get要拿東西那它的mode有好幾種有可以跨跨domain的不跨domain的同樣的位置的或是navigate那預設是跨domain的那header的話相關要求的header物件就預設是沒有拿的那你如果到對這個網站想要拿它的headers比如說它的title啊它的description啊那你在這邊就可以要求一些好那body是什麼呢我們在拿東西的時候通常我們要拿東西我們是不是不會有資料要傳給他我們就只問他說我要什麼東西可不可以給我那我要給別人資料的時候是不是才有post才會需要body就是我要給你什麼然後裡面有一坨東西要給你所以body其實是在post的時候要傳送的內容寫在這個body裡面大家大概可以理解嗎好那fetch做完它會返回一個promise的物件然後.then就是拿到以後的responseok所以這些response有什麼呢你要拿到它的response的方法有用json這個function可以拿到json的物件那用text就是call這個text的時候它會給你一個字串或是blob它是一個非結構的物件資料那有的時候這個非結構有時候會傳的是圖片之類的有的時候啦還有其他的非結構的資料好的我們十八章講完了那我們本章的重點精華回顧是說我們先了解說怎麼樣可以因為有javascript的關係所以我不刷新頁面我就可以更新內容然後再來是xmlhttp request可以讓它發出請求和接收的回應那fetch可以更彈性的來用xmlhttp request但這個api更強更彈性更好用ok那這邊是十八章
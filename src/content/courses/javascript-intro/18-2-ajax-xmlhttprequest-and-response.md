---
description: 'Lesson: 18-2 Ajax : XMLHttpRequest and Response'
duration: 7m2s
level: beginner
tags:
- JavaScript
tier: free
title: '18-2 Ajax : XMLHttpRequest and Response'
youtubeId: QW9VIcg6eJU
---

# 18-2 Ajax : XMLHttpRequest and Response

Original: https://course.andys.pro/Javascript-Intro/18-2-ajax-xmlhttprequest-and-response/

### 講義

#### 1. 深入了解 XMLHttpRequest (XHR)
XHR 是 JavaScript 用於與伺服器交換資料的核心物件。
*   **不只是 XML**：雖然名字裡有 XML，但它可以傳輸任何類型的資料（如 JSON 或純文字）。
*   **多樣化傳輸**：除了 HTTP 協定，XHR 也能用於處理 `file://` 或 `ftp://`。

#### 2. 發送請求 (Request)
要從 Server 拿資料，需要經過兩個步驟：
1.  **`open(method, url, async)`**：
    - `method`：請求的方法（如 `GET` 拿資料、`POST` 給資料）。
    - `url`：伺服器或檔案的位置。
    - `async`：是否非同步。設為 `true` 代表在等待資料時，網頁不會卡住，仍可繼續操作。
2.  **`send()`**：正式將請求送出。

#### 3. 接收回應 (Response)
當伺服器把資料送回來後，可以透過以下屬性讀取：
*   **`responseText`**：最常用的屬性，以字串形式取得回傳資料。
*   **`responseXML`**：若接收的是 XML 格式資料，則使用此屬性。

#### 4. 監聽狀態：`readyState` 與 `Status`
Ajax 是非同步的，所以我們需要監控「目前進度到哪了」。
*   **`onreadystatechange`**：當進度有變化時會觸發的事件。
*   **`readyState` (狀態值 0~4)**：
    - `0` (未初始化)、`1` (讀取中)、`2` (已讀取)、`3` (交互中)。
    - **`4` (完成)**：代表請求已處理完畢，資料準備好了。
*   **`status` (HTTP 狀態碼)**：
    - **`200`**：代表 OK (成功)。
    - **`404`**：代表找不到內容 (Not Found)。

#### 5. 小結
最標準的 Ajax 檢查寫法是：
`if (xhttp.readyState == 4 && xhttp.status == 200)`
這行程式碼確保了「資料傳輸已完成」且「傳輸結果是成功的」。

### 影片逐字稿 (AI 生成)

好的 接下來我們看到18-2 XML HTTP Request好 那這個名詞有點參考那沒關係 我們現在 剛剛前面有先提到Server那我們現在就更仔細的來看XML HTTP Request這個物件是什麼然後還有就是發送請求叫做Request還有接受回應叫Response然後他們的運作方式我們更仔細的來看一下好的 那首先呢JavaScript要送出一個HTTP的請求那它建立一個XML HTTP Request它是一個請求嘛 所以是一個RequestHTTP 那它格式是XML的格式然後它開啟一個URL 發起一個請求雖然名字是用XML HTTP就是它剛開始是用XML可是你可以來傳輸任何的資料 不限於XMLOK那它也可以來傳輸HTTP以外的通訊顯示比如說像File啊 像FTP傳檔案啊OK那它的建構式是這樣 就是說我去New一個XML HTTP Request我去New一個這個東西把它存成變數這樣就是最簡單的一個XML HTTP Request好的 當我們拿到我們去New了一個這個東西以後呢我們開始可以來發送Request那它有兩個方法就是兩個Method一個是Open一個是Send好 Open裡面呢它的方法呢 就是這個是UrlOK比如說像OpenGet這個是它的方法它用Get的指令然後我要Get的東西是Test的TXT然後它是不是非同步的True好那非同步的Sync是True的話就是非同步那如果是False就是同步這個在更後面呢就是會實際的去跑跑看看那我們這邊先了解一下有這樣一個東西OK它可以有Open那XML就是這個XML HTTP這個東西變數是什麼呢就是我們剛才前面宣告的嘛對不對然後它可以Send它可以發送請求到伺服器那這個String呢僅限於就是POST的請求就是我要我要把東西POST到Server上面一個是Get是說我要從Server那邊拿檔案回來那Send的是說我要POST我要塞東西過去OK好的那接收回應Response它這邊有兩個就是它有Response Text跟Response XML的屬性那Text呢大家很清楚知道就是字串的類型回應那XML呢就是XML的類型回應那要得到特定標籤底下的資料就是用GetElementsName去拿到好的那我們前面有講到on對不對down什麼事情發生所以這個也是類似只是它是它有一個東西叫做ReadyStateReadyState是一個你可以把它想像成一個屬性就是說這個程式它跟Server在溝通的時候它沒有Ready了它準備好了沒有它是一個狀態那我們這邊在等的事情是當這個State在改變比如說它從True變False或是從False變True這種只要改變只要這個值有做改變的情況下這個事件就會觸發OK所以ReadyState有改變的時候這個事件就會觸發那裡面可能就會放一個Function來做你要做的事情那在XML HTTP Request它有四個狀態一個是0到4那這邊呢我們現在要先知道當它是4的時候代表請求已經完成回應已經OK了就已經Ready了那HTTP的Status有幾個一個是200是說OK那404是沒有找到東西那這個又回到了我們這一個講義的最前面的那個地方我們在看一個網頁在載入的時候我們先過來看這邊inspect element我們看到Network我們不是很早很早很早之前第一章的時候我們有了解怎麼用Network這個東西對不對那我們這邊我們就可以簡單的來看到說它的Status是200代表是什麼200OKOK404 cannot find對不對找不到那這個Wikipedia的網站寫的還OK寫的還OK所以都是200沒有讓我們看到404OK嗎那要找404我想一下怎麼找好我們來找一下這個網站然後我們可以讓它來做一個我們讓它找你看我們可以換成中文嘛對不對我們換成中文的時候它的URL是好這也是TW嘛對不對那我們找一下CN好404 cannot find對不對那在這個裡面呢我們就會看到有404的狀態有沒有它拿不到這個JSON檔有沒有它拿不到JSON檔所以它就是404404找不到這個東西的頁面所以就是404那有一些其他東西還是有拿到的它就是200好這邊只是要讓大家看一下就是404的樣子OK因為我們沒有中文網站那個簡體中文網站所以就是這樣好所以LAB01我找一下看有沒有東西可以給大家看好這邊是18-2

### 影片逐字稿largev2

好的,接下來我們看到18-2XML HTTP REQUEST好,這個名詞有點長沒關係,剛剛前面有先提到Server那我們現在就更仔細的來看XML HTTP REQUEST這個物件是什麼還有發送請求,叫做REQUEST還有接受回應,叫做RESPONSE他們的運作方式,我們更仔細的來看一下好的,首先JavaScript要送出一個HTTP的請求那他要建立一個XML HTTP REQUEST他是一個請求嘛,所以是一個REQUEST HTTP那格式是XML的格式然後開啟一個URL,發起一個請求雖然名字是用XML HTTP,就是他剛開始是用XML可是你可以來傳輸任何的資料,不限於XML那他也可以來傳輸HTTP以外的通訊顯示器比如說像File啊,像FTP傳檔案啊那他的建構式是這樣就是說我去NEW一個XML HTTP REQUESTNEW一個這個東西,把它存成變數這樣就是最簡單的一個XML HTTP REQUEST好的,當我們去NEW了一個這個東西以後呢我們開始可以來發送REQUEST那他有兩個方法,就是兩個METHOD一個是OPEN,一個是SENDOPEN裡面的方法呢,就是這個是位置嘛,URL嘛比如說像OPEN GET,這個是他的方法,他用GET的指令然後我要GET的東西是TEST的TXT然後他是不是非同步的,TRUE那非同步的ASYNC是TRUE的話就是非同步那如果是FALSE就是同步好了,這個在更後面呢,就是會實際的去跑跑看那我們這邊先了解一下有這樣一個東西他可以有OPEN那這個XML HTTP這個變數是什麼呢?就是我們剛剛前面宣告的嘛,對不對然後他可以SEND,他可以發送請求到伺服器那這個STRING呢,僅限於POST的請求就是我要把東西POST到SERVER上面一個是GET是說我要從SERVER那邊拿檔案回來那SEND是說我要POST,我要塞東西過去那接收回應,RESPONSE他這邊有兩個,就是他有RESPONSE TEXT跟RESPONSE XML的屬性那TEXT呢,大家很清楚知道就是自串的類型回應XML呢,就是XML的類型回應那要得到特定標籤底下的資料就是用GET ELEMENTS BY TAG NAME去拿到好的,那我們前面有講到ON,對不對當什麼事情發生,所以這個也是類似只是他是,他有一個東西叫做READY STATE好,READY STATE是一個,你可以把它想像成一個屬性就是說,這個程式他跟SERVER在溝通的時候他有沒有READY了,他準備好了沒有他是一個狀態那我們這邊在等的事情是當這個STATE在改變比如說他從TRUE變FALSE或是從FALSE變TRUE這種只要改變,只要這個值有做改變的情況下這個事件就會觸發OK?所以READY STATE有改變的時候這個事件就會觸發,那裡面可能就會放一個FUNCTION來做你要做的事情那在XML HTTP REQUEST他有四個狀態一個是0到4那這邊呢,我們現在先知道,當他是4的時候代表請求已經完成,回應已經OK了就已經READY了那HTTP的STATUS有幾個一個是200是說OK那404是沒有找到東西那這個就回到了我們這一個講義的最前面那個地方我們在看一個網頁在載入的時候我們先過來看這邊INSPECT ELEMENT我們看到NETWORK我們不是很早很早很早之前第一章的時候我們有了解怎麼用NETWORK這個東西對不對那我們這邊就可以簡單的來看到說他的STATUS是200,代表是什麼200OK404CANNOTFIND找不到那你看他這個WIKIPEDIA的網站寫的還OK所以都是200沒有讓我們看到404OK嗎那要找404我想一下怎麼找好我們來找一下這個網站然後我們可以讓他來做一個我們讓他找你看我們可以換成中文嘛對不對我們換成中文的時候他的URL是好像好這也是TW嘛對不對那我們找一下CN好404CANNOTFIND對不對那在這個裡面呢我們就會看到有404的狀態有沒有他拿不到這個JSON檔有沒有他拿不到JSON檔所以他就是404404然後找不到這個東西的頁面所以就是404那有一些其他東西還是有拿到的他就會是200這邊只是要讓大家看一下就是404的樣子OK因為我們沒有簡體中文網站所以就是這樣所以LAB01我找一下看有沒有東西可以給大家看這邊是18-2
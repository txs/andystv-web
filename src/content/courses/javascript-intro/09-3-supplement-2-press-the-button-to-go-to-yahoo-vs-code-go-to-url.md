---
description: 'Lesson: 9-3 補充2 按下按鈕到 Yahoo 奇摩 - VS Code Go to URL'
duration: 4m21s
level: beginner
tags:
- JavaScript
tier: free
title: 9-3 補充2 按下按鈕到 Yahoo 奇摩 - VS Code Go to URL
youtubeId: CeIVtn8serg
---

# 9-3 補充2 按下按鈕到 Yahoo 奇摩 - VS Code Go to URL

Original: https://course.andys.pro/Javascript-Intro/09-3-supplement-2-press-the-button-to-go-to-yahoo-vs-code-go-to-url/

### 講義

#### 1. 建立實體網頁檔案
除了在 CodePen 練習，我們可以在電腦中實際建立 `.html` 檔案。
*   **VS Code 快速鍵**：在空白 HTML 檔案中輸入 `!` (驚嘆號) 並按下 Tab，即可生成基本的 HTML5 模板。

#### 2. 加入 JavaScript 腳本
在 HTML 的 `<body>` 標籤內，使用 `<script>` 標籤來撰寫 JavaScript 程式碼。
```html
<script>
    function goToYahoo() {
        // 跳轉網址的語法
        window.location.href = "https://tw.yahoo.com";
    }
</script>
```

#### 3. 網頁跳轉語法：`window.location.href`
*   這是控制瀏覽器網址最常用的方法。
*   將目標網址以「字串」形式指派給這個屬性，瀏覽器就會立即導向該頁面。

#### 4. 實戰練習：按鈕結合跳轉
1. 在 HTML 中加入按鈕，並設定 `onclick` 事件。
2. 結合 `confirm()` 視窗，讓使用者確認後再跳轉。
```html
<button onclick="checkAndGo()">按下跳轉</button>

<script>
    function checkAndGo() {
        if (confirm("你確定要前往 Yahoo 嗎？")) {
            window.location.href = "https://tw.yahoo.com";
        }
    }
</script>
```

### 影片逐字稿 (AI 生成)

補充一個就是 同學可能會覺得說老師你這邊都在CodePan上面跑我可不可以實際建一個檔案然後直接在我HTML上面直接跑那我們現在就把這一段的Code放到HTML裡面來做首先我們到VSCode然後我們再建一個檔案然後這個檔案可能叫做NewFive然後它叫做剛剛因為同學講說要去Yahoo所以我們就叫GoYahoo.html好 然後HTML建好了以後呢我是不是要headbody這些東西那我們還記得用驚嘆號可以快速的把我們的網站的這些基本資料先建起來那我這邊呢我可以很簡單的把這個Button這段CodeCopy過來那我怎麼樣然後我把它貼上來那可是那個JavaScript呢JavaScript我們這邊叫一個script tag然後它自動會把斜線script補上來那這邊script裡面其實就在寫JavaScript那我們把這個方形貼過來好的那在這邊呢其實我可以就是同學會說欸那我要怎麼去Yahoo就是那其實呢這邊我們可以很快速的搜尋js.go.url然後這邊stack.overflow有一對英文不過呢我們直接下來看解答那這邊可以的做法是我去window.location.herv去把連結改掉改成我們的一個自傳然後把這段Code拿過來那在這邊我們去改成什麼Code呢因為我們要去Yahoo所以我們把我們去Yahoo好的我們把連結複製起來了以後我們把它貼過來這時候我們把它存起來就是存檔好那我們把這個HTML我們再怎麼沒有open我有lifeserver好那我們把這個其實你右鍵應該是可以直接去開資料結啊然後我的document然後把這個檔案可以直接打開我沒開我沒開我開嗎oh shit等一下我的abora蕩掉呃吃我abora是重開的是不是重開了網頁重開了好我們把它打開open好可以了好到這邊呢我們會看到說這個是我們的file user我的這裡面的go yahoo.html對不對好那我當我按下去的時候你確定嗎okok然後這然後他因為這是前面的alert嘛alert ok然後他就會跳轉過去到yahoo那你會說我怎麼要ok兩次很煩對不對那沒有關係我們到vscode我們可以把我們剛剛前面的這個confirm alert ok把它拿掉然後我們再回來我們到剛剛那個檔案file好因為我們存檔了所以我們要重整一下好重整完以後按我你確定嗎ok他就直接跳轉到yahoo好那這個是快速補充小鈴鐺好好好好好好好好好好好好好好

### 影片逐字稿largev2

補充一個,同學可能會覺得說老師你這邊都在CodePen上面跑我可不可以實際建一個檔案然後直接在我的HTML上面跑那我們現在就把這一段的Code放到HTML裡面來做首先我們到VSCode然後我們再建一個檔案然後這個檔案可能叫做new file然後它叫做,剛剛因為同學講說要去Yahoo所以我們就叫go yahoo.html好,然後HTML建好了以後呢我是不是要head, body這些東西那我們還記得用驚嘆號可以快速的把我們的網站的這些基本資料先建起來那我這邊呢,我可以很簡單的把這個button這段codecopy過來那我怎麼樣,然後我把它貼上來那可是那個JavaScript呢JavaScript我們這邊加一個script tag然後它自動會把斜線的script補上來那這邊script裡面其實就在寫JavaScript那我們把這個function貼過來好的,那在這邊呢其實我可以,就是同學會說那我要怎麼去Yahoo就是,那其實呢這邊我們可以很快速的搜尋js.go.url然後這邊,Stack Overflow有一堆英文,不過呢我們直接下來看解答那這邊可以的做法是我去window.location.herb去把連結改掉改成我們的一個自傳然後我們把這段code拿過來那在這邊我們去改成什麼code呢因為我們要去Yahoo所以我們把,我們去Yahoo好的,我們把連結複製起來以後我們把它貼過來這時候我們把它存起來,就是存檔好,那我們把這個html我們在嗯欸怎麼沒有open我有live server,好那我們把這個,其實你右鍵應該是可以直接去好你開資料夾然後我的document然後把這個檔案可以直接打開open嗯我沒開我開嗎我學了我的operadown掉了欸欸欸我opera是重開了是不是重開了網頁重開了好,我們把它打開open好,可以了好,到這邊呢我們會看到說,這個是我們的file user這裡面的go yahoo.html嘛好,當我按下去的時候你確定嗎ok因為這是前面的alertalert ok然後它就會跳轉過去到Yahoo那你會說我怎麼要ok兩次,很煩對不對那沒有關係,我們到VSCode我們可以把我們剛剛前面的這個confirm alert ok的把它拿掉ok那我們再回來我們到剛剛那個檔案file好,因為我們存檔了,所以我們要重整一下好,重整完以後按我你確定嗎ok,它就直接跳轉到Yahoo好那這個是快速補充
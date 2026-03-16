---
description: 'Lesson: 2-1~2-2 Dom 是什麼？動態新增頁面內容 createElement setAttribute hasAttribute'
duration: 15m48s
level: beginner
tags:
- JavaScript
tier: free
title: 2-1~2-2 Dom 是什麼？動態新增頁面內容 createElement setAttribute hasAttribute
youtubeId: 8Srq-K0g_es
---

# 2-1~2-2 Dom 是什麼？動態新增頁面內容 createElement setAttribute hasAttribute

Original: https://course.andys.pro/Javascript-Intro/02-1~2-2-what-is-dom-dynamically-add-page-content-createelement-setattribute-hasattribute/

### 講義

#### 1. DOM (Document Object Model) 簡介
*   **定義**：文件物件模型，將 HTML 文件視為一個樹狀結構 (Tree Structure)。
*   **結構**：
    *   **Root**：`document` 物件，代表整個網頁。
    *   **節點 (Nodes)**：包含 `head` (網頁資訊) 與 `body` (網頁內容)。
*   **功能**：透過 JavaScript 操作 DOM，可以動態改變網頁的內容、架構與樣式 (CSS)。

#### 2. 動態新增內容
*   **步驟**：
    1.  **創建元素**：`document.createElement('標籤名')`
        *   範例：`var h1 = document.createElement('h1');`
    2.  **創建文字**：`document.createTextNode('文字內容')`
        *   範例：`var text = document.createTextNode('Hello World');`
    3.  **組合**：通常會將文字節點 `appendChild` 到元素節點中（雖本章節未詳述，但為後續標準操作）。

#### 3. 屬性操作 (Attributes)
*   **設定屬性 (`setAttribute`)**：
    *   語法：`element.setAttribute('屬性名', '屬性值')`
    *   範例：`h1.setAttribute('id', 'title');`
    *   **注意**：建議將 `createElement` 與 `setAttribute` 分開撰寫，確保物件已建立。
*   **檢查屬性 (`hasAttribute`)**：
    *   語法：`element.hasAttribute('屬性名')`
    *   回傳：`true` (有該屬性) 或 `false` (無)。

#### 4. 開發測試技巧
*   **Chrome Console**：可以直接在 Console 中輸入變數名稱 (如 `h1`) 來查看該物件目前的狀態與結構，這比單純看程式碼更直觀。

### 影片逐字稿largev2

大家好,我們開始來講第二章script好,那本章的學習目標是剛剛講到DOM,對不對那DOM這個魚DOM這個是什麼東西呢然後再來是DOM其實有不同的唸法你如果聽外國人有時候在唸DOM他不是唸DOM,他是唸DOM這個DOM什麼什麼DOMDOMDOM這樣好,然後呢那我們因為之前學HTML都是靜態的那我們之後可以用JavaScript來動態新增頁面的標籤內容然後我們也可以取得我們HTML裡面的內容那這個時候HTML是不是就越來越活潑了就是我就是我可以在靜態的HTML裡面加一些元素然後可以去做一些不同的變更那最常見的一些想法就是說我可不可以按一個按鈕然後這個字變紅色就是簡單的一些例子好,二之一那我們開始介紹DOM,我們不知道DOM是什麼可是我們會介紹DOM的介面DOM的結構樹DOM與JavaScript的關係好那DOM是什麼簡稱呢是Document Object Model那他就是主要我們一個HTML就是一個文件他叫做我現在再寫一次就是Hyperlink text記得是Hyperlink textMarkMarkup是Markup喔Language不確定查一下HTMLHypertext Markup Language對,沒事可是他Hypertext是合在一起HT不是HyperlinkHypertext好,那其實這一份文件他是用一個樹狀的結構去組合而成那我們可以看下一張slide你可以用程式來改DOM這個樹然後可以去改他的架構阿風格阿,還有內容他主要就是這樣我們稱他為DocumentDOM就記得是Document就好然後他裡面有什麼呢他就是HTML然後他有head,就是有頭嘛有身體其實HTML就可以把它看成有頭嘛,然後有一個身體然後我們都在看他的身體然後這個是機器在看就是head是給比如說Google search engine因為他有時候網站那麼多他根本就不想看裡面的內容他可能有時候他抓一些內容的時候他都是直接從head裡面去抓或是像Twitter像Messenger我們有時候不是傳一個連結給大家那他不是有縮圖或是說文字那這些東西全部都是塞在head裡面那開發者就要把這些內容塞在head裡面好那這是題外話那我們就是看完了這個結構樹以後我們可以快速的比如說像這個頁面那我們可以快速的怎麼樣知道DOM是什麼呢快速的來這裡然後其實他就是這一大坨的東西那我們其實可以怎樣我們其實可以直接寫Document然後他就會給你一個物件然後這個物件就代表這整個頁面就整個頁面那我們在這個物件裡面我們可以他有很多個東西那我們剛才不是說他有頭嗎所以我們就拿head然後他就會把他的head給你就是這一大坨東西那Dark Reader是因為我有用Chrome的插件所以他會下一些CSS不過我們下來看怎麼head裡面全部都是Dark ReaderOK總之你看他這邊會有titleHDMI有學過title那title這邊就是他顯示在最上面那如果我不知道可不可以改edit text比如說我把title改成hello他上面就改了hello所以這個title跟這個是合在一起的所以你看到這上面每一個都是head的title所以這是title那他的text就是我們剛才改過了那這些就是body裡面的比如說有ar就是連結然後他是href然後這邊是h1然後裡面有myheader這就是body然後機器是看這個然後人是看這個那我們了解一下DOM怎麼跟JavaScript溝通那JavaScript就是只要打document就可以去拿到就是拿到html這份文件那這兩個東西是相互獨立的可是可以透過API就是我們剛才document去操作他那其實不只是JavaScript不是因為browser現在裡面都是用JavaScript在跑其實你也可以用不同的語言來操作html這個檔案其實他就是一份檔案文檔嘛就像你寫的文章只是你寫的文章可能有四個段第一段第二段第三段第四段那html有head段和body段甚至還有一個段是大家都很少提到就是有footer可是後面大家都只寫headbody然後footer而且現在尤其現在又可以一直滑一直滑滑不到底了一直連續載入了你永遠都看不到他腳長怎樣因為他身體無限長好那讓大家去這邊讓大家玩一下讓大家玩一下好在2-2裡面我們會來講標籤中的屬性然後還有新增標籤還有設定怎麼設定標籤的屬性好那從一開始在學code的時候最簡單的做法就是把所有東西都設成全域那所有html都是在全域這個狀況底下那每一個元素呢我們可以設比如說class嘛就是csscss的class就是對class會做很多那class的做法是有很多的元件可以有共同的屬性比如說你有好幾個文字段落可以設同一個class然後你就可以用css很好去改動他嘛那id的話是可以指定一個就是說這個是某一段然後指定他是什麼那hidden就是說我其實還是想要這樣的內容可是我不想要被大家看到那style就是主要都是用現在都是用css來做好那我們會看到下面有幾個就比如說name的話裡面會有buttonfor, input, select和textarea這些html應該都有教嘛那value裡面有buttonoption, input和li就是list然後list裡面就是ulaction method和for好那我們現在來看code就是比如說這邊其實就是大家注意一下就是說前面這個都是就是通用的語法就是documentcreate element這個是通用語法下面這段code其實是可以複製起來好那所以我們這邊呢我們要創建一個h1的標籤那所以我們就documentcreate element去創建一個物件那這個物件叫做h1好那我們現在來試試看好那我們到我們的講義裡面其實我記得我有放有好那當我們create一個element的時候呢大家會發現有一個問題這個問題就是我創了然後把它放到變數裡面啊它在哪好當我這樣創建創了以後欸然後就沒有東西嘛對不對因為它創了它在h1裡面可是你看不到所以這時候我們就會用我們剛剛上一章學的那一招就是console.log叫它出來印出來那其實你這一段複製就是直接印那其實呢你如果是互動式像我們現在是互動式你直接h1你就可以直接把它叫出來叫出來它就是一個h1然後就是裡面沒有文字的一個h1好那第二個我們要學的是createtext node然後裡面去放你要的文字那這個文字都是用分號把它掛起來好那我們這段code我也是把它在這邊已經都幫大家做好對好那這邊我自己做一個high-end好那主要呢我這邊像剛剛講的嘛我如果直接create的話high-end然後它就存在high-end裡面我看不到可是如果我現在後面加一個console.log把它high-end印出來它這時候它就會跟我hi this is Andy它就會印出來那你如果在下一行你要hi然後Andy把它叫出來也是可以這樣它就把它印出來那這就是一個文字的一個就是一個文字這樣子那我們把剛才範例拿出來我也有幫大家就是貼好好就是印出hello worldok好那這邊就是讓大家抄一下就是這邊啊這個講義這邊中間要多一個空suppose.後面它這邊多印了一個空白然後再來是這個東西不能一起set attribute不能一次寫一行就是不信的話我跑給你看就是我覺得code就是這樣就是直接跑就知道到底會不會work好那這邊我們看一下set attribute我們先了解這個set attribute怎麼做那前面是名字比如說像這個就是name是什麼像id嘛那value是什麼我要把id設成h1對不對所以這是name然後這是value好那我們來看一下我這份code跑給大家看好好首先呢我們照剛才課本的做法就是它是一個document然後它create element是有人把它highlight是不是把它畫成藍色是不是好好然後那個如果你們在哪邊有問題的話你其實可以好像我記得是點一下然後右可以comment嗎然後可以留言好然後post好那我就知道你留言那我就那我就可以看到這樣這邊呢比如說我document create element h1然後我set attribute我就照著這個我把這份code拿起來丟然後丟到這裡我先把它清掉然後它會跟你講undefined因為它創了以後你就直接set element然後它沒辦法設定進去所以它就壞掉給你看可是如果我們把它分成兩行就是我先創一個它就h1然後再來呢我把它set attribute叫做id是h1那我們看一下這份code它就會work喔很有趣這樣子這樣子它就會照我們要的方式嘛分兩行h1嘛對不對然後h1.set attribute所以有時候點不能連續用就create element我先創一個h1然後這個h1我再set它的id那大家說那我id一定要h1嗎沒用啊你可以說比如說這邊我可以講說右就是它的id是右然後它的h1的id就會是右所以要分兩行那這邊就是斜斜就是註解這個是註解就是它輸出的結果是這樣好我們先會設定那我們可以去看它是不是有這個元素has attribute那我們就把我這份code也是把它放在我的連結裡面好那我們來看一下我們剛才已經把h1都設定好了那我們先創一個我們這邊跟大家講一下這份公版的講義沒有跟大家提到如果你要創建一個變數就是用var然後建一個新的東西好然後var has id我先建一個變數這個變數是has id然後後面呢我把h1has attribute那h1是不是我們剛剛已經有建了一個東西叫h1就我這裡可以先打給大家看它就是一個h1然後裡面有id是右那我們現在可以說把它我們先我直接打給大家看var has id然後等於然後h1是不是就剛剛那個東西然後它裡面有很多的很多各式各樣的功能可以unload所以有各式各樣unmouse out就是有不同的功能可以用那我們現在要用的功能是我要先了解它有沒有這個attribute那有沒有什麼attribute有沒有id這個attribute然後我們可以去直接看hashas id然後它會跟你講true那所以我們這一段code的做法就其實只是把剛剛那個互動過程變成一行直接塞給它它跟你講true可是課本這邊它的true是大寫的true所以要記得true是小寫的true用我們在JavaScript的世界而不是Python的世界好那這邊是2-2好那這邊lab2大家可以先操作一下然後lab2的話就是大家也可以試試看好那我們在下一段說
---
description: 'Lesson: 18-3 Ajax Fetch Demo 範例程式: .then .catch'
duration: 5m7s
level: beginner
tags:
- JavaScript
tier: free
title: '18-3 Ajax Fetch Demo 範例程式: .then .catch'
youtubeId: tsjCLsF60ME
---

# 18-3 Ajax Fetch Demo 範例程式: .then .catch

Original: https://course.andys.pro/Javascript-Intro/18-3-ajax-fetch-demo-sample-program-then-catch/

### 講義

#### 1. 現代化的請求方式：Fetch API
相較於傳統的 `XMLHttpRequest` 需要處理複雜的狀態碼與狀態變化，現代瀏覽器提供了更直覺的 `fetch` 方法。它基於 **Promise** 架構，讓非同步程式碼讀起來更像一般的邏輯指令。

#### 2. Fetch 的基本語法：`.then()` 與 `.catch()`
*   **第一步：發送請求**：`fetch(URL)`。
*   **第二步：處理回應 (`.then`)**：當伺服器回應後，我們通常會呼叫 `response.text()` 或 `response.json()` 將原始資料轉換成我們看得懂的內容。
*   **第三步：使用資料 (`.then`)**：取得轉換後的內容後，可以用來更新網頁內容（如 `innerHTML`）。
*   **第四步：捕捉錯誤 (`.catch`)**：如果網路斷掉、網址寫錯或伺服器出問題，程式會直接跳到這一層處理錯誤。

#### 3. 實戰：除錯經驗 (Debug)
範例中提到當我們嘗試對一個不支援 POST 的網址進行發送時，會遇到 **405 Method Not Allowed** 錯誤：
*   **觀察方法**：打開瀏覽器的開發者工具 (F12) -> **Console** 或 **Network**。
*   **解決方式**：確認 API 規格，或是檢查後端伺服器是否開啟了對應的請求權限。

#### 4. Fetch vs. XMLHttpRequest 比較
| 特性 | XMLHttpRequest (XHR) | Fetch API |
| :--- | :--- | :--- |
| **語法直覺度** | 較繁瑣（需檢查 readyState） | 極高（語法連鎖化） |
| **錯誤處理** | 需手動判斷 status | 利用 `.catch` 捕捉 |
| **可讀性** | 普通 | 優（像在講話） |

#### 5. 小結
`fetch` 是目前網頁開發的主流。當你在瀏覽網路時，可以打開 Network 面板，你會發現許多現代網站（如 Facebook、Gmail）背後有無數個 `fetch` 正在不停地抓取最新資料。

### 影片逐字稿 (AI 生成)

先來補充一下我們jsintro第18章最後面18-3的fetch的example那在這邊呢我們可以看到說他這邊想要用fetch來做post這件事情他把url用成test.html然後他要把他的username傳進去然後我們把這個object把它stringify變成壓成字串用json的方法壓成字串放在body裡面然後他的type是json我們想要把他塞進去結果呢因為我們的html是長這樣子而且我們沒有讓他可以去post這個東西所以他在這邊呢他就不會正確他不會到response不會走這個路徑他反而會說欸抓到了他說他抓到什麼抓到錯誤那這個錯誤會跟你講說是405 method is not allowed就是像這樣的結果我們跑一次然後我們到inspect element然後這個錯誤就是我們工程師可以看得到他說method not allowed 405OK然後我們再去查這個錯誤的訊息到google裡面去查然後再想辦法把這個問題解掉那這就會是前端工程師在做的工作其中之一好的那我們剛剛其實比較想要做的是用fetch API來了解說其實fetch API是多麼的好用跟xml、http、request比起來那我們這邊就可以來比較一下這兩種不同的寫法因為我建了一個新的檔案然後這裡面有get然後這裡面有get首先呢這其實沒有什麼不一樣只是我們現在把我們的url用變數存起來然後我們去fetch這個東西我們的url那麼他的get是寫在method裡面好的那當他結束了以後呢這邊當他拿到response沒有聲音了喂沒有電了好有個大聲一點好那如果他這邊拿到了response他就會把response的text回傳回傳到後面他把這個result用console lock印出來謝謝好那那如果說他今天他拿到的不是正確的response不是200他這邊他就會把像剛剛一樣他會catch到錯誤把這個錯誤印出來讓大家看得到那我們把這個html用live server跑起來那我們看一下inspect elementconsole裡面看到他就會把我們剛剛在這個testhtml裡面的這個東西是不是讀到了讀到不是讀到test這個讀到這裡面的東西然後他把它我們已經get到了嘛get到這個response是不是就可以怎麼樣就可以把它return回來或是說你不用在這邊拿到這個東西以後你不是把它轉換成textreturn回來而是你做什麼事情你直接把這個res你是不是這邊可以用document然後把這個東西response直接塞到inner html裡面就可以跟這個的做法是一樣的大家可以來比較一下這兩種的寫法有什麼不同因為這邊每次都是要在等ready state然後透過ready state來看然後得到200和ready state是4然後來做事情那因為大家太常在這邊撈東西要拿到資料對不對所以用fetch這個API就看起來更直覺就我要拿什麼然後拿了以後我拿到response我就做什麼事情那我如果抓到錯誤我就做什麼事情那所以其實fetch是比較常常會看到在用的那這邊呢可以看一下這個我們剛剛不是會去跑去network裡面去看我們的網站嗎那其實在這邊我們可以看一下這個網站假如它load的好了以後我們看一下它inspectelement其實你也可以看到很多fetch的聲音喔這邊也可以看到很多fetch的聲音喔那我們重整一次有沒有fetch這邊也有fetch有沒有看到很多fetchtype是fetch大家有看到嗎這個是fetch有沒有fetchfetchfetchfetchfetchfetch有沒有ok好這邊是那個第18-3的範例補充這邊是

### 影片逐字稿largev2

先來補充一下JS Intro第十八章最後面18-3 Fetch的example在這邊可以看到他想用Fetch來做Post他把URL用成Test.html然後把他的username傳進去然後把這個object把它stringify 壓成字串用json的方法壓成字串放在body裡面然後他的type是json我們想要把它塞進去結果呢因為我們的html是長這樣子而且我們沒有說allow我們沒有讓他可以去Post這個東西所以他在這邊呢他就不會正確他不會到response不會走這個路徑他反而會說欸抓到了他說他抓到什麼抓到錯誤那這個錯誤會跟你講說喔是405Method is not allowed就是像這樣子的結果我們跑一次然後我們到inspect element然後這個錯誤就是我們工程師可以看得到他會說method is not allowed 405ok然後我們再去查這個錯誤的訊息到google裡面去查然後再想辦法把這個問題解掉那這就會是前端工程師在做的工作其中之一好的那我們剛剛其實比較想要做的是用Fetch API來瞭解說其實Fetch API是多麼的好用跟XML HTTP request比起來那我們這邊就可以來比較一下這兩種不同的寫法因為我建了一個新的檔案然後這裡面有GET首先呢這其實沒有什麼不一樣只是我們現在把我們的URL用變數存起來然後我們去Fetch這個東西我們的URL那麼他的GET是寫在Method裡面好的那當他結束了以後呢這邊當他拿到response沒有聲音了沒有電了好大聲一點好那如果他這邊拿到了response他就會把response的text印出回傳回傳到後面他把這個result用console.log印出來好那如果說他今天他拿到的不是正確的response不是200他這邊他就會把像剛剛一樣他會catch到錯誤把這個錯誤印出來讓大家看得到那我們把這個HTML用live server跑起來那我們看一下inspect elementconsole裡面看到他就會把我們剛剛在這個test HTML裡面的這個東西是不是讀到了讀到讀到test這個讀到這裡面的東西然後他把他我們已經get到了get到這個response是不是就可以怎麼樣就可以把他return回來或是說你不用在這邊拿到這個東西以後你不是把他轉換成textreturn回來而是你做什麼事情你直接把這個你是不是這邊可以用document然後把這個東西response直接塞到inner HTML裡面就可以跟這個的做法是一樣的OK大家可以來比較一下這兩種的寫法有什麼不同因為這邊的話每次都是要在等ready state然後透過ready state來看然後得到200和ready state是4然後來做事情那因為大家太常在這邊撈東西要拿到資料了嘛對不對所以用fetch這個API看起來更直覺就我要拿什麼然後拿了以後我拿到response我就做什麼事情那我如果抓到錯誤我就做什麼事情那所以其實fetch是比較常常會看到在用的那這邊呢可以看一下這個我們剛剛不是會去跑去network裡面去看我們的網站嗎那其實在這邊我們可以看一下這個網站假如他load好了以後我們看一下他inspect element其實你也可以看到很多fetch的身影喔那我們重整一次有沒有fetch這邊又有fetch有沒有看到很多fetchtype是fetch大家有看到嗎這個是fetch有沒有fetch fetchfetch fetch fetch有沒有ok好這邊是那個第18-3的範例補充
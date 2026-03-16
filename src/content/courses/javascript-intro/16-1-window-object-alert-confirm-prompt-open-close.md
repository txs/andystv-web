---
description: 'Lesson: 16-1 Window 物件 - alert, confirm, prompt, open, close'
duration: 6m3s
level: beginner
tags:
- JavaScript
tier: free
title: 16-1 Window 物件 - alert, confirm, prompt, open, close
youtubeId: XeB_1jcVXsE
---

# 16-1 Window 物件 - alert, confirm, prompt, open, close

Original: https://course.andys.pro/Javascript-Intro/16-1-window-object-alert-confirm-prompt-open-close/

### 講義

#### 1. 什麼是 Window 物件？
在瀏覽器環境中，`window` 代表整個瀏覽器視窗，它是所有 JavaScript 物件的「最上層」全域物件。
*   所有的全域變數與全域函式（例如 `alert`），本質上都是 `window` 的屬性與方法。
*   包含了 DOM (Document Object Model) 以及瀏覽器的 BOM (Browser Object Model)。

#### 2. 常見的互動方法
這些方法會彈出視窗與使用者互動，且會**暫停**程式碼的執行：
*   **`window.alert("訊息")`**：最基本的彈跳警告窗。
*   **`window.confirm("問題")`**：提供「確定」與「取消」按鈕。點選確定回傳 `true`，點選取消回傳 `false`。
*   **`window.prompt("提示文字", "預設值")`**：提供輸入框供使用者填寫，回傳填寫的內容。

#### 3. 開啟與關閉視窗
*   **`window.open(url, name, features)`**：開啟新視窗。
    - `features` 參數可以設定視窗的寬度 (`width`)、高度 (`height`)、有無工具列 (`toolbar`) 等。
*   **`window.close()`**：關閉目前視窗。
    - **注意**：為了安全性，大部分瀏覽器規定只有用腳本開啟的視窗才能被腳本關閉。

#### 4. 視窗控制與焦點
*   **調整位置與大小**：
    - `moveTo(x, y)` / `moveBy(x, y)`：移動視窗。
    - `resizeTo(w, h)` / `resizeBy(w, h)`：調整視窗大小。
*   **焦點管理**：
    - `focus()`：讓視窗獲得焦點。
    - `blur()`：讓視窗失去焦點（模糊）。

#### 5. 小結
`window` 物件是開發者與瀏覽器本身進行溝通的主要橋樑。理解了 `window` 之後，我們就能進一步操控頁面內容（`document`）與瀏覽紀錄（`history`）等。

### 影片逐字稿 (AI 生成)

我們現在到16章 我們看一下Windows物件那在16章我們要學習首先16-1 Windows物件的方法然後再來我們要去看到Windows的子物件再來呢 我們要看Document的一些常用屬性好 首先來到16-1 Windows物件的方法那首先我們來看一下 就了解知道說Windows是什麼 然後它的定義是什麼然後還有什麼功能 然後還有一些常見我們使用Windows的方法好 首先呢 在前面我們有提到就是有一個Global的就是Global Variable那Global Variable在整個JavaScript最上層在Browser裡面呢 就是用Windows來代表包含了一個DOM的文件的視窗然後Document可以載入HTML的物件所有的流氧器都支援Windows物件所有的流氧器都支援Windows物件所有的流氧器都支援Windows物件它是一個JavaScript全域的 全域性的物件它裡面有全域性的變數和全域性的函式OK那還記得這個是提到這個是物件裡面的Properties屬性和方法 Methods好 首先我們看到一些常見Windows的方法那我們昨天也有教大家就是用AlertConfirm跟Prompt首先Alert會把這個Message放出來讓大家看到然後問你OK還是Cancel那Confirm呢也是會問你只是它你按OK和Cancel的就是Alert只有OK那這邊會有OK跟Cancel那按OK會回傳True按Cancel會回傳False那Prompt呢可以讓使用者輸入Input的訊息好 在Windows裡面呢當然我們要開啟一個視窗其實Windows就是一個視窗的代稱嘛那我們要開一個URL我們就用Open然後URL那後面有Name和Windows Features的一些補充屬性補充參數那當我們要把一個視窗把它關掉的時候我們其實只要用Windows Close就可以那我們現在關掉一個視窗比如說像這個欸這關掉Meeting應該不會被關掉吧看一下首先我們有一個Windows大家有看到可以Open或是我們可以CloseWindows在Open它這邊講說你要用Windows打開一個物件才可以用它來關所以我們看一下比如說如果我們去OpenOpenhttpswww.google.comOK那我們看一下我們可不可以用Windows把它關掉好就把它關掉好就把它關掉所以它這邊有一些限定就是說這個不能關掉是因為這是使用者開的可是你如果Windows.open去開一個視窗你在裡面InspectElement你才可以用Windows Close去關它那所以Windows Close在你的Java Screen裡面其實開發者應該也可以用Windows Close直接關一個頁面那大家可以試試看好的再來我們來看一下常見的Windows方法首先呢Windows的Features裡面剛剛在後面有提到這邊Windows Features我可以給它一些什麼樣的屬性比如說我可以給它有500的高度還有500的寬度再來我們可以來規定它說它的Tour Bar要不要顯示那它的Scroll Bars要不要顯示還有它是不是可以調整大小還有它是否要顯示它的網址列Location Bar還有它Menu Bar是否要顯示Status然後它距離左邊的距離距離上面的距離這是一些可以使用的一些屬性再來呢我們在這邊我們會看到說我如果要專注在一個Windows上面的時候我可以去Focus在某一個Windows上然後我也可以讓它淡出首先這個焦點是什麼東西呢這焦點的Focus就是這種像這一個現在這個Tab它是Focus的其它的是濕焦的所以你可以讓這個Blur掉然後去Focus在其它的Windows上面再來是呢它有可以去移動多少屬性和Move By是移動相對的位置By多少那Move To是到一個比較絕對的位置叫Move To到哪一個位置那調整視窗也是Resize By和Resize To好的在LAB01呢我們這邊就可以來試試看用AlertConfirm還有Prompt來試試看來做對話的方塊好這邊是16之1是1111212121222222222222222222

### 影片逐字稿largev2

我們現在到十六章,我們看一下Windows的物件那在十六章我們要學習首先十六之一Windows物件的方法然後再來我們要去看到Windows的子物件再來呢我們要看Document的一些常用屬性首先來到十六之一Windows物件的方法那首先我們來看一下就了解知道說Windows是什麼然後它的定義是什麼,還有什麼功能然後還有一些常見我們使用Windows的方法好,首先呢在前面我們有提到就是有一個Global的就是Global Variable那Global Variable在整個JavaScript最上層在Browser裡面呢,就是用Windows來代表包含了一個DOM的文件的視窗然後Document可以載入HTML的物件所有的瀏覽器都支援Windows物件它是一個JavaScript全域的,全域性的物件那裡面有全域性的變數和全域性的函式那還記得這個是提到這個是物件裡面的Properties屬性和方法Methods好,首先我們看到一些常見Windows的方法那我們昨天也有教大家就是用Alert, Confirm跟Prompt首先Alert會把這個Message放出來讓大家看到然後問你OK還是Cancel那Confirm呢,也是會問你只是它你要OK和Cancel的就是Alert只有OK那這邊會有OK跟Cancel那按OK會回傳True按Cancel會回傳False那Prompt呢,可以讓使用者輸入Input訊息好,在Windows裡面呢當然我們要開啟一個視窗其實Windows就是一個視窗的代稱嘛那我們要開一個URL,我們就用Open然後URL那後面有Name和Window Features的一些補充屬性還有補充參數那當我們要把一個視窗把它關掉的時候我們其實只要用Window Close就可以那我們現在關掉一個視窗比如說像這個這個關掉,Meeting應該不會被關掉吧看一下首先我們有一個Window他們剛剛有看到可以Open或是我們可以CloseWindow Stamp OK它這邊講說你要用Window打開一個物件才可以用它來關所以我們看一下比如說如果我們去Openhttpswww.google.comOK那我們看一下我們可不可以用Window把它關掉好,就把它關掉所以它這邊有一些限定就是說這個不能關掉是因為這是使用者開的可是你如果Window.Open去開一個視窗你在裡面Inspect Element你才可以用Window Close去關它那所以Window Close在你的JavaScript裡面其實開發者應該也可以用Window Close直接來關一個頁面那大家可以試試看好的,再來我們來看一下常見的Window方法首先呢Window的Features裡面剛剛在後面有提到這邊Window Features嘛我可以給它一些什麼樣的屬性比如說我可以給它有500的高度還有500的寬度再來我們可以來規定它說它的Toolbar要不要顯示那它的Scrollbar要不要顯示還有它是不是可以調整大小還有它是否要顯示它的網址列Location Bar還有它Menubar是否要顯示Status然後它距離左邊的距離距離上面的距離這是一些可以使用的一些屬性再來呢,我們在這邊我們會看到說我如果要專注在一個Window上面的時候我可以去Focus在某一個Window上然後我也可以讓它淡出首先這個焦點是什麼東西呢這焦點的Focus就是這種像這一個,現在這個Tab它是Focus的其他的是失焦的所以你可以讓這個Blur掉然後去Focus在其他的Window上面再來是呢它有可以去移動多少屬性和Move By是移動相對的位置By多少那Move To是到一個比較絕對的位置Move To到哪一個位置那調整視窗也是Resize By和Resize To好的,那在Lab01呢我們這邊就可以來試試看用Alert、Confirm還有Prompt來試試看來做對話的方塊好,這邊是16-1
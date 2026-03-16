---
description: 'Lesson: 10-2 Array Length, [index], For 迴圈掃描'
duration: 6m19s
level: beginner
tags:
- JavaScript
tier: free
title: 10-2 Array Length, [index], For 迴圈掃描
youtubeId: ZqlNSGka2xA
---

# 10-2 Array Length, [index], For 迴圈掃描

Original: https://course.andys.pro/Javascript-Intro/10-2-array-length-index-for-loop-scan/

### 講義

#### 1. 建立陣列的方式
*   **直接定義 (Literal)**：`var colors = ["red", "green", "blue"];` (最推薦)
*   **使用建構子 (Constructor)**：`var colors = new Array("red", "green", "blue");`

#### 2. 長度與索引的運用
*   **`.length` 屬性**：回傳陣列中元素的總數。
*   **強制修改長度**：你可以透過修改 `.length` 來刪除元素。
    - `colors.length = 2;` ➝ 陣列會只剩下前兩個元素，第三個之後會被砍掉。
    - `colors.length = 0;` ➝ 整個陣列會被清空。
*   **索引 (Index)**：從 0 開始計數。`colors[0]` 是第一個元素。

#### 3. 遍歷陣列 (Array Scanning)
當我們要處理陣列中的每一個元素時，最標準的做法是搭配 `for` 迴圈：
```javascript
var colors = ["Red", "Green", "Blue"];

// 使用傳統 for 迴圈
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]); // 會依序印出 Red, Green, Blue
}
```
*   **注意**：迴圈條件應設定為 `i < colors.length`，因為索引是從 0 到「長度減一」。

#### 4. 實務練習
嘗試修改陣列的長度，觀察原本的資料是否還存在。並練習使用迴圈將陣列內容逐一彈出視窗 (`alert`) 或印在控制台。

### 影片逐字稿 (AI 生成)

好 接下來我們來看十字的array的表達式然後我們會直接來建一個陣列然後來運用它然後再來尋仿整個陣列就是把所有的在陣列中所有的東西都掃播一次那我們剛才十字一其實已經快速的demo一下那我們這邊再來更仔細的來看首先我們怎麼建立陣列那你有好幾種方式一種方式是用像 用bracket這種方式直接鍵 就是字串這樣放進去另外一種是用array這種建構值來做然後建構值來做的話它就是new array那其實跟用函數的做法是一樣只是它是建構值嘛 所以建構值就是class所以它這兩種方式是類似的好 這三種都是一樣好 長度 大家還記得嗎.length好 那如果有一個元素它的長度就是1如果像這個的話有三個所以它就是 長度就是3這個算OK那這邊就是有提到是這樣好的 index是由0開始算好的 那它的算碼就是其實都是從這樣子 0 1 2 這樣算好 那它現在它的example長這樣那我們就照它的example來做吧好 我們不用controll log 我們直接在這裡看 0嘛長度是0 因為現在裡面是空字串是空的然後再來它要怎麼 它要先 喔 它要塞colors 0 是red然後colors 1 是然後colors 1 是green 跟blue好 那它是它第一個字是有capital我這邊沒有應該沒有關係好 這時候我們可以直接把colors印出來看一下它裡面是怎樣好 它裡面有三個東西red green blue然後它index是012然後它長度是3好的 那我們把我們的長度印出來點land 3然後呢 這邊colors好 剛剛有印出來過了好 這就是十字石的example好 這邊有提到就是說我要怎麼樣去就是把後面東西砍掉就是我希望最後面這個拿掉那其實 它這邊的做法是去把長度 直接去改長度但是我自己是覺得這個做法不是很好啦可是 我們來做看看這樣子點lens 然後把lens把它改成2這時候這時候它就已經變兩個只有red跟green最後面這裡就被砍掉了那我要清空它怎麼清空清空它就把長度變0這時候我的colors裡面就是空的OK好 那這邊要一次把所有的陣列裡面的東西印出來那它這邊用的方法是for的用法那我們剛剛十字一的介紹方法是用for印那我們這邊也來做一次就是for傳統的做法那這邊大家有沒有發現它有什麼樣red green blueRGB好 這邊呢要用colors的長度嘛點lens然後i++地增然後從0一直掃掉要用小於原因是因為0一直到2嘛然後這邊console.log它是用console.log嗎噢 它是用alert好 它是用alert好 那我們它有alert 我們就用alert吧好 這邊我們要輸出的是colors然後的第i一個好 i 就從0一直掃到它的長度-1所以就是012然後再我們看一下red green blue然後我們那個那個講義在哪裡講義這個十字二好 這是這是十字二的部分好LAV也請大家去測試看看

### 影片逐字稿largev2

好,接下來我們來看十字的array的表達式然後我們會直接來建一個陣列然後來運用它,然後再來尋訪整個陣列就是把所有的,在陣列中所有的東西都掃播一次那我們剛才十字一其實已經快速的demo一下那我們這邊再來更仔細的來看首先我們怎麼建立陣列那你有好幾種方式一種方式是用bracket這種方式直接建,就是直串這樣放進去另外一種是用array這種建構值來做然後建構值來做的話它就是new array那其實跟用函數的做法是一樣只是它是建構值嘛,所以建構值就是class所以它建這兩種方式是類似的好,這三種都是一樣好,長度,大家還記得嗎?.length.length好,那如果有一個元素它的長度就是1如果像這個的話有三個所以它就是長度就是3ok那這邊就是有提到是這樣好的index是由0開始算0,1,20,1,2好的,那它的算法就是其實都是從這樣子0,1,20,1,20,1,20,1,20,1,2好,那現在它的example長這樣那我們就照它的example來做吧那我們就照它的example來做吧好喔,sorry它是colors.好,我們不用control log我們直接在這裡看,0嘛長度是0,因為現在裡面是空字串是空的然後再來它要先color0是red然後color1是green跟blue喔好那它是它第一個字是有capital這邊沒有應該沒有關係好,這時候我們可以直接把colors印出來看一下它裡面是怎樣它裡面有三個東西,red, green, blue然後它的index是0,1,2然後它長度是3好的,那我們把我們的長度印出來.length3這邊colors剛剛有印出來過了這就是10-10的example好,這邊有提到就是說我要怎麼樣去把後面的東西砍掉我希望最後面這個拿掉那其實它這邊的作法是去把長度直接去改長度但是我自己是覺得這個作法不是很好可是我們來做做看.length然後把length把它改成2這時候這時候它就已經變兩個只有red跟green,最後面就被砍掉那我要清空它怎麼清空清空它就把長度變0這時候我的colors裡面就是空的OK好好,那這邊要一次把所有的陣列裡面的東西印出來那它這邊用的方法是for的用法那我們剛剛10-1的介紹方法是用for in,那我們這邊也來做一次就是for傳統的作法那這邊大家有沒有發現它為什麼要用red green blueRGB好,這邊呢要用colors的長度.length然後i++然後I++地震然後從0一直掃掉用小於原因是因為0一直到2然後這邊console.log它是用alert它有alert我們就用alert這邊我們要輸出的是colors然後的第i一個好,i就是從0一直掃到它的長度-1所以就是012然後這樣我們看一下red green blue那個講義在哪裡講義這個10-2好這是10-2的部分lab也請大家去測試看看
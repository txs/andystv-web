---
description: 'Lesson: 1-2 Console 指令是什麼？'
duration: 11m30s
level: beginner
tags:
- JavaScript
tier: free
title: 1-2 Console 指令是什麼？
youtubeId: rkeSB06XWDg
---

# 1-2 Console 指令是什麼？

Original: https://course.andys.pro/Javascript-Intro/01-2-what-is-the-console-command/

### 講義

#### 1. Console 面板基礎
*   **互動環境**：Console 是一個即時的 JavaScript 執行環境 (REPL)，可直接輸入程式碼測試。
*   **常用指令**：
    *   `console.log()`：最基本的訊息輸出。
    *   `console.info()`：輸出一般資訊。
    *   `console.warn()`：輸出警告 (黃色背景)。
    *   `console.error()`：輸出錯誤 (紅色背景)。
*   **清除畫面**：使用 `clear()` 指令或 `Ctrl+L` / 按下清除按鈕。

#### 2. 進階 Console 功能
*   **表格化資料**：`console.table(data)` 可以將陣列或物件以漂亮的表格呈現，易於閱讀。
*   **斷言 (Assert)**：`console.assert(condition, message)` 僅在條件為 `false` 時才會印出訊息，適合用來檢查程式邏輯。
*   **計數器**：`console.count(label)` 用於計算某段程式碼被執行的次數 (適合迴圈 debug)。
*   **效能計時**：
    *   `console.time(label)`：開始計時。
    *   `console.timeEnd(label)`：結束計時並印出花費時間 (毫秒)。

#### 3. 訊息特性
*   **訊息堆疊 (Stacking)**：如果相同的訊息連續出現多次，Chrome 會將其摺疊並顯示次數，避免洗版。

1-2 Console 面板
==============

*   Console 面板與 JavaScript 互動
*   Console 指令
*   Console 面板其他說明

👉 \[0:19\]Console 面板與 JavaScript 互動

* * *

Console 面板與 JavaScript 互動
-------------------------

*   Console 面板尚可直接與 JavaScript 進行互動

        <- undefined
        > function text(s){
            if(x=='1'){
                console.log('x為1');
            }else{
                console.log('x不為1');
            }
        }
        <- undefined
        > test(2);
        // x不為1
    

    - 可以在 Console 面板直接將 JavaScript 編寫並觀看結果
    

* * *

Console 指令 1/2
--------------

*   console.log(‘output’): 輸出訊息
*   console.info(‘output’): 輸出資訊
*   console.warn’output’): 輸出警示( 黃色 )
*   console.error(‘output’): 輸出錯誤( 紅色 )

* * *

Console 指令 2/2
--------------

*   console.table():
    *   以表格輸出組合結構訊息
*   console.assert(\[條件式\], ‘輸出的文字’):
    *   用來斷定狀況，若是狀況有誤，輸出 Error 訊息
*   console.clear(): 清空 console
    *   清空 console 面板中的指令、訊息

* * *

時間軸 1/3
-------

📚 課程網址: [https://course.andys.pro/Javascript…](https://www.youtube.com/redirect?event=video_description&v=rkeSB06XWDg&q=https%3A%2F%2Fcourse.andys.pro%2FJavascript-Intro%2F&redir_token=QUFFLUhqbG4zbXlLYkZaR2hISUZKZFd0MElSX3N4QndtQXxBQ3Jtc0tuRXB2b05STnlJSldVa1pNLXZITFpGWjdGdHViZ2ljU0tTYkE5MnJiS3EwNkljOGMtSVZQQ3pnUmkybldJb3RkSHIwa0pGaDNDTXdmUl9sZ2FnTTRzM0dqcWhxVFR2QWcxRy0yeG1Na1lfYlZKNGpNWQ%3D%3D)

[0:00](https://www.youtube.com/watch?v=rkeSB06XWDg&t=0s) 歡迎訂閱 🔔 ！按讚 👍 分享 🔥 與留言 💬

[0:03](https://www.youtube.com/watch?v=rkeSB06XWDg&t=3s) 📖 本節目錄

[0:19](https://www.youtube.com/watch?v=rkeSB06XWDg&t=19s) Console 面板與 JavaScript 互動

[2:31](https://www.youtube.com/watch?v=rkeSB06XWDg&t=151s) console.log

[3:43](https://www.youtube.com/watch?v=rkeSB06XWDg&t=223s) console.info

* * *

時間軸 2/3
-------

[4:06](https://www.youtube.com/watch?v=rkeSB06XWDg&t=246s) console.warn & error

[4:30](https://www.youtube.com/watch?v=rkeSB06XWDg&t=270s) console.table

[6:11](https://www.youtube.com/watch?v=rkeSB06XWDg&t=371s) console.assert

[7:27](https://www.youtube.com/watch?v=rkeSB06XWDg&t=447s) console.clear

[7:51](https://www.youtube.com/watch?v=rkeSB06XWDg&t=471s) console.count

[8:20](https://www.youtube.com/watch?v=rkeSB06XWDg&t=500s) 多次 console.count

* * *

時間軸 3/3
-------

[8:58](https://www.youtube.com/watch?v=rkeSB06XWDg&t=538s) console.time & timeEnd

[9:48](https://www.youtube.com/watch?v=rkeSB06XWDg&t=588s) 💬 訊息堆疊

[10:33](https://www.youtube.com/watch?v=rkeSB06XWDg&t=633s) ⌨️ Console 快捷鍵

[10:37](https://www.youtube.com/watch?v=rkeSB06XWDg&t=637s) 🧪 Lab 02

[11:08](https://www.youtube.com/watch?v=rkeSB06XWDg&t=668s) 🙌 謝謝收看 👀

### 影片逐字稿largev2

那我们继续来讲1-2那我们来认识Console面板和怎么样跟JavaScript互动然后还有Console的一些指令然后它面板的其他的一些说明首先呢,我们会来测试一个functionfunction其实就是函式我们在写一个函式的时候其实我们就是丢一个值进去再来,它会对我们丢进去之后它会对我们丢进去之后它会对我们丢进去之后它会对我们丢进去之后它会对我们丢进去的值来做处理好,那我们先来看一下这个function那这个function是一个,我们把它命名叫做test然后它里面有个x那当我拿到x以后呢条件是我先简单讲一下就是if,就是如果何者为真,就是比如说像x有没有等于1然后这个1是string,就是字串的1喔好,有如果是1的话就会印出来说Console,然后我们刚才讲loglog其实就是把它印在指令列里面写说x为1如果x不是1的话就会说喔,x不为1那我们现在就来做这件事情下面已经有做好了好,我们可以把这个复制起来我直接在这里开Inspector到这边我们可以选Console我们现在很麻烦的事情是它上面堆了一堆东西,然后就觉得很丑Console.clear可以把它清掉那其实你可以直接按clear那其实你可以直接按clear然后这个是一个function去执行它然后就把它清掉清掉是不是就干净很多了好,那我们开始来跑我们把刚刚这个东西复制贴上来好,那我们贴完以后呢它没有讲什么东西可是这时候其实电脑已经知道说你已经有设定了一个test的这个function那我们就可以比如说test然后我们设定test2然后就跟你讲test2不为1,它就印出啦OnDefine是因为我们没有回传任何东西所以才会这样当你没有回传它都会写说OnDefine这样那我们test1然后这边就是X为1所以这个function就开始会可以运作那就是很简单的一个function这样子所以我们可以直接在Console上面就可以写一点JavaScript可以直接测这个时候我们就不用去担心我还要在我自己的电脑然后还要下载我喜欢用的ID1或是VSCode或是Notepad++我直接在Chrome就可以先写一些JavaScript可以做练习所以这是JavaScript的一些好处那同时它有很多线上的tool你可以写JavaScript那我们现在开始学Console的一些指令那第一个指令就是Console.log里面呢就是放一个字串或是数字它这边写说Console.log hello world在这边它有一个好处是你打的时候它会帮你autocomplete就是自动补完Console.log然后Console就跑出来然后我们这时候就只要按右它就会自动这样L-O-G然后Console.log然后我们这边可以直接比如说这样子Hello空白W-O-R-L-D这时候它就会你就可以直接印出一个hello world出来这是我们学的第一个Console的一个指令叫做log那这个好处是当你在前端比如说你在bootstrap里面你在跑JavaScript的时候你也可以Console.log然后你Console.log你自己的网站的时候它就会在旁边跑出来比如说button然后你有一个function嘛对不对然后你点了以后点了你在function里面写Console.log然后字串里面写按钮被按了然后它就可以在这边会印出来所以你可以测试你点下去的时候有没有点到东西再来第二个Info它就会输出资讯它就会输出Info的资讯这样那再来是Warn和ErrorWarn它就会是警告有时候你在写前端的时候你要警告就是WarnInfo它前面就会是一个三角形的金单号那像它们前面这些跑不出来或是错误讯息它们是用的是ErrorErrorInfo它就会跑出来这是这四个指令好那这个表是它给了一张图嘛那我也自己把那张图也重新做了一遍之后我们会讲到就是这个结构怎么写那主要它是一个字串然后里面有好几个物件然后就是有人的名字还有他的身高这样那我们把这段code我们现在只要知道说我们先把这段code复制起来然后我们丢进去那我先把它Clear因为好很丑好先清掉然后我们把它贴上去好那这个时候呢它就会跑出这样子的一个表Alex158Mary166Austin174的不同的高度那我们现在可以复制一下去贴贴看那你看我这边我下面还是你看我这边要用Console Table把它印出来如果你只有打People的话比如说我们这边再看一下People是什么那People你打下去的时候它这边输出的结构是一个字串然后里面有012然后里面是object就是一个object然后里面有姓名有身高这样一个一个这样打开那你其实你不一定要Console Table你可以直接叫它然后Google的Console也会帮你把这些资料列下来所以它列下来是这样子一个物件的模式而不是像一个Table这样子的模式因为我有用CodePen你可以点一下就会开一个新分页这边可以写HTML CSS跟JS只是它这个Console因为不是系统级的Console所以它列出来不会像刚刚那样那么漂亮是一个表就是我们刚刚的JavaScript所以比较简单一点就是直接开Google的Console来看好再来我们来讲Console Assert直接看定义其实很难知道状况断定结果是错误输出了为Error的讯息我们直接看Code比较快因为看这个叙述其实很难知道Assert要干嘛那我们可以看情况是这样我现在有两个Assert一个Assert是前面放一个正确的讯息比如说True就是对的False就是非英文是跟非那当我跑这段Code的时候呢我希望它后面跑这个讯息出来就是Yeah这是对的结果它不跟我讲任何东西因为Assert是要当这个物件错的时候它会报错所以你要前面是错的喔比如说A等于1我再建一个Assert然后我这边写说A等于2它就说No这是错的或是你后面可以写说A不是2之类的所以这个条件比如说A等于2它就是错的嘛对不对它不是2它是1嘛所以它就会报错出来所以你在你写Code你可以埋Code就比如说你有些if条件啊然后你也可以埋说Console.logAssert你的条件然后如果错的话它会报错什么东西出来Clear就是我们刚刚学的只是呢它是Console里面的一个功能你可以Console然后点点了以后我们可以看到下面有很多功能其中一个功能是Clear你可以这样子叫或是你可以直接Clear也可以这两个方法都可以把它清空让你可以再快速的重新再测一些东西好那再来呢我们会来算数用它来算执行的次数也可以来算Code执行的时间因为我们如果直接这样子讲我觉得还是很难知道说这段Code到底在干嘛我们Count我们就可以直接跑一次给大家看比如说我可以直接Console.Count然后它就会告诉我1然后再数一次它就变成2所以可以数很多次嘛1 2 3 数绵羊这样再数如果我们后面我们学到回圈大家这边不用很紧张看不懂Code没关系就是简单这边就是有个For回圈然后它跑十次只要执行一次它就会Count一次就像我们刚才这样Count一次没关系我们把它复制起来我们把它贴上来因为我刚才前面已经数四次了所以它这边又数了十次如果我把它Clear掉我Clear掉以后这边你看1 2 3 4 5 6 7 8 9 10它就数十次所以大家不要紧张大家可以把这个复制起来丢到Console玩玩看Time跟Time End是我可以去知道它的执行时间你的Code可能长的是这边长了一坨那我要算这个时间我必须从这边然后我去Time我在这边跑Time End这边跑Time End然后它就去算这个东西的时间我前面先Counsel Time然后后面去跑刚刚那一串我们可以看一下这段Code跑起来要多久先把它清掉然后我们直接跑它实际上开始跑1 2 3 4 5 6 7 8 9 10然后它告诉你说它跑了0.5秒实际上很快印出来比较慢其实是因为Console Log印要时间而不是因为它算不用那么久的时间所以它执行只要0.5秒就做出来再来我们讲讯息堆叠这边只有提到说类型重复的讯息会堆叠在一起或是显示在各自的行上我们刚刚有看到当我Count数字是不一样的时候它会分开来它会1 2 3 4 5 6 7 8 9 10如果今天像和尚一样在敲钟Code Code Code Code以前的做法在Chrome它会一行一行一行地列出来可是新的Chrome给你一个新的功能是它会把它堆叠在一起我们可以把这段Code拿起来看我都是一直跟你嗨然后跟你嗨了10次你看它10次它就全部压在一起它不会给你嗨嗨嗨嗨给你10行所以这个我们叫做讯息堆叠大家可以测一下快捷键这边大家就试一下Lab2的练习我们快速看一下大家等一下可以自己练习一下就当我还没有宣告X的时候你去Console Log X它会说X is not defined就是它会告诉你哪边错了所以JavaScript才会比较好写你至少知道这个东西你没宣告过那我们来试试看比如说Console Log X比如说它会推荐很多东西你不要它推荐你就按ESCX is not defined代表说X还没有宣告过请不吝点赞 订阅 转发 打赏支持明镜与点点栏目
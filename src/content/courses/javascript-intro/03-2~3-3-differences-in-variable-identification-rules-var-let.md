---
description: 'Lesson: 3-2~3-3 變數識別字規則 var let 的差異'
duration: 13m24s
level: beginner
tags:
- JavaScript
tier: free
title: 3-2~3-3 變數識別字規則 var let 的差異
youtubeId: njOTw1do_mg
---

# 3-2~3-3 變數識別字規則 var let 的差異

Original: https://course.andys.pro/Javascript-Intro/03-2~3-3-differences-in-variable-identification-rules-var-let/

### 講義

#### 1. 識別字 (Identifier) 命名規則
*   **用途**：用於變數、函式、屬性的名稱。
*   **規則**：
    1.  **首字**：不能是數字。可以是字母、底線 (`_`) 或錢字號 (`$`)。
    2.  **區分大小寫 (Case-sensitive)**：`myVar` 與 `MyVar` 是兩個不同的變數。
    3.  **保留字 (Reserved Words)**：不能使用 JS 關鍵字 (如 `if`, `for`, `var`, `function`, `true`) 作為名稱。
    4.  **建議**：雖然支援 Unicode (可使用中文變數)，但強烈建議使用**全英文**命名，避免編碼與套件相容性問題。

#### 2. `var` vs `let` 深度比較
| 特性 | `var` | `let` / `const` |
| :--- | :--- | :--- |
| **作用域 (Scope)** | **函式作用域 (Function Scope)**<br>變數在整個 Function 內都有效。 | **區塊作用域 (Block Scope)**<br>變數只在 `{}` 大括號範圍內有效 (如 `if`, `for`)。 |
| **重複宣告** | **允許**<br>`var a = 1; var a = 2;` (不會報錯) | **不允許**<br>同一作用域內不能重複宣告同名變數。 |
| **提升 (Hoisting)** | 變數會被提升，初始值為 `undefined`。 | 會有提升，但在宣告前無法存取 (TDZ 暫時性死區)。 |

#### 3. 什麼是 Block Scope (區塊作用域)？
*   **定義**：任何被大括號 `{ }` 包覆的範圍。
*   **範例**：
    ```javascript
    if (true) {
      let x = 10; // x 只存在於這個 if 區塊內
    }
    console.log(x); // Error: x is not defined
    ```
*   這能有效避免變數在不該被存取的地方被存取，減少 Bug 產生。

### 影片逐字稿largev2

再來我們要了解識別字的規則什麼是識別字?命名的規則,第一個和第二個什麼是識別字?就是Identifier簡稱ID它可以來定義Variable,就是變數函式,Function和Property,屬性那我們剛剛的.className都是這個東西的屬性那變數,我們剛剛學的可以用Var,Let跟Const來const不是變數,const是常數來定義那函式就是一個function就是你可以去定義一個function然後重複去call它就可以重複做你想要它重複做的事情然後呢在識別字裡面我們可以記憶我們可以存幾個東西一個是字串,數字跟物件String, Number跟Object那函式呢我們可以用它來重複做很多的運算運算完以後我們要傳回傳回是什麼呢?我這邊寫一下傳回是Return就是好重Return就要傳回值Return一個東西怎麼變大寫不要推薦然後在JavaScript沒有辦法把識別字轉換成字串可是可以把字串符號轉換成識別碼就是說你可以把比如說我今天有一個test是一個字串然後我要它跑你可以用EVAL讓它跑這是補充啦就是EVAL讓它跑可是非常的不建議因為當你可以把字串變成Code讓它跑的時候是不是有惡意的人他假如塞就是什麼Document get element by ID然後你把它轉換成EVAL它就直接幫你把你的Code直接去做運作或是有的人可能就塞一段他想要你跑的Code塞到字串裡面然後你EVAL你的網頁就幫他開始挖礦了等等之類的好那識別字的主要JavaScript有保留一些識別的符號然後你不能用這些保留字來做宣告好那這包括我翻一下課本有一個表你們可以去查一下就是它有些宣告是不能識別名稱好這邊我們先可以看課本的第35頁識別碼好主要這邊的重點是說要知道的事情是第一個字元是不可以是數字的然後它可以用大小寫就是它可以用大小寫數字和就是dollar sign就是美元錢號和底下底線可是它第一個就是不能是數字那比如說像有些保留字像是true啊false啊這個你就是不能把它當變數名稱嘛因為它是內建的是非的它有一些保留字所以可以去查一下那我可以幫我今天晚上可以再幫大家補充一下放在上面那這邊還有提到一個就是unicode的字元就是你可以用一些非英語語系的命名來做識別符號但是非常不建議因為Javascript支援不代表所有的package都支援代表所有的Javascript的開發者都會支援當你用unicode的時候就很容易後來寫程式學校都是會用英文因為你用中文就很怕某天就不小心就炸掉就是然後你炸掉你不知道為什麼就是很可怕的一件事情所以建議還是用英文會比較好那再來我們剛剛有發現說var什麼var什麼var h1很多次所以var是可以重複宣告的可是let跟const比較嚴謹因為它是ES6它就是在解決就是大家都一直var來var去然後變數名稱搶來搶去然後互相污染的這種問題所以let跟const是不可以重複宣告的那你如果讀一個沒有宣告的變數的值就像我們剛剛的那個y它就會報錯因為var is not defined你沒有宣告它其實在Javascript最一開始因為它是希望寫起來好有彈性寫起來很好寫所以就算你沒有宣告你還是可以直接用可是像我剛才講的語言就越來越嚴謹不然會有很多雷就寫扣又不想要踩雷所以所以它後來有嚴格規定說沒有宣告會報錯就是讓你比較好debug就是有時候限制你多一點就是會告訴你這不行那不行好那delete這個東西就是我會再補充給大家好3-3也直接講好不好3-3直接講好let的出現還有var跟let的差異還有使用let的時機好ES2015就是ES6引用兩個很重要的Javascript關鍵字let跟const在以前只有global跟function scope就是只有兩個scope這東西蠻仔細的之前去面試Yahoo實習生的時候也有被問到那只是沒有想到這一份講義那麼早就跟大家提到好那var的時候像我剛才講的你在function裡面建一個var比如說var x跟global這兩個是會有區隔的可是很多時候我們在寫code的時候我們希望在if else for while這幾種語法就是我們之後會講的條件式裡面我也想要用一個變數可是這個變數希望是在這個裡面就結束了在外面就不要拿它所以它後來2015的時候就創了一個東西叫做let就讓你在if裡面你可以說let i等於0然後i++弄完在if結束或是while結束的時候我外面還是可以let i就是比較寫起來比較開心那不然以前就會你在裡面是i然後外面是ii然後iii然後code就會很噁心所以後來有這個東西以後裡面都可以用這邊就是它主要的差異就是函式作用域就是在function的scope就是作用域var就是你是在function才結束block就是if else for while只要到大括號基本上它的作用域就結束那var可以重複宣告let不行那是不是可以重複複製都是可以重複複製的都是不行的那作用域就是這個大括號裡面這個大括號裡面好的那這邊呢var就是允許重複宣告那let就是要來避免就是多人重複宣告那所以blockscope就是剛剛講的就只有let才支援那這個example我可能可以快速的跑給大家看那我們要寫一下它長怎樣所以你有一個這樣然後我有一個letx inside block xx等於letinside block x然後var y等於varinside blocky嗎對不好意思多背所以好然後還有什麼分號分號好像其實後來分號可以不用加也沒關係就是後來寫法不過我還是加然後我們在console.log然後我應該是xok應該x不是要的好這時候你看喔x是2為什麼因為剛剛前面有說x等於2然後呢suppose好我重整一下x應該會壞掉有沒有x就直接爛掉不給你用因為x是在裡面你沒有宣告它code就跑不出來所以我可以先講說我有一個x然後這樣子的話會怎樣這樣的話就是你看喔外面的x是undefined所以它這邊印是印出外面的可是它這邊y是印出裡面的y是在function那其實這是在同一個function裡面所以你看它這個只要碰到大括號這個x就是在裡面對不對外面的x是undefined它這邊就印出undefined這樣大概可以理解然後我們也可以把這個console.log把它放在哪裡我們放在裡面好這時候你就會看到inside block xinside block y然後undefined跟block y原因是因為那裡面就是可以印出這個x所以這兩個x是不一樣的x一個是在block裡面的x一個是在block裡面的x提升housing嗯好這個晚一點我再講就是說var是可以housing那lab是不行的那主要就是都是要提高你的code的穩定度所以把這個東西把它拿掉好的那這邊lab3就是讓你去測試就是var跟x的差異那我剛剛這邊這個東西我是不是應該我要把它貼在那個嗎貼在這裡好了就是大家可以直接複製不用打這是3-173-17ok然後最好我縮排一下縮排比較好看好 縮排就是我縮排都是按tabokok好那所以本章的就是本章在講變數的宣告雖然我們第二章就已經用到一堆變數了那不過就是在第三章我們學會了var、let、const這三個東西然後也了解就是說我們識別字不能用數字開頭可以用前後底線然後大小字都可以然後有些保留字是不能用的那也了解就是var、let、const的差別ok 那這就是第三章
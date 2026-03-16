---
description: 'Lesson: 15-2 三角函數: 使用 Math 來處理 sin, cos, tan 與 Pi'
duration: 2m25s
level: beginner
tags:
- JavaScript
tier: free
title: '15-2 三角函數: 使用 Math 來處理 sin, cos, tan 與 Pi'
youtubeId: upi9ro9IRhc
---

# 15-2 三角函數: 使用 Math 來處理 sin, cos, tan 與 Pi

Original: https://course.andys.pro/Javascript-Intro/15-2-trigonometric-functions-use-math-to-deal-with-sin-cos-tan-and-pi/

### 講義

#### 1. 為什麼要學三角函數？
在網頁開發中，如果你需要製作 **遊戲、旋轉動畫、圓形分佈的 UI 或是複雜的圖學效果**，就一定會用到三角函數。
*   JavaScript 提供的內建工具：`Math.sin()`, `Math.cos()`, `Math.tan()`。

#### 2. 關鍵陷阱：角度 vs. 弧度 (Radians)
這是初學者最容易出錯的地方：JavaScript 的三角函數 **不接受「角度」**，它接受的是 **「弧度」**。
*   **圓周率 (PI)**：`Math.PI` 代表 180 度。
*   **轉換公式**：`弧度 = 角度 * (Math.PI / 180)`
*   **實戰範例**：如果你想計算 30 度的 sin 值，不能直接寫 `Math.sin(30)`，而要寫：
    ```javascript
    var radian = 30 * Math.PI / 180;
    console.log(Math.sin(radian));
    ```

#### 3. 數值精準度
由於電腦底層浮點數運算的特性，計算結果有時會出現如 `0.9999999999999997` 這樣極其接近 1 但不完全等於 1 的數值，這在圖學應用中是正常的。

#### 4. 小結
*   **`sin` / `cos`**：常用於計算圓周上的座標（X, Y）。
*   **`tan`**：常用於計算斜率或角度。
*   在調用任何 Math 三角函數前，請務必先套用 **角度轉弧度** 的公式。

### 影片逐字稿 (AI 生成)

好,我們現在開始來講15之2,三角函數然後它的一些方法,還有更多的方法好的,就是你如果要做一些圖學,前端的動畫啊,遊戲啊你可能都會用到三角函數好的,那大家還記得什麼是Sign嗎?就是H嘛,是斜邊嘛,然後你是A,所以是這樣啦,S,對不對Sign,對啊,Cosign,TangentOK嗎?還記得嗎?這個寫好醜Sign,Cosign,Tangent,好這個,還記得嗎?我也忘記了,不過沒有關係然後,它還有一些少見的三角函數,比如說什麼Versine,Versine,CoverSine,CoverCosine好的,那它的Sign,Cosine,Tangent,是小寫的那,因為它其實會逼,它其實有些只是逼近比如說,Tangent,你看它的反位是0.999999999999997它有時候不會是剛好到1那這些就是公式的部分那在這邊呢用FORR回圈取得360度的三角函數其實我前面應該還要再講一下就說這邊這邊呢你看喔它這邊它其實是用radiance就是用角度的它是用π去算的大家記得π是幾度嗎π是180嗎所以你今天有一個角度你是幾度角然後你要把它除以180然後再去乘以π把它換成是那個就是π就是單位角度的值然後用sin才去算出來而不能直接用360度的角度喔OK嗎所以這邊要記得一下就是這個那除此之外應該不單的OKOKOKOKOKOKOKOK

### 影片逐字稿largev2

好,我們現在開始來講15字的三角函數然後它的一些方法,它還有更多的方法好了,就是你如果要做一些圖學的前端的動畫啊、遊戲啊你可能都會用到三角函數好的,那大家還記得什麼是Sine嗎?就是H嘛,這是斜邊嘛然後你是A,所以是這樣,SSine,對啊CosineTangentOK嗎?還記得嗎?這個寫好醜Sine, Cosine, Tangent好這個還記得嗎?我也忘記了不過沒有關係然後它還有一些少見的三角函數比如說什麼Verse Sine、Verse Cosine、Cover Sine、Cover CosineOK好的,那它的Sine、Cosine、Tangent是小寫的好那因為它其實會逼它其實有些只是逼近比如說像Tangent,你看它的範圍是0.9999997它有時候不會是剛好到1OK好,那這些就是公式的部分好的,那在這邊呢用Four回圈取得360度的三角函數那其實我前面應該還要再講一下就是說這邊這邊呢,你看喔它這邊其實是用Radians就是用角度的它是用π去算的π,大家還記得π是幾度嗎?π是180嘛OK,所以你今天有一個角度你是幾度角然後你要把它除以180然後再去乘以π把它換成是那個就是π就是單位角度的直然後用Sine才去算出來而不能直接用360度的角度喔OK嗎?所以這邊要記得一下就是這個那除此之外應該不難啦OK
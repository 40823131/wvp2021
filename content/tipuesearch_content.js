var tipuesearch = {"pages": [{'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'Day1(0116)', 'text': '', 'tags': '', 'url': 'Day1(0116).html'}, {'title': 'Python源起', 'text': 'Python是一種程式語言，起源於1990年代初期由Guido van Rossum所研發，最初的想法為傳承ABC程式語言，Guido認為ABC相當優美與強大，非專業的程式設計人員也能夠使用，而ABC程式語言當初因為非開放而導致沒有獲得廣泛的運用，於是他決定以開放策略研發Python。 \n \n 🔼 Python 英文原意為蟒蛇，也可發現LOGO由兩隻蟒蛇組成。 \n', 'tags': '', 'url': 'Python源起.html'}, {'title': '基本Python程式', 'text': '🔽 利用下載好的Python IDLE編輯及儲存程式，可存為Python的專用.py檔。 \n \n 1.Hello World!! \n print("Hello World!!") \n 2.基礎四則運算 \n print(5-3+2)\nprint(5*3/5) \n', 'tags': '', 'url': '基本Python程式.html'}, {'title': 'Python程式碼格式重點', 'text': '1.不能使用class作為定義變數或函式，因為它是用來定義類別的關鍵字。 \n 2.函式名稱後需加小括號()、字串則使用雙引號"、註解則用井字號#、多行註解則為\'\'\'。 \n 3.Python會將英文大小寫視為不同的識別字，所以編寫時需注意大小寫。 \n 4.每行最大長度為79個字元，若需要分行則用行接續符號\\。 \n 5.程式每層縮排為4個空白鍵或1個Tab鍵，較推薦使用Tab鍵可一步到位。 \n', 'tags': '', 'url': 'Python程式碼格式重點.html'}, {'title': '常見程式設計錯誤(bug)', 'text': '1.語法錯誤 \n 執行後會出現[SyntaxError: unexpected indent][SyntaxError: EOL while scanning string literal]錯誤 \n 2.執行期間錯誤 \n 例如以下程式 \n X=1\nY=0\nprint(X/Y) \n 則是因為分母不能為零而發生[ZeroDivisionError: division by zero]錯誤 \n 3.邏輯錯誤 \n', 'tags': '', 'url': '常見程式設計錯誤(bug).html'}, {'title': 'Day2(0117)', 'text': '', 'tags': '', 'url': 'Day2(0117).html'}, {'title': '型別', 'text': '1.數值型別:int、float、complex、bool。 \n \xa0 \xa0 (1)int型別:用來表示整數(integer)，正負整數皆包含在內。 \n \xa0 \xa0 (2)float型別:用來表示浮點數(float point number)，有小數部分，精確度取決於作業系統平台。 \n \xa0 \xa0 (3)complex型別:用於表示數學中的複數(complex number)，例如5+4j。 \n \xa0 \xa0 (4)bool型別:為int型別的子型別，只有True、False兩種值，多用於判斷對與錯、是與否......等等兩種選擇之情形。 \n 2.文字序列型別:str。 \n \xa0 \xa0 (1)str型別:用於處理文字資料，就是所謂的字串(string)，字串又是由字元(character)所組成。 \n \xa0 \xa0 \xa0 \xa0 a.單引號 \n \'Hello World!!\' \n \xa0 \xa0 \xa0 \xa0 b.雙引號 \n "Hello World!!" \n \xa0 \xa0 \xa0 \xa0 c.三個單引號 \n >>> print(\'\'\'Hello World!!!\nHello World!!!\nHello World!!!\'\'\')\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \xa0 \xa0 \xa0 \xa0 d.三個雙引號 \n >>> print("""Hello World!!!\nHello World!!!\nHello World!!!""")\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \n 3.二元序列型別:bytes、bytearray、memoryview。 \n 4.序列型別:list、tuple、range。 \n \xa0 \xa0 (1)list型別:用來表示串列，由一連串的資料所組成的，有順序且可改變內容(mutable)的序列(sequence)，list內的資料以逗號隔開，串列前後以中括號標示。 \n [1,3,5,6] \n \xa0 \xa0 (2)tuple型別: 用來表示序對，由一連串的資料所組成的，有順序且不可改變內容(immutable)的序列(sequence )，tuple內的資料以逗號隔開，序列前後以小括號標示。 \n (1,3,5,6) \n 5.集合型別:set、frozenset。 \n \xa0 \xa0 (1) set型別:用來表示集合，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。 \n {"a",3,"b",2} \n 6.對映型別:dict。 \n \xa0 \xa0 (1) dict型別:用來表示字典，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。使用鍵(key)作為索引來存取字典中的數值(value)。 \n {"ID":"123456","name":"simon"} \n', 'tags': '', 'url': '型別.html'}, {'title': 'Day3(0118)', 'text': '', 'tags': '', 'url': 'Day3(0118).html'}, {'title': '變數', 'text': '1.命名規則: \n \xa0 \xa0 (1)第一個字元可以是英文字母、底線(_)、或中文，因考慮到國際接軌，建議儘量不要使用中文來命名。 \n \xa0 \xa0 (2)不能使用關鍵字及內建常數、函式、類別的名稱命名。 \n \xa0 \xa0 (3)因不能使用空白格，所以建議每換一個單字都以大寫開頭，例如userName。 \n \xa0 \xa0 (4)可以合理的簡寫來命名。 \n \xa0 \xa0 (5)命名不能使用特殊符號，除了底線(_)。 \n 2.指派方式:使用指派運算子(=)(assignment operator) \n \xa0 \xa0 (1)例一:定義為str型別 \n myName = "Simon" \n \xa0 \xa0 (2)例二:定義為int型別 \n myPhoneNumber = 1234567890 \n \xa0 \xa0 (3)例三:同時指派多個變數 \n X,Y,Z=1,2,"apple" \n', 'tags': '', 'url': '變數.html'}, {'title': 'Day4(0119)', 'text': '', 'tags': '', 'url': 'Day4(0119).html'}, {'title': '常數', 'text': '常數是一個有意義的名稱，它不會隨程式的執行而改變，同時也無法人為使它改變。例: \n \xa0 \xa0 (1)True:bool型別的真(True)值，作為int型別時值為1。 \n \xa0 \xa0 (2)False :bool型別的假(False)值，作為int型別時值為0。 \n \xa0 \xa0 (3)None:表示空值，若將變數設為None，則表示此變數沒有值。 \n 使用名詞為常數命名的優點: \n \xa0 \xa0 (1)提高程式可讀性。 \n \xa0 \xa0 (2)若為常用常數，就不必重複輸入其值。 \n \xa0 \xa0 (3)常數定義需變更時，只需修改一個地方即可。 \n', 'tags': '', 'url': '常數.html'}, {'title': '運算子', 'text': '1.算術運算子(arithmetic operator):+、-、*、/、//、%、**。 \n 2.移位 運算子(shifting\xa0operator):<<、>>。 \n 3.位元 運算子(bitwise\xa0operator):~、&、|、^。 \n 4.比較 運算子(comparison\xa0operator):>、<、>=、<=、==、!=。 \n 5.邏輯 運算子(logical\xa0operator):and、or、not。 \n 6.指派 運算子(assignment\xa0operator)=、+=、-=、*=、/=、//=、%=、**=、<<=、>>=、&=、|=、^=。 \n 7.其他特殊符號()、[]、{}、,、:、.、;。 \n 8.單位運算子:+、-和~，此時的+、-是用來表達正負數值，只有單個運算元，採前置記法，例如:-5、+5。 \n 9.二元運算子: +、-和~以外的運算子屬於二元運算子，有兩個運算元，採中置記法，例如:1.3*62、60/2.6。 \n', 'tags': '', 'url': '運算子.html'}, {'title': 'Day5(0120)', 'text': '', 'tags': '', 'url': 'Day5(0120).html'}, {'title': '運算子個別解說(一)', 'text': '1.算數運算子 \n \xa0 \xa0 (1)+[加法]:表示a加b，語法如下 \n 1+2 \n \xa0 \xa0 另外+運算子也能用來連接字串，如下。 \n "5"+"apple" \n \xa0 \xa0 得到以下結果 \n "5apple" \n \xa0 \xa0 (2)-[減法]:表示a減b，語法如下。 \n 2-1 \n \xa0 \xa0 (3)*[乘法]:表示a乘b ， 語法如下。 \n 2*1 \n \xa0 \xa0 (4)/[浮點數除法]:表示a除以b，結果為float型別，語法如下。 \n 12/3 \n \xa0 \xa0 結果為 \n 4.0 \n \xa0 \xa0 (5)//[整數除法]: 表示a除以b，結果為int型別，小數部分將直接捨去，語法如下。 \n 7//3 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (6)%[餘數]: 表示a除以b的餘數，語法如下。 \n 12%5 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (7)**[指數]:表示a的b次方，語法如下。 \n 2**2 \n \xa0 \xa0 結果為 \n 4 \n 2.位元運算子 \n \xa0 \xa0 (1)~[位元 NOT] \n \xa0 \xa0 (2)&[位元 AND] \n \xa0 \xa0 (3)|[位元 OR] \n \xa0 \xa0 (4)^[位元 XOR] \n 3.比較運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n > \n a>b \n 若a大於b時傳回True，反之則傳回False。 \n \n \n < \n a<b \n 若a小於b時傳回True，反之則傳回False。 \n \n \n >= \n a>=b \n 若a大於等於b時傳回True，反之則傳回False。 \n \n \n <= \n a<=b \n 若a小於等於 b 時傳回True，反之則傳回False。 \n \n \n == \n a==b \n 若a等於b 時傳回True，反之則傳回False。 \n \n \n != \n a!=b \n 若a不等於b 時傳回True，反之則傳回False。 \n \n \n \n', 'tags': '', 'url': '運算子個別解說(一).html'}, {'title': 'Day6(0121)', 'text': '', 'tags': '', 'url': 'Day6(0121).html'}, {'title': '運算子個別解說(二)', 'text': '4.指派運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n = \n a=b \n 將b指派給a，將a的值設定為b的值。 \n \n \n += \n a+=b \n 相當於a=a+b。 \n \n \n -= \n a-=b \n 相當於a=a-b。 \n \n \n *= \n a*=b \n 相當於a=a*b。 \n \n \n /= \n a/=b \n 相當於a=a/b。 \n \n \n //= \n a//=b \n 相當於a=a//b。 \n \n \n %= \n a%=b \n 相當於a=a%b。 \n \n \n **= \n a**=b \n 相當於a=a**b。 \n \n \n <<= \n a<<=b \n 相當於a=a<<b。 \n \n \n >>= \n a>>=b \n 相當於a=a>>b。 \n \n \n &= \n a&=b \n 相當於a=a&b。 \n \n \n |= \n a|=b \n 相當於a=a|b。 \n \n \n ^= \n a^=b \n 相當於a=a^b。 \n \n \n \n 5.邏輯運算子 \n \xa0 \xa0 (1)and:若a and b， 表示 a與b皆為True則傳回True，反之傳回False。 \n \xa0 \xa0 (2)or: 若a or b，表示a與b皆為False則傳回False，反之傳回True。 \n \xa0 \xa0 (3)not:若not a，表示將a進行邏輯否定，若a的值為True，傳回False，反之傳回True。 \n', 'tags': '', 'url': '運算子個別解說(二).html'}, {'title': 'Day7(0122)', 'text': '', 'tags': '', 'url': 'Day7(0122).html'}, {'title': '運算子的優先順序', 'text': '運算子的優先順序由高到低為: \n 1.()、[]、{}。 \n 2.a[i]、a[i:j]、a()、a.b、a.b()。 \n 3.a**b。 \n 4.+a、-a、~a。 \n 5.a*b、a/b、a//b、a%b。 \n 6.a+b、a-b。 \n 7.a<<b、a>>b。 \n 8.a&b。 \n 9.a^b。 \n 10.a|b。 \n 11.>、<、>=、<=、==、!=。 \n 12.not a。 \n 13.a and b。 \n 14.a or b。 \n', 'tags': '', 'url': '運算子的優先順序.html'}, {'title': '輸出', 'text': "大多數程式在執行完畢後，會將結果輸出到螢幕。可利用Python內建的print()函數來印出指定的字串。 \n print()函式的語法如下: \n print(value,...,sep='',end='\\n',file=sys.stdout) \n value:用來設定要印出的值。 \n sep: 用來設定隔開兩個值的字串，可省略，省略代表使用預設值''(一個空白) \n end:用來設定印出最後一個值後所要加上的字串，可省略，省略代表使用預設值'\\n'(換行) \n file:用來設定輸出裝置，可省略，省略代表使用預設值sys.stdout(輸出至螢幕)。 \n", 'tags': '', 'url': '輸出.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'Day8(0123)', 'text': '', 'tags': '', 'url': 'Day8(0123).html'}, {'title': '輸入', 'text': '使用內建的input()函式取得輸入的資料 \n >>>userNumber = input("請輸入學號:")\n請輸入學號: 40823131\n##上列按下enter後將會跳回\n>>> \n 之後檢驗 \n >>>userNumber\n##按下enter後則出現\n\'40823131\'\n>>> \n 得到上列字串後，若需進行計算則需使用內建的eval()將字串轉換為數值。 \n 使用上述函式寫出利用輸入半徑，用來計算圓面積的程式，如下。 \n CircleArea.py \n \n', 'tags': '', 'url': '輸入.html'}, {'title': '資料參考', 'text': 'https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web&nbsp \xa0', 'tags': '', 'url': '資料參考.html'}]};
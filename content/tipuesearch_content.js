var tipuesearch = {"pages": [{'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'Day1(0116)', 'text': '', 'tags': '', 'url': 'Day1(0116).html'}, {'title': 'Python源起', 'text': 'Python是一種程式語言，起源於1990年代初期由Guido van Rossum所研發，最初的想法為傳承ABC程式語言，Guido認為ABC相當優美與強大，非專業的程式設計人員也能夠使用，而ABC程式語言當初因為非開放而導致沒有獲得廣泛的運用，於是他決定以開放策略研發Python。 \n \n 🔼 Python 英文原意為蟒蛇，也可發現LOGO由兩隻蟒蛇組成。 \n', 'tags': '', 'url': 'Python源起.html'}, {'title': '基本Python程式', 'text': '🔽 利用下載好的Python IDLE編輯及儲存程式，可存為Python的專用.py檔。 \n \n 1.Hello World!! \n print("Hello World!!") \n 2.基礎四則運算 \n print(5-3+2)\nprint(5*3/5) \n', 'tags': '', 'url': '基本Python程式.html'}, {'title': 'Python程式碼格式重點', 'text': '1.不能使用class作為定義變數或函式，因為它是用來定義類別的關鍵字。 \n 2.函式名稱後需加小括號()、字串則使用雙引號"、註解則用井字號#、多行註解則為\'\'\'。 \n 3.Python會將英文大小寫視為不同的識別字，所以編寫時需注意大小寫。 \n 4.每行最大長度為79個字元，若需要分行則用行接續符號\\。 \n 5.程式每層縮排為4個空白鍵或1個Tab鍵，較推薦使用Tab鍵可一步到位。 \n', 'tags': '', 'url': 'Python程式碼格式重點.html'}, {'title': '常見程式設計錯誤(bug)', 'text': '1.語法錯誤 \n 執行後會出現[SyntaxError: unexpected indent][SyntaxError: EOL while scanning string literal]錯誤 \n 2.執行期間錯誤 \n 例如以下程式 \n X=1\nY=0\nprint(X/Y) \n 則是因為分母不能為零而發生[ZeroDivisionError: division by zero]錯誤 \n 3.邏輯錯誤 \n', 'tags': '', 'url': '常見程式設計錯誤(bug).html'}, {'title': 'Day2(0117)', 'text': '', 'tags': '', 'url': 'Day2(0117).html'}, {'title': '型別', 'text': '1.數值型別:int、float、complex、bool。 \n \xa0 \xa0 (1)int型別:用來表示整數(integer)，正負整數皆包含在內。 \n \xa0 \xa0 (2)float型別:用來表示浮點數(float point number)，有小數部分，精確度取決於作業系統平台。 \n \xa0 \xa0 (3)complex型別:用於表示數學中的複數(complex number)，例如5+4j。 \n \xa0 \xa0 (4)bool型別:為int型別的子型別，只有True、False兩種值，多用於判斷對與錯、是與否......等等兩種選擇之情形。 \n 2.文字序列型別:str。 \n \xa0 \xa0 (1)str型別:用於處理文字資料，就是所謂的字串(string)，字串又是由字元(character)所組成。 \n \xa0 \xa0 \xa0 \xa0 a.單引號 \n \'Hello World!!\' \n \xa0 \xa0 \xa0 \xa0 b.雙引號 \n "Hello World!!" \n \xa0 \xa0 \xa0 \xa0 c.三個單引號 \n >>> print(\'\'\'Hello World!!!\nHello World!!!\nHello World!!!\'\'\')\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \xa0 \xa0 \xa0 \xa0 d.三個雙引號 \n >>> print("""Hello World!!!\nHello World!!!\nHello World!!!""")\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \n 3.二元序列型別:bytes、bytearray、memoryview。 \n 4.序列型別:list、tuple、range。 \n \xa0 \xa0 (1)list型別:用來表示串列，由一連串的資料所組成的，有順序且可改變內容(mutable)的序列(sequence)，list內的資料以逗號隔開，串列前後以中括號標示。 \n [1,3,5,6] \n \xa0 \xa0 (2)tuple型別: 用來表示序對，由一連串的資料所組成的，有順序且不可改變內容(immutable)的序列(sequence )，tuple內的資料以逗號隔開，序列前後以小括號標示。 \n (1,3,5,6) \n 5.集合型別:set、frozenset。 \n \xa0 \xa0 (1) set型別:用來表示集合，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。 \n {"a",3,"b",2} \n 6.對映型別:dict。 \n \xa0 \xa0 (1) dict型別:用來表示字典，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。使用鍵(key)作為索引來存取字典中的數值(value)。 \n {"ID":"123456","name":"simon"} \n', 'tags': '', 'url': '型別.html'}, {'title': 'Day3(0118)', 'text': '', 'tags': '', 'url': 'Day3(0118).html'}, {'title': '變數', 'text': '1.命名規則: \n \xa0 \xa0 (1)第一個字元可以是英文字母、底線(_)、或中文，因考慮到國際接軌，建議儘量不要使用中文來命名。 \n \xa0 \xa0 (2)不能使用關鍵字及內建常數、函式、類別的名稱命名。 \n \xa0 \xa0 (3)因不能使用空白格，所以建議每換一個單字都以大寫開頭，例如userName。 \n \xa0 \xa0 (4)可以合理的簡寫來命名。 \n \xa0 \xa0 (5)命名不能使用特殊符號，除了底線(_)。 \n 2.指派方式:使用指派運算子(=)(assignment operator) \n \xa0 \xa0 (1)例一:定義為str型別 \n myName = "Simon" \n \xa0 \xa0 (2)例二:定義為int型別 \n myPhoneNumber = 1234567890 \n \xa0 \xa0 (3)例三:同時指派多個變數 \n X,Y,Z=1,2,"apple" \n', 'tags': '', 'url': '變數.html'}, {'title': 'Day4(0119)', 'text': '', 'tags': '', 'url': 'Day4(0119).html'}, {'title': '常數', 'text': '常數是一個有意義的名稱，它不會隨程式的執行而改變，同時也無法人為使它改變。例: \n \xa0 \xa0 (1)True:bool型別的真(True)值，作為int型別時值為1。 \n \xa0 \xa0 (2)False :bool型別的假(False)值，作為int型別時值為0。 \n \xa0 \xa0 (3)None:表示空值，若將變數設為None，則表示此變數沒有值。 \n 使用名詞為常數命名的優點: \n \xa0 \xa0 (1)提高程式可讀性。 \n \xa0 \xa0 (2)若為常用常數，就不必重複輸入其值。 \n \xa0 \xa0 (3)常數定義需變更時，只需修改一個地方即可。 \n', 'tags': '', 'url': '常數.html'}, {'title': '運算子', 'text': '1.算術運算子(arithmetic operator):+、-、*、/、//、%、**。 \n 2.移位 運算子(shifting\xa0operator):<<、>>。 \n 3.位元 運算子(bitwise\xa0operator):~、&、|、^。 \n 4.比較 運算子(comparison\xa0operator):>、<、>=、<=、==、!=。 \n 5.邏輯 運算子(logical\xa0operator):and、or、not。 \n 6.指派 運算子(assignment\xa0operator)=、+=、-=、*=、/=、//=、%=、**=、<<=、>>=、&=、|=、^=。 \n 7.其他特殊符號()、[]、{}、,、:、.、;。 \n 8.單位運算子:+、-和~，此時的+、-是用來表達正負數值，只有單個運算元，採前置記法，例如:-5、+5。 \n 9.二元運算子: +、-和~以外的運算子屬於二元運算子，有兩個運算元，採中置記法，例如:1.3*62、60/2.6。 \n', 'tags': '', 'url': '運算子.html'}, {'title': 'Day5(0120)', 'text': '', 'tags': '', 'url': 'Day5(0120).html'}, {'title': '運算子個別解說(一)', 'text': '1.算數運算子 \n \xa0 \xa0 (1)+[加法]:表示a加b，語法如下 \n 1+2 \n \xa0 \xa0 另外+運算子也能用來連接字串，如下。 \n "5"+"apple" \n \xa0 \xa0 得到以下結果 \n "5apple" \n \xa0 \xa0 (2)-[減法]:表示a減b，語法如下。 \n 2-1 \n \xa0 \xa0 (3)*[乘法]:表示a乘b ， 語法如下。 \n 2*1 \n \xa0 \xa0 (4)/[浮點數除法]:表示a除以b，結果為float型別，語法如下。 \n 12/3 \n \xa0 \xa0 結果為 \n 4.0 \n \xa0 \xa0 (5)//[整數除法]: 表示a除以b，結果為int型別，小數部分將直接捨去，語法如下。 \n 7//3 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (6)%[餘數]: 表示a除以b的餘數，語法如下。 \n 12%5 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (7)**[指數]:表示a的b次方，語法如下。 \n 2**2 \n \xa0 \xa0 結果為 \n 4 \n 2.位元運算子 \n \xa0 \xa0 (1)~[位元 NOT] \n \xa0 \xa0 (2)&[位元 AND] \n \xa0 \xa0 (3)|[位元 OR] \n \xa0 \xa0 (4)^[位元 XOR] \n 3.比較運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n > \n a>b \n 若a大於b時傳回True，反之則傳回False。 \n \n \n < \n a<b \n 若a小於b時傳回True，反之則傳回False。 \n \n \n >= \n a>=b \n 若a大於等於b時傳回True，反之則傳回False。 \n \n \n <= \n a<=b \n 若a小於等於 b 時傳回True，反之則傳回False。 \n \n \n == \n a==b \n 若a等於b 時傳回True，反之則傳回False。 \n \n \n != \n a!=b \n 若a不等於b 時傳回True，反之則傳回False。 \n \n \n \n', 'tags': '', 'url': '運算子個別解說(一).html'}, {'title': 'Day6(0121)', 'text': '', 'tags': '', 'url': 'Day6(0121).html'}, {'title': '運算子個別解說(二)', 'text': '4.指派運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n = \n a=b \n 將b指派給a，將a的值設定為b的值。 \n \n \n += \n a+=b \n 相當於a=a+b。 \n \n \n -= \n a-=b \n 相當於a=a-b。 \n \n \n *= \n a*=b \n 相當於a=a*b。 \n \n \n /= \n a/=b \n 相當於a=a/b。 \n \n \n //= \n a//=b \n 相當於a=a//b。 \n \n \n %= \n a%=b \n 相當於a=a%b。 \n \n \n **= \n a**=b \n 相當於a=a**b。 \n \n \n <<= \n a<<=b \n 相當於a=a<<b。 \n \n \n >>= \n a>>=b \n 相當於a=a>>b。 \n \n \n &= \n a&=b \n 相當於a=a&b。 \n \n \n |= \n a|=b \n 相當於a=a|b。 \n \n \n ^= \n a^=b \n 相當於a=a^b。 \n \n \n \n 5.邏輯運算子 \n \xa0 \xa0 (1)and:若a and b， 表示 a與b皆為True則傳回True，反之傳回False。 \n \xa0 \xa0 (2)or: 若a or b，表示a與b皆為False則傳回False，反之傳回True。 \n \xa0 \xa0 (3)not:若not a，表示將a進行邏輯否定，若a的值為True，傳回False，反之傳回True。 \n', 'tags': '', 'url': '運算子個別解說(二).html'}, {'title': 'Day7(0122)', 'text': '', 'tags': '', 'url': 'Day7(0122).html'}, {'title': '運算子的優先順序', 'text': '運算子的優先順序由高到低為: \n 1.()、[]、{}。 \n 2.a[i]、a[i:j]、a()、a.b、a.b()。 \n 3.a**b。 \n 4.+a、-a、~a。 \n 5.a*b、a/b、a//b、a%b。 \n 6.a+b、a-b。 \n 7.a<<b、a>>b。 \n 8.a&b。 \n 9.a^b。 \n 10.a|b。 \n 11.>、<、>=、<=、==、!=。 \n 12.not a。 \n 13.a and b。 \n 14.a or b。 \n', 'tags': '', 'url': '運算子的優先順序.html'}, {'title': '輸出', 'text': "大多數程式在執行完畢後，會將結果輸出到螢幕。可利用Python內建的print()函數來印出指定的字串。 \n print()函式的語法如下: \n print(value,...,sep='',end='\\n',file=sys.stdout) \n value:用來設定要印出的值。 \n sep: 用來設定隔開兩個值的字串，可省略，省略代表使用預設值''(一個空白) \n end:用來設定印出最後一個值後所要加上的字串，可省略，省略代表使用預設值'\\n'(換行) \n file:用來設定輸出裝置，可省略，省略代表使用預設值sys.stdout(輸出至螢幕)。 \n", 'tags': '', 'url': '輸出.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'Day8(0123)', 'text': '', 'tags': '', 'url': 'Day8(0123).html'}, {'title': '輸入', 'text': '使用內建的input()函式取得輸入的資料 \n >>>userNumber = input("請輸入學號:")\n請輸入學號: 40823131\n##上列按下enter後將會跳回\n>>> \n 之後檢驗 \n >>>userNumber\n##按下enter後則出現\n\'40823131\'\n>>> \n 得到上列字串後，若需進行計算則需使用內建的eval()將字串轉換為數值。 \n 使用上述函式寫出利用輸入半徑，用來計算圓面積的程式，如下。 \n CircleArea.py \n', 'tags': '', 'url': '輸入.html'}, {'title': 'Day9(0124)', 'text': '', 'tags': '', 'url': 'Day9(0124).html'}, {'title': '常用內建數值函數', 'text': 'abs(X):傳回X的絕對值。 \n min(X1,X2,X3,......) :傳回參數數值中的最小值。 \n max( X1,X2,X3,...... ) :傳回參數數值中的最大值。 \n hex( X ) :傳回整數X參數由十進位轉為十六進位的字串，前面會加上0x。 \n oct( X ) :傳回整數X參數由十進位轉為八進位的字串，前面會加上0o。 \n bin( X ) :傳回整數X參數由十進位轉為二進位的字串 ，前面會加上0b。 \n int( X ) :傳回X的整數部分，小數將被直接捨去。 \n round( X,precision ) :傳回與X最接近的整數(四捨五入)，若要設定精確度到小數點後幾位，可利用選擇性參數precision設定。 \n pow( X,Y ) :傳回X的Y次方值。 \n float(" X ) :傳回字串X轉換成浮點數的結果。 \n complex( X ) :傳回字串X轉換成複數的結果。 \n', 'tags': '', 'url': '常用內建數值函數.html'}, {'title': 'Day10(0125)', 'text': '', 'tags': '', 'url': 'Day10(0125).html'}, {'title': '導入數學模組', 'text': '在Python中若需使用數學函式，需先導入數學模組(module)，如下。 \n >>>import math \n', 'tags': '', 'url': '導入數學模組.html'}, {'title': '常用數學函式', 'text': '1.math.pi、math.e、math.nan、math.inf:分別表示圓周率、自然對數e、NaN(not a number)、正無限大，負無限大則為-math.inf。 \n 2.math.ceil(X):傳回 大於等於X的最小整數，例如: \n >>>math.ceil(8.999)\n9 \n 3.math.fabs(X):傳回X的浮點數絕對值，例如: \n >>>math.fabs(-5)\n5.0 \n 4.math.factorial(X):傳回正整數X的階層值，例如: \n >>>math.factorial(4)    #(即為4!=4*3*2*1=24)\n24 \n 5.math.floor(X):傳回 小於等於X的最大整數。 \n 6.math.radians(X):傳回角度X轉為弳度的結果。 \n 7.math.degrees(X):傳回弳度X轉為角度的結果。 \n 8.math.sin(X)、math.cos (X)、math.tan (X)、math.as in(X)、math.acos (X)、math.atan (X)三角函式:分別傳回X的正弦值、餘弦值、正切值、反正弦值、反餘弦值、反正切值，需注意的適當中的參數X需為弳度而非角度，可利用上述math.radians函式將角度轉換為弳度。 \n', 'tags': '', 'url': '常用數學函式.html'}, {'title': '亂數函式', 'text': '首先匯入亂數模組。 \n >>>import random \n 1.random.randint(X,Y):傳回一個大於等於X並小於等於Y的隨機整數。 \n 2. random.random():傳回一個大於等於0.0並小於1.0的隨機浮點數。 \n 3.random.shuffle(X):將X中的元素進行隨機重排。 \n 利用上述函式寫出簡易猜數字的程式如下。 \n random.py \n', 'tags': '', 'url': '亂數函式.html'}, {'title': 'Day11(0126)', 'text': '', 'tags': '', 'url': 'Day11(0126).html'}, {'title': '逸脫序列', 'text': '對於一些無法顯示在螢幕上的符號，可以利用 逸脫序列在這些符號前加上反斜線(\\)，便能顯示出來。 \n \n \n \n 逸脫序列 \n 意義 \n \n \n \\\\ \n 印出反斜線(\\)。 \n \n \n \\\' \n 印出單引號(\')。 \n \n \n \\" \n 印出雙引號(")。 \n \n \n \\a \n 響鈴(Bell)。 \n \n \n \\b \n 倒退鍵(Backspace)。 \n \n \n \\f \n 換頁(Formfeed)。 \n \n \n \\n \n 換行(Linefeed)。 \n \n \n \\r \n 歸位(Carriage Return)。 \n \n \n \\t \n [Tab]鍵(Horizontal)。 \n \n \n \\v \n 垂直定位(Vertical Tab)。 \n \n \n \\ooo \n ASCII字元，ooo為八進位整數。 \n \n \n \\x hh \n ASCII字元， hh 為十六進位整數。 \n \n \n \\N{ name } \n Unicode字元， name 為字元名稱。 \n \n \n \\u xxxx \n Unicode字元， xxxx 為16-bit十六進位整數。 \n \n \n \\U xxxxxxxx \n Unicode字元， xxxxxxxx 為32-bit十六進位整數。 \n \n \n \n', 'tags': '', 'url': '逸脫序列.html'}, {'title': '常用內建字串函式', 'text': '1.len(x):傳回s字串的長度，也就是s總共包含幾個字元，例如: \n >>>len("hello")\n5     #hello總共由5個字元組成 \n 2.str(n):傳回數值參數n轉為字串的結果，例如: \n >>>str(125.5)\n\'125.5\' \n', 'tags': '', 'url': '常用內建字串函式.html'}, {'title': '連接運算子', 'text': '1.+運算子可用來將字串串起來，如下。 \n >>>"我為"+"人人"+"，"+"人人"+"為我"+"。"\n我為人人，人人為我。 \n', 'tags': '', 'url': '連接運算子.html'}, {'title': '重複運算子', 'text': '1.*運算子可以用來重複字串，如下。 \n >>>5 * "wow!"\n\'wow!wow!wow!wow!wow!\' \n', 'tags': '', 'url': '重複運算子.html'}, {'title': 'in ,not in運算子', 'text': '1.in運算子:可以利用它來檢查字串中是否有我們指定的字串在其中，如下。 \n >>>"go" in "good"\nTrue \n 2.not in運算子:與in運算子相反，可以利用它來檢查字串中是否沒有我們指定的字串在其中，如下。 \n >>>"go" not in "good"\nFalse \n', 'tags': '', 'url': 'in ,not in運算子.html'}, {'title': '索引運算子[]與片段運算子', 'text': '利用索引運算子[]可以取得字串中的字元，如下。 \n >>>s = "Python程式設計"\n>>>s[3]\nh \n 也可使用片段運算子來指定範圍索引，如下。 \n >>>s = "Python程式設計"\n>>>s[2:4] #不包含第四字元(只索引2~3字元)\nth \n', 'tags': '', 'url': '索引運算子[]與片段運算子.html'}, {'title': 'Day12(0127)', 'text': '', 'tags': '', 'url': 'Day12(0127).html'}, {'title': '字串處理方法', 'text': '1.id(X):取得X指向之物件的id編號。 \n 2.type(X):取得X之型別。 \n 3.print(X):印出X的值。 \n', 'tags': '', 'url': '字串處理方法.html'}, {'title': '常用字串轉換方法', 'text': '1.str.upper(s):傳回s的所有字元轉為大寫的字串。 \n 2.str.lower(s): 傳回s的所有字元轉為小寫的字串。 \n 3.str.replace(old,new): 傳回將字串參數old取代為字串參數new的字串。 \n 4.str.capitalize(s): 傳回s的第一個字元轉換為大寫的字串。 \n 5.str.title(s): 傳回s的每一個單字的第一個字元 轉換為大寫的字串。 \n', 'tags': '', 'url': '常用字串轉換方法.html'}, {'title': '搜尋字串方法', 'text': '1.str.count(s):傳回目標字串中出現s字串的次數。 \n 2.str.startswith(s):若目標字串中的開頭為s字串傳回True，反之則傳回False。 \n 3.str.endswith(s):若目標字串中的結尾為s字串傳回 True ，反之則傳回False。 \n', 'tags': '', 'url': '搜尋字串方法.html'}, {'title': '常用字串測試方法', 'text': '1.str.isalpha(s):若s中所有字元皆為英文字母傳回True，反之則傳回False。 \n 2.str.isdigit(s): 若s中所有字元皆為阿拉伯數字傳回True，反之則傳回False。 \n 3.str.isalnum(s): 若s中所有字元皆為英文字母及阿拉伯數字傳回True，反之則傳回False。 \n 4.str.is upper(s):若s中所有字元皆為大寫英文字母傳回True，反之則傳回False。 \n 5.str.islower(s):若s中所有字元皆為小寫英文字母傳回True，反之則傳回False。 \n \n', 'tags': '', 'url': '常用字串測試方法.html'}, {'title': 'Day13(0128)', 'text': '\n', 'tags': '', 'url': 'Day13(0128).html'}, {'title': '字串格式化方法', 'text': '1.str.center(w):傳回欄位寬度為w所指定的字元數，並且為置中的字串。 \n 2.str.ljust(w): 傳回欄位寬度為w所指定的字元數，並且為靠左的字串。 \n 3.str.rjust(w): 傳回欄位寬度為w所指定的字元數，並且為靠右的字串。 \n 4.str.zfill(w):傳回欄位寬度為w所指定的字元數，並且 左側填上0、正負號(+,-)皆保留在開頭的字串。 \n 5.str.format(spec):利用spec所指定的格式將字串格式化。 \n', 'tags': '', 'url': '字串格式化方法.html'}, {'title': '刪除指定字元方法', 'text': '1.str.strip(X):從字串兩側刪除指定字元。 \n 2.str.lstrip(X):從字串左側刪除指定字元。 \n 3.str.rstrip(X):從字串右 側刪除指定字元。 \n \n', 'tags': '', 'url': '刪除指定字元方法.html'}, {'title': '資料參考', 'text': 'https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web&nbsp \xa0', 'tags': '', 'url': '資料參考.html'}]};
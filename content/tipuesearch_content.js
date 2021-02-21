var tipuesearch = {"pages": [{'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'Day1(0116)', 'text': '', 'tags': '', 'url': 'Day1(0116).html'}, {'title': 'Python源起', 'text': 'Python是一種程式語言，起源於1990年代初期由Guido van Rossum所研發，最初的想法為傳承ABC程式語言，Guido認為ABC相當優美與強大，非專業的程式設計人員也能夠使用，而ABC程式語言當初因為非開放而導致沒有獲得廣泛的運用，於是他決定以開放策略研發Python。 \n \n 🔼 Python 英文原意為蟒蛇，也可發現LOGO由兩隻蟒蛇組成。 \n', 'tags': '', 'url': 'Python源起.html'}, {'title': '基本Python程式', 'text': '🔽 利用下載好的Python IDLE編輯及儲存程式，可存為Python的專用.py檔。 \n \n 1.Hello World!! \n print("Hello World!!") \n 2.基礎四則運算 \n print(5-3+2)\nprint(5*3/5) \n', 'tags': '', 'url': '基本Python程式.html'}, {'title': 'Python程式碼格式重點', 'text': '1.不能使用class作為定義變數或函式，因為它是用來定義類別的關鍵字。 \n 2.函式名稱後需加小括號()、字串則使用雙引號"、註解則用井字號#、多行註解則為\'\'\'。 \n 3.Python會將英文大小寫視為不同的識別字，所以編寫時需注意大小寫。 \n 4.每行最大長度為79個字元，若需要分行則用行接續符號\\。 \n 5.程式每層縮排為4個空白鍵或1個Tab鍵，較推薦使用Tab鍵可一步到位。 \n', 'tags': '', 'url': 'Python程式碼格式重點.html'}, {'title': '常見程式設計錯誤(bug)', 'text': '1.語法錯誤 \n 執行後會出現[SyntaxError: unexpected indent][SyntaxError: EOL while scanning string literal]錯誤 \n 2.執行期間錯誤 \n 例如以下程式 \n X=1\nY=0\nprint(X/Y) \n 則是因為分母不能為零而發生[ZeroDivisionError: division by zero]錯誤 \n 3.邏輯錯誤 \n', 'tags': '', 'url': '常見程式設計錯誤(bug).html'}, {'title': 'Day2(0117)', 'text': '', 'tags': '', 'url': 'Day2(0117).html'}, {'title': '型別', 'text': '1.數值型別:int、float、complex、bool。 \n \xa0 \xa0 (1)int型別:用來表示整數(integer)，正負整數皆包含在內。 \n \xa0 \xa0 (2)float型別:用來表示浮點數(float point number)，有小數部分，精確度取決於作業系統平台。 \n \xa0 \xa0 (3)complex型別:用於表示數學中的複數(complex number)，例如5+4j。 \n \xa0 \xa0 (4)bool型別:為int型別的子型別，只有True、False兩種值，多用於判斷對與錯、是與否......等等兩種選擇之情形。 \n 2.文字序列型別:str。 \n \xa0 \xa0 (1)str型別:用於處理文字資料，就是所謂的字串(string)，字串又是由字元(character)所組成。 \n \xa0 \xa0 \xa0 \xa0 a.單引號 \n \'Hello World!!\' \n \xa0 \xa0 \xa0 \xa0 b.雙引號 \n "Hello World!!" \n \xa0 \xa0 \xa0 \xa0 c.三個單引號 \n >>> print(\'\'\'Hello World!!!\nHello World!!!\nHello World!!!\'\'\')\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \xa0 \xa0 \xa0 \xa0 d.三個雙引號 \n >>> print("""Hello World!!!\nHello World!!!\nHello World!!!""")\n\n#下列為結果\nHello World!!!\nHello World!!!\nHello World!!! \n \n 3.二元序列型別:bytes、bytearray、memoryview。 \n 4.序列型別:list、tuple、range。 \n \xa0 \xa0 (1)list型別:用來表示串列，由一連串的資料所組成的，有順序且可改變內容(mutable)的序列(sequence)，list內的資料以逗號隔開，串列前後以中括號標示。 \n [1,3,5,6] \n \xa0 \xa0 (2)tuple型別: 用來表示序對，由一連串的資料所組成的，有順序且不可改變內容(immutable)的序列(sequence )，tuple內的資料以逗號隔開，序列前後以小括號標示。 \n (1,3,5,6) \n 5.集合型別:set、frozenset。 \n \xa0 \xa0 (1) set型別:用來表示集合，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。 \n {"a",3,"b",2} \n 6.對映型別:dict。 \n \xa0 \xa0 (1) dict型別:用來表示字典，包含沒有順序、沒有重複且內容可變得多個資料，前後已大括號表示，資料以逗號隔開。使用鍵(key)作為索引來存取字典中的數值(value)。 \n {"ID":"123456","name":"simon"} \n', 'tags': '', 'url': '型別.html'}, {'title': 'Day3(0118)', 'text': '', 'tags': '', 'url': 'Day3(0118).html'}, {'title': '變數', 'text': '1.命名規則: \n \xa0 \xa0 (1)第一個字元可以是英文字母、底線(_)、或中文，因考慮到國際接軌，建議儘量不要使用中文來命名。 \n \xa0 \xa0 (2)不能使用關鍵字及內建常數、函式、類別的名稱命名。 \n \xa0 \xa0 (3)因不能使用空白格，所以建議每換一個單字都以大寫開頭，例如userName。 \n \xa0 \xa0 (4)可以合理的簡寫來命名。 \n \xa0 \xa0 (5)命名不能使用特殊符號，除了底線(_)。 \n 2.指派方式:使用指派運算子(=)(assignment operator) \n \xa0 \xa0 (1)例一:定義為str型別 \n myName = "Simon" \n \xa0 \xa0 (2)例二:定義為int型別 \n myPhoneNumber = 1234567890 \n \xa0 \xa0 (3)例三:同時指派多個變數 \n X,Y,Z=1,2,"apple" \n', 'tags': '', 'url': '變數.html'}, {'title': 'Day4(0119)', 'text': '', 'tags': '', 'url': 'Day4(0119).html'}, {'title': '常數', 'text': '常數是一個有意義的名稱，它不會隨程式的執行而改變，同時也無法人為使它改變。例: \n \xa0 \xa0 (1)True:bool型別的真(True)值，作為int型別時值為1。 \n \xa0 \xa0 (2)False :bool型別的假(False)值，作為int型別時值為0。 \n \xa0 \xa0 (3)None:表示空值，若將變數設為None，則表示此變數沒有值。 \n 使用名詞為常數命名的優點: \n \xa0 \xa0 (1)提高程式可讀性。 \n \xa0 \xa0 (2)若為常用常數，就不必重複輸入其值。 \n \xa0 \xa0 (3)常數定義需變更時，只需修改一個地方即可。 \n', 'tags': '', 'url': '常數.html'}, {'title': '運算子', 'text': '1.算術運算子(arithmetic operator):+、-、*、/、//、%、**。 \n 2.移位 運算子(shifting\xa0operator):<<、>>。 \n 3.位元 運算子(bitwise\xa0operator):~、&、|、^。 \n 4.比較 運算子(comparison\xa0operator):>、<、>=、<=、==、!=。 \n 5.邏輯 運算子(logical\xa0operator):and、or、not。 \n 6.指派 運算子(assignment\xa0operator)=、+=、-=、*=、/=、//=、%=、**=、<<=、>>=、&=、|=、^=。 \n 7.其他特殊符號()、[]、{}、,、:、.、;。 \n 8.單位運算子:+、-和~，此時的+、-是用來表達正負數值，只有單個運算元，採前置記法，例如:-5、+5。 \n 9.二元運算子: +、-和~以外的運算子屬於二元運算子，有兩個運算元，採中置記法，例如:1.3*62、60/2.6。 \n', 'tags': '', 'url': '運算子.html'}, {'title': 'Day5(0120)', 'text': '', 'tags': '', 'url': 'Day5(0120).html'}, {'title': '運算子個別解說(一)', 'text': '1.算數運算子 \n \xa0 \xa0 (1)+[加法]:表示a加b，語法如下 \n 1+2 \n \xa0 \xa0 另外+運算子也能用來連接字串，如下。 \n "5"+"apple" \n \xa0 \xa0 得到以下結果 \n "5apple" \n \xa0 \xa0 (2)-[減法]:表示a減b，語法如下。 \n 2-1 \n \xa0 \xa0 (3)*[乘法]:表示a乘b ， 語法如下。 \n 2*1 \n \xa0 \xa0 (4)/[浮點數除法]:表示a除以b，結果為float型別，語法如下。 \n 12/3 \n \xa0 \xa0 結果為 \n 4.0 \n \xa0 \xa0 (5)//[整數除法]: 表示a除以b，結果為int型別，小數部分將直接捨去，語法如下。 \n 7//3 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (6)%[餘數]: 表示a除以b的餘數，語法如下。 \n 12%5 \n \xa0 \xa0 結果為 \n 2 \n \xa0 \xa0 (7)**[指數]:表示a的b次方，語法如下。 \n 2**2 \n \xa0 \xa0 結果為 \n 4 \n 2.位元運算子 \n \xa0 \xa0 (1)~[位元 NOT] \n \xa0 \xa0 (2)&[位元 AND] \n \xa0 \xa0 (3)|[位元 OR] \n \xa0 \xa0 (4)^[位元 XOR] \n 3.比較運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n > \n a>b \n 若a大於b時傳回True，反之則傳回False。 \n \n \n < \n a<b \n 若a小於b時傳回True，反之則傳回False。 \n \n \n >= \n a>=b \n 若a大於等於b時傳回True，反之則傳回False。 \n \n \n <= \n a<=b \n 若a小於等於 b 時傳回True，反之則傳回False。 \n \n \n == \n a==b \n 若a等於b 時傳回True，反之則傳回False。 \n \n \n != \n a!=b \n 若a不等於b 時傳回True，反之則傳回False。 \n \n \n \n', 'tags': '', 'url': '運算子個別解說(一).html'}, {'title': 'Day6(0121)', 'text': '', 'tags': '', 'url': 'Day6(0121).html'}, {'title': '運算子個別解說(二)', 'text': '4.指派運算子 \n \n \n \n 運算子 \n 語法 \n 說明 \n \n \n = \n a=b \n 將b指派給a，將a的值設定為b的值。 \n \n \n += \n a+=b \n 相當於a=a+b。 \n \n \n -= \n a-=b \n 相當於a=a-b。 \n \n \n *= \n a*=b \n 相當於a=a*b。 \n \n \n /= \n a/=b \n 相當於a=a/b。 \n \n \n //= \n a//=b \n 相當於a=a//b。 \n \n \n %= \n a%=b \n 相當於a=a%b。 \n \n \n **= \n a**=b \n 相當於a=a**b。 \n \n \n <<= \n a<<=b \n 相當於a=a<<b。 \n \n \n >>= \n a>>=b \n 相當於a=a>>b。 \n \n \n &= \n a&=b \n 相當於a=a&b。 \n \n \n |= \n a|=b \n 相當於a=a|b。 \n \n \n ^= \n a^=b \n 相當於a=a^b。 \n \n \n \n 5.邏輯運算子 \n \xa0 \xa0 (1)and:若a and b， 表示 a與b皆為True則傳回True，反之傳回False。 \n \xa0 \xa0 (2)or: 若a or b，表示a與b皆為False則傳回False，反之傳回True。 \n \xa0 \xa0 (3)not:若not a，表示將a進行邏輯否定，若a的值為True，傳回False，反之傳回True。 \n', 'tags': '', 'url': '運算子個別解說(二).html'}, {'title': 'Day7(0122)', 'text': '', 'tags': '', 'url': 'Day7(0122).html'}, {'title': '運算子的優先順序', 'text': '運算子的優先順序由高到低為: \n 1.()、[]、{}。 \n 2.a[i]、a[i:j]、a()、a.b、a.b()。 \n 3.a**b。 \n 4.+a、-a、~a。 \n 5.a*b、a/b、a//b、a%b。 \n 6.a+b、a-b。 \n 7.a<<b、a>>b。 \n 8.a&b。 \n 9.a^b。 \n 10.a|b。 \n 11.>、<、>=、<=、==、!=。 \n 12.not a。 \n 13.a and b。 \n 14.a or b。 \n', 'tags': '', 'url': '運算子的優先順序.html'}, {'title': '輸出', 'text': "大多數程式在執行完畢後，會將結果輸出到螢幕。可利用Python內建的print()函數來印出指定的字串。 \n print()函式的語法如下: \n print(value,...,sep='',end='\\n',file=sys.stdout) \n value:用來設定要印出的值。 \n sep: 用來設定隔開兩個值的字串，可省略，省略代表使用預設值''(一個空白) \n end:用來設定印出最後一個值後所要加上的字串，可省略，省略代表使用預設值'\\n'(換行) \n file:用來設定輸出裝置，可省略，省略代表使用預設值sys.stdout(輸出至螢幕)。 \n", 'tags': '', 'url': '輸出.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'Day8(0123)', 'text': '', 'tags': '', 'url': 'Day8(0123).html'}, {'title': '輸入', 'text': '使用內建的input()函式取得輸入的資料 \n >>>userNumber = input("請輸入學號:")\n請輸入學號: 40823131\n##上列按下enter後將會跳回\n>>> \n 之後檢驗 \n >>>userNumber\n##按下enter後則出現\n\'40823131\'\n>>> \n 得到上列字串後，若需進行計算則需使用內建的eval()將字串轉換為數值。 \n 使用上述函式寫出利用輸入半徑，用來計算圓面積的程式，如下。 \n CircleArea.py \n', 'tags': '', 'url': '輸入.html'}, {'title': 'Day9(0124)', 'text': '', 'tags': '', 'url': 'Day9(0124).html'}, {'title': '常用內建數值函數', 'text': 'abs(X):傳回X的絕對值。 \n min(X1,X2,X3,......) :傳回參數數值中的最小值。 \n max( X1,X2,X3,...... ) :傳回參數數值中的最大值。 \n hex( X ) :傳回整數X參數由十進位轉為十六進位的字串，前面會加上0x。 \n oct( X ) :傳回整數X參數由十進位轉為八進位的字串，前面會加上0o。 \n bin( X ) :傳回整數X參數由十進位轉為二進位的字串 ，前面會加上0b。 \n int( X ) :傳回X的整數部分，小數將被直接捨去。 \n round( X,precision ) :傳回與X最接近的整數(四捨五入)，若要設定精確度到小數點後幾位，可利用選擇性參數precision設定。 \n pow( X,Y ) :傳回X的Y次方值。 \n float(" X ) :傳回字串X轉換成浮點數的結果。 \n complex( X ) :傳回字串X轉換成複數的結果。 \n', 'tags': '', 'url': '常用內建數值函數.html'}, {'title': 'Day10(0125)', 'text': '', 'tags': '', 'url': 'Day10(0125).html'}, {'title': '導入數學模組', 'text': '在Python中若需使用數學函式，需先導入數學模組(module)，如下。 \n >>>import math \n', 'tags': '', 'url': '導入數學模組.html'}, {'title': '常用數學函式', 'text': '1.math.pi、math.e、math.nan、math.inf:分別表示圓周率、自然對數e、NaN(not a number)、正無限大，負無限大則為-math.inf。 \n 2.math.ceil(X):傳回 大於等於X的最小整數，例如: \n >>>math.ceil(8.999)\n9 \n 3.math.fabs(X):傳回X的浮點數絕對值，例如: \n >>>math.fabs(-5)\n5.0 \n 4.math.factorial(X):傳回正整數X的階層值，例如: \n >>>math.factorial(4)    #(即為4!=4*3*2*1=24)\n24 \n 5.math.floor(X):傳回 小於等於X的最大整數。 \n 6.math.radians(X):傳回角度X轉為弳度的結果。 \n 7.math.degrees(X):傳回弳度X轉為角度的結果。 \n 8.math.sin(X)、math.cos (X)、math.tan (X)、math.as in(X)、math.acos (X)、math.atan (X)三角函式:分別傳回X的正弦值、餘弦值、正切值、反正弦值、反餘弦值、反正切值，需注意的適當中的參數X需為弳度而非角度，可利用上述math.radians函式將角度轉換為弳度。 \n', 'tags': '', 'url': '常用數學函式.html'}, {'title': '亂數函式', 'text': '首先匯入亂數模組。 \n >>>import random \n 1.random.randint(X,Y):傳回一個大於等於X並小於等於Y的隨機整數。 \n 2. random.random():傳回一個大於等於0.0並小於1.0的隨機浮點數。 \n 3.random.shuffle(X):將X中的元素進行隨機重排。 \n 利用上述函式寫出簡易猜數字的程式如下。 \n random.py \n', 'tags': '', 'url': '亂數函式.html'}, {'title': 'Day11(0126)', 'text': '', 'tags': '', 'url': 'Day11(0126).html'}, {'title': '逸脫序列', 'text': '對於一些無法顯示在螢幕上的符號，可以利用 逸脫序列在這些符號前加上反斜線(\\)，便能顯示出來。 \n \n \n \n 逸脫序列 \n 意義 \n \n \n \\\\ \n 印出反斜線(\\)。 \n \n \n \\\' \n 印出單引號(\')。 \n \n \n \\" \n 印出雙引號(")。 \n \n \n \\a \n 響鈴(Bell)。 \n \n \n \\b \n 倒退鍵(Backspace)。 \n \n \n \\f \n 換頁(Formfeed)。 \n \n \n \\n \n 換行(Linefeed)。 \n \n \n \\r \n 歸位(Carriage Return)。 \n \n \n \\t \n [Tab]鍵(Horizontal)。 \n \n \n \\v \n 垂直定位(Vertical Tab)。 \n \n \n \\ooo \n ASCII字元，ooo為八進位整數。 \n \n \n \\x hh \n ASCII字元， hh 為十六進位整數。 \n \n \n \\N{ name } \n Unicode字元， name 為字元名稱。 \n \n \n \\u xxxx \n Unicode字元， xxxx 為16-bit十六進位整數。 \n \n \n \\U xxxxxxxx \n Unicode字元， xxxxxxxx 為32-bit十六進位整數。 \n \n \n \n', 'tags': '', 'url': '逸脫序列.html'}, {'title': '常用內建字串函式', 'text': '1.len(x):傳回s字串的長度，也就是s總共包含幾個字元，例如: \n >>>len("hello")\n5     #hello總共由5個字元組成 \n 2.str(n):傳回數值參數n轉為字串的結果，例如: \n >>>str(125.5)\n\'125.5\' \n', 'tags': '', 'url': '常用內建字串函式.html'}, {'title': '連接運算子', 'text': '1.+運算子可用來將字串串起來，如下。 \n >>>"我為"+"人人"+"，"+"人人"+"為我"+"。"\n我為人人，人人為我。 \n', 'tags': '', 'url': '連接運算子.html'}, {'title': '重複運算子', 'text': '1.*運算子可以用來重複字串，如下。 \n >>>5 * "wow!"\n\'wow!wow!wow!wow!wow!\' \n', 'tags': '', 'url': '重複運算子.html'}, {'title': 'in ,not in運算子', 'text': '1.in運算子:可以利用它來檢查字串中是否有我們指定的字串在其中，如下。 \n >>>"go" in "good"\nTrue \n 2.not in運算子:與in運算子相反，可以利用它來檢查字串中是否沒有我們指定的字串在其中，如下。 \n >>>"go" not in "good"\nFalse \n', 'tags': '', 'url': 'in ,not in運算子.html'}, {'title': '索引運算子[]與片段運算子', 'text': '利用索引運算子[]可以取得字串中的字元，如下。 \n >>>s = "Python程式設計"\n>>>s[3]\nh \n 也可使用片段運算子來指定範圍索引，如下。 \n >>>s = "Python程式設計"\n>>>s[2:4] #不包含第四字元(只索引2~3字元)\nth \n', 'tags': '', 'url': '索引運算子[]與片段運算子.html'}, {'title': 'Day12(0127)', 'text': '', 'tags': '', 'url': 'Day12(0127).html'}, {'title': '字串處理方法', 'text': '1.id(X):取得X指向之物件的id編號。 \n 2.type(X):取得X之型別。 \n 3.print(X):印出X的值。 \n', 'tags': '', 'url': '字串處理方法.html'}, {'title': '常用字串轉換方法', 'text': '1.str.upper(s):傳回s的所有字元轉為大寫的字串。 \n 2.str.lower(s): 傳回s的所有字元轉為小寫的字串。 \n 3.str.replace(old,new): 傳回將字串參數old取代為字串參數new的字串。 \n 4.str.capitalize(s): 傳回s的第一個字元轉換為大寫的字串。 \n 5.str.title(s): 傳回s的每一個單字的第一個字元 轉換為大寫的字串。 \n', 'tags': '', 'url': '常用字串轉換方法.html'}, {'title': '搜尋字串方法', 'text': '1.str.count(s):傳回目標字串中出現s字串的次數。 \n 2.str.startswith(s):若目標字串中的開頭為s字串傳回True，反之則傳回False。 \n 3.str.endswith(s):若目標字串中的結尾為s字串傳回 True ，反之則傳回False。 \n', 'tags': '', 'url': '搜尋字串方法.html'}, {'title': '常用字串測試方法', 'text': '1.str.isalpha(s):若s中所有字元皆為英文字母傳回True，反之則傳回False。 \n 2.str.isdigit(s): 若s中所有字元皆為阿拉伯數字傳回True，反之則傳回False。 \n 3.str.isalnum(s): 若s中所有字元皆為英文字母及阿拉伯數字傳回True，反之則傳回False。 \n 4.str.is upper(s):若s中所有字元皆為大寫英文字母傳回True，反之則傳回False。 \n 5.str.islower(s):若s中所有字元皆為小寫英文字母傳回True，反之則傳回False。 \n \n', 'tags': '', 'url': '常用字串測試方法.html'}, {'title': 'Day13(0128)', 'text': '\n', 'tags': '', 'url': 'Day13(0128).html'}, {'title': '字串格式化方法', 'text': '1.str.center(w):傳回欄位寬度為w所指定的字元數，並且為置中的字串。 \n 2.str.ljust(w): 傳回欄位寬度為w所指定的字元數，並且為靠左的字串。 \n 3.str.rjust(w): 傳回欄位寬度為w所指定的字元數，並且為靠右的字串。 \n 4.str.zfill(w):傳回欄位寬度為w所指定的字元數，並且 左側填上0、正負號(+,-)皆保留在開頭的字串。 \n 5.str.format(spec):利用spec所指定的格式將字串格式化。 \n', 'tags': '', 'url': '字串格式化方法.html'}, {'title': '刪除指定字元方法', 'text': '1.str.strip(X):從字串兩側刪除指定字元。 \n 2.str.lstrip(X):從字串左側刪除指定字元。 \n 3.str.rstrip(X):從字串右 側刪除指定字元。 \n', 'tags': '', 'url': '刪除指定字元方法.html'}, {'title': 'Day14(0129)', 'text': '', 'tags': '', 'url': 'Day14(0129).html'}, {'title': '數值與字串格式化', 'text': "使用format()函式將數值與字串格式化，其語法如下，根據選擇性參數spec所指定的格式將參數value格式化。 \n format(value,spec) \n 參數spec的格式如下: \n [[fill]align][sign][#][0][width][,][.precision][type] \n 1.[align]:設定對齊方式，有'<'、'>'、'^'、'='等值，分別表示靠左、靠右、置中、正負符號和數字之間的空位填滿0，數值預設圍靠右，其他資料預設為靠左。 \n 2.[fill]:設定填滿空位的字元。 \n 3.[sign]:設定正負符號，只在負數前加上負號、在正數前則加上一個空白，預設為'-'。 \n 4.[#]:設定在二、八、十六進位數值前加上'0b'、'0o'或'0x'。 \n 5.[0]:設定用0填滿空位。 \n 6.[width]:設定欄寬為幾字元。 \n 7.[,]:設定加上千分位符號。 \n 8.[.precision]:設定精確度為小數幾位。 \n 9.[type]:設定表示法類型，有'b'(二進位)、'c'(字元)、'd'(十進位)、'e'(科學記號)、'E'(科學記號)、'f'(小數點，預設精確度為六位)、'F'( 小數點) 、'g'(一般格式)、'G' (一般格式) 、'n'(數值)、'o'(八進位)、's'(字串)、'x'(十六進位)、'X' (十六進位) 、'%'(百分比)等值。 \n", 'tags': '', 'url': '數值與字串格式化.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'Day15(0130)', 'text': '', 'tags': '', 'url': 'Day15(0130).html'}, {'title': '認識流程控制', 'text': "流程控制分成下列兩種類型。 \n 1.選擇結構:用來判斷條件式，根據結果True或False執行不同的敘述，Python支援的選擇結構為if。 \n 2.迴圈結構:用於重複執行，Python支援的迴圈函數為for與while。 \n 流程控制中將下列的值判斷為False，如下。 \n 1.None \n 2.False \n 3.等於0的數值 \n 4.空序列，例如:(''空字串)、([]空串列)、(()空序對)。 \n 5.空對映，例如({}空集合)。 \n", 'tags': '', 'url': '認識流程控制.html'}, {'title': 'if選擇結構', 'text': '1.單向if:意義為「若...就...」，條件式condition若傳回True，就繼續執行statement(s)。語法如下: \n if condition:\n        statement(s) \n 2.雙向if...else: 意義為「若...就...否則...」，屬於雙向選擇，若condition傳回True，執行statement1，否則執行statement2。語法如下: \n if condition:\n        statements1\nelse:\n        statements2 \n 3.多向if...elif...else: 意義為「若...就...否則... 若...」，屬於多向選擇，判斷condition1，若condition1傳回True就執行statement1，否則判斷condition2，若condition2傳回True就執行statement2，否則判斷condition3...依此類推，所以statement1~statementN+1中只有一組會被執行。語法如下: \n if condition1:\n        statements1\nelif condition2:\n        statements2\nelif condition3:\n        statements3\n...\n\nelse:\n        statementsN+1 \n 4.巢狀if結構:顧名思義指的是if敘述裡包含其他if敘述，且沒有深度限制，但一般還是較常使用多向if...elif...else來做使用較佳。例如: \n num = eval(input("請您輸入1~5中的任一整數:"))\nif num ==1:\n        print("ONE")\nelse:\n        if num ==2:\n                print("TWO")\n        else:\n                if num ==3:\n                        print("THREE")\n                else:\n                        if num ==4:\n                                print("FOUR")\n                        else:\n                                if num ==5:\n                                        print("FIVE")\n                                else:\n                                        print("您輸入的資料超過範圍")\n\n\n \n', 'tags': '', 'url': 'if選擇結構.html'}, {'title': 'Day16(0131)', 'text': '', 'tags': '', 'url': 'Day16(0131).html'}, {'title': 'for迴圈(for loop)', 'text': 'for迴圈主要用來解決重複執行的問題。例如: \n for var in iterator:\n        statements1\n[else:\n        statements2] \n', 'tags': '', 'url': 'for迴圈(for loop).html'}, {'title': '使用range物件作為迴圈迭代的物件', 'text': 'range語法，如下。 \n range(stop)\nrange(start,stop,step) \n 1.stop:為終止值。 \n 2.start:為起始值。 \n 3.step:為間隔值。 \n 在for迴圈中使用range進行迭代，如下。 \n for i in range(5)\n        print(i) \n 上述程式結果為 \n 0\n1\n2\n3\n4 \n', 'tags': '', 'url': '使用range物件作為迴圈迭代的物件.html'}, {'title': 'Day17(0201)', 'text': '', 'tags': '', 'url': 'Day17(0201).html'}, {'title': '使用list作為迴圈迭代的物件', 'text': '可以藉由list加上迴圈來算出list內的數字總和，如下。 \n list1 = [15,30,40,60]\nsum = 0\nfor i in list1:\n        sum = sum + i\nprint("總合為",sum) \n', 'tags': '', 'url': '使用list作為迴圈迭代的物件.html'}, {'title': '使用字串作為迴圈迭代的物件', 'text': '在for迴圈中使用字串進行迭代，如下。 \n str1 = "hello"\nfor i in str1:\n        print(i)\n# 結果如下\n\t\nh\ne\nl\nl\no\n \n', 'tags': '', 'url': '使用字串作為迴圈迭代的物件.html'}, {'title': '巢狀for迴圈', 'text': "使用巢狀for迴圈列出九九乘法表，如下。 \n result1,result2 = '' , ''\n\nfor i in range (1,10):\n\tresult1 = ''\n\tfor j in range(1,10):\n                result1 = result1 + str(i) + '*' + str(j) + '=' + str(i*j) + '\\t'\n\tresult2 = result2 + result1 + '\\n'\n\n\t\nprint (result2) \n", 'tags': '', 'url': '巢狀for迴圈.html'}, {'title': 'Day18(0202)', 'text': '', 'tags': '', 'url': 'Day18(0202).html'}, {'title': 'while迴圈', 'text': 'while迴圈是以條件式是否成立成立作為是否執行迴圈的根據，又稱為條件式迴圈，語法如下。 \n while condition:\n        statements1\n[else:\n        statements2] \n 流程在進入迴圈時會先檢查condition是否成立，若成立則執行迴圈主體statements1，然後再次跳回while檢查condition是否成立，若成立則執行statements1， 然後再次跳回while檢查condition是否成立，就如此週而復始，直到condition為不成立時，執行statements2，最後跳出while迴圈。 \n pass、break與continue敘述 \n pass：不做任何事情，所有的程式都將繼續。 \n break：強制跳出 [整個] 迴圈。 \n continue：強制跳出 [本次] 迴圈，繼續進入下一圈。 \n', 'tags': '', 'url': 'while迴圈.html'}, {'title': 'Day19(0203)', 'text': '', 'tags': '', 'url': 'Day19(0203).html'}, {'title': '認識函式', 'text': '函式是將功能或重複使用的敘述寫成獨立之程式單元，然後給予名稱，以利後續呼叫即可使用，使用函式的優點為: \n 1.利用呼叫，可不必重複撰寫相同的敘述。 \n 2.使用函式後程式將更加精簡。 \n 3.程式可讀性提高。 \n 4.邏輯性和正確性提高，較容易理解，也較好除錯、修改及維護。 \n 而缺點為: \n 1.使用函是會使程式之執行速度減慢，因為相較直接將敘述寫進程式裡的方式還要再多一道呼叫的手續。 \n', 'tags': '', 'url': '認識函式.html'}, {'title': '定義函式', 'text': '除了先前提到的內建函式外，若要客製化的功能需要自定義函式。 \n 可以利用def關鍵字定義函式，語法如下: \n def functionName(parameters):\n        statements\n        [return|return value]\n        [statements] \n 1.def:此關鍵字表示用來定義函式。 \n 2.functionName:函式名稱命名，可使用英文字母(大小寫有所區分)及底線(_)、數字及中文，但不建議使用中文命名。 \n 3.parameters:函式參數，可以有0到無數個，若無參數需保留小括號，若有參數，參數間以逗號(,)隔開，可利用參數傳遞資料給函式。 \n 4.statements:函式主體，用來執行指定動作。 \n 5.[return|return value]:若要將程式的控制權由函式內部轉至呼叫函式的地方可使用return敘述。value式函式之傳回值，若程式無傳回值return可省略。 \n', 'tags': '', 'url': '定義函式.html'}, {'title': 'Day20(0204)', 'text': '', 'tags': '', 'url': 'Day20(0204).html'}, {'title': '呼叫函式', 'text': '函式定義後需呼叫才會執行，若函式有參數時，參數數量及順序需正確無誤，即使沒有參數，還是需將小括號()保留，語法如下: \n functionName(parameters) \n \n', 'tags': '', 'url': '呼叫函式.html'}, {'title': '函式參數', 'text': '參數(parameter)用來傳遞資料進入函式。 \n 1.參數傳遞方式 \n \xa0 \xa0 (1)傳值呼叫:當參數屬於不可改變內容的物件，如數值、字串、tuple(序對)，就會採取傳值呼叫。 \n \xa0 \xa0 (2)傳址呼叫: 當參數屬於可改變內容的物件，如list(串列)、set(集合)、dict(字典)，就會採取傳址呼叫，傳遞給函式的為參數位址，而非參數值。 \n 2.關鍵字引數 \n \xa0 \xa0 Python內預設採取位置引數，函式呼叫中的引數順序需對應函式定義中的參數順序，如下: \n #定義函式trapezoidArea\n\ndef trapezoidArea(top,bottom,height)\n\n#呼叫時應該寫為\n\ntrapezoidArea(10,20,5)\n\n#此時的\n#10為top(上底)\n#20為bottom(下底)\n#5為height(高) \n 3.預設引數值 \n 可以在定義函式時設定預設引數值，當呼叫時沒有提供某個引數時，將採用預先設定好的預設引數值，如下。 \n def myName(name,gender = "男"):\n        print("我的名字是",name,"，性別",gender,"。")\n\nmyName("Simon")\n#輸出為\n我的名字是Simon，性別男。 \n', 'tags': '', 'url': '函式參數.html'}, {'title': 'Day21(0205)', 'text': '', 'tags': '', 'url': 'Day21(0205).html'}, {'title': '函式的傳回值', 'text': '在def區塊內的敘述執行完畢之前，程式控制權都不會離開函式，若我們可能需要提早離開函式，返回呼叫函式的地方，此時可以使用return敘述或在return後加上傳回值，如下: \n def divmod(a,b)\n        div = a//b\n        mod = a%b\n        return div,mod\n\nx,y = divmod(300,3)\nprint("300除以3的商數為",x,"，餘數為",y,"。")\n\n#得到以下結果\n#300除以3的商數為100，餘數為0。 \n', 'tags': '', 'url': '函式的傳回值.html'}, {'title': '全域變數與區域變數', 'text': '變數的有效範圍(scope)，這指的是程式的哪些敘述皆能存取變數的值，大部分的變數都只有一種有效範圍，就是程式所有敘述皆可存取的變數之值，稱為全域變數(global variable)，但在函式內定義的變數則稱為區域變數(local variable)，只有函式內的敘述能夠存取區域變數的值。例如: \n def f1()\n        x = 1\n        print(x)\n\nf1() \n', 'tags': '', 'url': '全域變數與區域變數.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'Day22(0206)', 'text': '', 'tags': '', 'url': 'Day22(0206).html'}, {'title': '遞迴函式', 'text': '遞迴函式為可以呼叫自己本身的函式，若函式f1()呼叫函式f2()，而函式f2()又在某種情況下呼叫f1()，此情況函式f1()也可算是一個遞迴程式。例如: \n result = 1\n\nfor i in range(1,7):\n        result = result * i\n\n\nprint("5! =",result) \n', 'tags': '', 'url': '遞迴函式.html'}, {'title': 'lambda 運算式', 'text': 'lambda關鍵字可以用來建立較小的匿名函式，它指的即是沒有名稱的函式，語法如下，arg1,arg2,...的後面須加上括號: \n lambda arg1,arg2,...:expression \n expression相當於函式定義主體，可在expression中使用arg1,arg2...這些參數，如下為將lambda運算是產生的匿名函式指派給變數 mul ，此匿名函數將傳回參數x,y相乘的結果: \n >>>mul = lambda x,y:x * y\n>>>print(add(50,100))\n5000 \n', 'tags': '', 'url': 'lambda 運算式.html'}, {'title': '日期時間函式(一)', 'text': '#導入time模組\n>>>import time \n 1.time.daylight:此屬性表示本地時間是否使用日光節約時間，1表示是，0表示否，以台灣為例，值為0。 \n 2.time.timezone: 此屬性表示本地時間與UTC時間相差多少秒。 \n 3.time.altzone: 此屬性表示本地時間與UTC日光節約時間相差多少秒。 \n 4.time.time():傳回從1970年1月1日上午12時00分到目前的UTC時間總共經過多少秒，Python示已tick作為時間計數單位，1 tick等於1微秒(10^-6秒)。 \n 5.time.clock():第一次呼叫會傳回此函式的執行時間，第二次呼叫會傳回這一次和上一次呼叫此函數相差多少秒。 \n 6.time.gmtime:(secs):傳回從 1970年1月1日上午12時00分經過time.time()或選擇性參數secs所指定之秒數的時間，即目前的UTC時間。 \n', 'tags': '', 'url': '日期時間函式(一).html'}, {'title': 'Day23(0207)', 'text': '', 'tags': '', 'url': 'Day23(0207).html'}, {'title': '日期時間函式(二)', 'text': '7.time.localtime(secs):與 time.gmtime相似，但傳回的是目前的本地時間。 \n 8. time.asctime(t):以str型別傳回目前的本地時間或選擇性參數t指定的時間。 \n 9. time.ctime(secs):與time.asctime，但選擇性參數secs是從1970年1月1日上午12時00分所經過的秒數。 \n 10. time.mktime(t):傳回從1970年1月1日上午12時00分到參數t指定的時間所經過的秒數。 \n 11.time.sleep(secs):另Python暫停參數secs所指定的秒數。 \n 12.time.strftime(format,t):根據參數format所指定的格式，將time.gmtime()或time.localtime()函式傳回目前的時間，轉換為字串。 \n', 'tags': '', 'url': '日期時間函式(二).html'}, {'title': 'calendar模組', 'text': '匯入calendar模組 \n >>>import calendar \n 1. calendar.firstweekday():傳回一周的第一個工作天，預設值為0表示星期一。 \n 2. calendar.setfirstweekday(weekday):將一週的第一個工作天設定為參數weekday所指定的日子，0~6表示星期一~星期日，例如: \n #將第一個工作天設為星期二\n>>>calendar.setfirstweekday(1)\n>>>calendar.firstweekday()\n1 \n 3. calendar.isleap(year):若指定之year參數為閏年，就傳回True，否則傳回False。 \n 4. calendar.weekday(year,month,day):傳回參數year、month、day所指定的年月日是星期幾，0~6表示星期一到星期日。 \n 5. calendar.monthrange(year,month):傳回兩個整數，第一個整數為year年month月的第一天是星期幾，第二個整數為該月份有幾天。 \n 6. calendar.calendar(year):傳回參數year所指定之年份月曆。 \n 7.calendar.month(year,month):傳回參數year和參數month所指定之年份與月份的日曆。 \n', 'tags': '', 'url': 'calendar模組.html'}, {'title': 'Day24(0208)', 'text': '', 'tags': '', 'url': 'Day24(0208).html'}, {'title': 'list串列(一)', 'text': 'list串列是由一連串資料所組成、有順序且可改變內容(mutable)的序列(sequence)，前後以中括號標示，串列中的資料以逗號分開。 \n 建立串列:可以使用Python內建的list()函式建立串列，例如: \n >>>list1 = list()\n>>>list1\n[] #空串列\n\n>>>list2 = ([1,2,3])\n>>>list2\n[1,2,3] \n 利用range物件建立串列，例如: \n >>>list3 = list(range(6))\n>>>list3\n[0,1,2,3,4,5] \n 也可使用str.split([sep])方法，根據sep選擇性參數所指定的分隔字串將字串分隔成串列，然後傳回串列，若sep省略則表示分隔字串為空白，例如: \n >>> \'1,2,3\'.split(\',\')\n[\'1\', \'2\', \'3\'] \n 內建函式 \n 我在Day9(0124)中有提到過的內建函式中有些亦適用於串列，例如: \n \xa0 \xa0 1.len(L):傳回串列參數L的長度，也就是包含幾個元素。 \n \xa0 \xa0 2.max(L):傳回串列 參數L中 最大的元素。 \n \xa0 \xa0 3.min(L) :傳回串列參數L中最小的元素。 \n \xa0 \xa0 4.sum(L):傳回串列參數L中元素的總和。 \n 連接運算子 \n \xa0 \xa0 1.+運算子可以用來連接串列，例如: \n >>>[1,2,3]+["Taiwan","Japan","Korea"]\n[1,2,3,\'Taiwan\',\'Japan\',\'Korea\'] \n 重複運算子 \n \xa0 \xa0 1.*運算子也可以用來重複串列，例如: \n >>>3*[1,2,3]\n[1,2,3,1,2,3,1,2,3] \n', 'tags': '', 'url': 'list串列(一).html'}, {'title': 'Day25(0209)', 'text': '', 'tags': '', 'url': 'Day25(0209).html'}, {'title': 'list串列(二)', 'text': '比較運算子 \n \xa0 \xa0 1.比較運算子(>、<、>=、<=、==、!=)也可以用來比較兩個串列的串列的大小或相等與否，例如: \n >>>[1,2,3] != [1,2,3,4]\nTrue\n>>>[1,2,3] == [3,2,1]\nFalse\n \n in & not in運算子 \n \xa0 \xa0 1.in運算子:用來檢查某個元素是否存在於串列中，例如: \n >>>"Taiwan" in [1,"Taiwan",2]\nTrue \n \xa0 \xa0 2.not\xa0 in運算子:用來檢查某個元素是否不 存在於串列中，例如: \n >>>"Thailand" not in [1,Taiwan,2]\nTrue \n 索引 & 片段運算子 \n \xa0 \xa0 1.索引運算子[]:用於取得串列中的元素，舉例來說，假設變數L值為[1,2,3,4,5]，索引0表示由左端開始，索引-1則由右端開始索引，例如: \n >>>L = [1,2,3,4,5]\n>>>L[0]\n1\n>>>L = [1,2,3,4,5]\n>>>L[-1]\n5 \n \xa0 \xa0 2.片段運算子[strat:end]:用來指定索引範圍，例如: \n >>>L = [1,2,3,4,5]\n>>>L[2:4]\n[3,4] \n 串列處理方法 \n \xa0 \xa0 1.list.append(x):將參數x所指定的元素加入串列尾端。 \n \xa0 \xa0 2. list.extend(L):將參數L所指定的串列的所有元素加入串列。 \n \xa0 \xa0 3. list.insert(i,x):將參數x所指定的元素插入串列中所引為參數i的位置。 \n \xa0 \xa0 4. list.remove(x):從串列中刪除第一個值為參數為x的元素。 \n \xa0 \xa0 5. list.pop[i]:從串列中刪除索引為選擇型參數i的元素並傳回該元素，若未指定i，則刪除最後一個元素，並傳回該元素。 \n \xa0 \xa0 6. list.index(x):傳回參數x所指定的元素第一次出現在串列中的索引。 \n \xa0 \xa0 7. list.count(x):傳回參數x所指定的元素出現在串列中的次數。 \n \xa0 \xa0 8. list.sort():將串列中的元素由小到大排序。 \n \xa0 \xa0 9. list.reverse():將串列中元素順序反轉過來。 \n \xa0 \xa0 10. list.copy():複製串列。 \n \xa0 \xa0 11.list.clear:從串列中刪除所有元素。 \n', 'tags': '', 'url': 'list串列(二).html'}, {'title': 'Day26(0210)', 'text': '', 'tags': '', 'url': 'Day26(0210).html'}, {'title': 'list串列(三)', 'text': '串列解析 \n 串列解析提供了更簡潔有力的方式來建立串列，利用for or if來進行串列的建立，例如: \n >>>list1 = [i for i in range(10) if i < 8]\n>>>list1\n[0,1,2,3,4,5,6,7] \n del敘述 \n del敘述可用來從串列中刪除指定索引之元素，例如: \n >>>L = [1,2,3,4,5,6,7]\n>>>del L[0]\n>>>L\n[2,3,4,5,6,7] \n 此外del敘述也可用來刪除變數，例如: \n >>> L = [1,2,3,4,5]\n>>> del L\n>>> L\nTraceback (most recent call last):\n  File "<pyshell#3>", line 1, in <module>\n    L\nNameError: name \'L\' is not defined \n 二維串列 \n 二維串列其實就是巢狀串列，串列中的元素也是串列，以下列成績表格為例: \n \n \n \n \n math \n english \n Chinese \n \n \n student A \n 90 \n 80 \n 60 \n \n \n student B \n 60 \n 98 \n 97 \n \n \n student C \n 95 \n 75 \n 75 \n \n \n \n \n 上列成績表格寫為串列: \n >>>grades = [[90,80,60],[60,98,97],[95,75,75]] \n 若要存取此二維串列，必須使用兩個索引，第一個索引為列索引(row index)，第二個為行索引，如下列表格所示: \n \n \n \n \n math \n english \n Chinese \n \n \n student A \n [0][0] \n [0][1] \n [0][2] \n \n \n student B \n [1][0] \n [1][1] \n [1][2] \n \n \n student C \n [2][0] \n [2][1] \n [2][2] \n \n \n \n 利用此二索引檢驗是否正確，如下: \n >>>grades = [[90,80,60],[60,98,97],[95,75,75]]\n>>>grades[0]\n[90,80,60]\n>>>grades[0][0]\n90 \n', 'tags': '', 'url': 'list串列(三).html'}, {'title': 'Day27(0211)', 'text': '', 'tags': '', 'url': 'Day27(0211).html'}, {'title': 'tuple序對', 'text': 'tuple序對是由一連串資料所組成、不可改變內容(immutable)且有順序的序列(sequence)。序對中的資料以逗號隔開，前後已中括號標示，例如: \n >>>(1,"Taiwan",2,"Japan")\n(1,\'Taiwan\',2,\'Japan\') \n 建立序對 \n 利用Python內建的tuple()函式來建立序對，例如: \n >>>tuple1 = tuple()\n>>>tuple1\n()\n>>>tuple2 = tuple((1,2,3))\n>>>tuple2\n(1,2,3) \n 序對的運算 \n 序對支援所有共同的序列運算，len()、max()、min()和sum()等內建函式均適用於序對，例如: \n >>>L = (1,2,3,4,5)\n>>>len(L)\n5 #序對參數L長度為5 \n 另外也可利用連接運算子(+)、重複運算子(*)、比較運算子 (>、<、>=、<=、==、!=)、in & not in運算子、索引運算子([])、片段運算子([start:end])，例如: \n >>>(1,2,3)+("Taiwan","Japan","Korea")\n(1,2,3,\'Taiwan\',\'Japan\',\'Korea\')\n>>>\n>>>5*(1,2,3)\n(1,2,3,1,2,3,1,2,3,1,2,3,1,2,3)\n>>>\n>>>(1,2,3) == (3,2,1)\nFalse\n>>>\n>>>(1,2,3) != (1,2,3,4)\nTure\n>>>\n>>>(1,2,3) < (1,2,3,4)\nTure\n>>>\n>>>"Taiwan" in (1,"Taiwan",2)\nTrue\n>>>\n>>>"Thailand" not in (1,Taiwan,2)\nTrue\n>>>\n>>>L = (1,2,3,4,5)\n>>>L[0]\n1\n>>>L[1:3]\n(2,3) \n 序對亦支援如下方法: \n 1.tuple.index(x):傳回參數x所指定的元素第一次出現在序對中的索引，例如: \n >>>T = (1,2,3,4,5,6,7,8,9,10)\n>>>T.index(3)\n2 \n 2. tuple.count(x):傳回參數x所指定的元素第一次出現在序對中的次數，例如: \n >>>T = (1,2,3,2,5,6,2,8,9,2)\n>>>T.count(2)\n4 \n', 'tags': '', 'url': 'tuple序對.html'}, {'title': 'Day28(0212)', 'text': '', 'tags': '', 'url': 'Day28(0212).html'}, {'title': 'set集合(一)', 'text': 'set型別用來表示集合，包含無順序不重複且可改變內容的多個資料，前後以大括號標示，資料以逗號隔開，資料型別可以不同，例如: \n >>>{1,"apple",2,"banana"}\n{1,2,"apple","banana"}\n>>>{2,1,"banana","apple"}\n{1,2,"apple","banana"} \n set集合及list串列一樣可以用來存放多個資料，差別在於集合並無順序且不可重，執行效率較list串列好。 \n 建立集合 \n 可使用Python內建set()函式或{}建立集合，例如: \n >>>set1 = set({1,2,3})\n>>>set1\n{1,2,3}\n>>>set2 = set(range(6))\n>>>set2\n{0,1,2,3,4,5} \n 內建函式 \n 之前介紹過的len()、max()、min()和sum()等內建函式皆適用於集合，例如: \n >>> S = {1,2,3,4}\n>>>len(S)\n4\n>>>\n>>>max(S)\n4\n>>>\n>>>min(S)\n1\n>>>\n>>>sum(S)\n10 \n 運算子 \n 集合僅支援in & not in、比較運算子，其餘不支援，原因為集合無順序之分，例如: \n >>>"Taiwan" in {"Taiwan",1,2}\nTrue\n>>> 3 not in {"Taiwan",1,2}\nTrue \n 而比較運算子在此處有不同的定義，如下: \n \xa0 \xa0 1.S1 == S2:若S1與S2包含的元素相同，將傳回True，否則傳回False。 \n \xa0 \xa0 2.S1 != S2: 若S1與S2包含的元素不同，將傳回True， 否則傳回False。 \n \xa0 \xa0 3.S1 <= S2: 若S1是S2的子集合(subset)，將傳回True， 否則傳回False。 \n \xa0 \xa0 4.S1 < S2: 若S1是S2的真子集合(proper subset)，將傳回True， 否則傳回False。 \n \xa0 \xa0 5.S1 >= S2: 若S1是S2的超集合(superset)，將傳回True， 否則傳回False。 \n \xa0 \xa0 6.S1\xa0> S2: 若S1是S2的真超集合(proper superset)，將傳回True， 否則傳回False。 \n', 'tags': '', 'url': 'set集合(一).html'}, {'title': 'W5', 'text': '', 'tags': '', 'url': 'W5.html'}, {'title': 'Day29(0213)', 'text': '', 'tags': '', 'url': 'Day29(0213).html'}, {'title': 'set集合(二)', 'text': '集合處理方法 \n 集合隸屬於set類別，常用之處理方式如下: \n 新增/刪除/複製 \n \xa0 \xa0 1.set.add(x):將參數x指定之元素加入集合。 \n \xa0 \xa0 2.set.remove(x):從集合中刪除x所指定之元素。 \n \xa0 \xa0 3.set.pop():從集合中隨機刪除一個元素，並傳回該元素。 \n \xa0 \xa0 4.set.copy():傳回集合的複本，和原來的集合為兩個不同的物件。 \n \xa0 \xa0 5.set.clear():刪除集合中的所有元素。 \n 子集合/超集合 \n \xa0 \xa0  1.set.issubset(S):若集合為參數S的子集合， 將傳回True， 否則傳回False。 \n \xa0 \xa0 2. set.issuperset(S):若集合為參數S的超集合， 將傳回True， 否則傳回False。 \n 常用集合運算 \n \xa0 \xa0  1.set.isdisjoint(S): 若集合和參數S所指定的集合沒有相同的元素， 將傳回True， 否則傳回False。 \n \xa0 \xa0 2. set.update(S):將 集合和參數S所指定的集合進行聯集，結果將更新到集合。 \n \xa0 \xa0 3. set.intersection_update(S):將 集合和參數S所指定的集合進行交集，結果將更新到集合。 \n \xa0 \xa0 4. set.difference_update(S):將 集合和參數S所指定的集合進行差集，結果將更新到集合。 \n', 'tags': '', 'url': 'set集合(二).html'}, {'title': 'Day30(0214)', 'text': '', 'tags': '', 'url': 'Day30(0214).html'}, {'title': 'dict字典(一)', 'text': 'dict型別用來表示字典，包含無順序、無重複且可改變內容的多個鍵:值對(key:value pair)，簡單來說就是以鍵做為索引來取得字典裡的值，字典前後以大括號標示，各個鍵:值對以逗號隔開，例如: \n >>>{"ID":"40823131","name":"Simon"}\n{\'ID\':\'40823131\',\'name\':\'Simon\'} \n 建立字典 \n 可使用Python內建的dict()函式或{}建立字典，例如: \n >>>A = {"one":1,"two":2,"three":3}\n>>>B = dict({"one":1,"two":2,"three":3})   #同上\n>>>C = dict(one=1,two=2,three=3)   #同上\n>>>D = {}   #空字典 \n 取得/新增/變更/刪除鍵:值對 \n \xa0 \xa0 1.取得:建立字典後可利用鍵取得對映的值，例如: \n >>>A = {"one":1,"two":2,"three":3}\n>>>x = A["one"]\n>>>x\n1 \n \xa0 \xa0 2.新增/變更:當key尚未存在於字典時，就新增一個鍵為key、值為value的鍵:值對;相反的，當key已經存在時則改變鍵:值隊的值為value，例如: \n >>> B = dict({"one":1,"two":2,"three":3})\n>>> B["three"] = 4\n>>> B\n{\'one\': 1, \'two\': 2, \'three\': 4}\n>>> B["four"] = 4 #新增鍵:值對\n>>> B["three"] = 3 #變更\n>>> B\n{\'one\': 1, \'two\': 2, \'three\': 3, \'four\': 4}\n>>>  \n \xa0 \xa0 3.刪除:可利用del敘述刪除鍵為key的鍵:值對，例如: \n >>> B = dict({"one":1,"two":2,"three":3,"four":4})\n>>> del B["four"]\n>>> B\n{\'one\': 1, \'two\': 2, \'three\': 3} \n 內建函式 \n 眾多內建函式僅有len()函式適用於字典，用於傳回字典包含幾個鍵:值對，例如: \n >>> B = dict({"one":1,"two":2,"three":3,"four":4})\n>>>len(B)\n4 \n 運算子 \n 字典僅支援in & not in及部分比較運算子(==、!=)，例如: \n >>> B = dict({"one":1,"two":2,"three":3,"four":4})\n>>>"two" in B\nTrue\n>>>"five" not in B\nTrue\n>>> A = dict({"one":1,"two":2,"three":3,"four":4,"five":5})\n>>> A == B\nFalse\n>>> A != B\nTrue \n', 'tags': '', 'url': 'dict字典(一).html'}, {'title': 'Day31(0215)', 'text': '', 'tags': '', 'url': 'Day31(0215).html'}, {'title': 'dict字典(二)', 'text': '字典處理方法 \n \xa0  \xa0 1.dict.get(key,default):傳回字典中鍵為key所對映的值，若該件不存在，則傳回選擇性參數default，若無 default參數， 則傳回None。 \n \xa0 \xa0 \xa0 2.dict.pop(key,default):從字典中刪除鍵為key的鍵:值對並傳回所對映的值，若該件不存在，則傳回選擇性參數default，若無 default參數，會發生KeyError。 \n \xa0\xa0 \xa0 3.dict.popitem():從字典中隨機刪除一個鍵:值對並傳回該鍵:值對， 若要刪除的目標是空字典，會發生KeyError。 \n \xa0\xa0 \xa0 4.dict.keys():傳回字典所有的鍵。 \n \xa0\xa0 \xa0 5.dict.values():傳回字典所有的值。 \n \xa0\xa0 \xa0 6.dict.items():傳回字典所有的鍵:值對。 \n \xa0\xa0 \xa0 7.dict.copy():傳回字典的複本。 \n \xa0\xa0 \xa0 8.dict.clear():從字典中刪除所有鍵:值對。 \n \xa0\xa0 \xa0 9.dict.update(other):根據參數other所指定的字典更新目前的字典，將兩個字典合併，若有重複的鍵，將以參數other中的鍵:值對取代。 \n', 'tags': '', 'url': 'dict字典(二).html'}, {'title': 'Day32(0216)', 'text': '', 'tags': '', 'url': 'Day32(0216).html'}, {'title': 'turtle模組繪圖(一)', 'text': '匯入turtle模組，如下: \n >>>import turtle \n 輸入以下指令，會出現視窗如圖(一)，起始之中心點箭頭代表海龜，座標為(0,0)，方向向右。 \n >>>turtle.showturtle() \n \n 圖(一) \n 基本turtle指令如下: \n \xa0 \xa0 1.turtle.forward(x):向前走x步，即是向前x像素。 \n \xa0 \xa0 2. turtle.left(x):向左轉x度。 \n \xa0 \xa0 3.turtle.right (x):向右轉 x度。 \n \xa0 \xa0 4. turtle.hideturtle():隱藏箭頭。 \n \xa0 \xa0 5. turtle.showturtle():顯示箭頭。 \n \xa0 \xa0 6. turtle.clear():清除圖形。 \n \xa0 \xa0 7. turtle.reset():重設為起始狀態，包含清除圖形及箭頭復歸。 \n 控制箭頭與畫圖 \n 判斷箭頭狀態 \n turtle模組提供了一些方法用來判斷箭頭目前的狀態，常用的如下: \n \xa0 \xa0 1. turtle.position()、turtle.pos():傳回箭頭座標。 \n \xa0 \xa0 2. turtle.xcor():傳回箭頭在X軸的座標。 \n \xa0 \xa0 3. turtle.ycor():傳回箭頭在Y軸的座標。 \n \xa0 \xa0 4. turtle.heading():傳回箭頭的方向。 \n \xa0 \xa0 5. turtle.towards(x,y):傳回從箭頭的位置到參數(x,y)所指定的位置之間的角度。 \n \xa0 \xa0 6. turtle.distance(x,y):傳回從箭頭的位置到參數(x,y)所指定的位置之間的距離。 \n 移動箭頭與畫圖 \n \xa0 \xa0 1. turtle.forward(x):向前走x步，即是向前x像素，x若為負數則向後退。 \n \xa0 \xa0 2. turtle.back(x):向後 走x步，即是向後x像素，x若為負數則向前進。 \n \xa0 \xa0 3. turtle.left(x)、turtle.lt(x):向左轉 x度。 \n \xa0 \xa0 4. turtle.right (x)、 turtle.rt(x) :向右轉 x度。 \n \xa0 \xa0 5. turtle.home ():將箭頭移至座標(0,0)，方向為向右。 \n \xa0 \xa0 6. turtle.undo( ):取消箭頭上一個工作。 \n \xa0 \xa0 7. turtle.setx(x ):將箭頭移至X軸上參數x所指定的位置，Y軸保持不變。 \n \xa0 \xa0 8. turtle.sety(y ):將箭頭移至Y軸上參數y所指定的位置，X軸保持不變。 \n \xa0 \xa0 9.turtle.goto(x,y)、turtle.setpos(x,y)、turtle.setposition(x,y):將箭頭移至(x,y)，箭頭方向保持不變。 \n \xa0 \xa0 10. turtle.setheading(x):將箭頭的方向設定為參數x所指定的角度，0表示東方，90表示北方，180表示西方，270表示南方。 \n \xa0 \xa0 11. turtle.speed(x ):使用參數x設定箭頭的移動速度，範圍為1~10數字愈大，速度愈快，若未設定參數x則傳回目前箭頭的移動速度。 \n \xa0 \xa0 12. turtle.dot(size,color ):根據參數size所指定的畫筆寬度及參數color所指定的顏色畫出原點。 \n \xa0 \xa0 13. turtle.circle(rad,extent = None,steps = None ):根據參數畫圓，其中參數rad是圓的半徑；選擇性參數extent是角度，用來決定畫出圓的哪些部分，未指定則畫出全圓；選擇性參數steps是邊數，決定要在圓內畫出幾邊形，若未指定，則表示僅畫圓。 \n', 'tags': '', 'url': 'turtle模組繪圖(一).html'}, {'title': 'Day33(0217)', 'text': '', 'tags': '', 'url': 'Day33(0217).html'}, {'title': 'turtle模組繪圖(二)', 'text': '控制畫筆、色彩與填滿色彩 \n 主要為如何提起畫筆、放下畫筆、設定畫筆寬度、畫筆色彩、填充色彩和畫文字。 \n 設定畫筆狀態 \n turtle模組提供了一些方法用來設定畫筆狀態，常用的如下: \n \xa0 \xa0 1.turtle.pensize(width = None)、turtle.width(width = None):根據參數width設定畫筆寬度，若沒有指定參數width，則傳回目前畫筆的寬度。 \n \xa0 \xa0 2. turtle.penup()、 turtle.up():提起畫筆，在移動箭頭時不畫線。 \n \xa0 \xa0 3. turtle.pendown()、turtle.down():放下畫筆，接下來移動則會畫線。 \n \xa0 \xa0 4. turtle.isdown():若畫筆是放下的，就傳回True、否則傳回False。 \n 設定色彩 \n 常用的畫筆色彩與填滿色彩設定如下: \n \xa0 \xa0 1. turtle.pencolor(r,g,b)、turtle.pencolor("ColorName"):根據參數設定畫筆色彩，若未設定則傳回目前畫筆的色彩，(r,g,b)中的三個字母分別代表(紅,綠,藍)。 \n \xa0 \xa0 2.turtle.fillcolor():根據參數填滿色彩，參數指定方式與 turtle.pencolor()相同。 \n \xa0 \xa0 3. turtle.color():根據參數設定畫筆色彩與填滿色彩 ，若未指定則傳回目前畫筆的色彩及填滿色彩。 \n 填滿色彩 \n turtle模組提供了一些方法用來填滿色彩，常用的如下: \n \xa0 \xa0 1.turtle.filling():傳回填滿色彩狀態，True表示正在填滿色彩，False表示否。 \n \xa0 \xa0 2.turtle.begin_fill():在開始填滿色彩之前要呼叫此方法。 \n \xa0 \xa0 3. turtle.end_fill():在結束填滿色彩之前要呼叫此方法。 \n 畫文字 \n 我們可以使用turtle模組提供的turtle.write()方法畫文字，其語法如下。 \n turtle.write(arg,move = False,align = "left",font = ("Arial",8,"normal")) \n \xa0 \xa0 1.arg:設定要畫的文字。 \n \xa0 \xa0 2.move:設定是否將箭頭移到文字的右下角，預設值為False，表示不移動箭頭。 \n \xa0 \xa0 3.align:設定對齊方式，有"left"、"center"或"right"，預設值為"left" \n \xa0 \xa0 4.font:設定文字的字型、大小與樣式，預設值為("arial",8,"normal") \n', 'tags': '', 'url': 'turtle模組繪圖(二).html'}, {'title': 'Day34(0218)', 'text': '', 'tags': '', 'url': 'Day34(0218).html'}, {'title': '檔案存取(一)', 'text': '寫入檔案 \n 使用內建的open()函式建立檔案物件。語法如下，建立成功時，會傳回檔案物件，相反的，建立失敗時，會發生錯誤: \n open(file,mode) \n 1.file:設定欲存取的檔案，包含檔案路徑及名稱。 \n 2.mode:設定檔案物件的存取模式，常用的如下表: \n \n \n \n 模式 \n 說明 \n \n \n "r" \n 讀取模式開啟檔案，檔案指標指向檔案開頭，若檔案不存在，會發生錯誤，此為預設值。 \n \n \n "w" \n 寫入模式開啟檔案並清除原先檔案內容 ，檔案指標指向檔案開頭 ，若檔案不存在，則建立新檔案。 \n \n \n "a" \n 寫入模式開啟檔案 ，檔案指標指向檔案結尾，寫入的資料會新增至原檔案內容後面 ，若檔案不存在，則建立新檔案。 \n \n \n "r+" \n 讀寫模式開啟檔案，檔案指標指向檔案開頭，寫入資料會覆蓋原先檔案的內容，若檔案不存在，就會建立新檔案。 \n \n \n "w+" \n 讀寫模式開啟檔案並清除原先檔案內容 ，檔案指標指向檔案開頭 ，若檔案不存在，則建立新檔案。 \n \n \n "a+" \n 讀寫模式開啟檔案 ，檔案指標指向檔案結尾，寫入的資料會新增至原檔案內容後面 ，若檔案不存在，則建立新檔案。 \n \n \n \n 將資料寫入檔案 \n 1.開啟檔案:使用open()函式建立檔案物件。 \n 2.寫入檔案:使用write(s)方法將參數s所指定的的字串寫進檔案，後傳回寫入文字的個數。 \n 3.關閉檔案:使用close()方法關閉檔案。 \n 例如: \n >>> fileObject = open("C:\\\\test.txt","w")  #開啟檔案或新增檔案\n>>> fileObject.write("白日依山盡")  #寫入檔案\n5\n>>> fileObject.close()  #關閉檔案\n>>> \n', 'tags': '', 'url': '檔案存取(一).html'}, {'title': 'Day35(0219)', 'text': '', 'tags': '', 'url': 'Day35(0219).html'}, {'title': '檔案存取(二)', 'text': '讀取檔案 \n 1. 開啟檔案:使用open()函式建立檔案物件。 \n 2. 寫入檔案:使用read()、readline()或readlines()方法讀取資料。 \n 3.關閉檔案: 使用close()方法關閉檔案。 \n 使用read()方法從檔案讀取資料 \n 利用read()方法讀取資料，語法如下，將從檔案指標處讀取參數n所指定之數量的文字，若n未指定，則傳回所有資料。 \n read(n) \n 實際使用例子如下: \n >>> fileObject = open("C:\\\\test.txt","r")\n>>> content = fileObject.read()\n>>> print(content)\n登鸛雀樓\n白日依山盡，黃河入海流。\n欲窮千里目，更上一層樓。\n>>> content1 = fileObject.read(4)\n>>> print(content1)\n登鸛雀樓\n>>> fileObject.close()\n>>> \n 移動檔案指標 \n 檔案指標會指向目前讀取或星增至哪個位置，若要自行移動需使用seek(offset)方法，將指標移至offset+1個位元組，例如seek(2)是將檔案指標移至第3個位元組，實例如下: \n \n >>> fileObject = open("C:\\\\test.txt","r")\n>>> fileObject.seek(0)\n0\n>>> fileObject.read(1)\n白 \n', 'tags': '', 'url': '檔案存取(二).html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'Day36(0220)', 'text': '', 'tags': '', 'url': 'Day36(0220).html'}, {'title': '檔案存取(三)', 'text': '使用readline()方法從檔案讀取資料 \n 可利用使用readline()方法從檔案讀取一行資料，然後傳回該字串，若傳回空字串，表示抵達檔案結尾，實例如下: \n fileObject = open("test1.txt","r")\n\nline = fileObject.readline()\nwhile line != \'\':\n        print(line)\n        line = fileObject.readline()\n\nfileObject.close() \n \n 使用 readlines()方法從檔案讀取資料 \n >>> fileObject = open("test.txt","r")\n\n>>> content = fileObject.readline()\n>>> print(content)\n[\'登鸛雀樓\\n\',\'白日依山盡，黃河入海流。\\n\',\'欲窮千里目，更上一層樓。\']\n>>> for line in content:\n               print(line)\n\n登鸛雀樓\n白日依山盡，黃河入海流。\n欲窮千里目，更上一層樓。\n\n>>> fileObject.close()\n>>> \n 檢查檔案是否存在 \n 可利用os.path模組提供的isfile(file)函式檢查參數file所指定的檔案是否存在，是就傳回True，否則傳回False。實例如下: \n #匯入 os.path 模組\nimport os.path\n\n#檢查檔案是否存在，是就讀取所有內容，否則印出「此檔案不存在」\nif os.path.isfile("test.txt"):\n        fileObject = open("test.txt","r")\n        for line in fileObject:\n                print(line)\n        fileObject.close()\nelse:\n        print("此檔案不存在") \n with敘述 \n 利用with敘述可自動關閉檔案無須額外呼叫close()，語法如下: \n with open(file,mode) as 檔案物件名稱:\n        ......         #存取檔案的動作 \n', 'tags': '', 'url': '檔案存取(三).html'}, {'title': 'Day37(0221)', 'text': '', 'tags': '', 'url': 'Day37(0221).html'}, {'title': '例外處理', 'text': '認識例外 \n 錯誤的類型 \n \xa0 \xa0 1.語法錯誤(syntax error) \n \xa0 \xa0 2.執行期間錯誤(runtime error) \n \xa0 \xa0 3.邏輯錯誤(logic error) \n 當Python程式發生錯誤時，系統會丟出一個例外(exception)，例如下面的if x > y敘述遺漏了條件式後的冒號，系統會丟出一個SyntaxError:invalid syntax 錯誤訊息，表示無效的語法。 \n >>> if x > y\nSyntaxError:invalid syntax\n>>> \n 例外的類型 \n \xa0 \xa0 1.ImportError:匯入指令執行失敗，可能是模組路徑或名稱錯誤。 \n \xa0 \xa0 2.IndexError:索引運算子的範圍錯誤。 \n \xa0 \xa0 3.MemoryError:記憶體不足。 \n \xa0 \xa0 4.NameError:名稱尚未定義。 \n \xa0 \xa0 5.OverflowError:溢位(算術運算的結果太大，超過能夠表示的範圍)。 \n \xa0 \xa0 6.RuntimeError:執行期間錯誤。 \n \xa0 \xa0 7.SyntaxError:語法錯誤。 \n \xa0 \xa0 8.IndentationError:縮排錯誤。 \n \xa0 \xa0 9.SystemError:直譯器發生發生內部錯誤。 \n \xa0 \xa0 10.TypeError:將運算或函式套用到型別錯誤的物件。 \n \xa0 \xa0 11.ValueError:內建 運算或函式接收到套用到型別正確但值錯誤的引數。 \n \xa0 \xa0 12.ZeroDivisionError:除數為0的除法運算。 \n \xa0 \xa0 13.ConnectionError、ConnectionAbortedError、ConnectionRefusedError、 ConnectionResetError:連線錯誤、連線失敗、練線被拒、連線重設。 \n \xa0 \xa0 14.FileExistsError:企圖建立已經存在的檔案或目錄。 \n \xa0 \xa0 15.FileNotFoundError:要求的檔案或目標不存在。 \n \xa0 \xa0 16.TimeoutError:系統函式逾時。 \n \n \xa0', 'tags': '', 'url': '例外處理.html'}, {'title': '資料參考', 'text': 'https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web&nbsp \xa0', 'tags': '', 'url': '資料參考.html'}]};
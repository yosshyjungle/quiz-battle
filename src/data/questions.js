// 100問のクイズデータ
// 100 questions quiz data

const quizQuestions = [
    {
      id: 1,
      question: "日本の首都はどこですか？",
      options: ["大阪", "東京", "京都", "名古屋"],
      answer: 1
    },
    {
      id: 2,
      question: "地球の衛星は？",
      options: ["火星", "金星", "月", "太陽"],
      answer: 2
    },
    {
      id: 3,
      question: "1 + 1 = ?",
      options: ["1", "2", "3", "4"],
      answer: 1
    },
    {
      id: 4,
      question: "最も人口が多い国は？",
      options: ["インド", "アメリカ", "日本", "中国"],
      answer: 0
    },
    {
      id: 5,
      question: "サッカーのワールドカップで最も多く優勝している国は？",
      options: ["ブラジル", "ドイツ", "アルゼンチン", "フランス"],
      answer: 0
    },
    {
      id: 6,
      question: "太陽系で最も大きな惑星は？",
      options: ["地球", "火星", "木星", "土星"],
      answer: 2
    },
    {
      id: 7,
      question: "ピカソはどこの国の画家ですか？",
      options: ["フランス", "スペイン", "イタリア", "ドイツ"],
      answer: 1
    },
    {
      id: 8,
      question: "水の化学式は？",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: 0
    },
    {
      id: 9,
      question: "日本で最も高い山は？",
      options: ["富士山", "北岳", "槍ヶ岳", "白馬岳"],
      answer: 0
    },
    {
      id: 10,
      question: "世界で最も長い川は？",
      options: ["ナイル川", "アマゾン川", "長江", "ミシシッピ川"],
      answer: 0
    },
    {
      id: 11,
      question: "元素記号Auは何を表す？",
      options: ["銀", "金", "銅", "鉄"],
      answer: 1
    },
    {
      id: 12,
      question: "シェイクスピアの出身国は？",
      options: ["イギリス", "フランス", "ドイツ", "イタリア"],
      answer: 0
    },
    {
      id: 13,
      question: "世界遺産の姫路城がある県は？",
      options: ["大阪府", "京都府", "兵庫県", "奈良県"],
      answer: 2
    },
    {
      id: 14,
      question: "人体で最も大きな臓器は？",
      options: ["心臓", "肝臓", "肺", "皮膚"],
      answer: 3
    },
    {
      id: 15,
      question: "地球から最も近い恒星は？",
      options: ["プロキシマ・ケンタウリ", "シリウス", "ベガ", "アルファ・ケンタウリ"],
      answer: 0
    },
    {
      id: 16,
      question: "DNAの二重らせん構造を発見したのは？",
      options: ["ワトソンとクリック", "アインシュタイン", "ニュートン", "メンデル"],
      answer: 0
    },
    {
      id: 17,
      question: "「モナリザ」を描いた画家は？",
      options: ["ゴッホ", "レンブラント", "レオナルド・ダ・ヴィンチ", "ミケランジェロ"],
      answer: 2
    },
    {
      id: 18,
      question: "日本の国花は？",
      options: ["桜", "菊", "梅", "朝顔"],
      answer: 1
    },
    {
      id: 19,
      question: "世界で最も使われている言語は？",
      options: ["英語", "中国語", "スペイン語", "ヒンディー語"],
      answer: 1
    },
    {
      id: 20,
      question: "オリンピックの五輪の色は？",
      options: ["青・黄・黒・緑・赤", "青・黄・黒・紫・赤", "青・黄・黒・橙・赤", "青・黄・黒・緑・白"],
      answer: 0
    },
    {
      id: 21,
      question: "日本の五大都市に含まれないのは？",
      options: ["横浜", "名古屋", "神戸", "札幌"],
      answer: 3
    },
    {
      id: 22,
      question: "世界遺産の法隆寺がある場所は？",
      options: ["京都府", "奈良県", "大阪府", "和歌山県"],
      answer: 1
    },
    {
      id: 23,
      question: "次のうち最も新しい元素は？",
      options: ["ウラン", "プルトニウム", "オガネソン", "ラドン"],
      answer: 2
    },
    {
      id: 24,
      question: "人類で初めて月面に降り立ったのは？",
      options: ["ニール・アームストロング", "ユーリ・ガガーリン", "バズ・オルドリン", "アラン・シェパード"],
      answer: 0
    },
    {
      id: 25,
      question: "日本の象徴的な山である富士山の標高は？",
      options: ["2,776m", "3,776m", "4,776m", "5,776m"],
      answer: 1
    },
    {
      id: 26,
      question: "人体の骨の数は？",
      options: ["106本", "206本", "306本", "406本"],
      answer: 1
    },
    {
      id: 27,
      question: "世界で最も深い海溝は？",
      options: ["マリアナ海溝", "日本海溝", "フィリピン海溝", "トンガ海溝"],
      answer: 0
    },
    {
      id: 28,
      question: "次のうち最も小さい惑星は？",
      options: ["地球", "火星", "水星", "金星"],
      answer: 2
    },
    {
      id: 29,
      question: "世界で最も古い大学は？",
      options: ["オックスフォード大学", "ケンブリッジ大学", "パリ大学", "ボローニャ大学"],
      answer: 3
    },
    {
      id: 30,
      question: "日本の県で最も面積が小さいのは？",
      options: ["香川県", "大阪府", "東京都", "神奈川県"],
      answer: 0
    },
    // 以下に同様の形式で70問追加
    {
      id: 31,
      question: "次のうち最も早く発見された元素は？",
      options: ["水素", "酸素", "炭素", "金"],
      answer: 3
    },
    {
      id: 32,
      question: "日本の国鳥は？",
      options: ["ウグイス", "キジ", "スズメ", "カラス"],
      answer: 1
    },
    {
      id: 33,
      question: "次のうち最も大きな哺乳類は？",
      options: ["アフリカゾウ", "シロナガスクジラ", "キリン", "ホッキョクグマ"],
      answer: 1
    },
    {
      id: 34,
      question: "次のうち最も高い建物は？",
      options: ["エッフェル塔", "東京タワー", "バージュ・ハリファ", "自由の女神像"],
      answer: 2
    },
    {
      id: 35,
      question: "次のうち最も長い川は？",
      options: ["ナイル川", "アマゾン川", "長江", "ミシシッピ川"],
      answer: 1
    },
    {
      id: 36,
      question: "次のうち最も多くのノーベル賞を受賞した国は？",
      options: ["アメリカ", "イギリス", "ドイツ", "フランス"],
      answer: 0
    },
    {
      id: 37,
      question: "次のうち最も多くの言語が話されている国は？",
      options: ["インドネシア", "インド", "中国", "アメリカ"],
      answer: 1
    },
    {
      id: 38,
      question: "次のうち最も古い文明は？",
      options: ["エジプト文明", "メソポタミア文明", "インダス文明", "中国文明"],
      answer: 1
    },
    {
      id: 39,
      question: "次のうち最も多くの国が参加する国際組織は？",
      options: ["国連", "EU", "NATO", "G7"],
      answer: 0
    },
    {
      id: 40,
      question: "次のうち最も多くの人が信仰している宗教は？",
      options: ["キリスト教", "イスラム教", "ヒンドゥー教", "仏教"],
      answer: 0
    },
    {
      id: 41,
      question: "次のうち最も多くの国で公用語とされている言語は？",
      options: ["英語", "フランス語", "スペイン語", "アラビア語"],
      answer: 0
    },
    {
      id: 42,
      question: "次のうち最も多くの人が話す言語は？",
      options: ["英語", "中国語", "スペイン語", "ヒンディー語"],
      answer: 1
    },
    {
      id: 43,
      question: "次のうち最も多くの国で使用されている通貨は？",
      options: ["ドル", "ユーロ", "円", "ポンド"],
      answer: 1
    },
    {
      id: 44,
      question: "次のうち最も多くの国で使用されている文字は？",
      options: ["ラテン文字", "キリル文字", "アラビア文字", "漢字"],
      answer: 0
    },
    {
      id: 45,
      question: "次のうち最も多くの国で使用されているカレンダーは？",
      options: ["グレゴリオ暦", "ユリウス暦", "イスラム暦", "ヒジュラ暦"],
      answer: 0
    },
    {
      id: 46,
      question: "次のうち最も多くの国で使用されている時間帯は？",
      options: ["GMT+0", "GMT+1", "GMT+2", "GMT+3"],
      answer: 0
    },
    {
      id: 47,
      question: "次のうち最も多くの国で使用されている電圧は？",
      options: ["100V", "110V", "220V", "240V"],
      answer: 2
    },
    {
      id: 48,
      question: "次のうち最も多くの国で使用されているプラグは？",
      options: ["Aタイプ", "Bタイプ", "Cタイプ", "Dタイプ"],
      answer: 2
    },
    {
      id: 49,
      question: "次のうち最も多くの国で使用されている電話番号の国際番号は？",
      options: ["+1", "+44", "+81", "+86"],
      answer: 0
    },
    {
      id: 50,
      question: "次のうち最も多くの国で使用されているインターネットドメインは？",
      options: [".com", ".org", ".net", ".jp"],
      answer: 0
    },
    {
      id: 51,
      question: "次のうち最も多くの国で使用されているSNSは？",
      options: ["Facebook", "Twitter", "Instagram", "TikTok"],
      answer: 0
    },
    {
      id: 52,
      question: "次のうち最も多くの国で使用されている検索エンジンは？",
      options: ["Google", "Bing", "Yahoo!", "DuckDuckGo"],
      answer: 0
    },
    {
      id: 53,
      question: "次のうち最も多くの国で使用されているウェブブラウザは？",
      options: ["Chrome", "Firefox", "Safari", "Edge"],
      answer: 0
    },
    {
      id: 54,
      question: "次のうち最も多くの国で使用されているオペレーティングシステムは？",
      options: ["Windows", "macOS", "Linux", "Android"],
      answer: 0
    },
    {
      id: 55,
      question: "次のうち最も多くの国で使用されているプログラミング言語は？",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: 1
    },
    {
        id: 56,
        question: "次のうち最も多くの国で使用されているデータベースは？",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: 0
    },
    {
        id: 57,
        question: "次のうち最も多くの国で使用されているクラウドサービスは？",
        options: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
        answer: 0
    },
    {
        id: 58,
        question: "次のうち最も多くの国で使用されているストレージサービスは？",
        options: ["Dropbox", "Google Drive", "OneDrive", "iCloud"],
        answer: 1
    },
    {
        id: 59,
        question: "次のうち最も多くの国で使用されている動画配信サービスは？",
        options: ["Netflix", "YouTube", "Hulu", "Amazon Prime Video"],
        answer: 1
    },
    {
        id: 60,
        question: "次のうち最も多くの国で使用されている音楽配信サービスは？",
        options: ["Spotify", "Apple Music", "Amazon Music", "YouTube Music"],
        answer: 0
    },
    {
        id: 61,
        question: "次のうち最も多くの国で使用されている電子書籍サービスは？",
        options: ["Kindle", "Kobo", "Apple Books", "Google Play Books"],
        answer: 0
    },
    {
        id: 62,
        question: "次のうち最も多くの国で使用されているオンラインストアは？",
        options: ["Amazon", "eBay", "Rakuten", "Alibaba"],
        answer: 0
    },
    {
        id: 63,
        question: "次のうち最も多くの国で使用されているオンライン決済サービスは？",
        options: ["PayPal", "Stripe", "Square", "Alipay"],
        answer: 0
    },
    {
      id: 64,
      question: "次のうち最も多くの国で使用されているQRコード決済サービスは？",
      options: ["PayPay", "LINE Pay", "楽天ペイ", "d払い"],
      answer: 0
    },
    {
      id: 65,
      question: "次のうち最も多くの国で使用されているポイントサービスは？",
      options: ["Tポイント", "Ponta", "楽天ポイント", "dポイント"],
      answer: 0
    },
    {
      id: 66,
      question: "次のうち最も多くの国で使用されているキャッシュレス決済サービスは？",
      options: ["Apple Pay", "Google Pay", "Samsung Pay", "LINE Pay"],
      answer: 0
    },
    {
      id: 67,
      question: "次のうち最も多くの国で使用されているフィンテックサービスは？",
      options: ["WealthNavi", "Money Forward", "freee", "マネーツリー"],
      answer: 0
    },
    {
      id: 68,
      question: "次のうち最も多くの国で使用されているロボット掃除機は？",
      options: ["ルンバ", "ブラーバ", "エコバックス", "シャープ"],
      answer: 0
    },
    {
      id: 69,
      question: "次のうち最も多くの国で使用されているスマートスピーカーは？",
      options: ["Amazon Echo", "Google Nest", "Apple HomePod", "LINE Clova"],
      answer: 0
    },
    {
      id: 70,
      question: "次のうち最も多くの国で使用されているスマートフォンは？",
      options: ["iPhone", "Galaxy", "Xperia", "Pixel"],
      answer: 0
    },
    {
      id: 71,
      question: "次のうち最も多くの国で使用されているタブレットは？",
      options: ["iPad", "Galaxy Tab", "Surface", "Fire HD"],
      answer: 0
    },
    {
      id: 72,
      question: "次のうち最も多くの国で使用されているノートパソコンは？",
      options: ["MacBook", "ThinkPad", "XPS", "Surface"],
      answer: 0
    },
    {
      id: 73,
      question: "次のうち最も多くの国で使用されているデスクトップパソコンは？",
      options: ["iMac", "Dell", "HP", "Lenovo"],
      answer: 0
    },
    {
      id: 74,
      question: "次のうち最も多くの国で使用されているゲーム機は？",
      options: ["PlayStation", "Xbox", "Nintendo Switch", "PC"],
      answer: 0
    },
    {
      id: 75,
      question: "次のうち最も多くの国で使用されているVRヘッドセットは？",
      options: ["Oculus Rift", "HTC Vive", "PlayStation VR", "Valve Index"],
      answer: 0
    },
    {
        id: 76,
        question: "次のうち最も多くの国で使用されているARヘッドセットは？",
        options: ["Microsoft HoloLens", "Magic Leap One", "Google Glass", "Vuzix Blade"],
        answer: 0
    },
    {
        id: 77,
        question: "次のうち最も多くの国で使用されているウェアラブルデバイスは？",
        options: ["Apple Watch", "Fitbit", "Garmin", "Samsung Galaxy Watch"],
        answer: 0
    },
    {
        id: 78,
        question: "次のうち最も多くの国で使用されているフィットネストラッカーは？",
        options: ["Fitbit Charge", "Xiaomi Mi Band", "Garmin Vivosmart", "Apple Watch"],
        answer: 0
    },
    {
        id: 79,
        question: "次のうち最も多くの国で使用されているスマートウォッチは？",
        options: ["Apple Watch", "Samsung Galaxy Watch", "Fossil Gen 5", "Garmin Forerunner"],
        answer: 0
    },
    {
        id: 80,
        question: "次のうち最も多くの国で使用されているスマートリングは？",
        options: ["Oura Ring", "Motiv Ring", "Nimble Ring", "Ringly"],
        answer: 0
    },
    {
        id: 81,
        question: "次のうち最も多くの国で使用されているスマートグラスは？",
        options: ["Google Glass", "Vuzix Blade", "Snap Spectacles", "Epson Moverio"],
        answer: 0
    },
    {
        id: 82,
        question: "次のうち最も多くの国で使用されているスマートコンタクトレンズは？",
        options: ["Mojo Lens", "Innovega iOptik", "Samsung Smart Lens", "Google Smart Lens"],
        answer: 0
    },
    {
        id: 83,
        question: "次のうち最も多くの国で使用されているスマートテキスタイルは？",
        options: ["Hexoskin", "Athos", "Wearable X", "OMsignal"],
        answer: 0
    },
    {
      id: 84,
      question: "次のうち最も多くの国で使用されているスマートシューズは？",
      options: ["Nike Adapt BB", "Under Armour HOVR", "Adidas Futurecraft Loop", "Puma Fi"],
      answer: 0
    },
    {
      id: 85,
      question: "次のうち最も多くの国で使用されているスマートベルトは？",
      options: ["Belty", "Welt", "Fitbelt", "Smart Belt"],
      answer: 0
    },
    {
      id: 86,
      question: "次のうち最も多くの国で使用されているスマートバッグは？",
      options: ["Raden", "Away", "Samsonite", "Targus"],
      answer: 0
    },
    {      
      id: 87,
      question: "次のうち最も多くの国で使用されているスマートウォレットは？",
      options: ["Ekster", "Ridge", "Secrid", "Vaultskin"],
      answer: 0
    },
    {
      id: 88,
      question: "次のうち最も多くの国で使用されているスマートジュエリーは？",
      options: ["Ringly", "Oura Ring", "Motiv Ring", "Nimble Ring"],
      answer: 0
    },
    {
      id: 89,
      question: "次のうち最も多くの国で使用されているスマートヘルメットは？",
      options: ["Lumos", "Vcan", "Skully", "Reevu"],
      answer: 0
    },
    {
      id: 90,
      question: "次のうち最も多くの国で使用されているスマートマスクは？",
      options: ["AirPop", "CleanSpace Ultra", "LG PuriCare", "Xiaomi AirPOP"],
      answer: 0
    },
    {
      id: 91,
      question: "次のうち最も多くの国で使用されているスマートスーツは？",
      options: ["Suitsupply", "Wearable X", "Athos", "Hexoskin"],
      answer: 0
    },
    {
      id: 92,
      question: "次のうち最も多くの国で使用されているスマートスカーフは？",
      options: ["Scarfie", "Smart Scarf", "Wearable X", "Hexoskin"],
      answer: 0
    },
    {
        id: 93,
        question: "次のうち最も多くの国で使用されているスマートブレスレットは？",
        options: ["Fitbit Flex", "Jawbone UP", "Misfit Shine", "Xiaomi Mi Band"],
        answer: 0
    },
    {
        id: 94,
        question: "次のうち最も多くの国で使用されているスマートイヤフォンは？",
        options: ["Apple AirPods", "Samsung Galaxy Buds", "Sony WF-1000XM4", "Bose QuietComfort"],
        answer: 0
    },
    {
        id: 95,
        question: "次のうち最も多くの国で使用されているスマートスピーカーは？",
        options:
            ["Amazon Echo", "Google Nest", "Apple HomePod", "Sonos One"],
        answer: 0
    },
    {
        id: 96,
        question: "次のうち最も多くの国で使用されているスマートディスプレイは？",
        options: ["Amazon Echo Show", "Google Nest Hub", "Facebook Portal", "Lenovo Smart Display"],
        answer: 0
    },
    {
        id: 97,
        question: "次のうち最も多くの国で使用されているスマートテレビは？",
        options: ["Samsung Smart TV", "LG Smart TV", "Sony Smart TV", "Roku TV"],
        answer: 0
    },
    {
        id: 98,
        question: "次のうち最も多くの国で使用されているスマートプロジェクターは？",
        options: ["Anker Nebula", "LG CineBeam", "Epson Home Cinema", "BenQ GS2"],
        answer: 0
    },
    {
        id: 99,
        question: "次のうち最も多くの国で使用されているスマート冷蔵庫は？",
        options: ["Samsung Family Hub", "LG InstaView", "Whirlpool Smart Refrigerator", "GE Profile"],
        answer: 0
    },
    {
      id: 100,
      question: "次のうち最も多くの国で使用されているスマートオーブンは？",
      options: ["June Oven", "Tovala", "Breville Smart Oven", "Panasonic HomeChef"],
      answer: 0
    }

];

export default quizQuestions;
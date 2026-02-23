export const units = [
    {
        id: 'intro',
        title: '第1章：簿記ってなに？',
        description: '簿記の社会的役割と、効率的な学習の必要性を理解します。',
        icon: '📽️',
        color: 'blue',
        slides: [
            {
                title: '簿記のミッション',
                content: 'お店の「家計簿」のようなもの。どれくらい儲かったか、何を持っているかを記録します。',
                image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: '二つの重要ワード',
                content: '・儲け（損益計算書）：どれだけ稼いだかな？<br>・財産（貸借対照表）：何を持っているかな？',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
            }
        ],
        lessons: [
            {
                title: '簿記はビジネスの記録係',
                file: 'intro.html'
            }
        ],
        quizzes: [
            {
                question: '「簿記」という言葉は何の略でしょう？',
                options: ['募金をもらう記録', '帳簿に記録すること', '簿外の記録'],
                answer: 1,
                explanation: '「帳簿（ちょうぼ）」に「きろく（記録）」する、を略して「簿記（ぼき）」と言います。'
            }
        ],
        exercises: [
            {
                question: '簿記の大きな目的の一つは、次のうちどれでしょう？',
                options: ['社員の数を数えること', 'どれくらい儲かったかを知ること', '商品の色を決めること'],
                answer: 1,
                explanation: 'その通り！「損益計算書（そんえきけいさんしょ）」という書類を作るために記録します。'
            }
        ]
    },
    {
        id: 'assets-liabilities',
        title: '第2章：資産・負債・純資産',
        description: '簿記の「5つのグループ」のうち、まずは3つを覚えよう。',
        icon: '⚖️',
        color: 'orange',
        reviewQuizzes: [
            {
                question: '（前回の復習）「簿記」という言葉は何の略でしょう？',
                options: ['募金をもらう記録', '帳簿に記録すること', '簿外の記録'],
                answer: 1,
                explanation: '前回学びましたね。「帳簿（ちょうぼ）」に「きろく（記録）」する、を略して「簿記（ぼき）」と言います。'
            }
        ],
        slides: [],
        lessons: [
            {
                title: '資産・負債・純資産とは？',
                presentationUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vT5K_LgMyZt4y3_G4P35bBNiIfk4Yp98Zz8v_gW2U6W4jYJ_q3D0K7E_j0xP6v/embed?start=false&loop=false&delayms=3000', // Embedded slide placeholder
                file: 'unit2.html'
            }
        ],
        quizzes: [
            {
                question: '会社が持っている「現金」や「建物」のことを簿記の用語で何と呼ぶでしょう？',
                options: ['純資産（じゅんしさん）', '負債（ふさい）', '資産（しさん）'],
                answer: 2,
                explanation: '会社にとってプラスの財産（現金、備品、建物など）は、すべて「資産」グループに入ります。'
            }
        ],
        exercises: [
            {
                question: '銀行から借りたお金（借入金）は、簿記の5つのグループのうちどれに当てはまるでしょう？',
                options: ['資産（しさん）', '負債（ふさい）', '純資産（じゅんしさん）'],
                answer: 1,
                explanation: 'その通り！将来お金を支払わなければならないマイナスの財産は「負債」と言います。'
            }
        ]
    }
];

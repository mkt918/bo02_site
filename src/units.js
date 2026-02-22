export const units = [
    {
        id: 'intro',
        title: '第1章：簿記ってなに？',
        description: '簿記の役割と、なぜみんなが勉強するのかを学びます。',
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
                question: '簿記の大きな目的の一つは、「どれくらい儲かったか」を知ることである。',
                type: 'true_false',
                answer: true,
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
        slides: [],
        lessons: [],
        quizzes: [],
        exercises: []
    }
];

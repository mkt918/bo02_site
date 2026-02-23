// 【追加用テンプレート】新しい章を追加する際はこのブロックをコピーして使ってください
// {
//     id: 'unit-x',
//     title: '第X章：タイトル',
//     description: '概要文',
//     icon: 'アイコン',
//     color: 'テーマカラー (blue/red/green/orange等)',
//     reviewQuizzes: [ /* ...前章の復習3択クイズ... */ ],
//     lessons: [{ title: 'タイトル', presentationUrl: 'PPTX等の埋め込みURL', file: 'xxx.html' }],
//     quizzes: [ /* ...今回の確認3択クイズ... */ ],
//     exercises: [ /* ...総仕上げの3択クイズ... */ ]
// }

export const units = [
    {
        id: 'intro',
        title: '第1章：簿記ってなに？',
        description: '簿記の社会的役割と、効率的な学習の必要性を理解します。',
        icon: '📽️',
        color: 'blue',
        reviewQuizzes: [
            {
                question: '（ウォームアップ）会社の「家計簿」のような記録ルールを何と呼ぶでしょう？',
                options: ['簿外記録', '簿記（ぼき）', '募金'],
                answer: 1,
                explanation: '簿記とは、会社のお金の出入りを記録する「ビジネスの基礎教養」です。'
            }
        ],
        lessons: [
            {
                title: '簿記はビジネスの記録係',
                // For Unit 1, we embed a dummy presentation or leave empty since unit1 was previously using native slides.
                // You can add your actual Google Slide link here.
                presentationUrl: '',
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

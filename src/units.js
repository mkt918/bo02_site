// 【追加用テンプレート】新しいサブユニット（トピック）を追加する際はこのブロックをコピーして使ってください
// {
//     id: 'c1-t1',
//     title: 'その１：タイトル',
//     reviewQuizzes: [ /* ...前回の復習3択クイズ... */ ],
//     lessons: [{ title: 'タイトル', presentationUrl: 'PPTX等の埋め込みURL', file: 'xxx.html' }],
//     quizzes: [ /* ...今回の確認3択クイズ... */ ],
//     exercises: [ /* ...総仕上げの3択クイズ... */ ]
// }

export const chapters = [
    {
        id: 'chapter1',
        title: '第1章　簿記の基礎',
        description: '簿記の社会的役割と、効率的な学習の必要性を理解します。',
        icon: '📽️',
        color: 'blue',
        topics: [
            {
                id: 'c1-t1',
                title: 'その１　簿記の基礎',
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
                        title: '簿記の基礎',
                        presentationUrl: '',
                        file: 'c1-t1.html'
                    }
                ],
                quizzes: [
                    {
                        question: '簿記の3つの目的のうち、正しくないものはどれでしょう？',
                        options: ['財産管理を行うこと', '財政状態を明らかにすること', '従業員の人数を記録すること'],
                        answer: 2,
                        explanation: '簿記の目的は、①財産管理、②財政状態を明らかにすること（貸借対照表）、③経営成績を明らかにすること（損益計算書）の3つです。'
                    },
                    {
                        question: '会社が持つ財産（現金・商品など）を簿記の用語で何と呼ぶでしょう？',
                        options: ['資産', '負債', '純資産'],
                        answer: 0,
                        explanation: '会社にとってプラスの財産（現金、備品、建物、売掛金など）は、すべて「資産」に分類されます。'
                    },
                    {
                        question: '簿記の「借方（かりかた）」はどちら側のことでしょう？',
                        options: ['左側', '右側', '上側'],
                        answer: 0,
                        explanation: '「か"り"かた」は"り"の払いが左を向いているから左側、「か"し"かた」は"し"の払いが右を向いているから右側です。'
                    }
                ],
                exercises: [
                    {
                        question: '貸借対照表（たいしゃくたいしょうひょう）に記載されるのは、次のうちどれでしょう？',
                        options: ['資産・負債・純資産', '収益・費用', '資産・収益'],
                        answer: 0,
                        explanation: 'その通り！貸借対照表は「財政状態」を示す書類で、資産・負債・純資産の3要素を記載します。'
                    }
                ]
            },
            {
                id: 'c1-t2',
                title: 'その２　仕訳と転記',
                reviewQuizzes: [],
                lessons: [],
                quizzes: [],
                exercises: []
            }
        ]
    },
    {
        id: 'chapter2',
        title: '第2章　商品売買',
        description: 'ビジネスの基本である「商品を仕入れて売る」流れを記録します。',
        icon: '⚖️',
        color: 'orange',
        topics: [
            {
                id: 'c2-t1',
                title: 'その１　用語の説明',
                reviewQuizzes: [
                    {
                        question: '（前回の復習）「簿記」という言葉は何の略でしょう？',
                        options: ['募金をもらう記録', '帳簿に記録すること', '簿外の記録'],
                        answer: 1,
                        explanation: '前回学びましたね。「帳簿（ちょうぼ）」に「きろく（記録）」する、を略して「簿記（ぼき）」と言います。'
                    }
                ],
                lessons: [
                    {
                        title: '資産・負債・純資産とは？',
                        presentationUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vT5K_LgMyZt4y3_G4P35bBNiIfk4Yp98Zz8v_gW2U6W4jYJ_q3D0K7E_j0xP6v/embed?start=false&loop=false&delayms=3000',
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
            },
            {
                id: 'c2-t2',
                title: 'その２　三分法と分記法',
                reviewQuizzes: [],
                lessons: [],
                quizzes: [],
                exercises: []
            },
            {
                id: 'c2-t3',
                title: 'その３　掛け取引',
                reviewQuizzes: [],
                lessons: [],
                quizzes: [],
                exercises: []
            }
        ]
    }
];

import './style.css'
import { units } from './units.js'

let currentUnit = null;
let currentMode = 'home'; // home, slide, lesson, quiz, exercise

const app = document.getElementById('app');

function renderLanding() {
  app.innerHTML = `
    <section class="py-20 px-6 bg-gradient-to-b from-primary-50 to-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
          お金の流れがわかれば、<br>
          <span class="text-primary-600 italic">世界がもっとおもしろくなる！</span>
        </h2>
        <p class="text-lg text-slate-600 mb-10 leading-relaxed">
          簿記（ぼき）は、会社やお店のお金の動きを記録する「ビジネスの基礎教養」。<br>
          将来に役立つスキルを、クイズ感覚で効率よくマスターしよう！
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          <div class="p-6 glass rounded-2xl card-hover border-blue-100 border bg-white/50">
            <div class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📽️</span>
            </div>
            <h3 class="font-bold mb-2">スライドで学ぶ</h3>
            <p class="text-slate-500 text-sm">パラパラめくるだけで、簿記の基本がイメージできるよ。</p>
          </div>
          <div class="p-6 glass rounded-2xl card-hover border-orange-100 border bg-white/50">
            <div class="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">❓</span>
            </div>
            <h3 class="font-bold mb-2">クイズで復習</h3>
            <p class="text-slate-500 text-sm">覚えたことをすぐにチェック！全問正解を目指そう。</p>
          </div>
          <div class="p-6 glass rounded-2xl card-hover border-green-100 border bg-white/50">
            <div class="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📝</span>
            </div>
            <h3 class="font-bold mb-2">練習問題に挑戦</h3>
            <p class="text-slate-500 text-sm">本番形式の仕訳にチャレンジ。キミも今日から経理のたまご！</p>
          </div>
        </div>
        <button onclick="window.renderHome()" class="btn-primary text-xl px-12 py-4">コースを見る</button>
      </div>
    </section>
  `;
}

function renderHome() {
  currentMode = 'home';
  app.innerHTML = `
    <section class="py-12 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-slate-800">学習ロードマップ</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${units.map(unit => `
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover cursor-pointer group" onclick="window.startUnit('${unit.id}')">
              <div class="h-16 w-16 bg-${unit.color}-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ${unit.icon}
              </div>
              <h3 class="text-xl font-bold mb-3 text-slate-900">${unit.title}</h3>
              <p class="text-slate-500 text-sm mb-6">${unit.description}</p>
              <div class="flex items-center text-primary-600 font-bold group-hover:translate-x-2 transition-transform">
                学習をはじめる
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

function renderUnit(unitId) {
  const unit = units.find(u => u.id === unitId);
  currentUnit = unit;
  if (unit.reviewQuizzes && unit.reviewQuizzes.length > 0) {
    renderReviewQuizPage(0);
  } else if (unit.lessons && unit.lessons.length > 0) {
    renderLessonPage();
  } else {
    alert('準備中です！');
  }
}

function renderReviewQuizPage(index) {
  currentMode = 'review';
  const quiz = currentUnit.reviewQuizzes[index];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50 animate-in fade-in duration-500">
      <div class="max-w-2xl mx-auto">
        <!-- Progress Bar -->
        <div class="flex items-center space-x-2 mb-10">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 transition-all duration-1000" style="width: 25%"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 1/4 (前回の復習)</span>
        </div>

        <div class="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-14 text-center border border-slate-100">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-bold mb-8">
            <span class="mr-2">🔄</span> REVIEW QUIZ ${index + 1}
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-12 text-slate-800 leading-tight">${quiz.question}</h2>
          
          <div class="grid grid-cols-1 gap-4 text-left">
            ${quiz.options.map((option, i) => `
              <button onclick="window.checkReviewQuiz(${index}, ${i})" 
                class="group w-full p-6 rounded-2xl border-2 border-slate-50 bg-slate-50/50 font-bold text-slate-700 
                hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300
                flex justify-between items-center text-lg active:scale-[0.98]">
                <span class="flex-grow pr-4">${option}</span>
                <div class="flex-shrink-0 h-8 w-8 rounded-full border-2 border-slate-200 bg-white group-hover:border-orange-400 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                  <div class="h-3 w-3 rounded-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="mt-8 text-center">
           <button onclick="window.renderHome()" class="text-slate-400 text-sm font-bold hover:text-slate-600 hover:underline transition-all">← 単元一覧に戻る</button>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function checkReviewQuiz(quizIndex, selectedIndex) {
  const quiz = currentUnit.reviewQuizzes[quizIndex];
  const isCorrect = selectedIndex === quiz.answer;
  const isLast = quizIndex >= currentUnit.reviewQuizzes.length - 1;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-6';
  modal.innerHTML = `
    <div class="bg-white rounded-[2.5rem] shadow-2xl max-w-sm w-full p-10 text-center animate-in zoom-in duration-300 border border-slate-100">
      <div class="h-24 w-24 ${isCorrect ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'} rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">
        ${isCorrect ? '✨' : '❌'}
      </div>
      <h3 class="text-3xl font-bold mb-4 text-slate-800">${isCorrect ? 'その調子！' : 'おしい！'}</h3>
      <div class="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
        <p class="text-slate-600 leading-relaxed font-medium">${quiz.explanation}</p>
      </div>
      <button onclick="this.closest('.fixed').remove(); ${isCorrect ? (isLast ? 'window.renderLessonPage()' : `window.renderReviewQuizPage(${quizIndex + 1})`) : ''}" 
        class="w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.95] 
        ${isCorrect ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-200 text-slate-600 hover:bg-slate-300 shadow-sm'}">
        ${isCorrect ? (isLast ? '今日のレッスンへ進む →' : '次の復習へ進む') : 'もう一度考える'}
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

async function renderLessonPage() {
  currentMode = 'lesson';
  const lesson = currentUnit.lessons[0];

  // Show loading state first
  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50 flex items-center justify-center">
      <div class="animate-pulse flex flex-col items-center">
        <div class="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
        <p class="text-slate-500 font-bold">テキストを読み込み中...</p>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);

  let lessonContent = '';
  if (lesson.file) {
    try {
      // Fetch the HTML file from the note directory
      const response = await fetch('/bo02_site/note/' + lesson.file);
      if (!response.ok) throw new Error('Failed to load lesson content');
      lessonContent = await response.text();
    } catch (error) {
      console.error('Error loading lesson:', error);
      lessonContent = `<div class="p-6 bg-red-50 text-red-600 rounded-2xl border border-red-200 font-bold">⚠️ テキストの読み込みに失敗しました。（${lesson.file}）</div>`;
    }
  } else {
    // Fallback for older units using direct content
    lessonContent = lesson.content || '<p>内容がありません。</p>';
  }

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center space-x-2 mb-8">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 w-2/4"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 2/4 (スライド＆解説)</span>
        </div>

        <article class="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 class="text-3xl font-bold mb-8 text-slate-900 border-b pb-6 !mt-0">${lesson.title}</h2>
          
          <!-- Embedded Presentation Frame -->
          ${lesson.presentationUrl ? `
            <div class="mb-12 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <div class="relative w-full" style="padding-bottom: 56.25%;">
                <iframe src="${lesson.presentationUrl}" class="absolute top-0 left-0 w-full h-full" frameborder="0" allowfullscreen="true"></iframe>
              </div>
            </div>
          ` : ''}

          <div class="text-slate-700 leading-relaxed note-content">
            ${lessonContent}
          </div>
        </article>

        <div class="flex justify-between items-center">
          <button onclick="${currentUnit.reviewQuizzes ? `window.renderReviewQuizPage(0)` : `window.renderHome()`}" class="text-slate-500 font-bold hover:text-slate-700 transition-colors">← 戻る</button>
          <button onclick="window.renderQuizPage(0)" class="btn-primary shadow-lg shadow-primary-500/30">確認クイズに進む →</button>
        </div>
      </div>
    </div>
  `;
}

function renderQuizPage(index) {
  currentMode = 'quiz';
  const quiz = currentUnit.quizzes[index];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50 animate-in fade-in duration-500">
      <div class="max-w-2xl mx-auto">
        <!-- Progress Bar -->
        <div class="flex items-center space-x-2 mb-10">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 transition-all duration-1000" style="width: 75%"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 3/4 (知識クイズ)</span>
        </div>

        <div class="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-14 text-center border border-slate-100">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold mb-8">
            <span class="mr-2">📝</span> QUESTION ${index + 1}
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-12 text-slate-800 leading-tight">${quiz.question}</h2>
          
          <div class="grid grid-cols-1 gap-4 text-left">
            ${quiz.options.map((option, i) => `
              <button onclick="window.checkQuiz(${index}, ${i})" 
                class="group w-full p-6 rounded-2xl border-2 border-slate-50 bg-slate-50/50 font-bold text-slate-700 
                hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300
                flex justify-between items-center text-lg active:scale-[0.98]">
                <span class="flex-grow pr-4">${option}</span>
                <div class="flex-shrink-0 h-8 w-8 rounded-full border-2 border-slate-200 bg-white group-hover:border-primary-400 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                  <div class="h-3 w-3 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="mt-8 text-center">
           <button onclick="window.renderLessonPage()" class="text-slate-400 text-sm font-bold hover:text-slate-600 hover:underline transition-all">← 解説に戻って確認する</button>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function checkQuiz(quizIndex, selectedIndex) {
  const quiz = currentUnit.quizzes[quizIndex];
  const isCorrect = selectedIndex === quiz.answer;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-6';
  modal.innerHTML = `
    <div class="bg-white rounded-[2.5rem] shadow-2xl max-w-sm w-full p-10 text-center animate-in zoom-in duration-300 border border-slate-100">
      <div class="h-24 w-24 ${isCorrect ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'} rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">
        ${isCorrect ? '✨' : '❌'}
      </div>
      <h3 class="text-3xl font-bold mb-4 text-slate-800">${isCorrect ? '正解！' : 'おしい！'}</h3>
      <div class="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
        <p class="text-slate-600 leading-relaxed font-medium">${quiz.explanation}</p>
      </div>
      <button onclick="this.closest('.fixed').remove(); ${isCorrect ? 'window.renderExercisePage(0)' : ''}" 
        class="w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.95] 
        ${isCorrect ? 'btn-primary shadow-lg shadow-primary-500/30' : 'bg-slate-200 text-slate-600 hover:bg-slate-300 shadow-sm'}">
        ${isCorrect ? '次へ進む' : 'もう一度考える'}
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

function renderExercisePage(index) {
  currentMode = 'exercise';
  const exercise = currentUnit.exercises[index];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50 animate-in slide-in-from-right duration-500">
      <div class="max-w-3xl mx-auto">
        <!-- Progress Bar -->
        <div class="flex items-center space-x-2 mb-10">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 transition-all duration-1000" style="width: 100%"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 4/4 (総仕上げ練習)</span>
        </div>

        <div class="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-10 md:p-16 text-center border border-slate-100 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-primary-500 to-red-400"></div>
          
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-10">
            🥇 FINAL CHALLENGE
          </div>
          
          <h2 class="text-2xl md:text-3xl font-bold mb-12 text-slate-800 leading-tight">${exercise.question}</h2>
          
          <div class="grid grid-cols-1 gap-4 text-left">
            ${exercise.options.map((option, i) => `
              <button onclick="window.checkExercise(${index}, ${i})" 
                class="group w-full p-6 rounded-2xl border-2 border-slate-50 bg-slate-50/50 font-bold text-slate-700 
                hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300
                flex justify-between items-center text-lg active:scale-[0.98]">
                <span class="flex-grow pr-4">${option}</span>
                <div class="flex-shrink-0 h-8 w-8 rounded-full border-2 border-slate-200 bg-white group-hover:border-primary-400 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                  <div class="h-3 w-3 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="mt-8 text-center text-slate-400 text-sm font-medium">
          これをクリアすれば単元終了です！がんばって！
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function checkExercise(index, selectedIndex) {
  const exercise = currentUnit.exercises[index];
  const isCorrect = selectedIndex === exercise.answer;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-lg p-6';
  modal.innerHTML = `
    <div class="bg-white rounded-[2.5rem] shadow-2xl max-w-sm w-full p-10 text-center text-slate-900 animate-in zoom-in duration-300 border-4 ${isCorrect ? 'border-green-400' : 'border-red-400'}">
      <div class="h-28 w-28 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} rounded-full flex items-center justify-center text-6xl mx-auto mb-8 shadow-xl">
        ${isCorrect ? '🎊' : '💦'}
      </div>
      <h3 class="text-3xl font-black mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}">${isCorrect ? '完ぺき！' : 'ざんねん！'}</h3>
      <div class="bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100">
        <p class="text-slate-600 leading-relaxed font-bold">${exercise.explanation}</p>
      </div>
      <button onclick="this.closest('.fixed').remove(); ${isCorrect ? 'window.renderHome()' : ''}" 
        class="w-full py-5 rounded-3xl font-black text-xl transition-all active:scale-[0.9] shadow-xl ${isCorrect ? 'btn-primary bg-gradient-to-r from-primary-600 to-blue-600' : 'bg-slate-200 text-slate-600'}">
        ${isCorrect ? 'クリア！一覧に戻る' : 'もう一度やってみる'}
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Global exposure for event handlers
window.startUnit = renderUnit;
window.renderReviewQuizPage = renderReviewQuizPage;
window.checkReviewQuiz = checkReviewQuiz;
window.renderLessonPage = renderLessonPage;
window.renderQuizPage = renderQuizPage;
window.checkQuiz = checkQuiz;
window.renderExercisePage = renderExercisePage;
window.checkExercise = checkExercise;
window.renderHome = renderHome;
window.renderLanding = renderLanding;

// Initial render
renderHome();

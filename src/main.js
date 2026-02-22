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
          簿記（ぼき）は、会社やお店のお金の動きを記録する「ビジネスの共通言語」。<br>
          中学生のキミでも、クイズ感覚で楽しくマスターできるよ！
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
  if (unit.slides.length > 0) {
    renderSlidePage(0);
  } else if (unit.lessons.length > 0) {
    renderLessonPage();
  } else {
    alert('準備中です！');
  }
}

function renderSlidePage(index) {
  currentMode = 'slide';
  const slide = currentUnit.slides[index];

  app.innerHTML = `
    <div class="min-h-[80vh] flex flex-col pt-8 bg-slate-50">
      <div class="max-w-5xl mx-auto w-full px-6 flex-grow">
        <!-- Progress Bar -->
        <div class="flex items-center space-x-2 mb-8">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 w-1/4"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 1/4 (スライド)</span>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          <div class="md:w-1/2 p-12 flex flex-col justify-center">
            <span class="text-primary-600 font-bold text-sm mb-2">SLIDE ${index + 1}</span>
            <h2 class="text-3xl font-bold mb-6 text-slate-900">${slide.title}</h2>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">${slide.content}</p>
            
            <div class="mt-auto flex space-x-4">
              ${index > 0 ? `<button onclick="window.renderSlidePage(${index - 1})" class="px-6 py-2 border-2 border-slate-200 rounded-full font-bold text-slate-600 hover:bg-slate-50">戻る</button>` : ''}
              ${index < currentUnit.slides.length - 1 ?
      `<button onclick="window.renderSlidePage(${index + 1})" class="btn-primary">次へ</button>` :
      `<button onclick="window.renderLessonPage()" class="btn-primary">解説を読む</button>`}
            </div>
          </div>
          <div class="md:w-1/2 bg-slate-100 flex items-center justify-center p-8">
            <img src="${slide.image}" alt="${slide.title}" class="rounded-2xl shadow-lg max-h-[400px] object-cover w-full h-full">
          </div>
        </div>
      </div>
      
      <div class="p-6 text-center">
        <button onclick="window.renderHome()" class="text-slate-400 text-sm hover:text-slate-600 font-medium">← 単元一覧に戻る</button>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function renderLessonPage() {
  currentMode = 'lesson';
  const lesson = currentUnit.lessons[0];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-50">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center space-x-2 mb-8">
          <div class="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 w-2/4"></div>
          </div>
          <span class="text-xs font-bold text-slate-400 whitespace-nowrap">ステップ 2/4 (内容解説)</span>
        </div>

        <article class="bg-white rounded-3xl shadow-lg p-12 mb-8">
          <h2 class="text-3xl font-bold mb-8 text-slate-900 border-b pb-6 !mt-0">${lesson.title}</h2>
          <div class="text-slate-700 leading-relaxed">
            ${lesson.content}
          </div>
        </article>

        <div class="flex justify-between items-center">
          <button onclick="window.renderSlidePage(0)" class="text-slate-500 font-bold">← スライドに戻る</button>
          <button onclick="window.renderQuizPage(0)" class="btn-primary">復習クイズに進む →</button>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function renderQuizPage(index) {
  currentMode = 'quiz';
  const quiz = currentUnit.quizzes[index];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-primary-50">
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center space-x-2 mb-8">
          <div class="flex-grow h-2 bg-white rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 w-3/4"></div>
          </div>
          <span class="text-xs font-bold text-primary-400 whitespace-nowrap">ステップ 3/4 (知識クイズ)</span>
        </div>

        <div class="bg-white rounded-3xl shadow-xl p-12 text-center">
          <span class="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block">QUESTION ${index + 1}</span>
          <h2 class="text-2xl font-bold mb-10 text-slate-900">${quiz.question}</h2>
          
          <div class="space-y-4">
            ${quiz.options.map((option, i) => `
              <button onclick="window.checkQuiz(${index}, ${i})" class="w-full p-6 rounded-2xl border-2 border-slate-50 font-bold text-slate-700 hover:border-primary-400 hover:bg-primary-50 transition-all text-left flex justify-between items-center group bg-slate-50/50">
                ${option}
                <div class="h-6 w-6 rounded-full border-2 border-slate-300 group-hover:border-primary-400 bg-white"></div>
              </button>
            `).join('')}
          </div>
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
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6';
  modal.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-10 text-center animate-in zoom-in duration-300">
      <div class="h-20 w-20 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ${isCorrect ? '✨' : '❌'}
      </div>
      <h3 class="text-2xl font-bold mb-2">${isCorrect ? '正解！' : 'おしい！'}</h3>
      <p class="text-slate-500 mb-8">${quiz.explanation}</p>
      <button onclick="this.closest('.fixed').remove(); window.renderExercisePage(0)" class="btn-primary w-full">次へ進む</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function renderExercisePage(index) {
  currentMode = 'exercise';
  const exercise = currentUnit.exercises[index];

  app.innerHTML = `
    <div class="min-h-screen py-12 px-6 bg-slate-900 text-white">
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center space-x-2 mb-8">
          <div class="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-primary-500 w-full"></div>
          </div>
          <span class="text-xs font-bold text-slate-500 whitespace-nowrap">ステップ 4/4 (総仕上げ練習)</span>
        </div>

        <div class="bg-slate-800 rounded-3xl p-12">
          <h2 class="text-2xl font-bold mb-10 text-center">⭕️❌ 練習問題</h2>
          <p class="text-xl text-center mb-12 leading-relaxed font-medium">「${exercise.question}」</p>
          
          <div class="flex space-x-6">
            <button onclick="window.checkExercise(${index}, true)" class="flex-grow bg-green-500 hover:bg-green-600 p-8 rounded-2xl text-4xl shadow-lg transition-transform hover:scale-105 active:scale-95">🙆‍♂️ まる</button>
            <button onclick="window.checkExercise(${index}, false)" class="flex-grow bg-red-500 hover:bg-red-600 p-8 rounded-2xl text-4xl shadow-lg transition-transform hover:scale-105 active:scale-95">🙅‍♂️ ばつ</button>
          </div>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function checkExercise(index, selected) {
  const exercise = currentUnit.exercises[index];
  const isCorrect = selected === exercise.answer;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-6';
  modal.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-10 text-center text-slate-900 animate-in zoom-in duration-300">
      <div class="h-20 w-20 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ${isCorrect ? '🎊' : '💦'}
      </div>
      <h3 class="text-2xl font-bold mb-2">${isCorrect ? '完ぺき！' : 'ざんねん！'}</h3>
      <p class="text-slate-500 mb-8">${exercise.explanation}</p>
      <button onclick="this.closest('.fixed').remove(); window.renderHome()" class="btn-primary w-full">クリア！一覧に戻る</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Global exposure for event handlers
window.startUnit = renderUnit;
window.renderSlidePage = renderSlidePage;
window.renderLessonPage = renderLessonPage;
window.renderQuizPage = renderQuizPage;
window.checkQuiz = checkQuiz;
window.renderExercisePage = renderExercisePage;
window.checkExercise = checkExercise;
window.renderHome = renderHome;
window.renderLanding = renderLanding;

// Initial render
renderLanding();

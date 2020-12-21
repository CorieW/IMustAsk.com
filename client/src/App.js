import './App.css';

export default function App() {
  return (
    <div class='app'>
      <div class='popup-bg'></div>
      <p class='popup-text'>I MUST ASK!</p>

      <h1>I MUST ASK!</h1>
      <button class='ask'>Ask your very own question!</button>
      <div class='question-box'>
        <p class='question'><strong>I must ask</strong> how do I spit a freestyle?</p>
        <div class='replies-box'>
          <form class='reply-box'>
            <label for='reply'>Reply</label>
            <textarea class='reply-input' name='reply' rows='3' placeholder='Write reply here...'></textarea>
          </form>
          <div class='replies'>
            <p class='replies-title'>Replies</p>
          </div>
        </div>
      </div>
    </div>
  )
}
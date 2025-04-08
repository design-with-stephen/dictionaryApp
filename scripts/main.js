const searchBtn = document.getElementById("searchBtn");
const wordInput = document.getElementById("wordInput");
const resultBox = document.getElementById("resultBox");

searchBtn.addEventListener("click", () => {
  const word = wordInput.value.trim();
  if (word === "") return;
  fetchWordData(word);
});

async function fetchWordData(word) {
  resultBox.innerHTML = "Searching...";

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) throw new Error("Word not found");

    const data = await res.json();
    const entry = data[0];

    const meanings = entry.meanings.map(meaning => `
      <div>
        <strong>${meaning.partOfSpeech}</strong>
        <ul>
          ${meaning.definitions.map(def => `
            <li>
              ${def.definition}
              ${def.example ? `<br><em>Example: ${def.example}</em>` : ""}
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");

    resultBox.innerHTML = `
      <h2>${entry.word}</h2>
      ${entry.phonetic ? `<p><em>/${entry.phonetic}/</em></p>` : ""}
      ${meanings}
    `;
  } catch (err) {
    resultBox.innerHTML = `<p style="color: red;">${err.message}</p>`;
  }
}



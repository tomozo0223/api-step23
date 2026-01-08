const btn = document.getElementById("js-btn");
const result = document.getElementById("js-result");
const randomBtn = document.getElementById("js-random-btn");

const getData = async (name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      result.innerHTML = `
        <p>正しいポケモンの名前を入力してください。</p>
      `;
      throw new Error("正しいポケモンの名前を入力してください。");
    }
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log("エラー発生", error.message);
  }
};

const getRandomData = async (num) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log("エラー発生", error.message);
  }
};

const displayData = (data) => {
  result.innerHTML = `
    <div>名前: ${data.name}</div>
    <img src="${data.sprites.front_default}">
    <div>タイプ: ${data.types[0].type.name}</div>
  `;
};

btn.addEventListener("click", () => {
  const name = document.getElementById("js-name").value;
  getData(name);
});

randomBtn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 100) + 1;
  getRandomData(num);
});

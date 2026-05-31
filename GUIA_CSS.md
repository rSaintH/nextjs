# Guia CSS rapido

## 1. A ideia principal

CSS serve para organizar e dar aparencia aos elementos HTML.

Pensa assim:

```tsx
<main className="page">
  <section className="card">
    <h1>Titulo</h1>
    <p>Texto</p>
  </section>
</main>
```

```css
.page {
  min-height: 100vh;
  padding: 32px;
  background: #f3f4f6;
}

.card {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background: white;
  border-radius: 8px;
}
```

HTML/TSX cria a estrutura. CSS organiza e estiliza.

## 2. Box model

Todo elemento e uma caixa.

```css
.box {
  width: 300px;
  height: 120px;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 24px;
}
```

- `width`: largura do conteudo.
- `height`: altura do conteudo.
- `padding`: espaco interno.
- `border`: borda.
- `margin`: espaco externo.

Use quase sempre:

```css
* {
  box-sizing: border-box;
}
```

Isso deixa tamanho de caixa mais previsivel.

## 3. Organizando pagina

Estrutura comum:

```tsx
<body>
  <header className="topbar">Topo</header>

  <main className="page">
    <section className="content">
      Conteudo
    </section>
  </main>
</body>
```

CSS:

```css
.topbar {
  height: 72px;
  width: 100%;
  background: #111827;
  color: white;
}

.page {
  min-height: calc(100vh - 72px);
  padding: 32px;
  background: #f3f4f6;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}
```

Regra boa:

- `body`: pagina inteira.
- `header`: topo.
- `main`: conteudo principal.
- `section`: partes da pagina.
- `div`: caixa generica quando nao tiver nome melhor.

## 4. Flexbox

Use Flexbox para alinhar coisas em linha ou coluna.

```css
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
```

Principais:

- `display: flex`: ativa flex.
- `align-items: center`: alinha na vertical.
- `justify-content: center`: centraliza na horizontal.
- `justify-content: space-between`: joga um item para cada lado.
- `gap: 16px`: espaco entre itens.

Exemplo:

```css
.nav {
  display: flex;
  gap: 16px;
}
```

## 5. Grid

Use Grid para layouts em colunas.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

Responsivo:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

Esse e muito util: ele cria quantas colunas couberem.

## 6. Tamanhos uteis

```css
.page {
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.button {
  height: 40px;
  padding: 0 16px;
}
```

Use:

- `width: 100%` para ocupar a largura disponivel.
- `max-width` para o conteudo nao ficar gigante.
- `min-height: 100vh` para ocupar a tela inteira.
- `margin: 0 auto` para centralizar bloco com largura maxima.

## 7. Espacamento

Nao espalhe margin aleatoria em tudo.

Melhor:

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

Para pagina:

```css
.page {
  padding: 32px;
}
```

Para card:

```css
.card {
  padding: 24px;
}
```

## 8. Texto

```css
h1 {
  font-size: 32px;
  line-height: 1.2;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
}
```

Regra:

- `font-size`: tamanho.
- `line-height`: altura da linha.
- `font-weight`: peso da fonte.
- `color`: cor do texto.

## 9. Botoes

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.button:hover {
  background: #1d4ed8;
}
```

## 10. Responsividade

Use media query quando a tela for pequena.

```css
@media (max-width: 700px) {
  .page {
    padding: 16px;
  }

  .topbar {
    height: auto;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
}
```

## 11. Receita de layout bom

Comece assim:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f4f6;
  color: #111827;
}

.topbar {
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #111827;
  color: white;
}

.page {
  min-height: calc(100vh - 72px);
  padding: 32px;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  padding: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
```

E no TSX:

```tsx
export default function Page() {
  return (
    <main className="page">
      <div className="container">
        <section className="card">
          <h1>Minha pagina</h1>
          <p>Conteudo da pagina.</p>
        </section>
      </div>
    </main>
  );
}
```

## 12. O que decorar primeiro

Decora estes:

```css
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;
padding: 24px;
margin: 0 auto;
max-width: 1100px;
min-height: 100vh;
border-radius: 8px;
```

Com isso voce ja monta muita pagina organizada.

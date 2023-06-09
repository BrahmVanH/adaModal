// Color theme button group elements
const darkColorThemeBtn = document.getElementById("darkColorTheme");
const lightColorThemeBtn = document.getElementById("lightColorTheme");
const invertedColorThemeBtn = document.getElementById("invertedColorTheme");

// Text size button group elements
const smallerTextBtn = document.getElementById("smallerText");
const mediumTextBtn = document.getElementById("mediumText");
const largerTextBtn = document.getElementById("largerText");

// Cursor options button elements
const oversizeCursorBtn = document.getElementById("oversizeCursor");
const readingMaskCursorBtn = document.getElementById("readingMaskCursor");
const readingGuideCursorBtn = document.getElementById("readingGuideCursor");

// Change text spacing toggle
const textSpacingBtn = document.getElementById("textSpacing");

// Change to a dyslexia-friendly font element
const dyslexiaFriendlyFontBtn = document.getElementById("dyslexiaFriendlyFont");

// Hide images element
const hideImagesBtn = document.getElementById("hideImages");

// Highlight links on page button
const highlightLinksBtn = document.getElementById("highlightLinks");

const accessibilityModal = document.getElementById("accessibilityModal");
const accessibilityModalChildren = accessibilityModal.children;

const allOfTheDivs = document.querySelectorAll("div");
const buttonEls = document.querySelectorAll("button");

const renderButtonEls = () => {};

renderDivsDark = (allDivs) => {
  divsArray = Array.from(allDivs);

  for (const div of divsArray) {
    div.classList.add("dark-theme-div");
  }
};

renderButtonsDark = (buttonEls) => {
  buttonsArray = Array.from(buttonEls);

  for (const button of buttons) {
    button.classList.add("dark-theme-button");
  }
};
const renderDarkTheme = (event) => {
  event.preventDefault();

  renderDivsDark(allOfTheDivs);
  renderButtonsDark(buttonEls);
};

const renderLightTheme = (event) => {};

const renderInvertedColorTheme = (event) => {};

const renderSmallerText = (event) => {
  const allText = document.querySelector(":root");
  allText.setAttribute("")
};

const renderMediumText = (event) => {};

const renderLargerText = (event) => {};

const renderOversizedCursor = (event) => {};

const renderReadingMaskCursor = (event) => {};

const renderReadingGuideCursor = (event) => {};

const renderIncreasedTextSpacing = (event) => {};

const renderDecreasedTextSpacing = (event) => {};

const renderDyslexiaFriendlyFont = (event) => {};

const hideImages = (event) => {};

const showImages = (event) => {};

const highlightLinks = (event) => {};

const unhighlightLinks = (event) => {};

darkColorThemeBtn.addEventListener("click", renderDarkTheme);

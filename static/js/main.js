// Sidemenu expanded & collapsed functions
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    document.querySelector("body").classList.toggle('body-expanded');
});

// Code editor for function tables: Show & Hidde
const editorHeader = document.querySelector('.editor-header');
const editor = document.querySelector('.console')
editorHeader.addEventListener('click', e => {
    editor.classList.toggle('show-console');
    editor.classList.toggle('hidde-console');
})

/** Create new table */
const createTable = (event) => {
    event.preventDefault();
    const columns = document.querySelector('#columns').value;
    const rows = document.querySelector('#rows').value;
    console.log(columns, rows);
}

const newTableForm = document.querySelector('.createNewTableForm');
newTableForm.addEventListener("submit", createTable, true);

/** Create new note */
const createAnnotation = (event) => {
    event.preventDefault();
    const annotation= document.querySelector('#annotationTextarea').value;
    console.log(annotation);
}

const newAnnotationForm = document.querySelector('.createNewNoteForm');
newAnnotationForm.addEventListener("submit", createAnnotation, true);
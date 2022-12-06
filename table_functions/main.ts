import { Table } from "./Table";

// Sidemenu expanded & collapsed functions
const btn = document.querySelector('#menu-btn') as HTMLButtonElement;
const menu = document.querySelector('#sidemenu') as HTMLElement;

btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    document.querySelector("body")!.classList.toggle('body-expanded');
});

// Code editor for function tables: Show & Hidde
const editorHeader = document.querySelector('.editor-header') as HTMLElement;
const editor = document.querySelector('.console') as HTMLElement;
editorHeader.addEventListener('click', _ => {
    editor.classList.toggle('show-console');
    editor.classList.toggle('hidde-console');
});

const table1 = new Table('.tn-1', '.ht-1', '.dt-1', '.ft-1');
table1.event_EditRow();
table1.event_editAllTable();
table1.event_saveTable();
table1.event_deleteRowData();
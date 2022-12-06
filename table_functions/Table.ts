export class Table {

    private editMode          : boolean;
    private nameSection       : HTMLElement;
    private headerSection     : HTMLElement;
    private dataSection       : HTMLElement;
    private footerToolSection : HTMLElement;

    constructor ( 
             nameSectionClass  : string, 
           headerSectionClass  : string, 
              dataSectionClass : string, 
        footerToolSectionClass : string
    ) {
        this.nameSection       = this.getNameSection(nameSectionClass);
        this.headerSection     = this.getHeaderSection(headerSectionClass);
        this.dataSection       = this.getDataSection(dataSectionClass);
        this.footerToolSection = this.getFooterToolSection(footerToolSectionClass);
        this.editMode          = false;
    }

    getNameSection(nameSectionClass: string): HTMLElement {
        return document.querySelector(nameSectionClass) as HTMLElement;
    }

    getHeaderSection(headerSectionClass: string): HTMLElement {
        return document.querySelector(headerSectionClass) as HTMLElement;
    }

    getDataSection(dataSectionClass: string): HTMLElement {
        return document.querySelector(dataSectionClass) as HTMLElement;
    }

    getFooterToolSection(footerToolSectionClass: string): HTMLElement {
        return document.querySelector(footerToolSectionClass) as HTMLElement;
    }

    /** Edit table row*/
    event_EditRow(): void {
        this.dataSection.addEventListener('click', event => {
            if(event.target instanceof HTMLElement) {
                const {target} = event;
                if (target.classList.contains('check')) {
                    const tableRow = target!.parentElement!.parentElement as HTMLElement;
                    const tableRowClass = tableRow.classList[0] as string;
                    const columns = tableRow.querySelectorAll(`.${tableRowClass}`) as NodeListOf<HTMLInputElement>;
                    columns.forEach( col => {
                        col.toggleAttribute("disabled");
                    });
                }
            }
            event.stopPropagation();
        });
    }

    
    /** Edit all table */
    event_editAllTable(): void {
        this.headerSection.addEventListener('click', event => {
            this.editMode = !this.editMode;
            if(event.target instanceof HTMLElement) {
                const {target} = event;
                if (target.classList.contains('edit-table')) {
                    const tableContainer = target!.parentElement!.parentElement!.parentElement!.parentElement as HTMLElement;
                    const inputTables = tableContainer.querySelectorAll('.datatable .input-table') as NodeListOf<HTMLElement>;
                    const allCheckBox = tableContainer.querySelectorAll('.datatable .check') as NodeListOf<HTMLInputElement>;

                    allCheckBox.forEach(checkBox => {
                        if (checkBox.checked == true && this.editMode == true) {
                            checkBox.checked = false;
                            const row = checkBox.parentElement as HTMLElement;
                            const inputs = row.querySelectorAll(row.classList[0]);
                            inputs.forEach(input => { input.removeAttribute("disabled") });
                        }
                        if (this.editMode == false) {
                            checkBox.checked = false;
                            inputTables.forEach(input => { input.setAttribute("disabled", '') });
                            checkBox.removeAttribute("disabled");
                        } else {
                            checkBox.checked = true;
                            inputTables.forEach(input => { input.removeAttribute("disabled") });
                            checkBox.setAttribute("disabled", '');
    
                        }
                    });
                }
                event.stopPropagation();
            }
        });
    }


    /** Save data table */
    event_saveTable(){
        this.headerSection.addEventListener('click', event => {
            if(event.target instanceof HTMLElement) {
                if (event.target.classList.contains('save-data')) {
                    const tableContainer = event.target!.parentElement!.parentElement!.parentElement!.parentElement;
                    const datatable = tableContainer!.querySelector('.datatable');
                    const allCheckBox = datatable!.querySelectorAll('.check') as NodeListOf<HTMLInputElement>;
                    let elementsToSave: any = [];
                    let data: string[] = [];

                    allCheckBox!.forEach( checkBox => {
                        if(checkBox.checked) {
                            const row = checkBox.parentElement!.parentElement as HTMLElement;
                            const inputs = row.querySelectorAll(`.${row.classList[0]}`) as NodeListOf<HTMLInputElement>;
                            inputs.forEach( input => {
                                data.push(input.value);
                            });
                            const num = row!.childNodes[3] as HTMLElement;
                            elementsToSave.push( {"row": num.getAttribute('data-number'), "data": data} );
                            data = [];
                        }
                    });
                    console.log(elementsToSave);

                }
            }
        });
    }


    /** Delete Row data */
    event_deleteRowData(){
        this.headerSection.addEventListener('click', event => {
            if(event.target instanceof HTMLElement) {
                if (event.target.classList.contains('delete-table')) {
                    const tableContainer = event.target!.parentElement!.parentElement!.parentElement!.parentElement;
                    const datatable = tableContainer!.querySelector('.datatable');
                    const allCheckBox = datatable!.querySelectorAll('.check') as NodeListOf<HTMLInputElement>;
                    allCheckBox!.forEach( checkBox => {
                        if(checkBox.checked) {
                            const row = checkBox.parentElement!.parentElement as HTMLElement;
                            const inputs = row.querySelectorAll(`.${row.classList[0]}`) as NodeListOf<HTMLInputElement>;
                            inputs.forEach( input => input.value="" );
                        }
                    });
                }
            }
        });    
    }

} /** End of table class */
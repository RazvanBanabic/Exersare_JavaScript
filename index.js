function TableCreator() {
    const tabel = document.createElement("table");
    document.body.appendChild(tabel);
    const index = document.getElementById("da");
    for(i=0; i<index.rows.length; i++){
        const trow = document.createElement("tr");
        tabel.appendChild(trow);
        for(j=0; j<2; j++){
            const tdata = document.createElement("td");
            trow.appendChild(tdata);
            tdata.innerText = index.rows[i].cells[j].innerHTML;
        }
    }

}

function DropDownSelector(){
    const selector = document.createElement("select");
    document.body.appendChild(selector);

    const table = document.getElementById("da");
    for(i=0; i<table.rows.length; i++){
        const option = document.createElement("option");
        option.text=table.rows[i].cells[0].innerHTML;
        option.value = i;
        selector.appendChild(option);
    }

}

function RadioButton(){
    for(i=0; i<3; i++) {
        const radioButton = document.createElement("INPUT");
        radioButton.setAttribute("type", "radio");
        document.body.appendChild(radioButton);
    }
}

function CheckBox(){
    for(i=0; i<3; i++) {
        const checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        document.body.appendChild(checkBox);
    }
}

function FlexBox(){
    const flex = document.getElementById("flex");
    //document.body.appendChild(div);
    for(i=0; i<4; i++){
        const div = document.createElement("DIV");
        const img = document.createElement("img");
        img.src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
        flex.appendChild(div);
        div.appendChild(img);
    }

}

window.onload = (event) => {
    TableCreator();
    DropDownSelector();
    RadioButton();
    CheckBox();
    FlexBox();
};
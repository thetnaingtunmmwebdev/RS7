let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let title = document.getElementById('title');
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.color="";
    });
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}

showPanel(0,'red');
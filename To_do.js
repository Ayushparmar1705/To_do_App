
let button = document.querySelector("button")
let id_val = 1;



button.onclick = function(){
    let input_value = document.getElementById("input").value;
    let main_container = document.getElementById("main_container");

    let display_to_do = document.createElement("div");
    let body =  document.getElementById("body");


    let id = document.createElement("p");
    id.innerHTML = "Task  : "+id_val;


    id_val+=1;



    let p = document.createElement("p")
    let p2 = document.createElement("p")

    display_to_do.appendChild(id)
    p.innerHTML = "Task : "+input_value;

    display_to_do.appendChild(p);
    display_to_do.style.backgroundColor = "darkblue";

    display_to_do.style.border = "5px solid lightpink";
    display_to_do.style.width = "200px";

    display_to_do.style.padding = "1em"
    display_to_do.style.height = "150px";

    display_to_do.style.fontWeight = "bold";
    display_to_do.style.color = "white";

    display_to_do.style.textAlign = "center";
    display_to_do.style.fontSize = "1.5em";

    display_to_do.style.marginLeft = "2em";
    main_container.appendChild(display_to_do);

    main_container.style.width = "100%";
    check_btn = document.createElement("button");

    check_btn.style.backgroundColor = "blue";
    check_btn.style.color = "white";

    check_btn.onclick = function(){
        p.style.textDecoration = "line-through";
    }



    check_btn.innerHTML = "Complete"
    display_to_do.appendChild(check_btn);
}


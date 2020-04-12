const url = "https://5e8ec152e0e7de001685f98a.mockapi.io/coba";
const mockAPI = document.getElementsByTagName("div")[3];
console.log(document.getElementsByTagName("div")[3]);


const getMockAPI = async () => {
    const response = await fetch(url);

    const result = await response.json();

    result.forEach((element) => {
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `<p>${element.fullname}</p><img src="${element.profilepic}"/>
        <div style="display: flex; justify-content:space-between">
        <button id="edit-${element.id}" class="edit-button">ubah</button><button id="delete-${element.id}" class="delete-button">hapus</button>
        </div>`;

        mockAPI.appendChild(newDiv);

        // // create name
        // const name = document.createElement("p");
        // const textName = document.createTextNode(element.fullname);
        // name.appendChild(textName);
        // newDiv.appendChild(name);

        // // create img
        // const img = document.createElement("img");
        // img.setAttribute("src", element.avatar);
        // img.setAttribute("alt", "avatar");
        // img.style.width = "200px";
        // newDiv.appendChild(img);

        // // create delete button
        // const deleteButton = document.createElement("button");
        // const deleteText = document.createTextNode("hapus");
        // deleteButton.setAttribute("id", `delete-${element.id}`);
        // deleteButton.style.display = "block";
        // deleteButton.setAttribute("class", "delete-button");

        // deleteButton.appendChild(deleteText);
        // newDiv.appendChild(deleteButton);

        // // create edit button
        // const editButton = document.createElement("button");
        // const editText = document.createTextNode("ubah");
        // editButton.setAttribute("id", `edit-${element.id}`);
        // editButton.style.display = "block";
        // editButton.setAttribute("class", "edit-button");

            // editButton.appendChild(editText);
            // newDiv.appendChild(editButton);

            // mockAPI.appendChild(newDiv);
        });

        mockAPI.style.display = "flex";
        mockAPI.style.justifyContent = "center";
        mockAPI.style.flexWrap = "wrap";
    };

    const registerForm = document.getElementById("registerForm");

    const addNewUser = async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const profilepic = document.getElementById("profilepic").value;

        const registrant = {
            name,
            email,
            password,
            profilepic,
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrant),
        });
        
        await response.json();
        if (response) {
            alert("Registration Succsess");
            window.location.href = `${window.origin}/index.html`;
          } else {
            alert("Registration Failed");
          }
    };

    // const deleteUser = async (event) => {
    //     if (event.target.matches(".delete-button")) {
    //         const id = event.target.id.replace("delete-", "");
    //         const response = await fetch(`${url}/${id}`, {
    //             method: "DELETE",
    //         });

    //         await response.json();

    //         location.reload();
    //     }
    // };

    // : = params

    // const editUser = async (event) => {
    //     if (event.target.matches(".edit-button")) {
    //         const nameEdit = prompt("insert your name");

    //         const id = event.target.id.replace("edit-", "");
    //         const response = await fetch(`${url}/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ fullname: nameEdit }),
    //         });

    //         await response.json();

    //         location.reload();
    // //     }
    // };


    registerForm.addEventListener("submit", addNewUser);
    // mockAPI.addEventListener("click", deleteUser);
    // mockAPI.addEventListener("click", editUser);
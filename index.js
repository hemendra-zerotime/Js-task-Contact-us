
function handleSubmit() {
    let nameId, EmailId, messageId;
    nameId = document.querySelector("#name").value
    EmailId = document.querySelector("#email").value
    messageId = document.querySelector("#message").value
    if (nameId === "" || EmailId === "" || messageId === "") {
        alert("field are required")
    }
    else {
        obj = {
            name: nameId,
            email: EmailId,
            message: messageId
        }
        localStorage.setItem("form-data", JSON.stringify(obj))
        location.href = "success.html"
    }

}

function view() {
    let getdata = JSON.parse(localStorage.getItem("form-data"))
    document.querySelector("#nameli").innerHTML = `Name: ${getdata.name}`
    document.querySelector("#emaili").innerHTML = `Email: ${getdata.email}`
    document.querySelector("#messageli").innerHTML = `Message: ${getdata.message}`
}
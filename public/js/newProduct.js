//DOM

const formCargaProducts = document.querySelector("#product-form");
const inputId = document.querySelector("#id-data");
const inputCode = document.querySelector("#code-input");
const inputTitle = document.querySelector("#title-input");
const inputDescription = document.querySelector("#description-input");
const selectCategory = document.querySelector("#category-select");
const inputStock = document.querySelector("#stock-input");
const inputPrice = document.querySelector("#price-input");
const inputThumbnail = document.querySelector("#thumbnail-input");
const btnSerch = document.querySelector("#sercher-btn");
const btnDelete = document.querySelector("#deleter-btn");
const btnEdit = document.querySelector("#updater-btn");
const btnSave = document.querySelector("#save");
const backWind = document.querySelector("#back-to-products");

//FORM
if (
  formCargaProducts instanceof HTMLFormElement &&
  inputId instanceof HTMLInputElement &&
  inputCode instanceof HTMLInputElement &&
  inputTitle instanceof HTMLInputElement &&
  inputDescription instanceof HTMLInputElement &&
  selectCategory instanceof HTMLSelectElement &&
  inputStock instanceof HTMLInputElement &&
  inputPrice instanceof HTMLInputElement &&
  inputThumbnail instanceof HTMLInputElement
) {
  formCargaProducts.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      code: inputCode.value,
      title: inputTitle.value,
      description: inputDescription.value,
      category: selectCategory.value,
      stock: inputStock.value,
      price: inputPrice.value,
      thumbnail: inputThumbnail.value,
    };

    console.log(data);
    if (!inputId.value) {
      const { status } = await fetch("api/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (status === 200) {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Added product`,
          icon: "success",
          background: "#bd9cfa",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
        window.location.href = "/newproducts";
      } else {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Create Failed`,
          icon: "error",
          background: "#600252",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
        console.log("Created Fail" + status);
      }
    } else {
      const { status } = await fetch(`api/products/${inputId.value}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (status === 200) {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Added product`,
          icon: "success",
          background: "#bd9cfa",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
        window.location.href = "/newproducts";
      } else {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Create Failed`,
          icon: "error",
          background: "#600252",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
        console.log("Created Fail" + status);
      }
    }
  });
}

//SERCH
async function SerchProduct(code) {
  event?.preventDefault;
  const FETCH_URL = `http://localhost:8080/api/products/code/${code}`;
  await fetch(FETCH_URL, { method: "GET" })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((producto) => {
      if (!producto) {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `No Products Matched`,
          icon: "error",
          background: "#600252",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
        console.log("Not Found");
      }
      if (
        inputId instanceof HTMLInputElement &&
        inputCode instanceof HTMLInputElement &&
        inputTitle instanceof HTMLInputElement &&
        inputDescription instanceof HTMLInputElement &&
        selectCategory instanceof HTMLSelectElement &&
        inputStock instanceof HTMLInputElement &&
        inputPrice instanceof HTMLInputElement &&
        inputThumbnail instanceof HTMLInputElement &&
        btnDelete instanceof HTMLButtonElement &&
        btnEdit instanceof HTMLButtonElement &&
        btnSave instanceof HTMLButtonElement &&
        btnSerch instanceof HTMLButtonElement &&
        backWind instanceof HTMLAnchorElement
      ) {
        inputId.value = producto.id;
        inputTitle.value = producto.title;
        inputDescription.value = producto.description;
        selectCategory.value = producto.category;
        inputStock.value = producto.stock;
        inputPrice.value = producto.price;
        inputThumbnail.value = producto.thumbnail[0];
        inputId.disabled = true;
        inputCode.disabled = true;
        inputTitle.disabled = true;
        inputDescription.disabled = true;
        selectCategory.disabled = true;
        inputStock.disabled = true;
        inputPrice.disabled = true;
        inputThumbnail.disabled = true;
        btnSerch.disabled = true;
        btnDelete.disabled = false;
        btnEdit.disabled = false;
        btnSave.disabled = true;
        backWind.setAttribute("href", "/newproducts");
      }
    });
}

//DELETE
async function delProduct(id) {
  event?.preventDefault;
  const FETCH_URL = `http://localhost:8080/api/products/${id}`;
  const { status } = await fetch(FETCH_URL, { method: "DELETE" });
  if (status === 204) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      showConfirmButton: true,
      title: `Deleted product`,
      icon: "success",
      background: "#bd9cfa",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
    window.location.href = "/newproducts";
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      showConfirmButton: true,
      title: `Delete Failed`,
      icon: "error",
      background: "#600252",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
    console.log("Deleted Fail" + status);
  }
}

//UPDATE
async function updProduct() {
  event?.preventDefault;
  if (
    inputId instanceof HTMLInputElement &&
    inputCode instanceof HTMLInputElement &&
    inputTitle instanceof HTMLInputElement &&
    inputDescription instanceof HTMLInputElement &&
    selectCategory instanceof HTMLSelectElement &&
    inputStock instanceof HTMLInputElement &&
    inputPrice instanceof HTMLInputElement &&
    inputThumbnail instanceof HTMLInputElement &&
    btnDelete instanceof HTMLButtonElement &&
    btnEdit instanceof HTMLButtonElement &&
    btnSave instanceof HTMLButtonElement &&
    btnSerch instanceof HTMLButtonElement &&
    backWind instanceof HTMLAnchorElement
  ) {
    inputCode.disabled = true;
    inputTitle.disabled = false;
    inputDescription.disabled = false;
    selectCategory.disabled = false;
    inputStock.disabled = false;
    inputPrice.disabled = false;
    inputThumbnail.disabled = false;
    btnSerch.disabled = true;
    btnDelete.disabled = true;
    btnEdit.disabled = true;
    btnSave.disabled = false;
    backWind.setAttribute("href", "/newproducts");
  }
}
